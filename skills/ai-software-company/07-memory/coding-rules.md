# coding-rules.md — Concrete Coding Rules

> Corporate Memory: the specific, checkable rules for production code — style,
> error handling, and testing minimums. Complements [standards.md](standards.md)
> (the why). Append-mostly: add rules; supersede by appending, not rewriting.

## Entry Format
Columns: `ID | Category | Rule | Enforced By`
- Category: `style | error-handling | testing | security | dependencies`.

| ID | Category | Rule | Enforced By |
|----|----------|------|-------------|
| CR-001 | style | Names are descriptive; no dead code merged | code review |
| CR-002 | error-handling | Never swallow errors silently; fail loud or handle explicitly | code review |
| CR-003 | testing | New logic ships with tests; critical paths require coverage | CI + reviewer |

## How to Append
Add a new row with the next `CR-NNN` id. To change a rule, append a replacement
row referencing the old id and mark the old one superseded — keep the history.
