export function toNumber(x) {
  const n = Number(x);
  return Number.isNaN(n) ? NaN : n;
}
