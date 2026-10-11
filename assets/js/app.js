/* ===========================================================
   app.js — router, render, búsqueda, enlaces teoría ↔ práctica
   =========================================================== */
(function () {
'use strict';

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

const U  = EAL.unidades;
const TP = EAL.tps;
const EX = EAL.examenes;

const TIPO = {
  def:  { k: 'Definición', ab: 'DEF' },
  teo:  { k: 'Teorema',    ab: 'TEO' },
  prop: { k: 'Propiedad',  ab: 'PROP' },
  obs:  { k: 'Observación',ab: 'OBS' },
  form: { k: 'Fórmula',    ab: 'FÓRM' },
  met:  { k: 'Método',     ab: 'MÉT' }
};

/* ---------------------------------------------------------------
   Índice de conceptos: id -> { concepto, unidad }
   --------------------------------------------------------------- */
const CPT = new Map();
U.forEach(u => (u.secciones || []).forEach(s => (s.conceptos || []).forEach(c => {
  CPT.set(c.id, { c, u, s });
})));

/* ---------------------------------------------------------------
   Progreso (localStorage, tolerante a fallos)
   --------------------------------------------------------------- */
const KEY = 'eal.progreso.v1';
let done = new Set();
try {
  const r = localStorage.getItem(KEY);
  if (r) done = new Set(JSON.parse(r));
} catch (e) { /* modo privado, datos bloqueados: seguimos sin progreso */ }

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(Array.from(done))); } catch (e) {}
}
function toggleDone(id) {
  if (done.has(id)) done.delete(id); else done.add(id);
  save();
}

/* ---------------------------------------------------------------
   Utilidades
   --------------------------------------------------------------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, m =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}
function norm(s) {
  return String(s).toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '');
}
function plano(html) {
  const d = document.createElement('div');
  d.innerHTML = String(html || '');
  return (d.textContent || '').replace(/\s+/g, ' ').trim();
}
/* Renderiza la matematica del fragmento recien insertado.
   Usa KaTeX si esta disponible (version local) y MathJax en modo SVG si no
   (version publicada: la CSP de los artifacts bloquea hojas de estilo externas,
   asi que KaTeX no puede cargar la suya). */
function katex(root) {
  if (!window.renderMathInElement) {
    const MJ = window.MathJax;
    if (MJ && MJ.typesetPromise) {
      MJ.typesetPromise([root]).catch(() => {});
    }
    return;
  }
  try {
    renderMathInElement(root, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '$',  right: '$',  display: false },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false,
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    });
  } catch (e) {}
}

/* conteo de items resolubles de un TP / examen */
function items(tp) {
  const out = [];
  (tp.ejercicios || []).forEach(e => {
    if (e.incisos && e.incisos.length) e.incisos.forEach(i => out.push(i.id));
    else out.push(e.id);
  });
  return out;
}
function resueltos(tp) {
  const all = items(tp);
  let n = 0;
  (tp.ejercicios || []).forEach(e => {
    const lista = (e.incisos && e.incisos.length) ? e.incisos : [e];
    lista.forEach(i => { if (i.resolucion) n++; });
  });
  return { n, total: all.length };
}
function hechos(tp) {
  return items(tp).filter(id => done.has(id)).length;
}

/* ---------------------------------------------------------------
   Render de piezas reutilizables
   --------------------------------------------------------------- */

/** chips de "conceptos necesarios" */
function chips(ids, lbl) {
  if (!ids || !ids.length) return '';
  const inner = ids.map(id => {
    const hit = CPT.get(id);
    if (!hit) {
      return `<span class="chip missing" data-k="?" title="Concepto aún no cargado: ${esc(id)}">${esc(id)}</span>`;
    }
    const t = hit.c.tipo || 'def';
    return `<a class="chip" data-tipo="${t}" data-k="${TIPO[t].ab}" data-cpt="${esc(id)}"
               href="#/teoria/${esc(hit.u.id)}?c=${encodeURIComponent(id)}">${esc(hit.c.titulo)}</a>`;
  }).join('');
  return `<div class="cneed">
    <div class="lbl">${esc(lbl || 'Conceptos de teoría necesarios')}</div>
    <div class="chips">${inner}</div>
  </div>`;
}

