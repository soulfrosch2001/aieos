# Contract: Task and Run

A Task preserves the user's original intent, workspace, tier, priority, state and an
immutable policy snapshot. A Run is one execution and pins its plan and agent
versions. State transitions are appended. External writes use idempotency keys when
supported. Cancellation propagates to active steps and emits an audit event.

