// Forge runtime — the model call. Talks to the Anthropic Messages API (tools enabled),
// or — with FORGE_BACKEND=claude-cli — thinks through the local Claude Code CLI on the
// maintainer's subscription instead (backend-claude-cli.mjs), no API key or per-token
// billing involved. Falls back to a deterministic stub when --dry-run or when neither
// backend is configured, so the loop is testable without a key.
//
// Robustness (live API runs only): transient failures (429 / 5xx / network) are retried
// with exponential backoff that honors any Retry-After header; every call surfaces token
// `usage`; and `trimMessages` keeps a long transcript inside a character budget without
// ever dropping the first user turn or the last tool result. None of this touches the
// dry-run path, which makes no network calls and reports zero usage.
import { cliBackendEnabled, cliAvailable, callClaudeCli, cliPreflight } from './backend-claude-cli.mjs';

const ZERO_USAGE = { input_tokens: 0, output_tokens: 0 };

// Backend resolution, in priority order:
//   1. FORGE_BACKEND=claude-cli — forced subscription thinking.
//   2. Any other explicit FORGE_BACKEND value — never auto-switch away from it.
//   3. ANTHROPIC_API_KEY present — the API path (existing behaviour, unchanged).
//   4. No backend forced, no key, but the claude CLI is on PATH — auto-select the
//      subscription backend, so a machine with Claude Code logged in runs live with
//      ZERO configuration. (Explicitly want offline? Use --dry-run or FORGE_BACKEND=api.)
function useCliBackend() {
  if (cliBackendEnabled()) return true;
  if (process.env.FORGE_BACKEND) return false;
  if (process.env.ANTHROPIC_API_KEY) return false;
  return cliAvailable();
}

export async function callModel({ system, messages, tools, model, dryRun }) {
  if (dryRun) {
    const s = stub(messages);
    return { ...s, usage: ZERO_USAGE };
  }
  // Subscription-powered thinking (forced or auto-selected) — same {content, stop_reason,
  // usage} shape, so the loop never knows which backend thought.
  if (useCliBackend()) {
    return callClaudeCli({ system, messages, tools, model });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    const s = stub(messages);
    return { ...s, usage: ZERO_USAGE };
  }

  // Model-agnostic: the id flows in only from run.mjs (FORGE_MODEL). No hardcoded
  // default anywhere — a live run without a model is an explicit error.
  if (!model) throw new Error('FORGE_MODEL is required for a live run');

  const data = await callWithRetry({
    body: JSON.stringify({ model, max_tokens: maxTokens(), system, messages, tools }),
  });
  return {
    content: data.content,
    stop_reason: data.stop_reason,
    usage: normalizeUsage(data.usage),
  };
}

// Output ceiling for a single model call. Surfaced as FORGE_MAX_TOKENS so a live run can
// be capped without code edits; defaults to 2048. Model-agnostic — no provider coupling.
export function maxTokens() {
  const n = Number(process.env.FORGE_MAX_TOKENS);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 2048;
}

// Preflight: a cheap readiness probe run BEFORE a real loop. It answers "can this run
// actually reach a model?" without spending a full turn. Under --dry-run (or no key) it
// short-circuits to a deterministic stubbed verdict so the smoke path needs no model and
// no network. A live preflight requires FORGE_MODEL and ANTHROPIC_API_KEY to be present —
// it does NOT make a network call here (keeping it free and offline-safe); it validates
// that the run is configured to reach a model. Returns { ok, mode, model, maxTokens, reason }.
export async function preflight({ model, dryRun } = {}) {
  if (dryRun) {
    return {
      ok: true,
      mode: 'dry-run',
      model: model || null,
      maxTokens: maxTokens(),
      reason: 'dry-run — model calls are stubbed',
    };
  }
  // The CLI-based backends need no model id and no API key — only a reachable `claude`
  // binary. Probed with --version (free: no prompt is spent). claude-native never routes
  // through callModel (native.mjs owns the whole run), but its readiness question is the
  // same one, so it shares this probe.
  if (useCliBackend() || process.env.FORGE_BACKEND === 'claude-native') {
    const p = cliPreflight();
    const mode = process.env.FORGE_BACKEND === 'claude-native'
      ? 'claude-native'
      : cliBackendEnabled() ? 'claude-cli' : 'claude-cli (auto)';
    return { ok: p.ok, mode, model: model || '(cli default)', maxTokens: maxTokens(), reason: p.reason };
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      ok: true,
      mode: 'dry-run',
      model: model || null,
      maxTokens: maxTokens(),
      reason: 'no ANTHROPIC_API_KEY and no claude CLI — model calls are stubbed',
    };
  }
  if (!model) {
    return { ok: false, mode: 'live', model: null, maxTokens: maxTokens(), reason: 'FORGE_MODEL is required for a live run' };
  }
  return { ok: true, mode: 'live', model, maxTokens: maxTokens(), reason: 'model id and API key present' };
}