/** sustituye [[id]] y [[id|texto]] dentro de prosa por una referencia inline */
function refs(html) {
  return String(html || '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, id, txt) => {
    id = id.trim();
    const hit = CPT.get(id);
    const label = txt || (hit ? hit.c.titulo : id);
    if (!hit) return `<span class="ref" title="Concepto aún no cargado">${esc(label)}</span>`;
    return `<a class="ref" data-cpt="${esc(id)}" href="#/teoria/${esc(hit.u.id)}?c=${encodeURIComponent(id)}">${esc(label)}</a>`;
  });
}

function concepto(c) {
  const t = c.tipo || 'def';
  return `<article class="concept" id="${esc(c.id)}" data-tipo="${t}">
    <div class="chead">
      <span class="tag">${esc(TIPO[t].k)}</span>
      <h4>${esc(c.titulo)}</h4>
      <a class="anchor" href="#/teoria/${esc(c.id.split('-')[0])}?c=${encodeURIComponent(c.id)}"
         title="Enlace a este concepto">#</a>
    </div>
    <div class="cbody">${refs(c.cuerpo)}</div>
  </article>`;
}

function checkbox(id) {
  const is = done.has(id);
  return `<button class="done${is ? ' is' : ''}" data-done="${esc(id)}"
    aria-pressed="${is}" title="Marcar como hecho a mano">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>
    ${is ? 'Hecho' : 'Marcar'}</button>`;
}

/** bloque resoluble: conceptos → pista → resolución → resultado */
function solucion(o) {
  let h = '';
  h += chips(o.conceptos);
  if (o.pista) {
    h += `<details class="reveal pista"><summary>Pista — por dónde empezar</summary>
      <div class="rbody">${refs(o.pista)}</div></details>`;
  }
  if (o.resolucion) {
    h += `<details class="reveal sol"><summary>Resolución paso a paso</summary>
      <div class="rbody">${refs(o.resolucion)}
      ${o.resultado ? `<div class="res"><span class="lbl">Resultado</span>
        <div class="val">${refs(o.resultado)}</div></div>` : ''}</div></details>`;
  } else {
    h += `<p class="muted"><small>Resolución pendiente — ver el plan de sesiones en el inicio.</small></p>`;
  }
  return h;
}

function ejercicio(e, tpid) {
  const lista = (e.incisos && e.incisos.length) ? e.incisos : null;
  const allIds = lista ? lista.map(i => i.id) : [e.id];
  const isDone = allIds.every(id => done.has(id));

  let cuerpo = '';
  if (lista) {
    cuerpo = lista.map(i => `<div class="inciso" id="${esc(i.id)}">
      <div class="ihead">
        <span class="rot">${esc(i.rot)})</span>
        <div class="q">${refs(i.enunciado || '')}</div>
        ${checkbox(i.id)}
      </div>
      ${solucion(i)}
    </div>`).join('');
  } else {
    cuerpo = solucion(e);
  }

  return `<section class="ej${isDone ? ' is-done' : ''}" id="${esc(e.id)}">
    <div class="ehead">
      <span class="num">${esc(e.num)}</span>
      <div class="etit">${refs(e.enunciado || '')}</div>
      ${lista ? '' : checkbox(e.id)}
    </div>
    <div class="ebody">${cuerpo}</div>
  </section>`;
}

/* ---------------------------------------------------------------
   Vistas
   --------------------------------------------------------------- */

