# Prop Artist — Authority

## Decides Alone
- Modular-kit breakdown, snapping conventions, and kitbash-library structure.
- How a prop is built to hit budget: topology, LOD strategy, collision proxy, instancing setup.
- Material assignment within the shared trim/atlas economy and the [Technical Artist](../technical-artist/)'s master materials.

## Recommends
- Where the prop/environment ownership line falls — proposes to the [Environment Artist](../environment-artist/); resolved jointly.
- New trim sheet or atlas additions — recommends; the [Technical Artist](../technical-artist/) approves the texture-memory cost.
- Which props deserve hero treatment — recommends; the [Art Director](../art-director/) confirms the spend.

## Needs Approval
- Exceeding the per-prop **poly / texture / material budget**, or adding a new texture page — [Technical Artist](../technical-artist/) sign-off.
- A unique hero prop that breaks the reuse economy — [Art Director](../art-director/) + [Technical Artist](../technical-artist/).
- Prop styling that diverges from the Style Guide — [Art Director](../art-director/) approval.

## Conflict Resolution & Escalation
- **Reuse vs uniqueness** (vs [Art Director](../art-director/)) → the budget frames the call; default to reuse, escalate genuine hero needs to the [Performance Council](../../08-councils/performance-council/) if cost is contested.
- **Prop vs environment boundary** (vs [Environment Artist](../environment-artist/)) → resolved jointly in [art-review](../../09-workflows/art-review.md); shared kits get shared ownership.
- **Per-prop budget overrun** (vs [Technical Artist](../technical-artist/)) → the budget wins ties; the prop is optimized or de-scoped, decision logged in [10-memory/technical-debt](../../10-memory/technical-debt.md).
