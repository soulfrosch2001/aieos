// Rule: workflow files carry the required sections (workflow contract).
export const id = 'workflow-sections';
export const level = 'warn';
export const description = 'Workflow files should declare Steps, gates, and Memory Updates.';

const REQUIRED = [
  { label: 'Steps', test: (t) => /^##\s+Steps/im.test(t) },
  { label: 'gates', test: (t) => /^##\s+(Review Gates|Gates|Approval)/im.test(t) },
  { label: 'Memory Updates', test: (t) => /^##\s+Memory Updates/im.test(t) },
];

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  for (const file of ctx.workflowFiles) {
    const text = util.read(file);
    for (const r of REQUIRED) {
      if (!r.test(text)) findings.push({ file, msg: `workflow missing "## ${r.label}" section` });
    }
  }
  return findings;
}
