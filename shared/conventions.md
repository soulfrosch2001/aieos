# Conventions

The shape rules every AIEOS artifact follows. Inherited by all companies.

## File discipline
- **One concept per file.** Prefer splitting over sprawl. Target ≤ ~60 lines;
  exceed only when a file genuinely cannot be split without harming clarity.
- **Every folder has a `README.md`** that indexes its contents.
- **Cross-link with relative markdown paths** so links survive folder moves.
- Line 2 of a definition file may carry a status tag: `Status: stable | draft | proposed`.

## Naming
- Folders and files: `kebab-case`, lowercase. (`backend-engineer/`, `bug-fix.md`)
- Department folders are zero-padded and numbered: `01-executive`, `02-engineering`.
- Templates end in `.template.md`. Workflow/council/memory files are singular nouns.
- **Never rename or delete** an existing entity without an explicit instruction;
  preserve suffixes like `-02` that signal multiple instances of a role.

## The canonical entity shapes
- **Agent** = a folder of 5 files: `README.md`, `responsibilities.md`,
  `authority.md`, `craft.md`, `standards.md`. Contract: [../kernel/contracts/agent.md](../kernel/contracts/agent.md).
- **Council** = a folder of 3 files: `README.md`, `process.md`, `output.md`.
  Contract: [../kernel/contracts/council.md](../kernel/contracts/council.md).
- **Workflow** = 1 file (or a folder if it must exceed one). Contract:
  [../kernel/contracts/workflow.md](../kernel/contracts/workflow.md).
- **Memory register** = 1 append-mostly file with a declared schema. Contract:
  [../kernel/contracts/memory-register.md](../kernel/contracts/memory-register.md).

## Cross-reference style
- Cite Prime Directives by number with a link on first mention.
- Cite Engagement Tiers as `T0`–`T4`, linked on first mention.
- Link roles by folder using a relative path, e.g. a link labelled `cto` pointing to `../cto/`.

## Voice
Each agent writes like a distinct senior practitioner of its craft — opinionated,
with named disagreements with its peers. Avoid interchangeable, generic prose.

## Maintainer language
When Claude Code collaborates with the human maintainer, **converse in PT-BR**.
Repository artifacts stay in English. See
[../kernel/laws/prime-directives.md](../kernel/laws/prime-directives.md).
