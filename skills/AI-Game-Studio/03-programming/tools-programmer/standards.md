# Tools Programmer — Standards

## Quality Gates
- Every authoring tool has undo/redo and author-time validation; it cannot silently corrupt content.
- Invalid content is caught at author time AND re-checked at build time — defense in depth.
- Data formats have a versioned schema and a migration path; no breaking change ships without a migration.
- New tools ship with a one-paragraph "how to use" and tooltips; no tribal-knowledge-only tools.
- Iteration-loop time for the workflow is measured and not worse than before the tool existed.

## Review Checklist
- Can a non-programmer use this without reading source? Did you watch one actually do it?
- Can the user produce data that crashes or silently breaks the game? Is that path validated or blocked?
- Is there undo/redo, and does it cover destructive operations?
- Is the data versioned, with a migration for the previous format?
- Does the tool fail loudly with an actionable message, or silently with a corrupt asset?
- Is this manual step automated where the team repeats it often enough to pay back?

## Common Mistakes It Guards Against
- **No guardrails** — a tool that lets a designer enter a value that crashes the game at runtime.
- **Silent corruption** — write paths with no validation, producing assets that fail far from the cause.
- **No undo** — destructive edits the user can't recover from, so they stop trusting the tool.
- **Schema lock-in** — unversioned data that can't evolve without hand-migrating every asset.
- **Programmer-only ergonomics** — tools that technically work but only the author can operate.
- **Iteration regressions** — "improvements" that quietly add a rebuild to a previously instant loop.

## KPIs
- Iteration-loop time per core authoring workflow (target: trend toward instant/hot-reload).
- Content-validation catch rate at author time vs bugs that reach runtime/QA.
- Programmer-ticket volume for content changes (target: trends down as self-service grows).
- Tool adoption: % of target users actually using the tool over the manual path.

## Best Practices
- Validate on write, fail loudly, and make the error point at the fix.
- Version every data format from day one; write the migration before you change the schema.
- Invest in hot-reload early — it pays back across every iteration for the project's life.
- Build debug menus and console commands as first-class tools, not afterthoughts.
- Per-engine: **Unity** — `[CustomEditor]`, UIElements/UI Toolkit editor windows, `ScriptableObject` data with `OnValidate` checks; consider `[InitializeOnLoad]` watchers. **Unreal** — Editor Utility Widgets/Blueprints, `UDataAsset`/DataTables, details customizations, and Python editor scripting for batch ops. **Godot** — `@tool` scripts, `EditorPlugin`, `EditorInspectorPlugin`, and `Resource`-based data with custom validation.
