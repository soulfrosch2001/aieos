// Forge runtime — explicit planning. The agent keeps an ordered checklist of intended
// steps via the `plan` / `update_plan` tools; the runtime persists it to trace.data.plan
// and echoes it back each turn so the model always sees its own intent and the trace is
// auditable against it (Directive #8). Pure data transforms — no model, no I/O.

// A plan is { steps: [{ text, status }], updatedAt }. status ∈ pending | done | dropped.
const STATUSES = new Set(['pending', 'done', 'dropped']);

// Build a fresh plan from a `plan` tool call: { steps: ["...", "..."] }.
export function makePlan(input) {
  const raw = Array.isArray(input?.steps) ? input.steps : [];
  const steps = raw
    .map((s) => (typeof s === 'string' ? s.trim() : String(s?.text || '').trim()))
    .filter(Boolean)
    .map((text) => ({ text, status: 'pending' }));
  return { steps, updatedAt: new Date().toISOString() };
}

// Apply an `update_plan` tool call to the current plan. Supports:
//   { complete: [1, 2] }      → mark those 1-based step numbers done
//   { drop: [3] }             → mark dropped
//   { add: ["new step"] }     → append pending steps
//   { steps: [...] }          → full replacement (re-plan)
// Returns a new plan object; never mutates the input.
export function applyPlanUpdate(plan, input) {
  if (input && Array.isArray(input.steps)) return makePlan(input); // full re-plan
  const base = plan && Array.isArray(plan.steps) ? plan.steps.map((s) => ({ ...s })) : [];

  const setStatus = (nums, status) => {
    for (const n of nums || []) {
      const i = Number(n) - 1;
      if (Number.isInteger(i) && base[i] && STATUSES.has(status)) base[i].status = status;
    }
  };
  setStatus(input?.complete, 'done');
  setStatus(input?.drop, 'dropped');

  for (const s of input?.add || []) {
    const text = (typeof s === 'string' ? s : String(s?.text || '')).trim();
    if (text) base.push({ text, status: 'pending' });
  }
  return { steps: base, updatedAt: new Date().toISOString() };
}

// Render the plan as a markdown checklist for the observation turn.
export function renderPlan(plan) {
  if (!plan || !plan.steps?.length) return '';
  const lines = ['Current plan:'];
  plan.steps.forEach((s, i) => {
    const box = s.status === 'done' ? '[x]' : s.status === 'dropped' ? '[~]' : '[ ]';
    lines.push(`${i + 1}. ${box} ${s.text}`);
  });
  const remaining = plan.steps.filter((s) => s.status === 'pending').length;
  lines.push(remaining ? `(${remaining} step(s) remaining)` : '(all steps resolved — verify, then finish)');
  return lines.join('\n');
}
