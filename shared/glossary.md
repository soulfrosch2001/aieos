# Glossary

Shared vocabulary across all of AIEOS. When a word here is used in a definition,
it means exactly this.

| Term | Meaning |
|------|---------|
| **AIEOS** | The AI Enterprise Operating System — kernel + standard library + government + companies. |
| **Kernel** | The OS core: contracts, protocols, laws, loader, registry. Contains no company-specific logic. |
| **Contract** | The interface an entity type must satisfy to be valid (its required files/sections). |
| **Protocol** | A rule of interaction between entities (communication, orchestration, escalation, memory-flow, lifecycle). |
| **Law / Prime Directive** | A rule that overrides everything but a human maintainer. |
| **Standard Library (stdlib)** | The root `templates/ workflows/ councils/ memory/` — defaults every company inherits. |
| **Government** | The supranational coordination layer (Supreme Orchestrator + C-suite). Routes; never builds. |
| **Company** | A plugin that inherits the kernel and behaves like a real organization. |
| **Department** | A division inside a company that groups related agents. |
| **Agent** | The atomic actor: one role, defined by 5 files. |
| **Council** | A convened (non-standing) decision body that debates and produces minutes. |
| **Workflow** | A reusable, gated process from trigger to memory update. |
| **Memory Register** | An append-mostly file recording one kind of institutional knowledge. |
| **Engagement Tier (T0–T4)** | The size of a request; sets ceremony, parallelism, and sign-off. |
| **Fan-out** | Running up to 15 parallel agent tracks with disjoint ownership. |
| **Inheritance / Override** | A company uses a stdlib default unless it defines a same-named local version. |
| **Resolution order** | Loader rule: company-local entity wins over the stdlib default of the same name. |
| **Mount** | To install/register a company plugin so the kernel can load it. |
| **Quality Gate** | A blocking check a deliverable must pass for its tier. |
