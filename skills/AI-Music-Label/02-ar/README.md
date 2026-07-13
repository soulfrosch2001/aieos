# 02-ar
Status: stable
Type: department
Owner: ar-scout
Extends: none

## Mission
The A&R (Artists & Repertoire) department finds and develops the artists who define the label's sound. It owns the front of the value chain: discovering talent, building the artist relationship, and shaping the repertoire that will move into production. A&R answers one question above all others — *should this artist, and this material, become part of our catalog?*

## Lead
[ar-scout](ar-scout/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [ar-scout](ar-scout/) | Discovers artists and surfaces signable talent into the pipeline. |
| [artist-manager](artist-manager/) | Owns the artist relationship and development arc after first contact. |
| [repertoire-curator](repertoire-curator/) | Shapes which songs and material a signed artist brings into the catalog. |

## Councils it sits on
- [signing-council](../councils/signing-council/) — chaired by ar-director; A&R presents the case to sign.
- [catalog-council](../councils/catalog-council/) — A&R defends how new repertoire fits catalog coherence.

## Memory it feeds
- [artist-pipeline](../memory/registers/artist-pipeline.md) — every prospect, its stage, and the disposition reason.
- [catalog-decisions](../memory/registers/catalog-decisions.md) — repertoire choices that shape the catalog (co-fed with the label-head).

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
This department inherits the kernel and forks nothing — see [Directive #5](../../kernel/laws/prime-directives.md).
