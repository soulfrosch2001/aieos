// Forge runtime — the agent's executable tools, with guardrails.
// READ tools work repo-wide; WRITE is restricted to the agent's workspace; the GATE
// is a first-class tool so the agent can verify before it claims (Directive #9).
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

// The `delegate` tool is OFF by default. It is advertised only when FORGE_SUBAGENTS=on,
// so default runs see an identical tool set and CI stays stable. `depth` is the CURRENT
// loop depth; once it has reached the cap there is no budget left to delegate, so the
// schema is withheld even when the flag is on.
export function subagentsEnabled(depth = 0) {
  if (process.env.FORGE_SUBAGENTS !== 'on') return false;
  const cap = Number(process.env.FORGE_MAX_DEPTH) || 1;
  return depth < cap;
}

export function toolSchemas({ depth = 0 } = {}) {
  const schemas = [
    { name: 'list_dir', description: 'List entries at a path (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'read_file', description: 'Read a UTF-8 file (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'read_many', description: 'Read several UTF-8 files in ONE call instead of one read_file call per file — use when you already know which files you need next, to save round trips. Same containment as read_file, per path (max 20 paths; each result is more tightly clipped than a single read_file, since several share one response).', input_schema: { type: 'object', properties: { paths: { type: 'array', items: { type: 'string' }, description: 'Repo-relative paths to read.' } }, required: ['paths'] } },
    { name: 'write_file', description: 'Write a file. Restricted to the agent workspace.', input_schema: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] } },
    { name: 'write_csv', description: 'Write a spreadsheet-compatible CSV file (opens natively in Excel/Sheets/Numbers) — the dependency-free equivalent of a spreadsheet deliverable. Restricted to the agent workspace, same as write_file: "path" is relative to the REPO ROOT (like read_file/write_file) and must resolve inside your workspace folder.', input_schema: { type: 'object', properties: { path: { type: 'string', description: 'Repo-root-relative path that must fall inside your workspace, e.g. "<your-agent-dir>/workspace/report.csv".' }, headers: { type: 'array', items: { type: 'string' }, description: 'Column headers (optional).' }, rows: { type: 'array', items: { type: 'array' }, description: 'Row data — an array of rows, each row an array of cell values.' } }, required: ['path', 'rows'] } },
    { name: 'run_gate', description: 'Run the conformance gate (npm test). Verify before finishing.', input_schema: { type: 'object', properties: {} } },
    { name: 'plan', description: 'Record an ordered checklist of the steps you intend to take. Replaces any current plan.', input_schema: { type: 'object', properties: { steps: { type: 'array', items: { type: 'string' }, description: 'Ordered list of step descriptions.' } }, required: ['steps'] } },
    { name: 'update_plan', description: 'Revise the current plan: mark steps done/dropped by their 1-based number, add steps, or replace the whole list.', input_schema: { type: 'object', properties: { complete: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to mark done.' }, drop: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to drop.' }, add: { type: 'array', items: { type: 'string' }, description: 'New steps to append.' }, steps: { type: 'array', items: { type: 'string' }, description: 'Full replacement checklist (re-plan).' } } } },
    { name: 'finish', description: 'End the run with a short summary of what was accomplished.', input_schema: { type: 'object', properties: { summary: { type: 'string' } }, required: ['summary'] } },
  ];
  if (subagentsEnabled(depth)) {
    schemas.push({ name: 'delegate', description: 'Decompose a self-contained sub-task into a bounded sub-run (same workspace, its own gate). Use sparingly for a distinct, decomposable piece of work; depth-capped. If you have MULTIPLE independent sub-tasks, call this tool more than once in the SAME turn — those calls run concurrently, not one-at-a-time.', input_schema: { type: 'object', properties: { task: { type: 'string', description: 'The self-contained sub-task for the sub-run to accomplish.' } }, required: ['task'] } });
  }
  return schemas;
}

const ok = (output) => ({ ok: true, output });
const deny = (output) => ({ ok: false, output });

// Bounded read: cut at `max` bytes and tell the model data was withheld (no silent loss).
function clip(text, max = 8000) {
  const buf = Buffer.from(text, 'utf8');
  if (buf.length <= max) return text;
  return buf.slice(0, max).toString('utf8') + `\n…[truncated ${buf.length - max} of ${buf.length} bytes]`;
}

// RFC 4180-ish CSV rendering. Dependency-free by design (Node built-ins only, same as the
// rest of the runtime) — a field is quoted only when it needs to be (contains a comma,
// quote, or newline), with internal quotes doubled. CRLF line endings for the widest
// spreadsheet-app compatibility.
function csvField(v) {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function toCsv(headers, rows) {
  const lines = [];
  if (Array.isArray(headers) && headers.length) lines.push(headers.map(csvField).join(','));
  for (const row of rows || []) lines.push((Array.isArray(row) ? row : [row]).map(csvField).join(','));
  return lines.join('\r\n') + '\r\n';
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
    // Batch read: the safe subset of "programmatic tool calling" — several reads in one
    // round trip. No new safety surface: every path goes through the exact same `within()`
    // containment check `read_file` uses, one at a time, and a failed path becomes an
    // inline error line rather than aborting the whole batch (so one bad path in twenty
    // doesn't cost the other nineteen). Capped at 20 paths and a tighter per-file clip so a
    // large batch cannot silently blow past the runtime's context-trim budget.
    if (name === 'read_many') {
      const paths = Array.isArray(input.paths) ? input.paths.slice(0, 20) : [];
      if (!paths.length) return deny('read_many requires a non-empty "paths" array (max 20).');
      const parts = paths.map((rp) => {
        const p = within(ctx.repoRoot, rp);
        if (p.error) return `--- ${rp} ---\nERROR: ${p.error}`;
        try { return `--- ${rp} ---\n${clip(fs.readFileSync(p.path, 'utf8'), 3000)}`; }
        catch (e) { return `--- ${rp} ---\nERROR: ${e.message}`; }
      });
      return ok(clip(parts.join('\n\n'), 8000));
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
    // Dependency-free spreadsheet deliverable: CSV opens natively in Excel/Sheets/Numbers.
    // Same write-confinement as write_file — this is not a new capability, just a second,
    // structured way to call the same restricted write.
    if (name === 'write_csv') {
      const p = within(ctx.workspace, input.path, ctx.repoRoot);
      if (p.error) {
        return deny('GUARDRAIL: Directive #5 — writes are restricted to the workspace ' +
          rel(ctx.repoRoot, ctx.workspace) + ' (' + p.error + ').');
      }
      if (!Array.isArray(input.rows)) return deny('write_csv requires a "rows" array (array of arrays).');
      fs.mkdirSync(path.dirname(p.path), { recursive: true });
      fs.writeFileSync(p.path, toCsv(input.headers, input.rows));
      return ok('wrote ' + rel(ctx.repoRoot, p.path) + ` (${input.rows.length} row(s))`);
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
