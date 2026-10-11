# Elementos de Álgebra Lineal — guía de estudio

Sitio estático (sin build, sin dependencias instaladas) que ordena todo el material
de la cursada: la teoría de las 7 unidades, los 7 trabajos prácticos y los parciales
y finales de ejemplo. Cada ítem de práctica enlaza los conceptos de teoría que hacen
falta para resolverlo.

## Cómo usarlo

Abrir `index.html` en el navegador. Nada más: no hay que instalar ni compilar.

> KaTeX (el renderizador de fórmulas) se carga desde CDN, así que **la primera vez
> hace falta internet**. Después queda en caché del navegador. Sin conexión el sitio
> funciona igual, pero las fórmulas se ven como texto LaTeX crudo.

Atajos: `/` enfoca el buscador; el botón de la derecha alterna tema claro/oscuro.
El botón «Marcar» de cada ítem guarda tu avance en `localStorage` de este navegador.

## Estructura

```
index.html                     carga todo en orden y define el layout
assets/css/styles.css          tema, tipografía, componentes
assets/js/core.js              registro de contenido (se carga ANTES del contenido)
assets/js/app.js               router por hash, render, búsqueda, popovers, progreso
contenido/teoria/u1..u7.js     las 7 unidades de teoría
contenido/practica/tp1..tp7.js los 7 trabajos prácticos
contenido/examenes/            parciales.js, finales.js
```

El contenido son archivos JS planos que llaman a `EAL.unidad()`, `EAL.tp()` o
`EAL.examen()`. Se usan scripts clásicos (no módulos ES) **a propósito**: así el sitio
funciona abriendo el archivo con doble clic, sin servidor local.

## Cómo agregar contenido

Las cadenas de texto se escriben con `` tex`...` `` (es `String.raw`), de modo que las
barras invertidas de LaTeX quedan intactas y no hay que duplicarlas. La matemática va
entre `$...$` (en línea) o `$$...$$` (en bloque).

**Un concepto de teoría** va dentro de una sección de su unidad:

```js
{ id: 'u1-producto-escalar', tipo: 'def', titulo: 'Producto escalar',
  cuerpo: tex`<p>... $\vec u \cdot \vec v$ ...</p>` }
```

`tipo` puede ser `def`, `teo`, `prop`, `obs`, `form` o `met`, y define el color y la
etiqueta de la tarjeta.

**Un ítem de práctica** se enlaza con la teoría de dos maneras:

- `conceptos: ['u1-producto-escalar', ...]` → aparecen como chips bajo el enunciado,
  en el bloque «Conceptos de teoría necesarios».
- `[[u1-producto-escalar]]` dentro de cualquier texto → referencia en línea. Con
  `[[id|otro texto]]` se cambia la etiqueta visible.

Ambas formas muestran un popover con el enunciado del concepto al pasar el mouse y
llevan a la unidad correspondiente al hacer clic.

Las claves `pista`, `resolucion` y `resultado` de un ítem son opcionales y se muestran
plegadas, en ese orden. Un ítem **sin** `resolucion` se cuenta como pendiente en las
barras de progreso.

## Verificación

Los dos scripts que se usaron para validar el sitio comprueban que no haya IDs
duplicados, que todas las referencias a conceptos existan y que todas las rutas
rendericen. Para repetirlo hace falta `node` (ya instalado) y están descriptos en el
historial del proyecto; el chequeo rápido equivalente es:

```sh
for f in assets/js/*.js contenido/*/*.js; do node --check "$f" || echo "FALLA $f"; done
```

## Procedencia del material

Todo sale de los PDF de la cátedra, que **no forman parte de este repositorio**: viven
fuera de él, en `../7_EAL_2026` (y, donde ayudaba, `../7_EAL_2024`) de la máquina donde
se armó la guía. Acá está la guía, no la fuente:

- **Teoría:** diapositivas 2026 de la cátedra (Mg. Carolina G. Pozzebon) y apuntes de
  teoría por unidad (Mg. Marcela Albornoz). Bibliografía que cita la cátedra:
  Larotonda, *Álgebra Lineal y Geometría*; Grossman, *Álgebra Lineal*.
  La numeración de definiciones y teoremas es la de las diapositivas.
- **Práctica:** los siete trabajos prácticos de `7_EAL_2026` (idénticos a los de 2024).
- **Exámenes:** primer parcial 24/9/25 y su recuperatorio (15/10/25), recuperatorio del
  segundo parcial (28/11/25), parcial de promoción (2/12/25) y finales del 9/12/25,
  3/8/26 y 27/8/26.

Varios PDF de exámenes son escaneos o perdieron símbolos al extraer el texto. Esos
enunciados llevan un aviso en amarillo indicando **qué hay que verificar contra el PDF
original** antes de resolver. No se inventó ningún coeficiente.

## Nota sobre el uso

La cátedra pide explícitamente que los prácticos se resuelvan a mano alzada, sin
aplicaciones de matemática ni IA, y que otras herramientas se usen sólo para corregir
o autocorregir. Por eso las resoluciones están plegadas detrás de
«Conceptos → Pista → Resolución»: el orden de uso previsto es intentar el ítem
primero y abrir la resolución para comparar.
