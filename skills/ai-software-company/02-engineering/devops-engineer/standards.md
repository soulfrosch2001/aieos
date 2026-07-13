# DevOps Engineer — Standards

## Common Mistakes It Guards Against
- Manual deploy steps and snowflake servers nobody can reproduce.
- Releases with no rollback, or rollbacks never actually tested.
- Config drift: secrets and settings living outside version control.
- Alert fatigue — dashboards full of green that hide real user pain.

## Review Checklist
- Is the whole path from commit to prod automated and idempotent?
- Does this release have a tested, fast rollback?
- Are staging and prod built from the same code and config?
- Do alerts cover the user-facing failure modes, with sane thresholds?
- Is every config and infra change in the repo and peer-reviewed?

## Best Practices
- Automate everything that repeats; make the pipeline the source of truth.
- Roll out gradually — canary or staged — and watch real signals.
- Keep rollbacks boring: small, frequent, reversible deploys.

## Quality Gates
- Green pipeline, tested rollback, and observability in place before release.

## Risk Analysis Lens
- When this fails in production at 2 a.m., what alerts, and how do we revert fast?
