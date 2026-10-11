/* ===========================================================
   core.js — registro de contenido
   Se carga ANTES de los archivos de contenido.
   Cada archivo de contenido llama a EAL.unidad(), EAL.tp() o EAL.examen().
   =========================================================== */

window.EAL = (function () {
  const unidades = [];
  const tps = [];
  const examenes = [];

  /** Registra una unidad de teoría. */
  function unidad(u) { unidades.push(u); return u; }

  /** Registra un trabajo práctico. */
  function tp(t) { tps.push(t); return t; }

  /** Registra un examen (parcial / final). */
  function examen(e) { examenes.push(e); return e; }

  return { unidades, tps, examenes, unidad, tp, examen, raw: String.raw };
})();

/* Atajo cómodo para los archivos de contenido: tex`\frac{1}{2}` deja las
   barras invertidas intactas (equivale a String.raw). */
window.tex = String.raw;
