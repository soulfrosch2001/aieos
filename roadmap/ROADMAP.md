# Roadmap
Status: stable
Type: workflow
Owner: self
Extends: none

The phased plan for AIEOS. Phases are gated by outcome, not by date: a phase opens
only once the previous phase has met its **exit condition**. Status is one of
`DONE` · `IN PROGRESS` · `PLANNED`. As of 2026-06-26 the build sits in **Phase 1**.

| Phase | Name | Status |
|-------|------|--------|
| 1 | Foundation — kernel, government, stdlib | **IN PROGRESS** |
| 2 | Mount the three existing companies (non-destructive) | PLANNED |
| 3 | New companies as plugins | PLANNED |
| 4 | Tooling & conformance automation | PLANNED |
| 5+ | Developer experience & kernel versioning | PLANNED |

---

## Phase 1 — Foundation · **IN PROGRESS**
**Goal.** A stable floor every company can inherit from: the kernel
([../kernel/](../kernel/)), the Government ([../government/](../government/)), and the
standard library ([../templates/](../templates/), [../workflows/](../workflows/)).

**Scope.**
- Kernel **Law** — the ten [Prime Directives](../kernel/laws/prime-directives.md),
  [engagement tiers](../kernel/laws/engagement-tiers.md),
  [decision authority](../kernel/laws/decision-authority.md). *(Spine in place.)*
- Kernel **Mechanism** — [contracts](../kernel/contracts/),
  [protocols](../kernel/protocols/), [loader](../kernel/loader/),
  [registry](../kernel/registry/).
- **Government** — [supreme-orchestrator](../government/supreme-orchestrator/) and the
  C-suite, defined as routing-only ([Directive #2](../kernel/laws/prime-directives.md)).
- **Standard library** — agent/council/workflow/memory/report templates and the
  default workflows every company inherits.
- **Docs** — [../docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md) and
  [../docs/DESIGN-DECISIONS.md](../docs/DESIGN-DECISIONS.md). *(This track.)*

**Exit condition.** The kernel contracts, protocols, and stdlib templates are
stable and cross-linked, the Government is defined, and a brand-new empty company
would resolve all its inherited behavior from the layers below it with zero local
files. **No company is mounted before this is true** — you cannot inherit from a
moving floor.

## Phase 2 — Mount the three existing companies · PLANNED
**Goal.** Bring [ai-software-company](../ai-software-company/),
[AI-Game-Studio](../AI-Game-Studio/), and the legacy government material under the
kernel **without rewriting them in place**
([DESIGN-DECISIONS.md ADR-005](../docs/DESIGN-DECISIONS.md)).

**Scope.** Write a per-company **adapter** that lets each legacy tree satisfy the
[entity contract](../kernel/contracts/entity.md) and resolve its inheritance while
its files stay put; register each in the [registry](../kernel/registry/); map legacy
folders to inherited stdlib defaults and flag genuine local overrides. Preserve every
existing name and suffix ([conventions](../shared/conventions.md)).

**Exit condition.** All three companies load through the kernel, inherit the stdlib
by default, and behave identically to before — verified, with **no destructive edits**
to their original trees.

## Phase 3 — New companies as plugins · PLANNED
**Goal.** Prove "unlimited companies" by mounting *new* ones — marketing agency, a
research lab, a finance company, and beyond — as clean plugins built almost entirely
from inherited stdlib.

**Scope.** A [plugin contract](../kernel/contracts/) walkthrough; a minimal company
skeleton that is mostly empty because it inherits; one reference company stood up
end-to-end to validate the path; then additional companies added at near-constant
marginal cost.

**Exit condition.** A new company can be created, mounted, and run to a real
deliverable in a short, repeatable procedure, with its local footprint limited to
what genuinely makes it distinct.

## Phase 4 — Tooling & conformance automation · PLANNED
**Goal.** Make the laws *enforced*, not merely *written*.

**Scope.** A conformance checker for the [entity contract](../kernel/contracts/entity.md)
and [conventions](../shared/conventions.md) (every folder has a README, every
identity block is well-formed, every relative link resolves, no duplicated structure
per [Directive #6](../kernel/laws/prime-directives.md)); automated
[quality-gate](../shared/quality-standards.md) checks keyed to tier; a registry
validator. Run on every change.

**Exit condition.** A single command reports contract, convention, and link
conformance across the whole repo, and it is green.

## Phase 5+ — DX & kernel versioning · PLANNED
**Goal.** Make AIEOS pleasant to extend and safe to evolve over time.

**Scope.** Developer-experience polish (scaffolding a company/agent/council in one
step), explicit **versioning of the kernel** and shared contracts so companies can
declare and pin what they inherit, and a deliberate upgrade path for breaking
changes under [Directive #7](../kernel/laws/prime-directives.md). Each accepted change
is recorded in [../docs/DESIGN-DECISIONS.md](../docs/DESIGN-DECISIONS.md).

**Exit condition.** The kernel carries a version, companies declare the version they
inherit, and a kernel change ships with a documented, non-breaking-by-default
migration path.
