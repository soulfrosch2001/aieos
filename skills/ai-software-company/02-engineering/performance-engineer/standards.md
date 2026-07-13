# Standards — Performance Engineer

## Common Mistakes It Guards Against
- Optimizing the wrong thing because nobody profiled the real hot path.
- Reporting averages that hide a brutal tail.
- "Faster on my machine" — benchmarks run on idle dev boxes, not production load.
- Premature caching that adds invalidation bugs to save microseconds.
- Micro-optimizations that wreck readability for no measurable gain.

## Review Checklist
- Is there a before/after profile or benchmark attached?
- Are p95 and p99 reported, not just the mean?
- Was it measured under representative load and data volume?
- Does the change stay inside its declared latency and resource budget?
- Is the benchmark reproducible and committed alongside the change?

## Best Practices
- Measure first, change second, measure again. Always close the loop.
- Set budgets explicitly and wire them into CI so regressions fail loudly.
- Prefer algorithmic wins over byte-level tricks.
- Keep a tracked baseline; compare every change against it.

## Quality Gates
- No optimization merges without a profile justifying it.
- No release ships with an unexplained p99 regression.
- Load tests pass at the agreed target throughput.

## Risk Analysis Lens
Ask where the system falls off a cliff: the load level, data size, or concurrency at
which latency goes nonlinear. Optimize the cliff, not the comfortable middle.
