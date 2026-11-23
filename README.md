# GTU Physics BE01000021 optics numericals: Newton's rings, liquid refractive index, grating and single slit

Optics is one of the new units in BE01000021 Physics (8 hrs, 18% as listed in GTU Hero's Physics guide), and the guide notes that optics and quantum are already showing up hard in the new scheme papers. Diameters ya lines per cm daalo: this page solves the standard formula numericals (Newton's rings wavelength, refractive index of a liquid film, grating orders and single slit minima) with unit conversion done for you. Practice values are my own, not from a GTU paper.

Live page: https://princeadvant.github.io/gtu-physics-optics-numericals/

## Facts used

- Newton's rings (reflected light, air film): D_n^2 = 4 n lambda R, so lambda = (D_(n+p)^2 - D_n^2) / (4 p R). Using the difference cancels the unknown contact error.
- Liquid between lens and plate: D^2 = 4 n lambda R / mu, so mu = D_air^2 / D_liquid^2 for the same ring number. Rings shrink in the liquid.
- Diffraction grating: d sin theta = n lambda with d = 1/N. Convert lines per cm to lines per m first (5000 per cm = 5 x 10^5 per m, so d = 2 x 10^-6 m).
- Highest order: n_max is the whole number part of d / lambda. If d / lambda comes out exactly whole, that order is at 90 degrees and is not seen, so the highest visible order is one less.
- Single slit minima: a sin theta = n lambda for n = 1, 2, 3...
- Hand-worked: D5 = 3.36 mm, D15 = 5.90 mm, p = 10, R = 1 m gives lambda = 588.0 nm.

## Test

`node test.js` checks each formula with round-trip and hand-worked values and prints `All checks passed`.

## Tips

- Ring diameters are given in mm or cm and R in m or cm. Convert everything to metres before squaring. Unit galti = zero.
- Square the diameters first, then subtract. Do not subtract diameters and square.
- Grating: if they give lines per inch, 1 inch = 2.54 cm.
- Write the formula, substitute with units, then the answer. Formula line alone usually gets a mark.

Unit weightage for 3110011, 3110018 and BE01000021 and the most repeated Physics questions: [GTU Hero](https://gtuhero.com/blogs/gtu-physics-paper-sem-1-2-pyq) (GTU Hero is my project).
