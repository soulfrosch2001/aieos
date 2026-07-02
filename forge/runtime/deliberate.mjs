// Forge runtime — deliberation. When a run is flagged stagnant (checkpoint.mjs), simply
// escalating the model asks one stronger mind to CREATE a way out. This module asks
// several cheap minds to create and one strong mind to CHOOSE — judging is easier than
// generating, so a mid/strong model picking between N independent proposals often beats
// a strong model improvising one. Best-of-N, fanned out with the same Promise.all pattern
// parallel delegation already uses (decision 0027).
//
// Default ON, but it only ever fires on a stagnant checkpoint — a rare event by
// construction — so the marginal cost is N cheap calls + 1 judge call exactly when the
// run is already wasting steps. FORGE_DELIBERATE=off disables; FORGE_DELIBERATE_N sizes
// the candidate pool (default 3). Advisory only: the judged direction is injected as an
// observation; nothing is gated on it.
import { callModel } from './llm.mjs';

export function deliberateEnabled() {
  return process.env.FORGE_DELIBERATE !== 'off';
}

export function deliberateN() {
  const n = Number(process.env.FORGE_DELIBERATE_N);
  return Number.isFinite(n) && n >= 2 ? Math.min(Math.floor(n), 5) : 3;
}

// Generate N candidate approaches on the CHEAP tier concurrently, judge them on the
// STRONG tier, return { chosen, candidates, usage } — or null when disabled or every
// call failed (deliberation must never crash the run it is trying to unstick).
// The [deliberation:...] markers double as the dry-run stub's detection handles (llm.mjs).
export async function deliberate({ goal, planView = '', lastText = '', tiers, model, dryRun }) {
  if (!deliberateEnabled()) return null;
  const n = deliberateN();
  const situation =
    `The run below has STALLED — no measurable progress between its last two checkpoints.\n\n` +
    `Goal: ${goal}\n` +
    (planView ? `\n${planView}\n` : '') +
    (lastText ? `\nThe run's latest reflection was:\n${lastText}\n` : '');

  const usage = { input_tokens: 0, output_tokens: 0 };
  const addUsage = (u) => {
    if (!u) return;
    usage.input_tokens += u.input_tokens || 0;
    usage.output_tokens += u.output_tokens || 0;
  };

  const proposeOnce = async (i) => {
    try {
      const r = await callModel({
        system: 'You propose ONE concrete next approach for a stalled agent run. Text only, 3 sentences max, no tool calls.',
        messages: [{
          role: 'user',
          content: `[deliberation:propose] Candidate ${i + 1} of ${n} — propose a DIFFERENT angle than the obvious one.\n\n${situation}`,
        }],
        tools: [],
        model: (tiers && tiers.cheap) || model,
        dryRun,
      });
      addUsage(r.usage);
      return textOf(r.content);
    } catch {
      return ''; // one dead candidate must not sink the pool
    }
  };

  const candidates = (await Promise.all(Array.from({ length: n }, (_, i) => proposeOnce(i))))
    .filter(Boolean);
  if (!candidates.length) return null;

  let chosen;
  try {
    const r = await callModel({
      system: 'You judge candidate approaches for a stalled agent run. Pick the single most promising one, quote it, and say in one sentence why. Text only.',
      messages: [{
        role: 'user',
        content: `[deliberation:judge]\n\n${situation}\nCandidate approaches:\n` +
          candidates.map((c, i) => `${i + 1}. ${c}`).join('\n'),
      }],
      tools: [],
      model: (tiers && tiers.strong) || model,
      dryRun,
    });
    addUsage(r.usage);
    chosen = textOf(r.content);
  } catch {
    chosen = candidates[0]; // judge died — first candidate is still better than nothing
  }
  if (!chosen) chosen = candidates[0];

  return { chosen, candidates, usage };
}

function textOf(content) {
  const blocks = Array.isArray(content) ? content : [{ type: 'text', text: String(content ?? '') }];
  return blocks.filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
}
