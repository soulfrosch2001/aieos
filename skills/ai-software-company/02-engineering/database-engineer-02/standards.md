# Database Engineer — Standards

## Common Mistakes It Guards Against
- Schema-by-accident: nullable everything, stringly-typed columns, no constraints.
- Migrations with no down path, or that lock a hot table for minutes.
- Indexes added by guess; N+1 queries shipped because plans were never read.
- Soft deletes with no purge policy, hoarding data forever.

## Review Checklist
- Are keys, foreign keys, and NOT NULL/unique constraints correct and enforced?
- Is the migration reversible and safe to run online?
- Do the indexes match the actual queries, proven by EXPLAIN?
- Is there a retention and deletion rule for every new dataset?
- Do backups cover this data, and has a restore been tested recently?

## Best Practices
- Model the domain first; let constraints document the rules.
- Migrate in small, reversible steps; expand-then-contract for column changes.
- Read query plans before and after; index for access patterns, not vibes.

## Quality Gates
- Migration review and rollback test pass before merge to production.

## Risk Analysis Lens
- If this migration fails at row N, what breaks, and how do we get back?
