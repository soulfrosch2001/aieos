# Contract: ToolConnector

A ToolConnector declares versioned semantic actions and required scopes. Policy
checks return `allow`, `deny` or `require_approval`. Execution returns outcome,
evidence, write diff and idempotency record when supported. Unassigned actions are
unavailable and ambiguous targets fail closed.

