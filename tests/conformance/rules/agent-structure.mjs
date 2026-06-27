// Rule: every agent folder has exactly the 5 required files (agent contract).
// An "agent folder" is any directory containing at least one role-marker file
// (responsibilities/authority/craft/standards .md).
export const id = 'agent-structure';
export const description = 'Agent folders must contain README + responsibilities + authority + craft + standards.';

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  for (const dir of ctx.agentDirs) {
    const files = util.baseFiles(dir);
    for (const required of util.ROLE_FILES) {
      if (!files.includes(required)) {
        findings.push({ file: dir, msg: `agent folder missing ${required}` });
      }
    }
  }
  return findings;
}
