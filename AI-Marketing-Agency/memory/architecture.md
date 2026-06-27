# Memory Architecture
Status: stable
Type: protocol
Owner: agency-orchestrator
Extends: none

How the AI Marketing Agency plugs into the enterprise memory hierarchy. This file
is the company-side companion to the kernel's
[memory-flow protocol](../../kernel/protocols/memory-flow.md) — the protocol states
the law; this states how the agency's registers under [registers/](registers/)
realize it. Nothing here is overwritten (Directive
[#8](../../kernel/laws/prime-directives.md)).

## Where the agency sits
```
Enterprise   the Government's memory — spans every AIEOS company
   ▲  │
   │  ▼
Company      AI Marketing Agency's accumulated knowledge and decisions  ← this level
   ▲  │
   │  ▼
Department   strategy · content · performance working knowledge
   ▲  │
   │  ▼
Agent        an agent's local craft notes
```
The agency owns its **own copy** of the inherited registers and mounts three local
ones beside them. It reads from the Enterprise level above (inherited standards,
direction, lessons) and promotes decisions of consequence back up. No department
reads a sibling department's memory directly — that is a side-channel; route
through the shared parent (Directive [#5](../../kernel/laws/prime-directives.md)).

## Knowledge flows DOWN
Direction, audience learning, and campaign lessons propagate Enterprise → Company →
Department → Agent. A department **inherits** higher knowledge on its next read; it
does not re-derive it (Directive [#6](../../kernel/laws/prime-directives.md)). The
agency's down-flowing local registers are
[campaign-results](registers/campaign-results.md) (extends
[lessons-learned](../../memory/registers/lessons-learned.md)) and
[audience-insights](registers/audience-insights.md) (extends
[future-improvements](../../memory/registers/future-improvements.md)).

## Decisions of consequence flow UP
A decision that outlives its campaign — a binding positioning choice, a brand
reversal, a council outcome — is **promoted** from the level that made it to the
level whose scope it binds. The promoting level appends locally, judges scope, and
(if it binds beyond itself) envelopes it `intent: report` one level up. The agency's
up-flowing local register is [brand-decisions](registers/brand-decisions.md) (extends
[architecture-decisions](../../memory/registers/architecture-decisions.md)): a brand
choice that binds beyond one client is promoted to the Company, and a cross-company
brand precedent to the Enterprise.

## Append-mostly, always
- **Correct by adding.** A wrong call is fixed by a follow-up entry that supersedes
  it, back-linked to the original; the original stays so the reasoning is auditable.
- **Immutable log.** Existing entries are never edited in place.
- **Deletion is reserved for genuine noise** (true duplicates, leaked client data)
  and is itself recorded.

## Inheritance and extension
The agency does not copy the seven stdlib schemas — it **mounts** them and extends
*by name*. `brand-decisions` extends `architecture-decisions`, `campaign-results`
extends `lessons-learned`, and `audience-insights` extends `future-improvements`;
each adds only stricter, marketing-specific columns, never a weaker rule (loader
[resolution-order](../../kernel/loader/resolution-order.md)). The contract every
register obeys is [memory-register.md](../../kernel/contracts/memory-register.md).
