// Forge runtime — the claude-cli backend. Lets a live run think through the LOCAL
// Claude Code CLI (`claude -p`, headless) instead of the Anthropic API: the CLI
// authenticates with the maintainer's Claude subscription, so Forge runs cost no
// per-token API billing — they draw on the plan the maintainer already pays for.
//
// Division of labour is unchanged and deliberate: the CLI is ONLY the brain. Forge's own
// runtime still executes every tool, enforces every guardrail (workspace confinement,
// Directive #9, depth caps), and writes the trace. The CLI's own tools are explicitly
// disallowed on every call — it reasons over the conversation and answers with ONE JSON
// object naming which FORGE tool(s) to call next. A model that cannot touch anything
// cannot bypass the runtime's law.
//
// SESSION CONTINUITY (the latency/token lever): the first call of a run sends the full
// prompt and remembers the CLI session id it created; every later call RESUMES that
// session (`--resume <id>`) and sends ONLY the newest observation — the server-side
// session plus prompt caching carries the history, so each step stops re-paying the whole
// transcript in input tokens and the run behaves like one continuous conversation. The
// session anchor is the run's FIRST message object (trimMessages always preserves it by
// reference), so concurrent runs and one-shot side calls (critic/deliberation) never
// cross-talk. `--resume` may FORK to a new session id on some CLI versions — the returned
// id is re-stored after every call, so the chain follows wherever the CLI leads. Any
// resume failure (dead session, model-switch refusal, parse error) falls back to a fresh
// full-prompt call and a new session — continuity is an optimization, never a
// correctness dependency.
//
// Enabled by FORGE_BACKEND=claude-cli, or AUTO-SELECTED by llm.mjs when no backend is
// forced, no ANTHROPIC_API_KEY exists, and the CLI is on PATH — so a machine with Claude
// Code logged in runs live with ZERO configuration. Model per step still flows from the
// cost router (--model <id-or-alias>); with no model set the CLI's own default is used,
// so this backend needs neither FORGE_MODEL nor ANTHROPIC_API_KEY.
import { spawnSync } from 'node:child_process';

// The CLI's own toolbox, denied wholesale so it stays a pure reasoning engine. Names, not
// a wildcard: the CLI has no "deny all" switch, and listing them keeps the intent legible.
const DENIED_CLI_TOOLS = 'Bash,Edit,Write,Read,Glob,Grep,WebFetch,WebSearch,Task,NotebookEdit,TodoWrite';

// One session per run, keyed by the run's first message OBJECT (never its content):
// trimMessages preserves that object by reference across the whole run, while the
// critic's and deliberation's one-shot message arrays are different objects — they get
// no session and simply do full calls, which is right for one-shots. WeakMap so a
// finished run's entry vanishes with its messages.
const sessions = new WeakMap();

export function cliBackendEnabled() {
  return process.env.FORGE_BACKEND === 'claude-cli';
}

// Is the CLI executable at all? Probed once per process with --version (free — no prompt
// is spent) and cached; used by llm.mjs for zero-config auto-selection.
let _cliAvailable = null;
export function cliAvailable() {
  if (_cliAvailable === null) {
    const r = runCli(['--version'], '', 15000);
    _cliAvailable = !r.error && r.status === 0;
  }
  return _cliAvailable;
}

export function cliTimeoutMs() {
  const n = Number(process.env.FORGE_CLI_TIMEOUT_MS);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 240000; // headless calls are slow; be generous
}

// Readiness probe for preflight: reachable → version string; not → a clear reason.
export function cliPreflight() {
  const r = runCli(['--version'], '', 15000);
  if (r.error || r.status !== 0) {
    return { ok: false, reason: 'claude CLI not reachable — is Claude Code installed and on PATH? (' + (r.error ? r.error.message : 'exit ' + r.status) + ')' };
  }
  return { ok: true, reason: 'claude CLI reachable (' + String(r.stdout || '').trim() + '), subscription auth' };
}

// One reasoning step. Resumes the run's session with only the newest observation when it
// can; falls back to a fresh full-prompt call when it can't. Shape-compatible with
// callModel so loop.mjs never knows which backend thought.
export async function callClaudeCli({ system, messages, tools, model }) {
  const anchor = messages && messages.length ? messages[0] : null;
  const sess = anchor ? sessions.get(anchor) : null;
  const baseArgs = ['-p', '--output-format', 'json', '--disallowedTools', DENIED_CLI_TOOLS];
  if (model) baseArgs.push('--model', model);

  // Resume path: session exists and there is a clean delta (the loop appends exactly one
  // user turn — tool results + injected notes — between calls).
  if (sess && sess.sessionId) {
    const delta = renderDelta(messages);
    if (delta) {
      const r = attempt([...baseArgs, '--resume', sess.sessionId], delta);
      if (r) {
        if (anchor && r.envelope.session_id) sessions.set(anchor, { sessionId: r.envelope.session_id });
        return shapeReply(r.envelope, 'resumed');
      }
      // fall through: dead/refused session → fresh call below re-establishes one
    }
  }

  const full = renderPrompt({ system, messages, tools });
  const r = attempt(baseArgs, full);
  if (!r) throw new Error('claude CLI call failed (see stderr above); after fallback from resume if one was tried');
  if (anchor && r.envelope.session_id) sessions.set(anchor, { sessionId: r.envelope.session_id });
  return shapeReply(r.envelope, sess ? 'restarted' : 'new');
}

