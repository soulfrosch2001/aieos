// Rule: package.json "version" must equal kernel/VERSION.
//
// Why this is law: the updater (scripts/update.mjs) and the native launcher decide
// "is there an update?" by comparing package.json versions — local vs the one on
// GitHub. The kernel version moved 1.9 → 1.19 while package.json sat still, so every
// `aieos update` short-circuited with "already up to date" and installed machines
// (one stuck at 1.0.0) could never receive anything again. One version, one truth:
// if the kernel moves, the version the updater compares MUST move with it — and this
// rule makes forgetting that impossible (decision 0036).
import fs from 'node:fs';
import path from 'node:path';

export const id = 'version-sync';
export const description = 'package.json version must match kernel/VERSION (the updater compares package.json — drift bricks updates).';

export default function check(ctx) {
  const findings = [];
  let pkgVer = null, kernelVer = null;
  try {
    pkgVer = JSON.parse(fs.readFileSync(path.join(ctx.root, 'package.json'), 'utf8')).version;
  } catch {
    findings.push({ file: 'package.json', msg: 'cannot read package.json version' });
  }
  try {
    kernelVer = fs.readFileSync(path.join(ctx.root, 'kernel', 'VERSION'), 'utf8').trim();
  } catch {
    findings.push({ file: 'kernel/VERSION', msg: 'cannot read kernel/VERSION' });
  }
  if (pkgVer && kernelVer && pkgVer !== kernelVer) {
    findings.push({
      file: 'package.json',
      msg: `version drift: package.json is ${pkgVer} but kernel/VERSION is ${kernelVer} — updates compare package.json, so bump BOTH together`,
    });
  }
  return findings;
}
