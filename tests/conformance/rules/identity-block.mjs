// Rule: every entity carries a complete identity block where the contract requires
// one — the entity's README (agents, councils) and standalone definition files
// (workflows, memory registers). The four agent role sub-files and the three council
// sub-files are indexes/sections, not separate entities, so they are exempt (see
// templates/agent.template.md). Templates themselves are illustrative shells, exempt.
import path from 'node:path';
export const id = 'identity-block';
export const description = 'Entity READMEs and standalone definition files must declare Status, Type, Owner, Extends.';

export default function check(ctx) {
  const { util } = ctx;
  const targets = new Set();

  for (const dir of ctx.agentDirs) targets.add(path.join(dir, 'README.md'));
  for (const dir of ctx.councilDirs) targets.add(path.join(dir, 'README.md'));
  for (const f of ctx.workflowFiles) targets.add(f);
  for (const f of ctx.registerFiles) targets.add(f);

  const findings = [];
  for (const file of targets) {
    if (!util.exists(file)) continue; // presence is the structure rules' job
    if (file.endsWith('.template.md')) continue;
    const block = util.identityBlock(util.read(file));
    const missing = ['hasName', 'status', 'type', 'owner', 'extends'].filter((k) => !block[k]);
    if (missing.length) {
      const label = missing.map((k) => (k === 'hasName' ? 'title (# Name)' : k)).join(', ');
      findings.push({ file, line: 1, msg: `incomplete identity block — missing: ${label}` });
    }
  }
  return findings;
}