function vistaInicio() {
  const totTp = TP.reduce((a, t) => { const r = resueltos(t); a.n += r.n; a.total += r.total; return a; },
    { n: 0, total: 0 });
  const nConceptos = CPT.size;
  const totHechos = TP.reduce((a, t) => a + hechos(t), 0);

  const tarjetas = TP.map(t => {
    const r = resueltos(t);
    const h = hechos(t);
    const pct = r.total ? Math.round(100 * r.n / r.total) : 0;
    return `<a class="card" href="#/practica/${esc(t.id)}">
      <span class="k">TP ${esc(t.num)} · Unidad ${esc(t.num)}</span>
      <h4>${esc(t.titulo)}</h4>
      <p>${r.total} ítems · ${r.n} con resolución</p>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="meta">
        <span class="pill ${pct === 100 ? 'ok' : (pct > 0 ? 'wip' : '')}">${pct}% resuelto</span>
        ${h ? `<span class="pill ok">${h} hechos por vos</span>` : ''}
      </div>
    </a>`;
  }).join('');

  return `<div class="wrap">
    <div class="eyebrow">Universidad Nacional del Comahue · FaEA / FI</div>
    <h1>Elementos de Álgebra Lineal</h1>
    <p class="lead">Todo el material de la cursada 2026 ordenado como se presentan los temas:
    la teoría unidad por unidad, los siete trabajos prácticos y los parciales y finales de ejemplo.
    Cada ítem de práctica enlaza los conceptos de teoría que hacen falta para resolverlo.</p>

    <div class="row">
      <a class="btn primary" href="#/teoria">Empezar por la teoría</a>
      <a class="btn" href="#/practica">Ir a los prácticos</a>
      <a class="btn" href="#/examenes">Parciales y finales</a>
    </div>

    <div class="note warn">
      <b class="lbl">Cómo usar esto</b>
      La cátedra pide explícitamente que los prácticos se resuelvan <strong>a mano alzada</strong>, sin
      aplicaciones de matemática ni IA, y que se usen otras herramientas sólo para
      <strong>corregir o autocorregir</strong>. Por eso las resoluciones están plegadas:
      intentá el ítem, después abrí la pista, y recién al final la resolución para compararla con la tuya.
    </div>

    <h2>Estado del material</h2>
    <div class="grid">
      <div class="card"><span class="k">Teoría</span><h4>${nConceptos} conceptos</h4>
        <p>Definiciones, teoremas, propiedades y métodos de las 7 unidades, con la numeración de la cátedra.</p></div>
      <div class="card"><span class="k">Práctica</span><h4>${totTp.n} / ${totTp.total} ítems</h4>
        <p>Ítems de los TP con resolución explicada y conceptos enlazados.</p>
        <div class="bar"><i style="width:${totTp.total ? Math.round(100 * totTp.n / totTp.total) : 0}%"></i></div></div>
      <div class="card"><span class="k">Tu avance</span><h4>${totHechos} ítems hechos</h4>
        <p>Los que marcaste como resueltos a mano. Se guarda en este navegador.</p></div>
    </div>

    <h2>Trabajos prácticos</h2>
    <div class="grid">${tarjetas}</div>

    <h2>Plan de sesiones</h2>
    <p><strong>Todo está resuelto: los 261 ítems de los siete trabajos prácticos y los 56 de los
    siete exámenes — 317 en total.</strong> Cada resultado numérico fue recalculado de forma
    independiente (1165 verificaciones automáticas). Este es el recorrido completo:</p>
    <div class="tbl"><table>
      <thead><tr><th>Sesión</th><th>Qué se agrega</th><th>Estado</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Estructura del sitio + teoría completa de las 7 unidades + <strong>TP 1 Vectores</strong> resuelto</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>2</td><td>TP 2 Rectas en el plano completo + TP 3 Rectas y planos en el espacio (ej. 1–10)</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>3</td><td>TP 3 (ej. 11–20, el práctico más largo)</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>4</td><td>TP 4 Espacios vectoriales</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>5</td><td>TP 5 Cambio de base + TP 6 Transformaciones lineales</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>6</td><td>TP 7 Autovalores y autovectores</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>7</td><td>Enunciados de parciales y finales verificados contra los PDF originales (re-extracción UCS-2)</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>8</td><td><strong>Parciales resueltos</strong> (1.º, recuperatorio 1.º, recuperatorio 2.º, promoción) — 30 ítems</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>9</td><td><strong>Finales resueltos</strong> (9/12/25, 3/8/26, 27/8/26) — 26 ítems</td><td><span class="pill ok">listo</span></td></tr>
        <tr><td>10</td><td>Formulario de repaso de una página</td><td><span class="pill">pendiente</span></td></tr>
      </tbody>
    </table></div>

    <h2>De dónde sale cada cosa</h2>
    <p>Todo proviene de los PDF de la carpeta del proyecto:</p>
    <ul>
      <li><strong>Teoría:</strong> diapositivas 2026 de la cátedra (Mg. Carolina G. Pozzebon) y los apuntes
      de teoría por unidad (Mg. Marcela Albornoz). Bibliografía citada: Larotonda,
      <em>Álgebra Lineal y Geometría</em>; Grossman, <em>Álgebra Lineal</em>.</li>
      <li><strong>Práctica:</strong> los siete trabajos prácticos de <code>7_EAL_2026</code>
      (idénticos a los de 2024).</li>
      <li><strong>Exámenes:</strong> primer parcial 24/9/25 y su recuperatorio, recuperatorio del
      segundo parcial 28/11/25, parcial de promoción 2/12/25 y finales del 9/12/25, 3/8/26 y 27/8/26.</li>
    </ul>
  </div>`;
}

