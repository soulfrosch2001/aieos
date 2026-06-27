# 03-production
Status: stable
Type: department
Owner: music-producer
Extends: none

## Mission
Production turns a signing into a finished recording. This department is accountable for everything between "we have a song and an artist" and "we have a master ready to release": arrangement and performance capture, the technical integrity of every recording, and the final translation of the mix into a delivery-grade master. It owns sound. When the catalog sounds coherent, that coherence was built here, take by take.

## Lead
[music-producer](music-producer/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [music-producer](music-producer/) | Owns the creative vision of each recording and the take that gets kept. |
| [audio-engineer](audio-engineer/) | Owns signal integrity, the session, and the mix that the master is built on. |
| [mastering-engineer](mastering-engineer/) | Owns the final master, loudness, and delivery-format conformance. |

## Councils it sits on
- [catalog-council](../councils/catalog-council/) — defends the sonic identity of the catalog.
- [signing-council](../councils/signing-council/) — advises on whether a prospect is producible to standard.

## Memory it feeds
- [release-log](../memory/registers/release-log.md) — production lessons, per-track outcomes, what we would re-record.
- [catalog-decisions](../memory/registers/catalog-decisions.md) — sonic-identity decisions taken in production.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
Production inherits the kernel: it sizes work to [engagement tiers](../../kernel/laws/engagement-tiers.md), maps decision rights to [decision authority](../../kernel/laws/decision-authority.md), and reports per [the reporting protocol](../../kernel/protocols/reporting.md).
