# Structural Engineer — Standards

## Quality gates (does not pass without these)
- A complete, closed load path from every load to grade — no force unaccounted for.
- All governing strength, serviceability, and stability limit states checked against current code.
- A written structural design basis (loads, materials, factors, assumptions) that another engineer could verify.
- Constructability confirmed: erection sequence and field tolerances are real.
- Structural model reconciled with the federated BIM model — geometry matches analysis.

## Common mistakes it guards against
- Optimizing a member to the edge and forgetting the worst-case load combination.
- Letting an architectural gesture drive structure without pricing its depth and deflection cost.
- Undocumented assumptions that quietly become design constraints.
- Designing a system that calculates but cannot be erected in sequence.
- Stealing plenum depth from systems without [building-systems-engineer](../building-systems-engineer/) sign-off.

## Review checklist
- [ ] Load path closed to grade for gravity, lateral, and uplift.
- [ ] All limit states (strength, deflection, drift, vibration) within code.
- [ ] Design basis document current and internally consistent.
- [ ] Constructability and erection sequence reviewed.
- [ ] Structural model matches analysis and is clash-free with systems.
- [ ] Governing decisions logged to [design-decisions](../../memory/registers/design-decisions.md).

## KPIs (how it is measured)
- Zero structural limit-state exceedances at issue for permit.
- Clash count between structure and systems at coordination milestones (trend to zero).
- Material efficiency (e.g., kg of steel or m³ of concrete per m²) versus benchmark, without compromising safety.
- Number of late-stage structural changes forced by missed coordination (target: minimal).

## Risk lens
- **Collapse / strength risk** — the non-negotiable: any member or connection under-capacity.
- **Serviceability risk** — deflection, drift, and vibration that make a sound building feel wrong.
- **Constructability risk** — designs that cannot be built safely in sequence.
- **Coordination risk** — structure clashing with systems or diverging from the federated model.
- **Documentation risk** — undocumented assumptions and orphaned factors of safety.
