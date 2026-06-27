// Rule: every council folder has the 3 required files (council contract).
// A "council folder" is any directory containing a process.md or output.md.
export const id = 'council-structure';
export const description = 'Council folders must contain README + process + output.';

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  for (const dir of ctx.councilDirs) {
    const files = util.baseFiles(dir);
    for (const required of util.COUNCIL_FILES) {
      if (!files.includes(required)) {
        findings.push({ file: dir, msg: `council folder missing ${required}` });
      }
    }
  }
  return findings;
}
