import { EventEmitter } from 'node:events';
import { createInterface } from 'node:readline';

export class JsonlRpcClient extends EventEmitter {
  constructor({ input, output, requestTimeoutMs = 30_000, onServerRequest } = {}) {
    super();
    this.output = output;
    this.requestTimeoutMs = requestTimeoutMs;
    this.onServerRequest = onServerRequest;
    this.nextId = 1;
    this.pending = new Map();
    this.closed = false;
    this.lines = createInterface({ input, crlfDelay: Infinity });
    this.lines.on('line', (line) => this.#receive(line));
    this.lines.on('close', () => this.close(new Error('App Server transport closed')));
  }

  request(method, params = {}) {
    if (this.closed) return Promise.reject(new Error('RPC client is closed'));
    const id = this.nextId++;
    this.#write({ id, method, params });
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(String(id));
        reject(new Error(`RPC request timed out: ${method}`));
      }, this.requestTimeoutMs);
      this.pending.set(String(id), { resolve, reject, timer, method });
    });
  }

  notify(method, params) {
    this.#write(params === undefined ? { method } : { method, params });
  }

  close(error = new Error('RPC client closed')) {
    if (this.closed) return;
    this.closed = true;
    this.lines.close();
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timer);
      pending.reject(error);
    }
    this.pending.clear();
  }

  async #receive(line) {
    if (!line.trim()) return;
    let message;
    try { message = JSON.parse(line); }
    catch { this.emit('protocol-error', new Error('App Server emitted invalid JSON')); return; }

    if (message.id !== undefined && !message.method) {
      const pending = this.pending.get(String(message.id));
      if (!pending) return;
      clearTimeout(pending.timer);
      this.pending.delete(String(message.id));
      if (message.error) pending.reject(new Error(message.error.message || JSON.stringify(message.error)));
      else pending.resolve(message.result);
      return;
    }

    if (message.id !== undefined && message.method) {
      try {
        const result = this.onServerRequest
          ? await this.onServerRequest(message.method, message.params)
          : Promise.reject(new Error('server requests are not enabled'));
        this.#write({ id: message.id, result });
      } catch (error) {
        this.#write({ id: message.id, error: { code: -32001, message: error.message } });
      }
      return;
    }

    if (message.method) this.emit('notification', message);
  }

  #write(message) {
    this.output.write(`${JSON.stringify(message)}\n`);
  }
}

