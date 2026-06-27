# 05-workflows — Repeatable Processes

A **workflow** is a named, repeatable path a request travels from trigger to
memory update. Each file follows
[../09-templates/workflow-template.md](../09-templates/workflow-template.md):
Purpose, Tier, Trigger, Participants, Inputs, Steps, Approval Gates, Outputs,
Completion Criteria, Memory Updates, Failure/Rollback.

The Orchestrator picks the right workflow by engagement tier — see
[../00-company/engagement-tiers.md](../00-company/engagement-tiers.md). Heavier
tiers add councils, approval gates, and executive sign-off.

## Index
- [new-feature.md](new-feature.md) — T2: feature-council → plan → build → review → docs → memory.
- [bug-fix.md](bug-fix.md) — T1: reproduce → fix → regression test → review.
- [refactoring.md](refactoring.md) — T1/T2: propose → approve → refactor behind tests, no behavior change.
- [code-review.md](code-review.md) — all tiers: what reviewers check and the merge gates.
- [architecture-review.md](architecture-review.md) — T3: architecture-council gate → ADR to memory.
- [sprint-planning.md](sprint-planning.md) — PM-led prioritization from the roadmap.
- [deployment.md](deployment.md) — devops-led ship mechanics to an environment.
- [security-incident.md](security-incident.md) — contain, investigate, and remediate a security event.
- [performance-investigation.md](performance-investigation.md) — diagnose and fix a performance regression.
- [release.md](release.md) — cut, tag, and approve a versioned release.
- [hotfix.md](hotfix.md) — expedited fix-and-ship for an urgent production defect.
- [documentation.md](documentation.md) — author, review, and publish docs.
- [testing.md](testing.md) — plan and execute test coverage for a change.
- [continuous-improvement.md](continuous-improvement.md) — periodic scan producing proposals only.
- [incident-response.md](incident-response.md) — T4: live incident command from detection to postmortem.
