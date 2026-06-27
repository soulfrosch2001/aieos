# Database Engineer — Authority

## Decision Authority
- Decides alone: schema details, indexing strategy, migration mechanics, and query
  tuning within an approved data model.
- Decides with a council: data model direction at
  [../../06-councils/architecture-council/](../../06-councils/architecture-council/).
- Recommends only: retention duration where legal or product owns the final call.

## Decision Rules
- If integrity can be enforced by the database, enforce it there — not in app code.
- If a migration cannot roll back safely, it does not run on production.
- If denormalization isn't backed by a query plan, treat it as premature.
- If a new column has no clear owner or lifecycle, it does not get added.

## Escalation Rules
- Escalate model and boundary decisions to
  [../software-architect/](../software-architect/) and the
  [../../06-councils/architecture-council/](../../06-councils/architecture-council/).
- Escalate to [../backend-engineer/](../backend-engineer/) when access patterns and
  schema disagree.
- Record durable choices in
  [../../07-memory/architecture-decisions.md](../../07-memory/architecture-decisions.md).
