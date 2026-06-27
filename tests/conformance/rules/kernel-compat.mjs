// Rule: every company mount adapter (AIEOS.md) declares a "Requires kernel:" range
// that is compatible with the current kernel/VERSION. A company can never silently
// drift onto an incompatible kernel. See kernel/versioning.md.
import fs from 'node:fs';
import path from 'node:path';
export const id = 'kernel-compat';
export const description = 'Company adapters declare a compatible "Requires kernel:" range.';

export default function check(ctx) {
  const { util, root } = ctx;
  const versionFile = path.join(root, 'kernel', 'VERSION');
  if (!fs.existsSync(versionFile)) return [{ file: versionFile, msg: 'kernel/VERSION is missing' }];
  const version = util.read(versionFile).trim();
  const major = version.split('.')[0];

  const findings = [];
  const adapters = ctx.mdFiles.filter((f) => path.basename(f) === 'AIEOS.md');
  for (const f of adapters) {
    const m = util.read(f).match(/Requires kernel:\s*([^\n]+)/i);
    if (!m) { findings.push({ file: f, msg: 'adapter does not declare "Requires kernel: <range>"' }); continue; }
    const range = m[1].trim();
    const rm = range.match(/\^?(\d+)\./);
    if (!rm) findings.push({ file: f, msg: `unparseable kernel range "${range}"` });
    else if (rm[1] !== major) findings.push({ file: f, msg: `declared kernel range "${range}" does not satisfy current ${version}` });
  }
  return findings;
}
