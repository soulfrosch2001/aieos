// Rule: file and folder names are kebab-case, with an allowlist for the
// conventional UPPERCASE docs and *.template.md shells.
import path from 'node:path';
export const id = 'kebab-case';
export const level = 'warn';
export const description = 'File and folder names should be kebab-case (allowlisted docs excepted).';

const ALLOW_FILES = new Set([
  'README.md', 'CHANGELOG.md', 'CONTRIBUTING.md', 'LICENSE', 'CLAUDE.md', 'COMPANY.md',
  'AIEOS.md', 'MASTER_PROMPT.md', 'ROADMAP.md', 'ARCHITECTURE.md', 'MIGRATION.md',
  'DESIGN-DECISIONS.md', 'MEMORY.md', 'QUALITY-STANDARDS.md', 'BUILD_SPEC.md', 'ONBOARDING.md',
  'SETUP.md',
  'package.json',
]);

// Grandfathered external/company identities that predate the convention.
const ALLOW_DIRS = new Set([
  'AI-Game-Studio', 'AI-Tabletop-Studio',
  'AI-Marketing-Agency', 'AI-Publishing-House', 'AI-Finance-Company', 'AI-Research-Lab',
  'AI-RPG-Studio', 'AI-Architecture-Studio', 'AI-Legal-Advisors', 'AI-Education-Academy',
  'AI-Film-Studio', 'AI-Healthcare-Clinic', 'AI-Music-Label', 'AI-Consulting-Firm',
  'AI-Game-Balancing-Studio',
]);

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  const seen = new Set();
  const checkName = (full, name) => {
    if (seen.has(full)) return;
    seen.add(full);
    if (name.endsWith('.template.mjs') || name.endsWith('.mjs')) return; // checker code
    const isFile = name.includes('.');
    if (isFile) {
      if (ALLOW_FILES.has(name)) return;
      if (name.endsWith('.template.md')) return;
      if (/^(ADR|MTG)-\d/i.test(name)) return; // record IDs (Architecture Decision Records, Meeting minutes)
      const stem = name.replace(/\.md$/, '');
      if (!/\.md$/.test(name)) return; // only police markdown
      if (!util.isKebab(stem)) findings.push({ file: full, level: 'warn', msg: `file name not kebab-case: ${name}` });
    } else {
      if (ALLOW_DIRS.has(name)) return;
      if (!util.isKebab(name)) findings.push({ file: full, level: 'warn', msg: `folder name not kebab-case: ${name}` });
    }
  };
  for (const d of ctx.dirs) checkName(d, path.basename(d));
  for (const f of ctx.mdFiles) checkName(f, path.basename(f));
  return findings;
}
