# AI Publishing House — Org Chart
Status: stable
Type: org-chart
Owner: house-orchestrator
Extends: none

## Purpose
The reporting structure of the house: five executives mapped to kernel
decision-authority levels, and three departments of agents. Authority follows
[decision-authority.md](../../kernel/laws/decision-authority.md); routing and
fan-out follow [Directive #2 and #4](../../kernel/laws/prime-directives.md).

## Executive line
```
                         ceo  (CEO)
                  sets the list & house direction
                          |
        ----------------------------------------------------
        |                 |                  |             |
editorial-director  production-director  chief-auditor  house-orchestrator
 (CTO + ed. veto)       (COO)          (quality veto)  (Supreme Orchestrator)
 editorial standards   schedule,        conformance,    routes manuscripts,
 & quality across      print, release   process veto    sizes tiers, fans out,
 the list              timing           (never directs) integrates (never edits)
```

- **ceo — CEO.** Sets the list and house direction; decides alone what the house
  publishes. Chairs [acquisition-council](../councils/acquisition-council/).
- **editorial-director — CTO (+ editorial veto).** Owns editorial standards and
  quality across the list; holds a veto on works below standard. Chairs
  [editorial-council](../councils/editorial-council/).
- **production-director — COO.** Owns the production schedule, print, and release
  timing; decides sequencing alone.
- **chief-auditor — Chief Auditor.** Quality/process veto; runs conformance. Never
  edits, never acquires, never directs.
- **house-orchestrator — Supreme Orchestrator.** Routes manuscripts and projects,
  sizes tiers, fans out up to 15 tracks, and integrates. Never edits
  ([Directive #2](../../kernel/laws/prime-directives.md)).

## Departments and agents
```
02-acquisitions/   lead: acquisitions-editor
   |- acquisitions-editor   (lead — evaluates and signs)
   |- literary-scout        (sources and surfaces works)
   |- contracts-manager     (deals, rights, terms)

03-editorial/      lead: developmental-editor
   |- developmental-editor  (lead — structural edit)
   |- copy-editor           (line and copy edit)
   |- proofreader           (final proofing gate)

04-production/     lead: book-designer
   |- book-designer         (lead — interior + cover design)
   |- distribution-manager  (print, channels, distribution)
```

## Reporting and ownership
| Department | Lead | Reports to | Primary executive owner |
|------------|------|------------|-------------------------|
| [02-acquisitions](../02-acquisitions/) | acquisitions-editor | ceo | ceo |
| [03-editorial](../03-editorial/) | developmental-editor | editorial-director | editorial-director |
| [04-production](../04-production/) | book-designer | production-director | production-director |

The **chief-auditor** sits outside the build line: it audits every department's
output for conformance and may hold a release but never directs work. The
**house-orchestrator** assigns work across all three departments and never builds.

## Flow across the house
1. **Acquisitions** sources and signs (`manuscript-acquisition`, T2) — gated by
   acquisition-council, recorded in `catalog-decisions`.
2. **Editorial** develops the manuscript (`editing-pipeline`, T2) — gated by
   editorial-council and the editorial-director's veto against `editorial-standards`.
3. **Production** designs, prints, and releases (`book-release`, T3) — sequenced by
   the production-director, conformance-cleared by the chief-auditor, tracked in
   `rights-and-sales`.

See [org structure overview](./README.md) and the [charter](COMPANY.md).
