// Forge runtime — the model call. Talks to the Anthropic Messages API (tools enabled).
// Falls back to a deterministic stub when --dry-run or no ANTHROPIC_API_KEY, so the
// loop is testable without a key.
//
// Robustness (live runs only): transient failures (429 / 5xx / network) are retried with
// exponential backoff that honors any Retry-After header; every call surfaces token
// `usage`; and `trimMessages` keeps a long transcript inside a character budget without
// ever dropping the first user turn or the last tool result. None of this touches the
// dry-run path, which makes no network calls and reports zero usage.

const ZERO_USAGE = { input_tokens: 0, output_tokens: 0 };

export async function callModel({ system, messages, tools, model, dryRun }) {
  if (dryRun || !process.env.ANTHROPIC_API_KEY) {
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
  if (dryRun || !process.env.ANTHROPIC_API_KEY) {
    return {
      ok: true,
      mode: 'dry-run',
      model: model || null,
      maxTokens: maxTokens(),
      reason: 'dry-run / no ANTHROPIC_API_KEY — model calls are stubbed',
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
// The SUB-run's goal won't contain any sentinel, so it falls through to the normal
// list_dir → finish branch — recursion terminates without the depth cap ever being needed.
function stub(messages) {
  const hasResult = messages.some(
    (m) => Array.isArray(m.content) && m.content.some((c) => c.type === 'tool_result')
  );
  const openingText = firstUserGoalText(messages);
  const isDelegateSentinel = /delegate-smoke/i.test(openingText);
  const isParallelSentinel = /parallel-delegate-smoke/i.test(openingText);
  const isCheckpointSentinel = /checkpoint-smoke/i.test(openingText);
  const isReadManySentinel = /readmany-smoke/i.test(openingText);
  const isCsvSentinel = /csv-smoke/i.test(openingText);

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
