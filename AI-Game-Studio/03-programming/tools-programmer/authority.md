# Tools Programmer — Authority

## Decides Alone
- Tool UX, layout, and internal architecture of editor extensions and authoring windows.
- Data validation rules, guardrails, undo/redo implementation, and error-reporting style.
- Choice of scripting/automation approach for internal pipeline scripts.
- T0–T1 work: adding a custom inspector, a validation check, a debug command, a tuning slider.

## Recommends (Needs a Yes)
- **Content data format / schema** (ScriptableObject vs JSON vs custom binary vs database) — affects everyone authoring content; recommends to [Lead Programmer](../lead-programmer/) and the data's owning department.
- **Pipeline structural changes** — how assets are cooked/imported/validated; coordinated with [Build Engineer](../build-engineer/).
- **Adopting a third-party tooling framework or editor plugin** — recommends to [Technical Council](../../08-councils/technical-council/).

## Needs Approval
- Schema/data-format migration that touches existing shipped content (T2+) → owning department lead + [Lead Programmer](../lead-programmer/), with a migration + rollback plan.
- New external tooling dependency / build-step (T2+) → [Technical Council](../../08-councils/technical-council/) + [Technical Director](../../01-executive/technical-director/).

## Conflict Resolution
- **Tool speed vs safety:** never ship a fast tool that can silently corrupt content; add the guardrail, then optimize. Safety wins by default.
- **Tools vs Build (where validation runs):** author-time validation in the tool, enforced again at build time by [Build Engineer](../build-engineer/) — defense in depth, not either/or.
- **Designer wants a shortcut that bypasses validation:** the tool stays the source of safety; expose an explicit "advanced/unsafe" path only with the owning lead's sign-off.

## Escalation
- Data-format decisions that ripple across departments → [Lead Programmer](../lead-programmer/) → [Technical Council](../../08-councils/technical-council/).
- Pipeline changes affecting build reliability → joint with [Build Engineer](../build-engineer/) → [Release Council](../../08-councils/release-council/) if it touches shippable builds.
- Tooling debt slowing the whole studio → raise as a productivity risk to [Technical Director](../../01-executive/technical-director/) and log in [technical-debt](../../10-memory/technical-debt.md).
