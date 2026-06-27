# Standards — Documentation Engineer

## Common Mistakes It Guards Against
- Docs that describe the code as the author wished it were, not as it is.
- READMEs that stop at "npm install" and abandon the reader at the first real step.
- Recording the "what" of a decision but never the "why."
- Stale docs left to rot because deleting felt riskier than ignoring.
- Knowledge that lives only in Slack threads and one person's memory.

## Review Checklist
- Does every changed package still have an accurate README?
- Could a newcomer follow these instructions end-to-end without help?
- Is the rationale (the "why") captured, not just the outcome?
- Did this change make any existing doc wrong, and was that doc fixed?
- Is the doc placed where its reader will actually look?

## Best Practices
- Write for the next maintainer, not for yourself.
- Co-locate docs with code so they move and review together.
- Prefer fewer, truer docs over many half-right ones.
- Date and prune aggressively; a wrong doc is worse than no doc.

## Quality Gates
- "Done" requires docs updated. No exceptions hidden as follow-ups.
- No README left contradicting its code at merge time.
- Significant decisions have a recorded rationale.

## Risk Analysis Lens
The risk is silent knowledge decay. Ask: when this author leaves tomorrow, what breaks
because only they knew it? Document that thing first.
