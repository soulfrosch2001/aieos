# Workflow: expansion

**Purpose:** Plan and deliver a major expansion — a new act, region, or campaign that meaningfully grows the game and is, in effect, a mini-production of its own.
**Default Tier:** **T4-scale program** governed at **T3** decision points. The biggest non-launch undertaking the studio runs.

## Purpose
An expansion is a new game wearing the old game's clothes. It carries its own pillars, its own milestones, and its own risk of diluting the base experience. This workflow is a *program*: it spins up the full studio pipeline under a single creative thesis and a hard "does this respect the original?" gate.

## Participants
- [executive-producer](../06-production/executive-producer/) — program owner and P&L.
- [studio-director](../01-executive/studio-director/) + [creative-director](../01-executive/creative-director/) — the thesis and greenlight.
- [roadmap-manager](../06-production/roadmap-manager/) — milestone plan.
- All department leads — [lead-game-designer](../02-design/lead-game-designer/), [lead-programmer](../03-programming/lead-programmer/), [art-director](../04-art/art-director/), [audio-director](../05-audio/audio-director/), [qa-lead](../07-qa/qa-lead/).
- Every relevant [08-councils/](../08-councils/) council, milestone by milestone.
- [chief-auditor](../01-executive/chief-auditor/) + [technical-director](../01-executive/technical-director/) — quality vetoes throughout.

## Inputs
- Expansion thesis + the player fantasy it grows.
- Base-game architecture/save constraints from [../10-memory/architecture-decisions.md](../10-memory/architecture-decisions.md).
- Strategic slot + business case from [../10-memory/roadmap.md](../10-memory/roadmap.md) and [../10-memory/future-features.md](../10-memory/future-features.md).

## Steps
```
thesis → exec greenlight → vertical slice → [GATE: proves the thesis?] → milestone production →
per-milestone council reviews → content via sub-workflows → integration → release-candidate → launch → memory
```
1. **Thesis** — studio + creative directors define the expansion's reason to exist.
2. **Greenlight** — executive board approves the program and budget; risk to the base game assessed.
3. **Vertical slice** — build one polished slice that proves the thesis before scaling.
4. **Slice gate** — does the slice deliver the new fantasy *and* honor the original? **No, re-plan or cancel.**
5. **Milestone production** — content built through sub-workflows ([new-gameplay-feature.md](new-gameplay-feature.md), [boss-creation.md](boss-creation.md), [skill-tree.md](skill-tree.md), [enemy-creation.md](enemy-creation.md), …) with council reviews at each milestone.
6. **Integration** — merge into the base game; protect existing saves, balance, and pacing.
7. **Stabilize & ship** — through [release-candidate.md](release-candidate.md); ongoing support via [patch.md](patch.md).
8. **Record** — executive-producer + directors update memory.

## Review Gates
- **Gate A — Greenlight gate:** exec board approves thesis + budget + base-game risk.
- **Gate B — Vertical-slice gate:** the slice proves the expansion is worth making (hard block, cancel-able).
- **Gate C — Milestone gates:** each milestone passes its councils; slips re-tier the program.
- **Gate D — Release gate:** passes [release-candidate.md](release-candidate.md) Go/No-Go.

## Approval Process
Greenlight + slice: [studio-director](../01-executive/studio-director/) + [creative-director](../01-executive/creative-director/) + [executive-producer](../06-production/executive-producer/). Milestones: the relevant councils. [chief-auditor](../01-executive/chief-auditor/) and [technical-director](../01-executive/technical-director/) hold vetoes throughout per [Prime Directive 7](../00-company/COMPANY.md).

## Outputs
A shipped expansion: new content integrated, saves migrated, marketing campaign, release record, and a post-launch support plan.

## Completion Criteria
Greenlight + slice + milestone + release gates passed, base game unharmed, launched, support plan active, memory updated.

## Memory Updates
- [../10-memory/roadmap.md](../10-memory/roadmap.md) — program status to shipped.
- [../10-memory/architecture-decisions.md](../10-memory/architecture-decisions.md) — integration + migration decisions.
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — new pillars + dissent.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — what a program of this size taught us.
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — greenlight + milestone verdicts.
