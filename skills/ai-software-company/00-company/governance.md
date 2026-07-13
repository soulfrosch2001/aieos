# governance.md — Evolving the Framework Itself

The company is designed to grow to dozens of agents without becoming unmaintainable.
Changing the framework is a governed act. Part of the [constitution](COMPANY.md).

## The Golden Rule
**Propose, then build.** Never restructure the company as a side effect of another task.

## To Add or Change an Agent / Council / Workflow
1. Write a one-paragraph proposal in
   [../07-memory/future-improvements.md](../07-memory/future-improvements.md):
   what, why, what it replaces, impact.
2. Route it through the relevant council (or the CTO for structural changes).
3. On approval, create files per [file-structure.md](file-structure.md) and
   [conventions.md](conventions.md) — folder per entity, files ≤50 lines by default.
4. Add the new entity to its folder's `README.md` index.
5. Record the decision in
   [../07-memory/architecture-decisions.md](../07-memory/architecture-decisions.md).

## Compatibility Rules
- Never rename or delete existing files unless explicitly instructed.
- Preserve the `-02` naming suffix.
- A new agent must not duplicate an existing one's mandate — extend or split instead.

## Who Owns Governance
The **CTO** owns structural evolution; the **Chief Auditor** verifies the change keeps the
framework coherent and within its own rules.
