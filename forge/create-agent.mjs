#!/usr/bin/env node
// Forge — scaffold a contract-valid agent from intent.
//   npm run forge -- <target-dir> <agent-name> "<one-line mission>"
// Writes <target-dir>/<agent-name>/{README,responsibilities,authority,craft,standards}.md
// The result passes `npm test` immediately; enrich the <forge: …> placeholders after.
import fs from 'node:fs';
import path from 'node:path';

const [, , targetDir, name, ...missionParts] = process.argv;
const mission = missionParts.join(' ').trim();
if (!targetDir || !name || !mission) {
  console.error('Usage: node forge/create-agent.mjs <target-dir> <agent-name> "<mission>"');
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
  console.error('Agent name must be kebab-case, e.g. balance-scout.');
  process.exit(1);
}

const dir = path.join(targetDir, name);
if (fs.existsSync(dir)) { console.error('Already exists: ' + dir); process.exit(1); }
const title = name.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
// Relative prefix from a file inside <dir> up to the repo root, so cross-links resolve
// wherever the agent is forged.
const up = '../'.repeat(path.normalize(dir).split(/[\\/]/).filter(Boolean).length);

const files = {
  'README.md': `# ${title}
Status: stable
Type: agent
Owner: self
Extends: none

## Mission
${mission}

## Personality & Mindset
Forged by the AIEOS Forge. Replace this with a distinct, opinionated voice and at least
one named tension with a peer.

## Index
- [responsibilities.md](responsibilities.md)
- [authority.md](authority.md)
- [craft.md](craft.md)
- [standards.md](standards.md)
`,
  'responsibilities.md': `# ${title} — Responsibilities

## Owns (accountable, not just involved)
- forge: what this agent owns toward "${mission}"

## Does NOT own (hands off)
- forge: explicit non-goals

## Questions it always asks
- forge: the questions this role interrogates

## Long-term responsibilities
- forge: what it carries over time
`,
  'authority.md': `# ${title} — Authority

## Decides alone
- forge: its uncontested calls

## Decides with a peer (joint sign-off)
- forge: shared calls

## Recommends only
- forge: where it advises but does not decide

## Decision rules
- forge: if/then rules

## Escalation rules
- Deadlocks escalate one level via the [escalation protocol](${up}kernel/protocols/escalation.md).
`,
  'craft.md': `# ${title} — Craft

## Communication style
forge: how this agent writes and argues

## Working philosophy
forge: the craft-specific lens for "${mission}"

## Key collaborators
- forge: a peer — the tension/dynamic

## Memory & documentation discipline
- Feeds: forge: which memory registers, and when
`,
  'standards.md': `# ${title} — Standards

## Quality gates (does not pass without these)
- forge: blocking checks

## Common mistakes it guards against
- forge: failure modes

## Review checklist
- [ ] forge: what it verifies before passing work

## KPIs (how it is measured)
- forge: measures

## Risk lens
- forge: named risk categories this role watches
`,
};

fs.mkdirSync(dir, { recursive: true });
for (const [f, content] of Object.entries(files)) fs.writeFileSync(path.join(dir, f), content);
console.log('Forged agent: ' + dir.split(path.sep).join('/') + ' (5 files). Enrich the "forge:" lines, then run npm test.');
