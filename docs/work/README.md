# AIEOS Work
Status: proposed
Type: department
Owner: Government CTO
Extends: none

AIEOS Work is the product and operational layer through which a user delegates an
objective to an AIEOS organization. It extends the existing system without turning
the [kernel](../../kernel/README.md) into a product or duplicating the
[Forge](../../forge/README.md).

Work owns tasks, runs, approvals, projects, artifacts and operational state.
Government classifies and routes; it never executes work. Forge remains the agent
creation engine. Provider credentials and browser sessions remain local to the
Bridge whenever the selected billing mode permits it. The kernel must not import
Work, providers, Bridge, connectors, control-plane or apps.

See the [architecture decisions](architecture-decisions.md) and the
[Work roadmap](../../roadmap/ROADMAP.md#aieos-work-product-roadmap).

