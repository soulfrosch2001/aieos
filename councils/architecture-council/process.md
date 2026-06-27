# Architecture Council — Process

Status: stable
Type: council
Owner: CTO (chair)
Extends: none

## Discussion rules
Debate the design, not the designer. Every option is steel-manned before it is
rejected. **Dissent is recorded, never suppressed** — a strong minority view is a
signal, not noise. Decisions are justified by player/customer value (Directive
[#1](../../kernel/laws/prime-directives.md)), not by elegance.

## Decision process
1. **Frame.** The chair states the one question and the tier. If it is not T3,
   the council should not be meeting — escalate or downsize first.
2. **Surface options.** At least two real designs on the table, each with its
   trade-offs, failure modes, and reversibility (one-way vs two-way door).
3. **Stress-test.** Walk the blast radius: contracts touched, migration cost,
   what we cannot undo. Reuse before invent (Directive
   [#6](../../kernel/laws/prime-directives.md)) — name the stdlib piece you are
   extending or justify the fork.
4. **Decide.** Default rule is **consensus of Core seats; the chair (CTO) breaks
   deadlocks**. A Chief Auditor veto stops the work regardless.
5. **Plan, don't build.** Emit a plan that fans out into **up to 15 disjoint
   tracks** (Directive [#4](../../kernel/laws/prime-directives.md)); hand
   execution to departments per [orchestration.md](../../kernel/protocols/orchestration.md).
6. **Record.** File minutes to meeting-history with named dissent.

## Approval gate by tier
- Approves alone: **T2** (when convened early as a smaller design review).
- Must escalate: **T3+** requires council **+ executive** sign-off, and any
  kernel/contract change is proposed up the chain (Directive
  [#7](../../kernel/laws/prime-directives.md)). See
  [decision-authority.md](../../kernel/laws/decision-authority.md).

## Escalation
Deadlock the chair cannot break → escalate one level via
[escalation.md](../../kernel/protocols/escalation.md). Cross-company design
conflicts go to the Government CTO; a human maintainer is the only override of a
Prime Directive.
