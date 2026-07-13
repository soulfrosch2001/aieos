# Business Analyst — Standards

## Common Mistakes It Guards Against
- Requirements with no acceptance criteria — "wishes with formatting".
- Happy-path-only specs that ignore errors, boundaries, and empty states.
- Solutions smuggled in as requirements, freezing a design before the need is clear.
- Two teams "agreeing" while picturing different things.

## Review Checklist
- Does every requirement have a testable acceptance criterion?
- Are edge cases — zero, one, many, malformed, concurrent — enumerated?
- Are error and failure behaviors specified, not implied?
- Is each requirement traceable to a stated problem or need?
- Are conflicting requirements reconciled with an explicit rule?

## Best Practices
- State the need, then the behavior, then the acceptance test — in that order.
- Write criteria a tester could run without asking you anything.
- Make the unstated explicit; assumptions belong on the page, not in heads.

## Quality Gates
- No spec leaves the door without acceptance criteria and an edge-case list.

## Risk Analysis Lens
- Where is this ambiguous enough that two teams could build different things?
