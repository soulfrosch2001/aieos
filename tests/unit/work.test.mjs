import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PassThrough } from 'node:stream';
import { JsonlRpcClient } from '../../bridge/runtime/jsonl-rpc.mjs';
import { MemoryEventStore } from '../../work/runtime/event-store.mjs';
import { evaluateRun } from '../../work/runtime/evaluate-run.mjs';
import { runWorkTask } from '../../work/runtime/run-task.mjs';

test('jsonl rpc correlates a response', async () => {
  const incoming = new PassThrough();
  const outgoing = new PassThrough();
  const client = new JsonlRpcClient({ input: incoming, output: outgoing, requestTimeoutMs: 1000 });
  const written = new Promise((resolve) => outgoing.once('data', (data) => resolve(JSON.parse(String(data)))));
  const request = client.request('account/read', { refreshToken: false });
  const message = await written;
  incoming.write(`${JSON.stringify({ id: message.id, result: { account: { type: 'chatgpt' } } })}\n`);
  assert.equal((await request).account.type, 'chatgpt');
  client.close();
});

test('work vertical slice routes, streams, evaluates and audits', async () => {
  const store = new MemoryEventStore();
  const result = await runWorkTask({
    intent: 'Inspect the backend workspace', workspace: process.cwd(), provider: fakeProvider(), eventStore: store,
  });
  assert.equal(result.route.agent, 'backend-agent');
  assert.equal(result.output, 'Workspace inspected.');
  assert.equal(result.evaluation.verdict, 'pass');
  assert.ok(result.events.some((event) => event.type === 'task.classified'));
  assert.ok(result.events.some((event) => event.type === 'task.completed'));
  assert.equal(result.events[0].payload.policySnapshot.allowPaidApi, false);
});

test('evaluation fails closed when approval is requested', () => {
  const events = [{ id: '1', type: 'brain.turn.completed' }, { id: '2', type: 'approval.requested' }];
  assert.equal(evaluateRun({ events, output: 'text' }).verdict, 'fail');
});

function fakeProvider() {
  return {
    async detect() { return { available: true, billingMode: 'subscription_native' }; },
    async connect() {},
    async authStatus() { return { authenticated: true, accountType: 'chatgpt' }; },
    async createThread() { return { id: 'thread-1' }; },
    async *startTurn() {
      yield { type: 'brain.turn.started', threadId: 'thread-1', payload: {} };
      yield { type: 'brain.output.delta', threadId: 'thread-1', payload: { delta: 'Workspace inspected.' } };
      yield { type: 'brain.turn.completed', threadId: 'thread-1', payload: { status: 'completed' } };
    },
  };
}

