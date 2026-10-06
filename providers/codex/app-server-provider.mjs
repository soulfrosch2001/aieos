import { access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { spawn } from 'node:child_process';
import { JsonlRpcClient } from '../../bridge/runtime/jsonl-rpc.mjs';

const WINDOWS_DEFAULT = process.env.LOCALAPPDATA
  ? `${process.env.LOCALAPPDATA}\\OpenAI\\Codex\\bin`
  : null;

export class CodexAppServerProvider {
  constructor({ executable = process.env.AIEOS_CODEX_BIN || 'codex', spawnProcess = spawn } = {}) {
    this.executable = executable;
    this.spawnProcess = spawnProcess;
    this.process = null;
    this.rpc = null;
    this.listeners = new Set();
    this.activeTurn = null;
  }

  async detect() {
    const executable = await resolveExecutable(this.executable);
    return executable
      ? { available: true, executable, billingMode: 'subscription_native' }
      : { available: false, executable: null, billingMode: 'subscription_native', reason: 'Codex executable not found' };
  }

  async connect() {
    if (this.rpc) return;
    const detected = await this.detect();
    if (!detected.available) throw new Error(detected.reason);
    this.executable = detected.executable;
    this.process = this.spawnProcess(this.executable, ['app-server', '--stdio'], {
      stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true,
    });
    this.process.stderr.on('data', (chunk) => this.#emit({
      type: 'provider.diagnostic', payload: { message: String(chunk) }, sensitivity: 'internal',
    }));
    this.rpc = new JsonlRpcClient({
      input: this.process.stdout,
      output: this.process.stdin,
      onServerRequest: (method, params) => this.#rejectServerRequest(method, params),
    });
    this.rpc.on('notification', (message) => this.#notification(message));
    this.rpc.on('protocol-error', (error) => this.#emit({ type: 'provider.error', payload: { message: error.message } }));
    await this.rpc.request('initialize', {
      clientInfo: { name: 'aieos-work', title: 'AIEOS Work', version: '0.1.0' },
      capabilities: { experimentalApi: false, optOutNotificationMethods: [] },
    });
    this.rpc.notify('initialized');
  }

  async authStatus() {
    await this.connect();
    const result = await this.rpc.request('account/read', { refreshToken: false });
    const account = result?.account ?? null;
    return { authenticated: Boolean(account), accountType: account?.type ?? null };
  }

  async createThread({ cwd, model = null, baseInstructions = null } = {}) {
    await this.connect();
    const result = await this.rpc.request('thread/start', {
      cwd, model, baseInstructions, ephemeral: false,
      approvalPolicy: 'never', approvalsReviewer: 'user', sandbox: 'read-only',
      serviceName: 'aieos-work',
    });
    return { id: result.thread.id, provider: 'codex', cwd: result.cwd, model: result.model };
  }

  async resumeThread(ref) {
    await this.connect();
    const result = await this.rpc.request('thread/resume', {
      threadId: ref.id, approvalPolicy: 'never', approvalsReviewer: 'user', sandbox: 'read-only',
    });
    return { id: result.thread.id, provider: 'codex', cwd: result.cwd, model: result.model };
  }

  async *startTurn({ threadId, text, cwd = null } = {}) {
    await this.connect();
    if (!threadId || !text) throw new Error('threadId and text are required');
    const queue = createAsyncQueue();
    const listener = (event) => {
      if (!event.threadId || event.threadId === threadId) queue.push(event);
      if (event.type === 'brain.turn.completed' && event.threadId === threadId) queue.end();
      if (event.type === 'provider.error' && event.threadId === threadId) queue.fail(new Error(event.payload.message));
    };
    this.listeners.add(listener);
    try {
      const result = await this.rpc.request('turn/start', {
        threadId, cwd,
        input: [{ type: 'text', text, text_elements: [] }],
        approvalPolicy: 'never', approvalsReviewer: 'user',
      });
      this.activeTurn = { threadId, turnId: result.turn.id };
      for await (const event of queue) yield event;
    } finally {
      this.listeners.delete(listener);
      this.activeTurn = null;
    }
  }

  async cancelTurn() {
    if (!this.activeTurn || !this.rpc) return false;
    await this.rpc.request('turn/interrupt', this.activeTurn);
    return true;
  }

  async close() {
    this.rpc?.close();
    this.rpc = null;
    if (this.process && !this.process.killed) this.process.kill();
    this.process = null;
  }

  #notification({ method, params = {} }) {
    if (method === 'item/agentMessage/delta') {
      this.#emit({ type: 'brain.output.delta', threadId: params.threadId, runStepId: params.turnId, payload: { delta: params.delta } });
    } else if (method === 'turn/started') {
      this.#emit({ type: 'brain.turn.started', threadId: params.threadId, runStepId: params.turn?.id, payload: {} });
    } else if (method === 'turn/completed') {
      const error = params.turn?.error;
      this.#emit({
        type: error ? 'provider.error' : 'brain.turn.completed',
        threadId: params.threadId,
        runStepId: params.turn?.id,
        payload: error ? { message: error.message || JSON.stringify(error) } : { status: params.turn?.status },
      });
    } else if (method === 'error') {
      this.#emit({ type: 'provider.error', threadId: params.threadId, payload: { message: params.error?.message || params.message || 'Codex App Server error' } });
    }
  }

  #rejectServerRequest(method) {
    this.#emit({ type: 'approval.requested', payload: { method, decision: 'denied', reason: 'W1 is read-only and fail-closed' } });
    throw new Error(`AIEOS Work denied App Server request: ${method}`);
  }

  #emit(event) {
    const normalized = { occurredAt: new Date().toISOString(), sensitivity: 'internal', ...event };
    for (const listener of this.listeners) listener(normalized);
  }
}

async function resolveExecutable(configured) {
  if (configured !== 'codex') return canExecute(configured) ? configured : null;
  if (process.platform === 'win32' && WINDOWS_DEFAULT) {
    const { readdir } = await import('node:fs/promises');
    try {
      const builds = (await readdir(WINDOWS_DEFAULT)).sort().reverse();
      for (const build of builds) {
        const candidate = `${WINDOWS_DEFAULT}\\${build}\\codex.exe`;
        if (await canExecute(candidate)) return candidate;
      }
    } catch { /* fall back to PATH */ }
  }
  return 'codex';
}

async function canExecute(file) {
  try { await access(file, constants.X_OK); return true; } catch { return false; }
}

function createAsyncQueue() {
  const values = [];
  const waiters = [];
  let done = false;
  let failure = null;
  return {
    push(value) { if (done) return; const waiter = waiters.shift(); waiter ? waiter.resolve({ value, done: false }) : values.push(value); },
    end() { done = true; while (waiters.length) waiters.shift().resolve({ done: true }); },
    fail(error) { failure = error; done = true; while (waiters.length) waiters.shift().reject(error); },
    [Symbol.asyncIterator]() { return this; },
    next() {
      if (values.length) return Promise.resolve({ value: values.shift(), done: false });
      if (failure) return Promise.reject(failure);
      if (done) return Promise.resolve({ done: true });
      return new Promise((resolve, reject) => waiters.push({ resolve, reject }));
    },
  };
}

