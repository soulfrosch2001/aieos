// Forge runtime — the model call. Talks to the Anthropic Messages API (tools enabled).
// Falls back to a deterministic stub when --dry-run or no ANTHROPIC_API_KEY, so the
// loop is testable without a key.

export async function callModel({ system, messages, tools, model, dryRun }) {
  if (dryRun || !process.env.ANTHROPIC_API_KEY) return stub(messages);

  // Model-agnostic: the id flows in only from run.mjs (FORGE_MODEL). No hardcoded
  // default anywhere — a live run without a model is an explicit error.
  if (!model) throw new Error('FORGE_MODEL is required for a live run');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ model, max_tokens: 2048, system, messages, tools }),
  });
  const data = await res.json();
  if (data.type === 'error' || data.error) {
    throw new Error('Anthropic API error: ' + JSON.stringify(data.error || data));
  }
  return { content: data.content, stop_reason: data.stop_reason };
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
