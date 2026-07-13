// Autonomy profiles are enforced by the trusted runtime, never by model prose.
import fs from 'node:fs';
import path from 'node:path';

export const PROFILES = Object.freeze({
  assistant: new Set(['list_dir', 'read_file', 'plan', 'update_plan', 'finish']),
  supervised: new Set(['list_dir', 'read_file', 'write_file', 'run_gate', 'run_command', 'fetch_url', 'install_package', 'plan', 'update_plan', 'finish', 'delegate']),
  sandbox: new Set(['list_dir', 'read_file', 'write_file', 'run_gate', 'run_command', 'fetch_url', 'install_package', 'plan', 'update_plan', 'finish', 'delegate']),
});

export function profileFrom(value = process.env.FORGE_PROFILE || 'supervised') {
  if (value === 'sandbox-autonomo') return 'sandbox';
  return Object.hasOwn(PROFILES, value) ? value : 'supervised';
}

export function permits(profile, tool) {
  return PROFILES[profileFrom(profile)].has(tool);
}

export function requiresApproval(profile, tool) {
  return profileFrom(profile) === 'supervised' && ['write_file', 'run_command', 'fetch_url', 'install_package'].includes(tool);
}

export function networkAllowed(rawUrl) {
  let url;
  try { url = new URL(rawUrl); } catch { return false; }
  if (!['http:', 'https:'].includes(url.protocol)) return false;
  const allowed = String(process.env.FORGE_NETWORK_ALLOWLIST || '').split(',').map((item) => item.trim().toLowerCase()).filter(Boolean);
  return allowed.some((host) => url.hostname === host || url.hostname.endsWith('.' + host));
}

export function sandboxRunner() {
  const runner = process.env.FORGE_SANDBOX_RUNNER;
  if (!runner || !path.isAbsolute(runner) || !fs.existsSync(runner)) return null;
  return runner;
}
