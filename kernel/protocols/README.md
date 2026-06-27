# Kernel Protocols

Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

The interaction rules of AIEOS. Where the [laws](../laws/) state *what* is true,
the protocols state *how* entities behave when they route work, talk, disagree,
remember, and come and go. Every entity inherits them; a company may add stricter
local rules but may never weaken a protocol (Directive #6,
[prime-directives.md](../laws/prime-directives.md)).

## The six protocols

| Protocol | Implements | What it governs |
|----------|------------|-----------------|
| [orchestration.md](orchestration.md) | [Directive #4](../laws/prime-directives.md) | The 15-agent fan-out: decompose, partition, brief, integrate. |
| [communication.md](communication.md) | [Directive #5](../laws/prime-directives.md) | The message envelope; cross-company routing through the Government; within-company briefs down / reports up. |
| [escalation.md](escalation.md) | Directives #2, #9 | Deadlock resolves one level up; the Chief Auditor veto; no silent downgrades. |
| [memory-flow.md](memory-flow.md) | [Directive #8](../laws/prime-directives.md) | The four-level memory hierarchy; knowledge down, decisions up; append-mostly. |
| [lifecycle.md](lifecycle.md) | — | Entity states from `proposed` to `retired`; never silently deleted. |
| [reporting.md](reporting.md) | Directives #2, #5 | Standing health/KPI telemetry up to the Government (added in kernel 1.1.0). |

## How they fit together

A request is **sized and fanned out** (orchestration), **carried as envelopes**
between entities (communication), **resolved one level up** when it deadlocks
(escalation), **remembered** as knowledge descends and decisions ascend
(memory-flow), all performed by entities that move through their own
**lifecycle** under their contracts. Read them in that order.
