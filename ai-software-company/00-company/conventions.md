# Conventions
Status: stable
Type: reference
Owner: executive-orchestrator
Extends: ../../shared/conventions.md

This company inherits the kernel's authoritative
[shared conventions](../../shared/conventions.md) — one concept per file, every folder
carries a `README.md`, kebab-case lowercase names, relative cross-links, the canonical
entity shapes, and the optional `Status:` tag. Those **supersede** the previously-duplicated
local rules.

## Local additions (stricter only)
- **Target ≤50 lines per file** (the shared default is ~60). Small files > big files;
  exceed only when splitting would genuinely harm clarity.
- **Everything lives in its numbered folder** (`00`–`10`): `00-company` ·
  `01-executive` · `02-engineering` · `03-product` · `04-design` · `05-workflows` ·
  `06-councils` · `07-memory` · `08-prompts` · `09-templates` · `10-tools`. See
  [file-structure.md](file-structure.md).
