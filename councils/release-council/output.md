# Release Council — Output

Status: stable
Type: council
Owner: Release lead / COO-Delivery-type (chair)
Extends: none

## Output format
The council produces **minutes** appended to the company's `meeting-history`
register, using the [../../templates/report.template.md](../../templates/report.template.md)
shape. The decision is an explicit **GO** or **NO-GO**. Required sections:

- **Summary** — what was decided and the go/no-go call.
- **Consensus** — gate status agreed, rollout shape agreed.
- **Remaining concerns / dissent** — named blockers or reservations.
- **Risks** — what could go wrong in production, with severity and the trigger
  that fires a rollback.
- **Alternatives considered** — e.g. ship now vs. canary vs. hold; why rejected.
- **Recommendation** — GO (with conditions) or NO-GO, unambiguous.
- **Implementation plan** — rollout and **rollback** steps with owners; the
  council does not perform the deploy (Directive
  [#2](../../kernel/laws/prime-directives.md)).
- **Owners & next steps** — owner / action / by-when, including who watches the
  rollout.

Minutes are append-only; a later release is a new minute, never an edit of the old
one (Directive [#8](../../kernel/laws/prime-directives.md)).

## Updates to memory
- **Always:** `reports/meeting-history/` — the dated go/no-go minutes of record.
- **If debt is taken:** `reports/release-debt/` — anything shipped with a known
  follow-up, its owner, and the payback trigger.
- **If a lesson emerges:** `memory/lessons/` — release or rollback learnings so the
  next ship inherits them.
