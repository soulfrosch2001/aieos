# Memory Architecture
Status: stable
Type: protocol
Owner: Finance Orchestrator
Extends: stdlib memory architecture

How the AI Finance Company plugs into the enterprise memory hierarchy: a
four-level model where **knowledge flows down** and **decisions of consequence flow
up**, and nothing is ever overwritten ([Directive #8](../../kernel/laws/prime-directives.md)).
This file is the company-side companion to the kernel's
[memory-flow protocol](../../kernel/protocols/memory-flow.md) and the stdlib
[memory architecture](../../memory/architecture.md) — the protocol states the law;
this states how the firm's [registers/](registers/) realize it.

## The four levels here
```
Enterprise   the Government's memory — spans every AIEOS company
   ▲  │
   │  ▼
Company      AI Finance Company — investment-decisions, risk-register, compliance-log
   ▲  │
   │  ▼
Department   analysis / risk / compliance working knowledge
   ▲  │
   │  ▼
Agent        an analyst's or officer's local notes and craft memory
```
Each level owns its **own copy** of the registers it needs. A level reads from the
level above (inherited knowledge) and contributes to it (promoted decisions). No
level reads a *sibling's* memory directly, and this firm never reads another
company's memory — that is a side-channel; route through the shared parent
([Directive #5](../../kernel/laws/prime-directives.md)).

## Knowledge flows DOWN
Mandate, firm standards, lessons, and open-risk workarounds propagate
Enterprise → Company → Department → Agent. The down-flowing local register is
[compliance-log](registers/compliance-log.md) (it extends `lessons-learned`),
alongside the inherited `roadmap`, `lessons-learned`, `known-issues`, and
`future-improvements`. A lower level **inherits** higher knowledge on its next read;
it does not re-derive it ([Directive #6](../../kernel/laws/prime-directives.md)).

## Decisions of consequence flow UP
A decision that outlives its task — a binding investment call, an accepted risk, a
reversal, a regulatory finding — is **promoted** from the level that made it to the
level whose scope it binds. The up-flowing local registers are
[investment-decisions](registers/investment-decisions.md) (extends
`architecture-decisions`) and [risk-register](registers/risk-register.md) (extends
`known-issues`, but exposures of firm-wide consequence promote up), alongside the
inherited `architecture-decisions`, `technical-debt`, and `meeting-history`.

## Append-mostly, always
- **Correct by adding.** A reversed investment call is fixed by a follow-up entry
  that supersedes it, back-linked to the original; the original stays so the
  reasoning is auditable — essential in a regulated firm.
- **Immutable log.** Existing entries are never edited in place.
- **Deletion is reserved for genuine noise** (true duplicates, leaked secrets) and is
  itself recorded.

## Inheritance and extension
The firm does not copy stdlib schemas — it **mounts** them and extends *by name*:
`investment-decisions` adds investment columns to `architecture-decisions`,
`risk-register` adds exposure columns to `known-issues`, and `compliance-log` adds
regulatory columns to `lessons-learned`. The override declares the parent and the
reason ([resolution-order](../../kernel/loader/resolution-order.md)). The contract
every register obeys is
[memory-register.md](../../kernel/contracts/memory-register.md).
