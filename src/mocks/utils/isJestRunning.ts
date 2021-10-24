export function isJestRunning(): boolean {
  return process.env.JEST_WORKER_ID !== undefined;
}
