// GGUF catalog and local-server benchmark helpers. Model weights are never modified.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

export const MODEL_CANDIDATES = [
  {
    id: 'ryzen-16gb-cpu', file: 'Meta-Llama-3-8B-Instruct-Q4_K_M.gguf',
    status: 'candidate', context: 4096, threads: 6, batch: 256, minBytes: 4_000_000_000,
  },
  {
    id: 'intel-8gb-cpu', file: 'Llama-3.2-1B-Instruct-Q4_K_M.gguf',
    status: 'candidate', context: 2048, threads: 4, batch: 128, minBytes: 600_000_000,
  },
  {
    id: 'quarantine-8b-q2', file: 'Meta-Llama-3-8B-Instruct-Q2_K.gguf',
    status: 'quarantined', context: 0, threads: 0, batch: 0, minBytes: 2_000_000_000,
  },
];

export function inspectGguf(file) {
  const stat = fs.statSync(file);
  const fd = fs.openSync(file, 'r');
  try {
    const header = Buffer.alloc(24);
    fs.readSync(fd, header, 0, header.length, 0);
    return {
      bytes: stat.size,
      magic: header.subarray(0, 4).toString('ascii'),
      version: header.readUInt32LE(4),
      tensors: Number(header.readBigUInt64LE(8)),
      metadataEntries: Number(header.readBigUInt64LE(16)),
    };
  } finally { fs.closeSync(fd); }
}

export function sha256File(file) {
  const hash = crypto.createHash('sha256');
  const fd = fs.openSync(file, 'r');
  try {
    const buffer = Buffer.allocUnsafe(1024 * 1024);
    let position = 0;
    for (;;) {
      const read = fs.readSync(fd, buffer, 0, buffer.length, position);
      if (!read) break;
      hash.update(buffer.subarray(0, read));
      position += read;
    }
    return hash.digest('hex');
  } finally { fs.closeSync(fd); }
}

export function catalogModels(repoRoot, { hash = false } = {}) {
  return MODEL_CANDIDATES.map((candidate) => {
    const file = path.join(repoRoot, candidate.file);
    try {
      const gguf = inspectGguf(file);
      const valid = gguf.magic === 'GGUF' && gguf.version >= 2 && gguf.bytes >= candidate.minBytes;
      return { ...candidate, ...gguf, sha256: hash ? sha256File(file) : null, valid, reason: valid ? 'ready for load test' : 'invalid header or unexpectedly small artifact' };
    } catch (error) {
      return { ...candidate, valid: false, reason: error.message, bytes: null, magic: null, version: null, tensors: null, metadataEntries: null, sha256: null };
    }
  });
}

export async function benchmarkServer({ baseUrl = 'http://127.0.0.1:8080/v1', model = 'local', rounds = 3 } = {}) {
  const url = baseUrl.replace(/\/$/, '') + '/chat/completions';
  const samples = [];
  for (let index = 0; index < rounds; index++) {
    const started = performance.now();
    const response = await fetch(url, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ model, temperature: 0, max_tokens: 32, messages: [{ role: 'user', content: 'Responda somente: pronto.' }] }),
    });
    if (!response.ok) throw new Error(`local server HTTP ${response.status}: ${await response.text()}`);
    const data = await response.json();
    const elapsedMs = Math.round(performance.now() - started);
    const tokens = Number(data?.usage?.completion_tokens) || 0;
    samples.push({ elapsedMs, tokens, tokensPerSecond: tokens ? Number((tokens / (elapsedMs / 1000)).toFixed(2)) : null });
  }
  return { baseUrl, model, samples, averageMs: Math.round(samples.reduce((sum, sample) => sum + sample.elapsedMs, 0) / samples.length) };
}
