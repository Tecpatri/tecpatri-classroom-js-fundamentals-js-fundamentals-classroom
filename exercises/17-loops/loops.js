export function sumTo(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) s += i;
  return s;
}
export function firstEven(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) return arr[i];
    i++;
  }
  return undefined;
}
