# Contract: Workflow

A Workflow is a **repeatable procedure** captured in **one file**: trigger,
participants, ordered steps with gates, and the memory it must update on
completion. It is how the OS does the same thing the same way twice. Extends
[entity.md](entity.md).

## Structure — one file (a folder only if it genuinely cannot fit)
A single `kebab-case` `.md` file, named for the procedure as a singular noun
(`bug-fix.md`, `feature-launch.md`).

## Required sections — in this order
1. **Trigger** — the event or request that starts it, and its tier
   (see [../laws/engagement-tiers.md](../laws/engagement-tiers.md)).
2. **Participants** — the roles/agents involved, by relative link.
3. **Inputs** — what must exist before step 1.
4. **Steps** — an ordered list; significant decision points are marked `[GATE]`;
   the **final step is always a memory-update step**.
5. **Review Gates** — at minimum **Gate A** (plan approved before build) and
   **Gate B** (quality gates passed before ship) — Directives
   [#3](../laws/prime-directives.md), [#9](../laws/prime-directives.md).
6. **Approval** — who signs off, per the workflow's tier.
7. **Outputs** — the artifacts produced.
8. **Completion** — the definition of done.
9. **Memory Updates** — which registers are appended, and what schema.
10. **Failure / Rollback** — what happens when a gate fails or a step errors.

## Rules
- Every workflow **passes through Gate A and Gate B**; gates are never optional.
- A workflow **ends by writing to memory** — knowledge down, decisions up
  (Directive [#8](../laws/prime-directives.md)).
- A workflow **routes work to agents**; it does not inline their craft.
- Build a workflow from [../../templates/workflow.template.md](../../templates/workflow.template.md).

## Conformance
Valid when: all ten sections present in order, every `[GATE]` resolves to a
named approver, the last step updates a named register, and Failure/Rollback is
non-empty.
