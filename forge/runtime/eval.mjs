// Forge runtime — structural self-check. After the loop ends, derive a deterministic
// verdict from the trace the runtime already holds: no model call, no I/O. It is purely
// ADVISORY — it never gates `finish`, it only reports — and because it reads the trace and
// nothing else it runs identically under --dry-run. The rubric it follows is documented in
// forge/eval-rubric.md. Lands in trace.data.evaluation; printed as one `verdict:` line.

// Inputs: { goal, steps, outcome, summary, gateClean }. Returns:
//   { verdict: 'pass'|'partial'|'fail', mode: 'structural', checks: {...}, notes: [...] }
export function evaluate({ goal, steps = [], outcome, summary, gateClean }) {
  const writes = countActions(steps, 'write_file', true);
  const text = collectText(steps, summary);

  const checks = {
    // Did the run terminate cleanly by the model's own decision?
    finished: outcome === 'done',
    // Does the closing narrative actually reference the goal (not a generic sign-off)?
    goalAddressed: goalAddressed(goal, text),
    // If files were written, did the gate pass since? (Vacuously true when nothing written.)
    gatePassed: writes === 0 ? true : !!gateClean,
    // Did the run produce durable output? (A read-only goal can legitimately produce none.)
    producedWrites: writes > 0,
    // Did the loop avoid stalling / spinning?
    noStuck: outcome !== 'stuck' && outcome !== 'incomplete' && outcome !== 'budget_exhausted',
  };

  const notes = [];
  if (!checks.finished) notes.push(`run ended as "${outcome}", not a model-driven finish`);
  if (!checks.goalAddressed) notes.push('closing summary does not clearly reference the goal');
  if (!checks.gatePassed) notes.push('files were written but the gate did not pass since the last write');
  if (!checks.noStuck) notes.push('loop did not progress cleanly (stuck / incomplete / budget)');
  if (!checks.producedWrites) notes.push('no files written (expected for a read-only goal)');

  // Verdict: pass needs the hard checks; gate failure or a non-finish is a fail; the
  // "no writes" case is informational and never demotes on its own.
  let verdict;
  if (checks.finished && checks.goalAddressed && checks.gatePassed && checks.noStuck) {
    verdict = 'pass';
  } else if (!checks.gatePassed || !checks.finished) {
    verdict = 'fail';
  } else {
    verdict = 'partial';
  }

  return { verdict, mode: 'structural', checks, notes };
}

// One-line human string for the CLI `verdict:` line.
export function formatVerdict(ev) {
  if (!ev) return '';
  const failed = Object.entries(ev.checks).filter(([, v]) => !v).map(([k]) => k);
  const tail = failed.length ? ` (gaps: ${failed.join(', ')})` : '';
  return `${ev.verdict} [${ev.mode}]${tail}`;
}

function countActions(steps, name, okOnly) {
  let n = 0;
  for (const s of steps) for (const a of s.actions || []) {
    if (a.name === name && (!okOnly || a.ok)) n++;
  }
  return n;
}

function collectText(steps, summary) {
  const parts = [summary || ''];
  for (const s of steps) if (s.text) parts.push(s.text);
  return parts.join('\n').toLowerCase();
}

// Heuristic: at least one substantive goal term (len ≥ 4) appears in the run's text.
function goalAddressed(goal, text) {
  const terms = (String(goal).toLowerCase().match(/[a-z0-9]{4,}/g) || [])
    .filter((t) => !STOP.has(t));
  if (!terms.length) return true; // nothing specific to match against
  return terms.some((t) => text.includes(t));
}

const STOP = new Set(['list', 'finish', 'make', 'with', 'that', 'this', 'then', 'into',
  'from', 'your', 'they', 'them', 'have', 'will', 'should', 'about']);
