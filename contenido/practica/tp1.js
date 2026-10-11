/* TP 1 — Vectores en R² y R³
   Enunciado: "Vectores en R2yR3.pdf" (7_EAL_2026/1_vectores) */

EAL.tp({
  id: 'tp1', num: 1, unidad: 'u1',
  titulo: 'Vectores en R² y R³',
  resumen: 'Representación, componentes, operaciones, módulo, los tres productos y sus aplicaciones geométricas.',
  nota: tex`<b class="lbl">Antes de abrir las resoluciones</b> Intentá cada ítem a mano. Las resoluciones están para <strong>autocorregirte</strong>: comparar el camino, no copiarlo. En varios ítems hay más de una respuesta válida (todo lo que involucra elegir un sentido o un vector no único) y eso está señalado donde ocurre.`,

  ejercicios: [

  /* ========================= 1 ========================= */
  { id: 'tp1-1', num: '1',
    enunciado: tex`<p><strong>Representar gráficamente:</strong></p>`,
    incisos: [
      { id: 'tp1-1a', rot: 'a', enunciado: tex`$v_1 = (6, -2)$`,
        conceptos: ['u1-vector', 'u1-segmento-dirigido', 'u1-componentes'],
        pista: tex`En $\mathbb{R}^2$ el vector se dibuja como una flecha desde el origen hasta el punto de coordenadas iguales a sus componentes.`,
        resolucion: tex`<p>Flecha del origen $(0,0)$ al punto $(6,-2)$: se avanzan 6 unidades sobre el eje $X$ y se baja 2 sobre el eje $Y$. Queda en el <strong>cuarto cuadrante</strong>.</p>
        <p>Su módulo, por [[u1-modulo]], es $\|v_1\| = \sqrt{36+4} = \sqrt{40} = 2\sqrt{10} \approx 6{,}32$.</p>`,
        resultado: tex`Flecha de $(0,0)$ a $(6,-2)$, en el cuarto cuadrante.` },

      { id: 'tp1-1b', rot: 'b', enunciado: tex`$v_2 = (-1, 3)$`,
        conceptos: ['u1-componentes'],
        resolucion: tex`<p>Flecha del origen al punto $(-1,3)$: una unidad a la izquierda y tres hacia arriba. <strong>Segundo cuadrante</strong>. $\|v_2\| = \sqrt{1+9} = \sqrt{10}$.</p>`,
        resultado: tex`Flecha de $(0,0)$ a $(-1,3)$, en el segundo cuadrante.` },

      { id: 'tp1-1c', rot: 'c', enunciado: tex`$v_3 = (2, 0)$`,
        conceptos: ['u1-componentes'],
        resolucion: tex`<p>Flecha del origen a $(2,0)$: está <strong>sobre el semieje positivo $X$</strong>. Es $2\,\breve i$, es decir el doble del primer versor canónico ([[u1-canonicos]]).</p>`,
        resultado: tex`Segmento sobre el semieje positivo $X$, de longitud 2.` },

      { id: 'tp1-1d', rot: 'd', enunciado: tex`$v_4 = (2, -3, 4)$`,
        conceptos: ['u1-componentes'],
        pista: tex`En $\mathbb{R}^3$ el vector es la diagonal del paralelepípedo de aristas iguales a sus componentes. Conviene dibujar primero la proyección sobre el plano $XY$ y después levantar la altura.`,
        resolucion: tex`<p>Se marca $(2,-3,0)$ en el plano $XY$ (2 hacia adelante en $X$, 3 en sentido negativo de $Y$) y desde ahí se sube $4$ en la dirección de $Z$. El vector es la <strong>diagonal del paralelepípedo</strong> de aristas 2, $-3$ y 4.</p>
        <p>$\|v_4\| = \sqrt{4+9+16} = \sqrt{29} \approx 5{,}39$.</p>`,
        resultado: tex`Diagonal del paralelepípedo de aristas $2$, $-3$, $4$; $\|v_4\| = \sqrt{29}$.` },

      { id: 'tp1-1e', rot: 'e', enunciado: tex`$v_5 = (2, 1, 2)$`,
        conceptos: ['u1-componentes'],
        resolucion: tex`<p>Proyección $(2,1,0)$ en el plano $XY$ y luego $2$ hacia arriba. $\|v_5\| = \sqrt{4+1+4} = \sqrt{9} = 3$ — da exacto, es uno de los pocos casos «redondos» del práctico.</p>`,
        resultado: tex`Diagonal del paralelepípedo de aristas $2,1,2$; $\|v_5\| = 3$.` },

      { id: 'tp1-1f', rot: 'f', enunciado: tex`$v_6 = (4, -1, -2)$`,
        conceptos: ['u1-componentes'],
        resolucion: tex`<p>Proyección $(4,-1,0)$ y luego $2$ unidades <strong>hacia abajo</strong> ($z$ negativo). $\|v_6\| = \sqrt{16+1+4} = \sqrt{21}$.</p>`,
        resultado: tex`Diagonal del paralelepípedo de aristas $4,-1,-2$; $\|v_6\| = \sqrt{21}$.` }
    ]},

  /* ========================= 2 ========================= */
  { id: 'tp1-2', num: '2',
    enunciado: tex`<p><strong>Determinar las componentes del vector que tiene a $P$ como punto inicial y a $Q$ como punto final.</strong></p>`,
    incisos: [
      { id: 'tp1-2a', rot: 'a', enunciado: tex`$P = (3,5)$, $Q = (2,8)$`,
        conceptos: ['u1-componentes-pq'],
        pista: tex`Final menos inicial.`,
        resolucion: tex`<p>$\overrightarrow{PQ} = Q - P = (2 - 3,\; 8 - 5)$.</p>`,
        resultado: tex`$\overrightarrow{PQ} = (-1, 3)$` },

      { id: 'tp1-2b', rot: 'b', enunciado: tex`$P = (-3,4)$, $Q = (1,5)$`,
        conceptos: ['u1-componentes-pq'],
        resolucion: tex`<p>$\overrightarrow{PQ} = (1 - (-3),\; 5 - 4) = (1+3,\; 1)$.</p>`,
        resultado: tex`$\overrightarrow{PQ} = (4, 1)$` },

      { id: 'tp1-2c', rot: 'c', enunciado: tex`$P = (6,5,8)$, $Q = (8,-7,-3)$`,
        conceptos: ['u1-componentes-pq'],
        resolucion: tex`<p>$\overrightarrow{PQ} = (8-6,\; -7-5,\; -3-8)$.</p>`,
        resultado: tex`$\overrightarrow{PQ} = (2, -12, -11)$` },

      { id: 'tp1-2d', rot: 'd', enunciado: tex`$P = (-3,4,5)$, $Q = (1,5,-1)$`,
        conceptos: ['u1-componentes-pq'],
        resolucion: tex`<p>$\overrightarrow{PQ} = (1-(-3),\; 5-4,\; -1-5) = (4,\; 1,\; -6)$.</p>
        <div class="note tip"><b class="lbl">Control</b> Si al restar se obtuviera $(-4,-1,6)$, lo que se calculó fue $\overrightarrow{QP}$: el opuesto. Conviene verificar mentalmente el sentido: de $P$ a $Q$ la primera coordenada crece (de $-3$ a $1$), así que la primera componente tiene que ser <strong>positiva</strong>.</div>`,
        resultado: tex`$\overrightarrow{PQ} = (4, 1, -6)$` }
    ]},

  /* ========================= 3 ========================= */
  { id: 'tp1-3', num: '3',
    enunciado: tex`<p><strong>Determinar analítica y gráficamente un segmento dirigido que tenga:</strong></p>`,
    incisos: [
      { id: 'tp1-3a', rot: 'a', enunciado: tex`Su punto inicial en $(2,-1)$ y sea equivalente al vector $v = (3,4)$.`,
        conceptos: ['u1-equivalentes', 'u1-componentes-pq'],
        pista: tex`Equivalente significa mismas componentes. Si $P$ es el inicial y $Q$ el final, se pide $Q - P = v$: hay que despejar $Q$.`,
        resolucion: tex`<p>Por [[u1-equivalentes]], dos vectores son equivalentes cuando tienen las mismas componentes. Se busca $Q$ tal que $\overrightarrow{PQ} = v$ con $P = (2,-1)$:</p>
        <div class="fx center">$$Q - P = v \;\Longrightarrow\; Q = P + v = (2,-1) + (3,4) = (5,3)$$</div>
        <p><strong>Gráficamente:</strong> se dibuja la flecha de $(2,-1)$ a $(5,3)$. Es paralela al vector $v$ dibujado desde el origen, de la misma longitud $\|v\| = 5$ y el mismo sentido: es «el mismo vector libre» apoyado en otro punto.</p>`,
        resultado: tex`$\overrightarrow{PQ}$ con $P = (2,-1)$ y $Q = (5,3)$.` },

      { id: 'tp1-3b', rot: 'b', enunciado: tex`Su punto inicial en $(2,-1,4)$ y sea equivalente al vector $v = (7,6,-3)$.`,
        conceptos: ['u1-equivalentes', 'u1-componentes-pq'],
        resolucion: tex`<p>$Q = P + v = (2,-1,4) + (7,6,-3) = (9, 5, 1)$.</p>
        <p>Verificación: $Q - P = (9-2,\; 5-(-1),\; 1-4) = (7,6,-3) = v$. ✓</p>`,
        resultado: tex`$\overrightarrow{PQ}$ con $P = (2,-1,4)$ y $Q = (9,5,1)$.` }
    ]},

  /* ========================= 4 ========================= */
  { id: 'tp1-4', num: '4',
    enunciado: tex`<p><strong>Hallar un vector:</strong></p>`,
    incisos: [
      { id: 'tp1-4a', rot: 'a', enunciado: tex`Equivalente a $w = (1,2)$ y con punto final $(2,-2)$.`,
        conceptos: ['u1-equivalentes', 'u1-componentes-pq'],
        pista: tex`Es el ejercicio 3 al revés: ahora el dato es el punto <em>final</em> y la incógnita es el inicial.`,
        resolucion: tex`<p>Si $Q = (2,-2)$ es el final y $\overrightarrow{PQ} = w$, entonces</p>
        <div class="fx center">$$Q - P = w \;\Longrightarrow\; P = Q - w = (2,-2) - (1,2) = (1, -4)$$</div>
        <p>Verificación: $Q - P = (2-1,\; -2-(-4)) = (1,2) = w$. ✓</p>
        <div class="note warn"><b class="lbl">Lo que se confunde</b> Acá se <strong>resta</strong> y en el ejercicio 3 se <strong>suma</strong>. El criterio: el punto final es el que está «río abajo» de la flecha, así que para ir del final al inicial hay que retroceder, o sea restar el vector.</div>`,
        resultado: tex`$P = (1,-4)$; el vector es $\overrightarrow{PQ}$ de $(1,-4)$ a $(2,-2)$.` },

      { id: 'tp1-4b', rot: 'b', enunciado: tex`Equivalente a $w = (2,4,-3)$ y con punto final $(-2,-1,6)$.`,
        conceptos: ['u1-equivalentes', 'u1-componentes-pq'],
        resolucion: tex`<p>$P = Q - w = (-2,-1,6) - (2,4,-3) = (-2-2,\; -1-4,\; 6+3) = (-4, -5, 9)$.</p>`,
        resultado: tex`$P = (-4,-5,9)$; el vector es $\overrightarrow{PQ}$ de $(-4,-5,9)$ a $(-2,-1,6)$.` }
    ]},

  /* ========================= 5 ========================= */
  { id: 'tp1-5', num: '5',
    enunciado: tex`<p>Dados los vectores $u = (1,0,-1)$, $v = (1,2,3)$, $w = (-1,0,0)$, <strong>calcular:</strong></p>`,
    incisos: [
      { id: 'tp1-5a', rot: 'a', enunciado: tex`$-2 \cdot \|w + 2u\|$`,
        conceptos: ['u1-suma', 'u1-escalar-por-vector', 'u1-modulo'],
        pista: tex`Primero el vector de adentro del módulo, después el módulo, y al final el producto por $-2$. El resultado es un <strong>número</strong>, no un vector.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Calcular $2u$.</span> $2u = 2(1,0,-1) = (2,0,-2)$.</li>
          <li><span class="ptit">Sumar.</span> $w + 2u = (-1,0,0) + (2,0,-2) = (1, 0, -2)$.</li>
          <li><span class="ptit">Módulo.</span> $\|w+2u\| = \sqrt{1^2 + 0^2 + (-2)^2} = \sqrt{5}$.</li>
          <li><span class="ptit">Multiplicar por el escalar.</span> $-2\sqrt{5}$.</li>
        </ol>
        <div class="note warn"><b class="lbl">Por qué el resultado puede ser negativo</b> El módulo es siempre $\ge 0$, pero acá el $-2$ está <strong>afuera</strong> del módulo multiplicando a un número. Es distinto de $\|-2(w+2u)\|$, que valdría $2\sqrt5$. La posición del escalar respecto de las barras cambia todo.</div>`,
        resultado: tex`$-2\|w+2u\| = -2\sqrt{5} \approx -4{,}47$` },

      { id: 'tp1-5b', rot: 'b', enunciado: tex`$\|-2u\| + 2\|v\|$`,
        conceptos: ['u1-modulo', 'u1-escalar-por-vector'],
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">$\|-2u\|$.</span> Por la propiedad $\|\alpha \vec v\| = |\alpha|\|\vec v\|$ de [[u1-modulo]]: $\|-2u\| = 2\|u\| = 2\sqrt{1+0+1} = 2\sqrt{2}$.</li>
          <li><span class="ptit">$\|v\|$.</span> $\|v\| = \sqrt{1+4+9} = \sqrt{14}$, luego $2\|v\| = 2\sqrt{14}$.</li>
          <li><span class="ptit">Sumar.</span> $2\sqrt{2} + 2\sqrt{14}$.</li>
        </ol>
        <p>No se puede simplificar más: $\sqrt2$ y $\sqrt{14}$ no son semejantes. Numéricamente $\approx 2{,}83 + 7{,}48 = 10{,}31$.</p>`,
        resultado: tex`$2\sqrt{2} + 2\sqrt{14} = 2(\sqrt2 + \sqrt{14}) \approx 10{,}31$` },

      { id: 'tp1-5c', rot: 'c', enunciado: tex`$\dfrac{u}{\|v\|}$`,
        conceptos: ['u1-modulo', 'u1-escalar-por-vector'],
        pista: tex`Acá el resultado sí es un vector: se divide el vector $u$ por el número $\|v\|$. Atención: se normaliza con el módulo de <em>otro</em> vector, así que el resultado <strong>no</strong> es un versor.`,
        resolucion: tex`<p>$\|v\| = \sqrt{14}$, entonces</p>
        <div class="fx center">$$\frac{u}{\|v\|} = \frac{1}{\sqrt{14}}(1,0,-1) = \left( \frac{1}{\sqrt{14}},\; 0,\; \frac{-1}{\sqrt{14}} \right) = \left( \frac{\sqrt{14}}{14},\; 0,\; -\frac{\sqrt{14}}{14} \right)$$</div>
        <div class="note"><b class="lbl">No es un versor</b> Su módulo es $\dfrac{\|u\|}{\|v\|} = \dfrac{\sqrt2}{\sqrt{14}} = \dfrac{1}{\sqrt7} \neq 1$. Para que fuera versor habría que dividir $u$ por $\|u\|$, que es [[u1-versor-asociado|la normalización]].</div>`,
        resultado: tex`$\left( \frac{\sqrt{14}}{14},\, 0,\, -\frac{\sqrt{14}}{14} \right)$, de módulo $\frac{1}{\sqrt 7}$.` }
    ]},

  /* ========================= 6 ========================= */
  { id: 'tp1-6', num: '6',
    enunciado: tex`<p><strong>Hallar un vector que:</strong></p>`,
    incisos: [
      { id: 'tp1-6a', rot: 'a', enunciado: tex`Tenga la misma dirección que $v = (-1,3)$ y el doble de su longitud.`,
        conceptos: ['u1-escalar-por-vector', 'u1-teorema-1'],
        pista: tex`Multiplicar por un escalar conserva la dirección y multiplica el módulo por el valor absoluto del escalar.`,
        resolucion: tex`<p>Por [[u1-escalar-por-vector]], $\alpha v$ tiene la misma dirección que $v$ y módulo $|\alpha|\,\|v\|$. Se pide el doble de longitud, así que $|\alpha| = 2$. El enunciado dice «misma dirección» sin aclarar el sentido, así que valen ambos signos, pero lo natural es conservarlo:</p>
        <div class="fx center">$$a = 2v = 2(-1,3) = (-2, 6)$$</div>
        <p>Verificación: $\|v\| = \sqrt{10}$ y $\|a\| = \sqrt{4+36} = \sqrt{40} = 2\sqrt{10} = 2\|v\|$. ✓</p>
        <div class="note"><b class="lbl">También sirve $-2v = (2,-6)$</b> Tiene la misma dirección (misma recta de acción) y el doble de módulo, pero sentido opuesto. Si el enunciado hubiera dicho «misma dirección y sentido», sólo valdría $2v$.</div>`,
        resultado: tex`$a = (-2,6)$ (también $(2,-6)$, con sentido opuesto).` },

      { id: 'tp1-6b', rot: 'b', enunciado: tex`Tenga sentido opuesto a $u = (2,3)$ y la mitad de su longitud.`,
        conceptos: ['u1-escalar-por-vector'],
        resolucion: tex`<p>Sentido opuesto ⇒ escalar <strong>negativo</strong>; mitad de longitud ⇒ $|\alpha| = \tfrac12$. Luego $\alpha = -\tfrac12$:</p>
        <div class="fx center">$$a = -\tfrac{1}{2}\,u = -\tfrac{1}{2}(2,3) = \left(-1, -\tfrac{3}{2}\right)$$</div>
        <p>Acá la respuesta es <strong>única</strong>, porque el enunciado fija el sentido.</p>`,
        resultado: tex`$a = \left(-1, -\tfrac{3}{2}\right)$` },

      { id: 'tp1-6c', rot: 'c', enunciado: tex`Tenga la misma dirección que $v = (-1,3,2)$ y el doble de su longitud.`,
        conceptos: ['u1-escalar-por-vector'],
        resolucion: tex`<p>$a = 2v = (-2, 6, 4)$. Verificación: $\|v\| = \sqrt{1+9+4} = \sqrt{14}$ y $\|a\| = \sqrt{4+36+16} = \sqrt{56} = 2\sqrt{14}$. ✓</p>`,
        resultado: tex`$a = (-2,6,4)$ (también $(2,-6,-4)$).` },

      { id: 'tp1-6d', rot: 'd', enunciado: tex`Tenga sentido opuesto a $u = (2,3,4)$ y la mitad de su longitud.`,
        conceptos: ['u1-escalar-por-vector'],
        resolucion: tex`<p>$a = -\tfrac12 u = \left(-1, -\tfrac32, -2\right)$.</p>`,
        resultado: tex`$a = \left(-1, -\tfrac{3}{2}, -2\right)$` },

      { id: 'tp1-6e', rot: 'e', enunciado: tex`Sea un versor con la dirección y el sentido de $v - u$, siendo $v$ y $u$ los vectores indicados en los incisos anteriores.`,
        conceptos: ['u1-suma', 'u1-versor-asociado', 'u1-modulo'],
        pista: tex`Primero el vector $v-u$, después dividirlo por su propio módulo. Hay dos pares $(v,u)$ en los incisos anteriores: el de $\mathbb{R}^2$ (a y b) y el de $\mathbb{R}^3$ (c y d), así que corresponden dos respuestas.`,
        resolucion: tex`<p><strong>Caso $\mathbb{R}^2$</strong> (incisos a y b): $v = (-1,3)$, $u = (2,3)$.</p>
        <div class="fx center">$$v - u = (-1-2,\; 3-3) = (-3, 0), \qquad \|v-u\| = \sqrt{9+0} = 3$$</div>
        <div class="fx center">$$\breve{a} = \frac{v-u}{\|v-u\|} = \frac{1}{3}(-3,0) = (-1, 0)$$</div>
        <p>Da exactamente $-\breve i$: el versor canónico con sentido negativo. Tiene sentido, porque $v-u$ apuntaba sobre el eje $X$ hacia la izquierda.</p>
        <hr>
        <p><strong>Caso $\mathbb{R}^3$</strong> (incisos c y d): $v = (-1,3,2)$, $u = (2,3,4)$.</p>
        <div class="fx center">$$v - u = (-3, 0, -2), \qquad \|v-u\| = \sqrt{9+0+4} = \sqrt{13}$$</div>
        <div class="fx center">$$\breve{a} = \frac{1}{\sqrt{13}}(-3,0,-2) = \left( -\frac{3\sqrt{13}}{13},\; 0,\; -\frac{2\sqrt{13}}{13} \right)$$</div>
        <p>Verificación: $\left(\tfrac{9}{13}\right) + 0 + \left(\tfrac{4}{13}\right) = 1$, luego el módulo es 1. ✓</p>
        <div class="note warn"><b class="lbl">El sentido no se elige</b> A diferencia de los incisos anteriores, acá el signo queda <strong>determinado</strong>: el enunciado pide «la dirección <em>y el sentido</em>» de $v-u$, así que el escalar es $+\tfrac{1}{\|v-u\|}$ y no su opuesto.</div>`,
        resultado: tex`En $\mathbb{R}^2$: $\breve a = (-1,0)$.<br>En $\mathbb{R}^3$: $\breve a = \frac{1}{\sqrt{13}}(-3,0,-2) = \left(-\frac{3\sqrt{13}}{13},\, 0,\, -\frac{2\sqrt{13}}{13}\right)$.` }
    ]},

  /* ========================= 7 ========================= */
  { id: 'tp1-7', num: '7',
    enunciado: tex`<p>Dados $P_1 = (2,3,-1)$ y $P_2 = (4,-2,1)$:</p>`,
    incisos: [
      { id: 'tp1-7a', rot: 'a', enunciado: tex`Calcular y graficar el vector $\overrightarrow{P_1P_2}$.`,
        conceptos: ['u1-componentes-pq'],
        resolucion: tex`<p>$\overrightarrow{P_1P_2} = P_2 - P_1 = (4-2,\; -2-3,\; 1-(-1)) = (2, -5, 2)$.</p>
        <p><strong>Gráficamente:</strong> se marcan los dos puntos en el sistema de tres ejes y se traza la flecha de $P_1$ a $P_2$. Como vector libre, es equivalente a la flecha que va del origen al punto $(2,-5,2)$.</p>`,
        resultado: tex`$\overrightarrow{P_1P_2} = (2,-5,2)$` },

      { id: 'tp1-7b', rot: 'b', enunciado: tex`Hallar $\|\overrightarrow{P_1P_2}\|$.`,
        conceptos: ['u1-modulo'],
        resolucion: tex`<div class="fx center">$$\left\|\overrightarrow{P_1P_2}\right\| = \sqrt{2^2 + (-5)^2 + 2^2} = \sqrt{4 + 25 + 4} = \sqrt{33}$$</div>
        <p>$\sqrt{33} \approx 5{,}745$.</p>`,
        resultado: tex`$\left\|\overrightarrow{P_1P_2}\right\| = \sqrt{33} \approx 5{,}74$` },

      { id: 'tp1-7c', rot: 'c', enunciado: tex`¿Qué relación existe entre la distancia de $P_1$ a $P_2$ y el módulo del vector $\overrightarrow{P_1P_2}$?`,
        conceptos: ['u1-distancia-puntos', 'u1-modulo'],
        pista: tex`No es una relación «parecida»: es una igualdad, y conviene decir por qué.`,
        resolucion: tex`<p><strong>Son iguales.</strong> Por definición de [[u1-distancia-puntos]],</p>
        <div class="fx center">$$d(P_1, P_2) = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$</div>
        <p>y las diferencias que aparecen bajo la raíz <strong>son exactamente las componentes</strong> de $\overrightarrow{P_1P_2} = P_2 - P_1$ ([[u1-componentes-pq]]). Por lo tanto la expresión coincide, término por término, con la fórmula del [[u1-modulo|módulo]]:</p>
        <div class="fx center">$$d(P_1, P_2) = \left\| \overrightarrow{P_1 P_2} \right\| = \sqrt{33}$$</div>
        <p>La lectura geométrica: el módulo de un vector <strong>es</strong> la longitud del segmento que lo representa, y la distancia entre dos puntos es la longitud del segmento que los une. Es el mismo número descripto de dos maneras.</p>
        <div class="note"><b class="lbl">Dato</b> Como consecuencia, $d(P_1,P_2) = d(P_2,P_1)$: el vector cambia de sentido pero no de módulo, porque $\|-\vec v\| = |-1|\,\|\vec v\| = \|\vec v\|$.</div>`,
        resultado: tex`$d(P_1,P_2) = \left\|\overrightarrow{P_1P_2}\right\| = \sqrt{33}$: la distancia entre dos puntos es el módulo del vector que los une.` }
    ]},

  /* ========================= 8 ========================= */
  { id: 'tp1-8', num: '8',
    enunciado: tex`<p><strong>Calcular $v \cdot u$ y determinar el ángulo que forman.</strong></p>`,
    incisos: [
      { id: 'tp1-8a', rot: 'a', enunciado: tex`$v = (2,3)$ y $u = (1,5)$`,
        conceptos: ['u1-producto-escalar', 'u1-teorema-2', 'u1-modulo'],
        pista: tex`Producto escalar por componentes, y después el [[u1-teorema-2]] para despejar el coseno. Mirá el signo del producto antes de calcular: ya te dice si el ángulo es agudo u obtuso.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Producto escalar.</span> $v \cdot u = 2 \cdot 1 + 3 \cdot 5 = 2 + 15 = 17$. Es <strong>positivo</strong>, así que el ángulo es agudo.</li>
          <li><span class="ptit">Módulos.</span> $\|v\| = \sqrt{4+9} = \sqrt{13}$, $\;\|u\| = \sqrt{1+25} = \sqrt{26}$.</li>
          <li><span class="ptit">Coseno.</span> Por [[u1-teorema-2]]:
            $$\cos\theta = \frac{v \cdot u}{\|v\|\,\|u\|} = \frac{17}{\sqrt{13}\,\sqrt{26}} = \frac{17}{\sqrt{338}}$$
            Como $338 = 169 \cdot 2$, se simplifica: $\sqrt{338} = 13\sqrt2$, de donde
            $$\cos\theta = \frac{17}{13\sqrt{2}} = \frac{17\sqrt{2}}{26} \approx 0{,}9247$$</li>
          <li><span class="ptit">Ángulo.</span> $\theta = \arccos(0{,}9247) \approx 22{,}38° \approx 22°23'$.</li>
        </ol>`,
        resultado: tex`$v \cdot u = 17$; $\;\cos\theta = \frac{17\sqrt2}{26}$, $\;\theta \approx 22{,}4°$ (agudo).` },

      { id: 'tp1-8b', rot: 'b', enunciado: tex`$v = (4,1,6)$ y $u = (-3,0,2)$`,
        conceptos: ['u1-producto-escalar', 'u1-teorema-3'],
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Producto escalar.</span> $v \cdot u = 4(-3) + 1(0) + 6(2) = -12 + 0 + 12 = 0$.</li>
          <li><span class="ptit">Conclusión inmediata.</span> Por el [[u1-teorema-3]], producto escalar nulo con ambos vectores no nulos significa que son <strong>ortogonales</strong>.</li>
        </ol>
        <div class="fx center">$$\theta = 90° = \frac{\pi}{2}$$</div>
        <p>No hace falta calcular los módulos: $\cos\theta = \dfrac{0}{\|v\|\|u\|} = 0$ sea cual sea el denominador (que es no nulo porque ninguno de los dos vectores es $\vec 0$).</p>`,
        resultado: tex`$v \cdot u = 0$; son <strong>ortogonales</strong>, $\theta = 90°$.` }
    ]},

  /* ========================= 9 ========================= */
  { id: 'tp1-9', num: '9',
    enunciado: tex`<p>Dados los vectores $u = (3,-1,2)$, $v = (2,-5,1)$, hallar, <strong>si es posible</strong>, un vector $a$ tal que:</p>
    <p class="muted"><small>El «si es posible» no es decorativo: dos de los cuatro incisos no tienen solución, y hay que explicar por qué.</small></p>`,
    incisos: [
      { id: 'tp1-9a', rot: 'a', enunciado: tex`Sea paralelo a $u$ y de norma 4.`,
        conceptos: ['u1-versor-asociado', 'u1-teorema-1'],
        pista: tex`Normalizar y después escalar a la norma pedida. Van a salir dos respuestas.`,
        resolucion: tex`<p>Por el [[u1-teorema-1]], paralelo a $u$ significa $a = \alpha u$. Se necesita $\|a\| = |\alpha|\,\|u\| = 4$.</p>
        <ol class="pasos">
          <li><span class="ptit">Módulo de $u$.</span> $\|u\| = \sqrt{9+1+4} = \sqrt{14}$.</li>
          <li><span class="ptit">Despejar el escalar.</span> $|\alpha|\sqrt{14} = 4 \Rightarrow |\alpha| = \dfrac{4}{\sqrt{14}}$, luego $\alpha = \pm\dfrac{4}{\sqrt{14}}$.</li>
          <li><span class="ptit">Armar el vector.</span>
            $$a = \pm \frac{4}{\sqrt{14}}(3,-1,2) = \pm\left( \frac{12}{\sqrt{14}},\; \frac{-4}{\sqrt{14}},\; \frac{8}{\sqrt{14}} \right)$$
            Racionalizando ($\tfrac{1}{\sqrt{14}} = \tfrac{\sqrt{14}}{14}$) y simplificando:
            $$a = \pm\left( \frac{6\sqrt{14}}{7},\; -\frac{2\sqrt{14}}{7},\; \frac{4\sqrt{14}}{7} \right)$$</li>
        </ol>
        <p>Verificación: $\|a\| = \tfrac{4}{\sqrt{14}}\sqrt{14} = 4$. ✓</p>
        <div class="note tip"><b class="lbl">Hay dos soluciones</b> Una con el sentido de $u$ y otra opuesta. El enunciado dice «paralelo», no «misma dirección y sentido», así que corresponde dar <strong>ambas</strong>.</div>`,
        resultado: tex`$a = \pm\dfrac{4}{\sqrt{14}}(3,-1,2) = \pm\left( \frac{6\sqrt{14}}{7},\, -\frac{2\sqrt{14}}{7},\, \frac{4\sqrt{14}}{7} \right)$` },

      { id: 'tp1-9b', rot: 'b', enunciado: tex`Sea un versor perpendicular a $u$ y a $v$.`,
        conceptos: ['u1-producto-vectorial', 'u1-prop-vectorial', 'u1-versor-asociado'],
        pista: tex`«Perpendicular a los dos a la vez» es el trabajo del producto vectorial. Después hay que normalizar.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Producto vectorial.</span> Por [[u1-prop-vectorial]], $u \times v$ es perpendicular a ambos:
            $$u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ 3 & -1 & 2 \\ 2 & -5 & 1 \end{vmatrix}$$
            $$= \breve i\bigl((-1)(1) - (2)(-5)\bigr) - \breve j\bigl((3)(1) - (2)(2)\bigr) + \breve k\bigl((3)(-5) - (-1)(2)\bigr)$$
            $$= \breve i(-1 + 10) - \breve j(3 - 4) + \breve k(-15 + 2) = (9,\; 1,\; -13)$$</li>
          <li><span class="ptit">Control.</span> $(9,1,-13) \cdot u = 27 - 1 - 26 = 0$ ✓ y $(9,1,-13)\cdot v = 18 - 5 - 13 = 0$ ✓.</li>
          <li><span class="ptit">Normalizar.</span> $\|u \times v\| = \sqrt{81 + 1 + 169} = \sqrt{251}$, y por [[u1-versor-asociado]]:
            $$\breve a = \pm\frac{1}{\sqrt{251}}(9, 1, -13)$$</li>
        </ol>
        <p>$\sqrt{251} \approx 15{,}84$, así que $\breve a \approx \pm(0{,}568;\; 0{,}063;\; -0{,}821)$.</p>`,
        resultado: tex`$\breve a = \pm\dfrac{1}{\sqrt{251}}(9,1,-13)$ (dos versores, uno opuesto al otro).` },

      { id: 'tp1-9c', rot: 'c', enunciado: tex`Sea paralelo a $u$ y a $v$.`,
        conceptos: ['u1-teorema-1', 'u1-prop-vectorial'],
        pista: tex`Fijate primero si $u$ y $v$ son paralelos entre sí.`,
        resolucion: tex`<p><strong>No es posible</strong> (no existe un vector no nulo con esa propiedad).</p>
        <p><strong>Justificación.</strong> Si $a \neq \vec 0$ fuera paralelo a $u$ y a $v$, por el [[u1-teorema-1]] existirían $\alpha, \beta \neq 0$ con $a = \alpha u$ y $a = \beta v$. Entonces $\alpha u = \beta v$, de donde $u = \tfrac{\beta}{\alpha} v$, es decir <strong>$u$ y $v$ serían paralelos entre sí</strong>.</p>
        <p>Pero en el inciso b) se calculó $u \times v = (9,1,-13) \neq \vec 0$, y por la propiedad 7 de [[u1-prop-vectorial]] eso significa precisamente que $u \not\parallel v$. Contradicción.</p>
        <p>El único vector paralelo simultáneamente a ambos es $\vec 0$, que por definición no tiene dirección ([[u1-versor-nulo-paralelos]]), así que no cuenta como solución.</p>`,
        resultado: tex`<strong>No existe</strong>: exigiría $u \parallel v$, y $u \times v \neq \vec 0$ muestra que no lo son.` },

      { id: 'tp1-9d', rot: 'd', enunciado: tex`Sea paralelo a $u$ y perpendicular a $v$.`,
        conceptos: ['u1-teorema-1', 'u1-teorema-3', 'u1-producto-escalar'],
        resolucion: tex`<p><strong>No es posible.</strong></p>
        <p><strong>Justificación.</strong> Paralelo a $u$ obliga a $a = \alpha u$ con $\alpha \neq 0$. Perpendicular a $v$ exige, por el [[u1-teorema-3]], que $a \cdot v = 0$:</p>
        <div class="fx center">$$a \cdot v = (\alpha u) \cdot v = \alpha\,(u \cdot v) = 0$$</div>
        <p>Y el producto escalar vale</p>
        <div class="fx center">$$u \cdot v = 3(2) + (-1)(-5) + 2(1) = 6 + 5 + 2 = 13 \neq 0$$</div>
        <p>Entonces $13\alpha = 0$ fuerza $\alpha = 0$, es decir $a = \vec 0$. No hay ningún vector <strong>no nulo</strong> que cumpla las dos condiciones.</p>
        <div class="note tip"><b class="lbl">La lectura general</b> Un vector paralelo a $u$ sólo puede ser perpendicular a $v$ si $u$ ya era perpendicular a $v$. Como acá $u \cdot v = 13 \neq 0$, el ángulo entre $u$ y $v$ no es recto y la condición es imposible.</div>`,
        resultado: tex`<strong>No existe</strong>: exigiría $u \cdot v = 0$, pero $u \cdot v = 13 \neq 0$.` }
    ]},

  /* ========================= 10 ========================= */
  { id: 'tp1-10', num: '10',
    enunciado: tex`<p><strong>Resolver:</strong></p>`,
    incisos: [
      { id: 'tp1-10a', rot: 'a', enunciado: tex`Hallar los valores de $k$ para que los vectores $v = (k,2,1)$ y $u = (1,3,-2)$ sean ortogonales.`,
        conceptos: ['u1-teorema-3', 'u1-producto-escalar'],
        pista: tex`Ortogonales ⇒ producto escalar igual a cero. Queda una ecuación en $k$.`,
        resolucion: tex`<p>Por el [[u1-teorema-3]], la condición es $v \cdot u = 0$:</p>
        <div class="fx center">$$v \cdot u = k(1) + 2(3) + 1(-2) = k + 6 - 2 = k + 4$$</div>
        <div class="fx center">$$k + 4 = 0 \;\Longrightarrow\; k = -4$$</div>
        <p>Verificación: con $k = -4$, $v = (-4,2,1)$ y $v \cdot u = -4 + 6 - 2 = 0$. ✓</p>
        <div class="note"><b class="lbl">Es un único valor</b> La condición de ortogonalidad es <strong>lineal</strong> en $k$, así que hay una sola solución. Si la incógnita apareciera en dos componentes, podría quedar una ecuación cuadrática y entonces habría dos valores (o ninguno real).</div>`,
        resultado: tex`$k = -4$` },

      { id: 'tp1-10b', rot: 'b', enunciado: tex`Hallar el módulo del vector $a$ sabiendo que $a \cdot b = 12$, $\|b\| = 2$ y $\theta = \dfrac{\pi}{6}$.`,
        conceptos: ['u1-teorema-2'],
        pista: tex`El [[u1-teorema-2]] relaciona las cuatro cantidades: producto escalar, los dos módulos y el coseno del ángulo. Se conocen tres, se despeja la cuarta.`,
        resolucion: tex`<p>Por el [[u1-teorema-2]], $a \cdot b = \|a\|\,\|b\|\cos\theta$. Con $\theta = \tfrac{\pi}{6} = 30°$ se tiene $\cos\theta = \tfrac{\sqrt3}{2}$:</p>
        <div class="fx center">$$12 = \|a\| \cdot 2 \cdot \frac{\sqrt{3}}{2} = \|a\|\,\sqrt{3}$$</div>
        <div class="fx center">$$\|a\| = \frac{12}{\sqrt{3}} = \frac{12\sqrt{3}}{3} = 4\sqrt{3}$$</div>
        <p>$4\sqrt3 \approx 6{,}93$.</p>
        <div class="note tip"><b class="lbl">Control de coherencia</b> Por la desigualdad de Cauchy-Schwarz debe valer $|a\cdot b| \le \|a\|\|b\|$: acá $12 \le 4\sqrt3 \cdot 2 = 8\sqrt3 \approx 13{,}86$. ✓ Si el dato hubiera sido, por ejemplo, $a\cdot b = 20$ con $\|b\|=2$ y $\theta = \pi/6$, el problema sería inconsistente.</div>`,
        resultado: tex`$\|a\| = 4\sqrt{3} \approx 6{,}93$` }
    ]},

  /* ========================= 11 ========================= */
  { id: 'tp1-11', num: '11',
    enunciado: tex`<p>Si $u = (2,-1,3)$ y $v = (4,-1,2)$:</p>`,
    incisos: [
      { id: 'tp1-11a', rot: 'a', enunciado: tex`¿Cuál es el vector $w$ que resulta de proyectar $u$ sobre $v$?`,
        conceptos: ['u1-proyeccion-ortogonal', 'u1-producto-escalar'],
        pista: tex`Fórmula de la proyección: en el denominador va el módulo al cuadrado del vector <em>sobre el que</em> se proyecta.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Producto escalar.</span> $u \cdot v = 2(4) + (-1)(-1) + 3(2) = 8 + 1 + 6 = 15$.</li>
          <li><span class="ptit">Módulo al cuadrado de $v$.</span> $\|v\|^2 = 16 + 1 + 4 = 21$.</li>
          <li><span class="ptit">Aplicar [[u1-proyeccion-ortogonal]].</span>
            $$w = \operatorname{proy}_{v}\,u = \frac{u \cdot v}{\|v\|^2}\,v = \frac{15}{21}(4,-1,2) = \frac{5}{7}(4,-1,2)$$
            $$w = \left( \frac{20}{7},\; -\frac{5}{7},\; \frac{10}{7} \right)$$</li>
        </ol>
        <div class="note tip"><b class="lbl">Control</b> $w$ tiene que ser <strong>paralelo a $v$</strong>, y lo es: $w = \tfrac57 v$. Si el resultado no es múltiplo de $v$, hay un error.</div>`,
        resultado: tex`$w = \frac{5}{7}(4,-1,2) = \left( \frac{20}{7},\, -\frac{5}{7},\, \frac{10}{7} \right)$` },

      { id: 'tp1-11b', rot: 'b', enunciado: tex`Sabiendo que $u = w + t$, calcular $t$.`,
        conceptos: ['u1-proyeccion-ortogonal', 'u1-suma'],
        resolucion: tex`<p>Despejando, $t = u - w$:</p>
        <div class="fx center">$$t = (2,-1,3) - \left( \tfrac{20}{7}, -\tfrac{5}{7}, \tfrac{10}{7} \right)
        = \left( \tfrac{14-20}{7},\; \tfrac{-7+5}{7},\; \tfrac{21-10}{7} \right)$$</div>
        <div class="fx center">$$t = \left( -\frac{6}{7},\; -\frac{2}{7},\; \frac{11}{7} \right)$$</div>
        <div class="note"><b class="lbl">Qué es $t$</b> Es la <strong>componente de $u$ perpendicular a $v$</strong>. La descomposición $u = w + t$ parte a $u$ en una parte paralela a $v$ y otra perpendicular; es la descomposición que menciona [[u1-proyeccion-ortogonal]] y la que está detrás de las fórmulas de distancia de las unidades 2 y 3.</div>`,
        resultado: tex`$t = \left( -\frac{6}{7},\, -\frac{2}{7},\, \frac{11}{7} \right)$` },

      { id: 'tp1-11c', rot: 'c', enunciado: tex`¿Es $t$ ortogonal a $w$?`,
        conceptos: ['u1-teorema-3', 'u1-producto-escalar'],
        resolucion: tex`<p><strong>Sí.</strong> Se verifica con el [[u1-teorema-3]] calculando el producto escalar:</p>
        <div class="fx center">$$t \cdot w = \left(-\tfrac{6}{7}\right)\left(\tfrac{20}{7}\right) + \left(-\tfrac{2}{7}\right)\left(-\tfrac{5}{7}\right) + \left(\tfrac{11}{7}\right)\left(\tfrac{10}{7}\right)$$</div>
        <div class="fx center">$$= \frac{-120 + 10 + 110}{49} = \frac{0}{49} = 0$$</div>
        <p>Luego $t \perp w$.</p>
        <div class="note tip"><b class="lbl">No es casualidad, y conviene decirlo</b>
        Vale <strong>siempre</strong>, no sólo para estos números. Con $w = \dfrac{u\cdot v}{\|v\|^2}v$ y $t = u - w$:
        $$t \cdot v = u\cdot v - \frac{u\cdot v}{\|v\|^2}(v \cdot v) = u \cdot v - \frac{u \cdot v}{\|v\|^2}\,\|v\|^2 = 0$$
        Así que $t \perp v$; y como $w$ es múltiplo de $v$, también $t \perp w$. La proyección ortogonal está construida justamente para que el resto quede perpendicular.</div>`,
        resultado: tex`Sí: $t \cdot w = 0$. Y vale en general, porque $t$ es por construcción la componente de $u$ perpendicular a $v$.` }
    ]},

  /* ========================= 12 ========================= */
  { id: 'tp1-12', num: '12',
    enunciado: tex`<p>Dados $a = (2,-3,4)$ y $b = (3,-5,1)$, hallar $a \times b$ y $b \times a$. ¿Qué conclusión puede obtener?</p>`,
    conceptos: ['u1-producto-vectorial', 'u1-prop-vectorial'],
    pista: tex`Calculá los dos determinantes y compará. El resultado ilustra una de las propiedades del producto vectorial.`,
    resolucion: tex`<ol class="pasos">
      <li><span class="ptit">$a \times b$.</span>
        $$a \times b = \begin{vmatrix} \breve i & \breve j & \breve k \\ 2 & -3 & 4 \\ 3 & -5 & 1 \end{vmatrix}
        = \breve i\bigl((-3)(1) - (4)(-5)\bigr) - \breve j\bigl((2)(1) - (4)(3)\bigr) + \breve k\bigl((2)(-5) - (-3)(3)\bigr)$$
        $$= \breve i(-3 + 20) - \breve j(2 - 12) + \breve k(-10 + 9) = (17,\; 10,\; -1)$$</li>
      <li><span class="ptit">$b \times a$.</span>
        $$b \times a = \begin{vmatrix} \breve i & \breve j & \breve k \\ 3 & -5 & 1 \\ 2 & -3 & 4 \end{vmatrix}
        = \breve i\bigl((-5)(4) - (1)(-3)\bigr) - \breve j\bigl((3)(4) - (1)(2)\bigr) + \breve k\bigl((3)(-3) - (-5)(2)\bigr)$$
        $$= \breve i(-20 + 3) - \breve j(12 - 2) + \breve k(-9 + 10) = (-17,\; -10,\; 1)$$</li>
      <li><span class="ptit">Comparar.</span> $b \times a = -\,(a \times b)$.</li>
    </ol>
    <p><strong>Conclusión.</strong> El producto vectorial <strong>no es conmutativo</strong>: es <strong>anticonmutativo</strong>. Al intercambiar el orden de los factores el resultado cambia de signo, es decir conserva dirección y módulo pero invierte el sentido (propiedad 1 de [[u1-prop-vectorial]]).</p>
    <div class="note tip"><b class="lbl">Por qué pasa</b>
    El producto vectorial se calcula como un determinante cuyas dos últimas filas son los vectores. Intercambiar $a$ y $b$ es <strong>permutar dos filas</strong> del determinante, y eso le cambia el signo. También se ve geométricamente con la regla de la mano derecha: al invertir el orden, el pulgar apunta al lado opuesto.</div>
    <div class="note"><b class="lbl">Consecuencias</b> El módulo no cambia: $\|a\times b\| = \|b \times a\| = \sqrt{289+100+1} = \sqrt{390}$. Y ambos son perpendiculares al plano de $a$ y $b$; lo único que los distingue es de qué lado del plano apuntan.</div>`,
    resultado: tex`$a \times b = (17,10,-1)$, $\;b \times a = (-17,-10,1) = -(a\times b)$. El producto vectorial es <strong>anticonmutativo</strong>.` },

  /* ========================= 13 ========================= */
  { id: 'tp1-13', num: '13',
    enunciado: tex`<p><strong>Vectores ortogonales a dos vectores dados:</strong></p>`,
    incisos: [
      { id: 'tp1-13a', rot: 'a', enunciado: tex`Hallar un vector ortogonal a $u$ y $v$ simultáneamente, siendo $u = (-7,3,1)$ y $v = (2,0,4)$.`,
        conceptos: ['u1-producto-vectorial', 'u1-prop-vectorial'],
        resolucion: tex`<div class="fx center">$$u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ -7 & 3 & 1 \\ 2 & 0 & 4 \end{vmatrix}
        = \breve i\bigl(3\cdot 4 - 1 \cdot 0\bigr) - \breve j\bigl((-7)(4) - (1)(2)\bigr) + \breve k\bigl((-7)(0) - 3 \cdot 2\bigr)$$</div>
        <div class="fx center">$$= \breve i(12) - \breve j(-28 - 2) + \breve k(-6) = (12,\; 30,\; -6)$$</div>
        <p>Verificación: $(12,30,-6)\cdot u = -84 + 90 - 6 = 0$ ✓; $(12,30,-6)\cdot v = 24 + 0 - 24 = 0$ ✓.</p>
        <div class="note tip"><b class="lbl">Se puede simplificar</b> $(12,30,-6) = 6\,(2,5,-1)$, y $(2,5,-1)$ es también ortogonal a ambos y más cómodo de escribir. Como el enunciado pide «un» vector, cualquier múltiplo no nulo sirve.</div>`,
        resultado: tex`$u \times v = (12,30,-6)$, o su simplificación $(2,5,-1)$ (y cualquier múltiplo no nulo).` },

      { id: 'tp1-13b', rot: 'b', enunciado: tex`Determinar un vector unitario perpendicular a los vectores $u = (-1,3,2)$ y $v = (4,3,-1)$.`,
        conceptos: ['u1-producto-vectorial', 'u1-versor-asociado'],
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Producto vectorial.</span>
            $$u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ -1 & 3 & 2 \\ 4 & 3 & -1 \end{vmatrix}
            = \breve i\bigl(3(-1) - 2 \cdot 3\bigr) - \breve j\bigl((-1)(-1) - 2 \cdot 4\bigr) + \breve k\bigl((-1)(3) - 3 \cdot 4\bigr)$$
            $$= \breve i(-3-6) - \breve j(1-8) + \breve k(-3-12) = (-9,\; 7,\; -15)$$</li>
          <li><span class="ptit">Módulo.</span> $\|u\times v\| = \sqrt{81 + 49 + 225} = \sqrt{355}$.</li>
          <li><span class="ptit">Normalizar</span> con [[u1-versor-asociado]]:
            $$\breve a = \pm\frac{1}{\sqrt{355}}(-9, 7, -15)$$</li>
        </ol>
        <p>$\sqrt{355}\approx 18{,}84$, luego $\breve a \approx \pm(-0{,}478;\; 0{,}372;\; -0{,}796)$.</p>`,
        resultado: tex`$\breve a = \pm\dfrac{1}{\sqrt{355}}(-9,7,-15)$` },

      { id: 'tp1-13c', rot: 'c', enunciado: tex`Determinar un vector de norma 3 que sea perpendicular a los vectores $u = (-1,3,1)$ y $v = (1,1,-1)$.`,
        conceptos: ['u1-producto-vectorial', 'u1-versor-asociado', 'u1-escalar-por-vector'],
        pista: tex`Producto vectorial, normalizar, y recién entonces multiplicar por 3. El orden importa para no arrastrar números feos.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Producto vectorial.</span>
            $$u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ -1 & 3 & 1 \\ 1 & 1 & -1 \end{vmatrix}
            = \breve i\bigl(3(-1) - 1\cdot 1\bigr) - \breve j\bigl((-1)(-1) - 1 \cdot 1\bigr) + \breve k\bigl((-1)(1) - 3 \cdot 1\bigr)$$
            $$= \breve i(-3-1) - \breve j(1-1) + \breve k(-1-3) = (-4,\; 0,\; -4)$$</li>
          <li><span class="ptit">Módulo.</span> $\|u \times v\| = \sqrt{16 + 0 + 16} = \sqrt{32} = 4\sqrt{2}$.</li>
          <li><span class="ptit">Versor.</span> $\breve n = \dfrac{1}{4\sqrt2}(-4,0,-4) = \left(-\tfrac{1}{\sqrt2},\, 0,\, -\tfrac{1}{\sqrt2}\right)$.</li>
          <li><span class="ptit">Escalar a norma 3.</span>
            $$a = \pm 3\,\breve n = \pm\left( -\frac{3}{\sqrt{2}},\; 0,\; -\frac{3}{\sqrt{2}} \right) = \pm\left( -\frac{3\sqrt{2}}{2},\; 0,\; -\frac{3\sqrt{2}}{2} \right)$$</li>
        </ol>
        <p>Verificación: $\|a\| = \sqrt{\tfrac92 + 0 + \tfrac92} = \sqrt9 = 3$. ✓ Y $a \cdot u = \tfrac{3}{\sqrt2}(1) + 0 + \tfrac{3}{\sqrt2}(-1) = 0$ ✓.</p>
        <div class="note"><b class="lbl">Nota sobre la segunda componente nula</b> Da $0$ porque $u$ y $v$ tienen la misma primera y tercera componente en cierta proporción; no es un error. El vector perpendicular resulta contenido en el plano $y = 0$.</div>`,
        resultado: tex`$a = \pm\left( -\frac{3\sqrt{2}}{2},\, 0,\, -\frac{3\sqrt{2}}{2} \right)$` }
    ]},

  /* ========================= 14 ========================= */
  { id: 'tp1-14', num: '14',
    enunciado: tex`<p>Sean $u = (1,-3,1)$, $v = (2,-1,0)$ y $w = (2,-1,4)$ las aristas de un paralelepípedo, donde <strong>$u$ y $v$ forman la base</strong>.</p>`,
    incisos: [
      { id: 'tp1-14a', rot: 'a', enunciado: tex`Hallar el volumen del paralelepípedo.`,
        conceptos: ['u1-producto-mixto', 'u1-volumen', 'u1-producto-vectorial'],
        pista: tex`Volumen = valor absoluto del producto mixto. Conviene calcular primero $u \times v$, porque se reutiliza en todos los incisos siguientes.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Normal a la base.</span>
            $$u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & -3 & 1 \\ 2 & -1 & 0 \end{vmatrix}
            = \breve i\bigl((-3)(0) - (1)(-1)\bigr) - \breve j\bigl((1)(0) - (1)(2)\bigr) + \breve k\bigl((1)(-1) - (-3)(2)\bigr)$$
            $$= \breve i(0+1) - \breve j(0-2) + \breve k(-1+6) = (1,\; 2,\; 5)$$</li>
          <li><span class="ptit">Producto mixto.</span>
            $$w \cdot (u \times v) = (2,-1,4)\cdot(1,2,5) = 2 - 2 + 20 = 20$$</li>
          <li><span class="ptit">Volumen</span> (por [[u1-volumen]]): $V = |20| = 20$.</li>
        </ol>
        <div class="note tip"><b class="lbl">Dato de paso</b> Como $V \neq 0$, los tres vectores <strong>no son coplanares</strong> ([[u1-coplanaridad]]) — que es lo que hace falta para que haya un paralelepípedo de verdad y no una figura chata. En el lenguaje de la unidad 4, son [[u4-li-ld|linealmente independientes]] y forman una [[u4-base|base]] de $\mathbb{R}^3$.</div>`,
        resultado: tex`$V = 20$ unidades de volumen.` },

      { id: 'tp1-14b', rot: 'b', enunciado: tex`Indicar qué vector del paralelepípedo determina la altura. Calcularla.`,
        conceptos: ['u1-volumen', 'u1-proyeccion-ortogonal'],
        pista: tex`La altura se mide perpendicularmente a la base. ¿Cuál de las tres aristas no está en la base?`,
        resolucion: tex`<p><strong>El vector que determina la altura es $w$</strong>, porque es la única arista que no está contenida en la base (la base la forman $u$ y $v$, por dato).</p>
        <p>Más precisamente, la altura es la <strong>componente de $w$ perpendicular a la base</strong>, es decir la proyección de $w$ sobre la normal $u \times v$ ([[u1-proyeccion-ortogonal]]):</p>
        <div class="fx center">$$\vec h = \operatorname{proy}_{u\times v}\, w = \frac{w \cdot (u \times v)}{\|u \times v\|^2}\,(u\times v) = \frac{20}{30}(1,2,5) = \frac{2}{3}(1,2,5) = \left(\tfrac{2}{3}, \tfrac{4}{3}, \tfrac{10}{3}\right)$$</div>
        <p>donde $\|u\times v\|^2 = 1 + 4 + 25 = 30$. Su longitud es la altura buscada:</p>
        <div class="fx center">$$h = \|\vec h\| = \frac{|w \cdot (u\times v)|}{\|u \times v\|} = \frac{20}{\sqrt{30}} = \frac{20\sqrt{30}}{30} = \frac{2\sqrt{30}}{3} \approx 3{,}65$$</div>
        <div class="note tip"><b class="lbl">Control cruzado</b> Tiene que valer $V = A_{\text{base}} \cdot h$: en efecto, $\sqrt{30} \cdot \dfrac{2\sqrt{30}}{3} = \dfrac{2 \cdot 30}{3} = 20 = V$. ✓</div>`,
        resultado: tex`La altura la determina $w$. Vector altura $\vec h = \frac{2}{3}(1,2,5)$; $\;h = \frac{20}{\sqrt{30}} = \frac{2\sqrt{30}}{3} \approx 3{,}65$.` },

      { id: 'tp1-14c', rot: 'c', enunciado: tex`Hallar el área de la base.`,
        conceptos: ['u1-teorema-5', 'u1-producto-vectorial'],
        resolucion: tex`<p>La base es el paralelogramo de lados adyacentes $u$ y $v$, así que por el [[u1-teorema-5]]:</p>
        <div class="fx center">$$A_{\text{base}} = \|u \times v\| = \|(1,2,5)\| = \sqrt{1 + 4 + 25} = \sqrt{30} \approx 5{,}48$$</div>`,
        resultado: tex`$A_{\text{base}} = \sqrt{30} \approx 5{,}48$` },

      { id: 'tp1-14d', rot: 'd', enunciado: tex`Calcular el área de sus caras.`,
        conceptos: ['u1-teorema-5', 'u1-producto-vectorial'],
        pista: tex`Un paralelepípedo tiene tres pares de caras paralelas. Cada par está determinado por dos de las tres aristas.`,
        resolucion: tex`<p>Las tres caras distintas corresponden a los tres pares de aristas, y cada una aparece <strong>dos veces</strong> (caras opuestas, iguales entre sí).</p>
        <ol class="pasos">
          <li><span class="ptit">Cara $(u, v)$ — la base.</span> Ya calculada: $\|u \times v\| = \|(1,2,5)\| = \sqrt{30} \approx 5{,}48$.</li>
          <li><span class="ptit">Cara $(u, w)$.</span>
            $$u \times w = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & -3 & 1 \\ 2 & -1 & 4 \end{vmatrix}
            = \breve i(-12 + 1) - \breve j(4 - 2) + \breve k(-1 + 6) = (-11,\; -2,\; 5)$$
            $$\|u \times w\| = \sqrt{121 + 4 + 25} = \sqrt{150} = 5\sqrt{6} \approx 12{,}25$$</li>
          <li><span class="ptit">Cara $(v, w)$.</span>
            $$v \times w = \begin{vmatrix} \breve i & \breve j & \breve k \\ 2 & -1 & 0 \\ 2 & -1 & 4 \end{vmatrix}
            = \breve i(-4 - 0) - \breve j(8 - 0) + \breve k(-2 + 2) = (-4,\; -8,\; 0)$$
            $$\|v \times w\| = \sqrt{16 + 64 + 0} = \sqrt{80} = 4\sqrt{5} \approx 8{,}94$$</li>
        </ol>
        <p><strong>Área total</strong> (sumando los tres pares):</p>
        <div class="fx center">$$A_{\text{total}} = 2\left( \sqrt{30} + 5\sqrt{6} + 4\sqrt{5} \right) \approx 2(5{,}48 + 12{,}25 + 8{,}94) = 53{,}34$$</div>
        <div class="note"><b class="lbl">Si el enunciado pide «el área de sus caras»</b> Conviene dar las tres áreas distintas y aclarar que cada una se repite, más el total. Así queda cubierta cualquiera de las dos lecturas posibles del enunciado.</div>`,
        resultado: tex`Caras: $\sqrt{30}$, $5\sqrt6$ y $4\sqrt5$, cada una dos veces. Área total $= 2(\sqrt{30} + 5\sqrt6 + 4\sqrt5) \approx 53{,}3$.` }
    ]},

  /* ========================= 15 ========================= */
  { id: 'tp1-15', num: '15',
    enunciado: tex`<p>Sean $v_1 = (4,1,3)$, $v_2 = (1,2,-3)$ y $v_3 = (16,9,1)$ vectores de $\mathbb{R}^3$:</p>`,
    incisos: [
      { id: 'tp1-15a', rot: 'a', enunciado: tex`Hallar $3v_1 + 5v_2 - v_3$.`,
        conceptos: ['u1-suma', 'u1-escalar-por-vector'],
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Escalar cada vector.</span> $3v_1 = (12,3,9)$; $\;5v_2 = (5,10,-15)$; $\;-v_3 = (-16,-9,-1)$.</li>
          <li><span class="ptit">Sumar componente por componente.</span>
            $$\begin{aligned}
            x &: 12 + 5 - 16 = 1 \\
            y &: 3 + 10 - 9 = 4 \\
            z &: 9 - 15 - 1 = -7
            \end{aligned}$$</li>
        </ol>`,
        resultado: tex`$3v_1 + 5v_2 - v_3 = (1, 4, -7)$` },

      { id: 'tp1-15b', rot: 'b', enunciado: tex`Hallar un vector $v$ que verifique la ecuación $-v_1 + 2v_2 = 3v_3 + 4v$.`,
        conceptos: ['u1-suma', 'u1-escalar-por-vector', 'u1-prop-suma'],
        pista: tex`Despejar $v$ como en cualquier ecuación: las propiedades de [[u1-prop-suma]] permiten operar igual que con números.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Despejar.</span> Por [[u1-prop-suma]]:
            $$4v = -v_1 + 2v_2 - 3v_3 \;\Longrightarrow\; v = \tfrac{1}{4}\bigl(-v_1 + 2v_2 - 3v_3\bigr)$$</li>
          <li><span class="ptit">Calcular el miembro derecho.</span>
            $-v_1 = (-4,-1,-3)$; $\;2v_2 = (2,4,-6)$; $\;-3v_3 = (-48,-27,-3)$.
            $$-v_1 + 2v_2 - 3v_3 = (-4+2-48,\; -1+4-27,\; -3-6-3) = (-50,\; -24,\; -12)$$</li>
          <li><span class="ptit">Dividir por 4.</span>
            $$v = \tfrac{1}{4}(-50,-24,-12) = \left(-\tfrac{25}{2},\; -6,\; -3\right)$$</li>
        </ol>
        <p><strong>Verificación.</strong> Miembro izquierdo: $-v_1 + 2v_2 = (-4+2,\; -1+4,\; -3-6) = (-2, 3, -9)$.<br>
        Miembro derecho: $3v_3 + 4v = (48,27,3) + (-50,-24,-12) = (-2, 3, -9)$. ✓</p>
        <div class="note"><b class="lbl">La solución es única</b> La ecuación es lineal en $v$ con coeficiente $4 \neq 0$, así que hay exactamente un vector que la satisface.</div>`,
        resultado: tex`$v = \left(-\frac{25}{2},\, -6,\, -3\right) = (-12{,}5;\; -6;\; -3)$` }
    ]}

]});
