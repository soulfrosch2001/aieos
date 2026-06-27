# Contributing to AIEOS

AIEOS is an AI Enterprise Operating System: a kernel of laws, a standard library
of defaults, and an open set of companies that inherit both. Contributing here is
less like editing prose and more like extending an operating system — you add
entities that the loader can validate, resolve, and mount. Read the
[Prime Directives](kernel/laws/prime-directives.md) and
[shared/conventions.md](shared/conventions.md) before you touch anything; they are
binding, not advisory.

## The one rule above all others: propose before you build

Any change to the kernel, to a shared contract, or to the standard library is a
**proposal first** — reviewed and recorded before a single file changes. This is
[Prime Directive #7](kernel/laws/prime-directives.md). It exists because the OS
evolves deliberately: a quiet edit to a contract silently re-validates every
company that inherited it. Open the proposal, get it reviewed, then implement what
was agreed. Adding a *new* company or a new entity inside your own company is not
a framework change and does not need this — but it still passes conformance.

## How to add things

Every addition is a copy of a template, filled in, that passes its contract. Never
invent a bespoke shape; the templates *are* the shape (see
[templates/](templates/)).

| You want to add | Copy | Satisfy contract | Conformance |
|-----------------|------|------------------|-------------|
| A **company** (plugin) | [templates/company.template.md](templates/company.template.md) | [plugin.md](kernel/contracts/plugin.md) | register it; mount via loader |
| An **agent** | [templates/agent.template.md](templates/agent.template.md) | [agent.md](kernel/contracts/agent.md) | 5 files, identity block |
| A **council** | [templates/council.template.md](templates/council.template.md) | [council.md](kernel/contracts/council.md) | 3 files, dissent + minutes |
| A **workflow** | [templates/workflow.template.md](templates/workflow.template.md) | [workflow.md](kernel/contracts/workflow.md) | tier, gates declared |
| A **memory register** | [templates/memory-register.template.md](templates/memory-register.template.md) | [memory-register.md](kernel/contracts/memory-register.md) | schema declared, append-mostly |

Run the [conformance checklist](tests/conformance-checklist.md) before you open a
pull request. The Chief Auditor runs the same checks; failing them is the most
common reason a contribution bounces.

## Inherit, don't fork

Do not copy a standard-library workflow, council, or schema into your company just
to tweak it. Override **by name**: create an entity with the *same name* in your
company tree and the loader prefers it (see
[resolution-order.md](kernel/loader/resolution-order.md)). An override may only add
strictness — tighter gates, more sign-off — never weaken a law (Directive #6).
Duplicated structure is a bug, not a contribution.

## Never rename, never delete

Existing entities are preserved. **Do not rename or delete** an entity — including
suffixes like `-02` that mark a second instance of a role — without an explicit
maintainer instruction. Things are retired through the
[lifecycle protocol](kernel/protocols/lifecycle.md), not erased. The same applies
to memory: it is **append-mostly** (Directive #8). Correct the record by adding to
it; do not rewrite history.

## Directive #11 is immutable

[Prime Directive #11 (do no harm)](kernel/laws/prime-directives.md) and its
elaboration in [harm-prevention.md](kernel/laws/harm-prevention.md) may be made
**stricter — never removed or loosened**, by anyone who is not the creator. You may
add forbidden purposes, tighten enforcement, or extend its reach; you may not delete
the directive, gut the forbidden-purpose clause, or weaken the override boundary.

Enforcement is **non-destructive**. If the directive is stripped or gutted, the
system simply *refuses to operate*: the `harm-law-intact` conformance rule fails the
gate, and the Forge runtime ([forge/run.mjs](forge/run.mjs)) refuses to run with a
clear message and a non-zero exit. It never deletes, damages, or exfiltrates anything
— doing so would itself harm a person and violate the very directive it protects.
"Refuse to run" is not "destroy."

## Language

When you collaborate with the human maintainer, **converse in Brazilian
Portuguese (PT-BR)**. All repository artifacts — files, code, comments, commit
messages — stay in **English** for portability. This split is deliberate: the
conversation is local, the OS is for everyone.

## Pull request checklist

- [ ] Change is a new entity or an opened, recorded proposal (Directive #7).
- [ ] Copied the right template; identity block present and complete.
- [ ] Inherits rather than forks; any override is by name and only stricter.
- [ ] No existing entity renamed or deleted; memory only appended.
- [ ] Directive #11 left intact or stricter — `harm-law-intact` passes.
- [ ] Passes [tests/conformance-checklist.md](tests/conformance-checklist.md).
- [ ] Artifacts in English; cross-links are relative and resolve.
