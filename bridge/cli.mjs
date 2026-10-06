#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CodexAppServerProvider } from '../providers/codex/app-server-provider.mjs';
import { runWorkTask } from '../work/runtime/run-task.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [command = 'doctor', ...rest] = process.argv.slice(2);
const provider = new CodexAppServerProvider();

try {
  if (command === 'doctor') {
    const result = await provider.detect();
    if (result.available) await provider.connect();
    const auth = result.available ? await provider.authStatus() : { authenticated: false };
    console.log(JSON.stringify({ provider: 'codex', ...result, auth }, null, 2));
    if (!result.available || !auth.authenticated) process.exitCode = 1;
  } else if (command === 'run') {
    const intent = rest.join(' ').trim();
    if (!intent) throw new Error('Usage: npm run work:run -- "<task>"');
    const report = await runWorkTask({ intent, workspace: root, provider, onEvent: (event) => {
      if (event.type === 'brain.output.delta') process.stdout.write(event.payload.delta);
    }});
    process.stdout.write(`\n${JSON.stringify(report, null, 2)}\n`);
  } else {
    throw new Error(`Unknown bridge command: ${command}`);
  }
} finally {
  await provider.close();
}

