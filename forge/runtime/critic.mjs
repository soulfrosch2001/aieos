// Forge runtime — the critic. A second, cheap pair of eyes on the loop's expensive or
// irreversible moves (write_*, delegate, finish): one small model call asking "does this
// specific action advance the plan, or is it a mistake?" — the AIEOS council pattern
// miniaturized to a single decision inside the loop. Judgment on the micro-decisions is
// where a cheaper executor model loses the most ground to a frontier one; this buys some
// of it back for the price of one mid-tier call per risky action.
//
// OPT-IN via FORGE_CRITIC=on (default off): unlike deliberation it fires on every risky
// action, not only on rare stagnation, so the cost is per-write and the maintainer should
// choose it deliberately. Advisory by design: a write/delegate proceeds regardless and the
// critique rides along in the observation. `finish` alone gets a ONE-TIME speed bump — a
// concerned critique refuses the first finish so the model must read it and either fix or
// insist; the second finish always passes. A speed bump, not a gate: agency stays with
// the model, exactly like the checkpoint notes.
import { callModel } from './llm.mjs';

export function criticEnabled() {
  return process.env.FORGE_CRITIC === 'on';
}

export function riskyAction(name) {
  return name.startsWith('write_') || name === 'delegate' || name === 'finish';
}

// One advisory review of one pending action. Returns { concern, note } — `concern` is
// true when the critique starts with "CONCERN". Never throws: a dead critic yields a
// neutral pass (the critic must never be the thing that breaks a run).
// The [critic:review] marker doubles as the dry-run stub's detection handle (llm.mjs).
export async function reviewAction({ goal, planView = '', action, tiers, model, dryRun }) {
  try {
    const r = await callModel({
      system:
        'You review ONE pending action from an agent mid-run. Reply with exactly one line: ' +
        'either "OK — <why it advances the plan>" or "CONCERN: <the specific mistake>". ' +
        'Flag only real problems (wrong target, contradicts the plan, premature finish) — ' +
        'style is not your job.',
      messages: [{
        role: 'user',
        content: `[critic:review]\nGoal: ${goal}\n` +
          (planView ? `\n${planView}\n` : '') +
          `\nPending action: ${action.name} ${clipJson(action.input)}`,
      }],
      tools: [],
      model: (tiers && tiers.mid) || model,
      dryRun,
    });
    const note = textOf(r.content).split('\n')[0].trim();
    return { concern: /^CONCERN/i.test(note), note, usage: r.usage };
  } catch {
    return { concern: false, note: '', usage: null };
  }
}

function textOf(content) {
  const blocks = Array.isArray(content) ? content : [{ type: 'text', text: String(content ?? '') }];
  return blocks.filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
}

function clipJson(v) {
  const s = JSON.stringify(v || {});
  return s.length > 400 ? s.slice(0, 397) + '...' : s;
}
