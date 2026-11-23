// GTU Physics optics numericals: Newton's rings, liquid film, diffraction grating, single slit. SI units inside. MIT licence.
const F = {
  pos(x, name) { if (!(Number.isFinite(x) && x > 0)) throw new Error(name + ' must be a positive number'); return x; },
  // diameters in mm, R in m -> wavelength in nm
  newtonWavelength(Dn_mm, Dnp_mm, p, R_m) {
    F.pos(Dn_mm, 'D_n'); F.pos(Dnp_mm, 'D_(n+p)'); F.pos(R_m, 'R');
    if (!Number.isInteger(p) || p < 1) throw new Error('p must be a whole number >= 1');
    if (Dnp_mm <= Dn_mm) throw new Error('D_(n+p) must be bigger than D_n');
    const lam = ((Dnp_mm / 1000) ** 2 - (Dn_mm / 1000) ** 2) / (4 * p * R_m);
    return lam * 1e9;
  },
  // dark ring diameter in mm for ring n (air film, reflected light): D^2 = 4 n lambda R / mu
  darkRingD(n, lam_nm, R_m, mu = 1) {
    return Math.sqrt(4 * n * lam_nm * 1e-9 * R_m / mu) * 1000;
  },
  liquidMu(Dair_mm, Dliq_mm) { F.pos(Dair_mm, 'D air'); F.pos(Dliq_mm, 'D liquid'); return (Dair_mm / Dliq_mm) ** 2; },
  // N lines per cm
  grating(N_per_cm, lam_nm, n) {
    F.pos(N_per_cm, 'lines per cm'); F.pos(lam_nm, 'wavelength');
    const d = 0.01 / N_per_cm, lam = lam_nm * 1e-9, ratio = d / lam;
    const maxOrder = Math.abs(ratio - Math.round(ratio)) < 1e-9 ? Math.round(ratio) - 1 : Math.floor(ratio);
    let theta = null;
    if (n !== undefined) { const s = n * lam / d; theta = s < 1 ? Math.asin(s) * 180 / Math.PI : null; }
    return { d_m: d, maxOrder, theta };
  },
  // slit width a in mm, minimum of order n
  singleSlitMin(a_mm, lam_nm, n) {
    F.pos(a_mm, 'slit width'); F.pos(lam_nm, 'wavelength');
    const s = n * lam_nm * 1e-9 / (a_mm / 1000);
    return s <= 1 ? Math.asin(s) * 180 / Math.PI : null;
  }
};
if (typeof module !== 'undefined') module.exports = F;
