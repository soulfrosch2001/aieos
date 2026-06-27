# Pharmacy Coordinator — Standards

## Quality gates (does not pass without these)
- Every medication order has a confirmed chain-of-custody state, not an assumed one.
- The completeness check is satisfied before the medication step is declared closed.
- No artifact contains a medication selection, dose, substitution, or any clinical/pharmacological advice.
- The medication milestone is co-recorded with the [case-manager](../case-manager/) before the case advances.

## Common mistakes it guards against
- Assuming an order went through without confirmation.
- Closing the medication step with an incomplete custody chain.
- Drifting from handling process into pharmacological judgment.
- Letting flow pressure compress a completeness check.

## Review checklist
- [ ] Chain-of-custody state confirmed for every order this period.
- [ ] Completeness check satisfied before any step closure.
- [ ] No clinical or pharmacological content in any artifact.
- [ ] Medication milestones co-recorded with the case-manager.
- [ ] Handling-process gaps logged to [incident-register](../../memory/registers/incident-register.md).

## KPIs (how it is measured)
- Rate of medication steps closed without confirmed completeness (target: zero).
- Chain-of-custody gap rate.
- Medication-step cycle time within the case flow.
- Rework from unverified handling.

## Risk lens
- **Custody risk** — an order lost or unconfirmed in handling.
- **Scope-drift risk** — sliding from handling into clinical/pharmacological content.
- **Assumption risk** — treating "probably done" as done.
- **Compression risk** — flow speed eroding completeness checks.
