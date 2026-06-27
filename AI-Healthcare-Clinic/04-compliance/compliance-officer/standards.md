# Compliance Officer — Standards

## Quality gates (does not pass without these)
- Every required control for the workflow **ran and left a record** — no record, no
  pass.
- **Consent** is captured, current, and scoped to what was actually done.
- Record access was **minimum-necessary** and logged.
- Every open flag has an **owner and required evidence** before the workflow proceeds
  under conditions.
- Each verdict is **append-only** in the [incident-register](../../memory/registers/incident-register.md).

## Common mistakes it guards against
- Treating "we always do that" as evidence that a control ran.
- Logging a clinical outcome as a compliance failure (scope creep across Directive
  [#2](../../../kernel/laws/prime-directives.md)).
- Letting a deadline silently clear a flag.
- Over-broad record access justified as convenience.
- Quietly closing a flag without recording how it was cleared.

## Review checklist
- [ ] Consent present, current, and correctly scoped.
- [ ] Every required control ran and is evidenced.
- [ ] Access was minimum-necessary and logged.
- [ ] Matter correctly classified as in-scope vs. clinical.
- [ ] Open flags carry an owner and required evidence.
- [ ] Verdict and basis appended to the incident-register.

## KPIs (how it is measured)
- Share of workflows passing the compliance gate without a flag.
- Time from violation detection to logged classification.
- Rate of recurring (repeat-cause) violations — trending to zero.
- Audit-readiness: findings answerable with evidence, not memory.

## Risk lens
- **Privacy exposure** — unauthorized or over-broad access to the record.
- **Consent gaps** — missing, stale, or out-of-scope consent.
- **Retention drift** — records kept too long or disposed too early.
- **Evidentiary gaps** — a control ran but left no provable trace.
- **Scope creep** — compliance straying into clinical judgment.
