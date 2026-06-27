# Government Decisions
Status: stable
Type: department
Owner: Supreme Orchestrator
Extends: none

The enterprise decision log: minutes of Government-level councils, where
cross-company and enterprise-strategic calls are recorded. Decisions flow **up** to
here per the [memory-flow protocol](../../kernel/protocols/memory-flow.md); this is
where they land. Append-mostly — a decision is corrected by a later decision, never
erased ([Directive #8](../../kernel/laws/prime-directives.md)).

## Mandatory audio summary
Every recorded discussion **must** ship a spoken summary in
[resumo/audio/](resumo/audio/) named `<id>-resumo.*`, beside any PDF in
[resumo/pdf/](resumo/pdf/). This is enforced by the `decision-audio` conformance rule —
a decision without its audio fails the gate. See [resumo/README.md](resumo/README.md).

| # | Decision | Tier |
|---|----------|------|
| [0001](0001-charter-four-new-companies.md) | Charter four new companies (Film, Healthcare, Music, Consulting). | T3 |
| [0002](0002-charter-game-balancing-studio.md) | Charter the Game Balancing Studio. | T3 |
| [0003](0003-forge-runtime-capabilities.md) | Forge runtime capability build (memory, robustness, observability, planning, self-check). | T3 |
