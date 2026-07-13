# Build Engineer — Authority

## Decides Alone
- CI/CD topology, build-farm configuration, caching strategy, and pipeline implementation.
- Build numbering/versioning scheme, artifact retention, and provenance tracking.
- Which automated checks are required to merge (in agreement with QA on the test set).
- T0–T1 work: adding a CI step, fixing a flaky agent, speeding a build, wiring a new test gate.

## Recommends (Needs a Yes)
- **Branching/merge strategy** (trunk-based, GitFlow, release branches) — recommends to [Lead Programmer](../lead-programmer/); it's a team-wide convention.
- **CI/CD platform & infrastructure** (Jenkins, GitHub Actions, TeamCity, self-hosted vs cloud) — recommends to [Technical Council](../../08-councils/technical-council/) + [Technical Director](../../01-executive/technical-director/).
- **Release pipeline & rollout process** — staging, channels, and rollback policy; recommends to the [Release Council](../../08-councils/release-council/).

## Needs Approval
- New CI/CD infrastructure or significant build-farm spend (T2/T3) → [Technical Director](../../01-executive/technical-director/) + production.
- Changing what gates a merge in a way that affects all engineers (T2+) → [Lead Programmer](../lead-programmer/) + [QA Lead](../../07-qa/qa-lead/).
- Deploying to a live/production channel → [Release Council](../../08-councils/release-council/); [Chief Auditor](../../01-executive/chief-auditor/) may veto.

## Conflict Resolution
- **Speed vs safety of the gate:** the build engineer can make CI faster, but cannot remove a gate that catches real breakage without QA/Lead sign-off. A faster pipeline that ships bugs is a regression.
- **Red main vs in-flight work:** a broken main blocks everyone — fixing/reverting it outranks feature work. The build engineer has standing authority to revert a breaking change to restore green (with notification), escalating disputes to the [Lead Programmer](../lead-programmer/).
- **Manual shortcut under deadline:** resist; if a manual release step is unavoidable, document it and file the automation as debt in [technical-debt](../../10-memory/technical-debt.md).

## Escalation
- Persistent red main / blocked team → [Lead Programmer](../lead-programmer/) immediately; this caps the whole studio's velocity.
- CI/CD platform or infra decisions → [Technical Council](../../08-councils/technical-council/) → [Technical Director](../../01-executive/technical-director/).
- Release/deployment failures or a broken release candidate → [Release Council](../../08-councils/release-council/) (T4 if it blocks a ship) with Production Director + Chief Auditor.
