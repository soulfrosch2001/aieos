#!/usr/bin/env node
// Forge runtime — the MCP server. Exposes Forge's OWN tools over the Model Context
// Protocol (stdio transport, newline-delimited JSON-RPC 2.0) so a `claude -p` session can
// call them NATIVELY — real structured tool calling instead of the JSON-in-text protocol
// the classic claude-cli backend uses. The law does not move an inch: every tools/call
// lands in the same runTool() the classic loop uses, with the same workspace confinement
// and the same guardrail refusals. The brain gets native hands; the hands still obey
// Forge.
//
// Spawned BY the claude CLI (via --mcp-config), one server per native run. The run's
// context arrives in env because the CLI owns this process's argv:
//   FORGE_MCP_REPO_ROOT  — absolute repo root
//   FORGE_MCP_WORKSPACE  — absolute agent workspace (the only writable place)
//
// Tools offered: everything toolSchemas() advertises EXCEPT `delegate` (native mode is a
// single continuous session by design — fan-out stays a classic-loop feature), PLUS
// `read_image` (native-only: MCP tool results can carry real image content, which the
// text protocol never could — this is what makes the runtime multimodal).
//
// Zero dependencies, same as the rest of the runtime: the MCP handshake used here is
// four request types; a hand-rolled 100-line server is auditable, a framework is not.
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { toolSchemas, runTool } from './tools.mjs';

const repoRoot = process.env.FORGE_MCP_REPO_ROOT;
const workspace = process.env.FORGE_MCP_WORKSPACE;
if (!repoRoot || !workspace) {
  process.stderr.write('forge-mcp: FORGE_MCP_REPO_ROOT and FORGE_MCP_WORKSPACE are required\n');
  process.exit(2);
}
const ctx = { repoRoot, workspace };

const IMAGE_MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp' };

// The advertised tool list: Forge tools minus the classic-loop-only ones, plus
// read_image. `delegate` stays classic (native mode is one continuous session by
// design); `plan`/`update_plan`/`finish` are loop.mjs concepts — the native session has
// its own planning and simply ENDS when done (Directive #9 is then enforced post-hoc by
// native.mjs from the tool log).
const LOOP_ONLY = new Set(['delegate', 'plan', 'update_plan', 'finish']);
function mcpTools() {
  const base = toolSchemas({ depth: 0 })
    .filter((t) => !LOOP_ONLY.has(t.name))
    .map((t) => ({ name: t.name, description: t.description, inputSchema: t.input_schema }));
  base.push({
    name: 'read_image',
    description: 'Read an image file (png/jpg/gif/webp) from the repo and SEE it. "path" is relative to the repo root. Native-mode only — the result is real image content, not text.',
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', description: 'repo-root-relative path to the image file' } },
      required: ['path'],
    },
  });
  return base;
}

// read_image executes here (not in tools.mjs) because only MCP results can carry image
// blocks. Read-only + containment: the resolved path must stay inside the repo root —
// same spirit as read_file, enforced locally.
function readImage(input) {
  const rel = String((input && input.path) || '');
  const abs = path.resolve(repoRoot, rel);
  if (!abs.startsWith(path.resolve(repoRoot) + path.sep) && abs !== path.resolve(repoRoot)) {
    return { isError: true, content: [{ type: 'text', text: 'GUARDRAIL: path escapes the repo root.' }] };
  }
  const mime = IMAGE_MIME[path.extname(abs).toLowerCase()];
  if (!mime) return { isError: true, content: [{ type: 'text', text: 'Unsupported image type — use png/jpg/gif/webp.' }] };
  let buf;
  try { buf = fs.readFileSync(abs); } catch (e) {
    return { isError: true, content: [{ type: 'text', text: 'Cannot read image: ' + e.message }] };
  }
  if (buf.length > 5 * 1024 * 1024) {
    return { isError: true, content: [{ type: 'text', text: 'Image exceeds the 5MB cap.' }] };
  }
  return { isError: false, content: [{ type: 'image', data: buf.toString('base64'), mimeType: mime }] };
}

async function handle(msg) {
  const { id, method, params } = msg;
  if (method === 'initialize') {
    return reply(id, {
      protocolVersion: (params && params.protocolVersion) || '2024-11-05',
      capabilities: { tools: {} },
      serverInfo: { name: 'forge', version: '1.0.0' },
    });
  }
  if (method === 'notifications/initialized' || (method || '').startsWith('notifications/')) return; // notifications get no reply
  if (method === 'ping') return reply(id, {});
  if (method === 'tools/list') return reply(id, { tools: mcpTools() });
  if (method === 'tools/call') {
    const name = params && params.name;
    const args = (params && params.arguments) || {};
    if (name === 'read_image') return reply(id, readImage(args));
    try {
      const r = await runTool(name, args, ctx); // same executor, same guardrails as the classic loop
      return reply(id, { isError: !r.ok, content: [{ type: 'text', text: String(r.output ?? '') }] });
    } catch (e) {
      return reply(id, { isError: true, content: [{ type: 'text', text: 'Tool crashed: ' + e.message }] });
    }
  }
  if (id !== undefined) return replyError(id, -32601, 'Method not found: ' + method);
}

function reply(id, result) {
  if (id === undefined) return;
  process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, result }) + '\n');
}

function replyError(id, code, message) {
  process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, error: { code, message } }) + '\n');
}

const rl = readline.createInterface({ input: process.stdin, terminal: false });
rl.on('line', (line) => {
  const t = line.trim();
  if (!t) return;
  let msg;
  try { msg = JSON.parse(t); } catch { return; } // a garbled line must not kill the server
  Promise.resolve(handle(msg)).catch((e) => {
    if (msg && msg.id !== undefined) replyError(msg.id, -32603, 'Internal error: ' + e.message);
  });
});
rl.on('close', () => process.exit(0));
