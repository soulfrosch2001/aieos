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
    body: JSON.stringify({ model, max_tokens: 2048, system, messages, tools }),
  });
  return {
    content: data.content,
    stop_reason: data.stop_reason,
    usage: normalizeUsage(data.usage),
  };
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
function stub(messages) {
  const hasResult = messages.some(
    (m) => Array.isArray(m.content) && m.content.some((c) => c.type === 'tool_result')
  );
  if (!hasResult) {
    return {
      content: [
        { type: 'text', text: 'Plan: inspect the workspace, then finish.' },
        { type: 'tool_use', id: 't1', name: 'list_dir', input: { path: '.' } },
      ],
      stop_reason: 'tool_use',
    };
  }
  return {
    content: [
      { type: 'text', text: 'Observed the workspace.' },
      { type: 'tool_use', id: 't2', name: 'finish', input: { summary: 'Dry-run complete — the plan → act → observe → finish loop works end-to-end.' } },
    ],
    stop_reason: 'tool_use',
  };
}
