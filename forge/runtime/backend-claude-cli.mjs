// Forge runtime — the claude-cli backend. Lets a live run think through the LOCAL
// Claude Code CLI (`claude -p`, headless) instead of the Anthropic API: the CLI
// authenticates with the maintainer's Claude subscription, so Forge runs cost no
// per-token API billing — they draw on the plan the maintainer already pays for.
//
// Division of labour is unchanged and deliberate: the CLI is ONLY the brain. Forge's own
// runtime still executes every tool, enforces every guardrail (workspace confinement,
// Directive #9, depth caps), and writes the trace. The CLI's own tools are explicitly
// disallowed on every call — it reasons over a rendered transcript and answers with ONE
// JSON object naming which FORGE tool to call next. A model that cannot touch anything
// cannot bypass the runtime's law.
//
// Enabled by FORGE_BACKEND=claude-cli. Model per step still flows from the cost router
// (--model <id-or-alias>); with no model set the CLI's own default is used, so this
// backend needs neither FORGE_MODEL nor ANTHROPIC_API_KEY to run.
import { spawnSync } from 'node:child_process';

const ZERO_USAGE = { input_tokens: 0, output_tokens: 0 };

// The CLI's own toolbox, denied wholesale so it stays a pure reasoning engine. Names, not
// a wildcard: the CLI has no "deny all" switch, and listing them keeps the intent legible.
const DENIED_CLI_TOOLS = 'Bash,Edit,Write,Read,Glob,Grep,WebFetch,WebSearch,Task,NotebookEdit,TodoWrite';

export function cliBackendEnabled() {
  return process.env.FORGE_BACKEND === 'claude-cli';
}

export function cliTimeoutMs() {
  const n = Number(process.env.FORGE_CLI_TIMEOUT_MS);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 240000; // headless calls are slow; be generous
}

// Readiness probe: can we execute `claude` at all? No prompt is spent — --version only.
export function cliPreflight() {
  const r = runCli(['--version'], '', 15000);
  if (r.error || r.status !== 0) {
    return { ok: false, reason: 'claude CLI not reachable — is Claude Code installed and on PATH? (' + (r.error ? r.error.message : 'exit ' + r.status) + ')' };
  }
  return { ok: true, reason: 'claude CLI reachable (' + String(r.stdout || '').trim() + '), subscription auth' };
}

// One reasoning step: render (system + tools + transcript) into a single prompt, run
// `claude -p` once, parse the JSON protocol reply back into Anthropic-style content
// blocks. Shape-compatible with callModel so loop.mjs never knows which backend thought.
export async function callClaudeCli({ system, messages, tools, model }) {
  const prompt = renderPrompt({ system, messages, tools });
  const args = ['-p', '--output-format', 'json', '--disallowedTools', DENIED_CLI_TOOLS];
  if (model) args.push('--model', model);

  const r = runCli(args, prompt, cliTimeoutMs());
  if (r.error) throw new Error('claude CLI failed to run: ' + r.error.message);
  if (r.status !== 0) {
    throw new Error('claude CLI exited ' + r.status + ': ' + String(r.stderr || r.stdout || '').slice(0, 500));
  }

  let envelope;
  try {
    envelope = JSON.parse(String(r.stdout));
  } catch {
    throw new Error('claude CLI returned non-JSON output: ' + String(r.stdout).slice(0, 300));
  }
  if (envelope.is_error) throw new Error('claude CLI error: ' + String(envelope.result || '').slice(0, 500));

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
    usage: {
      input_tokens: Number(u.input_tokens) || 0,
      output_tokens: Number(u.output_tokens) || 0,
    },
  };
}

// ---- prompt rendering ----

function renderPrompt({ system, messages, tools }) {
  const toolLines = (tools || []).map((t) =>
    `- ${t.name}: ${t.description || ''}\n  input schema: ${JSON.stringify(t.input_schema || {})}`
  );

  const transcript = [];
  for (const m of messages) {
    if (typeof m.content === 'string') {
      transcript.push(`${m.role.toUpperCase()}:\n${m.content}`);
      continue;
    }
    for (const b of m.content || []) {
      if (b.type === 'text' && b.text) transcript.push(`${m.role.toUpperCase()}:\n${b.text}`);
      else if (b.type === 'tool_use') transcript.push(`ASSISTANT called ${b.name} with ${JSON.stringify(b.input || {})}`);
      else if (b.type === 'tool_result') transcript.push(`TOOL RESULT${b.is_error ? ' (ERROR)' : ''}:\n${clip(b.content, 4000)}`);
    }
  }

  return [
    'You are the reasoning engine for an external agent runtime ("Forge"). The RUNTIME — not you — executes tools.',
    'Do NOT use any of your own tools. Decide the single next move and reply with EXACTLY ONE JSON object, no prose before or after, no markdown fence:',
    '{"text":"<one short reflection>","tool_calls":[{"name":"<tool>","input":{...}}]}',
    'Use an empty tool_calls array ONLY if you genuinely cannot act. To end the run, call the `finish` tool with a summary.',
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
