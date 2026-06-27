# Conformance Checker — the AIEOS compiler
Status: stable
Type: workflow
Owner: Chief Auditor (Government)
Extends: none

A dependency-free Node.js checker that enforces the [contracts](../../kernel/contracts/)
and [conventions](../../shared/conventions.md) mechanically. This is what turns
"conformant" from a claim into a gate ([Prime Directive #9](../../kernel/laws/prime-directives.md)).

## Run it

```
npm test                                  # kernel + stdlib + kernel-native companies
node tests/conformance/run.mjs            # same thing, directly
node tests/conformance/run.mjs --include-legacy   # also scan pre-kernel companies
```

Exit code **0** = conformant, **1** = at least one error, **2** = the checker itself failed.

## Scope

By default the checker scans the kernel, the standard library, and **kernel-native**
companies. The two **legacy** companies (`ai-software-company`, `AI-Game-Studio`)
predate the contracts; their internals are out of scope until reconciled, but their
`AIEOS.md` mount adapters are always checked. `--include-legacy` scans everything and
quantifies the reconciliation debt.

## How it is built

- [run.mjs](run.mjs) — the runner. Builds one shared **context** (all in-scope files,
  directories, and the detected entities: agent dirs, council dirs, workflow files,
  register files), then loads and runs every rule, aggregates findings, and reports.
- [lib/util.mjs](lib/util.mjs) — pure, shared helpers (walk, link parsing/resolution,
  identity-block parsing, kebab test). Rules depend on this contract, which is why the
  core is written first and the rules fan out from it.
- [rules/](rules/) — one file per rule, auto-discovered.

## The rules

| Rule | Level | Asserts |
|------|-------|---------|
| `links` | error | Every relative markdown link resolves (templates exempt). |
| `agent-structure` | error | Every agent folder has its 5 files. |
| `council-structure` | error | Every council folder has its 3 files. |
| `identity-block` | error | Entity READMEs + standalone files declare Status/Type/Owner/Extends. |
| `folder-readme` | warn | Every content folder has a README. |
| `workflow-sections` | warn | Workflows declare Steps, gates, and Memory Updates. |
| `kebab-case` | warn | Names are kebab-case (allowlisted docs/identities excepted). |

## Add a rule

Create `rules/<name>.mjs`:

```js
export const id = 'my-rule';
export const level = 'error'; // or 'warn' (default 'error')
export const description = 'what it asserts';
export default function check(ctx) {
  // ctx: { root, util, mdFiles, dirs, agentDirs, councilDirs, workflowFiles, registerFiles, config }
  const findings = [];
  // findings.push({ file, line?, msg, level? })
  return findings;
}
```

It is discovered automatically. Add the matching human line to
[../conformance-checklist.md](../conformance-checklist.md) and propose it first if it
changes shared ground ([Directive #7](../../kernel/laws/prime-directives.md)).
