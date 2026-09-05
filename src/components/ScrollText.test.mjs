// node src/components/ScrollText.test.mjs
import assert from 'node:assert';

// mirrors progressFor in ScrollText.jsx
const progressFor = (top, height, vp) =>
  Math.min(1, Math.max(0, (vp - top) / (vp / 2 + height)));

// mirrors the --t formula in index.css (.st-char), SOFT = 8
const charT = (p, n, i) => Math.min(1, Math.max(0, (p * (n + 7) - i) / 8));

const VP = 800, H = 100;
assert.equal(progressFor(VP, H, VP), 0, 'top edge at viewport bottom -> 0');
assert.equal(progressFor(VP / 2 - H, H, VP), 1, 'bottom edge at centre -> 1');
assert.equal(progressFor(VP + 500, H, VP), 0, 'below the fold clamps to 0');
assert.equal(progressFor(-2000, H, VP), 1, 'scrolled past clamps to 1');

const N = 30;
assert.equal(charT(0, N, 0), 0, 'nothing revealed at p=0');
assert.equal(charT(1, N, N - 1), 1, 'last char fully revealed at p=1');
// exactly SOFT chars mid-transition, in reading order
const mid = [...Array(N).keys()].filter((i) => { const t = charT(0.5, N, i); return t > 0 && t < 1; });
assert.equal(mid.length, 8, `8 chars mid-transition, got ${mid.length}`);
assert.ok(charT(0.5, N, mid[0]) > charT(0.5, N, mid.at(-1)), 'earlier chars lead');
console.log('ok');
