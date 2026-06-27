# Executive
Status: stable
Type: department
Owner: ceo
Extends: none

## Mission
The executive layer of the AI Finance Company holds the firm's mandate, methodology, execution, and conformance. Each executive binds to a kernel decision-authority level so that — even in a regulated investment domain — authority is explicit and veto is rare but absolute. See [../../kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).

## Executives → Kernel Levels
| Executive | Folder | Kernel Level | Decides alone | Veto |
|-----------|--------|--------------|---------------|------|
| CEO | [./ceo/](./ceo/) | CEO | Firm strategy, mandate, priorities | — |
| Chief Investment Officer | [./chief-investment-officer/](./chief-investment-officer/) | CTO (+ methodology veto) | Analytical methodology, process coherence | Methodology / process incoherence |
| Chief Operating Officer | [./chief-operating-officer/](./chief-operating-officer/) | COO | Execution, operations, sequencing | — |
| Chief Compliance Auditor | [./chief-compliance-auditor/](./chief-compliance-auditor/) | Chief Auditor | — (never invests, never directs) | Compliance / quality violations (absolute) |
| Finance Orchestrator | [./finance-orchestrator/](./finance-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration | — |

## Principles
- Directive #2 — the orchestrator routes mandates, never makes investment calls. See [../../kernel/laws/prime-directives.md](../../kernel/laws/prime-directives.md).
- A Chief Compliance Auditor veto stops the work; only a human maintainer overrides it.
- Executives may add stricter local authority, never loosen a Kernel Law.

## Index
- [ceo/](./ceo/)
- [chief-investment-officer/](./chief-investment-officer/)
- [chief-operating-officer/](./chief-operating-officer/)
- [chief-compliance-auditor/](./chief-compliance-auditor/)
- [finance-orchestrator/](./finance-orchestrator/)
