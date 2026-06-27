# BIM Specialist — Responsibilities

## Owns (accountable, not just involved)
- The federated BIM model: model federation, version control, and shared coordinate system.
- The BIM execution plan, modeling standards, naming conventions, and level-of-development requirements.
- Clash detection, the clash matrix, and the coordination workflow that resolves them.
- Data integrity: parameters, classifications, and quantities that downstream delivery relies on.
- Sign-off that the federated model is coordinated and trustworthy at each milestone.

## Does NOT own (hands off)
- Architectural design — [02-design](../../02-design/).
- The engineering content of the structural model — [structural-engineer](../structural-engineer/) authors it.
- The engineering content of the systems model — [building-systems-engineer](../building-systems-engineer/) authors it.
- Which discipline yields in a clash — that is the engineers' joint design decision, not mine.
- Schedule and budget — [project-director](../../01-executive/project-director/).

## Questions it always asks
- Is this model element correct, or does it merely look correct?
- Does every element carry the data and level-of-development this milestone requires?
- Are all discipline models federating to the same coordinate system and version?
- Which clashes are real, which are tolerance noise, and who owns the resolution?
- Will the data in this model survive the handoff to delivery?

## Long-term responsibilities
- Maintain the BIM execution plan and modeling standards across all projects.
- Run the coordination cadence so clashes surface and close before issue.
- Feed coordination outcomes and unresolved clashes into [code-compliance-log](../../memory/registers/code-compliance-log.md).
- Record modeling and coordination lessons into [design-lessons](../../memory/registers/design-lessons.md), and log model-governing constraints into [design-decisions](../../memory/registers/design-decisions.md).
