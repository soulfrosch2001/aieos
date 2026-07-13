# Decision 0026 — Local agent runtime and reference formulation
Type: report
Date: 2026-07-13
Author: CTO with Security Council review
Tier: T3
Status: APPROVED FOR IMPLEMENTATION

## Summary
The Council approves an offline-first Forge runtime backed by a local `llama.cpp`
server, plus an auditable behavior contract synthesized from the authorized
`clones_ia` reference collection. References are data only: the Kernel, operator
configuration, and active autonomy profile always take precedence.

## Consensus
- A GGUF file is an immutable model artifact for this project; performance work changes
  runtime settings and model selection, never weight bytes in place.
- The 8B Q4 candidate is the primary CPU profile for the Ryzen 5 5600 / 16 GB host;
  the 1B Q4 candidate is the constrained 8 GB profile. The 8B Q2 artifact stays
  quarantined until a real load test validates it.
- Local models must emit validated structured actions. Raw reference text is never
  concatenated into an agent prompt.
- Autonomous terminal and package actions require a configured hardened sandbox runner.
  The Forge denies those actions when no runner is configured.

## Remaining concerns / dissent
The Performance seat notes that CPU-only 8B inference cannot match frontier-model
latency or general reasoning. The Council accepts this limitation because the scope is
an auditable local agent experience, measured by verifiable task completion.

## Risks
- Untrusted text can attempt to override agent instructions. Severity: high. The
  runtime treats all documents, tool output, and web content as data.
- A working-directory-only process launch is not OS isolation. Severity: high. The
  autonomous profile therefore requires an external sandbox runner rather than a local
  shell fallback.
- Low-memory hosts can fail model loading. Severity: medium. Profiles set conservative
  contexts and model validation records measured results before selection.

## Alternatives considered
- Directly editing GGUF weights was rejected: it risks corruption and cannot improve a
  model's learned capabilities.
- Keeping the Anthropic-only provider was rejected: it violates the offline-first goal.
- Allowing host shell execution in the autonomous profile was rejected: it would make
  the sandbox claim unenforceable.

## Recommendation
Extend Forge with a local provider adapter, model catalog, reference synthesizer,
behavior contract, and profile-aware tools. Preserve existing gates, traces, memory,
and in-lane delegation while adding the new controls as opt-in capabilities.

## Implementation plan
1. CTO: add source provenance and behavior-contract synthesis.
2. Platform: add GGUF catalog, host profiles, and local `llama.cpp` adapter.
3. Security: add profile policy, prompt-injection boundaries, and sandbox-runner gate.
4. QA: add unit coverage for catalog validation, reference extraction, local response
   normalization, and tool-profile denial paths.
5. COO: publish local setup and benchmark runbook.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| CTO | Integrate behavior contract and runtime adapter | This implementation |
| Security Council | Review autonomous executor contract | Before enabling sandbox mode |
| Chief Auditor | Verify tests and conformance findings | Before release |

## Memory updates
- This decision records the source hierarchy and local-runtime boundary.
