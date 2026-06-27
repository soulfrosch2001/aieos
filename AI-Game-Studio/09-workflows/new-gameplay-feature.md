# Workflow: new-gameplay-feature

**Purpose:** Take a net-new gameplay feature from a one-line pitch to a shipped, playtested, documented mechanic that earns its place against [Prime Directive 1 — player experience is the north star](../00-company/COMPANY.md).
**Default Tier:** T2 (a new system). Escalates to **T3** if it touches a core pillar, the input model, or save format.

## Purpose
A gameplay feature is not "code that runs" — it is a verb the player learns, masters, and remembers. This workflow forces a feature to prove it is fun *before* it is polished, and to die early if it is not. We prototype the verb, gate it at a playtest, then harden it.

## Participants
- [gameplay-designer](../02-design/gameplay-designer/) — owns the feature, writes the design.
- [systems-designer](../02-design/systems-designer/) — checks systemic ripple and emergence.
- [gameplay-programmer](../03-programming/gameplay-programmer/) — builds the prototype and the real thing.
- [lead-game-designer](../02-design/lead-game-designer/) — sign-off owner at T2.
- [gameplay-council](../08-councils/gameplay-council/) — the deciding council.
- [qa-lead](../07-qa/qa-lead/) + [gameplay-tester](../07-qa/gameplay-tester/) — verify the feel, not just the bug count.
- [executive-orchestrator](../01-executive/executive-orchestrator/) — tiers and routes the request.

## Inputs
- A one-line pitch + the player fantasy it serves.
- Affected-systems list from the Orchestrator (blast radius).
- Existing pillars from [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md).

## Steps
```
pitch → council scope → paper design → grey-box prototype → [GATE: fun?] →
production build → QA + playtest → balance pass → docs → memory
```
1. **Convene** — [gameplay-council](../08-councils/gameplay-council/) scopes the verb, names dissent, issues go/no-go minutes.
2. **Paper design** — gameplay-designer writes intent, inputs, states, failure cases, and the *one feeling* it must deliver.
3. **Grey-box prototype** — gameplay-programmer builds the ugliest version that proves the verb (no art, no audio).
4. **Fun gate** — gameplay-tester + designer run [playtesting.md](playtesting.md) on the prototype. **No fun, no build.**
5. **Production build** — implement behind a feature flag, with telemetry hooks.
6. **Balance pass** — handoff to [balancing.md](balancing.md) for tuning curves.
7. **QA + accessibility** — qa-lead validates feel, edge inputs, and remap support.
8. **Document & record** — designer updates memory.

## Review Gates
- **Gate A — Council go:** scope approved, dissent logged; unresolved blocker stops the workflow.
- **Gate B — Fun gate:** prototype must win the playtest verdict. The single most important gate; lead-game-designer may kill here cheaply.
- **Gate C — Ship review:** qa-lead + lead-game-designer confirm feel, perf budget, and remap.

## Approval Process
T2: [gameplay-council](../08-councils/gameplay-council/) + Orchestrator sign-off. If it becomes T3 (new pillar/input/save), the [creative-director](../01-executive/creative-director/) signs and the [chief-auditor](../01-executive/chief-auditor/) may veto.

## Outputs
- Shipped feature behind a flag, with telemetry.
- Council Minutes + Design Doc + balance baseline.
- Player-facing tutorial/affordance note.

## Completion Criteria
Fun gate passed, feature flag on for target build, QA green, remap supported, perf within budget, and memory updated.

## Memory Updates
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — the verb, the dissent, why it shipped.
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — initial tuning baseline.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — if the fun gate killed or reshaped it.
- Trigger a [continuous-improvement](../12-systems/continuous-improvement.md) scan ([Prime Directive 8](../00-company/COMPANY.md)).
