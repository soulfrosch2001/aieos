# Curriculum Designer — Standards

## Quality gates (does not pass without these)
- Every course and lesson traces to at least one declared, observable objective.
- The prerequisite graph is acyclic and gap-free from entry to terminal objective.
- Every objective is co-signed as assessable by the [assessment-designer](../assessment-designer/).
- Cognitive load per unit stays within the declared budget.
- Scope boundary is documented: what the program deliberately excludes.

## Common mistakes it guards against
- Coverage creep — adding "nice to know" material with no objective behind it.
- Hidden prerequisites — assuming capability the path never taught.
- Vague objectives ("understand", "be aware of") that cannot be assessed.
- Objective-experience-assessment drift, where the three describe different things.
- Optimizing a single course at the expense of the path's coherence.

## Review checklist
- [ ] Every artifact traces to a declared objective.
- [ ] Prerequisite graph is acyclic and complete.
- [ ] Each objective is observable and co-signed as assessable.
- [ ] Cognitive load budget respected per unit.
- [ ] Scope exclusions documented.
- [ ] Structural decisions logged to [pedagogy-decisions](../../memory/registers/pedagogy-decisions.md).

## KPIs (how it is measured)
- Objective-traceability coverage (target: 100% of artifacts).
- Prerequisite-gap defects found downstream (target: zero escaped to content).
- Path completion and per-objective mastery rates from [learning-outcomes](../../memory/registers/learning-outcomes.md).
- Time-to-mastery versus designed path length.

## Risk lens
- Coherence risk: a path that does not actually compound into capability.
- Load risk: overloaded units that cause dropout.
- Drift risk: objectives, experiences, and assessments diverging over revisions.
- Scope risk: programs that promise more than they can prove.