function vistaTeoriaIndice() {
  const cards = U.map(u => {
    const n = (u.secciones || []).reduce((a, s) => a + (s.conceptos || []).length, 0);
    return `<a class="card" href="#/teoria/${esc(u.id)}">
      <span class="k">Unidad ${esc(u.num)}</span>
      <h4>${esc(u.titulo)}</h4>
      <p>${esc(u.resumen || '')}</p>
      <div class="meta"><span class="pill">${n} conceptos</span>
      <span class="pill">${(u.secciones || []).length} secciones</span></div>
    </a>`;
  }).join('');
  return `<div class="wrap">
    <div class="eyebrow">Teoría</div>
    <h1>Las siete unidades</h1>
    <p class="lead">En el orden en que se dictan. Cada unidad es la base del trabajo práctico
    del mismo número.</p>
    <div class="grid">${cards}</div>
  </div>`;
}

function vistaUnidad(id) {
  const u = U.find(x => x.id === id);
  if (!u) return noEncontrado();

  const toc = (u.secciones || []).map(s =>
    `<li><a href="#/teoria/${esc(u.id)}?c=${encodeURIComponent(s.id)}">${esc(s.titulo)}</a></li>`).join('');

  const cuerpo = (u.secciones || []).map(s => `
    <h2 id="${esc(s.id)}">${esc(s.titulo)}</h2>
    ${s.intro ? `<p>${refs(s.intro)}</p>` : ''}
    ${(s.conceptos || []).map(concepto).join('')}
  `).join('');

  const tp = TP.find(t => t.unidad === u.id);

  return `<div class="wrap">
    <div class="eyebrow">Unidad ${esc(u.num)} · Teoría</div>
    <h1>${esc(u.titulo)}</h1>
    ${u.resumen ? `<p class="lead">${esc(u.resumen)}</p>` : ''}
    ${tp ? `<div class="row"><a class="btn" href="#/practica/${esc(tp.id)}">
      Ir al TP ${esc(tp.num)}: ${esc(tp.titulo)} →</a></div>` : ''}
    <div class="toc"><div class="lbl">En esta unidad</div><ol>${toc}</ol></div>
    ${cuerpo}
    ${pager('teoria', u.id)}
  </div>`;
}

function vistaPracticaIndice() {
  const cards = TP.map(t => {
    const r = resueltos(t);
    const pct = r.total ? Math.round(100 * r.n / r.total) : 0;
    return `<a class="card" href="#/practica/${esc(t.id)}">
      <span class="k">Trabajo práctico ${esc(t.num)}</span>
      <h4>${esc(t.titulo)}</h4>
      <p>${(t.ejercicios || []).length} ejercicios · ${r.total} ítems</p>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="meta"><span class="pill ${pct === 100 ? 'ok' : (pct > 0 ? 'wip' : '')}">${pct}% resuelto</span></div>
    </a>`;
  }).join('');
  return `<div class="wrap">
    <div class="eyebrow">Práctica</div>
    <h1>Trabajos prácticos</h1>
    <p class="lead">Los enunciados completos, tal como están en los PDF de la cátedra.
    Cada ítem indica qué conceptos de teoría necesita y, cuando está resuelto, lo desarrolla paso a paso.</p>
    <div class="grid">${cards}</div>
  </div>`;
}

