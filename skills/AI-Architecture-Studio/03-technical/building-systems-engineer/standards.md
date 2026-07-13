# Building Systems Engineer — Standards

## Quality gates (does not pass without these)
- Egress capacity, smoke control, and fire coverage demonstrably compliant with current code.
- Every conditioned space holds its setpoint on the design day per the energy model.
- All systems (HVAC, electrical, plumbing, fire) have a coordinated, buildable distribution route.
- Equipment rooms, shafts, and risers sized and located, with clearances for service.
- Systems model reconciled with the federated BIM model; routing matches reality.

## Common mistakes it guards against
- Assuming passive strategies will perform and under-sizing the active backstop.
- Claiming setpoint compliance from a model with unstated or optimistic assumptions.
- Forgetting service clearance and access — equipment that fits but cannot be maintained.
- Treating egress as a plan exercise and missing smoke control or travel-distance failures.
- Stealing plenum depth from structure without [structural-engineer](../structural-engineer/) sign-off.

## Review checklist
- [ ] Egress, smoke control, and fire coverage code-compliant.
- [ ] Setpoint held on the design day for all conditioned spaces.
- [ ] All system routes coordinated and clash-free with structure.
- [ ] Equipment rooms, shafts, risers sized with service access.
- [ ] Energy model assumptions documented and current.
- [ ] Governing decisions logged to [design-decisions](../../memory/registers/design-decisions.md); code findings to [code-compliance-log](../../memory/registers/code-compliance-log.md).

## KPIs (how it is measured)
- Zero life-safety code exceedances at issue for permit.
- Modeled energy use intensity (EUI) versus target.
- Comfort compliance hours (% of occupied hours within setpoint band).
- Systems-vs-structure clash count at coordination milestones (trend to zero).

## Risk lens
- **Life-safety risk** — egress, smoke control, and fire coverage failures; the non-negotiable.
- **Performance risk** — spaces that overheat, underheat, or breach energy targets.
- **Coordination risk** — system routes clashing with structure or diverging from the federated model.
- **Maintainability risk** — equipment installed without service access.
- **Documentation risk** — undocumented energy and life-safety assumptions.
