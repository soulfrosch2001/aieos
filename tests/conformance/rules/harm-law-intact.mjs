// Rule: Directive #11 (do no harm) must remain intact. This is an ERROR-level guard.
// It FAILS the gate if harm-prevention.md is missing, if the Directive #11 heading is
// gone from prime-directives.md, or if the forbidden-purpose core clause is gutted.
//
// The check is ROBUST (structural markers + token vote, never a hash): legitimate edits,
// translations, reformatting, and TIGHTENING pass; only removal or gutting fails. It is
// NON-DESTRUCTIVE — it can only report a finding, never modify or delete anything.
import path from 'node:path';
import { checkHarmLaw } from '../../../forge/runtime/integrity.mjs';

export const id = 'harm-law-intact';
export const level = 'error';
export const description = 'Directive #11 (do no harm) must stay intact — harm-prevention.md and the #11 clause may be made stricter, never removed or gutted.';

export default function check(ctx) {
  const res = checkHarmLaw(ctx.root);
  if (res.ok) return [];
  return [{
    file: path.join(ctx.root, 'kernel/laws/prime-directives.md'),
    level: 'error',
    msg: 'harm-law integrity failed: ' + res.reason,
  }];
}
