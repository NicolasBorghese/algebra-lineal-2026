/* TP 3 — Rectas y planos en el espacio
   Enunciado: "Rectas en el espacio corregido.pdf" (7_EAL_2026/3_rectas_y_planos_en_el_espacio) */

EAL.tp({
  id: 'tp3', num: 3, unidad: 'u3',
  titulo: 'Rectas y planos en el espacio',
  resumen: 'El práctico más largo: ecuaciones del plano y de la recta, intersecciones, posiciones relativas, distancias, proyecciones y ángulos.',
  nota: tex`<b class="lbl">Antes de abrir las resoluciones</b> Intentá cada ítem a mano y usá la resolución para <strong>autocorregirte</strong>. Este práctico está completo, los 20 ejercicios.<br><br>
  <b class="lbl">Las dos ideas que resuelven casi todo</b> Un plano «es» <strong>un punto más su normal</strong> ([[u3-plano-implicita]]); una recta «es» <strong>un punto más su director</strong>. Casi todo ejercicio se reduce a conseguir esos datos, y [[u3-normal-desde-directores]] es la tabla de cómo conseguir el normal según lo que te den.<br><br>
  <b class="lbl">El error que más cuesta</b> Entre dos objetos del mismo tipo (recta-recta, plano-plano) el paralelismo se chequea con producto <em>vectorial</em> nulo. Entre recta y plano es al revés: paralelos cuando el producto <em>escalar</em> $\vec u \cdot \vec n$ es nulo. Ver [[u3-teorema-5-6]].`,

  ejercicios: [

  /* ========================= 1 ========================= */
  { id: 'tp3-1', num: '1',
    enunciado: tex`<p>Escribir la ecuación de los siguientes <strong>planos</strong>:</p>`,
    incisos: [

      { id: 'tp3-1a', rot: 'a', enunciado: tex`paralelo a los vectores $u = (1,5,3)$ y $v = (-3,-2,2)$ y que pasa por $P = (1,2,1)$`,
        conceptos: ['u3-plano-vectorial', 'u3-normal-desde-directores', 'u3-plano-implicita', 'u1-producto-vectorial'],
        pista: tex`Dos vectores paralelos al plano ⇒ el normal es su producto vectorial.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Normal.</span> Por [[u3-normal-desde-directores]], $\vec n = u \times v$:
            $$u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & 5 & 3 \\ -3 & -2 & 2 \end{vmatrix}
            = \breve i\bigl(5\cdot 2 - 3(-2)\bigr) - \breve j\bigl(1\cdot 2 - 3(-3)\bigr) + \breve k\bigl(1(-2) - 5(-3)\bigr)$$
            $$= \breve i(10+6) - \breve j(2+9) + \breve k(-2+15) = (16,\; -11,\; 13)$$</li>
          <li><span class="ptit">Ecuación con punto y normal.</span>
            $$16(x-1) - 11(y-2) + 13(z-1) = 0$$
            $$16x - 16 - 11y + 22 + 13z - 13 = 0$$</li>
        </ol>
        <div class="fx center">$$\pi: 16x - 11y + 13z - 7 = 0$$</div>
        <p><strong>Verificaciones.</strong> El punto: $16 - 22 + 13 - 7 = 0$ ✓. Que $u$ y $v$ sean paralelos al plano, es decir ortogonales al normal: $\vec n \cdot u = 16 - 55 + 39 = 0$ ✓ y $\vec n \cdot v = -48 + 22 + 26 = 0$ ✓.</p>
        <div class="note"><b class="lbl">También se puede dejar en paramétricas</b> $(x,y,z) = (1,2,1) + \lambda(1,5,3) + \mu(-3,-2,2)$, por [[u3-plano-vectorial]]. Las dos formas describen el mismo plano; la implícita es la que después sirve para distancias y posiciones relativas.</div>`,
        resultado: tex`$\pi: 16x - 11y + 13z - 7 = 0$` },

      { id: 'tp3-1b', rot: 'b', enunciado: tex`paralelo al plano $\pi: 5x - y + 3z - 1 = 0$ y que pasa por $P = (3,1,-4)$`,
        conceptos: ['u3-teorema-4', 'u3-plano-implicita'],
        pista: tex`Paralelo ⇒ mismo normal; sólo se recalcula el término independiente.`,
        resolucion: tex`<p>Por el [[u3-teorema-4|Teorema 4]], planos paralelos tienen normales paralelos. Se conserva $\vec n = (5,-1,3)$ y se deja $d$ incógnita:</p>
        <div class="fx center">$$\pi': 5x - y + 3z + d = 0$$</div>
        <p>Imponiendo $P = (3,1,-4)$:</p>
        <div class="fx center">$$5(3) - 1 + 3(-4) + d = 0 \;\Longrightarrow\; 15 - 1 - 12 + d = 0 \;\Longrightarrow\; d = -2$$</div>
        <p>Y es <strong>paralelo distinto</strong> del original, porque $-2 \neq -1$.</p>`,
        resultado: tex`$\pi': 5x - y + 3z - 2 = 0$` },

      { id: 'tp3-1c', rot: 'c', enunciado: tex`que corta a los ejes coordenados en $x = 3$, $y = 1$ y $z = -2$`,
        conceptos: ['u3-plano-segmentaria'],
        resolucion: tex`<p>Forma segmentaria ([[u3-plano-segmentaria]]) con $p = 3$, $q = 1$, $r = -2$:</p>
        <div class="fx center">$$\frac{x}{3} + \frac{y}{1} + \frac{z}{-2} = 1$$</div>
        <p>Multiplicando por $6$ (mínimo común múltiplo de los denominadores) para pasar a implícita:</p>
        <div class="fx center">$$2x + 6y - 3z = 6 \;\Longrightarrow\; \pi: 2x + 6y - 3z - 6 = 0$$</div>
        <p><strong>Verificación</strong> con los tres cortes: $(3,0,0) \Rightarrow 6-6 = 0$ ✓; $(0,1,0) \Rightarrow 6-6=0$ ✓; $(0,0,-2) \Rightarrow 6-6=0$ ✓.</p>`,
        resultado: tex`$\frac{x}{3} + \frac{y}{1} + \frac{z}{-2} = 1$, o bien $2x + 6y - 3z - 6 = 0$.` }
    ]},

  /* ========================= 2 ========================= */
  { id: 'tp3-2', num: '2',
    enunciado: tex`<p>Hallar las ecuaciones <strong>vectorial, cartesiana y paramétrica</strong> de las siguientes rectas:</p>`,
    incisos: [

      { id: 'tp3-2a', rot: 'a', enunciado: tex`que pasa por los puntos $(1,-3,2)$ y $(4,-2,0)$`,
        conceptos: ['u3-recta-vectorial', 'u1-componentes-pq'],
        resolucion: tex`<p>Director: $\;\vec u = (4,-2,0) - (1,-3,2) = (3,\; 1,\; -2)$ ([[u1-componentes-pq]]). Punto: $P_0 = (1,-3,2)$.</p>
        <p><strong>Vectorial:</strong></p>
        <div class="fx center">$$(x,y,z) = (1,-3,2) + \lambda\,(3,1,-2), \qquad \lambda \in \mathbb{R}$$</div>
        <p><strong>Paramétricas:</strong></p>
        <div class="fx center">$$x = 1 + 3\lambda, \qquad y = -3 + \lambda, \qquad z = 2 - 2\lambda$$</div>
        <p><strong>Cartesiana</strong> (las tres componentes del director son no nulas, así que se puede):</p>
        <div class="fx center">$$\frac{x-1}{3} = \frac{y+3}{1} = \frac{z-2}{-2}$$</div>
        <p><strong>Verificación.</strong> $\lambda = 1$ da $(4,-2,0)$ ✓, que es el segundo punto.</p>`,
        resultado: tex`$(x,y,z) = (1,-3,2)+\lambda(3,1,-2)$; $\;\frac{x-1}{3} = \frac{y+3}{1} = \frac{z-2}{-2}$.` },

      { id: 'tp3-2b', rot: 'b', enunciado: tex`que pasa por $(2,5,-1)$ y es paralela al vector $(3,1,-4)$`,
        conceptos: ['u3-recta-vectorial'],
        resolucion: tex`<p>El director ya está dado: $\vec u = (3,1,-4)$, y el punto es $P_0 = (2,5,-1)$.</p>
        <div class="fx center">$$(x,y,z) = (2,5,-1) + \lambda\,(3,1,-4)$$</div>
        <div class="fx center">$$x = 2 + 3\lambda, \qquad y = 5 + \lambda, \qquad z = -1 - 4\lambda$$</div>
        <div class="fx center">$$\frac{x-2}{3} = \frac{y-5}{1} = \frac{z+1}{-4}$$</div>`,
        resultado: tex`$(x,y,z) = (2,5,-1)+\lambda(3,1,-4)$; $\;\frac{x-2}{3} = \frac{y-5}{1} = \frac{z+1}{-4}$.` }
    ]},

  /* ========================= 3 ========================= */
  { id: 'tp3-3', num: '3',
    enunciado: tex`<p>Escribir las ecuaciones de las rectas halladas en el ejercicio 2 como <strong>intersección de planos</strong>.</p>
    <div class="note"><b class="lbl">Nota sobre el enunciado</b> El PDF dice «ejercicio 12», pero por el contenido se refiere al <strong>ejercicio 2</strong>, que es donde se hallaron las rectas. Acá se resuelve con las rectas del ejercicio 2.</div>`,
    conceptos: ['u3-recta-interseccion'],
    pista: tex`La cadena $\frac{x-x_0}{u_1} = \frac{y-y_0}{u_2} = \frac{z-z_0}{u_3}$ son en realidad <em>dos</em> igualdades independientes. Cada una, despejada, es un plano.`,
    resolucion: tex`<p>Una cadena de tres fracciones iguales encierra dos ecuaciones independientes (la tercera se deduce de las otras dos). Se eligen dos pares cualesquiera —lo habitual es 1.ª con 2.ª y 2.ª con 3.ª— y cada igualdad se lleva a la forma implícita ([[u3-recta-interseccion]]).</p>

    <h3>Recta del inciso 2.a</h3>
    <p>$\dfrac{x-1}{3} = \dfrac{y+3}{1} = \dfrac{z-2}{-2}$</p>
    <p><strong>Primera con segunda:</strong></p>
    <div class="fx center">$$\frac{x-1}{3} = \frac{y+3}{1} \;\Longrightarrow\; x - 1 = 3(y+3) \;\Longrightarrow\; x - 3y - 10 = 0$$</div>
    <p><strong>Segunda con tercera:</strong></p>
    <div class="fx center">$$\frac{y+3}{1} = \frac{z-2}{-2} \;\Longrightarrow\; -2(y+3) = z - 2 \;\Longrightarrow\; 2y + z + 4 = 0$$</div>
    <div class="fx center">$$L_a: \begin{cases} x - 3y - 10 = 0 \\ 2y + z + 4 = 0 \end{cases}$$</div>
    <p><strong>Verificación</strong> con los dos puntos originales. $(1,-3,2)$: $\;1+9-10 = 0$ ✓ y $-6+2+4 = 0$ ✓. $(4,-2,0)$: $\;4+6-10=0$ ✓ y $-4+0+4=0$ ✓.</p>

    <h3>Recta del inciso 2.b</h3>
    <p>$\dfrac{x-2}{3} = \dfrac{y-5}{1} = \dfrac{z+1}{-4}$</p>
    <div class="fx center">$$\frac{x-2}{3} = \frac{y-5}{1} \;\Longrightarrow\; x - 2 = 3(y-5) \;\Longrightarrow\; x - 3y + 13 = 0$$</div>
    <div class="fx center">$$\frac{y-5}{1} = \frac{z+1}{-4} \;\Longrightarrow\; -4(y-5) = z+1 \;\Longrightarrow\; 4y + z - 19 = 0$$</div>
    <div class="fx center">$$L_b: \begin{cases} x - 3y + 13 = 0 \\ 4y + z - 19 = 0 \end{cases}$$</div>
    <p><strong>Verificación</strong> con $(2,5,-1)$: $\;2 - 15 + 13 = 0$ ✓ y $20 - 1 - 19 = 0$ ✓.</p>

    <div class="note tip"><b class="lbl">La respuesta no es única</b>
    Eligiendo otros pares de igualdades (por ejemplo 1.ª con 3.ª) salen <strong>otros dos planos</strong> que determinan la misma recta. Cualquier par de planos no paralelos que se corten en $L$ es una respuesta válida. Un control que siempre conviene hacer: el producto vectorial de los dos normales obtenidos debe ser paralelo al director. Para $L_a$: $(1,-3,0) \times (0,2,1) = (-3-0,\; -(1-0),\; 2-0) = (-3,-1,2) = -\,(3,1,-2)$ ✓.</div>`,
    resultado: tex`$L_a: \{x - 3y - 10 = 0;\; 2y + z + 4 = 0\}$ &nbsp;y&nbsp; $L_b: \{x - 3y + 13 = 0;\; 4y + z - 19 = 0\}$ (entre otras elecciones posibles).` },

  /* ========================= 4 ========================= */
  { id: 'tp3-4', num: '4',
    enunciado: tex`<p>Hallar la <strong>intersección</strong> de los siguientes planos:</p>
    <div class="note tip"><b class="lbl">Qué se responde</b> No alcanza con resolver el sistema: hay que <strong>decir qué es</strong> la intersección (un punto, una recta, un plano o el vacío), según los grados de libertad que queden. Ver [[u3-planos-posicion]].</div>`,
    incisos: [

      { id: 'tp3-4a', rot: 'a', enunciado: tex`$\pi_1: x - 2y - z - 4 = 0$; $\;\pi_2: 3x - 8y - z = 2$ y $\;\pi_3: x - 5y - 3z = 0$`,
        conceptos: ['u3-planos-posicion'],
        resolucion: tex`<p>Sistema de tres ecuaciones con tres incógnitas:</p>
        <div class="fx center">$$\begin{cases} (1)\;\; x - 2y - z = 4 \\ (2)\;\; 3x - 8y - z = 2 \\ (3)\;\; x - 5y - 3z = 0 \end{cases}$$</div>
        <ol class="pasos">
          <li><span class="ptit">$(2) - 3(1)$:</span>
            $$(3x - 8y - z) - 3(x - 2y - z) = 2 - 12$$
            $$-2y + 2z = -10 \;\Longrightarrow\; -y + z = -5 \;\Longrightarrow\; y = z + 5$$</li>
          <li><span class="ptit">$(3) - (1)$:</span>
            $$(x - 5y - 3z) - (x - 2y - z) = 0 - 4 \;\Longrightarrow\; -3y - 2z = -4 \;\Longrightarrow\; 3y + 2z = 4$$</li>
          <li><span class="ptit">Sustituir $y = z+5$:</span>
            $$3(z+5) + 2z = 4 \;\Longrightarrow\; 5z + 15 = 4 \;\Longrightarrow\; z = -\frac{11}{5}$$
            $$y = -\tfrac{11}{5} + 5 = \tfrac{14}{5}, \qquad x = 4 + 2y + z = 4 + \tfrac{28}{5} - \tfrac{11}{5} = \tfrac{37}{5}$$</li>
        </ol>
        <div class="fx center">$$\pi_1 \cap \pi_2 \cap \pi_3 = \left\{ \left( \tfrac{37}{5},\; \tfrac{14}{5},\; -\tfrac{11}{5} \right) \right\}$$</div>
        <p>El sistema es <strong>compatible determinado</strong> (cero grados de libertad), así que la intersección es <strong>un único punto</strong>.</p>
        <p><strong>Verificación</strong> en las tres ecuaciones:</p>
        <div class="fx center">$$\begin{aligned}
        (1)&: \tfrac{37}{5} - \tfrac{28}{5} + \tfrac{11}{5} = \tfrac{20}{5} = 4 \;✓\\
        (2)&: \tfrac{111}{5} - \tfrac{112}{5} + \tfrac{11}{5} = \tfrac{10}{5} = 2 \;✓\\
        (3)&: \tfrac{37}{5} - \tfrac{70}{5} + \tfrac{33}{5} = 0 \;✓
        \end{aligned}$$</div>`,
        resultado: tex`Un punto: $\left(\frac{37}{5},\, \frac{14}{5},\, -\frac{11}{5}\right)$.` },

      { id: 'tp3-4b', rot: 'b', enunciado: tex`$\pi_1: 3x - 2y + z - 1 = 0$ y $\;\pi_2: x - 3y + 4z = -2$`,
        conceptos: ['u3-planos-posicion', 'u3-recta-interseccion'],
        pista: tex`Dos planos con normales no paralelos se cortan en una recta. El director sale del producto vectorial de los normales; falta un punto.`,
        resolucion: tex`<p>Normales: $\vec n_1 = (3,-2,1)$, $\vec n_2 = (1,-3,4)$. No son proporcionales, así que los planos <strong>se cortan en una recta</strong>.</p>
        <ol class="pasos">
          <li><span class="ptit">Director.</span> La recta está en los dos planos, así que es perpendicular a los dos normales:
            $$\vec u = \vec n_1 \times \vec n_2 = \begin{vmatrix} \breve i & \breve j & \breve k \\ 3 & -2 & 1 \\ 1 & -3 & 4 \end{vmatrix}
            = \breve i(-8+3) - \breve j(12-1) + \breve k(-9+2) = (-5,\; -11,\; -7)$$
            Se puede usar el opuesto, más cómodo: $\vec u = (5, 11, 7)$.</li>
          <li><span class="ptit">Un punto.</span> Se fija una variable; con $z = 0$ queda
            $$\begin{cases} 3x - 2y = 1 \\ x - 3y = -2 \end{cases}$$
            De la segunda $x = 3y - 2$; sustituyendo: $9y - 6 - 2y = 1 \Rightarrow 7y = 7 \Rightarrow y = 1$, $x = 1$.
            Punto $P_0 = (1,1,0)$.</li>
        </ol>
        <div class="fx center">$$L: (x,y,z) = (1,1,0) + \lambda\,(5,11,7)$$</div>
        <p><strong>Verificación.</strong> Un punto genérico es $(1+5\lambda,\; 1+11\lambda,\; 7\lambda)$. En $\pi_1$:</p>
        <div class="fx center">$$3(1+5\lambda) - 2(1+11\lambda) + 7\lambda - 1 = (3-2-1) + (15 - 22 + 7)\lambda = 0 + 0\lambda = 0 \;✓$$</div>
        <p>En $\pi_2$: $\;(1+5\lambda) - 3(1+11\lambda) + 28\lambda = -2 + 0\lambda = -2$ ✓.</p>
        <div class="note"><b class="lbl">El control que no falla</b> Que los coeficientes de $\lambda$ se cancelen confirma el director; que el término constante dé el valor correcto confirma el punto. Si una de las dos cosas falla, se sabe exactamente dónde está el error.</div>`,
        resultado: tex`Una recta: $(x,y,z) = (1,1,0) + \lambda(5,11,7)$.` },

      { id: 'tp3-4c', rot: 'c', enunciado: tex`$\pi_1: x + y + z = 1$ y $\;\pi_2: x + 2y + z = -1$`,
        conceptos: ['u3-planos-posicion', 'u3-recta-interseccion'],
        resolucion: tex`<p>Restando $\pi_1$ de $\pi_2$ se elimina casi todo:</p>
        <div class="fx center">$$(x+2y+z) - (x+y+z) = -1 - 1 \;\Longrightarrow\; y = -2$$</div>
        <p>Y reemplazando en $\pi_1$: $\;x - 2 + z = 1 \Rightarrow x + z = 3$. La intersección es</p>
        <div class="fx center">$$L: \begin{cases} y = -2 \\ x + z = 3 \end{cases}$$</div>
        <p>Queda <strong>un</strong> grado de libertad, así que es una <strong>recta</strong>. En paramétricas, tomando $x = \lambda$ y entonces $z = 3-\lambda$:</p>
        <div class="fx center">$$L: (x,y,z) = (0,-2,3) + \lambda\,(1, 0, -1)$$</div>
        <p><strong>Control del director</strong> por producto vectorial: $\;(1,1,1) \times (1,2,1) = \breve i(1-2) - \breve j(1-1) + \breve k(2-1) = (-1,0,1)$, que es $-(1,0,-1)$ ✓ — el mismo, con sentido opuesto.</p>
        <div class="note"><b class="lbl">Qué significa $y = -2$</b> La recta está contenida en el plano $y = -2$, que es paralelo al plano coordenado $XZ$. Su director $(1,0,-1)$ tiene segunda componente nula, coherentemente.</div>`,
        resultado: tex`Una recta: $\{y = -2;\; x+z=3\}$, o $(x,y,z) = (0,-2,3) + \lambda(1,0,-1)$.` },

      { id: 'tp3-4d', rot: 'd', enunciado: tex`$\pi_1: x + y + z = 1$ y $\;\pi_2: 2x + 2y + 2z = 0$`,
        conceptos: ['u3-planos-posicion', 'u3-teorema-4'],
        resolucion: tex`<p>Simplificando $\pi_2$ dividiendo por 2: $\;x + y + z = 0$. Los normales son</p>
        <div class="fx center">$$\vec n_1 = (1,1,1), \qquad \vec n_2 = (2,2,2) = 2\,(1,1,1)$$</div>
        <p><strong>paralelos</strong>, así que por el [[u3-teorema-4|Teorema 4]] los planos son paralelos. Para distinguir coincidentes de paralelos distintos se comparan los términos independientes: $\pi_1$ pide $x+y+z = 1$ y $\pi_2$ pide $x+y+z=0$. Un mismo punto no puede cumplir las dos.</p>
        <div class="fx center">$$\pi_1 \cap \pi_2 = \varnothing$$</div>
        <p>Son <strong>planos paralelos distintos</strong> y el sistema es <strong>incompatible</strong>: restando se llega a $0 = 1$.</p>
        <div class="note tip"><b class="lbl">Hay que simplificar antes de comparar</b> Mirando $x+y+z=1$ contra $2x+2y+2z=0$ sin dividir, la proporción de los coeficientes es $\tfrac12$ en los tres, pero la de los términos independientes es $\tfrac{1}{0}$: ahí se rompe la proporción, y eso es exactamente lo que distingue paralelos distintos de coincidentes.</div>`,
        resultado: tex`$\varnothing$: son planos <strong>paralelos distintos</strong>.` }
    ]},

  /* ========================= 5 ========================= */
  { id: 'tp3-5', num: '5',
    enunciado: tex`<p>Analizar la intersección con los <strong>ejes</strong> y los <strong>planos coordenados</strong> del plano:</p>
    <div class="note tip"><b class="lbl">Las dos reglas</b> Para cortar con un <strong>eje</strong> se anulan las <em>otras dos</em> variables; para cortar con un <strong>plano coordenado</strong> se anula <em>una</em> y queda una recta (la traza). Y si en la ecuación <strong>falta</strong> una variable, el plano es paralelo al eje de esa variable. Ver [[u3-trazas]].</div>`,
    incisos: [

      { id: 'tp3-5a', rot: 'a', enunciado: tex`$\pi_1: x + y - 4 = 0$`,
        conceptos: ['u3-trazas'],
        resolucion: tex`<p>No aparece $z$ ⇒ el plano es <strong>paralelo al eje $Z$</strong> (un plano «vertical»). Su normal es $\vec n = (1,1,0)$, que efectivamente es perpendicular a $(0,0,1)$.</p>
        <p><strong>Con los ejes:</strong></p>
        <div class="tbl"><table>
          <thead><tr><th>Eje</th><th>Se anula</th><th>Queda</th><th>Corte</th></tr></thead>
          <tbody>
            <tr><td>$X$</td><td>$y=z=0$</td><td>$x - 4 = 0$</td><td>$(4,0,0)$</td></tr>
            <tr><td>$Y$</td><td>$x=z=0$</td><td>$y - 4 = 0$</td><td>$(0,4,0)$</td></tr>
            <tr><td>$Z$</td><td>$x=y=0$</td><td>$-4 = 0$, absurdo</td><td><strong>no corta</strong></td></tr>
          </tbody>
        </table></div>
        <p><strong>Con los planos coordenados:</strong></p>
        <ul>
          <li>$XY$ (es $z=0$): la recta $x + y - 4 = 0$ dentro del plano $XY$. Es la traza principal.</li>
          <li>$XZ$ (es $y=0$): $x = 4$, una recta <strong>paralela al eje $Z$</strong> que pasa por $(4,0,0)$.</li>
          <li>$YZ$ (es $x=0$): $y = 4$, una recta paralela al eje $Z$ por $(0,4,0)$.</li>
        </ul>
        <div class="note"><b class="lbl">Coherencia</b> No cortar al eje $Z$ y ser paralelo a él es lo mismo dicho de dos maneras. Las dos trazas verticales confirman la imagen: el plano es la «pared» que se levanta sobre la recta $x+y=4$ del piso.</div>`,
        resultado: tex`Paralelo al eje $Z$. Corta los ejes en $(4,0,0)$ y $(0,4,0)$, y no corta el eje $Z$. Trazas: $x+y-4=0$ en $XY$; $x=4$ en $XZ$; $y=4$ en $YZ$.` },

      { id: 'tp3-5b', rot: 'b', enunciado: tex`$\pi_2: x - y = 0$`,
        conceptos: ['u3-trazas'],
        resolucion: tex`<p>No aparece $z$ <strong>y además</strong> el término independiente es nulo ⇒ el plano es paralelo al eje $Z$ y pasa por el origen, es decir <strong>contiene al eje $Z$</strong>.</p>
        <p><strong>Con los ejes:</strong></p>
        <div class="tbl"><table>
          <thead><tr><th>Eje</th><th>Se anula</th><th>Queda</th><th>Corte</th></tr></thead>
          <tbody>
            <tr><td>$X$</td><td>$y=z=0$</td><td>$x = 0$</td><td>sólo el origen $(0,0,0)$</td></tr>
            <tr><td>$Y$</td><td>$x=z=0$</td><td>$-y = 0$</td><td>sólo el origen</td></tr>
            <tr><td>$Z$</td><td>$x=y=0$</td><td>$0 = 0$, siempre cierto</td><td><strong>todo el eje $Z$</strong></td></tr>
          </tbody>
        </table></div>
        <p><strong>Con los planos coordenados:</strong></p>
        <ul>
          <li>$XY$ ($z=0$): la recta $y = x$, la <strong>bisectriz</strong> del primer y tercer cuadrante.</li>
          <li>$XZ$ ($y=0$): $x = 0$, que junto con $y=0$ es el <strong>eje $Z$</strong>.</li>
          <li>$YZ$ ($x=0$): $y = 0$, que junto con $x=0$ es otra vez el <strong>eje $Z$</strong>.</li>
        </ul>
        <div class="note tip"><b class="lbl">Cómo describirlo</b> Es el plano que contiene al eje $Z$ y a la bisectriz $y=x$ del plano $XY$. Y por pasar por el origen, es además un <strong>subespacio vectorial</strong> de $\mathbb{R}^3$ de dimensión 2 ([[u4-teorema-4]]) — la conexión con la unidad 4.</div>`,
        resultado: tex`Contiene al eje $Z$ y a la bisectriz $y=x$ de $XY$. Corta los ejes $X$ e $Y$ sólo en el origen.` },

      { id: 'tp3-5c', rot: 'c', enunciado: tex`$\pi_3: x + z - 2 = 0$`,
        conceptos: ['u3-trazas'],
        resolucion: tex`<p>No aparece $y$ ⇒ <strong>paralelo al eje $Y$</strong>. Normal $\vec n = (1,0,1)$.</p>
        <div class="tbl"><table>
          <thead><tr><th>Eje</th><th>Se anula</th><th>Queda</th><th>Corte</th></tr></thead>
          <tbody>
            <tr><td>$X$</td><td>$y=z=0$</td><td>$x - 2 = 0$</td><td>$(2,0,0)$</td></tr>
            <tr><td>$Y$</td><td>$x=z=0$</td><td>$-2 = 0$, absurdo</td><td><strong>no corta</strong></td></tr>
            <tr><td>$Z$</td><td>$x=y=0$</td><td>$z - 2 = 0$</td><td>$(0,0,2)$</td></tr>
          </tbody>
        </table></div>
        <p><strong>Con los planos coordenados:</strong></p>
        <ul>
          <li>$XY$ ($z=0$): $x = 2$, recta paralela al eje $Y$ por $(2,0,0)$.</li>
          <li>$XZ$ ($y=0$): la recta $x + z - 2 = 0$ dentro de $XZ$. Es la traza principal.</li>
          <li>$YZ$ ($x=0$): $z = 2$, recta paralela al eje $Y$ por $(0,0,2)$.</li>
        </ul>`,
        resultado: tex`Paralelo al eje $Y$. Corta los ejes en $(2,0,0)$ y $(0,0,2)$, y no corta el eje $Y$. Trazas: $x=2$ en $XY$; $x+z-2=0$ en $XZ$; $z=2$ en $YZ$.` }
    ]},

  /* ========================= 6 ========================= */
  { id: 'tp3-6', num: '6',
    enunciado: tex`<p>Analizar si los planos $\pi_1: 3x - y + 2z + 5 = 0$ y $\pi_2: y + 4z + 10 = 0$ son <strong>coincidentes</strong>.</p>`,
    conceptos: ['u3-planos-posicion', 'u3-teorema-4'],
    pista: tex`Para que dos planos sean coincidentes es <em>necesario</em> que sean paralelos. Chequeá eso primero y te ahorrás todo lo demás.`,
    resolucion: tex`<p>Normales: $\;\vec n_1 = (3,-1,2)$ y $\;\vec n_2 = (0,1,4)$.</p>
    <p><strong>Paso 1 — ¿son paralelos?</strong> Para serlo tendrían que ser proporcionales, pero la primera componente de $\vec n_2$ es $0$ y la de $\vec n_1$ no: no existe $\alpha$ con $(3,-1,2) = \alpha(0,1,4)$, porque la primera coordenada daría $3 = 0$.</p>
    <p>Confirmación por producto vectorial ([[u1-prop-vectorial]]):</p>
    <div class="fx center">$$\vec n_1 \times \vec n_2 = \begin{vmatrix} \breve i & \breve j & \breve k \\ 3 & -1 & 2 \\ 0 & 1 & 4 \end{vmatrix}
    = \breve i(-4-2) - \breve j(12-0) + \breve k(3-0) = (-6,\; -12,\; 3) \neq \vec 0$$</div>
    <p><strong>Conclusión.</strong> Los normales no son paralelos, así que los planos <strong>no son paralelos</strong> y por lo tanto <strong>no son coincidentes</strong>. Lo que hacen es <strong>cortarse en una recta</strong>, cuyo director es justamente $(-6,-12,3)$, o simplificado $(-2,-4,1)$.</p>
    <div class="note tip"><b class="lbl">La cadena lógica que conviene escribir</b>
    Coincidentes ⇒ paralelos ⇒ normales paralelos. Negando desde el final: normales no paralelos ⇒ no paralelos ⇒ no coincidentes. Es más corto y más seguro que buscar un punto de uno que no esté en el otro, aunque eso también sirve: $\pi_2$ no contiene, por ejemplo, el punto $(0,0,-\tfrac52)$ de $\pi_1$, ya que $0 + 4(-\tfrac52) + 10 = 0$… que sí lo contiene. Ese intento fallido muestra por qué el camino de los normales es preferible: un punto compartido no prueba nada.</div>`,
    resultado: tex`<strong>No son coincidentes.</strong> Sus normales $(3,-1,2)$ y $(0,1,4)$ no son paralelos ($\vec n_1 \times \vec n_2 = (-6,-12,3) \neq \vec 0$), así que se cortan en una recta de director $(-2,-4,1)$.` },

  /* ========================= 7 ========================= */
  { id: 'tp3-7', num: '7',
    enunciado: tex`<p>Encontrar, si existe, $k \in \mathbb{R}$ para que el plano $\pi_1: 4x - 6y + 12z + 14 = 0$ sea <strong>perpendicular</strong> al plano $\pi_2: 3x - 2y + kz - 13 = 0$.</p>`,
    conceptos: ['u3-teorema-4', 'u1-teorema-3'],
    pista: tex`Perpendicularidad entre planos ⇒ normales ortogonales ⇒ producto escalar igual a cero. Queda una ecuación lineal en $k$.`,
    resolucion: tex`<p>Normales: $\vec n_1 = (4,-6,12)$ y $\vec n_2 = (3,-2,k)$. Por el [[u3-teorema-4|Teorema 4]], $\pi_1 \perp \pi_2$ si y sólo si $\vec n_1 \cdot \vec n_2 = 0$:</p>
    <div class="fx center">$$\vec n_1 \cdot \vec n_2 = 4(3) + (-6)(-2) + 12k = 12 + 12 + 12k = 24 + 12k$$</div>
    <div class="fx center">$$24 + 12k = 0 \;\Longrightarrow\; k = -2$$</div>
    <p><strong>Verificación.</strong> Con $k = -2$: $\;\vec n_2 = (3,-2,-2)$ y</p>
    <div class="fx center">$$(4,-6,12)\cdot(3,-2,-2) = 12 + 12 - 24 = 0 \;✓$$</div>
    <div class="note"><b class="lbl">Siempre hay solución y es única</b> La condición es <strong>lineal</strong> en $k$ con coeficiente $12 \neq 0$, así que existe exactamente un valor. Habría sido imposible sólo si el coeficiente de $k$ se anulara (es decir, si la tercera componente de $\vec n_1$ fuera 0) y el resto no: ahí quedaría una ecuación del tipo $24 = 0$, sin solución.</div>`,
    resultado: tex`$k = -2$` },

  /* ========================= 8 ========================= */
  { id: 'tp3-8', num: '8',
    enunciado: tex`<p>Dados los planos $\pi_1: 2x + y - z - 1 = 0$ y $\pi_2: 4x + 2y - 2z + 4 = 0$, y las rectas
    $L_1: (x,y,z) = (2,1,4) + \lambda(-1,0,-2)$ y $L_2: (x,y,z) = (-1,3,3) + \lambda(-2,0,-4)$, donde $L_1$ y $L_2$ están contenidas en los planos $\pi_1$ y $\pi_2$ respectivamente.</p>
    <p>Hallar, <strong>si es posible</strong>, un plano que contenga a ambas rectas y sea perpendicular a los planos dados.</p>`,
    conceptos: ['u3-normal-desde-directores', 'u3-teorema-4', 'u3-teorema-2-3', 'u3-alabeadas'],
    pista: tex`El plano que contiene a dos rectas (si existe) tiene su normal <strong>determinado</strong> salvo escalar. Calculalo y después chequeá si cumple la segunda condición: no hay libertad para elegir.`,
    resolucion: tex`<p>El enunciado pide <strong>dos</strong> cosas a la vez, y la clave es que la primera ya fija el normal por completo: si existe el plano, no queda ninguna libertad para satisfacer la segunda.</p>

    <h3>Paso 0 — Verificar los datos</h3>
    <p>$L_1 \subset \pi_1$: el punto $(2,1,4)$ cumple $4 + 1 - 4 - 1 = 0$ ✓, y el director cumple $(-1,0,-2)\cdot(2,1,-1) = -2 + 0 + 2 = 0$ ✓ ([[u3-pertenencia]]).</p>
    <p>$L_2 \subset \pi_2$: $\;4(-1) + 2(3) - 2(3) + 4 = -4+6-6+4 = 0$ ✓, y $(-2,0,-4)\cdot(4,2,-2) = -8+0+8 = 0$ ✓.</p>
    <p>Además $\pi_2$ simplificado es $2x+y-z+2 = 0$: <strong>mismo normal que $\pi_1$</strong> y distinto término independiente ($-1$ vs. $2$), o sea que $\pi_1$ y $\pi_2$ son <strong>paralelos distintos</strong>.</p>

    <h3>Paso 1 — Posición relativa de las rectas</h3>
    <p>Los directores son $\vec u_1 = (-1,0,-2)$ y $\vec u_2 = (-2,0,-4) = 2\,\vec u_1$: <strong>paralelos</strong> ([[u3-teorema-2-3]]).</p>
    <p>¿Son la misma recta? Si $(-1,3,3)$ estuviera en $L_1$: de $2 - \lambda = -1$ sale $\lambda = 3$, pero entonces la segunda coordenada sería $1 \neq 3$. No pertenece, así que son <strong>paralelas distintas</strong>.</p>
    <p>Dos rectas paralelas distintas <strong>sí</strong> determinan un único plano que las contiene, así que la primera condición es alcanzable.</p>

    <h3>Paso 2 — El (único) plano que las contiene</h3>
    <p>Ese plano contiene la dirección común $\vec u_1$ y el vector que une un punto de cada recta:</p>
    <div class="fx center">$$\overrightarrow{P_1P_2} = (-1,3,3) - (2,1,4) = (-3,\; 2,\; -1)$$</div>
    <div class="fx center">$$\vec n = \vec u_1 \times \overrightarrow{P_1P_2} = \begin{vmatrix} \breve i & \breve j & \breve k \\ -1 & 0 & -2 \\ -3 & 2 & -1 \end{vmatrix}
    = \breve i\bigl(0 - (-4)\bigr) - \breve j\bigl(1 - 6\bigr) + \breve k\bigl(-2 - 0\bigr) = (4,\; 5,\; -2)$$</div>
    <p>Este normal es <strong>único salvo múltiplo escalar</strong>: cualquier plano que contenga a las dos rectas tiene que ser perpendicular a $\vec u_1$ y a $\overrightarrow{P_1P_2}$, y esos dos vectores no son paralelos.</p>

    <h3>Paso 3 — ¿Cumple la segunda condición?</h3>
    <p>Para ser perpendicular a $\pi_1$ (y por paralelismo, a $\pi_2$) haría falta $\vec n \cdot \vec n_{\pi_1} = 0$, con $\vec n_{\pi_1} = (2,1,-1)$:</p>
    <div class="fx center">$$(4,5,-2)\cdot(2,1,-1) = 8 + 5 + 2 = 15 \neq 0$$</div>
    <div class="note warn"><b class="lbl">Conclusión: no es posible</b>
    El único plano que contiene a $L_1$ y $L_2$ tiene normal $(4,5,-2)$, y ese normal <strong>no</strong> es ortogonal al de los planos dados. Por lo tanto <strong>no existe ningún plano</strong> que cumpla las dos condiciones simultáneamente.</div>
    <p>A título informativo, el plano que sí contiene a ambas rectas es, usando $P_1 = (2,1,4)$:</p>
    <div class="fx center">$$4(x-2) + 5(y-1) - 2(z-4) = 0 \;\Longrightarrow\; 4x + 5y - 2z - 5 = 0$$</div>
    <p>Control: $P_1 = (2,1,4) \Rightarrow 8+5-8-5 = 0$ ✓; $P_2 = (-1,3,3) \Rightarrow -4+15-6-5 = 0$ ✓; y $\vec n \cdot \vec u_1 = -4 + 0 + 4 = 0$ ✓.</p>
    <div class="note tip"><b class="lbl">La estructura del razonamiento</b>
    Cuando un enunciado pide dos condiciones y dice «si es posible», conviene ver si una de ellas <strong>determina</strong> el objeto. Acá la primera lo determina por completo; entonces la segunda no se impone, se <em>verifica</em>. Si da, hay respuesta; si no da, la respuesta correcta es que no existe — con la cuenta que lo prueba.</div>`,
    resultado: tex`<strong>No es posible.</strong> $L_1$ y $L_2$ son paralelas distintas y determinan el único plano $4x+5y-2z-5=0$, cuyo normal $(4,5,-2)$ no es ortogonal a $(2,1,-1)$ (el producto escalar da $15 \neq 0$), así que no es perpendicular a los planos dados.` },

  /* ========================= 9 ========================= */
  { id: 'tp3-9', num: '9',
    enunciado: tex`<p>Probar si la recta $L: x + 4 = \dfrac{y-2}{-3} = \dfrac{z-4}{5}$ está contenida en el plano $\pi: x + 2y + z = 4$.</p>`,
    conceptos: ['u3-pertenencia', 'u3-teorema-5-6'],
    pista: tex`Contención pide <strong>dos</strong> verificaciones, no una: paralelismo <em>y</em> un punto en común.`,
    resolucion: tex`<p>De la forma cartesiana se leen el punto y el director. Notar que $x+4$ equivale a $\dfrac{x+4}{1}$:</p>
    <div class="fx center">$$P_0 = (-4,\; 2,\; 4), \qquad \vec u = (1,\; -3,\; 5)$$</div>
    <p>Y el normal del plano es $\vec n = (1,2,1)$.</p>

    <h3>Condición 1 — Paralelismo</h3>
    <p>Por el [[u3-teorema-5-6|Teorema 5]], $L \parallel \pi$ si y sólo si $\vec u \cdot \vec n = 0$:</p>
    <div class="fx center">$$\vec u \cdot \vec n = (1)(1) + (-3)(2) + (5)(1) = 1 - 6 + 5 = 0 \;✓$$</div>
    <p>La recta es paralela al plano. Pero esto <strong>todavía no</strong> decide: puede ser paralela y disjunta, o estar contenida.</p>

    <h3>Condición 2 — Un punto en común</h3>
    <p>Se verifica si $P_0$ satisface la ecuación del plano:</p>
    <div class="fx center">$$-4 + 2(2) + 4 = -4 + 4 + 4 = 4 \;✓$$</div>
    <p>Da exactamente $4$, que es el valor pedido. Luego $P_0 \in \pi$.</p>
    <div class="fx center">$$\textbf{Las dos condiciones se cumplen} \;\Longrightarrow\; L \subset \pi$$</div>

    <h3>Verificación por el camino alternativo</h3>
    <p>Sustituyendo el punto genérico de $L$, que es $(-4+\lambda,\; 2-3\lambda,\; 4+5\lambda)$, en la ecuación del plano:</p>
    <div class="fx center">$$(-4+\lambda) + 2(2-3\lambda) + (4+5\lambda) = -4 + \lambda + 4 - 6\lambda + 4 + 5\lambda = 4 + 0\lambda = 4$$</div>
    <p>Se obtiene la <strong>identidad</strong> $4 = 4$, cierta para todo $\lambda$: <em>todos</em> los puntos de la recta están en el plano ([[u3-pertenencia]]). Confirma la conclusión y además muestra cómo se distinguen los tres casos de una sola cuenta:</p>
    <div class="tbl"><table>
      <thead><tr><th>Al sustituir queda</th><th>Conclusión</th></tr></thead>
      <tbody>
        <tr><td>una identidad ($4 = 4$)</td><td>$L \subset \pi$ — este caso</td></tr>
        <tr><td>una contradicción ($4 = 7$)</td><td>$L \parallel \pi$, sin puntos comunes</td></tr>
        <tr><td>un valor único de $\lambda$</td><td>se cortan en un punto</td></tr>
      </tbody>
    </table></div>`,
    resultado: tex`Sí: $L \subset \pi$. Se cumplen las dos condiciones — $\vec u \cdot \vec n = 0$ (paralelismo) y $P_0 = (-4,2,4) \in \pi$.` },

  /* ========================= 10 ========================= */
  { id: 'tp3-10', num: '10',
    enunciado: tex`<p>Dada la recta $L$ de ecuación $L: \begin{cases} x - y + z = 1 \\ y + 5z = 0 \end{cases}$, hallar, si es posible, las ecuaciones de:</p>
    <div class="note tip"><b class="lbl">Conviene hacer una vez el trabajo común</b> Los seis incisos usan el mismo punto y el mismo director de $L$. Calcularlos primero ahorra repetir seis veces la misma cuenta.
    <p><strong>Director:</strong> $\;\vec u = \vec n_1 \times \vec n_2$ con $\vec n_1 = (1,-1,1)$ y $\vec n_2 = (0,1,5)$:
    $$\vec u = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & -1 & 1 \\ 0 & 1 & 5 \end{vmatrix} = \breve i(-5-1) - \breve j(5-0) + \breve k(1-0) = (-6,\; -5,\; 1)$$</p>
    <p><strong>Punto:</strong> con $z = 0$, la segunda ecuación da $y = 0$ y la primera $x = 1$. Luego $P_0 = (1,0,0)$.</p>
    <p><strong>Punto genérico:</strong> $\;(1-6\lambda,\; -5\lambda,\; \lambda)$. Control en la 1.ª ecuación: $(1-6\lambda) + 5\lambda + \lambda = 1 + 0\lambda = 1$ ✓; en la 2.ª: $-5\lambda + 5\lambda = 0$ ✓.</p></div>`,
    incisos: [

      { id: 'tp3-10a', rot: 'a', enunciado: tex`un plano paralelo a $L$ y que pasa por $(1,-3,2)$. ¿Es único el plano?`,
        conceptos: ['u3-teorema-5-6', 'u3-recta-interseccion'],
        pista: tex`La condición de paralelismo es <em>una sola</em> ecuación sobre el normal. Pensá cuántas soluciones tiene.`,
        resolucion: tex`<p>Por el [[u3-teorema-5-6|Teorema 5]], un plano de normal $\vec n = (a,b,c)$ es paralelo a $L$ si y sólo si</p>
        <div class="fx center">$$\vec n \cdot \vec u = -6a - 5b + c = 0$$</div>
        <p>Es <strong>una</strong> ecuación con <strong>tres</strong> incógnitas: hay infinitas soluciones. Una elección cómoda es tomar el normal de uno de los dos planos que definen $L$, por ejemplo $\vec n = (1,-1,1)$, que ya cumple la condición: $-6 + 5 + 1 = 0$ ✓.</p>
        <p>Entonces $\;x - y + z + d = 0$, y con el punto $(1,-3,2)$:</p>
        <div class="fx center">$$1 + 3 + 2 + d = 0 \;\Longrightarrow\; d = -6 \;\Longrightarrow\; \pi: x - y + z - 6 = 0$$</div>
        <p><strong>Control de que es paralelo y no contiene a $L$:</strong> $P_0 = (1,0,0)$ da $1 - 0 + 0 - 6 = -5 \neq 0$, así que $P_0 \notin \pi$ y la recta es paralela y disjunta ✓.</p>
        <div class="note warn"><b class="lbl">No, el plano no es único — y hay que justificarlo</b>
        Los planos paralelos a $L$ que pasan por un punto fijo forman una <strong>familia infinita</strong>: todos los que contienen la dirección $\vec u$ y pasan por ese punto, es decir todos los que contienen la recta por $(1,-3,2)$ de director $\vec u$. Girando alrededor de esa recta se obtienen infinitos planos, todos paralelos a $L$.
        <p>Otro ejemplo: eligiendo $\vec n = (0,1,5)$ (el otro normal de la definición de $L$, que cumple $0 - 5 + 5 = 0$ ✓), el plano por $(1,-3,2)$ es $y + 5z - 7 = 0$, también válido.</p></div>`,
        resultado: tex`Por ejemplo $\pi: x - y + z - 6 = 0$ (o $y + 5z - 7 = 0$). <strong>No es único:</strong> la condición $-6a-5b+c=0$ es una ecuación con tres incógnitas, así que hay infinitos planos.` },

      { id: 'tp3-10b', rot: 'b', enunciado: tex`un plano perpendicular a $L$ y que pase por $(0,0,0)$`,
        conceptos: ['u3-teorema-5-6', 'u3-normal-desde-directores'],
        resolucion: tex`<p>Por el [[u3-teorema-5-6|Teorema 6]], un plano es perpendicular a una recta cuando su normal es <strong>paralelo al director</strong>. Acá no hay libertad: $\vec n = \vec u = (-6,-5,1)$.</p>
        <p>Pasa por el origen, así que $d = 0$:</p>
        <div class="fx center">$$\pi: -6x - 5y + z = 0, \qquad\text{o equivalentemente}\qquad 6x + 5y - z = 0$$</div>
        <p><strong>Este plano sí es único</strong> (como conjunto de puntos): el normal queda determinado salvo escalar, y el punto está fijado.</p>
        <div class="note"><b class="lbl">Contraste con el inciso a)</b> Perpendicularidad fija el normal <em>completamente</em> (tres condiciones: $\vec n \parallel \vec u$); paralelismo lo restringe con <em>una sola</em> ecuación. Por eso uno da solución única y el otro infinitas.</div>`,
        resultado: tex`$\pi: 6x + 5y - z = 0$. Es <strong>único</strong>.` },

      { id: 'tp3-10c', rot: 'c', enunciado: tex`un plano que contenga a $L$ y que pase por $(-1,3,0)$`,
        conceptos: ['u3-normal-desde-directores', 'u3-pertenencia'],
        pista: tex`Un plano que contiene una recta y un punto externo: el normal sale del producto vectorial del director con el vector que va del punto de la recta al punto dado.`,
        resolucion: tex`<p>Sea $Q = (-1,3,0)$. Primero conviene verificar que $Q \notin L$: si lo estuviera, habría infinitos planos. Del punto genérico, $\lambda = 0$ para que la tercera coordenada sea $0$, lo que da $(1,0,0) \neq Q$. Luego $Q \notin L$ ✓.</p>
        <ol class="pasos">
          <li><span class="ptit">Segundo vector del plano.</span>
            $$\overrightarrow{P_0Q} = (-1,3,0) - (1,0,0) = (-2,\; 3,\; 0)$$</li>
          <li><span class="ptit">Normal.</span> Por [[u3-normal-desde-directores]]:
            $$\vec n = \vec u \times \overrightarrow{P_0Q} = \begin{vmatrix} \breve i & \breve j & \breve k \\ -6 & -5 & 1 \\ -2 & 3 & 0 \end{vmatrix}
            = \breve i(0 - 3) - \breve j(0 + 2) + \breve k(-18 - 10) = (-3,\; -2,\; -28)$$
            Cambiando de signo para dejarlo más prolijo: $\vec n = (3, 2, 28)$.</li>
          <li><span class="ptit">Ecuación</span> por $P_0 = (1,0,0)$: $\;3(1) + 0 + 0 + d = 0 \Rightarrow d = -3$.</li>
        </ol>
        <div class="fx center">$$\pi: 3x + 2y + 28z - 3 = 0$$</div>
        <p><strong>Verificaciones.</strong> $P_0 = (1,0,0)$: $3-3 = 0$ ✓. $Q = (-1,3,0)$: $-3+6-3 = 0$ ✓. Paralelismo con el director: $\vec n \cdot \vec u = -18 - 10 + 28 = 0$ ✓, que junto con $P_0 \in \pi$ garantiza $L \subset \pi$ ([[u3-pertenencia]]).</p>
        <p>Y es <strong>único</strong>: una recta y un punto exterior determinan un único plano.</p>`,
        resultado: tex`$\pi: 3x + 2y + 28z - 3 = 0$. Es único.` },

      { id: 'tp3-10d', rot: 'd', enunciado: tex`un plano que contenga a $L$ y sea paralelo al plano $\pi: 2x - 2y + 2z = 7$`,
        conceptos: ['u3-teorema-4', 'u3-pertenencia'],
        resolucion: tex`<p>Paralelo a $\pi$ ⇒ mismo normal. Simplificando $\vec n_\pi = (2,-2,2)$ dividiendo por 2: $\vec n = (1,-1,1)$.</p>
        <p>Para que contenga a $L$ hacen falta las dos condiciones de [[u3-pertenencia]]. La de paralelismo ya se cumple:</p>
        <div class="fx center">$$\vec n \cdot \vec u = (1)(-6) + (-1)(-5) + (1)(1) = -6 + 5 + 1 = 0 \;✓$$</div>
        <p>Y para que pase por $P_0 = (1,0,0)$: $\;x - y + z + d = 0$ con $1 + d = 0$, o sea $d = -1$.</p>
        <div class="fx center">$$\pi': x - y + z - 1 = 0$$</div>
        <p>Es <strong>paralelo distinto</strong> de $\pi$: multiplicando por 2 queda $2x-2y+2z-2=0$, y $-2 \neq -7$ ✓.</p>
        <div class="note tip"><b class="lbl">Un detalle que vale la pena notar</b>
        El plano hallado es <strong>exactamente el primero de los dos que definen a $L$</strong> en el enunciado ($x-y+z=1$). Tiene sentido: ese plano contiene a $L$ por construcción, y resulta que su normal es paralelo al de $\pi$. Si al terminar el ejercicio el resultado coincide con uno de los planos de la definición, no es un error: es una señal de que el camino fue correcto.</div>`,
        resultado: tex`$\pi': x - y + z - 1 = 0$ — que es, justamente, el primer plano de la definición de $L$.` },

      { id: 'tp3-10e', rot: 'e', enunciado: tex`un plano que contenga a $L$ y sea normal al vector $(1,2,16)$`,
        conceptos: ['u3-plano-implicita', 'u3-pertenencia'],
        pista: tex`El normal viene dado. Lo primero es chequear si es compatible con contener a $L$; si no lo fuera, el ejercicio sería imposible.`,
        resolucion: tex`<p>El normal está impuesto: $\vec n = (1,2,16)$. Hay que verificar que sea compatible con contener a $L$:</p>
        <div class="fx center">$$\vec n \cdot \vec u = (1)(-6) + (2)(-5) + (16)(1) = -6 - 10 + 16 = 0 \;✓$$</div>
        <p>Compatible. Entonces $\;x + 2y + 16z + d = 0$, y con $P_0 = (1,0,0)$: $\;1 + d = 0 \Rightarrow d = -1$.</p>
        <div class="fx center">$$\pi: x + 2y + 16z - 1 = 0$$</div>
        <p><strong>Verificación con el punto genérico</strong> de $L$:</p>
        <div class="fx center">$$(1-6\lambda) + 2(-5\lambda) + 16\lambda - 1 = (1-1) + (-6 - 10 + 16)\lambda = 0 \;✓$$</div>
        <p>Vale para todo $\lambda$, así que toda la recta está en el plano. Es <strong>único</strong>: normal fijo más un punto.</p>
        <div class="note"><b class="lbl">Si el producto escalar no hubiera dado cero</b> El ejercicio sería imposible, y la justificación sería que el director de $L$ no es perpendicular a $(1,2,16)$, de modo que ningún plano normal a ese vector puede contener a $L$. Es justo lo que pasa en el inciso f).</div>`,
        resultado: tex`$\pi: x + 2y + 16z - 1 = 0$. Es único.` },

      { id: 'tp3-10f', rot: 'f', enunciado: tex`un plano que contenga a $L$ y sea paralelo al plano $\pi: 3x - y + 2 = 0$. Explicar qué pasa en este caso.`,
        conceptos: ['u3-teorema-4', 'u3-pertenencia', 'u3-teorema-5-6'],
        pista: tex`Hacé el mismo chequeo que en e). Lo que cambia es el resultado, y el ejercicio pide explicar por qué.`,
        resolucion: tex`<p>Paralelo a $\pi$ obliga a $\vec n = (3,-1,0)$. Chequeo de compatibilidad con contener a $L$:</p>
        <div class="fx center">$$\vec n \cdot \vec u = (3)(-6) + (-1)(-5) + (0)(1) = -18 + 5 + 0 = -13 \neq 0$$</div>
        <div class="note warn"><b class="lbl">No es posible, y esta es la explicación</b>
        Todo plano paralelo a $\pi$ tiene normal $(3,-1,0)$ (salvo escalar). Para que un plano contenga a $L$, su normal debe ser <strong>ortogonal al director</strong> de $L$. Pero $\vec n \cdot \vec u = -13 \neq 0$, así que esa ortogonalidad falla. Por lo tanto <strong>ningún plano paralelo a $\pi$ puede contener a $L$</strong>.</div>
        <p><strong>Qué pasa geométricamente.</strong> La condición $\vec u \cdot \vec n_\pi \neq 0$ dice, por el [[u3-teorema-5-6|Teorema 5]], que $L$ <strong>no es paralela</strong> a $\pi$: la recta <em>atraviesa</em> el plano. Y efectivamente se cortan en un punto; sustituyendo el punto genérico en $\pi$:</p>
        <div class="fx center">$$3(1-6\lambda) - (-5\lambda) + 2 = 3 - 18\lambda + 5\lambda + 2 = 5 - 13\lambda = 0 \;\Longrightarrow\; \lambda = \frac{5}{13}$$</div>
        <div class="fx center">$$L \cap \pi = \left\{ \left( 1 - \tfrac{30}{13},\; -\tfrac{25}{13},\; \tfrac{5}{13} \right) \right\} = \left\{ \left( -\tfrac{17}{13},\; -\tfrac{25}{13},\; \tfrac{5}{13} \right) \right\}$$</div>
        <p>Control: $3\left(-\tfrac{17}{13}\right) + \tfrac{25}{13} + 2 = \tfrac{-51+25+26}{13} = 0$ ✓.</p>
        <p>Una recta que corta a un plano no puede estar contenida en ningún plano paralelo a él: si lo estuviera, sería paralela al plano original. Eso cierra la imposibilidad.</p>
        <div class="note tip"><b class="lbl">El patrón de los seis incisos</b>
        Los incisos d), e) y f) hacen el <strong>mismo</strong> chequeo $\vec n \cdot \vec u = 0$ con tres normales distintos. En d) y e) da cero y el plano existe; en f) no da cero y no existe. Conviene ver el ejercicio así: una sola idea aplicada tres veces, no tres problemas distintos.</div>`,
        resultado: tex`<strong>No es posible.</strong> Un plano paralelo a $\pi$ tiene normal $(3,-1,0)$, y $\vec n \cdot \vec u = -13 \neq 0$: la recta $L$ no es paralela a $\pi$ sino que lo corta en $\left(-\frac{17}{13}, -\frac{25}{13}, \frac{5}{13}\right)$, así que ningún plano paralelo a $\pi$ puede contenerla.` }
    ]},

  /* ========================= 11 ========================= */
  { id: 'tp3-11', num: '11',
    enunciado: tex`<p>Decir en cada caso si los puntos están o no <strong>alineados</strong>. En caso afirmativo encontrar la ecuación de la recta que los contiene; de lo contrario, hallar el plano.</p>`,
    incisos: [

      { id: 'tp3-11a', rot: 'a', enunciado: tex`$(2,2,1)$; $(3,4,2)$; $(1,0,0)$`,
        conceptos: ['u3-alineados', 'u3-axioma-1'],
        pista: tex`Armá dos vectores desde el mismo punto y mirá si son paralelos.`,
        resolucion: tex`<p>Sean $A = (2,2,1)$, $B = (3,4,2)$, $C = (1,0,0)$. Se arman dos vectores desde $A$:</p>
        <div class="fx center">$$\overrightarrow{AB} = (1,\,2,\,1), \qquad \overrightarrow{AC} = (-1,\,-2,\,-1)$$</div>
        <p>Se ve a ojo que $\overrightarrow{AC} = -\,\overrightarrow{AB}$: son <strong>paralelos</strong>, luego los tres puntos <strong>están alineados</strong>. Confirmación por producto vectorial ([[u3-alineados]]):</p>
        <div class="fx center">$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & 2 & 1 \\ -1 & -2 & -1 \end{vmatrix}
        = \breve i(-2+2) - \breve j(-1+1) + \breve k(-2+2) = (0,0,0)$$</div>
        <p>La recta que los contiene tiene punto $A$ y director $(1,2,1)$:</p>
        <div class="fx center">$$L: (x,y,z) = (2,2,1) + \lambda\,(1,2,1) \qquad\Longleftrightarrow\qquad \frac{x-2}{1} = \frac{y-2}{2} = \frac{z-1}{1}$$</div>
        <p>Como intersección de planos ([[u3-recta-interseccion]]): de la 1.ª con la 2.ª, $2(x-2) = y-2 \Rightarrow 2x - y - 2 = 0$; de la 2.ª con la 3.ª, $y - 2 = 2(z-1) \Rightarrow y - 2z = 0$.</p>
        <div class="fx center">$$L: \begin{cases} 2x - y - 2 = 0 \\ y - 2z = 0 \end{cases}$$</div>
        <p><strong>Verificación.</strong> $\lambda = 1$ da $B = (3,4,2)$ ✓ y $\lambda = -1$ da $C = (1,0,0)$ ✓. En los planos: $B \Rightarrow 6-4-2 = 0$ y $4-4=0$ ✓; $C \Rightarrow 2-0-2=0$ y $0-0=0$ ✓.</p>
        <div class="note"><b class="lbl">Por qué no hay plano único</b> Tres puntos alineados <strong>no</strong> determinan un plano: por una recta pasan infinitos planos. El [[u3-axioma-1|Axioma 1]] exige que los tres puntos <em>no</em> estén alineados, y por eso el enunciado bifurca.</div>`,
        resultado: tex`<strong>Están alineados.</strong> $L: \frac{x-2}{1} = \frac{y-2}{2} = \frac{z-1}{1}$, o bien $\{2x-y-2=0;\; y-2z=0\}$.` },

      { id: 'tp3-11b', rot: 'b', enunciado: tex`$(-1,2,-2)$; $(0,1,1)$; $(1,0,4)$; $(2,-1,-1)$`,
        conceptos: ['u3-alineados', 'u1-coplanaridad'],
        pista: tex`Con cuatro puntos conviene ir por partes: primero mirá si algunos están alineados, y después si los cuatro son coplanares.`,
        resolucion: tex`<p>Sean $P_1 = (-1,2,-2)$, $P_2 = (0,1,1)$, $P_3 = (1,0,4)$, $P_4 = (2,-1,-1)$. Se arman los tres vectores desde $P_1$:</p>
        <div class="fx center">$$\overrightarrow{P_1P_2} = (1,-1,3), \qquad \overrightarrow{P_1P_3} = (2,-2,6), \qquad \overrightarrow{P_1P_4} = (3,-3,1)$$</div>
        <h3>Paso 1 — ¿Están los cuatro alineados?</h3>
        <p>$\overrightarrow{P_1P_3} = 2\,\overrightarrow{P_1P_2}$, así que <strong>$P_1$, $P_2$ y $P_3$ sí están alineados</strong>. Pero $\overrightarrow{P_1P_4} = (3,-3,1)$ no es múltiplo de $(1,-1,3)$: las dos primeras componentes darían factor $3$ y la tercera $\tfrac13$.</p>
        <p>Luego <strong>los cuatro puntos NO están alineados</strong>, y corresponde buscar el plano.</p>
        <h3>Paso 2 — El plano</h3>
        <p>El plano queda determinado por la recta que contiene a $P_1, P_2, P_3$ más el punto exterior $P_4$. Su normal es</p>
        <div class="fx center">$$\vec n = \overrightarrow{P_1P_2} \times \overrightarrow{P_1P_4} = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & -1 & 3 \\ 3 & -3 & 1 \end{vmatrix}
        = \breve i(-1+9) - \breve j(1-9) + \breve k(-3+3) = (8,\, 8,\, 0)$$</div>
        <p>Simplificando, $\vec n = (1,1,0)$. El plano es $x + y + d = 0$, y con $P_1 = (-1,2,-2)$: $\;-1 + 2 + d = 0 \Rightarrow d = -1$.</p>
        <div class="fx center">$$\pi: x + y - 1 = 0$$</div>
        <h3>Verificación — los cuatro puntos</h3>
        <div class="fx center">$$\begin{aligned}
        P_1 = (-1,2,-2) &: \;-1 + 2 - 1 = 0 \;✓\\
        P_2 = (0,1,1) &: \;0 + 1 - 1 = 0 \;✓\\
        P_3 = (1,0,4) &: \;1 + 0 - 1 = 0 \;✓\\
        P_4 = (2,-1,-1) &: \;2 - 1 - 1 = 0 \;✓
        \end{aligned}$$</div>
        <p>Los cuatro son <strong>coplanares</strong>, lo que también se puede chequear con el producto mixto ([[u1-coplanaridad]]):</p>
        <div class="fx center">$$\overrightarrow{P_1P_3} \cdot \left( \overrightarrow{P_1P_2} \times \overrightarrow{P_1P_4} \right) = (2,-2,6)\cdot(8,8,0) = 16 - 16 + 0 = 0$$</div>
        <div class="note tip"><b class="lbl">Dos detalles que conviene notar</b>
        <p>En la ecuación <strong>no aparece $z$</strong>, así que el plano es paralelo al eje $Z$ ([[u3-trazas]]) — coherente con $\vec n = (1,1,0)$.</p>
        <p>Y el plano resulta <strong>único</strong> a pesar de que cuatro puntos en general no son coplanares: es porque tres de ellos están alineados, de modo que lo que hay en realidad es una recta más un punto exterior. Si los cuatro hubieran estado en posición genérica, lo correcto sería decir que no hay un único plano que los contenga.</p></div>`,
        resultado: tex`<strong>No están alineados</strong> los cuatro (aunque $P_1$, $P_2$ y $P_3$ sí lo están). Son coplanares y el plano que los contiene es $\pi: x + y - 1 = 0$.` }
    ]},

  /* ========================= 12 ========================= */
  { id: 'tp3-12', num: '12',
    enunciado: tex`<p><strong>Hallar:</strong></p>`,
    incisos: [

      { id: 'tp3-12a', rot: 'a', enunciado: tex`La ecuación de la recta $L$ que pasa por $(1,0,-1)$ y es perpendicular al plano $\pi: 2x + y - 3z + 1 = 0$`,
        conceptos: ['u3-teorema-5-6', 'u3-recta-vectorial'],
        pista: tex`Perpendicular al plano ⇒ el director de la recta <em>es</em> el normal del plano.`,
        resolucion: tex`<p>Por el [[u3-teorema-5-6|Teorema 6]], una recta es perpendicular a un plano cuando su director es paralelo al normal. Así que se toma directamente $\vec u = \vec n = (2,1,-3)$:</p>
        <div class="fx center">$$L: (x,y,z) = (1,0,-1) + \lambda\,(2,1,-3)$$</div>
        <div class="fx center">$$x = 1 + 2\lambda, \qquad y = \lambda, \qquad z = -1 - 3\lambda$$</div>
        <div class="fx center">$$\frac{x-1}{2} = \frac{y}{1} = \frac{z+1}{-3}$$</div>`,
        resultado: tex`$L: (x,y,z) = (1,0,-1) + \lambda(2,1,-3)$, o $\frac{x-1}{2} = \frac{y}{1} = \frac{z+1}{-3}$.` },

      { id: 'tp3-12b', rot: 'b', enunciado: tex`¿Está la recta $L$ contenida en el plano $\pi$? Justificar.`,
        conceptos: ['u3-pertenencia'],
        resolucion: tex`<p><strong>No</strong>, y hay dos razones independientes, cada una suficiente.</p>
        <p><strong>Razón 1 — falla el paralelismo.</strong> Para estar contenida, la recta debería ser paralela al plano, es decir $\vec u \cdot \vec n = 0$ ([[u3-pertenencia]]). Pero acá $\vec u = \vec n$, así que</p>
        <div class="fx center">$$\vec u \cdot \vec n = \vec n \cdot \vec n = \|\vec n\|^2 = 4 + 1 + 9 = 14 \neq 0$$</div>
        <p>Un producto escalar de un vector no nulo consigo mismo nunca puede ser cero, así que una recta <strong>perpendicular</strong> a un plano no puede nunca estar contenida en él. Lo que hace es atravesarlo en un único punto.</p>
        <p><strong>Razón 2 — el punto tampoco pertenece.</strong> Reemplazando $(1,0,-1)$ en la ecuación del plano:</p>
        <div class="fx center">$$2(1) + 0 - 3(-1) + 1 = 2 + 3 + 1 = 6 \neq 0$$</div>
        <p>Luego $(1,0,-1) \notin \pi$.</p>
        <div class="note tip"><b class="lbl">La respuesta corta y fuerte</b> Alcanza con la razón 1, y es la más elegante: <em>una recta perpendicular a un plano nunca está contenida en él</em>, sin importar por dónde pase. La razón 2 es un dato adicional sobre este caso particular.</div>`,
        resultado: tex`<strong>No.</strong> $L \perp \pi$ y $\vec u \cdot \vec n = \|\vec n\|^2 = 14 \neq 0$: una recta perpendicular a un plano lo atraviesa, nunca está contenida. Además $(1,0,-1) \notin \pi$.` },

      { id: 'tp3-12c', rot: 'c', enunciado: tex`La intersección entre la recta y el plano.`,
        conceptos: ['u3-pertenencia', 'u3-proy-punto-plano'],
        resolucion: tex`<p>Se sustituye el punto genérico de $L$, que es $(1+2\lambda,\; \lambda,\; -1-3\lambda)$, en la ecuación del plano:</p>
        <div class="fx center">$$2(1+2\lambda) + \lambda - 3(-1-3\lambda) + 1 = 0$$</div>
        <div class="fx center">$$2 + 4\lambda + \lambda + 3 + 9\lambda + 1 = 6 + 14\lambda = 0 \;\Longrightarrow\; \lambda = -\frac{6}{14} = -\frac{3}{7}$$</div>
        <p>Evaluando:</p>
        <div class="fx center">$$x = 1 + 2\left(-\tfrac37\right) = \tfrac17, \qquad y = -\tfrac37, \qquad z = -1 - 3\left(-\tfrac37\right) = \tfrac27$$</div>
        <div class="fx center">$$L \cap \pi = \left\{ \left( \tfrac{1}{7},\; -\tfrac{3}{7},\; \tfrac{2}{7} \right) \right\}$$</div>
        <p><strong>Verificación.</strong> $\;2\left(\tfrac17\right) - \tfrac37 - 3\left(\tfrac27\right) + 1 = \tfrac{2-3-6}{7} + 1 = -1 + 1 = 0$ ✓.</p>
        <div class="note tip"><b class="lbl">Este punto tiene un nombre</b>
        Como la recta auxiliar se armó por $(1,0,-1)$ con director igual al normal del plano, lo que acaba de calcularse es exactamente la <strong>proyección ortogonal del punto $(1,0,-1)$ sobre el plano $\pi$</strong> ([[u3-proy-punto-plano]]). Los tres incisos de este ejercicio son, juntos, el método de proyección de un punto sobre un plano, desarmado en pasos. Vale la pena reconocerlo: aparece así en el primer parcial.</div>`,
        resultado: tex`Un punto: $\left(\frac{1}{7},\, -\frac{3}{7},\, \frac{2}{7}\right)$ — que es la proyección ortogonal de $(1,0,-1)$ sobre $\pi$.` }
    ]},

  /* ========================= 13 ========================= */
  { id: 'tp3-13', num: '13',
    enunciado: tex`<p>Hallar en cada uno de los siguientes casos la <strong>intersección entre recta y plano</strong>:</p>
    <div class="note tip"><b class="lbl">Siempre el mismo método</b> Punto genérico de la recta, sustituir en el plano, despejar el parámetro. Lo que se obtiene distingue los tres casos posibles: un valor único (se cortan), una contradicción (paralelos disjuntos) o una identidad (contenida). Ver [[u3-pertenencia]].</div>`,
    incisos: [

      { id: 'tp3-13a', rot: 'a', enunciado: tex`$L: \dfrac{x-3}{-2} = \dfrac{y-1}{-3} = \dfrac{z+1}{2}$; $\;\pi: x + 2y - 3z + 1 = 0$`,
        conceptos: ['u3-pertenencia', 'u3-recta-vectorial'],
        resolucion: tex`<p>De la cartesiana: $P_0 = (3,1,-1)$ y $\vec u = (-2,-3,2)$. El normal del plano es $\vec n = (1,2,-3)$.</p>
        <p><strong>Chequeo previo.</strong></p>
        <div class="fx center">$$\vec u \cdot \vec n = (-2)(1) + (-3)(2) + (2)(-3) = -2 - 6 - 6 = -14 \neq 0$$</div>
        <p>No son paralelos, así que la recta <strong>corta</strong> al plano en un único punto ([[u3-teorema-5-6]]).</p>
        <p><strong>Cálculo.</strong> Punto genérico $(3-2\lambda,\; 1-3\lambda,\; -1+2\lambda)$:</p>
        <div class="fx center">$$(3-2\lambda) + 2(1-3\lambda) - 3(-1+2\lambda) + 1 = 0$$</div>
        <div class="fx center">$$3 - 2\lambda + 2 - 6\lambda + 3 - 6\lambda + 1 = 9 - 14\lambda = 0 \;\Longrightarrow\; \lambda = \frac{9}{14}$$</div>
        <div class="fx center">$$x = 3 - \frac{18}{14} = \frac{12}{7}, \qquad y = 1 - \frac{27}{14} = -\frac{13}{14}, \qquad z = -1 + \frac{18}{14} = \frac{2}{7}$$</div>
        <div class="fx center">$$L \cap \pi = \left\{ \left( \tfrac{12}{7},\; -\tfrac{13}{14},\; \tfrac{2}{7} \right) \right\}$$</div>
        <p><strong>Verificación.</strong> $\;\tfrac{12}{7} + 2\left(-\tfrac{13}{14}\right) - 3\left(\tfrac27\right) + 1 = \tfrac{12}{7} - \tfrac{13}{7} - \tfrac{6}{7} + 1 = -\tfrac{7}{7} + 1 = 0$ ✓.</p>
        <div class="note"><b class="lbl">Control rápido del coeficiente</b> El coeficiente de $\lambda$ en la cuenta tiene que ser $\vec u \cdot \vec n$, y en efecto salió $-14$. Si no coincide con el chequeo previo, hay un error de signo en el desarrollo.</div>`,
        resultado: tex`Un punto: $\left(\frac{12}{7},\, -\frac{13}{14},\, \frac{2}{7}\right)$.` },

      { id: 'tp3-13b', rot: 'b', enunciado: tex`$L: x = y = z$; $\;\pi: 3x - y + z - 6 = 0$`,
        conceptos: ['u3-pertenencia'],
        resolucion: tex`<p>$L: x = y = z$ es la recta por el origen de director $\vec u = (1,1,1)$: su punto genérico es $(\lambda, \lambda, \lambda)$.</p>
        <p><strong>Chequeo previo:</strong> $\;\vec u \cdot \vec n = (1,1,1)\cdot(3,-1,1) = 3 - 1 + 1 = 3 \neq 0$ ⇒ se cortan en un punto.</p>
        <div class="fx center">$$3\lambda - \lambda + \lambda - 6 = 3\lambda - 6 = 0 \;\Longrightarrow\; \lambda = 2$$</div>
        <div class="fx center">$$L \cap \pi = \{(2,\,2,\,2)\}$$</div>
        <p><strong>Verificación.</strong> $\;3(2) - 2 + 2 - 6 = 6 - 2 + 2 - 6 = 0$ ✓.</p>`,
        resultado: tex`Un punto: $(2,2,2)$.` }
    ]},

  /* ========================= 14 ========================= */
  { id: 'tp3-14', num: '14',
    enunciado: tex`<p>Hallar la <strong>distancia</strong>:</p>`,
    incisos: [

      { id: 'tp3-14a', rot: 'a', enunciado: tex`del punto $(2,-1,3)$ al plano $\pi: -4x - y + 8z + 2 = 0$`,
        conceptos: ['u3-dist-punto-plano'],
        resolucion: tex`<p>Por [[u3-dist-punto-plano]], con $\vec n = (-4,-1,8)$ y $\|\vec n\| = \sqrt{16+1+64} = \sqrt{81} = 9$:</p>
        <div class="fx center">$$d = \frac{|-4(2) - (-1) + 8(3) + 2|}{9} = \frac{|-8 + 1 + 24 + 2|}{9} = \frac{19}{9} \approx 2{,}11$$</div>
        <div class="note"><b class="lbl">Suerte con los números</b> $\|\vec n\| = 9$ sale exacto, lo que casi nunca pasa. Conviene calcular siempre el módulo del normal <em>antes</em> de arrancar: si da entero, el resultado va a quedar como fracción simple.</div>`,
        resultado: tex`$d = \frac{19}{9} \approx 2{,}11$` },

      { id: 'tp3-14b', rot: 'b', enunciado: tex`del origen al plano $\pi: 2x + 3y - z = 6$`,
        conceptos: ['u3-dist-punto-plano'],
        pista: tex`Pasá primero la ecuación a la forma igualada a cero.`,
        resolucion: tex`<p>Primero se iguala a cero: $\;2x + 3y - z - 6 = 0$. Con $\vec n = (2,3,-1)$ y $\|\vec n\| = \sqrt{4+9+1} = \sqrt{14}$, y el punto $(0,0,0)$:</p>
        <div class="fx center">$$d = \frac{|2(0) + 3(0) - 0 - 6|}{\sqrt{14}} = \frac{6}{\sqrt{14}} = \frac{6\sqrt{14}}{14} = \frac{3\sqrt{14}}{7} \approx 1{,}60$$</div>
        <div class="note tip"><b class="lbl">Atajo para el origen</b> Al evaluar en $(0,0,0)$ sólo sobrevive el término independiente, así que la distancia del origen a un plano es siempre $\dfrac{|d|}{\|\vec n\|}$. El paso que no se puede saltear es <strong>igualar a cero primero</strong>: si se usa el $6$ del miembro derecho sin pasarlo, el signo queda bien por el valor absoluto, pero es fácil olvidar el término y dar $0$.</div>`,
        resultado: tex`$d = \frac{6}{\sqrt{14}} = \frac{3\sqrt{14}}{7} \approx 1{,}60$` },

      { id: 'tp3-14c', rot: 'c', enunciado: tex`del punto $(2,5,1)$ a la recta $L: x - 3 = \dfrac{y+2}{-1} = z$`,
        conceptos: ['u3-dist-punto-recta', 'u1-producto-vectorial'],
        pista: tex`Fórmula del producto vectorial. Si además querés el punto más próximo, hay un segundo camino.`,
        resolucion: tex`<p>De la cartesiana (los denominadores omitidos son $1$): $P_1 = (3,-2,0)$ y $\vec u = (1,-1,1)$. El punto exterior es $P_0 = (2,5,1)$.</p>
        <ol class="pasos">
          <li><span class="ptit">Vector punto-a-recta.</span> $\;\overrightarrow{P_1P_0} = (2,5,1) - (3,-2,0) = (-1,\,7,\,1)$.</li>
          <li><span class="ptit">Producto vectorial.</span>
            $$\overrightarrow{P_1P_0} \times \vec u = \begin{vmatrix} \breve i & \breve j & \breve k \\ -1 & 7 & 1 \\ 1 & -1 & 1 \end{vmatrix}
            = \breve i(7+1) - \breve j(-1-1) + \breve k(1-7) = (8,\, 2,\, -6)$$</li>
          <li><span class="ptit">Aplicar [[u3-dist-punto-recta]].</span>
            $$\left\| \overrightarrow{P_1P_0} \times \vec u \right\| = \sqrt{64 + 4 + 36} = \sqrt{104} = 2\sqrt{26}, \qquad \|\vec u\| = \sqrt{3}$$
            $$d = \frac{2\sqrt{26}}{\sqrt{3}} = \frac{2\sqrt{78}}{3} \approx 5{,}89$$</li>
        </ol>
        <h3>Verificación por el otro camino (y el pie de la perpendicular)</h3>
        <p>El punto genérico de $L$ es $P(\lambda) = (3+\lambda,\; -2-\lambda,\; \lambda)$. Se impone que $\overrightarrow{P_0 P(\lambda)}$ sea perpendicular al director:</p>
        <div class="fx center">$$\overrightarrow{P_0 P(\lambda)} = (1+\lambda,\; -7-\lambda,\; \lambda-1)$$</div>
        <div class="fx center">$$\overrightarrow{P_0 P(\lambda)} \cdot \vec u = (1+\lambda) + (7+\lambda) + (\lambda-1) = 3\lambda + 7 = 0 \;\Longrightarrow\; \lambda = -\frac{7}{3}$$</div>
        <p>El <strong>pie de la perpendicular</strong> es entonces</p>
        <div class="fx center">$$P^* = \left( 3 - \tfrac73,\; -2 + \tfrac73,\; -\tfrac73 \right) = \left( \tfrac{2}{3},\; \tfrac{1}{3},\; -\tfrac{7}{3} \right)$$</div>
        <p>y su distancia a $P_0 = (2,5,1)$:</p>
        <div class="fx center">$$d^2 = \left(-\tfrac43\right)^2 + \left(-\tfrac{14}{3}\right)^2 + \left(-\tfrac{10}{3}\right)^2 = \frac{16 + 196 + 100}{9} = \frac{312}{9}$$</div>
        <div class="fx center">$$d = \frac{\sqrt{312}}{3} = \frac{2\sqrt{78}}{3} \;✓$$</div>
        <p>Coincide con la fórmula ($312 = 4 \cdot 78$).</p>
        <div class="note tip"><b class="lbl">Cuándo usar cada camino</b> La fórmula del producto vectorial es más corta si sólo piden la distancia. El segundo camino da más trabajo pero devuelve además el punto más próximo, que es lo que piden los parciales cuando dicen «hallar el o los puntos de la recta que se encuentren a menor distancia del punto $P$».</div>`,
        resultado: tex`$d = \frac{2\sqrt{26}}{\sqrt 3} = \frac{2\sqrt{78}}{3} \approx 5{,}89$. El punto más próximo de $L$ es $\left(\frac{2}{3}, \frac{1}{3}, -\frac{7}{3}\right)$.` }
    ]},

  /* ========================= 15 ========================= */
  { id: 'tp3-15', num: '15',
    enunciado: tex`<p>Escribir las ecuaciones de los siguientes planos:</p>
    <div class="note tip"><b class="lbl">Los dos incisos son el mismo problema</b> Normal conocido ⇒ el plano es $ax+by+cz+d=0$ con <strong>una sola incógnita</strong>, $d$. Se impone la distancia y el valor absoluto devuelve <strong>dos</strong> planos, uno a cada lado del punto.</div>`,
    incisos: [

      { id: 'tp3-15a', rot: 'a', enunciado: tex`paralelo al plano $4x - 3y + 1 = 0$ y tales que distan dos unidades del punto $(-1,3,5)$`,
        conceptos: ['u3-dist-resto', 'u3-dist-punto-plano', 'u3-teorema-4'],
        resolucion: tex`<p>Paralelo ⇒ mismo normal $\vec n = (4,-3,0)$, con $\|\vec n\| = \sqrt{16+9+0} = 5$. La familia es</p>
        <div class="fx center">$$\pi': 4x - 3y + d = 0$$</div>
        <p>Imponiendo $d(P, \pi') = 2$ con $P = (-1,3,5)$, por [[u3-dist-punto-plano]]:</p>
        <div class="fx center">$$\frac{|4(-1) - 3(3) + 0\cdot 5 + d|}{5} = \frac{|d - 13|}{5} = 2 \;\Longrightarrow\; |d - 13| = 10$$</div>
        <div class="fx center">$$d - 13 = 10 \;\text{ o }\; d - 13 = -10 \;\Longrightarrow\; d_1 = 23, \quad d_2 = 3$$</div>
        <div class="fx center">$$\pi_1: 4x - 3y + 23 = 0 \qquad\qquad \pi_2: 4x - 3y + 3 = 0$$</div>
        <p><strong>Verificación.</strong> $\;\dfrac{|23-13|}{5} = 2$ ✓ y $\dfrac{|3-13|}{5} = 2$ ✓.</p>
        <div class="note"><b class="lbl">La coordenada $z$ no interviene</b> Como el normal tiene tercera componente nula, el plano es paralelo al eje $Z$ y el valor $z = 5$ del punto no afecta la cuenta. Conviene escribir el $0 \cdot 5$ explícitamente la primera vez para no sospechar que se olvidó un término.</div>`,
        resultado: tex`$4x - 3y + 23 = 0$ y $4x - 3y + 3 = 0$.` },

      { id: 'tp3-15b', rot: 'b', enunciado: tex`normal al vector $(0,2,1)$ y tales que distan media unidad del punto $(1,-2,1)$`,
        conceptos: ['u3-dist-punto-plano', 'u3-plano-implicita'],
        resolucion: tex`<p>Normal $\vec n = (0,2,1)$ ⇒ los planos son $\;2y + z + d = 0$, con $\|\vec n\| = \sqrt{0+4+1} = \sqrt5$.</p>
        <p>Imponiendo $d(P,\pi) = \tfrac12$ con $P = (1,-2,1)$:</p>
        <div class="fx center">$$\frac{|2(-2) + 1 + d|}{\sqrt{5}} = \frac{|d - 3|}{\sqrt{5}} = \frac{1}{2} \;\Longrightarrow\; |d-3| = \frac{\sqrt{5}}{2}$$</div>
        <div class="fx center">$$d = 3 \pm \frac{\sqrt{5}}{2}$$</div>
        <div class="fx center">$$\pi_1: 2y + z + 3 + \frac{\sqrt5}{2} = 0 \qquad\qquad \pi_2: 2y + z + 3 - \frac{\sqrt5}{2} = 0$$</div>
        <p>O, multiplicando todo por 2 para sacar la fracción:</p>
        <div class="fx center">$$4y + 2z + 6 + \sqrt{5} = 0 \qquad\qquad 4y + 2z + 6 - \sqrt{5} = 0$$</div>
        <p><strong>Verificación numérica.</strong> $\sqrt5/2 \approx 1{,}118$, así que $d_1 \approx 4{,}118$ y $d_2 \approx 1{,}882$. En ambos casos $\dfrac{|d-3|}{\sqrt5} = \dfrac{1{,}118}{2{,}236} = 0{,}5$ ✓.</p>
        <div class="note"><b class="lbl">El resultado es irracional y está bien</b> Al pedir una distancia que no es múltiplo de $\|\vec n\|$ aparece la raíz. No hay que forzar un número «lindo»: conviene dejarlo exacto como $3 \pm \tfrac{\sqrt5}{2}$ y dar el decimal al lado.</div>`,
        resultado: tex`$2y + z + 3 \pm \frac{\sqrt{5}}{2} = 0$, es decir $4y + 2z + 6 \pm \sqrt{5} = 0$.` }
    ]},

  /* ========================= 16 ========================= */
  { id: 'tp3-16', num: '16',
    enunciado: tex`<p>Dadas las rectas
    $L_1: \begin{cases} x + 2y = 0 \\ -2y + z = -5 \end{cases}$,
    $L_2: \begin{cases} 3x + 5y = -2 \\ y = 2 \end{cases}$ y
    $L_3: \begin{cases} x + z = 0 \\ x + 4y - z = 0 \end{cases}$, hallar, si es posible, la ecuación de:</p>
    <div class="note tip"><b class="lbl">Trabajo común: punto y director de cada recta</b>
    <p><strong>$L_1$:</strong> $\;\vec u_1 = (1,2,0) \times (0,-2,1) = (2,-1,-2)$. Con $y = 0$: $x = 0$ y $z = -5$, luego $P_1 = (0,0,-5)$. Genérico: $(2\lambda,\, -\lambda,\, -5-2\lambda)$.</p>
    <p><strong>$L_2$:</strong> de $y = 2$ y $3x + 10 = -2$ sale $x = -4$, y $z$ queda libre. Es la recta <strong>vertical</strong> $x=-4$, $y=2$: $\;\vec u_2 = (0,0,1)$, $P_2 = (-4,2,0)$.</p>
    <p><strong>$L_3$:</strong> $\;\vec u_3 = (1,0,1) \times (1,4,-1) = (-4,2,4) \sim (-2,1,2)$. Con $x=0$: $z=0$ y $y=0$, luego $P_3 = (0,0,0)$. Genérico: $(-2\lambda,\, \lambda,\, 2\lambda)$.</p></div>`,
    incisos: [

      { id: 'tp3-16a', rot: 'a', enunciado: tex`un plano que contenga a $L_1$ y $L_3$`,
        conceptos: ['u3-teorema-7', 'u3-normal-desde-directores', 'u3-recta-interseccion'],
        pista: tex`Compará los directores antes de calcular nada más.`,
        resolucion: tex`<p><strong>Paso 1 — posición relativa.</strong> $\;\vec u_1 = (2,-1,-2)$ y $\vec u_3 = (-2,1,2) = -\,\vec u_1$: son <strong>paralelas</strong> ([[u3-teorema-2-3]]).</p>
        <p>¿Son la misma recta? $P_3 = (0,0,0)$ cumple la primera ecuación de $L_1$ ($0+0=0$ ✓) pero no la segunda ($-0+0 = 0 \neq -5$). Luego son <strong>paralelas distintas</strong>, y por lo tanto <strong>sí</strong> determinan un único plano.</p>
        <p><strong>Paso 2 — el plano.</strong> Contiene la dirección común y el vector que une un punto de cada una:</p>
        <div class="fx center">$$\overrightarrow{P_1P_3} = (0,0,0) - (0,0,-5) = (0,0,5) \;\sim\; (0,0,1)$$</div>
        <div class="fx center">$$\vec n = \vec u_1 \times (0,0,1) = \begin{vmatrix} \breve i & \breve j & \breve k \\ 2 & -1 & -2 \\ 0 & 0 & 1 \end{vmatrix}
        = \breve i(-1 - 0) - \breve j(2 - 0) + \breve k(0 - 0) = (-1,\, -2,\, 0)$$</div>
        <p>Simplificando el signo, $\vec n = (1,2,0)$. Por $P_3 = (0,0,0)$ resulta $d = 0$:</p>
        <div class="fx center">$$\pi: x + 2y = 0$$</div>
        <p><strong>Verificaciones.</strong> $P_1 = (0,0,-5)$: $0+0 = 0$ ✓. Los genéricos: $L_1 \Rightarrow 2\lambda + 2(-\lambda) = 0$ ✓; $L_3 \Rightarrow -2\lambda + 2\lambda = 0$ ✓. Las dos rectas enteras están en $\pi$.</p>
        <div class="note"><b class="lbl">No es casualidad que coincida con un dato</b> El plano hallado es exactamente la <strong>primera ecuación de $L_1$</strong> del enunciado. Tiene sentido: ese plano contiene a $L_1$ por definición, y resulta que también contiene a $L_3$. Cuando el resultado coincide con uno de los planos dados, es señal de que la cuenta fue bien.</div>`,
        resultado: tex`$\pi: x + 2y = 0$ (las rectas son paralelas distintas, así que el plano existe y es único).` },

      { id: 'tp3-16b', rot: 'b', enunciado: tex`un plano que contenga a $L_2$ y $L_3$`,
        conceptos: ['u3-teorema-7', 'u3-alabeadas', 'u3-normal-desde-directores'],
        pista: tex`Acá los directores no son paralelos, así que hay que usar el [[u3-teorema-7]] para ver si son coplanares antes de buscar el plano.`,
        resolucion: tex`<p><strong>Paso 1 — posición relativa.</strong> $\;\vec u_2 = (0,0,1)$ y $\vec u_3 = (-2,1,2)$ no son paralelos:</p>
        <div class="fx center">$$\vec u_2 \times \vec u_3 = \begin{vmatrix} \breve i & \breve j & \breve k \\ 0 & 0 & 1 \\ -2 & 1 & 2 \end{vmatrix}
        = \breve i(0-1) - \breve j(0+2) + \breve k(0-0) = (-1,\, -2,\, 0) \neq \vec 0$$</div>
        <p>Entonces hay que decidir entre <strong>incidentes</strong> y <strong>alabeadas</strong>, y eso lo dice el producto mixto ([[u3-teorema-7]]). Con $\overrightarrow{P_2P_3} = (0,0,0) - (-4,2,0) = (4,-2,0)$:</p>
        <div class="fx center">$$\overrightarrow{P_2P_3} \cdot (\vec u_2 \times \vec u_3) = (4,-2,0)\cdot(-1,-2,0) = -4 + 4 + 0 = 0$$</div>
        <p>Da <strong>cero</strong>: las rectas son <strong>coplanares e incidentes</strong>, así que el plano existe (y es único).</p>
        <p><strong>Paso 2 — el plano.</strong> $\vec n = \vec u_2 \times \vec u_3 = (-1,-2,0) \sim (1,2,0)$. Por $P_3 = (0,0,0)$:</p>
        <div class="fx center">$$\pi: x + 2y = 0$$</div>
        <div class="note tip"><b class="lbl">El mismo plano que en a)</b>
        No es un error: las <strong>tres</strong> rectas están en $x + 2y = 0$. Se verifica en los genéricos: $L_2$ es $(-4,2,t)$ y da $-4+4 = 0$ ✓ para todo $t$. Como $L_1 \parallel L_3$ y $L_2$ corta a $L_3$, las tres son coplanares, y el plano que contiene a dos cualesquiera de ellas es el mismo.</div>
        <p><strong>Dato extra.</strong> El punto donde se cortan $L_2$ y $L_3$ sale de igualar los genéricos: $(-4,2,t) = (-2\lambda, \lambda, 2\lambda)$ da $\lambda = 2$, luego $-2\lambda = -4$ ✓ y $t = 2\lambda = 4$:</p>
        <div class="fx center">$$L_2 \cap L_3 = \{(-4,\, 2,\, 4)\}$$</div>
        <p>Control en las ecuaciones de $L_3$: $\;-4+4 = 0$ ✓ y $-4 + 8 - 4 = 0$ ✓.</p>`,
        resultado: tex`$\pi: x + 2y = 0$ — el mismo que en a). Son incidentes, y se cortan en $(-4,2,4)$.` }
    ]},

  /* ========================= 17 ========================= */
  { id: 'tp3-17', num: '17',
    enunciado: tex`<p>Dadas las rectas
    $L_1: \begin{cases} 2x - y + z = 0 \\ x - 2y + z = 1 \end{cases}$,
    $L_2: \begin{cases} x - z = 0 \\ 2y = 0 \end{cases}$,
    $L_3: \begin{cases} 2x - 2z + 1 = 0 \\ y = 0 \end{cases}$ y
    $L_4: \dfrac{x-1}{-1} = y + 2 = \dfrac{z}{3}$,</p>
    <p>analizar si son <strong>paralelas o alabeadas</strong>, hallar su distancia y, si son incidentes, hallar su punto de intersección:</p>
    <div class="note tip"><b class="lbl">Trabajo común: punto y director</b>
    <p><strong>$L_1$:</strong> $\;\vec u_1 = (2,-1,1) \times (1,-2,1) = (1,-1,-3)$. Con $z=0$: $2x-y=0$ y $x-2y=1$ dan $x=-\tfrac13$, $y=-\tfrac23$. Luego $P_1 = \left(-\tfrac13, -\tfrac23, 0\right)$.</p>
    <p><strong>$L_2$:</strong> $y=0$ y $x=z$. $\;\vec u_2 = (1,0,1)$, $P_2 = (0,0,0)$.</p>
    <p><strong>$L_3$:</strong> $y=0$ y $x - z = -\tfrac12$. $\;\vec u_3 = (1,0,1)$, $P_3 = \left(-\tfrac12, 0, 0\right)$. Notar que $\vec u_3 = \vec u_2$: <strong>$L_2 \parallel L_3$</strong>.</p>
    <p><strong>$L_4$:</strong> $\;P_4 = (1,-2,0)$, $\vec u_4 = (-1,1,3)$. Notar que $\vec u_4 = -\vec u_1$: <strong>$L_1 \parallel L_4$</strong>.</p>
    <p>El criterio en los tres incisos es el [[u3-teorema-7|Teorema 7]].</p></div>`,
    incisos: [

      { id: 'tp3-17a', rot: 'a', enunciado: tex`$L_1$ y $L_2$`,
        conceptos: ['u3-teorema-7', 'u3-dist-rectas-alabeadas', 'u3-alabeadas'],
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">¿Paralelas?</span>
            $$\vec u_1 \times \vec u_2 = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & -1 & -3 \\ 1 & 0 & 1 \end{vmatrix}
            = \breve i(-1-0) - \breve j(1+3) + \breve k(0+1) = (-1,\, -4,\, 1) \neq \vec 0$$
            No son paralelas.</li>
          <li><span class="ptit">¿Incidentes o alabeadas?</span> Con $\overrightarrow{P_1P_2} = (0,0,0) - \left(-\tfrac13,-\tfrac23,0\right) = \left(\tfrac13, \tfrac23, 0\right)$:
            $$\overrightarrow{P_1P_2} \cdot (\vec u_1 \times \vec u_2) = \tfrac13(-1) + \tfrac23(-4) + 0 = -\tfrac13 - \tfrac83 = -3 \neq 0$$
            Producto mixto no nulo ⇒ <strong>ALABEADAS</strong>.</li>
          <li><span class="ptit">Distancia</span> por [[u3-dist-rectas-alabeadas]]:
            $$\left\| \vec u_1 \times \vec u_2 \right\| = \sqrt{1 + 16 + 1} = \sqrt{18} = 3\sqrt2$$
            $$d = \frac{|-3|}{3\sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} \approx 0{,}707$$</li>
        </ol>
        <p>Como son alabeadas, <strong>no hay punto de intersección</strong>.</p>`,
        resultado: tex`<strong>Alabeadas.</strong> $d(L_1,L_2) = \frac{\sqrt{2}}{2} \approx 0{,}71$. No se cortan.` },

      { id: 'tp3-17b', rot: 'b', enunciado: tex`$L_1$ y $L_4$`,
        conceptos: ['u3-teorema-7', 'u3-dist-rectas-alabeadas', 'u3-dist-punto-recta'],
        pista: tex`Mirá los directores: si son paralelas, la fórmula del producto mixto <strong>no sirve</strong> y hay que usar otra.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">¿Paralelas?</span> $\;\vec u_4 = (-1,1,3) = -\,(1,-1,-3) = -\,\vec u_1$. Son <strong>paralelas</strong>, y entonces $\vec u_1 \times \vec u_4 = \vec 0$: el criterio del producto mixto no se aplica.</li>
          <li><span class="ptit">¿Coincidentes o distintas?</span> ¿Está $P_4 = (1,-2,0)$ en $L_1$? En la primera ecuación: $2(1) - (-2) + 0 = 4 \neq 0$. No pertenece, así que son <strong>paralelas distintas</strong>.</li>
          <li><span class="ptit">Distancia.</span> Para rectas paralelas se mide la distancia de un punto de una a la otra recta ([[u3-dist-resto]]), con la fórmula de [[u3-dist-punto-recta]]:
            $$\overrightarrow{P_1P_4} = (1,-2,0) - \left(-\tfrac13, -\tfrac23, 0\right) = \left(\tfrac43,\; -\tfrac43,\; 0\right)$$
            $$\overrightarrow{P_1P_4} \times \vec u_1 = \begin{vmatrix} \breve i & \breve j & \breve k \\ \tfrac43 & -\tfrac43 & 0 \\ 1 & -1 & -3 \end{vmatrix}
            = \breve i\left(4 - 0\right) - \breve j\left(-4 - 0\right) + \breve k\left(-\tfrac43 + \tfrac43\right) = (4,\, 4,\, 0)$$
            $$\left\| \overrightarrow{P_1P_4} \times \vec u_1 \right\| = \sqrt{32} = 4\sqrt{2}, \qquad \|\vec u_1\| = \sqrt{1+1+9} = \sqrt{11}$$
            $$d = \frac{4\sqrt{2}}{\sqrt{11}} = \frac{4\sqrt{22}}{11} \approx 1{,}71$$</li>
        </ol>
        <p>No son incidentes (son paralelas distintas), así que no hay punto de intersección.</p>
        <div class="note warn"><b class="lbl">El error que acecha en este inciso</b>
        Aplicar la fórmula de distancia entre alabeadas cuando las rectas son paralelas da $\tfrac{0}{0}$: el producto vectorial del denominador se anula. Por eso el <strong>primer</strong> paso siempre es comparar los directores, y sólo después elegir la fórmula. Ver la observación en [[u3-dist-rectas-alabeadas]].</div>`,
        resultado: tex`<strong>Paralelas distintas.</strong> $d(L_1,L_4) = \frac{4\sqrt{2}}{\sqrt{11}} = \frac{4\sqrt{22}}{11} \approx 1{,}71$. No se cortan.` },

      { id: 'tp3-17c', rot: 'c', enunciado: tex`$L_3$ y $L_4$`,
        conceptos: ['u3-teorema-7', 'u3-dist-rectas-alabeadas'],
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">¿Paralelas?</span> $\;\vec u_3 = (1,0,1)$ y $\vec u_4 = (-1,1,3)$:
            $$\vec u_3 \times \vec u_4 = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & 0 & 1 \\ -1 & 1 & 3 \end{vmatrix}
            = \breve i(0-1) - \breve j(3+1) + \breve k(1-0) = (-1,\, -4,\, 1) \neq \vec 0$$
            No son paralelas. (Da el mismo vector que en el inciso a), porque $\vec u_3 = \vec u_2$ y $\vec u_4 \parallel \vec u_1$.)</li>
          <li><span class="ptit">¿Incidentes o alabeadas?</span> Con $\overrightarrow{P_3P_4} = (1,-2,0) - \left(-\tfrac12, 0, 0\right) = \left(\tfrac32,\, -2,\, 0\right)$:
            $$\overrightarrow{P_3P_4} \cdot (\vec u_3 \times \vec u_4) = \tfrac32(-1) + (-2)(-4) + 0 = -\tfrac32 + 8 = \frac{13}{2} \neq 0$$
            <strong>ALABEADAS</strong>.</li>
          <li><span class="ptit">Distancia.</span>
            $$d = \frac{\left|\tfrac{13}{2}\right|}{\sqrt{18}} = \frac{13/2}{3\sqrt{2}} = \frac{13}{6\sqrt{2}} = \frac{13\sqrt{2}}{12} \approx 1{,}53$$</li>
        </ol>
        <p>No hay punto de intersección.</p>
        <div class="note tip"><b class="lbl">Resumen de los tres incisos</b>
        <div class="tbl"><table>
          <thead><tr><th>Par</th><th>$\vec u \times \vec u'$</th><th>Producto mixto</th><th>Posición</th><th>Distancia</th></tr></thead>
          <tbody>
            <tr><td>$L_1, L_2$</td><td>$(-1,-4,1)$</td><td>$-3$</td><td>alabeadas</td><td>$\tfrac{\sqrt2}{2} \approx 0{,}71$</td></tr>
            <tr><td>$L_1, L_4$</td><td>$\vec 0$</td><td>—</td><td>paralelas distintas</td><td>$\tfrac{4\sqrt{22}}{11} \approx 1{,}71$</td></tr>
            <tr><td>$L_3, L_4$</td><td>$(-1,-4,1)$</td><td>$\tfrac{13}{2}$</td><td>alabeadas</td><td>$\tfrac{13\sqrt2}{12} \approx 1{,}53$</td></tr>
          </tbody>
        </table></div>
        Ninguno de los tres pares es incidente, así que en este ejercicio no hay ningún punto de intersección que calcular.</div>`,
        resultado: tex`<strong>Alabeadas.</strong> $d(L_3,L_4) = \frac{13\sqrt{2}}{12} \approx 1{,}53$. No se cortan.` }
    ]},

  /* ========================= 18 ========================= */
  { id: 'tp3-18', num: '18',
    enunciado: tex`<p>Dadas las rectas $L_1: \begin{cases} 2x + z = 1 \\ x + y = 0 \end{cases}$ y $L_2: \begin{cases} 4x + y + z = 1 \\ x - z = 2 \end{cases}$,
    hallar la ecuación de un plano tal que $(1,2,3)$ pertenezca a dicho plano y éste sea paralelo a $L_1$ y $L_2$. ¿Son incidentes $L_1$ y $L_2$?</p>`,
    conceptos: ['u3-teorema-5-6', 'u3-normal-desde-directores', 'u3-teorema-7'],
    pista: tex`Un plano paralelo a dos direcciones no paralelas tiene su normal determinado: es el producto vectorial de los dos directores.`,
    resolucion: tex`<h3>Paso 1 — Punto y director de cada recta</h3>
    <p><strong>$L_1$:</strong> normales $(2,0,1)$ y $(1,1,0)$.</p>
    <div class="fx center">$$\vec u_1 = (2,0,1) \times (1,1,0) = \breve i(0-1) - \breve j(0-1) + \breve k(2-0) = (-1,\, 1,\, 2)$$</div>
    <p>Con $x = 0$: $z = 1$ y $y = 0$, luego $P_1 = (0,0,1)$. Genérico: $(-\lambda,\; \lambda,\; 1+2\lambda)$.</p>
    <p><strong>$L_2$:</strong> normales $(4,1,1)$ y $(1,0,-1)$.</p>
    <div class="fx center">$$\vec u_2 = (4,1,1) \times (1,0,-1) = \breve i(-1-0) - \breve j(-4-1) + \breve k(0-1) = (-1,\, 5,\, -1)$$</div>
    <p>Con $z = 0$: $x = 2$ y $4(2) + y = 1 \Rightarrow y = -7$, luego $P_2 = (2,-7,0)$. Genérico: $(2-t,\; -7+5t,\; -t)$.</p>
    <p>Control de $L_2$: la 1.ª ecuación da $4(2-t) + (-7+5t) + (-t) = 1 + 0t = 1$ ✓; la 2.ª, $(2-t) - (-t) = 2$ ✓.</p>

    <h3>Paso 2 — El plano</h3>
    <p>Por el [[u3-teorema-5-6|Teorema 5]], el plano es paralelo a cada recta cuando su normal es ortogonal a cada director. Como $\vec u_1$ y $\vec u_2$ no son paralelos, esas dos condiciones determinan el normal ([[u3-normal-desde-directores]]):</p>
    <div class="fx center">$$\vec n = \vec u_1 \times \vec u_2 = \begin{vmatrix} \breve i & \breve j & \breve k \\ -1 & 1 & 2 \\ -1 & 5 & -1 \end{vmatrix}
    = \breve i(-1-10) - \breve j(1+2) + \breve k(-5+1) = (-11,\, -3,\, -4)$$</div>
    <p>Cambiando el signo: $\vec n = (11, 3, 4)$. El plano es $11x + 3y + 4z + d = 0$, y con $(1,2,3)$:</p>
    <div class="fx center">$$11 + 6 + 12 + d = 0 \;\Longrightarrow\; d = -29$$</div>
    <div class="fx center">$$\pi: 11x + 3y + 4z - 29 = 0$$</div>
    <p><strong>Verificaciones.</strong> El punto: $11+6+12-29 = 0$ ✓. Paralelismo: $\vec n \cdot \vec u_1 = -11 + 3 + 8 = 0$ ✓ y $\vec n \cdot \vec u_2 = -11 + 15 - 4 = 0$ ✓.</p>
    <p>Y hay que chequear que sea <em>paralelo</em> y no que <em>contenga</em> a alguna de las rectas: $P_1 = (0,0,1)$ da $0+0+4-29 = -25 \neq 0$ ✓, y $P_2 = (2,-7,0)$ da $22-21-29 = -28 \neq 0$ ✓. Ninguna está contenida.</p>

    <h3>Paso 3 — ¿Son incidentes $L_1$ y $L_2$?</h3>
    <p>Por el [[u3-teorema-7|Teorema 7]]. Ya se sabe que $\vec u_1 \times \vec u_2 = (-11,-3,-4) \neq \vec 0$, así que no son paralelas. Queda el producto mixto, con $\overrightarrow{P_1P_2} = (2,-7,0) - (0,0,1) = (2,-7,-1)$:</p>
    <div class="fx center">$$\overrightarrow{P_1P_2} \cdot (\vec u_1 \times \vec u_2) = (2,-7,-1)\cdot(-11,-3,-4) = -22 + 21 + 4 = 3 \neq 0$$</div>
    <div class="note warn"><b class="lbl">No son incidentes: son alabeadas</b>
    El producto mixto no se anula, así que las rectas no son coplanares. Su distancia es
    $$d(L_1,L_2) = \frac{|3|}{\|(-11,-3,-4)\|} = \frac{3}{\sqrt{121+9+16}} = \frac{3}{\sqrt{146}} \approx 0{,}248$$</div>
    <div class="note tip"><b class="lbl">Por qué el plano existe igual</b>
    Que las rectas sean alabeadas no impide que exista un plano paralelo a las dos: el plano sólo necesita contener ambas <em>direcciones</em>, no las rectas. De hecho hay toda una familia de planos paralelos a $L_1$ y $L_2$ (uno por cada valor de $d$), y el dato $(1,2,3)$ selecciona exactamente uno. Lo que <strong>no</strong> existiría, si fueran alabeadas, es un plano que las <em>contenga</em> a las dos — que es el pedido del ejercicio 16.</div>`,
    resultado: tex`$\pi: 11x + 3y + 4z - 29 = 0$. &nbsp; $L_1$ y $L_2$ <strong>no son incidentes: son alabeadas</strong>, a distancia $\frac{3}{\sqrt{146}} \approx 0{,}25$.` },

  /* ========================= 19 ========================= */
  { id: 'tp3-19', num: '19',
    enunciado: tex`<p>Sea el plano de ecuación $y = 0$, el punto $P = (2,3,1)$ y las rectas</p>
    <div class="fx center">$$L_1: \begin{cases} x = \tfrac{5}{2} \\ y = -5 + 5\lambda \\ z = -5 \end{cases} \qquad
    L_2: \begin{cases} x = 1 + \lambda \\ y = \lambda \\ z = -1 - \lambda \end{cases} \qquad
    L_3: \begin{cases} x = 1 - 2\lambda \\ y = -1 + \lambda \\ z = 2 + \lambda \end{cases}$$</div>
    <div class="note tip"><b class="lbl">Datos de cada recta</b>
    $L_1$: punto $\left(\tfrac52, -5, -5\right)$, director $(0,5,0) \sim (0,1,0)$. &nbsp;
    $L_2$: punto $(1,0,-1)$, director $(1,1,-1)$. &nbsp;
    $L_3$: punto $(1,-1,2)$, director $(-2,1,1)$.
    <p>El plano $y = 0$ es el plano coordenado $XZ$, de normal $\vec n = (0,1,0)$.</p></div>`,
    incisos: [

      { id: 'tp3-19a', rot: 'a', enunciado: tex`Hallar las proyecciones de $P$, $L_1$ y $L_2$ sobre el plano dado.`,
        conceptos: ['u3-proy-punto-plano', 'u3-proy-recta-plano'],
        pista: tex`Mirá el director de $L_1$ comparado con el normal del plano antes de proyectar: hay un caso particular escondido.`,
        resolucion: tex`<p>El enunciado no aclara dirección, así que se entiende <strong>proyección ortogonal</strong> ([[u1-proyeccion-geom]]).</p>

        <h3>Proyección de $P = (2,3,1)$</h3>
        <p>Por [[u3-proy-punto-plano]]: recta auxiliar por $P$ con director $\vec n = (0,1,0)$, es decir $(2,\; 3+t,\; 1)$. Se interseca con $y=0$:</p>
        <div class="fx center">$$3 + t = 0 \;\Longrightarrow\; t = -3 \;\Longrightarrow\; P' = (2,\, 0,\, 1)$$</div>
        <div class="note"><b class="lbl">Regla práctica</b> Proyectar ortogonalmente sobre el plano coordenado $y=0$ es simplemente <strong>anular la coordenada $y$</strong>. Conviene hacer la cuenta completa la primera vez y después usar el atajo.</div>

        <h3>Proyección de $L_1$ — el caso particular</h3>
        <p>El director de $L_1$ es $(0,1,0)$, que es <strong>exactamente el normal del plano</strong>. Entonces $L_1$ es <strong>perpendicular</strong> al plano $y=0$ ([[u3-teorema-5-6]]), y su proyección <strong>no es una recta sino un único punto</strong>: el punto donde lo atraviesa.</p>
        <div class="fx center">$$y = -5 + 5\lambda = 0 \;\Longrightarrow\; \lambda = 1 \;\Longrightarrow\; \operatorname{proy}(L_1) = \left\{ \left( \tfrac{5}{2},\; 0,\; -5 \right) \right\}$$</div>
        <p>(Las coordenadas $x = \tfrac52$ y $z = -5$ son constantes a lo largo de $L_1$.)</p>
        <div class="note warn"><b class="lbl">Esto es lo que evalúa el inciso</b> Dar «una recta» como proyección de $L_1$ es el error esperado. Una recta perpendicular al plano se proyecta en un punto; ver el caso particular señalado en [[u3-proy-recta-plano]].</div>

        <h3>Proyección de $L_2$</h3>
        <p>Director $(1,1,-1)$: no es paralelo a $\vec n$, así que la proyección sí es una recta. Se proyectan dos puntos ([[u3-proy-recta-plano]], camino 1):</p>
        <div class="fx center">$$\lambda = 0: \;(1,0,-1) \;\longrightarrow\; (1,0,-1) \quad \text{(ya está en el plano)}$$</div>
        <div class="fx center">$$\lambda = 1: \;(2,1,-2) \;\longrightarrow\; (2,0,-2)$$</div>
        <p>Director de la proyección: $(2,0,-2) - (1,0,-1) = (1,0,-1)$.</p>
        <div class="fx center">$$\operatorname{proy}(L_2): (x,y,z) = (1,0,-1) + t\,(1,0,-1), \qquad\text{o bien}\qquad \begin{cases} y = 0 \\ x + z = 0 \end{cases}$$</div>
        <p><strong>Verificación.</strong> El punto genérico $(1+t,\, 0,\, -1-t)$ cumple $x + z = (1+t) + (-1-t) = 0$ ✓. Y el punto $(1,0,-1)$, que es $L_2 \cap \{y=0\}$ (en $\lambda = 0$), pertenece a la proyección ✓ — como tiene que ser: los puntos donde la recta corta al plano quedan fijos al proyectar.</p>`,
        resultado: tex`$P' = (2,0,1)$. &nbsp; $\operatorname{proy}(L_1) = \left\{\left(\frac52, 0, -5\right)\right\}$, <strong>un punto</strong>, porque $L_1 \perp$ al plano. &nbsp; $\operatorname{proy}(L_2) = \{y=0;\; x+z=0\}$.` },

      { id: 'tp3-19b', rot: 'b', enunciado: tex`Hallar la proyección ortogonal de $L_3$ sobre el plano $\pi: x + y = 0$.`,
        conceptos: ['u3-proy-recta-plano'],
        pista: tex`Acá el plano ya no es coordenado, así que no hay atajo. El camino del «plano proyectante» es el más limpio.`,
        resolucion: tex`<p>$L_3$: punto $Q = (1,-1,2)$, director $\vec v = (-2,1,1)$. Plano $\pi: x+y=0$, normal $\vec n = (1,1,0)$.</p>
        <p><strong>Chequeos previos.</strong> $\vec v \cdot \vec n = -2 + 1 + 0 = -1 \neq 0$, así que $L_3$ atraviesa el plano (no es paralela). Y $\vec v$ no es paralelo a $\vec n$, así que tampoco es perpendicular al plano: la proyección <strong>es una recta</strong>.</p>

        <h3>Camino del plano proyectante</h3>
        <p>Se construye el plano $\sigma$ que contiene a $L_3$ y es perpendicular a $\pi$. Su normal es ([[u3-proy-recta-plano]], camino 2):</p>
        <div class="fx center">$$\vec n_\sigma = \vec v \times \vec n = \begin{vmatrix} \breve i & \breve j & \breve k \\ -2 & 1 & 1 \\ 1 & 1 & 0 \end{vmatrix}
        = \breve i(0-1) - \breve j(0-1) + \breve k(-2-1) = (-1,\, 1,\, -3)$$</div>
        <p>Cambiando el signo, $\vec n_\sigma = (1,-1,3)$, y por $Q = (1,-1,2)$: $\;1 + 1 + 6 + d = 0 \Rightarrow d = -8$.</p>
        <div class="fx center">$$\sigma: x - y + 3z - 8 = 0$$</div>
        <p>Control: $Q$ da $1+1+6-8=0$ ✓, y $\vec n_\sigma \cdot \vec v = -2 - 1 + 3 = 0$ ✓ (contiene la dirección de $L_3$).</p>
        <p>La proyección es $L_3' = \sigma \cap \pi$:</p>
        <div class="fx center">$$L_3': \begin{cases} x + y = 0 \\ x - y + 3z - 8 = 0 \end{cases}$$</div>
        <p>En paramétricas: de $y = -x$ y sustituyendo, $\;2x + 3z = 8$. Con $x = 4$ sale $z = 0$, $y = -4$, así que un punto es $(4,-4,0)$. El director es</p>
        <div class="fx center">$$\vec n_\pi \times \vec n_\sigma = (1,1,0) \times (1,-1,3) = \breve i(3-0) - \breve j(3-0) + \breve k(-1-1) = (3,\, -3,\, -2)$$</div>
        <div class="fx center">$$L_3': (x,y,z) = (4,-4,0) + t\,(3,-3,-2)$$</div>

        <h3>Verificación por el otro camino (dos puntos)</h3>
        <p>$Q = (1,-1,2)$ ya está en $\pi$ ($1 - 1 = 0$), así que se proyecta en sí mismo: $Q' = Q$.</p>
        <p>Otro punto de $L_3$, en $\lambda = 1$: $R = (-1, 0, 3)$. Recta auxiliar $(-1+s,\; s,\; 3)$; en $\pi$: $(-1+s) + s = 2s - 1 = 0 \Rightarrow s = \tfrac12$, luego $R' = \left(-\tfrac12, \tfrac12, 3\right)$.</p>
        <div class="fx center">$$R' - Q' = \left(-\tfrac32,\; \tfrac32,\; 1\right) = -\tfrac12\,(3,-3,-2)$$</div>
        <p>El mismo director ✓. Y $Q' = (1,-1,2)$ está en $L_3'$: con $t = -1$, $\;(4,-4,0) - (3,-3,-2) = (1,-1,2)$ ✓.</p>
        <div class="note tip"><b class="lbl">Cuál camino conviene</b> El de dos puntos es más fácil de explicar y de controlar; el del plano proyectante da directamente la respuesta como intersección de planos y evita elegir puntos. Hacer uno y verificar con el otro, como acá, es lo más seguro en un parcial.</div>`,
        resultado: tex`$L_3' = \{x+y=0;\; x-y+3z-8=0\}$, o bien $(x,y,z) = (4,-4,0) + t(3,-3,-2)$.` },

      { id: 'tp3-19c', rot: 'c', enunciado: tex`Hallar la proyección de $P$ sobre $y = 0$ según $L_1$.`,
        conceptos: ['u3-proy-punto-plano'],
        pista: tex`«Según $L_1$» significa en la dirección de $L_1$. Fijate cuál es ese director y compará con lo que hiciste en a).`,
        resolucion: tex`<p>Proyectar «según $L_1$» significa usar como dirección de proyección el <strong>director de $L_1$</strong>, que es $\vec u_1 = (0,1,0)$ ([[u1-proyeccion-geom]]).</p>
        <p>Recta auxiliar por $P = (2,3,1)$ con ese director:</p>
        <div class="fx center">$$(2,\; 3+t,\; 1) \qquad\Longrightarrow\qquad 3 + t = 0 \;\Longrightarrow\; t = -3$$</div>
        <div class="fx center">$$\operatorname{proy}_{L_1}(P) = (2,\, 0,\, 1)$$</div>
        <div class="note tip"><b class="lbl">Es el mismo resultado que en a), y eso es el punto del inciso</b>
        El director de $L_1$ es $(0,1,0)$, que coincide con el <strong>normal</strong> del plano $y=0$. Por lo tanto la dirección de $L_1$ <em>es</em> la dirección ortogonal al plano, y proyectar «según $L_1$» coincide exactamente con proyectar ortogonalmente.
        <p>Esto conecta con el inciso a): $L_1$ se proyectaba en un punto justamente porque es perpendicular al plano, y es la misma razón por la que acá las dos proyecciones coinciden. Conviene decirlo en la respuesta y no sólo dar el punto, porque es lo que el ejercicio quiere que se note.</p></div>
        <div class="note"><b class="lbl">Cuándo no coincidirían</b> Si la dirección de proyección $\vec v$ cumpliera $\vec v \cdot \vec n \neq 0$ pero $\vec v \not\parallel \vec n$, la proyección oblicua daría otro punto. Y si $\vec v \cdot \vec n = 0$, la recta auxiliar sería paralela al plano y la proyección <strong>no existiría</strong> (ver la advertencia en [[u3-proy-punto-plano]]).</div>`,
        resultado: tex`$\operatorname{proy}_{L_1}(P) = (2,0,1)$ — el mismo punto que la proyección ortogonal, porque el director de $L_1$ coincide con el normal del plano.` }
    ]},

  /* ========================= 20 ========================= */
  { id: 'tp3-20', num: '20',
    enunciado: tex`<p>Sean los planos $\pi_1: 2x - y + z = 3$, $\;\pi_2: x - 2z + 1 = 0$, $\;\pi_3: 4x - 2y + 2z = 1$ y las rectas
    $L_1: \begin{cases} 2x + y = 0 \\ z = 0 \end{cases}$ y $L_2: \begin{cases} x - 2z + 1 = 0 \\ y + z - 1 = 0 \end{cases}$, hallar:</p>
    <div class="note tip"><b class="lbl">Datos</b>
    Normales: $\vec n_1 = (2,-1,1)$, $\;\vec n_2 = (1,0,-2)$, $\;\vec n_3 = (4,-2,2)$.
    <p>Directores: $\;\vec u_1 = (2,1,0) \times (0,0,1) = (1,-2,0)$ y $\;\vec u_2 = (1,0,-2) \times (0,1,1) = (2,-1,1)$.</p>
    <p>Cuidado con cuál fórmula usar: plano-plano y recta-recta llevan <strong>coseno</strong>; recta-plano lleva <strong>seno</strong> ([[u3-angulo-recta-plano]]).</p></div>`,
    incisos: [

      { id: 'tp3-20a', rot: 'a', enunciado: tex`El ángulo entre los planos $\pi_1$ y $\pi_2$, y entre $\pi_1$ y $\pi_3$.`,
        conceptos: ['u3-angulo-planos', 'u3-teorema-4'],
        resolucion: tex`<h3>$\pi_1$ y $\pi_2$</h3>
        <p>Por [[u3-angulo-planos]], con $\vec n_1 = (2,-1,1)$ y $\vec n_2 = (1,0,-2)$:</p>
        <div class="fx center">$$\vec n_1 \cdot \vec n_2 = 2 + 0 - 2 = 0$$</div>
        <p>El producto escalar es <strong>cero</strong>, así que $\cos\theta = 0$ y</p>
        <div class="fx center">$$\theta = 90°$$</div>
        <p>Los planos son <strong>perpendiculares</strong> ([[u3-teorema-4]]). No hace falta calcular los módulos.</p>

        <h3>$\pi_1$ y $\pi_3$</h3>
        <p>$\vec n_3 = (4,-2,2) = 2\,(2,-1,1) = 2\,\vec n_1$: los normales son <strong>paralelos</strong>, así que los planos son paralelos y el ángulo es $0°$. Con la fórmula:</p>
        <div class="fx center">$$\cos\theta = \frac{|(2,-1,1)\cdot(4,-2,2)|}{\sqrt{6}\cdot 2\sqrt{6}} = \frac{|8+2+2|}{12} = \frac{12}{12} = 1 \;\Longrightarrow\; \theta = 0°$$</div>
        <div class="note"><b class="lbl">Paralelos distintos, no coincidentes</b> Simplificando $\pi_3$ por 2 queda $2x - y + z = \tfrac12$, contra $2x-y+z = 3$ en $\pi_1$: los términos independientes difieren, así que son <strong>paralelos distintos</strong> y no tienen puntos en común. El ángulo es $0°$ igual.</div>`,
        resultado: tex`$\widehat{(\pi_1,\pi_2)} = 90°$ (perpendiculares). &nbsp; $\widehat{(\pi_1,\pi_3)} = 0°$ (paralelos distintos, ya que $\vec n_3 = 2\vec n_1$).` },

      { id: 'tp3-20b', rot: 'b', enunciado: tex`El ángulo entre $L_1$ y $L_2$.`,
        conceptos: ['u3-angulo-rectas', 'u3-recta-interseccion'],
        resolucion: tex`<p>Primero los directores, como producto vectorial de los normales de cada par de planos ([[u3-recta-interseccion]]):</p>
        <div class="fx center">$$\vec u_1 = (2,1,0) \times (0,0,1) = \breve i(1-0) - \breve j(2-0) + \breve k(0-0) = (1,\, -2,\, 0)$$</div>
        <div class="fx center">$$\vec u_2 = (1,0,-2) \times (0,1,1) = \breve i(0+2) - \breve j(1-0) + \breve k(1-0) = (2,\, -1,\, 1)$$</div>
        <p>Control de $\vec u_1$: $L_1$ es $z = 0$, $y = -2x$, o sea el genérico $(t, -2t, 0)$, de director $(1,-2,0)$ ✓.</p>
        <p>Por [[u3-angulo-rectas]]:</p>
        <div class="fx center">$$\cos\theta = \frac{|\vec u_1 \cdot \vec u_2|}{\|\vec u_1\|\,\|\vec u_2\|} = \frac{|2 + 2 + 0|}{\sqrt{5}\cdot\sqrt{6}} = \frac{4}{\sqrt{30}} \approx 0{,}7303$$</div>
        <div class="fx center">$$\theta = \arccos\left( \frac{4}{\sqrt{30}} \right) \approx 43{,}1°$$</div>
        <div class="note"><b class="lbl">El ángulo se calcula aunque no se corten</b> El ángulo entre dos rectas se mide entre sus <em>direcciones</em>, así que tiene sentido incluso si son alabeadas. No hace falta averiguar la posición relativa para este inciso.</div>`,
        resultado: tex`$\cos\theta = \frac{4}{\sqrt{30}}$, $\;\theta \approx 43{,}1°$.` },

      { id: 'tp3-20c', rot: 'c', enunciado: tex`El ángulo entre $L_1$ y $\pi_2$, y entre $L_1$ y $\pi_1$.`,
        conceptos: ['u3-angulo-recta-plano'],
        pista: tex`Acá va <strong>seno</strong>, no coseno. Y al final compará el segundo resultado con el del inciso b).`,
        resolucion: tex`<h3>$L_1$ y $\pi_2$</h3>
        <p>Por [[u3-angulo-recta-plano]], con $\vec u_1 = (1,-2,0)$ y $\vec n_2 = (1,0,-2)$:</p>
        <div class="fx center">$$\operatorname{sen}\theta = \frac{|\vec u_1 \cdot \vec n_2|}{\|\vec u_1\|\,\|\vec n_2\|} = \frac{|1 + 0 + 0|}{\sqrt{5}\cdot\sqrt{5}} = \frac{1}{5} = 0{,}2$$</div>
        <div class="fx center">$$\theta = \arcsin(0{,}2) \approx 11{,}5°$$</div>

        <h3>$L_1$ y $\pi_1$</h3>
        <p>Con $\vec n_1 = (2,-1,1)$:</p>
        <div class="fx center">$$\operatorname{sen}\theta = \frac{|(1,-2,0)\cdot(2,-1,1)|}{\sqrt{5}\cdot\sqrt{6}} = \frac{|2 + 2 + 0|}{\sqrt{30}} = \frac{4}{\sqrt{30}} \approx 0{,}7303$$</div>
        <div class="fx center">$$\theta = \arcsin\left( \frac{4}{\sqrt{30}} \right) \approx 46{,}9°$$</div>

        <div class="note tip"><b class="lbl">Los dos resultados no son independientes</b>
        El valor $\tfrac{4}{\sqrt{30}}$ ya había aparecido en el inciso b) como <strong>coseno</strong> del ángulo entre $L_1$ y $L_2$, y acá aparece como <strong>seno</strong> del ángulo entre $L_1$ y $\pi_1$. La razón:
        $$\vec u_2 = (2,-1,1) = \vec n_1$$
        es decir, <strong>$L_2$ es perpendicular a $\pi_1$</strong>. Y el ángulo que una recta forma con un plano es el complemento del que forma con su normal, de donde
        $$43{,}1° + 46{,}9° = 90° \;✓$$
        Reconocer esto es una verificación gratuita de los dos incisos a la vez, y es exactamente el razonamiento que piden los finales cuando dicen «explique por qué el ángulo entre una recta y un plano lleva seno».</div>`,
        resultado: tex`$\widehat{(L_1,\pi_2)}: \;\operatorname{sen}\theta = \frac15$, $\;\theta \approx 11{,}5°$. &nbsp; $\widehat{(L_1,\pi_1)}: \;\operatorname{sen}\theta = \frac{4}{\sqrt{30}}$, $\;\theta \approx 46{,}9°$ — complementario del ángulo del inciso b), porque $\vec u_2 = \vec n_1$.` }
    ]}

]});