function vistaTP(id) {
  const t = TP.find(x => x.id === id);
  if (!t) return noEncontrado();
  const u = U.find(x => x.id === t.unidad);
  const r = resueltos(t);
  const pct = r.total ? Math.round(100 * r.n / r.total) : 0;

  return `<div class="wrap">
    <div class="eyebrow">Trabajo práctico ${esc(t.num)}</div>
    <h1>${esc(t.titulo)}</h1>
    ${t.resumen ? `<p class="lead">${esc(t.resumen)}</p>` : ''}
    <div class="row">
      ${u ? `<a class="btn" href="#/teoria/${esc(u.id)}">← Teoría de la unidad ${esc(u.num)}</a>` : ''}
      <span class="pill ${pct === 100 ? 'ok' : (pct > 0 ? 'wip' : '')}">${r.n} de ${r.total} ítems con resolución</span>
    </div>
    ${t.nota ? `<div class="note">${refs(t.nota)}</div>` : ''}
    <div class="ejlist">${(t.ejercicios || []).map(e => ejercicio(e, t.id)).join('')}</div>
    ${pager('practica', t.id)}
  </div>`;
}

function vistaExamenesIndice() {
  const grupos = [
    { k: 'Primer parcial',    f: e => e.tipo === 'p1' },
    { k: 'Segundo parcial',   f: e => e.tipo === 'p2' },
    { k: 'Parcial de promoción', f: e => e.tipo === 'prom' },
    { k: 'Finales',           f: e => e.tipo === 'final' }
  ];
  const html = grupos.map(g => {
    const lista = EX.filter(g.f);
    if (!lista.length) return '';
    return `<h2>${esc(g.k)}</h2><div class="grid">${lista.map(e => {
      const r = resueltos(e);
      const pct = r.total ? Math.round(100 * r.n / r.total) : 0;
      return `<a class="card" href="#/examenes/${esc(e.id)}">
        <span class="k">${esc(e.fecha)}</span>
        <h4>${esc(e.titulo)}</h4>
        <p>${esc(e.resumen || '')}</p>
        <div class="meta"><span class="pill ${pct === 100 ? 'ok' : (pct > 0 ? 'wip' : '')}">${pct}% resuelto</span>
        <span class="pill">${r.total} ítems</span></div></a>`;
    }).join('')}</div>`;
  }).join('');

  return `<div class="wrap">
    <div class="eyebrow">Exámenes</div>
    <h1>Parciales y finales</h1>
    <p class="lead">Los modelos reales que circularon en 2025 y 2026. Sirven para ver qué se
    pregunta de verdad y con qué nivel de justificación.</p>
    ${html}
  </div>`;
}

function vistaExamen(id) {
  const e = EX.find(x => x.id === id);
  if (!e) return noEncontrado();
  const r = resueltos(e);
  return `<div class="wrap">
    <div class="eyebrow">${esc(e.fecha)} · ${esc(e.carrera || 'LSI / LCC')}</div>
    <h1>${esc(e.titulo)}</h1>
    ${e.resumen ? `<p class="lead">${esc(e.resumen)}</p>` : ''}
    ${e.unidades && e.unidades.length ? `<div class="cneed"><div class="lbl">Unidades que cubre</div>
      <div class="chips">${e.unidades.map(uid => {
        const u = U.find(x => x.id === uid);
        return u ? `<a class="chip" data-tipo="met" data-k="U${esc(u.num)}" href="#/teoria/${esc(u.id)}">${esc(u.titulo)}</a>` : '';
      }).join('')}</div></div>` : ''}
    ${e.nota ? `<div class="note">${refs(e.nota)}</div>` : ''}
    <div class="row"><span class="pill">${r.n} de ${r.total} ítems con resolución</span></div>
    <div class="ejlist">${(e.ejercicios || []).map(x => ejercicio(x, e.id)).join('')}</div>
    ${pager('examenes', e.id)}
  </div>`;
}

