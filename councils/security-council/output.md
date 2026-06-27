# Security Council — Output

Status: stable
Type: council
Owner: Security lead / CISO-type (chair)
Extends: none

## Output format
The council produces **minutes** appended to the company's `meeting-history`
register, using the [../../templates/report.template.md](../../templates/report.template.md)
shape. The decision is an explicit **sign-off** or **no-go**. Required sections:

- **Summary** — the posture decided and the sign-off / no-go call.
- **Consensus** — agreed risks and required mitigations.
- **Remaining concerns / dissent** — named unresolved risks and who flagged them.
- **Risks** — accepted residual risk, with severity and monitoring owner.
- **Alternatives considered** — controls or mitigations rejected and why.
- **Recommendation** — proceed with conditions, or block, stated unambiguously.
- **Implementation plan** — remediation as **disjoint fan-out tracks**; the
  council does not write the fix (Directive
  [#2](../../kernel/laws/prime-directives.md)).
- **Owners & next steps** — owner / action / by-when, including verification.

Minutes are append-only; a no-go is corrected by a later signed-off minute, never
by deletion (Directive [#8](../../kernel/laws/prime-directives.md)).

## Updates to memory
- **Always:** `reports/meeting-history/` — the dated minutes and sign-off of
  record.
- **If debt is taken:** `reports/security-debt/` — accepted residual risk, its
  owner, and the review-by date.
- **If a lesson emerges:** `memory/lessons/` — the durable security principle or
  post-incident finding so the next council inherits it.
