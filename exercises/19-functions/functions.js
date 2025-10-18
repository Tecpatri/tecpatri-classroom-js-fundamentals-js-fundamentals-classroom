export function repeat(str, n = 1) {
  let out = '';
  for (let i = 0; i < n; i++) out += str;
  return out;
}
