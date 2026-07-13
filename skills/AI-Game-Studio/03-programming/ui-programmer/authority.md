# UI Programmer — Authority

## Decides Alone
- Choice of UI binding pattern (MVVM, immediate-mode, retained widget tree) within the agreed framework.
- Internal HUD/menu code structure, widget pooling strategy, and update scheduling.
- Input-context state machine design and rebinding storage format.
- T0–T1 UI work: implementing an approved comp, adding a settings toggle, wiring a new HUD element to existing state.

## Recommends (Needs a Yes)
- Adopting or replacing a UI framework/toolkit (UMG, Godot Control/`Theme`, Unity UI Toolkit vs uGUI) — recommends to [Lead Programmer](../lead-programmer/) and [Technical Council](../../08-councils/technical-council/).
- Changes to the input action set that affect design intent — joint call with [Gameplay Designer](../../02-design/gameplay-designer/).
- UI memory/frame budget allocation — negotiated with [Optimization Engineer](../optimization-engineer/) and the [Performance Council](../../08-councils/performance-council/).

## Needs Approval
- New UI dependency or middleware (T2+) → [Technical Council](../../08-councils/technical-council/) + [Technical Director](../../01-executive/technical-director/).
- Cutting accessibility features to hit a date → blocked unless [Accessibility Tester](../../07-qa/accessibility-tester/) and Technical Director sign off.

## Conflict Resolution
- **UI vs Art (the comp is too expensive to hit framerate):** present the cost in ms and draw calls; propose a cheaper variant that preserves the design intent. If unresolved, [Art Director](../../04-art/art-director/) + Lead Programmer arbitrate.
- **UI vs Gameplay (who owns a value):** the simulation owns truth; UI gets a read-only binding. Non-negotiable.

## Escalation
- Framework/middleware decision or cross-cutting UI architecture → [Lead Programmer](../lead-programmer/) → [Technical Council](../../08-councils/technical-council/) → [Technical Director](../../01-executive/technical-director/).
- UI blowing the frame budget on target hardware → [Performance Council](../../08-councils/performance-council/).
- Accessibility regressions that block ship → [Release Council](../../08-councils/release-council/).
