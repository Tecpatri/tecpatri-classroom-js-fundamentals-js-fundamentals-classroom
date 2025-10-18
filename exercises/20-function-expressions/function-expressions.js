export const makeCounter = function(start = 0) {
  let n = start;
  return function() { n += 1; return n; };
};
