// Rule: package.json scripts must not carry dangerous commands, and npm lifecycle
// hooks (which run automatically on `npm install`) are surfaced for review.
//
// Closes a real attack surface a red-team found: a malicious `postinstall` (e.g.
// `rm -rf $HOME`) ran on install but no rule inspected package.json scripts. This reuses
// the SAME danger patterns as the memory guard (scripts/lib/memory-guard.mjs) so the two
// surfaces stay in sync.
import path from 'node:path';
import guard from '../../../scripts/lib/memory-guard.mjs';

export const id = 'package-scripts-safe';
export const level = 'error';
export const description = 'package.json scripts contain no dangerous commands; lifecycle hooks are flagged for review.';

// npm runs these automatically — the dangerous moment is `npm install`.
const LIFECYCLE = new Set(['preinstall', 'install', 'postinstall', 'prepare', 'prepublish', 'prepublishOnly', 'preuninstall', 'postuninstall']);

export default function check(ctx) {
  const { util, root, config } = ctx;
  const findings = [];
  const files = util.walk(root, config.skipDirs).filter((p) => path.basename(p) === 'package.json');

  for (const f of files) {
    let pkg;
    try { pkg = JSON.parse(util.read(f)); } catch { findings.push({ file: f, level: 'warn', msg: 'package.json is not valid JSON' }); continue; }
    const scripts = (pkg && pkg.scripts) || {};
    for (const [name, cmd] of Object.entries(scripts)) {
      if (typeof cmd !== 'string') continue;
      const high = guard(cmd).flags.filter((x) => x.sev === 'high');
      if (high.length) {
        findings.push({ file: f, level: 'error', msg: `script "${name}" contains a dangerous command (${high.map((h) => h.label).join(', ')})` });
      }
      if (LIFECYCLE.has(name)) {
        findings.push({ file: f, level: 'warn', msg: `lifecycle script "${name}" runs automatically on npm install — review it` });
      }
    }
  }
  return findings;
}
