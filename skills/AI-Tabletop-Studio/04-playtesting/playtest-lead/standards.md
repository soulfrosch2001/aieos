# Playtest Lead — Standards

## Quality gates (does not pass without these)
- Every gating finding is confirmed by at least two distinct cohorts.
- Every session in the dataset followed protocol; voided sessions are excluded with a logged reason.
- The build tested matches the rules as written, verified before the session, not after.
- Each finding states its confidence and what would overturn it.

## Common mistakes it guards against
- Recruiting cohorts who already know the studio's games (veteran bias hides onboarding failures).
- Observers rescuing a stuck table and recording the rescue as "players figured it out."
- Promoting a vivid single session into a conclusion.
- Testing the designer's mental model instead of the printed rules.

## Review checklist
- [ ] Test plan names the question it answers and the result that would falsify the build.
- [ ] Cohorts are representative and disjoint from prior sessions on this question.
- [ ] No coaching occurred, or the session is voided.
- [ ] Finding cites sessions, cohorts, and confidence.
- [ ] Finding appended to playtest-feedback before sign-off.

## KPIs (how it is measured)
- Defect-catch rate: share of post-release player issues that earlier playtests had flagged.
- False-positive rate: findings that did not reproduce on retest.
- Cohort coverage: representation of target segments across a build's sessions.
- Cycle time from build handoff to signed-off findings.

## Risk lens
- Sampling bias — unrepresentative or repeated cohorts.
- Observer contamination — coaching, leading questions, recorded after the fact.
- Confirmation bias — designing tests that flatter the build.
- Regression blindness — not re-testing what a previous build already fixed.
