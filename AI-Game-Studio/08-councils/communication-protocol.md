# 📡 communication-protocol.md — How Council Agents Talk

`Status: stable`

> Councils communicate through **structured artifacts**, not chatter. Indexed by
> [README.md](README.md); pairs with [debate-protocol.md](debate-protocol.md).
> Authority by tier: [../00-company/decision-authority.md](../00-company/decision-authority.md).
> If it isn't written, it didn't happen (**Prime Directive #5: the studio remembers**).

## The Four Verbs
- **Reports to** — sends status and outcomes upward; the receiver is accountable.
- **Consults** — asks a peer for input; advice is non-binding.
- **Approves** — holds a gate; nothing proceeds past it without a yes.
- **Escalates** — hands a decision up when it exceeds the sender's mandate.

## Who Chairs
- Each council has a **standing chair** (named in its `README.md`) who frames the
  decision, enforces the [debate-protocol](debate-protocol.md), and owns the minutes.
- The chair decides at the round limit and records dissent. The chair **does not** get a
  louder vote — only the tie-break.
- If the chair is the requester or has a conflict of interest, they hand the gavel to the
  most senior neutral member and note it in the minutes.

## Meeting Minutes Format
Every session produces minutes (template in each council's `output.md`). Mandatory fields:

```
Council:        <council-id>          Date: YYYY-MM-DD
Tier:           T0–T4                  Chair: <role>
Attendees:      <roles present>
Topic:          <one line>
Consensus:      <what all genuinely agree on>
Remaining Concerns: <name — concern>   (never empty if dissent exists)
Risks:          <risk — likelihood/impact/owner/mitigation>
Alternatives Considered: <option — why it lost — owner>
Decision:       <the call> — winning option owner: <name>
Approval Gate:  <who signed off, per Tier>
Implementation Plan / Owners & Next Steps: <who · what · workflow · by when>
```

Minutes are appended to [../10-memory/meeting-history.md](../10-memory/meeting-history.md).
Memory is **append-mostly**: add corrections, never rewrite history.

## Timeboxing
- **Framing:** ≤ 5 min — chair states the decision and the constraints.
- **Rounds:** each round is timeboxed; a member who passes their turn abstains on record.
- **Standard council:** target ≤ 45 min, hard stop at 2 rounds → chair decides.
- **T4 live incident:** no scheduling overhead — convene now, 1 round, decide, log after.
- A council that cannot decide inside its timebox **escalates**; it does not reschedule
  indefinitely.

## Escalation Lines
- **Craft deadlock** (specialists inside one council) → the **council chair** decides.
- **Cross-department conflict** (e.g. art feel vs. frame budget) →
  [Executive Orchestrator](../01-executive/executive-orchestrator/), then
  [Creative Director](../01-executive/creative-director/) for vision or
  [Technical Director](../01-executive/technical-director/) for technical risk.
- **Quality / security objection** → [Chief Auditor](../01-executive/chief-auditor/),
  who can block regardless of tier (Prime Directive #7). Only a recorded **human**
  risk-acceptance overrides the block.
- **Schedule / scope / ship conflict** → [Production Director](../01-executive/production-director/).

## Convene Only What You Need
Per [README.md](README.md), pull together **only the council the decision requires**, and
keep any single build cycle to **≤ 15 concurrent agents** with disjoint ownership. A
gameplay tweak does not summon the technical, art, and economy councils "to be safe."