// Retry on transient failure with exponential backoff. Retries 429, 5xx, and network
// errors; a 4xx other than 429 is a real client error and is surfaced immediately.
// Honors a Retry-After header (seconds) when present. FORGE_MAX_RETRIES default 4.
async function callWithRetry({ body }) {
  const maxRetries = Number(process.env.FORGE_MAX_RETRIES) || 4;
  let attempt = 0;
  for (;;) {
    let res, networkErr;
    try {
      res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body,
      });
    } catch (e) {
      networkErr = e; // DNS / connection reset / timeout — transient, retryable
    }

    if (!networkErr) {
      if (res.ok) {
        const data = await res.json();
        if (data.type === 'error' || data.error) {
          throw new Error('Anthropic API error: ' + JSON.stringify(data.error || data));
        }
        return data;
      }
      // Non-2xx. 429 and 5xx are transient; everything else is a hard client error.
      const transient = res.status === 429 || res.status >= 500;
      if (!transient || attempt >= maxRetries) {
        const text = await safeText(res);
        throw new Error(`Anthropic API error (HTTP ${res.status}): ${text}`);
      }
      await sleep(backoffMs(attempt, res.headers.get('retry-after')));
      attempt++;
      continue;
    }

    // Network error path.
    if (attempt >= maxRetries) throw networkErr;
    await sleep(backoffMs(attempt, null));
    attempt++;
  }
}

