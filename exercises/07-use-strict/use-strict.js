export function inStrictMode() {
  'use strict';
  return (function () { return this; })() === undefined;
}
