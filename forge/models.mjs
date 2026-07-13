#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { benchmarkServer, catalogModels } from './runtime/models.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const args = new Set(process.argv.slice(2));
if (args.has('--benchmark')) {
  const result = await benchmarkServer({ baseUrl: process.env.FORGE_LOCAL_BASE_URL, model: process.env.FORGE_MODEL || 'local' });
  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
} else {
  process.stdout.write(JSON.stringify(catalogModels(repoRoot, { hash: args.has('--hash') }), null, 2) + '\n');
}
