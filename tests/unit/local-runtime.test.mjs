import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { profileFrom, permits } from '../../forge/runtime/autonomy.mjs';
import { normalizeLocalResponse } from '../../forge/runtime/llm.mjs';
import { inspectGguf } from '../../forge/runtime/models.mjs';
import { capabilityMatrix, extractCapabilities } from '../../forge/runtime/sources.mjs';
import { runTool, toolSchemas } from '../../forge/runtime/tools.mjs';

test('local response normalization accepts only advertised tools', () => {
  const result = normalizeLocalResponse(JSON.stringify({ text: 'Vou listar.', actions: [{ name: 'list_dir', input: { path: '.' } }] }), [{ name: 'list_dir' }]);
  assert.equal(result.content[0].type, 'text');
  assert.equal(result.content[1].name, 'list_dir');
});

test('local response normalization rejects unadvertised tools', () => {
  const result = normalizeLocalResponse(JSON.stringify({ text: '', actions: [{ name: 'shell', input: {} }] }), [{ name: 'list_dir' }]);
  assert.match(result.content[0].text, /invalid or unavailable/i);
});

test('assistant profile does not advertise or permit writes', async () => {
  assert.equal(profileFrom('not-a-profile'), 'supervised');
  assert.equal(permits('assistant', 'write_file'), false);
  assert.ok(!toolSchemas({ profile: 'assistant' }).some((tool) => tool.name === 'write_file'));
  const result = await runTool('write_file', { path: 'a.txt', content: 'x' }, { profile: 'assistant', repoRoot: process.cwd(), workspace: process.cwd() });
  assert.equal(result.ok, false);
});

test('command execution is denied without a hardened sandbox runner', async () => {
  const prior = process.env.FORGE_SANDBOX_RUNNER;
  delete process.env.FORGE_SANDBOX_RUNNER;
  const result = await runTool('run_command', { program: 'node', args: ['--version'] }, { profile: 'sandbox', repoRoot: process.cwd(), workspace: process.cwd() });
  if (prior !== undefined) process.env.FORGE_SANDBOX_RUNNER = prior;
  assert.equal(result.ok, false);
  assert.match(result.output, /FORGE_SANDBOX_RUNNER/);
});

test('reference capabilities are deterministic and auditable', () => {
  const capabilities = extractCapabilities('Use a plan, tools, memory, tests, retries, delegation and a safety sandbox.');
  assert.equal(capabilities.planning, true);
  assert.equal(capabilities.tools, true);
  assert.equal(capabilities.safety, true);
  const matrix = capabilityMatrix([{ capabilities }, { capabilities: { ...capabilities, memory: false } }]);
  assert.equal(matrix.sources, 2);
  assert.equal(matrix.totals.memory, 1);
});

test('GGUF inspection reads the immutable header only', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'aieos-gguf-'));
  const file = path.join(dir, 'fixture.gguf');
  const header = Buffer.alloc(24);
  header.write('GGUF', 0, 'ascii');
  header.writeUInt32LE(3, 4);
  header.writeBigUInt64LE(7n, 8);
  header.writeBigUInt64LE(9n, 16);
  fs.writeFileSync(file, header);
  const info = inspectGguf(file);
  assert.deepEqual({ magic: info.magic, version: info.version, tensors: info.tensors, metadataEntries: info.metadataEntries }, { magic: 'GGUF', version: 3, tensors: 7, metadataEntries: 9 });
  fs.rmSync(dir, { recursive: true, force: true });
});
