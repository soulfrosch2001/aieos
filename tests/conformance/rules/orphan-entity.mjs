// Rule: an agent must be discoverable — listed in its parent department's README.
//
// A valid agent folder that no README links to is real but undiscoverable: the loader sees
// it, humans don't. A newcomer simulation added a correct agent and noted nothing required
// registering it. This WARNS (it does not block) when an agent dir is not referenced by the
// README in its parent directory.
import path from 'node:path';

export const id = 'orphan-entity';
export const level = 'warn';
export const description = 'Every agent is listed in its parent department README (discoverable, not orphaned).';

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  for (const dir of ctx.agentDirs) {
    const name = path.basename(dir);
    const parentReadme = path.join(path.dirname(dir), 'README.md');
    if (!util.exists(parentReadme)) continue; // the folder-readme rule owns missing READMEs
    const txt = util.read(parentReadme);
    // Listed if the folder name appears as a path segment in a markdown link: (name/ , /name/ , (name) , /name)
    const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('[(/]' + esc + '[/)]');
    if (!re.test(txt)) {
      findings.push({ file: parentReadme, level: 'warn', msg: `agent "${name}" is not listed in its parent README — undiscoverable orphan` });
    }
  }
  return findings;
}
