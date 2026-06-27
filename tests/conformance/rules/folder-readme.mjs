// Rule: every content folder has a README.md ("the OS explains itself").
// The checker's own code directories (lib, rules) are exempt.
import path from 'node:path';
export const id = 'folder-readme';
export const level = 'warn';
export const description = 'Every content folder should contain a README.md.';

const EXEMPT = new Set(['lib', 'rules', 'conformance', 'tests', 'audio', 'pdf']);

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  for (const dir of ctx.dirs) {
    const base = path.basename(dir);
    if (EXEMPT.has(base)) continue;
    if (util.rel(ctx.root, dir).startsWith('tests/conformance')) continue;
    if (!util.baseFiles(dir).includes('README.md')) {
      findings.push({ file: dir, msg: 'folder has no README.md' });
    }
  }
  return findings;
}
