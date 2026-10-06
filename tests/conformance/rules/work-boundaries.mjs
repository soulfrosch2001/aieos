import fs from 'node:fs';
import path from 'node:path';

export const id = 'work-boundaries';
export const description = 'W0 contracts exist and kernel has no Work dependency.';

const required = [
  'work/contracts/task-run.md',
  'work/contracts/approval.md',
  'work/contracts/agent-version.md',
  'work/contracts/audit-event.md',
  'providers/contracts/brain-provider.md',
  'connectors/contracts/tool-connector.md',
  'docs/work/architecture-decisions.md',
];

export default function check(ctx) {
  const findings = [];
  for (const relative of required) {
    const file = path.join(ctx.root, ...relative.split('/'));
    if (!fs.existsSync(file)) findings.push({ file, msg: `missing W0 artifact: ${relative}` });
  }

  const forbidden = /(?:from\s+['"]|require\s*\(|import\s*\()['"](?:\.\.\/)*(?:work|providers|bridge|connectors|control-plane|apps)(?:\/|['"])/;
  for (const file of ctx.util.walk(path.join(ctx.root, 'kernel'), ctx.config.skipDirs)) {
    if (!/\.(?:mjs|cjs|js|ts)$/.test(file)) continue;
    if (forbidden.test(ctx.util.read(file))) {
      findings.push({ file, msg: 'kernel imports a forbidden Work/product layer' });
    }
  }
  return findings;
}

