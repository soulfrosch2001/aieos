export function classifyWork(intent) {
  const text = String(intent).toLowerCase();
  const backend = /\b(api|backend|server|database|banco|endpoint|c[oó]digo|workspace|reposit[oó]rio)\b/.test(text);
  return {
    tier: 'T1',
    risk: 'low',
    company: 'ai-software-company',
    department: backend ? 'backend' : 'engineering',
    agent: backend ? 'backend-agent' : 'software-agent',
    instructions: 'Operate as a read-only software engineering agent. Inspect only the authorized workspace, cite evidence, do not modify files, and stop if an action requires approval.',
  };
}

