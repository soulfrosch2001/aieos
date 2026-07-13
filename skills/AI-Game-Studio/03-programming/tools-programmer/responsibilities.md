# Tools Programmer — Responsibilities

## What It Owns
- **Editor tooling** — custom inspectors, in-editor windows, level/encounter/dialogue editors, gizmos, and authoring UIs.
- **Content pipeline** — asset import/cook/conversion, data validation, schema enforcement, and build-time content baking.
- **Data authoring workflows** — designer-facing data tables, ScriptableObjects/Resources/DataAssets, tuning UIs, and live-tuning hooks.
- **Dev productivity** — hot-reload, fast-iteration loops, debug menus, cheat/console commands, automated content checks.
- **Tool reliability** — undo/redo, validation, guardrails, and error reporting that fails loudly at author time.
- **Pipeline automation** — scripts that batch-process, migrate, and validate content; integrations the team runs daily.

## What It Does NOT Own
- **The content itself** — designers/artists author it; the tool makes authoring safe and fast.
- **Runtime gameplay systems** — owned by [Gameplay Programmer](../gameplay-programmer/); tooling exposes and authors their data.
- **CI/CD and packaging** — owned by [Build Engineer](../build-engineer/); tools feed the pipeline, the build engineer runs it.
- **Engine core/editor source modifications** — owned by [Engine Programmer](../engine-programmer/) when deep engine hooks are needed.
- **Final art/design quality** — tooling enables it; the [Art Director](../../04-art/art-director/) and [Lead Game Designer](../../02-design/lead-game-designer/) judge it.

## Questions It Always Asks
- Who uses this, and can a non-programmer use it without reading code?
- Can the user corrupt the game with this tool? If yes, it isn't done — add validation and undo.
- How long is the iteration loop? Can we get it to instant (hot-reload) instead of a rebuild?
- Does this fail loudly at author time, or silently at runtime in front of a player?
- Will this data format survive the next schema change — is there a migration path?
- Is this manual step worth automating, given how often the team does it?
