// Rule: every relative markdown link resolves to a real file or directory.
// Template placeholders (<...>, …) and code spans/blocks are ignored.
// Supports --fix: repairs a broken link when exactly one existing target matches.
import fs from 'node:fs';
import path from 'node:path';
export const id = 'links';
export const description = 'Relative markdown links must resolve.';

export default function check(ctx) {
  const { util } = ctx;
  const findings = [];
  for (const file of ctx.mdFiles) {
    if (file.endsWith('.template.md')) continue;
    const text = util.read(file);
    for (const { target, line } of util.relLinks(text)) {
      if (util.isPlaceholder(target)) continue;
      if (!util.exists(util.resolveLink(file, target))) {
        findings.push({ file, line, msg: `broken link → ${target}` });
      }
    }
  }
  return findings;
}

// --fix: rewrite a broken link iff exactly one existing path matches its tail.
// Prefers a target inside the same company. Never touches a link that resolves.
export function fix(ctx) {
  const { util, root, config } = ctx;
  const norm = (s) => s.replace(/\/+$/, '').replace(/\.md$/, '');
  const index = [...util.walk(root, config.skipDirs), ...util.walkDirs(root, config.skipDirs)]
    .map((p) => { const rel = util.rel(root, p); return { abs: p, rel, nrel: norm(rel) }; });
  let fixed = 0;
  for (const file of ctx.mdFiles) {
    if (file.endsWith('.template.md')) continue;
    let text = util.read(file);
    const company = util.rel(root, file).split('/')[0];
    let changed = false;
    const targets = new Set(util.relLinks(text).map((l) => l.target));
    for (const t of targets) {
      if (util.isPlaceholder(t) || util.exists(util.resolveLink(file, t))) continue;
      const tail = norm(t.replace(/^(\.\.\/)+/, ''));
      if (!tail) continue;
      let cands = index.filter((x) => x.nrel === tail || x.nrel.endsWith('/' + tail));
      const inCo = cands.filter((x) => x.rel.startsWith(company + '/'));
      if (inCo.length) cands = inCo;
      if (cands.length !== 1) continue;
      let nr = path.relative(path.dirname(file), cands[0].abs).split(path.sep).join('/');
      if (!nr.startsWith('.')) nr = './' + nr;
      text = text.split('](' + t + ')').join('](' + nr + ')');
      changed = true; fixed++;
    }
    if (changed) fs.writeFileSync(file, text);
  }
  return fixed;
}