function noEncontrado() {
  return `<div class="wrap"><div class="empty-state">
    <h3>No encontré esa página</h3>
    <p>Puede que todavía no esté cargada.</p>
    <p><a class="btn" href="#/">Volver al inicio</a></p>
  </div></div>`;
}

/* navegación anterior / siguiente */
function pager(seccion, id) {
  const lista = seccion === 'teoria' ? U : (seccion === 'practica' ? TP : EX);
  const i = lista.findIndex(x => x.id === id);
  const prev = i > 0 ? lista[i - 1] : null;
  const next = i >= 0 && i < lista.length - 1 ? lista[i + 1] : null;
  return `<nav class="pager">
    <span>${prev ? `<a href="#/${seccion}/${esc(prev.id)}">← ${esc(prev.titulo)}</a>` : ''}</span>
    <span>${next ? `<a href="#/${seccion}/${esc(next.id)}">${esc(next.titulo)} →</a>` : ''}</span>
  </nav>`;
}

/* ---------------------------------------------------------------
   Navegación lateral
   --------------------------------------------------------------- */
function sidebar(ruta) {
  const act = p => (ruta === p ? ' class="on"' : '');
  const g = [];

  g.push(`<div class="group">
    <a href="#/"${act('/')}><span class="t">Inicio y plan</span></a>
  </div>`);

  g.push(`<div class="group"><h3>Teoría</h3>
    ${U.map(u => {
      const n = (u.secciones || []).reduce((a, s) => a + (s.conceptos || []).length, 0);
      return `<a href="#/teoria/${esc(u.id)}"${act('/teoria/' + u.id)}>
        <span class="n">U${esc(u.num)}</span><span class="t">${esc(u.titulo)}</span>
        <span class="badge">${n}</span></a>`;
    }).join('')}
  </div>`);

  g.push(`<div class="group"><h3>Práctica</h3>
    ${TP.map(t => {
      const r = resueltos(t);
      const pct = r.total ? Math.round(100 * r.n / r.total) : 0;
      return `<a href="#/practica/${esc(t.id)}"${act('/practica/' + t.id)}>
        <span class="n">TP${esc(t.num)}</span><span class="t">${esc(t.titulo)}</span>
        <span class="badge ${pct === 100 ? 'full' : 'pend'}">${pct}%</span></a>`;
    }).join('')}
  </div>`);

  g.push(`<div class="group"><h3>Exámenes</h3>
    ${EX.map(e => `<a href="#/examenes/${esc(e.id)}"${act('/examenes/' + e.id)}>
      <span class="n">${esc(e.sigla || '')}</span><span class="t">${esc(e.titulo)}</span></a>`).join('')}
  </div>`);

  $('#nav').innerHTML = g.join('');
}

/* ---------------------------------------------------------------
   Router
   --------------------------------------------------------------- */
