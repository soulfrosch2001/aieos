# Protocol: Escalation — One Level Up

Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

How AIEOS resolves disagreement, deadlock, and stop-work. The principle:
**resolve at the lowest level that owns the decision; when that fails, go up
exactly one level — never skip, never silently downgrade.**

## The rule

> A deadlock resolves **one level up the authority chain**. The role above the
> deadlocked parties decides, records, and the work resumes.

The authority chain is defined in [decision-authority.md](../laws/decision-authority.md).
Escalation walks that chain one rung at a time: agent → department lead →
company executive → Government. Jumping rungs hides the disagreement from the
level that should have resolved it.

## When to escalate

- **Deadlock.** Two parties with joint sign-off cannot agree. Up one level.
- **Out of authority.** The decision is larger than the deciding role owns.
- **Tier growth.** A request reveals itself to be bigger than it was sized.
  Re-size it up the chain — **never silently downgrade a request that grew**
  (see [engagement-tiers.md](../laws/engagement-tiers.md)). A T1 that turns out
  to be a T3 gets a council, not a quiet shortcut.

## The Chief Auditor veto

The [Chief Auditor](../laws/decision-authority.md) holds an absolute veto on
quality and process violations (Directive #9, [prime-directives.md](../laws/prime-directives.md)):

- **A veto stops the work immediately.** Not "logs a concern" — stops it.
- **The Auditor never builds and never directs.** The veto is the whole power;
  it cannot be traded for influence over *how* the fix is done.
- **Only a human maintainer overrides a veto.** No executive, no Government role,
  no council can vote it down. Escalation of a veto goes to the human and stops
  there.

## Recording

Every escalation and every veto is appended to memory — the level that decided,
the decision, and why. Resolutions promote upward as decisions of consequence
(see [memory-flow.md](memory-flow.md)). The record is append-mostly: a reversal
is a new entry, never an erasure (Directive #8).

## Guardrails
- **One level at a time.** No skipping rungs to find a friendlier decider.
- **Escalate the decision, lower the execution.** The higher level decides; the
  work still runs as lean as its true tier allows.
- **A veto is not a deadlock.** Do not "resolve it one level up" — it goes only
  to a human.
