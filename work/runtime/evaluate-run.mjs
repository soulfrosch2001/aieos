export function evaluateRun({ events, output }) {
  const completed = events.some((event) => event.type === 'brain.turn.completed');
  const denied = events.some((event) => event.type === 'approval.requested');
  const failed = events.some((event) => event.type === 'provider.error');
  const evidence = events.filter((event) => ['brain.output.delta', 'brain.turn.completed'].includes(event.type)).map((event) => event.id);
  return {
    rubric: 'w1-read-only-v1',
    verdict: completed && !failed && !denied && output.trim() ? 'pass' : 'fail',
    checks: { completed, producedOutput: Boolean(output.trim()), noProviderError: !failed, noApprovalRequest: !denied },
    evidence,
  };
}