function parse() {
  let h = location.hash.replace(/^#/, '') || '/';
  const qi = h.indexOf('?');
  let q = '';
  if (qi >= 0) { q = h.slice(qi + 1); h = h.slice(0, qi); }
  if (!h.startsWith('/')) h = '/' + h;
  return { path: h, params: new URLSearchParams(q) };
}

function render() {
  const { path, params } = parse();
  const seg = path.split('/').filter(Boolean);
  let html;

  if (!seg.length)                      html = vistaInicio();
  else if (seg[0] === 'teoria')         html = seg[1] ? vistaUnidad(seg[1]) : vistaTeoriaIndice();
  else if (seg[0] === 'practica')       html = seg[1] ? vistaTP(seg[1]) : vistaPracticaIndice();
  else if (seg[0] === 'examenes')       html = seg[1] ? vistaExamen(seg[1]) : vistaExamenesIndice();
  else                                  html = noEncontrado();

  const main = $('#contenido');
  main.innerHTML = html;
  katex(main);
  sidebar(path);
  document.body.classList.remove('nav-open');
  $('#scrim').hidden = true;

  // destacar y centrar un concepto pedido por ?c=
  const c = params.get('c');
  if (c) {
    const el = document.getElementById(c);
    if (el) {
      el.classList.add('hl');
      requestAnimationFrame(() => el.scrollIntoView({ block: 'center', behavior: 'smooth' }));
      setTimeout(() => el.classList.remove('hl'), 2600);
    }
  } else {
    window.scrollTo(0, 0);
  }
}

/* ---------------------------------------------------------------
   Popover de concepto (hover / foco sobre chips y refs)
   --------------------------------------------------------------- */
const pop = $('#pop');
let popTimer = null;

function showPop(el) {
  const id = el.getAttribute('data-cpt');
  const hit = CPT.get(id);
  if (!hit) return;
  const t = hit.c.tipo || 'def';
  pop.innerHTML = `<div class="ph"><span class="tag" style="--c:var(--${t});--cs:var(--${t}-soft)">${esc(TIPO[t].k)}</span>
      <h5>${esc(hit.c.titulo)}</h5></div>
    <div class="pb">${String(hit.c.cuerpo).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, i2, tx) => esc(tx || i2))}</div>
    <div class="pf muted">Unidad ${esc(hit.u.num)} · ${esc(hit.s.titulo)}</div>`;
  pop.hidden = false;
  katex(pop);

  const r = el.getBoundingClientRect();
  const pw = pop.offsetWidth, ph = pop.offsetHeight;
  let left = r.left + window.scrollX;
  left = Math.min(left, window.scrollX + document.documentElement.clientWidth - pw - 12);
  left = Math.max(left, window.scrollX + 12);
  let top = r.bottom + window.scrollY + 8;
  if (r.bottom + ph + 20 > window.innerHeight && r.top - ph - 8 > 0) {
    top = r.top + window.scrollY - ph - 8;
  }
  pop.style.left = left + 'px';
  pop.style.top = top + 'px';
}
function hidePop() { pop.hidden = true; }

document.addEventListener('mouseover', e => {
  const el = e.target.closest('[data-cpt]');
  if (el) { clearTimeout(popTimer); popTimer = setTimeout(() => showPop(el), 180); }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('[data-cpt]')) { clearTimeout(popTimer); popTimer = setTimeout(hidePop, 220); }
});
pop.addEventListener('mouseenter', () => clearTimeout(popTimer));
pop.addEventListener('mouseleave', hidePop);
document.addEventListener('focusin', e => {
  const el = e.target.closest('[data-cpt]');
  if (el) showPop(el); else if (!e.target.closest('.pop')) hidePop();
});
window.addEventListener('scroll', hidePop, { passive: true });

/* ---------------------------------------------------------------
   Búsqueda
   --------------------------------------------------------------- */
const IDX = [];
U.forEach(u => (u.secciones || []).forEach(s => (s.conceptos || []).forEach(c => {
  IDX.push({
    t: c.titulo,
    sub: `${TIPO[c.tipo || 'def'].k} · Unidad ${u.num} — ${u.titulo}`,
    href: `#/teoria/${u.id}?c=${encodeURIComponent(c.id)}`,
    hay: norm(c.titulo + ' ' + plano(c.cuerpo) + ' ' + u.titulo + ' ' + s.titulo),
    w: 3
  });
})));
TP.forEach(t => (t.ejercicios || []).forEach(e => {
  const base = plano(e.enunciado);
  IDX.push({
    t: `TP ${t.num} · Ejercicio ${e.num}`,
    sub: `${t.titulo} — ${base.slice(0, 80)}`,
    href: `#/practica/${t.id}?c=${encodeURIComponent(e.id)}`,
    hay: norm(`tp${t.num} ejercicio ${e.num} ${t.titulo} ${base} ` +
      (e.incisos || []).map(i => plano(i.enunciado)).join(' ')),
    w: 2
  });
}));
EX.forEach(x => (x.ejercicios || []).forEach(e => {
  IDX.push({
    t: `${x.titulo} · Ejercicio ${e.num}`,
    sub: `${x.fecha} — ${plano(e.enunciado).slice(0, 80)}`,
    href: `#/examenes/${x.id}?c=${encodeURIComponent(e.id)}`,
    hay: norm(`${x.titulo} ${x.fecha} ${plano(e.enunciado)} ` +
      (e.incisos || []).map(i => plano(i.enunciado)).join(' ')),
    w: 1
  });
}));