// Exponential backoff with full jitter, capped at 30s. A Retry-After header (seconds)
// takes precedence — the server told us exactly how long to wait.
function backoffMs(attempt, retryAfter) {
  if (retryAfter != null) {
    const secs = Number(retryAfter);
    if (Number.isFinite(secs) && secs >= 0) return Math.min(secs * 1000, 30000);
  }
  const base = Math.min(1000 * 2 ** attempt, 30000);
  return Math.floor(base / 2 + Math.random() * (base / 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function safeText(res) {
  try { return await res.text(); } catch { return '<no body>'; }
}

function normalizeUsage(usage) {
  if (!usage) return { ...ZERO_USAGE };
  return {
    input_tokens: Number(usage.input_tokens) || 0,
    output_tokens: Number(usage.output_tokens) || 0,
  };
}

// Trim the transcript to a character budget so long runs stay within context. We keep
// the FIRST user turn (the goal + retrieved memory — the run's anchor) and the LAST
// message (the freshest tool result the model must react to) no matter what, dropping
// the oldest middle turns first and leaving a marker so the elision is visible. Pure and
// model-agnostic — used by the loop before each call.
export function trimMessages(messages, { maxChars = Number(process.env.FORGE_MAX_CHARS) || 60000 } = {}) {
  if (!Array.isArray(messages) || messages.length <= 2) return messages;
  if (sizeOf(messages) <= maxChars) return messages;

  const first = messages[0];
  const last = messages[messages.length - 1];
  const middle = messages.slice(1, -1);

  // Drop oldest middle turns until we fit (or only the anchors remain).
  let kept = middle;
  while (kept.length && sizeOf([first, ...kept, last]) > maxChars) {
    kept = kept.slice(1);
  }

  const droppedCount = middle.length - kept.length;
  if (droppedCount <= 0) return messages; // nothing to gain; leave intact
  const marker = {
    role: 'user',
    content: `[runtime: trimmed ${droppedCount} earlier turn(s) to stay within the context budget]`,
  };
  return [first, marker, ...kept, last];
}

function sizeOf(messages) {
  let n = 0;
  for (const m of messages) {
    n += typeof m.content === 'string' ? m.content.length : JSON.stringify(m.content).length;
  }
  return n;
}

// Deterministic stand-in: plan → act (list_dir) → observe → finish. Proves the loop.
// Sentinels (opening goal text):
//   "delegate-smoke"          — one `delegate` call, then finish. Exercises the sequential
//                                sub-delegation path end-to-end offline.
//   "parallel-delegate-smoke" — TWO `delegate` calls in the SAME turn, then finish.
//                                Exercises the concurrent fan-out path (loop.mjs) offline —
//                                both sub-runs must complete and both tool_results must be
//                                threaded back before the parent proceeds.
//   "checkpoint-smoke"        — repeats a harmless `list_dir` for enough turns to cross the
//                                default checkpoint interval (5 steps) before finishing, so
//                                the periodic self-verification note (checkpoint.mjs) fires
//                                at least once, exercised end-to-end offline.
//   "resume-smoke"            — finishes immediately, reporting whether a `--resume`-built
//                                resume context (see resume.mjs) was actually present in the
//                                FULL opening text. Unlike the other sentinels this checks
//                                firstUserText (pre-marker), not firstUserGoalText, since
//                                resume context is deliberately prepended BEFORE "# Goal\n".
// The SUB-run's goal won't contain any sentinel, so it falls through to the normal
// list_dir → finish branch — recursion terminates without the depth cap ever being needed.
function stub(messages) {
  const hasResult = messages.some(
    (m) => Array.isArray(m.content) && m.content.some((c) => c.type === 'tool_result')
  );

  // Side-call prompts from deliberate.mjs / critic.mjs are single-turn message arrays
  // whose text QUOTES the run's goal — including sentinel goals — so they are handled
  // FIRST, on their own ^-anchored markers, before any sentinel matching can misfire.
  const fullOpening = firstUserText(messages);
  if (/^\[deliberation:propose\]/.test(fullOpening)) {
    const cand = (fullOpening.match(/Candidate (\d+)/) || [])[1] || '1';
    return {
      content: [{ type: 'text', text: `Candidate ${cand}: stop surveying directories and read the one file the plan actually names, end to end.` }],
      stop_reason: 'end_turn',
    };
  }
  if (/^\[deliberation:judge\]/.test(fullOpening)) {
    return {
      content: [{ type: 'text', text: 'Best: candidate 1 — "stop surveying directories and read the one file the plan actually names, end to end." It changes the KIND of action, not just its target.' }],
      stop_reason: 'end_turn',
    };
  }
  if (/^\[critic:review\]/.test(fullOpening)) {
    const isFinish = /Pending action: finish/.test(fullOpening);
    return {
      content: [{ type: 'text', text: isFinish
        ? 'CONCERN: the plan may still have pending work — confirm before finishing.'
        : 'OK — the action matches the current plan step.' }],
      stop_reason: 'end_turn',
    };
  }

  const openingText = firstUserGoalText(messages);
  const isDelegateSentinel = /delegate-smoke/i.test(openingText);
  const isParallelSentinel = /parallel-delegate-smoke/i.test(openingText);
  const isCheckpointSentinel = /checkpoint-smoke/i.test(openingText);
  const isReadManySentinel = /readmany-smoke/i.test(openingText);
  const isCsvSentinel = /csv-smoke/i.test(openingText);
  const isRunCodeSentinel = /runcode-smoke/i.test(openingText);
  const isPptxSentinel = /pptx-smoke/i.test(openingText);
  // deliberation-smoke reuses the stagnation scenario: the point of deliberation is that
  // it FIRES on a stagnant checkpoint, so the same stall is the right stage for both.
  const isStagnationSentinel = /stagnation-smoke|deliberation-smoke/i.test(openingText);
  const isResumeSentinel = /resume-smoke/i.test(openingText);
  const isCriticSentinel = /critic-smoke/i.test(openingText);
  const isVirtualContextSentinel = /virtualcontext-smoke/i.test(openingText);

  if (isCriticSentinel) {
    // write_file → run_gate → finish → finish. With FORGE_CRITIC=on the first finish is
    // refused by the one-time speed bump (the stub critic always CONCERNs a finish), and
    // the second passes — exercising both the write-review ride-along and the bump.
    const priorSteps = messages.filter((m) => m.role === 'assistant').length;
    if (priorSteps === 0) {
      return {
        content: [
          { type: 'text', text: 'Plan: write a note, verify with the gate, then finish.' },
          { type: 'tool_use', id: 'cw1', name: 'write_file', input: { path: 'forge/examples/balance-scout/workspace/critic-note.md', content: '# Critic smoke\nA one-line note.\n' } },
        ],
        stop_reason: 'tool_use',
      };
    }
    if (priorSteps === 1) {
      return {
        content: [
          { type: 'text', text: 'Verifying before finishing.' },
          { type: 'tool_use', id: 'cg1', name: 'run_gate', input: {} },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: priorSteps === 2 ? 'Attempting to finish.' : 'The critic already had its say — insisting.' },
        { type: 'tool_use', id: `cf${priorSteps}`, name: 'finish', input: { summary: 'Dry-run complete — the critic path works end-to-end.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isVirtualContextSentinel) {
    // Step 1 plants a distinctive fact (the "zephyr-quokka" marker), then pads several
    // turns with bulk so a small FORGE_MAX_CHARS forces trimming — archiving that early
    // turn. A late step's reflection mentions the marker again, so the recall retrieval
    // must resurface the archived turn. Run with FORGE_MAX_CHARS≈2500 to force the trim.
    //
    // Turn index comes from the LAST tool_result's id (vc0, vc1, …) — NOT from counting
    // assistant turns: this sentinel runs with trimming ACTIVE, and trimming drops old
    // assistant turns, which would make a turn-count stall and repeat itself. The last
    // message is the one thing trimMessages guarantees to keep.
    const lastUser = [...messages].reverse().find(
      (m) => m.role === 'user' && Array.isArray(m.content) && m.content.some((c) => c.type === 'tool_result')
    );
    const lastId = lastUser ? (lastUser.content.find((c) => c.type === 'tool_result') || {}).tool_use_id || '' : '';
    const idx = /^vc\d+$/.test(lastId) ? Number(lastId.slice(2)) + 1 : 0;
    const paths = ['.', 'forge', 'kernel', 'government', 'scripts', 'installer', 'brand', 'site'];
    if (idx === 0) {
      return {
        content: [
          { type: 'text', text: 'Early note: the priority target is the zephyr-quokka marker in the installer folder. Remember zephyr-quokka.' },
          { type: 'tool_use', id: 'vc0', name: 'list_dir', input: { path: '.' } },
        ],
        stop_reason: 'tool_use',
      };
    }
    if (idx < 6) {
      const pad = `Step ${idx + 1}: continuing the survey. ` +
        'Filler analysis prose to inflate the transcript so the context trim fires. '.repeat(6);
      return {
        content: [
          { type: 'text', text: pad },
          { type: 'tool_use', id: `vc${idx}`, name: 'list_dir', input: { path: paths[idx % paths.length] } },
        ],
        stop_reason: 'tool_use',
      };
    }
    if (idx === 6) {
      return {
        content: [
          { type: 'text', text: 'Checking back: what was the priority target? The early note said zephyr-quokka — resurfacing that context.' },
          { type: 'tool_use', id: 'vc6', name: 'list_dir', input: { path: 'docs' } },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Recall verified.' },
        { type: 'tool_use', id: 'vcf', name: 'finish', input: { summary: 'Dry-run complete — trimming archived early turns and recall resurfaced them.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isResumeSentinel) {
    const sawResume = /RESUMING a prior run/.test(firstUserText(messages));
    return {
      content: [
        { type: 'text', text: sawResume ? 'Resume context was present in the opening turn.' : 'No resume context in the opening turn.' },
        { type: 'tool_use', id: 'sr1', name: 'finish', input: { summary: sawResume ? 'resume-context-seen' : 'resume-context-absent' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isStagnationSentinel) {
    // Step 1: record a 2-item plan and never advance it. Steps 2-10: nine harmless, varied
    // reads (never 3x identical, so the repeat-detector never trips) — the loop keeps
    // "doing something" but the PLAN never moves. Checkpoints fire at step 5 (first — never
    // stagnant, nothing to compare against) and step 10 (second — planDone unchanged since
    // step 5 → stagnant should fire here). Step 11: finish.
    const priorSteps = messages.filter((m) => m.role === 'assistant').length;
    if (priorSteps === 0) {
      return {
        content: [
          { type: 'text', text: 'Plan: two steps, then investigate without ever completing either.' },
          { type: 'tool_use', id: 'sp1', name: 'plan', input: { steps: ['Investigate the layout', 'Write a report'] } },
        ],
        stop_reason: 'tool_use',
      };
    }
    if (priorSteps < 10) {
      const paths = ['.', 'forge', 'kernel', 'government', 'scripts', 'installer', 'brand', 'site', 'docs'];
      return {
        content: [
          { type: 'text', text: `Step ${priorSteps + 1}: still just looking around.` },
          { type: 'tool_use', id: `sd${priorSteps}`, name: 'list_dir', input: { path: paths[priorSteps % paths.length] } },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Giving up on the plan, finishing without completing it.' },
        { type: 'tool_use', id: 'sf', name: 'finish', input: { summary: 'Dry-run complete — ran long enough to exercise stagnation detection.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isPptxSentinel) {
    // write_pptx → run_gate → finish (a real, genuinely executed library call — --dry-run
    // only stubs the MODEL): proves the real deck-generation path AND, since write_pptx now
    // arms Directive #9 like every other write_* tool (loop.mjs), that the gate-before-finish
    // guardrail is actually satisfied here — same shape as csv-smoke above.
    const priorSteps = messages.filter((m) => m.role === 'assistant').length;
    if (priorSteps === 0) {
      return {
        content: [
          { type: 'text', text: 'Plan: write a two-slide deck, verify with the gate, then finish.' },
          { type: 'tool_use', id: 'p1', name: 'write_pptx', input: {
            path: 'forge/examples/balance-scout/workspace/deck.pptx',
            title: 'Smoke Test Deck',
            slides: [
              { title: 'Slide One', bullets: ['First point', 'Second point'] },
              { title: 'Slide Two', bullets: ['Only point'] },
            ],
          } },
        ],
        stop_reason: 'tool_use',
      };
    }
    if (priorSteps === 1) {
      return {
        content: [
          { type: 'text', text: 'Verifying before finishing.' },
          { type: 'tool_use', id: 'pg1', name: 'run_gate', input: {} },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Deck written.' },
        { type: 'tool_use', id: 'pf', name: 'finish', input: { summary: 'Dry-run complete — the write_pptx path works end-to-end.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isRunCodeSentinel) {
    // One run_code call (genuinely executed — --dry-run only stubs the MODEL, not tool
    // execution), then finish. Proves the real spawnSync path: separate process, capped
    // env, timeout, output capture.
    if (!hasResult) {
      return {
        content: [
          { type: 'text', text: 'Plan: run a short script, then finish.' },
          { type: 'tool_use', id: 'x1', name: 'run_code', input: { code: 'console.log(2 + 2)' } },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Observed the script output.' },
        { type: 'tool_use', id: 'xf', name: 'finish', input: { summary: 'Dry-run complete — the run_code path works end-to-end.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isReadManySentinel) {
    // One read_many call (two real, always-present repo files), then finish.
    if (!hasResult) {
      return {
        content: [
          { type: 'text', text: 'Plan: read two files in one batched call, then finish.' },
          { type: 'tool_use', id: 'r1', name: 'read_many', input: { paths: ['package.json', 'kernel/VERSION'] } },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Observed both files.' },
        { type: 'tool_use', id: 'rf', name: 'finish', input: { summary: 'Dry-run complete — the read_many batch path works end-to-end.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isCsvSentinel) {
    // write_csv → run_gate → finish: exercises the write-then-gate-before-finish guardrail
    // (Directive #9) on the new tool, the same shape write_file already has to satisfy.
    const priorSteps = messages.filter((m) => m.role === 'assistant').length;
    if (priorSteps === 0) {
      return {
        content: [
          { type: 'text', text: 'Plan: write a CSV report, verify with the gate, then finish.' },
          { type: 'tool_use', id: 'w1', name: 'write_csv', input: { path: 'forge/examples/balance-scout/workspace/report.csv', headers: ['metric', 'value'], rows: [['runs', '1'], ['note', 'has a, comma']] } },
        ],
        stop_reason: 'tool_use',
      };
    }
    if (priorSteps === 1) {
      return {
        content: [
          { type: 'text', text: 'Verifying before finishing.' },
          { type: 'tool_use', id: 'g1', name: 'run_gate', input: {} },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Gate clean.' },
        { type: 'tool_use', id: 'cf', name: 'finish', input: { summary: 'Dry-run complete — the write_csv path works end-to-end.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (isCheckpointSentinel) {
    // Each prior assistant turn is one completed step; take 6 (> the default 5-step
    // checkpoint interval) before finishing, so a checkpoint is guaranteed to fire. Alternate
    // the listed path each step so the loop's repeat-detector (3× identical call → "stuck")
    // never trips — a real long run naturally varies its calls; this stub must too.
    const priorSteps = messages.filter((m) => m.role === 'assistant').length;
    const paths = ['.', 'forge', 'kernel', 'government', 'scripts', 'installer'];
    if (priorSteps < 6) {
      return {
        content: [
          { type: 'text', text: `Plan: step ${priorSteps + 1} of a longer run.` },
          { type: 'tool_use', id: `c${priorSteps + 1}`, name: 'list_dir', input: { path: paths[priorSteps % paths.length] } },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Observed enough steps.' },
        { type: 'tool_use', id: 'cf', name: 'finish', input: { summary: 'Dry-run complete — ran long enough for a checkpoint to fire.' } },
      ],
      stop_reason: 'tool_use',
    };
  }

  if (!hasResult) {
    if (isParallelSentinel) {
      return {
        content: [
          { type: 'text', text: 'Plan: delegate two independent sub-tasks in parallel, then finish.' },
          { type: 'tool_use', id: 'd1', name: 'delegate', input: { task: 'Sub-task A: inspect the workspace and finish.' } },
          { type: 'tool_use', id: 'd2', name: 'delegate', input: { task: 'Sub-task B: inspect the workspace and finish.' } },
        ],
        stop_reason: 'tool_use',
      };
    }
    if (isDelegateSentinel) {
      return {
        content: [
          { type: 'text', text: 'Plan: delegate one sub-task, then finish.' },
          { type: 'tool_use', id: 'd1', name: 'delegate', input: { task: 'Sub-task: inspect the workspace and finish.' } },
        ],
        stop_reason: 'tool_use',
      };
    }
    return {
      content: [
        { type: 'text', text: 'Plan: inspect the workspace, then finish.' },
        { type: 'tool_use', id: 't1', name: 'list_dir', input: { path: '.' } },
      ],
      stop_reason: 'tool_use',
    };
  }
  const summary = isParallelSentinel
    ? 'Dry-run complete — the parallel delegate fan-out path works end-to-end.'
    : isDelegateSentinel
    ? 'Dry-run complete — the delegate sub-run path works end-to-end.'
    : 'Dry-run complete — the plan → act → observe → finish loop works end-to-end.';
  return {
    content: [
      { type: 'text', text: 'Observed the result.' },
      { type: 'tool_use', id: 't2', name: 'finish', input: { summary } },
    ],
    stop_reason: 'tool_use',
  };
}

// The opening user turn's raw text (goal + any retrieved memory, exactly as sent to a real
// model). Only used internally by firstUserGoalText below.
function firstUserText(messages) {
  const first = messages.find((m) => m.role === 'user');
  if (!first) return '';
  if (typeof first.content === 'string') return first.content;
  if (Array.isArray(first.content)) {
    return first.content.filter((c) => c.type === 'text').map((c) => c.text).join('\n');
  }
  return '';
}

// The GOAL portion only — used by the stub to detect sentinels. loop.mjs composes the
// opening turn as `memoryBlock + "\n\n---\n\n# Goal\n" + goal` (memory.mjs), so slicing after
// the LAST "# Goal\n" marker isolates the goal even when a memory block is present. This
// matters for determinism: retrieved memory is literal past-run text — including quoted
// goals from prior lessons (e.g. "Goal \"parallel-delegate-smoke...\"" appended by
// appendLesson) — so matching sentinels against the FULL opening text lets an unrelated
// prior run's lesson accidentally re-trigger a stub branch it was never asked for. Falls
// back to the whole text when there is no marker (no memory block, or a caller that bypasses
// loop.mjs's composition entirely, e.g. a unit test).
function firstUserGoalText(messages) {
  const full = firstUserText(messages);
  const marker = '# Goal\n';
  const idx = full.lastIndexOf(marker);
  return idx === -1 ? full : full.slice(idx + marker.length);
}
