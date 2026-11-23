const F = require('./calc.js'), assert = require('assert');
const near = (a, b, t = 0.01) => assert(Math.abs(a - b) < t, a + ' vs ' + b);
// round trip: build ring diameters from lambda = 589 nm, R = 1 m, then recover lambda
const D5 = F.darkRingD(5, 589, 1), D15 = F.darkRingD(15, 589, 1);
near(D5, 3.432, 0.001); near(D15, 5.945, 0.001);
near(F.newtonWavelength(D5, D15, 10, 1), 589, 1e-6);
// hand-worked: D5 = 3.36 mm, D15 = 5.90 mm, p = 10, R = 1 m -> (34.81 - 11.2896) mm^2 / 40 m = 588.0 nm
near(F.newtonWavelength(3.36, 5.90, 10, 1), 588.01, 0.01);
// liquid: rings shrink by sqrt(mu)
near(F.liquidMu(F.darkRingD(10, 600, 1), F.darkRingD(10, 600, 1, 1.33)), 1.33, 1e-9);
// grating 5000 lines/cm, 500 nm: d = 2e-6 m, d/lambda = 4 exactly -> highest visible order 3
let g = F.grating(5000, 500, 1); near(g.d_m, 2e-6, 1e-15); assert.strictEqual(g.maxOrder, 3); near(g.theta, 14.4775, 1e-3);
g = F.grating(6000, 589); assert.strictEqual(g.maxOrder, 2); // d/lambda = 2.83
assert.strictEqual(F.grating(5000, 500, 4).theta, null);
near(F.singleSlitMin(0.01, 600, 1), 3.4399, 1e-3);
assert.throws(() => F.newtonWavelength(5, 3, 10, 1));
console.log('lambda =', F.newtonWavelength(3.36, 5.90, 10, 1).toFixed(2), 'nm');
console.log('All checks passed');