// ---- call plumbing ----

// Run once; return { envelope } on success, null on ANY failure (spawn error, non-zero
// exit, non-JSON stdout, CLI-reported error). The caller decides whether null means
// "fall back" (resume path) or "throw" (final path).
function attempt(args, input) {
  const r = runCli(args, input, cliTimeoutMs());
  if (r.error || r.status !== 0) return null;
  let envelope;
  try { envelope = JSON.parse(String(r.stdout)); } catch { return null; }
  if (envelope.is_error) return null;
  return { envelope };
}

function shapeReply(envelope, session) {
  const reply = parseProtocol(String(envelope.result || ''));
  const content = [];
  if (reply.text) content.push({ type: 'text', text: reply.text });
  reply.tool_calls.forEach((c, i) => {
    content.push({ type: 'tool_use', id: `cli_${Date.now()}_${i}`, name: c.name, input: c.input || {} });
  });
  if (!content.length) content.push({ type: 'text', text: String(envelope.result || '').trim() });

  const u = envelope.usage || {};
  return {
    content,
    stop_reason: reply.tool_calls.length ? 'tool_use' : 'end_turn',
    // Extra fields ride along into the trace (loop stores the usage object verbatim):
    // cache reads prove continuity is paying, `session` says how this step thought.
    usage: {
      input_tokens: Number(u.input_tokens) || 0,
      output_tokens: Number(u.output_tokens) || 0,
      cache_read_input_tokens: Number(u.cache_read_input_tokens) || 0,
      session,
    },
  };
}

// ---- prompt rendering ----

const PROTOCOL = [
  'You are the reasoning engine for an external agent runtime ("Forge"). The RUNTIME — not you — executes tools.',
  'Do NOT use any of your own tools. Decide the next move and reply with EXACTLY ONE JSON object, no prose before or after, no markdown fence:',
  '{"text":"<one short reflection>","tool_calls":[{"name":"<tool>","input":{...}}]}',
  'tool_calls may contain SEVERAL independent calls — batch independent reads into one reply instead of spending a turn on each.',
  'Use an empty tool_calls array ONLY if you genuinely cannot act. To end the run, call the `finish` tool with a summary.',
].join('\n');

function renderPrompt({ system, messages, tools }) {
  const toolLines = (tools || []).map((t) =>
    `- ${t.name}: ${t.description || ''}\n  input schema: ${JSON.stringify(t.input_schema || {})}`
  );

  const transcript = [];
  for (const m of messages) transcript.push(...renderMessage(m));

  return [
    PROTOCOL,
    '',
    '## Runtime tools available to you (executed by the runtime when you name them):',
    ...toolLines,
    '',
    '## Agent contract (system prompt):',
    system || '',
    '',
    '## Transcript so far:',
    ...transcript,
    '',
    'Reply now with the single JSON object.',
  ].join('\n');
}

// The resume delta: the newest user turn only (tool results + injected notes) — the
// session already holds everything before it, including our own last reply. Returns ''
// when the tail isn't a user turn (unexpected shape → caller does a full call instead).
function renderDelta(messages) {
  const last = messages[messages.length - 1];
  if (!last || last.role !== 'user') return '';
  const lines = renderMessage(last);
  if (!lines.length) return '';
  return lines.join('\n') + '\n\nReply now with the single JSON object (same protocol).';
}

function renderMessage(m) {
  if (typeof m.content === 'string') return [`${m.role.toUpperCase()}:\n${m.content}`];
  const out = [];
  for (const b of m.content || []) {
    if (b.type === 'text' && b.text) out.push(`${m.role.toUpperCase()}:\n${b.text}`);
    else if (b.type === 'tool_use') out.push(`ASSISTANT called ${b.name} with ${JSON.stringify(b.input || {})}`);
    else if (b.type === 'tool_result') out.push(`TOOL RESULT${b.is_error ? ' (ERROR)' : ''}:\n${clip(b.content, 4000)}`);
  }
  return out;
}

// ---- protocol parsing ----

// Tolerant extraction: the reply SHOULD be a bare JSON object, but a model that wraps it
// in a fence or adds a stray sentence must not crash the run. Falls back to text-only
// (the loop's own "use a tool" nudge handles that case).
function parseProtocol(text) {
  const raw = text.trim();
  const candidates = [];
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) candidates.push(fenced[1]);
  candidates.push(raw);
  const brace = raw.indexOf('{');
  if (brace > 0) candidates.push(raw.slice(brace));

  for (const c of candidates) {
    try {
      const obj = JSON.parse(c.trim());
      if (obj && typeof obj === 'object') {
        const calls = Array.isArray(obj.tool_calls) ? obj.tool_calls.filter((x) => x && typeof x.name === 'string') : [];
        return { text: typeof obj.text === 'string' ? obj.text : '', tool_calls: calls };
      }
    } catch { /* try the next candidate */ }
  }
  return { text: raw, tool_calls: [] };
}

// ---- process plumbing ----

// `shell: true` on Windows so the npm-installed `claude.cmd` shim resolves; the prompt
// travels via stdin, never argv, so no quoting can break and no length limit applies.
function runCli(args, input, timeout) {
  return spawnSync('claude', args, {
    input,
    timeout,
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
    shell: process.platform === 'win32',
    windowsHide: true,
  });
}

function clip(v, max) {
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}
