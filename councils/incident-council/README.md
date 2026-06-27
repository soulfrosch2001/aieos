# Incident Council
Status: stable
Type: council
Owner: incident-commander
Extends: none

## Purpose
The body that runs **T4 crisis response**: production is down, a security breach
is live, or reputation is on fire. It coordinates one fix under the hotfix
workflow and then disbands. It decides *what we do right now and who does it* —
it does **not** run the post-mortem (that is a separate forum) and it never
ships unreviewed code as a shortcut around the gates it can waive only
deliberately.

## Charter
A single live incident, at [T4](../../kernel/laws/engagement-tiers.md). One
incident, one council; a second concurrent incident gets its own.

## Participants
- **Chair** (breaks deadlocks): incident-commander — owns the call, owns the clock.
- **Core** (must attend): on-call engineer for the failing surface, the affected
  department lead, a Government liaison (Directive
  [#5](../../kernel/laws/prime-directives.md) — companies do not coordinate the
  blast radius directly; the Government does).
- **Advisory** (as needed): security lead, comms lead, SRE, data owner.

## When convened
Only at [T4](../../kernel/laws/engagement-tiers.md) — see
[engagement-tiers.md](../../kernel/laws/engagement-tiers.md). Convened in
minutes, not scheduled. Standing councils do not exist (Directive
[#3](../../kernel/laws/prime-directives.md)).

## Inputs
- The trigger signal (alert, breach report, customer-facing failure) and its
  current blast radius.
- The tier budget that was breached — links to
  [performance-council](../performance-council/) findings if relevant.
- Rollback/feature-flag options already on the table.

## Index
- [process.md](process.md) — how the room runs under fire.
- [output.md](output.md) — what it files to memory.
