# AI Marketing Agency — Org Chart
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

## Purpose
The reporting structure of the agency: who decides, who routes, who delivers, and
who guards quality. Authority levels are inherited from the
[decision-authority law](../../kernel/laws/decision-authority.md); this chart shows
how they are wired together. It does not restate each role's mandate — see each
executive and department folder for that.

## Reporting structure
```
                         ceo (CEO — sets direction alone)
                          |
         +-----------------+--------------------+
        |                 |                    |
strategy-director   operations-director   chief-auditor
(CTO + strategy     (COO — delivery,       (Chief Auditor —
 veto)               capacity, sequencing)   quality/process veto;
        |                 |                    never directs,
        |                 |                    never executes)
        |                 |
        |        agency-orchestrator
        |        (Supreme Orchestrator —
        |         routes, sizes tiers,
        |         fans out up to 15 tracks,
        |         integrates; never executes)
        |                 |
        |     +-----------+-------------+
        |     |           |             |
   02-strategy      03-content      04-performance
   (lead:           (lead:          (lead:
    brand-          content-         performance-
    strategist)      strategist)      marketer)
```

## Executives
| Role | Kernel level | Decides | Notes |
|------|--------------|---------|-------|
| [ceo](../01-executive/ceo/) | CEO | Direction and which clients/markets to serve | Decides direction alone. |
| [strategy-director](../01-executive/strategy-director/) | CTO (+ strategy veto) | Strategic and brand coherence across every engagement | Holds a hard veto on off-brand/off-strategy work. |
| [operations-director](../01-executive/operations-director/) | COO | Delivery, capacity, and what ships when | Decides sequencing alone; chairs the [campaign-council](../councils/campaign-council/). |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor | Quality/process veto; runs conformance | Never executes campaigns and never directs (Directive [#2](../../kernel/laws/prime-directives.md)). |
| [agency-orchestrator](../01-executive/agency-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration | Never executes creative or media work (Directive [#2](../../kernel/laws/prime-directives.md)). |

## Departments
| Department | Lead | Agents |
|------------|------|--------|
| [02-strategy](../02-strategy/) | brand-strategist | brand-strategist, market-researcher, positioning-strategist |
| [03-content](../03-content/) | content-strategist | content-strategist, copywriter, social-media-manager |
| [04-performance](../04-performance/) | performance-marketer | performance-marketer, seo-specialist |

## How work flows
1. A client request enters through the
   [agency-orchestrator](../01-executive/agency-orchestrator/), which sizes it on
   the [engagement tiers](../../kernel/laws/engagement-tiers.md) (T0–T4) and
   routes — it never builds (Directive
   [#2](../../kernel/laws/prime-directives.md)).
2. Significant work (T2+) is debated in the relevant council
   ([campaign-council](../councils/campaign-council/) or
   [brand-council](../councils/brand-council/)) before any build (Directive
   [#3](../../kernel/laws/prime-directives.md)).
3. The orchestrator fans the approved plan out into up to **15 disjoint tracks**
   across [02-strategy](../02-strategy/), [03-content](../03-content/), and
   [04-performance](../04-performance/) (Directive
   [#4](../../kernel/laws/prime-directives.md)).
4. The [strategy-director](../01-executive/strategy-director/) may veto any track
   that violates brand or strategy; the
   [chief-auditor](../01-executive/chief-auditor/) may veto on quality or process.
   Conflicts escalate per the
   [escalation protocol](../../kernel/protocols/escalation.md).
5. The [operations-director](../01-executive/operations-director/) decides
   sequencing and what ships when; the orchestrator integrates the tracks.

See [COMPANY.md](COMPANY.md) for the charter and [AIEOS.md](AIEOS.md) for the
kernel mount.
