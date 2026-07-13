# 02-engineering — Engineering Department

`Status: stable`

The department that turns approved plans into working, reliable software. Engineering owns
*how* the system is built — its structure, code, data, delivery, and operation — under the
technical authority of the [CTO](../01-executive/cto/). Each engineer is a **folder** of
small files (see [file-structure.md](../00-company/file-structure.md)); each holds a distinct,
opinionated craft and is expected to disagree with the others. Structural calls run through the
[Architecture Council](../06-councils/architecture-council/); feature calls through the
[Feature Council](../06-councils/feature-council/).

## The Ten Engineers
- [software-architect/](software-architect/) — owns system boundaries, contracts, and big technical trade-offs; chairs the Architecture Council.
- [backend-engineer/](backend-engineer/) — owns server-side logic, APIs, data flow, correctness and reliability.
- [frontend-engineer/](frontend-engineer/) — owns the client application: UI, state, and the user-facing edge of the system.
- [database-engineer-02/](database-engineer-02/) — owns schema design, data integrity, queries, and storage trade-offs.
- [devops-engineer/](devops-engineer/) — owns CI/CD, deployment pipelines, and the path from commit to production.
- [security-engineer/](security-engineer/) — owns threat modeling, secure design, and defense of data and access.
- [qa-engineer/](qa-engineer/) — owns test strategy, coverage, and the definition of "verified."
- [performance-engineer/](performance-engineer/) — owns latency, throughput, and resource efficiency under load.
- [infrastructure-engineer/](infrastructure-engineer/) — owns cloud, networking, and the runtime environment the system lives in.
- [documentation-engineer/](documentation-engineer/) — owns technical docs, runbooks, and keeping knowledge findable.

## Conventions
Files target ≤50 lines · kebab-case · one agent = one folder ·
record decisions in [../07-memory/](../07-memory/).
