# 🏛️ 08-councils — Convened Decision Bodies

`Status: stable`

> Councils are **convened, not standing**. The [Executive Orchestrator](../01-executive/executive-orchestrator/)
> pulls one together when a request's [tier](../00-company/engagement-tiers.md) demands
> debate; it decides, records minutes to [10-memory/meeting-history.md](../10-memory/meeting-history.md),
> and dissolves. This embodies **Prime Directive #3: decide before you build**
> ([../00-company/prime-directives.md](../00-company/prime-directives.md)).

Every council is a **folder** (`README.md` · `process.md` · `output.md`) per
[BUILD_SPEC §2.2](../docs/BUILD_SPEC.md). All councils obey the two shared protocols below.

## ⚖️ The Convene Rule
**Convene only the council you need.** A single build cycle runs **≤ 15 concurrent agents**
with disjoint ownership. Do not summon four councils "to be safe" — that is how you get
fake consensus and a stalled pipeline. Size the request, pick the smallest body that can
honestly decide it, and dissolve it the moment the minutes are written.

## Council Index
| Council | Purpose | Chair |
|---------|---------|-------|
| [gameplay-council/](gameplay-council/) | Is it fun, clear, and worth the player's time? | [lead-game-designer](../02-design/lead-game-designer/) |
| [technical-council/](technical-council/) | System architecture and technical risk. | [technical-director](../01-executive/technical-director/) |
| [art-council/](art-council/) | Visual direction, consistency, and quality bar. | [art-director](../04-art/art-director/) |
| [performance-council/](performance-council/) | Frame budget, memory, and load times. | [optimization-engineer](../03-programming/optimization-engineer/) |
| [narrative-council/](narrative-council/) | Story, world, dialogue, and player-driven plot. | [narrative-designer](../02-design/narrative-designer/) |
| [animation-council/](animation-council/) | Motion quality, rig integrity, gameplay feel. | [animator](../04-art/animator/) |
| [economy-council/](economy-council/) | Currencies, sinks/faucets, progression, balance. | [economy-designer](../02-design/economy-designer/) |
| [release-council/](release-council/) | **Go / No-Go** on every release candidate. | [production-director](../01-executive/production-director/) |
| [security-council/](security-council/) | Anti-cheat, data, platform compliance — **can block any tier**. | [chief-auditor](../01-executive/chief-auditor/) |
| [optimization-council/](optimization-council/) | Targeted profiling and optimization campaigns. | [optimization-engineer](../03-programming/optimization-engineer/) |

## 🧭 Which Council, Which Tier
- **T0/T1** — no council; the specialist or department lead signs off.
- **T2** — the **one relevant council** + the Orchestrator.
- **T3** — council **plus** the executive board; Creative or Technical Director signs off,
  the [Chief Auditor](../01-executive/chief-auditor/) may veto.
- **T4** — [release-council](release-council/) or [security-council](security-council/)
  convenes **live**; Production Director + Chief Auditor decide.

See [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md) and
[../00-company/decision-authority.md](../00-company/decision-authority.md).

## 📜 Shared Protocols (every council obeys both)
- [debate-protocol.md](debate-protocol.md) — honest option owners, no fake consensus,
  recorded dissent, deadlock resolution.
- [communication-protocol.md](communication-protocol.md) — minutes format, who chairs,
  timeboxing, escalation lines.

> **Veto powers** (Prime Directive #7 — *Quality has veto power*): the
> [Technical Director](../01-executive/technical-director/), [QA Lead](../07-qa/qa-lead/),
> and [Chief Auditor](../01-executive/chief-auditor/) can block a ship regardless of
> pressure or tier. Only a recorded **human** risk-acceptance overrides a quality/security block.
