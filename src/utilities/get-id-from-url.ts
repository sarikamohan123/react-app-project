export function getIdFromUrl(url: string): number | undefined {
  const last = url.replace(/\/$/, "").split("/").pop();
  const n = Number(last);
  return Number.isFinite(n) ? n : undefined;
}
