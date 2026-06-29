// Rule: workflow files carry all ten required sections, in the contract's order.
// Contract: kernel/contracts/workflow.md ("all ten sections present in order").
export const id = 'workflow-sections';
export const level = 'error';
export const description = 'Workflow files declare all ten required sections, in order (workflow contract).';

// Heading matchers tolerate the house variants ("Approval Process", "Completion
// Criteria", "Failure / Rollback") while pinning the contract's canonical labels.
const SECTIONS = [
  { label: 'Trigger', re: /^##\s+Trigger\b/im },
  { label: 'Participants', re: /^##\s+Participants\b/im },
  { label: 'Inputs', re: /^##\s+Inputs\b/im },
  { label: 'Steps', re: /^##\s+Steps\b/im },
  { label: 'Review Gates', re: /^##\s+Review Gates\b/im },
  { label: 'Approval', re: /^##\s+Approval\b/im },
  { label: 'Outputs', re: /^##\s+Outputs\b/im },
  { label: 'Completion', re: /^##\s+Completion\b/im },
  { label: 'Memory Updates', re: /^##\s+Memory Updates\b/im },
  { label: 'Failure / Rollback', re: /^##\s+Failure\b/im },
];

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  for (const file of ctx.workflowFiles) {
    const text = util.read(file);
    const positions = [];
    for (const s of SECTIONS) {
      const m = text.match(s.re);
      if (!m) findings.push({ file, msg: `workflow missing "## ${s.label}" section` });
      else positions.push({ label: s.label, index: m.index });
    }
    // Order is only meaningful once every section is present.
    if (positions.length === SECTIONS.length) {
      for (let i = 1; i < positions.length; i++) {
        if (positions[i].index < positions[i - 1].index) {
          findings.push({
            file,
            msg: `section "## ${positions[i].label}" is out of order (must follow "## ${positions[i - 1].label}")`,
          });
          break;
        }
      }
    }
  }
  return findings;
}
