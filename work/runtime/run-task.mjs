import crypto from 'node:crypto';
import path from 'node:path';
import { classifyWork } from '../../government/runtime/classify-work.mjs';
import { FileEventStore } from './event-store.mjs';
import { evaluateRun } from './evaluate-run.mjs';

export async function runWorkTask({ intent, workspace, provider, eventStore, onEvent = () => {} }) {
  if (!intent?.trim()) throw new Error('Task intent is required');
  if (!provider) throw new Error('Brain provider is required');
  const taskId = crypto.randomUUID();
  const runId = crypto.randomUUID();
  const store = eventStore || new FileEventStore(path.join(workspace, 'work', 'runs', `${runId}.jsonl`));
  const append = (type, payload = {}, extra = {}) => {
    const event = { id: crypto.randomUUID(), type, occurredAt: new Date().toISOString(), taskId, runId, actor: extra.actor || 'work', sensitivity: 'internal', payload };
    store.append(event); onEvent(event); return event;
  };

  append('task.created', { intent, policySnapshot: { allowPaidApi: false, access: 'read-only' } }, { actor: 'user' });
  const route = classifyWork(intent);
  append('task.classified', route, { actor: 'government' });
  append('agent.selected', { agent: route.agent, company: route.company }, { actor: 'government' });

  const availability = await provider.detect();
  if (!availability.available) {
    append('task.blocked', { reason: availability.reason, actionable: 'Install or configure the local Codex client.' });
    throw new Error(availability.reason);
  }
  await provider.connect();
  const auth = await provider.authStatus();
  if (!auth.authenticated) {
    append('task.blocked', { reason: 'Codex account is not authenticated', actionable: 'Sign in with ChatGPT in Codex, then retry.' });
    throw new Error('Codex account is not authenticated');
  }
  append('brain.resolved', { provider: 'codex', billingMode: availability.billingMode, auth: 'local' });

  const thread = await provider.createThread({ cwd: workspace, baseInstructions: route.instructions });
  append('run.started', { threadId: thread.id, agent: route.agent });
  let output = '';
  for await (const event of provider.startTurn({ threadId: thread.id, text: intent, cwd: workspace })) {
    const recorded = append(event.type, event.payload, { actor: 'bridge' });
    if (event.type === 'brain.output.delta') output += event.payload.delta;
    if (event.type === 'approval.requested') throw new Error('W1 stopped: provider requested an action outside read-only policy');
    onEvent({ ...recorded, source: event });
  }

  const evaluation = evaluateRun({ events: store.list(), output });
  append('evaluation.completed', evaluation, { actor: 'evaluator' });
  append(evaluation.verdict === 'pass' ? 'task.completed' : 'task.failed', { evaluation: evaluation.verdict });
  return { taskId, runId, route, threadId: thread.id, output, evaluation, events: store.list() };
}

