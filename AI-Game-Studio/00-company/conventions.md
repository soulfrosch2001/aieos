# conventions.md

Status: stable
Type: reference
Owner: executive-orchestrator
Extends: ../../shared/conventions.md

This studio inherits the kernel's authoritative
[shared conventions](../../shared/conventions.md) — file/folder shapes, cross-link style
(relative paths), English-only in-repo content, and the preservation rule (never rename or
delete; overwrite only placeholders) — which supersedes the previously-duplicated local
text.

## Local additions (stricter only)
Studio-specific structural conventions layered on the shared baseline:

- **Roles are folders**, never single files, containing exactly: `README.md` ·
  `responsibilities.md` · `authority.md` · `craft.md` · `standards.md`. The
  [Executive Orchestrator](../01-executive/executive-orchestrator/) additionally has
  `routing.md`. Role ids are lowercase-hyphenated and match [org-chart.md](org-chart.md).
- **Councils** are folders (`README.md` · `process.md` · `output.md` plus shared
  `debate-protocol.md` / `communication-protocol.md`); **workflows** are flat `.md` files;
  **memory** are flat `.md` registers.
- **Engine-agnostic rule:** write engine-neutral by default; add `### Godot` / `### Unity` /
  `### Unreal` subsections only when the engine genuinely changes the answer.
- **Numbered department prefixes (`00`–`12`)** are stable; never renumber without governance sign-off.
