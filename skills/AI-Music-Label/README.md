# AI Music Label
Status: stable
Type: company
Owner: label-head
Extends: kernel + stdlib

AI Music Label is a kernel-native AIEOS company chartered by Government decision
0001. It runs A&R, production, and marketing/distribution for an AI-operated music
label. It is born inheriting the kernel (version **1.1.0**) and **forks nothing** —
it overrides stdlib entities by name only ([Directive #5](../kernel/laws/prime-directives.md)).

## Charter & identity
- Charter and north star → [00-company/COMPANY.md](00-company/COMPANY.md)
- How this company sits inside the OS → [00-company/AIEOS.md](00-company/AIEOS.md)
- Org chart → [00-company/org-chart.md](00-company/org-chart.md)

## Repo map
```
AI-Music-Label/
├── 00-company/    charter, AIEOS mounting, org-chart
├── 01-executive/  label-head, ar-director, operations-director,
│                  chief-auditor, label-orchestrator
├── 02-ar/         A&R — ar-scout, artist-manager, repertoire-curator
├── 03-production/ production — music-producer, audio-engineer, mastering-engineer
├── 04-marketing/  marketing — marketing-manager, release-coordinator
├── councils/      signing-council, catalog-council
├── workflows/     artist-signing, track-production, release-campaign
├── memory/        architecture + append-mostly registers
└── reports/       health report (reporting protocol output)
```

## Departments
- [02-ar/](02-ar/) — discovers, evaluates, and manages the roster (lead: ar-scout).
- [03-production/](03-production/) — takes tracks from demo to master (lead: music-producer).
- [04-marketing/](04-marketing/) — releases and promotes records (lead: marketing-manager).

## Councils
- [signing-council](councils/signing-council/) — extends stdlib feature-council; chair: ar-director.
- [catalog-council](councils/catalog-council/) — extends stdlib architecture-council; chair: label-head.

## Workflows
- [artist-signing](workflows/artist-signing.md) — T2 · evaluate and sign an artist.
- [track-production](workflows/track-production.md) — T2 · demo to master.
- [release-campaign](workflows/release-campaign.md) — T3 · release and promote a record.

## Memory
- [memory/](memory/README.md) — architecture + registers (catalog-decisions, release-log, artist-pipeline).

## Reports
- [reports/](reports/README.md) — the health report against the 10 quality dimensions.

## Inherited from AIEOS
- The kernel — laws, protocols, contracts, loader → [../kernel/](../kernel/).
- The stdlib build blueprints — agents, councils, workflows, registers → [../templates/](../templates/).
- Resolution order (local → stdlib → kernel) → [../kernel/loader/resolution-order.md](../kernel/loader/resolution-order.md).