const inp = $('#search'), out = $('#results');
let sel = -1;

function buscar() {
  const q = norm(inp.value.trim());
  if (q.length < 2) { out.hidden = true; return; }
  const ts = q.split(/\s+/);
  const hits = IDX
    .map(it => {
      if (!ts.every(t => it.hay.includes(t))) return null;
      let sc = it.w;
      if (norm(it.t).includes(q)) sc += 6;
      if (it.hay.indexOf(ts[0]) < 60) sc += 2;
      return { it, sc };
    })
    .filter(Boolean)
    .sort((a, b) => b.sc - a.sc)
    .slice(0, 24);

  out.innerHTML = hits.length
    ? hits.map((h, i) => `<a class="r" role="option" data-i="${i}" href="${h.it.href}">
        <b>${esc(h.it.t)}</b><span>${esc(h.it.sub)}</span></a>`).join('')
    : `<div class="empty">Sin resultados para “${esc(inp.value.trim())}”.</div>`;
  out.hidden = false;
  sel = -1;
}

inp.addEventListener('input', buscar);
inp.addEventListener('focus', () => { if (inp.value.trim().length >= 2) buscar(); });
inp.addEventListener('keydown', e => {
  const rs = $$('.r', out);
  if (e.key === 'Escape') { out.hidden = true; inp.blur(); return; }
  if (!rs.length) return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + rs.length) % rs.length;
    rs.forEach(r => r.classList.remove('on'));
    rs[sel].classList.add('on');
    rs[sel].scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && sel >= 0) {
    e.preventDefault();
    location.hash = rs[sel].getAttribute('href').slice(1);
    out.hidden = true; inp.blur();
  }
});
document.addEventListener('click', e => {
  if (!e.target.closest('.search')) out.hidden = true;
  if (e.target.closest('.results .r')) { out.hidden = true; inp.blur(); }
});
document.addEventListener('keydown', e => {
  const ae = document.activeElement;
  if (e.key === '/' && !(ae && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName))) {
    e.preventDefault(); inp.focus(); inp.select();
  }
});

/* ---------------------------------------------------------------
   Tema, nav móvil, checkboxes
   --------------------------------------------------------------- */
const TKEY = 'eal.tema';
try {
  const t = localStorage.getItem(TKEY);
  if (t) document.documentElement.setAttribute('data-theme', t);
} catch (e) {}

$('#theme').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const dark = cur ? cur === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const next = dark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem(TKEY, next); } catch (e) {}
});

$('#navtoggle').addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  $('#navtoggle').setAttribute('aria-expanded', String(open));
  $('#scrim').hidden = !open;
});
$('#scrim').addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  $('#scrim').hidden = true;
});

document.addEventListener('click', e => {
  const b = e.target.closest('[data-done]');
  if (!b) return;
  e.preventDefault();
  const id = b.getAttribute('data-done');
  toggleDone(id);
  const is = done.has(id);
  b.classList.toggle('is', is);
  b.setAttribute('aria-pressed', String(is));
  b.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>${is ? 'Hecho' : 'Marcar'}`;
  const ej = b.closest('.ej');
  if (ej) {
    const ids = $$('[data-done]', ej).map(x => x.getAttribute('data-done'));
    ej.classList.toggle('is-done', ids.every(x => done.has(x)));
  }
});

/* el salto de accesibilidad no debe tocar la ruta */
$('.skip').addEventListener('click', e => {
  e.preventDefault();
  const m = $('#contenido');
  m.focus();
  m.scrollIntoView();
});

/* ---------------------------------------------------------------
   Arranque
   --------------------------------------------------------------- */
window.addEventListener('hashchange', render);
render();

})();
