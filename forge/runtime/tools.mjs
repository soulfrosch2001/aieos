// Forge runtime — the agent's executable tools, with guardrails.
// READ tools work repo-wide; WRITE is restricted to the agent's workspace; the GATE
// is a first-class tool so the agent can verify before it claims (Directive #9).
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

export function toolSchemas() {
  return [
    { name: 'list_dir', description: 'List entries at a path (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'read_file', description: 'Read a UTF-8 file (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'write_file', description: 'Write a file. Restricted to the agent workspace.', input_schema: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] } },
    { name: 'run_gate', description: 'Run the conformance gate (npm test). Verify before finishing.', input_schema: { type: 'object', properties: {} } },
    { name: 'plan', description: 'Record an ordered checklist of the steps you intend to take. Replaces any current plan.', input_schema: { type: 'object', properties: { steps: { type: 'array', items: { type: 'string' }, description: 'Ordered list of step descriptions.' } }, required: ['steps'] } },
    { name: 'update_plan', description: 'Revise the current plan: mark steps done/dropped by their 1-based number, add steps, or replace the whole list.', input_schema: { type: 'object', properties: { complete: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to mark done.' }, drop: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to drop.' }, add: { type: 'array', items: { type: 'string' }, description: 'New steps to append.' }, steps: { type: 'array', items: { type: 'string' }, description: 'Full replacement checklist (re-plan).' } } } },
    { name: 'finish', description: 'End the run with a short summary of what was accomplished.', input_schema: { type: 'object', properties: { summary: { type: 'string' } }, required: ['summary'] } },
  ];
}

const ok = (output) => ({ ok: true, output });
const deny = (output) => ({ ok: false, output });

// Bounded read: cut at `max` bytes and tell the model data was withheld (no silent loss).
function clip(text, max = 8000) {
  const buf = Buffer.from(text, 'utf8');
  if (buf.length <= max) return text;
  return buf.slice(0, max).toString('utf8') + `\n…[truncated ${buf.length - max} of ${buf.length} bytes]`;
}

export async function runTool(name, input, ctx) {
  try {
    if (name === 'list_dir') {
      const p = within(ctx.repoRoot, input.path);
      if (p.error) return deny(p.error);
      return ok(clip(fs.readdirSync(p.path, { withFileTypes: true }).map((e) => e.name + (e.isDirectory() ? '/' : '')).join('\n')));
    }
    if (name === 'read_file') {
      const p = within(ctx.repoRoot, input.path);
      if (p.error) return deny(p.error);
      return ok(clip(fs.readFileSync(p.path, 'utf8')));
    }
    if (name === 'write_file') {
      const p = within(ctx.workspace, input.path, ctx.repoRoot);
      if (p.error) {
        return deny('GUARDRAIL: Directive #5 — writes are restricted to the workspace ' +
          rel(ctx.repoRoot, ctx.workspace) + ' (' + p.error + ').');
      }
      fs.mkdirSync(path.dirname(p.path), { recursive: true });
      fs.writeFileSync(p.path, input.content);
      return ok('wrote ' + rel(ctx.repoRoot, p.path));
    }
    if (name === 'run_gate') {
      try {
        const out = execSync('node tests/conformance/run.mjs', { cwd: ctx.repoRoot, encoding: 'utf8' });
        return ok(out);
      } catch (e) {
        return deny((e.stdout || '') + (e.stderr || ''));
      }
    }
    return deny('GUARDRAIL: unknown tool: ' + name);
  } catch (e) {
    return deny('GUARDRAIL/ERROR: ' + e.message);
  }
}

function rel(root, p) {
  return path.relative(root, p).split(path.sep).join('/');
}

// Symlink-hardened containment. `rel` must resolve to inside `base`. We reject any `..`
// segment pre-resolution, then realpath the nearest existing ancestor so a symlink can't
// point the resolved path outside `base`. A trailing separator on the prefix stops
// `base-evil` from passing as inside `base`. Returns {path} or {error}.
function within(base, relPath, resolveFrom = base) {
  if (typeof relPath !== 'string' || relPath.length === 0) return { error: 'path is required' };
  const segments = relPath.split(/[\\/]/);
  if (segments.includes('..')) return { error: 'path contains a ".." segment' };

  const resolved = path.resolve(resolveFrom, relPath);
  const baseAbs = path.resolve(base);

  // Resolve symlinks on the deepest existing ancestor of both base and the target.
  const realBase = realAncestor(baseAbs);
  const realTarget = realAncestor(resolved);

  const prefix = realBase.endsWith(path.sep) ? realBase : realBase + path.sep;
  if (realTarget !== realBase && !realTarget.startsWith(prefix)) {
    return { error: 'path escapes ' + rel(resolveFrom, baseAbs) };
  }
  return { path: resolved };
}

// realpath of the closest existing ancestor directory (the target file may not exist yet).
function realAncestor(p) {
  let cur = p;
  for (;;) {
    try { return path.join(fs.realpathSync(cur), path.relative(cur, p)); }
    catch { /* not existing yet — walk up */ }
    const parent = path.dirname(cur);
    if (parent === cur) return p; // hit the root; nothing to resolve
    cur = parent;
  }
}
