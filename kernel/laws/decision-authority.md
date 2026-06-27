# Decision Authority

Who decides what across AIEOS. Companies inherit this shape and bind their own
roles to it. The principle: **authority is explicit, and veto is rare but absolute.**

## Levels of authority
Every decision right is one of three:
- **Decides alone** — the role acts and records; no sign-off needed.
- **Decides with a peer** — joint sign-off; neither can act unilaterally.
- **Recommends only** — advises; another role holds the decision.

## Government layer (cross-company)
| Role | Decides alone | Veto |
|------|---------------|------|
| **Supreme Orchestrator** | Routing, tier sizing, fan-out, integration. | — |
| **CEO** | Enterprise direction, priorities between companies. | — |
| **CTO** | Cross-company technical standards, the kernel's evolution. | Technical incoherence. |
| **COO** | Delivery, resourcing, what ships when. | — |
| **Chief Innovation Officer** | What to explore; new company proposals. | — |
| **Chief Auditor** | — (never builds, never directs) | **Quality/process violations.** |

## Resolution
1. Try to resolve at the lowest level that owns the decision.
2. Deadlock → escalate one level up the chain. See
   [../protocols/escalation.md](../protocols/escalation.md).
3. A **Chief Auditor veto** stops the work; only a **human maintainer** overrides it.

## Inheritance into companies
A company maps its own executives onto these levels (its CEO/CTO/COO/Auditor).
A company may **add** stricter local authority, never **loosen** a Kernel Law.
See [prime-directives.md](prime-directives.md).
