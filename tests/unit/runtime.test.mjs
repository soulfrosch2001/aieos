// Forge runtime unit tests — the code-level confidence the conformance gate (which only
// checks markdown structure) cannot give. Zero deps: Node's built-in test runner.
//   npm run test:unit
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateHarmLaw } from '../../forge/runtime/integrity.mjs';
import { retrieve } from '../../forge/runtime/memory.mjs';
import { evaluate, formatVerdict } from '../../forge/runtime/eval.mjs';

// ---- integrity.mjs : the harm-law guard ----
test('harm-law: intact text passes', () => {
  const prime = '## 11. Do no harm — the supreme constraint\nAny goal whose purpose is to harm, ' +
    'deceive, exploit, surveil, or endanger a person is refused and aborted. No override may set ' +
    'aside this to cause harm; a human may only make it stricter.';
  const harm = 'The supreme constraint. '.repeat(30) +
    ' do no harm purpose refuse abort deceive exploit surveil endanger weapon cannot be set aside stricter';
  assert.equal(evaluateHarmLaw(prime, harm).ok, true);
});

test('harm-law: stripped Directive #11 fails', () => {
  assert.equal(evaluateHarmLaw('## 2. Something else\nnothing to see', 'x'.repeat(500)).ok, false);
});

test('harm-law: gutted harm-prevention (stub) fails', () => {
  const prime = '## 11. Do no harm\n harm purpose refuse deceive surveil cannot be set aside stricter';
  assert.equal(evaluateHarmLaw(prime, 'stub').ok, false);
});

// ---- memory.mjs : BM25/IDF retrieval ----
test('retrieve: a rare on-point term outranks a common one', () => {
  const docs = [
    { source: 'a.md', title: 'Common', text: 'the system runs the system every day with the system', mtimeMs: 0 },
    { source: 'b.md', title: 'Rare', text: 'balancing economy with telemetry outliers in the system', mtimeMs: 0 },
    { source: 'c.md', title: 'Common2', text: 'system system system and more system', mtimeMs: 0 },
  ];
  const hits = retrieve('telemetry outliers system', docs, { k: 3 });
  assert.equal(hits[0].title, 'Rare');
});

test('retrieve: an empty goal returns nothing', () => {
  assert.deepEqual(retrieve('', [{ source: 'a', title: 'A', text: 'x', mtimeMs: 0 }]), []);
});

// ---- eval.mjs : structural self-check ----
test('eval: a clean read-only run passes', () => {
  const ev = evaluate({
    goal: 'inspect the balance economy',
    steps: [{ text: 'looked at balance economy', actions: [{ name: 'list_dir', ok: true }] }],
    outcome: 'done', summary: 'inspected the balance economy', gateClean: false,
  });
  assert.equal(ev.verdict, 'pass');
});

test('eval: a stuck run fails', () => {
  assert.equal(evaluate({ goal: 'do x', steps: [], outcome: 'stuck', summary: '', gateClean: false }).verdict, 'fail');
});

test('eval: writes without a clean gate fail', () => {
  const ev = evaluate({
    goal: 'write config', outcome: 'done', summary: 'wrote the config', gateClean: false,
    steps: [{ text: 'wrote config', actions: [{ name: 'write_file', ok: true }] }],
  });
  assert.equal(ev.verdict, 'fail');
});

test('formatVerdict renders the mode and gaps', () => {
  const ev = evaluate({ goal: 'zzzz', steps: [], outcome: 'done', summary: 'done', gateClean: true });
  assert.match(formatVerdict(ev), /\[structural\]/);
});
