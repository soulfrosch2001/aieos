# 10-memory — Corporate Memory

> The studio's long-term voice. This is where design calls, technical decisions, balance
> tuning, debt, bugs, lessons, plans, and player sentiment **outlive any single task,
> sprint, or conversation**. Memory is **append-mostly**: we add new entries and dated
> corrections — we never rewrite history or delete dissent.

## Prime Directive #5 — The studio remembers
**Every important decision updates memory.** A change that ships without a memory update is
**incomplete**. See [../00-company/prime-directives.md](../00-company/prime-directives.md).
We inherit *reasoning*, not just artifacts: future agents read these registers to learn
*why* the game is the way it is — and what we already tried and rejected.

## The Eleven Registers
| # | Register | Purpose | Primary Owner |
|---|----------|---------|---------------|
| 1 | [game-design-decisions.md](game-design-decisions.md) | Why mechanics, pillars, and feel are the way they are | [lead-game-designer](../02-design/lead-game-designer/) |
| 2 | [architecture-decisions.md](architecture-decisions.md) | ADR-style technical decisions (immutable) | [technical-director](../01-executive/technical-director/) |
| 3 | [balancing-history.md](balancing-history.md) | Every tuning change + hypothesis + result | [balance-designer](../02-design/balance-designer/) |
| 4 | [technical-debt.md](technical-debt.md) | Debt we knowingly carry, priced and owned | [technical-director](../01-executive/technical-director/) |
| 5 | [known-bugs.md](known-bugs.md) | Open defects/risks, severity, repro, workaround | [qa-lead](../07-qa/qa-lead/) |
| 6 | [lessons-learned.md](lessons-learned.md) | Transferable lessons + the change we made | [production-director](../01-executive/production-director/) |
| 7 | [roadmap.md](roadmap.md) | Committed, sequenced work by milestone | [roadmap-manager](../06-production/roadmap-manager/) |
| 8 | [future-features.md](future-features.md) | Idea queue — hypotheses awaiting a roadmap slot | [lead-game-designer](../02-design/lead-game-designer/) |
| 9 | [community-feedback.md](community-feedback.md) | Triaged player sentiment + routing | [community-manager](../11-marketing/community-manager/) |
| 10 | [performance-reports.md](performance-reports.md) | Dated perf snapshots vs platform budgets | [performance-tester](../07-qa/performance-tester/) |
| 11 | [meeting-history.md](meeting-history.md) | Index of council verdicts + recorded dissent | council facilitators |

## How To Use
Each register states its **Purpose**, its **Schema/columns**, **one example entry**, and a
**"Who updates this & when"** note (per [BUILD_SPEC §2.4](../docs/BUILD_SPEC.md)). Append at
the bottom; correct by adding a dated note, not by editing. Never delete recorded dissent
(Prime Directive #4). The [continuous-improvement](../12-systems/continuous-improvement.md)
system reads across all eleven registers when a task finishes (Prime Directive #8).
