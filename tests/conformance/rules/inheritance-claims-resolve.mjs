// Rule: a company's "Local overrides (by name)" claims must resolve on disk.
// An AIEOS.md mount adapter that names a local entity as overriding a stdlib default
// must actually ship that entity — otherwise the override table promises a file that
// does not exist. Resolves the loader's by-name claim (kernel/loader/resolution-order.md).
//
// Handles BOTH override-table styles used across the fleet:
//   - backtick:  `councils/review-council`            → path relative to the COMPANY ROOT
//   - markdown:  [campaign-council](../councils/...)   → path relative to the AIEOS.md file
// (Previously only backtick rows were checked, leaving ~half the companies unverified.)
import path from 'node:path';
export const id = 'inheritance-claims-resolve';
export const level = 'error';
export const description = 'Every local-override entity named in a company AIEOS.md exists on disk.';

export default function check(ctx) {
  const { util, root, config } = ctx;
  const legacy = new Set((config && config.legacyDirs) || []);
  const adapters = ctx.mdFiles.filter((f) => path.basename(f) === 'AIEOS.md');
  const findings = [];

  for (const f of adapters) {
    const top = util.rel(root, f).split('/')[0];
    if (legacy.has(top)) continue; // legacy companies are out of scope until reconciled

    const text = util.read(f);
    // Local-entity paths are relative to the COMPANY ROOT (the parent of 00-company/).
    let baseDir = path.dirname(f);
    if (path.basename(baseDir) === '00-company') baseDir = path.dirname(baseDir);

    // Isolate the "Local overrides (by name)" table, up to the next H2.
    const section = text.match(/##\s+Local overrides[^\n]*\n([\s\S]*?)(?=\n##\s|$)/i);
    if (!section) continue;

    for (const rowText of section[1].split('\n')) {
      if (!/^\|/.test(rowText.trim())) continue;
      const first = rowText.split('|').map((c) => c.trim())[1] || '';
      if (!first || /^-+$/.test(first) || /local entity/i.test(first)) continue; // separator/header

      // Resolve the named entity from whichever style the table uses.
      const backtick = first.match(/`([^`]+)`/);
      const link = first.match(/\[[^\]]*\]\(([^)]+)\)/);
      let entity, target;
      if (backtick) {
        entity = backtick[1].trim().replace(/\s*\(.*\)\s*$/, ''); // drop a trailing "(T2)" note
        target = path.join(baseDir, entity);              // backtick paths are company-root-relative
      } else if (link) {
        entity = link[1].split('#')[0].trim();
        if (/^(https?:|mailto:)/i.test(entity)) continue;
        target = path.join(path.dirname(f), entity);      // link targets are AIEOS.md-relative
      } else {
        continue;
      }
      if (util.isPlaceholder(entity)) continue;

      if (!util.exists(target)) {
        const idx = text.indexOf(rowText);
        const line = idx >= 0 ? text.slice(0, idx).split('\n').length : null;
        findings.push({
          file: f,
          line,
          msg: `override names "${entity}" but it does not exist at ${util.rel(root, target)}`,
        });
      }
    }
  }
  return findings;
}
