/* Parciales — modelos 2025
   Fuentes: 7_EAL_2026/primer_parcial_ejemplo, segundo_parcial_ejemplo, parcial_promocion

   Enunciados verificados: se re-extrajeron los PDF con `pdftotext -enc UCS-2`
   (en lugar del Latin-1 por defecto, que descartaba los caracteres del bloque
   Mathematical Alphanumeric Symbols donde viven las variables de las ecuaciones
   de Word). No quedan lecturas dudosas. */

/* ============================================================
   Primer parcial — 24/9/25
   ============================================================ */
EAL.examen({
  id: 'p1-2025-09-24', tipo: 'p1', sigla: '1P',
  titulo: 'Primer parcial — Tema 1',
  fecha: '24 de septiembre de 2025',
  carrera: 'FaEA y FI',
  resumen: 'Vectores (proyección, ortogonalidad, volumen y altura), rectas en el plano con parámetro, y proyecciones y planos en el espacio.',
  unidades: ['u1', 'u2', 'u3'],
  nota: tex`<b class="lbl">Cómo leer este parcial</b> Tres ejercicios, uno por unidad: vectores, rectas en el plano, rectas y planos en el espacio. Los tres tienen un parámetro a determinar, que es el patrón de la cátedra.<br><br>
  <b class="lbl">Antes de abrir las resoluciones</b> Hacelo como un parcial de verdad: a mano, con la calculadora permitida, y recién después compará.`,

  ejercicios: [

  /* --------------------------- 1 --------------------------- */
  { id: 'p1a-1', num: '1',
    enunciado: tex`<p>Sean los vectores $\vec u = (1,0,2)$; $\;\vec v = (a,\, 3,\, -1)$; $\;\vec w = (2,\, b,\, 4)$.</p>`,
    incisos: [

      { id: 'p1a-1a', rot: 'a', enunciado: tex`Determinar los valores de $a$ y $b$ para los cuales se cumplen <strong>simultáneamente</strong> que la proyección de $\vec v$ sobre $\vec u$ sea $\tfrac{1}{5}\,\vec u$ y que $\vec w$ sea ortogonal a $\vec v + \vec u$.`,
        conceptos: ['u1-proyeccion-ortogonal', 'u1-teorema-3', 'u1-producto-escalar'],
        pista: tex`Las dos condiciones se pueden atacar <strong>en orden</strong>: la primera sólo involucra $a$, y con $a$ ya conocido la segunda determina $b$. No hace falta resolver un sistema.`,
        resolucion: tex`<h3>Condición 1 — la proyección fija $a$</h3>
        <p>Por [[u1-proyeccion-ortogonal]], la proyección de $\vec v$ sobre $\vec u$ es</p>
        <div class="fx center">$$\operatorname{proy}_{\vec u}\vec v = \frac{\vec v \cdot \vec u}{\|\vec u\|^2}\,\vec u$$</div>
        <p>con $\;\|\vec u\|^2 = 1 + 0 + 4 = 5\;$ y $\;\vec v \cdot \vec u = a(1) + 3(0) + (-1)(2) = a - 2$. Entonces</p>
        <div class="fx center">$$\operatorname{proy}_{\vec u}\vec v = \frac{a-2}{5}\,\vec u$$</div>
        <p>y se pide que esto sea $\tfrac15 \vec u$. Como $\vec u \neq \vec 0$, basta igualar los escalares:</p>
        <div class="fx center">$$\frac{a-2}{5} = \frac{1}{5} \;\Longrightarrow\; a - 2 = 1 \;\Longrightarrow\; \boxed{a = 3}$$</div>
        <div class="note tip"><b class="lbl">Por qué el dato es $\tfrac15\vec u$ y no $\tfrac15$</b>
        El enunciado da la proyección como <strong>vector</strong>, múltiplo de $\vec u$. Eso es lo que permite leer el coeficiente directamente. Si hubiera dado la proyección <em>escalar</em> ($\tfrac15$ como número), habría que plantear $\frac{|\vec v \cdot \vec u|}{\|\vec u\|} = \tfrac15$, que lleva a otra ecuación. Conviene mirar bien qué se da.</div>

        <h3>Condición 2 — la ortogonalidad fija $b$</h3>
        <p>Con $a = 3$ es $\vec v = (3,3,-1)$, luego</p>
        <div class="fx center">$$\vec v + \vec u = (3+1,\;\; 3+0,\;\; -1+2) = (4,\, 3,\, 1)$$</div>
        <p>Por el [[u1-teorema-3]], $\vec w \perp (\vec v + \vec u)$ si y sólo si su producto escalar es nulo:</p>
        <div class="fx center">$$\vec w \cdot (\vec v + \vec u) = 2(4) + b(3) + 4(1) = 8 + 3b + 4 = 12 + 3b = 0 \;\Longrightarrow\; \boxed{b = -4}$$</div>

        <h3>Verificación de las dos condiciones</h3>
        <p>Con $a = 3$ y $b = -4$: $\;\vec u = (1,0,2)$, $\;\vec v = (3,3,-1)$, $\;\vec w = (2,-4,4)$.</p>
        <div class="fx center">$$\vec v \cdot \vec u = 3 + 0 - 2 = 1 \;\Longrightarrow\; \operatorname{proy}_{\vec u}\vec v = \tfrac{1}{5}(1,0,2) = \tfrac15 \vec u \;✓$$</div>
        <div class="fx center">$$\vec w \cdot (\vec v + \vec u) = (2,-4,4)\cdot(4,3,1) = 8 - 12 + 4 = 0 \;✓$$</div>`,
        resultado: tex`$a = 3$ y $b = -4$, con $\vec u = (1,0,2)$, $\vec v = (3,3,-1)$, $\vec w = (2,-4,4)$.` },

      { id: 'p1a-1bi', rot: 'b.i', enunciado: tex`Para los valores de $a$ y $b$ hallados en (a), tomando como base el paralelogramo generado por $\vec u$ y $\vec v$: calcular el <strong>volumen</strong> del paralelepípedo que tiene por aristas los vectores $\vec u$, $\vec v$, $\vec w$.`,
        conceptos: ['u1-volumen', 'u1-producto-mixto'],
        pista: tex`Calculá $\vec u \times \vec v$ primero: se reutiliza entero en el inciso siguiente.`,
        resolucion: tex`<p>El volumen es el valor absoluto del producto mixto ([[u1-volumen]]). Conviene calcular primero el normal a la base, porque se usa también en b.ii.</p>
        <ol class="pasos">
          <li><span class="ptit">Normal a la base.</span>
            $$\vec u \times \vec v = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & 0 & 2 \\ 3 & 3 & -1 \end{vmatrix}
            = \breve i\bigl(0(-1) - 2(3)\bigr) - \breve j\bigl(1(-1) - 2(3)\bigr) + \breve k\bigl(1(3) - 0(3)\bigr)$$
            $$= \breve i(-6) - \breve j(-7) + \breve k(3) = (-6,\; 7,\; 3)$$</li>
          <li><span class="ptit">Producto mixto.</span>
            $$\vec w \cdot (\vec u \times \vec v) = (2,-4,4)\cdot(-6,7,3) = -12 - 28 + 12 = -28$$</li>
          <li><span class="ptit">Volumen.</span>
            $$V = \bigl|\vec w \cdot (\vec u \times \vec v)\bigr| = |-28| = 28$$</li>
        </ol>
        <div class="note"><b class="lbl">El signo negativo no es un error</b> El producto mixto es negativo cuando la terna $(\vec u, \vec v, \vec w)$ está orientada «a izquierdas». El volumen es el <strong>valor absoluto</strong>, siempre positivo.</div>
        <div class="note tip"><b class="lbl">Dato de paso</b> $V \neq 0$, así que los tres vectores <strong>no son coplanares</strong> ([[u1-coplanaridad]]) y forman una base de $\mathbb{R}^3$. Si hubiera salido $0$, el «paralelepípedo» sería chato y el inciso b.ii no tendría sentido.</div>`,
        resultado: tex`$\vec u \times \vec v = (-6,7,3)$ y $V = \bigl|\vec w\cdot(\vec u \times \vec v)\bigr| = |-28| = 28$.` },

      { id: 'p1a-1bii', rot: 'b.ii', enunciado: tex`Determinar el <strong>vector altura</strong> y la medida de dicha altura.`,
        conceptos: ['u1-volumen', 'u1-proyeccion-ortogonal', 'u1-teorema-5'],
        pista: tex`La altura la determina la arista que <em>no</em> está en la base. El vector altura es su proyección sobre el normal a la base.`,
        resolucion: tex`<p>La base la forman $\vec u$ y $\vec v$ (dato), así que la arista que determina la altura es <strong>$\vec w$</strong>, la única que no está en la base. Más precisamente, el vector altura es la <strong>componente de $\vec w$ perpendicular a la base</strong>, es decir su proyección sobre $\vec u \times \vec v$.</p>
        <h3>Vector altura</h3>
        <p>Por [[u1-proyeccion-ortogonal]], con $\|\vec u \times \vec v\|^2 = 36 + 49 + 9 = 94$:</p>
        <div class="fx center">$$\vec h = \operatorname{proy}_{\vec u \times \vec v}\vec w = \frac{\vec w \cdot (\vec u \times \vec v)}{\|\vec u \times \vec v\|^2}\,(\vec u \times \vec v) = \frac{-28}{94}\,(-6,7,3) = -\frac{14}{47}(-6,7,3)$$</div>
        <div class="fx center">$$\vec h = \left( \frac{84}{47},\;\; -\frac{98}{47},\;\; -\frac{42}{47} \right)$$</div>
        <h3>Medida de la altura</h3>
        <p>Por [[u1-volumen]], la altura es el volumen dividido por el área de la base, y el área de la base es $\|\vec u \times \vec v\|$ ([[u1-teorema-5]]):</p>
        <div class="fx center">$$A_{\text{base}} = \|\vec u \times \vec v\| = \sqrt{94}$$</div>
        <div class="fx center">$$h = \frac{\bigl|\vec w \cdot (\vec u \times \vec v)\bigr|}{\|\vec u \times \vec v\|} = \frac{28}{\sqrt{94}} = \frac{28\sqrt{94}}{94} = \frac{14\sqrt{94}}{47} \approx 2{,}89$$</div>
        <h3>Verificaciones</h3>
        <p><strong>Control volumen = área × altura:</strong></p>
        <div class="fx center">$$\sqrt{94} \cdot \frac{28}{\sqrt{94}} = 28 = V \;✓$$</div>
        <p><strong>Control de que $\|\vec h\| = h$:</strong> $\;\vec h = -\tfrac{14}{47}(\vec u \times \vec v)$, luego</p>
        <div class="fx center">$$\|\vec h\| = \frac{14}{47}\sqrt{94} = \frac{14\sqrt{94}}{47} = h \;✓$$</div>
        <div class="note warn"><b class="lbl">Dos cosas distintas</b>
        El <strong>vector</strong> altura es $\vec h$ (tiene dirección y sentido, perpendicular a la base); la <strong>medida</strong> de la altura es el número $h = \|\vec h\|$. El enunciado pide las dos, así que hay que dar las dos.</div>`,
        resultado: tex`$\vec h = \operatorname{proy}_{\vec u \times \vec v}\vec w = \left(\frac{84}{47}, -\frac{98}{47}, -\frac{42}{47}\right)$, y $h = \frac{28}{\sqrt{94}} = \frac{14\sqrt{94}}{47} \approx 2{,}89$. Control: $A_{\text{base}} \cdot h = \sqrt{94}\cdot\frac{28}{\sqrt{94}} = 28 = V$ ✓` }
    ]},

  /* --------------------------- 2 --------------------------- */
  { id: 'p1a-2', num: '2',
    enunciado: tex`<p>Sean las rectas $L_1: x + y - 1 = 0$ y $L_2: (1+t)\,x - y + 1 = 0$, con $t \in \mathbb{R}$. Se pide:</p>`,
    incisos: [

      { id: 'p1a-2a', rot: 'a', enunciado: tex`Determinar los valores de $t$ para los cuales el punto $A = (2,-3)$ <strong>equidista</strong> de las rectas $L_2$ y $L_1$.`,
        conceptos: ['u2-distancia-punto-recta', 'u2-equidistancia'],
        pista: tex`Calculá las dos distancias con [[u2-distancia-punto-recta]] (la de $L_1$ es un número; la de $L_2$ depende de $t$), igualalas y elevá al cuadrado.`,
        resolucion: tex`<h3>Las dos distancias</h3>
        <p>Por [[u2-distancia-punto-recta]], con $A = (2,-3)$:</p>
        <div class="fx center">$$d(A, L_1) = \frac{|2 + (-3) - 1|}{\sqrt{1^2+1^2}} = \frac{|-2|}{\sqrt2} = \frac{2}{\sqrt2} = \sqrt2$$</div>
        <div class="fx center">$$d(A, L_2) = \frac{\bigl|(1+t)(2) - (-3) + 1\bigr|}{\sqrt{(1+t)^2 + 1}} = \frac{|2 + 2t + 4|}{\sqrt{(1+t)^2+1}} = \frac{|2t + 6|}{\sqrt{(1+t)^2+1}}$$</div>

        <h3>Igualar y elevar al cuadrado</h3>
        <div class="fx center">$$\frac{|2t+6|}{\sqrt{(1+t)^2+1}} = \sqrt2 \;\Longrightarrow\; (2t+6)^2 = 2\bigl[(1+t)^2 + 1\bigr]$$</div>
        <div class="fx center">$$4t^2 + 24t + 36 = 2\bigl[t^2 + 2t + 2\bigr] = 2t^2 + 4t + 4$$</div>
        <div class="fx center">$$2t^2 + 20t + 32 = 0 \;\Longrightarrow\; t^2 + 10t + 16 = 0$$</div>
        <div class="fx center">$$\Delta = 100 - 64 = 36, \qquad t = \frac{-10 \pm 6}{2}$$</div>
        <div class="fx center">$$\boxed{t_1 = -2, \qquad t_2 = -8}$$</div>

        <h3>Verificación</h3>
        <p><strong>$t = -2$:</strong> $\;L_2: -x - y + 1 = 0$, y $\;d(A,L_2) = \dfrac{|-2+3+1|}{\sqrt{1+1}} = \dfrac{2}{\sqrt2} = \sqrt2$ ✓</p>
        <p><strong>$t = -8$:</strong> $\;L_2: -7x - y + 1 = 0$, y $\;d(A,L_2) = \dfrac{|-14+3+1|}{\sqrt{49+1}} = \dfrac{10}{\sqrt{50}} = \dfrac{10}{5\sqrt2} = \sqrt2$ ✓</p>
        <div class="note warn"><b class="lbl">Una de las dos soluciones es degenerada, y conviene decirlo</b>
        Con $t = -2$ queda $L_2: -x-y+1 = 0$, que multiplicada por $-1$ es $x+y-1 = 0$: <strong>exactamente $L_1$</strong>. Las rectas son <em>coincidentes</em>, así que cualquier punto del plano «equidista» de ambas trivialmente.
        <p>Es una solución legítima de la ecuación, pero vacía de contenido geométrico. El valor interesante es $t = -8$, y es el que conviene usar en el inciso b).</p></div>`,
        resultado: tex`$t_1 = -2$ y $t_2 = -8$ (de $t^2+10t+16=0$), ambos con $d(A,L_1) = d(A,L_2) = \sqrt2$. Con $t=-2$ las rectas resultan <strong>coincidentes</strong>, así que esa solución es degenerada.` },

      { id: 'p1a-2b', rot: 'b', enunciado: tex`Elegir uno de los valores de $t$ hallados y calcular el <strong>ángulo</strong> entre $L_1$ y $L_2$.`,
        conceptos: ['u2-angulo-rectas'],
        pista: tex`Elegí el valor que no sea el degenerado. Y acordate del valor absoluto en el numerador.`,
        resolucion: tex`<p>Se elige <strong>$t = -8$</strong>, porque con $t = -2$ las rectas coinciden y el ángulo sería trivialmente $0°$.</p>
        <p>Con $t = -8$: $\;L_2: -7x - y + 1 = 0$, de normal $\vec n_2 = (-7,-1)$; y $L_1$ tiene $\vec n_1 = (1,1)$.</p>
        <p>Por [[u2-angulo-rectas]]:</p>
        <div class="fx center">$$\cos\theta = \frac{\bigl|\vec n_1 \cdot \vec n_2\bigr|}{\|\vec n_1\|\,\|\vec n_2\|} = \frac{|(1)(-7) + (1)(-1)|}{\sqrt{2}\cdot\sqrt{50}} = \frac{|-8|}{\sqrt{100}} = \frac{8}{10} = 0{,}8$$</div>
        <div class="fx center">$$\theta = \arccos(0{,}8) \approx 36{,}87° \approx 36°52'$$</div>
        <div class="note"><b class="lbl">Dónde actúa el valor absoluto</b> Sin él el coseno daría $-0{,}8$ y el ángulo $143{,}13°$, el obtuso. Por convención se toma el <strong>agudo</strong>, y el módulo del numerador lo garantiza.</div>
        <div class="note tip"><b class="lbl">Control</b> $\sqrt2 \cdot \sqrt{50} = \sqrt{100} = 10$ exacto, lo que da un coseno «redondo». Es señal de que los números del enunciado están elegidos para que esto salga limpio.</div>
        <p><strong>Si se eligiera $t = -2$:</strong> $\vec n_2 = (-1,-1) = -\vec n_1$, así que $\cos\theta = \tfrac{|-2|}{\sqrt2\sqrt2} = 1$ y $\theta = 0°$ — coherente con que sean la misma recta.</p>`,
        resultado: tex`Con $t = -8$: $\;\cos\theta = \frac{8}{10} = 0{,}8$ y $\theta \approx 36{,}87°$. (Con $t=-2$ daría $0°$, por ser coincidentes.)` },

      { id: 'p1a-2c', rot: 'c', enunciado: tex`Para $t = 0$, encontrar el <strong>haz de rectas</strong> que pasan por el punto de intersección entre $L_1$ y $L_2$.`,
        conceptos: ['u2-interseccion', 'u2-haz', 'u2-haces-tipicos'],
        resolucion: tex`<h3>Paso 1 — El punto de intersección</h3>
        <p>Con $t = 0$: $\;L_2: x - y + 1 = 0$. El sistema es</p>
        <div class="fx center">$$\begin{cases} x + y - 1 = 0 \\ x - y + 1 = 0 \end{cases}$$</div>
        <p>Sumando: $\;2x = 0 \Rightarrow x = 0$; y de la primera, $y = 1$.</p>
        <div class="fx center">$$L_1 \cap L_2 = \{(0,\, 1)\}$$</div>
        <p>Verificación: $(0,1)$ en $L_1$: $0+1-1 = 0$ ✓; en $L_2$: $0-1+1 = 0$ ✓</p>

        <h3>Paso 2 — El haz</h3>
        <p>Es el <strong>haz propio</strong> de centro $(0,1)$ ([[u2-haz]]). En forma punto-pendiente:</p>
        <div class="fx center">$$y - 1 = m\,x, \qquad m \in \mathbb{R}$$</div>
        <p>o equivalentemente $\;y = mx + 1$: todas las rectas de ordenada al origen $1$.</p>
        <div class="note warn"><b class="lbl">Falta una recta, y hay que aclararlo</b>
        El haz $y - 1 = mx$ <strong>no contiene la vertical $x = 0$</strong> (el eje $y$), porque ninguna $m$ real da pendiente infinita. Dos formas de dar la respuesta completa:
        <p><strong>(1)</strong> $y - 1 = mx$ con $m \in \mathbb{R}$, <em>más</em> la recta $x = 0$.</p>
        <p><strong>(2)</strong> Con dos parámetros, usando las dos rectas dadas ([[u2-haces-tipicos]]):
        $$\alpha\,(x+y-1) + \beta\,(x-y+1) = 0, \qquad (\alpha,\beta) \neq (0,0)$$
        que sí incluye todas: con $\alpha = \beta$ da $2x = 0$, es decir $x = 0$ ✓</p></div>
        <div class="note tip"><b class="lbl">Control del haz</b> Cualquier recta del haz debe pasar por $(0,1)$. En la forma (2): $\;\alpha(0+1-1) + \beta(0-1+1) = 0$ para todo $\alpha,\beta$ ✓</div>`,
        resultado: tex`El punto es $(0,1)$ y el haz es $y - 1 = mx$ con $m \in \mathbb{R}$, más la vertical $x = 0$. En forma completa: $\alpha(x+y-1) + \beta(x-y+1) = 0$.` }
    ]},

  /* --------------------------- 3 --------------------------- */
  { id: 'p1a-3', num: '3',
    enunciado: tex`<p>Sean la recta $L_1: (x,y,z) = (2,1,-1) + \lambda\,(2,-1,1)$, con $\lambda \in \mathbb{R}$, la recta
    $L_2: \begin{cases} \pi_1: 2x - y - z = 0 \\ \pi_2: x - y + 2z = 0 \end{cases}$ y el plano $\pi: x - y + 2z - 4 = 0$.</p>
    <div class="note tip"><b class="lbl">Dato que conviene notar de entrada</b> El plano $\pi$ tiene el <strong>mismo normal</strong> que $\pi_2$, el segundo de los planos que definen $L_2$: son paralelos. Y $\|\vec n_\pi\| = \sqrt{1+1+4} = \sqrt6$, que es justo la distancia que pide el inciso c) — otra señal de que los números están elegidos.</div>`,
    incisos: [

      { id: 'p1a-3a', rot: 'a', enunciado: tex`Encontrar la <strong>proyección</strong> del punto $P = (2,-1,-1)$ sobre el plano $\pi$ en la dirección del vector $\vec u = (-1,-2,1)$.`,
        conceptos: ['u3-proy-punto-plano'],
        pista: tex`Proyección <em>según una dirección</em>: la recta auxiliar se arma con ese vector como director, no con el normal del plano.`,
        resolucion: tex`<p>Es una proyección <strong>oblicua</strong> (según $\vec u$), no la ortogonal. El método de [[u3-proy-punto-plano]] es el mismo, cambiando el director de la recta auxiliar.</p>
        <p><strong>Chequeo previo:</strong> para que la proyección exista, la dirección no debe ser paralela al plano:</p>
        <div class="fx center">$$\vec u \cdot \vec n_\pi = (-1,-2,1)\cdot(1,-1,2) = -1 + 2 + 2 = 3 \neq 0 \;✓$$</div>
        <ol class="pasos">
          <li><span class="ptit">Recta auxiliar</span> por $P$ con director $\vec u$:
            $$(x,y,z) = (2,-1,-1) + s\,(-1,-2,1) = (2-s,\;\; -1-2s,\;\; -1+s)$$</li>
          <li><span class="ptit">Intersecar con $\pi$:</span>
            $$(2-s) - (-1-2s) + 2(-1+s) - 4 = 0$$
            $$2 - s + 1 + 2s - 2 + 2s - 4 = 3s - 3 = 0 \;\Longrightarrow\; s = 1$$</li>
          <li><span class="ptit">Evaluar:</span>
            $$P' = (2-1,\;\; -1-2,\;\; -1+1) = (1,\, -3,\, 0)$$</li>
        </ol>
        <p><strong>Verificaciones.</strong> $P' \in \pi$: $\;1 - (-3) + 2(0) - 4 = 1+3-4 = 0$ ✓. Y $\overrightarrow{PP'} = (1,-3,0)-(2,-1,-1) = (-1,-2,1) = \vec u$: el desplazamiento es exactamente en la dirección pedida ✓</p>
        <div class="note"><b class="lbl">Control del coeficiente</b> El coeficiente de $s$ en la cuenta del paso 2 tiene que ser $\vec u \cdot \vec n_\pi = 3$, y salió $3$ ✓. Si no coincide con el chequeo previo, hay un error de signo.</div>`,
        resultado: tex`$P' = (1,\, -3,\, 0)$. Control: $\overrightarrow{PP'} = (-1,-2,1) = \vec u$ y $P' \in \pi$.` },

      { id: 'p1a-3b', rot: 'b', enunciado: tex`Determinar la recta contenida en $\pi$ que es <strong>perpendicular a $L_1$</strong> en $\pi \cap L_1$.`,
        conceptos: ['u3-teorema-2-3', 'u3-pertenencia', 'u3-normal-desde-directores'],
        pista: tex`Dos pasos: el punto es $\pi \cap L_1$; el director debe ser perpendicular <em>a dos cosas a la vez</em>, y eso es un producto vectorial.`,
        resolucion: tex`<h3>Paso 1 — El punto $\pi \cap L_1$</h3>
        <p>El punto genérico de $L_1$ es $(2+2\lambda,\;\; 1-\lambda,\;\; -1+\lambda)$. Sustituyendo en $\pi$:</p>
        <div class="fx center">$$(2+2\lambda) - (1-\lambda) + 2(-1+\lambda) - 4 = 0$$</div>
        <div class="fx center">$$2 + 2\lambda - 1 + \lambda - 2 + 2\lambda - 4 = 5\lambda - 5 = 0 \;\Longrightarrow\; \lambda = 1$$</div>
        <div class="fx center">$$M = \pi \cap L_1 = (4,\, 0,\, 0)$$</div>
        <p>Verificación: $4 - 0 + 0 - 4 = 0$ ✓</p>
        <p>(El coeficiente $5 = \vec u_{L_1}\cdot \vec n_\pi = (2,-1,1)\cdot(1,-1,2) = 2+1+2$ ✓, y al ser no nulo la recta efectivamente corta al plano.)</p>

        <h3>Paso 2 — El director</h3>
        <p>La recta buscada debe cumplir dos condiciones sobre su director $\vec d$:</p>
        <ul>
          <li><strong>Estar contenida en $\pi$</strong> ⇒ $\vec d \perp \vec n_\pi = (1,-1,2)$ ([[u3-pertenencia]]);</li>
          <li><strong>Ser perpendicular a $L_1$</strong> ⇒ $\vec d \perp \vec u_{L_1} = (2,-1,1)$ ([[u3-teorema-2-3]]).</li>
        </ul>
        <p>Perpendicular a dos vectores a la vez es el trabajo del producto vectorial ([[u3-normal-desde-directores]]):</p>
        <div class="fx center">$$\vec d = \vec n_\pi \times \vec u_{L_1} = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & -1 & 2 \\ 2 & -1 & 1 \end{vmatrix}
        = \breve i(-1+2) - \breve j(1-4) + \breve k(-1+2) = (1,\, 3,\, 1)$$</div>
        <div class="fx center">$$L: (x,y,z) = (4,0,0) + \mu\,(1,3,1), \qquad \mu \in \mathbb{R}$$</div>

        <h3>Verificaciones</h3>
        <p>$\vec d \cdot \vec n_\pi = 1 - 3 + 2 = 0$ ✓ (contenida en $\pi$, junto con $M \in \pi$)</p>
        <p>$\vec d \cdot \vec u_{L_1} = 2 - 3 + 1 = 0$ ✓ (perpendicular a $L_1$)</p>
        <p>Y el punto genérico $(4+\mu,\; 3\mu,\; \mu)$ está en $\pi$: $\;(4+\mu) - 3\mu + 2\mu - 4 = 0$ para todo $\mu$ ✓</p>
        <div class="note tip"><b class="lbl">Por qué el enunciado dice «en $\pi \cap L_1$»</b>
        Hay infinitas rectas en $\pi$ perpendiculares a $L_1$ (todas las paralelas a $\vec d$ dentro del plano). Lo que fija una sola es exigir que pase por el punto donde $L_1$ atraviesa $\pi$ — ahí las dos rectas realmente se cortan formando un ángulo recto.</div>`,
        resultado: tex`$L: (x,y,z) = (4,0,0) + \mu(1,3,1)$, con $\pi \cap L_1 = (4,0,0)$ y director $\vec n_\pi \times \vec u_{L_1} = (1,3,1)$.` },

      { id: 'p1a-3c', rot: 'c', enunciado: tex`Encontrar todos los planos <strong>paralelos a $\pi$</strong> que se encuentran a $\sqrt{6}$ unidades de distancia del punto $Q = (3,-1,-2)$.`,
        conceptos: ['u3-teorema-4', 'u3-dist-punto-plano', 'u3-dist-resto'],
        resolucion: tex`<p>Paralelo a $\pi$ ⇒ mismo normal ([[u3-teorema-4]]), con el término independiente como única incógnita:</p>
        <div class="fx center">$$\pi': x - y + 2z + d = 0, \qquad \|\vec n\| = \sqrt{1+1+4} = \sqrt6$$</div>
        <p>Imponiendo la distancia con [[u3-dist-punto-plano]] y $Q = (3,-1,-2)$:</p>
        <div class="fx center">$$d(Q, \pi') = \frac{|3 - (-1) + 2(-2) + d|}{\sqrt6} = \frac{|3 + 1 - 4 + d|}{\sqrt6} = \frac{|d|}{\sqrt6} = \sqrt6$$</div>
        <div class="fx center">$$|d| = 6 \;\Longrightarrow\; d = 6 \;\text{ o }\; d = -6$$</div>
        <div class="fx center">$$\pi'_1: x - y + 2z + 6 = 0 \qquad\qquad \pi'_2: x - y + 2z - 6 = 0$$</div>

        <h3>Verificación</h3>
        <div class="fx center">$$d(Q, \pi'_1) = \frac{|{-6} + 6|}{\sqrt6}\;?\;$$</div>
        <p>Cuidado: hay que evaluar la expresión completa. $\;3 + 1 - 4 + 6 = 6$, luego $d(Q,\pi'_1) = \tfrac{6}{\sqrt6} = \sqrt6$ ✓. Y $3+1-4-6 = -6$, luego $d(Q,\pi'_2) = \tfrac{|-6|}{\sqrt6} = \sqrt6$ ✓</p>
        <div class="note tip"><b class="lbl">Por qué la cuenta sale tan limpia</b>
        Al evaluar $Q$ en $x - y + 2z$ da exactamente $\mathbf{0}$: el punto $Q$ <strong>está en el plano</strong> $x-y+2z = 0$ — que es justamente $\pi_2$, uno de los dos planos que definen $L_2$. Por eso el numerador se reduce a $|d|$ y los dos planos resultan <em>simétricos</em> respecto de ese plano por el origen.</div>
        <div class="note warn"><b class="lbl">Siempre son dos</b> El valor absoluto da dos soluciones, una a cada lado de $Q$. Dar una sola es el error típico del ítem ([[u3-dist-resto]]).</div>`,
        resultado: tex`$\pi'_1: x - y + 2z + 6 = 0$ y $\pi'_2: x - y + 2z - 6 = 0$. (Sale limpio porque $Q$ pertenece al plano $x-y+2z=0$.)` }
    ]}
]});

/* ============================================================
   Recuperatorio del primer parcial — 15/10/2025
   ============================================================ */
EAL.examen({
  id: 'p1r-2025-10-15', tipo: 'p1', sigla: '1PR',
  titulo: 'Recuperatorio 1.er parcial — Tema 1',
  fecha: '15 de octubre de 2025',
  carrera: 'FaEA — Área Álgebra',
  resumen: 'Coplanaridad, módulo y perpendicularidad con parámetro; distancia punto-recta y ángulo entre rectas; posición relativa y haz de planos.',
  unidades: ['u1', 'u2', 'u3'],
  nota: tex`<b class="lbl">Consigna del examen</b> «TODAS LAS RESPUESTAS DEBEN ESTAR JUSTIFICADAS.»<br><br>
  <b class="lbl">El patrón de los tres ejercicios</b> Igual que en el parcial: uno por unidad, cada uno con un parámetro a determinar. El ejercicio 1 pide <em>tres</em> condiciones distintas sobre el mismo $a$, y las tres son independientes entre sí — no hay que buscar un $a$ que cumpla las tres a la vez.`,

  ejercicios: [

  /* --------------------------- 1 --------------------------- */
  { id: 'p1r-1', num: '1',
    enunciado: tex`<p>Dados los vectores $\vec u = 3\breve i - 2\breve j$, $\;\vec v = (-2,3,2)$ y $\;\vec w = (1,1,a)$.</p>
    <div class="note"><b class="lbl">Traducción del primer vector</b> $3\breve i - 2\breve j$ en componentes es $(3,\, -2,\, 0)$ ([[u1-canonicos]]).</div>`,
    incisos: [

      { id: 'p1r-1a', rot: 'a', enunciado: tex`Hallar el o los valores de $a$ para que los vectores sean <strong>coplanares</strong>.`,
        conceptos: ['u1-coplanaridad', 'u1-producto-mixto'],
        pista: tex`Coplanares ⟺ producto mixto nulo ⟺ determinante $3\times3$ igual a cero. Una sola ecuación lineal en $a$.`,
        resolucion: tex`<p>Por [[u1-coplanaridad]], tres vectores de $\mathbb{R}^3$ son coplanares si y sólo si su producto mixto es cero, es decir si el determinante que forman se anula:</p>
        <div class="fx center">$$\begin{vmatrix} 3 & -2 & 0 \\ -2 & 3 & 2 \\ 1 & 1 & a \end{vmatrix} = 0$$</div>
        <p>Desarrollando por la primera fila (conviene, porque tiene un cero):</p>
        <div class="fx center">$$3\begin{vmatrix} 3 & 2 \\ 1 & a \end{vmatrix} - (-2)\begin{vmatrix} -2 & 2 \\ 1 & a \end{vmatrix} + 0 = 3(3a - 2) + 2(-2a - 2)$$</div>
        <div class="fx center">$$= 9a - 6 - 4a - 4 = 5a - 10 = 0 \;\Longrightarrow\; \boxed{a = 2}$$</div>

        <h3>Verificación</h3>
        <p>Con $a = 2$ es $\vec w = (1,1,2)$. Recalculando el determinante:</p>
        <div class="fx center">$$3(3\cdot2 - 2\cdot1) + 2(-2\cdot2 - 2\cdot1) = 3(4) + 2(-6) = 12 - 12 = 0 \;✓$$</div>
        <div class="note tip"><b class="lbl">Control independiente</b> Si son coplanares, uno debe estar en el plano de los otros dos. En efecto: $\;\vec u \times \vec v = (3,-2,0)\times(-2,3,2) = (-4,\,-6,\,5)$, y
        $$\vec w \cdot (\vec u \times \vec v) = (1,1,2)\cdot(-4,-6,5) = -4 - 6 + 10 = 0 \;✓$$</div>`,
        resultado: tex`$a = 2$, de $5a - 10 = 0$.` },

      { id: 'p1r-1b', rot: 'b', enunciado: tex`Encontrar el o los valores de $a$ para que $\bigl\|(a,\, -a,\, a)\bigr\| = \|\vec v\|$.`,
        conceptos: ['u1-modulo'],
        pista: tex`Ojo: el módulo de $(a,-a,a)$ es $|a|\sqrt3$ — con <em>valor absoluto</em>, no $a\sqrt3$. De ahí salen dos soluciones.`,
        resolucion: tex`<p>Por la definición de [[u1-modulo]]:</p>
        <div class="fx center">$$\|\vec v\| = \sqrt{(-2)^2 + 3^2 + 2^2} = \sqrt{4 + 9 + 4} = \sqrt{17}$$</div>
        <div class="fx center">$$\bigl\|(a,-a,a)\bigr\| = \sqrt{a^2 + (-a)^2 + a^2} = \sqrt{3a^2} = |a|\,\sqrt3$$</div>
        <p>Igualando:</p>
        <div class="fx center">$$|a|\sqrt3 = \sqrt{17} \;\Longrightarrow\; |a| = \frac{\sqrt{17}}{\sqrt3} = \sqrt{\frac{17}{3}} = \frac{\sqrt{51}}{3}$$</div>
        <div class="fx center">$$\boxed{a = \frac{\sqrt{51}}{3} \quad\text{o}\quad a = -\frac{\sqrt{51}}{3}} \qquad \left(\tfrac{\sqrt{51}}{3} \approx 2{,}38\right)$$</div>

        <h3>Verificación</h3>
        <p>Con $|a| = \tfrac{\sqrt{51}}{3}$ es $a^2 = \tfrac{51}{9} = \tfrac{17}{3}$, luego</p>
        <div class="fx center">$$\sqrt{3a^2} = \sqrt{3 \cdot \tfrac{17}{3}} = \sqrt{17} = \|\vec v\| \;✓$$</div>
        <div class="note warn"><b class="lbl">Las dos son soluciones, y hay que dar las dos</b>
        El enunciado dice «el o los valores», que es el aviso de la cátedra de que puede haber más de uno. Como la condición es sobre un <strong>módulo</strong>, los dos signos sirven: $(a,-a,a)$ y su opuesto tienen el mismo módulo.</div>
        <div class="note tip"><b class="lbl">Racionalizar</b> $\dfrac{\sqrt{17}}{\sqrt3} = \dfrac{\sqrt{17}\sqrt3}{3} = \dfrac{\sqrt{51}}{3}$. Las dos formas son correctas; la segunda es la que la cátedra prefiere.</div>`,
        resultado: tex`$a = \pm\dfrac{\sqrt{51}}{3} = \pm\sqrt{\tfrac{17}{3}} \approx \pm 2{,}38$, porque $|a|\sqrt3 = \sqrt{17}$.` },

      { id: 'p1r-1c', rot: 'c', enunciado: tex`¿Existe algún valor de $a$ para que $\vec u + \vec v$ sea <strong>perpendicular</strong> a $\vec w$?`,
        conceptos: ['u1-teorema-3', 'u1-suma', 'u1-producto-escalar'],
        pista: tex`La pregunta es «¿existe?», así que la respuesta empieza por sí o no y después se justifica. Sumá primero y después imponé producto escalar nulo.`,
        resolucion: tex`<p><strong>Sí, existe uno solo.</strong></p>
        <ol class="pasos">
          <li><span class="ptit">La suma</span> ([[u1-suma]], componente a componente):
            $$\vec u + \vec v = (3,-2,0) + (-2,3,2) = (1,\, 1,\, 2)$$</li>
          <li><span class="ptit">Condición de perpendicularidad.</span> Por el [[u1-teorema-3]], dos vectores no nulos son perpendiculares si y sólo si su producto escalar es nulo:
            $$(\vec u + \vec v) \cdot \vec w = (1,1,2)\cdot(1,1,a) = 1 + 1 + 2a = 2 + 2a = 0$$
            $$\boxed{a = -1}$$</li>
        </ol>
        <h3>Verificación</h3>
        <p>Con $a = -1$ es $\vec w = (1,1,-1)$, y</p>
        <div class="fx center">$$(1,1,2)\cdot(1,1,-1) = 1 + 1 - 2 = 0 \;✓$$</div>
        <p>Ninguno de los dos es el vector nulo, así que la perpendicularidad es efectiva (y no el caso degenerado del producto escalar nulo por tener un factor nulo).</p>
        <div class="note tip"><b class="lbl">Por qué la solución es única</b> La ecuación $2 + 2a = 0$ es lineal con coeficiente $2 \neq 0$ en $a$: tiene exactamente una raíz. Si el coeficiente de $a$ hubiera sido $0$, habría dos escenarios: ningún valor (si el término constante no se anula) o todos (si se anula). Conviene mirar siempre ese coeficiente antes de responder «existe un único».</div>
        <div class="note"><b class="lbl">Los tres incisos son independientes</b> $a = 2$ en (a), $a = \pm\tfrac{\sqrt{51}}{3}$ en (b), $a = -1$ en (c): tres condiciones distintas sobre el mismo símbolo, y ningún valor cumple dos a la vez. No hay que buscar compatibilidad entre ellas.</div>`,
        resultado: tex`Sí: $a = -1$, único, porque $(\vec u + \vec v)\cdot \vec w = 2 + 2a$ y la ecuación es lineal.` }
    ]},

  /* --------------------------- 2 --------------------------- */
  { id: 'p1r-2', num: '2',
    enunciado: tex`<p>Dadas las rectas $L_1: \begin{cases} x = -4 - \lambda \\ y = \lambda \end{cases}$ con $\lambda \in \mathbb{R}$, $\;\;L_2: y - 2 = x$ y $\;\;L_3: x + k\,y - 6 = 0$.</p>
    <div class="note tip"><b class="lbl">Pasar $L_1$ a implícita ayuda</b> Sumando las dos ecuaciones paramétricas, $x + y = -4$, o sea $L_1: x + y + 4 = 0$. Tener las dos formas a mano —paramétrica e implícita— es lo que hace corto el inciso (a).</div>`,
    incisos: [

      { id: 'p1r-2a', rot: 'a', enunciado: tex`Hallar el o los puntos de la recta $L_1$ que se encuentren a <strong>menor distancia</strong> del punto $P = (2,1)$. Dar dicha distancia.`,
        conceptos: ['u2-distancia-punto-recta', 'u2-perpendicularidad', 'u2-parametrica'],
        pista: tex`El punto más cercano es el <strong>pie de la perpendicular</strong>. Usá la forma paramétrica para el punto y la implícita para la distancia: cada una sirve para una mitad.`,
        resolucion: tex`<p>El punto de $L_1$ más próximo a $P$ es <strong>único</strong>: es el pie de la perpendicular desde $P$ a $L_1$ ([[u2-perpendicularidad]]). Hay que dar ese punto y la distancia.</p>

        <h3>Paso 1 — El punto (pie de la perpendicular)</h3>
        <p>El punto genérico de $L_1$ es $Q_\lambda = (-4-\lambda,\;\; \lambda)$, y el director es $\vec d = (-1,\, 1)$ ([[u2-parametrica]]).</p>
        <p>El vector que va de $Q_\lambda$ a $P$ es</p>
        <div class="fx center">$$\overrightarrow{Q_\lambda P} = \bigl(2 - (-4-\lambda),\;\; 1 - \lambda\bigr) = (6 + \lambda,\;\; 1 - \lambda)$$</div>
        <p>y debe ser perpendicular al director:</p>
        <div class="fx center">$$\overrightarrow{Q_\lambda P} \cdot \vec d = -(6+\lambda) + (1-\lambda) = -6 - \lambda + 1 - \lambda = -5 - 2\lambda = 0 \;\Longrightarrow\; \lambda = -\frac{5}{2}$$</div>
        <div class="fx center">$$Q = \left(-4 + \tfrac{5}{2},\;\; -\tfrac52\right) = \left(-\frac{3}{2},\;\; -\frac{5}{2}\right)$$</div>

        <h3>Paso 2 — La distancia</h3>
        <p>Con la forma implícita $L_1: x + y + 4 = 0$ y [[u2-distancia-punto-recta]]:</p>
        <div class="fx center">$$d(P, L_1) = \frac{|2 + 1 + 4|}{\sqrt{1^2 + 1^2}} = \frac{7}{\sqrt2} = \frac{7\sqrt2}{2} \approx 4{,}95$$</div>

        <h3>Verificaciones</h3>
        <p><strong>$Q \in L_1$:</strong> $\;-\tfrac32 - \tfrac52 + 4 = -4 + 4 = 0$ ✓</p>
        <p><strong>La distancia $PQ$ coincide con la fórmula:</strong></p>
        <div class="fx center">$$\overrightarrow{QP} = \left(2 + \tfrac32,\;\; 1 + \tfrac52\right) = \left(\tfrac72,\; \tfrac72\right), \qquad \|\overrightarrow{QP}\| = \tfrac72\sqrt2 = \frac{7\sqrt2}{2} \;✓$$</div>
        <p><strong>Perpendicularidad:</strong> $\;\left(\tfrac72,\tfrac72\right)\cdot(-1,1) = -\tfrac72 + \tfrac72 = 0$ ✓</p>
        <div class="note"><b class="lbl">«El o los puntos»: acá es uno solo</b>
        La redacción de la cátedra deja abierta la cantidad, pero el punto de una recta más cercano a un punto dado es siempre <strong>único</strong> (el pie de la perpendicular). Que $\overrightarrow{QP}$ resulte múltiplo del normal $(1,1)$ —en efecto, $\left(\tfrac72,\tfrac72\right) = \tfrac72(1,1)$— es el control de que está bien.</div>`,
        resultado: tex`$Q = \left(-\tfrac32,\, -\tfrac52\right)$, único, con $d(P,L_1) = \dfrac{7}{\sqrt2} = \dfrac{7\sqrt2}{2} \approx 4{,}95$.` },

      { id: 'p1r-2b', rot: 'b', enunciado: tex`Encontrar el o los valores de $k \in \mathbb{R}$ para que las rectas $L_2$ y $L_3$ formen un ángulo de $60°$.`,
        conceptos: ['u2-angulo-rectas'],
        pista: tex`$\cos 60° = \tfrac12$. Planteá la fórmula del ángulo, elevá al cuadrado y resolvé la cuadrática en $k$.`,
        resolucion: tex`<h3>Los normales</h3>
        <p>$L_2: y - 2 = x$ se escribe $x - y + 2 = 0$, de normal $\vec n_2 = (1,-1)$.</p>
        <p>$L_3: x + ky - 6 = 0$ tiene normal $\vec n_3 = (1, k)$.</p>

        <h3>La ecuación del ángulo</h3>
        <p>Por [[u2-angulo-rectas]], con $\cos 60° = \tfrac12$:</p>
        <div class="fx center">$$\frac{|\vec n_2 \cdot \vec n_3|}{\|\vec n_2\|\,\|\vec n_3\|} = \frac{|1 - k|}{\sqrt2 \cdot \sqrt{1+k^2}} = \frac{1}{2}$$</div>
        <p>Elevando al cuadrado (legítimo: los dos miembros son $\geq 0$):</p>
        <div class="fx center">$$\frac{(1-k)^2}{2(1+k^2)} = \frac14 \;\Longrightarrow\; 4(1 - 2k + k^2) = 2(1 + k^2)$$</div>
        <div class="fx center">$$4k^2 - 8k + 4 = 2k^2 + 2 \;\Longrightarrow\; 2k^2 - 8k + 2 = 0 \;\Longrightarrow\; k^2 - 4k + 1 = 0$$</div>
        <div class="fx center">$$\Delta = 16 - 4 = 12, \qquad k = \frac{4 \pm \sqrt{12}}{2} = \frac{4 \pm 2\sqrt3}{2} = 2 \pm \sqrt3$$</div>
        <div class="fx center">$$\boxed{k_1 = 2 + \sqrt3 \approx 3{,}73 \qquad k_2 = 2 - \sqrt3 \approx 0{,}27}$$</div>

        <h3>Verificación de $k = 2+\sqrt3$</h3>
        <div class="fx center">$$1 - k = -1 - \sqrt3 \;\Longrightarrow\; (1-k)^2 = 1 + 2\sqrt3 + 3 = 4 + 2\sqrt3$$</div>
        <div class="fx center">$$k^2 = 7 + 4\sqrt3 \;\Longrightarrow\; 2(1+k^2) = 2(8 + 4\sqrt3) = 4\,(4 + 2\sqrt3)$$</div>
        <div class="fx center">$$\frac{(1-k)^2}{2(1+k^2)} = \frac{4+2\sqrt3}{4(4+2\sqrt3)} = \frac14 \;✓ \;\Longrightarrow\; \cos\theta = \tfrac12,\;\; \theta = 60° \;✓$$</div>
        <p>(El caso $k = 2-\sqrt3$ sale igual: las dos raíces cumplen $k_1 + k_2 = 4$ y $k_1 k_2 = 1$, por Vieta sobre $k^2-4k+1$.)</p>
        <div class="note tip"><b class="lbl">Por qué dos soluciones, geométricamente</b>
        Fijada $L_2$, hay <strong>dos direcciones</strong> que forman $60°$ con ella: una girando el ángulo hacia un lado y otra hacia el otro. Cada una da un valor de $k$. Es el mismo fenómeno que las dos soluciones en los problemas de distancia.</div>`,
        resultado: tex`$k = 2 \pm \sqrt3$ (de $k^2 - 4k + 1 = 0$), es decir $k_1 \approx 3{,}73$ y $k_2 \approx 0{,}27$.` }
    ]},

  /* --------------------------- 3 --------------------------- */
  { id: 'p1r-3', num: '3',
    enunciado: tex`<p>Dadas las rectas $L_1: \begin{cases} 2x - \tfrac{7}{2}\,y + 11 = 0 \\ z = 0 \end{cases}$ y $\;\;L_2: \dfrac{x-1}{2} = y = \dfrac{z+1}{-1}$.</p>
    <div class="note tip"><b class="lbl">Conviene sacar la fracción primero</b> Multiplicando la primera ecuación de $L_1$ por 2 queda $4x - 7y + 22 = 0$, con coeficientes enteros. Es la misma recta y las cuentas salen mucho más limpias.</div>`,
    incisos: [

      { id: 'p1r-3a', rot: 'a', enunciado: tex`Estudiar la <strong>posición relativa</strong> de las rectas dadas.`,
        conceptos: ['u3-teorema-7', 'u3-alabeadas', 'u3-recta-interseccion'],
        pista: tex`Primero punto y director de cada una. Después: ¿directores paralelos? ¿producto mixto nulo? Ese par de preguntas decide todo.`,
        resolucion: tex`<h3>Paso 1 — Punto y director de cada recta</h3>
        <p><strong>$L_2$</strong> está en forma simétrica, así que se leen directamente:</p>
        <div class="fx center">$$\frac{x-1}{2} = \frac{y-0}{1} = \frac{z+1}{-1} \;\Longrightarrow\; P_2 = (1,\, 0,\, -1), \quad \vec d_2 = (2,\, 1,\, -1)$$</div>
        <p><strong>$L_1$</strong> es intersección de dos planos: $4x - 7y + 22 = 0$ (normal $(4,-7,0)$) y $z = 0$ (normal $(0,0,1)$). El director es el producto vectorial de los normales ([[u3-recta-interseccion]]):</p>
        <div class="fx center">$$(4,-7,0) \times (0,0,1) = \bigl((-7)(1) - 0,\;\; 0 - (4)(1),\;\; 0 - 0\bigr) = (-7,\, -4,\, 0)$$</div>
        <p>Se puede tomar el opuesto, $\vec d_1 = (7,\, 4,\, 0)$, que es más cómodo. Un punto: con $y = 2$, $z = 0$ queda $\;4x - 14 + 22 = 0 \Rightarrow x = -2$, luego $P_1 = (-2,\, 2,\, 0)$.</p>
        <p>Control: $4(-2) - 7(2) + 22 = -8 - 14 + 22 = 0$ ✓, y $z = 0$ ✓.</p>

        <h3>Paso 2 — ¿Paralelas?</h3>
        <p>$\vec d_1 = (7,4,0)$ y $\vec d_2 = (2,1,-1)$: la tercera componente de $\vec d_1$ es $0$ y la de $\vec d_2$ no, así que no hay escalar que las relacione. <strong>No son paralelas.</strong></p>

        <h3>Paso 3 — ¿Se cortan o son alabeadas?</h3>
        <p>Por el [[u3-teorema-7]], dos rectas no paralelas se cortan si y sólo si son coplanares, y eso se decide con el producto mixto de $\overrightarrow{P_1P_2}$, $\vec d_1$ y $\vec d_2$:</p>
        <div class="fx center">$$\overrightarrow{P_1P_2} = (1-(-2),\;\; 0-2,\;\; -1-0) = (3,\, -2,\, -1)$$</div>
        <div class="fx center">$$\begin{vmatrix} 3 & -2 & -1 \\ 7 & 4 & 0 \\ 2 & 1 & -1 \end{vmatrix}
        = 3\bigl(4(-1) - 0\bigr) + 2\bigl(7(-1) - 0\bigr) - 1\bigl(7 - 8\bigr)$$</div>
        <div class="fx center">$$= 3(-4) + 2(-7) - (-1) = -12 - 14 + 1 = -25 \neq 0$$</div>
        <p>El producto mixto no se anula ⟹ no son coplanares ⟹ <strong>son alabeadas</strong> ([[u3-alabeadas]]).</p>

        <h3>La distancia entre ellas</h3>
        <p>Como son alabeadas, tiene sentido dar la distancia (se reutiliza el mismo producto mixto):</p>
        <div class="fx center">$$\vec d_1 \times \vec d_2 = (7,4,0)\times(2,1,-1) = \bigl(4(-1)-0,\;\; 0-7(-1),\;\; 7-8\bigr) = (-4,\, 7,\, -1)$$</div>
        <div class="fx center">$$\|\vec d_1 \times \vec d_2\| = \sqrt{16 + 49 + 1} = \sqrt{66}$$</div>
        <div class="fx center">$$d(L_1, L_2) = \frac{\bigl|\overrightarrow{P_1P_2} \cdot (\vec d_1 \times \vec d_2)\bigr|}{\|\vec d_1 \times \vec d_2\|} = \frac{|-25|}{\sqrt{66}} = \frac{25}{\sqrt{66}} = \frac{25\sqrt{66}}{66} \approx 3{,}08$$</div>
        <p>Control del numerador: $(3,-2,-1)\cdot(-4,7,-1) = -12 - 14 + 1 = -25$ ✓, el mismo valor que el determinante.</p>
        <div class="note tip"><b class="lbl">Guardate el $(-4,7,-1)$ y el $25$</b> Los dos reaparecen en el inciso (b): el vector es el normal del plano buscado y el $25$ explica por qué $L_2$ queda a esa distancia de él.</div>`,
        resultado: tex`<strong>Alabeadas.</strong> $L_1 = \{(-2,2,0) + \lambda(7,4,0)\}$ y $L_2 = \{(1,0,-1)+\mu(2,1,-1)\}$: directores no paralelos y producto mixto $-25 \neq 0$. Distancia: $\dfrac{25}{\sqrt{66}} \approx 3{,}08$.` },

      { id: 'p1r-3b', rot: 'b', enunciado: tex`Hallar un plano $\pi$ que contenga a $L_1$ y sea <strong>paralelo</strong> a $L_2$.`,
        conceptos: ['u3-normal-desde-directores', 'u3-teorema-5-6'],
        pista: tex`El normal ya está calculado en (a). El punto, también.`,
        resolucion: tex`<p>El plano tiene que cumplir dos cosas: contener la dirección de $L_1$ y ser paralelo a la de $L_2$. En ambos casos el normal debe ser perpendicular al director, así que</p>
        <div class="fx center">$$\vec n_\pi = \vec d_1 \times \vec d_2 = (-4,\, 7,\, -1)$$</div>
        <p>que ya calculamos en (a) ([[u3-normal-desde-directores]]). Pasando por $P_1 = (-2,2,0) \in L_1$:</p>
        <div class="fx center">$$-4(x + 2) + 7(y - 2) - 1(z - 0) = 0$$</div>
        <div class="fx center">$$-4x - 8 + 7y - 14 - z = 0 \;\Longrightarrow\; -4x + 7y - z - 22 = 0$$</div>
        <p>Multiplicando por $-1$ para dejar el primer coeficiente positivo:</p>
        <div class="fx center">$$\boxed{\pi: \; 4x - 7y + z + 22 = 0}$$</div>

        <h3>Verificaciones</h3>
        <p><strong>$L_1 \subset \pi$</strong> — hacen falta las dos condiciones ([[u3-teorema-5-6]]):</p>
        <ul>
          <li>el punto: $\;4(-2) - 7(2) + 0 + 22 = -8 - 14 + 22 = 0$ ✓</li>
          <li>el director: $\;\vec d_1 \cdot \vec n_\pi = (7,4,0)\cdot(4,-7,1) = 28 - 28 + 0 = 0$ ✓</li>
        </ul>
        <p><strong>$L_2 \parallel \pi$</strong> — dirección paralela pero punto afuera:</p>
        <ul>
          <li>$\vec d_2 \cdot \vec n_\pi = (2,1,-1)\cdot(4,-7,1) = 8 - 7 - 1 = 0$ ✓ (paralela al plano)</li>
          <li>$P_2 = (1,0,-1)$: $\;4(1) - 7(0) + (-1) + 22 = 25 \neq 0$ ✓ (no contenida)</li>
        </ul>
        <div class="note tip"><b class="lbl">De dónde sale el 25, y por qué cierra todo</b>
        Al evaluar $P_2$ en $\pi$ aparece exactamente $25$, el mismo número que el producto mixto de (a). No es casualidad: la distancia de $L_2$ a $\pi$ es
        $$d(P_2, \pi) = \frac{|25|}{\|\vec n_\pi\|} = \frac{25}{\sqrt{66}}$$
        que es <strong>la distancia entre las dos rectas alabeadas</strong>. Tiene sentido: la perpendicular común va de $L_1$ (dentro de $\pi$) a $L_2$ (paralela a $\pi$), así que medir recta-a-recta es lo mismo que medir $L_2$-a-$\pi$. Es el mejor control cruzado de los dos incisos.</div>
        <div class="note"><b class="lbl">Por qué el enunciado dice «un plano» y no «el plano»</b>
        La ecuación es única salvo múltiplos: $8x - 14y + 2z + 44 = 0$ describe el mismo plano. El plano como objeto geométrico sí es único, porque está determinado por $L_1$ más la dirección de $L_2$.</div>`,
        resultado: tex`$\pi: 4x - 7y + z + 22 = 0$, con $\vec n_\pi = \vec d_1 \times \vec d_2 = (-4,7,-1)$ y $P_1 = (-2,2,0)$. Control: $d(L_2, \pi) = \tfrac{25}{\sqrt{66}} = d(L_1,L_2)$.` },

      { id: 'p1r-3c', rot: 'c', enunciado: tex`¿La recta $L_2$ está contenida en el plano $\pi_1: x + y + 3z = 0$? Dar el <strong>haz de todos los planos perpendiculares a $L_2$</strong>.`,
        conceptos: ['u3-pertenencia', 'u3-teorema-5-6', 'u3-plano-implicita'],
        pista: tex`Para la primera pregunta: dos chequeos, no uno. Para la segunda: ¿qué tiene que ser el normal de un plano perpendicular a una recta?`,
        resolucion: tex`<h3>Primera parte — ¿$L_2 \subset \pi_1$?</h3>
        <p><strong>No.</strong> Por [[u3-pertenencia]], para que una recta esté contenida en un plano hacen falta <em>dos</em> condiciones, y acá sólo se cumple una.</p>
        <ol class="pasos">
          <li><span class="ptit">Dirección.</span> $\;\vec d_2 \cdot \vec n_{\pi_1} = (2,1,-1)\cdot(1,1,3) = 2 + 1 - 3 = 0$ ✓
            <p>La recta es <strong>paralela</strong> al plano.</p></li>
          <li><span class="ptit">Punto.</span> $\;P_2 = (1,0,-1)$ en $\pi_1$: $\;1 + 0 + 3(-1) = -2 \neq 0$ ✗
            <p>El punto <strong>no</strong> pertenece al plano.</p></li>
        </ol>
        <p><strong>Conclusión:</strong> $L_2$ es <strong>paralela a $\pi_1$ pero no está contenida</strong> en él, es decir $L_2 \cap \pi_1 = \varnothing$. La distancia entre ellos es constante:</p>
        <div class="fx center">$$d(L_2, \pi_1) = \frac{|-2|}{\sqrt{1+1+9}} = \frac{2}{\sqrt{11}} \approx 0{,}60$$</div>
        <div class="note warn"><b class="lbl">El error típico de este ítem</b>
        Verificar sólo que $\vec d_2 \perp \vec n_{\pi_1}$ y concluir «sí, está contenida». Ese chequeo solo dice que la recta <em>no corta</em> al plano; para distinguir «contenida» de «paralela disjunta» hace falta el punto. Son dos preguntas distintas y la segunda es la que decide.</div>

        <h3>Segunda parte — El haz de planos perpendiculares a $L_2$</h3>
        <p>Un plano es perpendicular a una recta cuando su normal es <strong>paralelo al director</strong> de la recta ([[u3-teorema-5-6]]). Con $\vec d_2 = (2,1,-1)$, todo plano perpendicular a $L_2$ tiene normal $t\,(2,1,-1)$, y su ecuación implícita ([[u3-plano-implicita]]) es</p>
        <div class="fx center">$$\boxed{2x + y - z + d = 0, \qquad d \in \mathbb{R}}$$</div>
        <p>Es un <strong>haz impropio</strong>: infinitos planos <em>paralelos entre sí</em>, uno por cada valor de $d$, todos atravesados perpendicularmente por $L_2$.</p>
        <div class="note tip"><b class="lbl">El miembro del haz que pasa por $P_2$</b>
        Imponiendo que contenga a $P_2 = (1,0,-1)$: $\;2(1) + 0 - (-1) + d = 3 + d = 0 \Rightarrow d = -3$, es decir $2x + y - z - 3 = 0$. Es el plano perpendicular a $L_2$ <em>en</em> el punto $P_2$, el que se usa cuando hay que proyectar algo ortogonalmente sobre $L_2$.</div>
        <div class="note"><b class="lbl">Haz propio vs. impropio</b>
        Acá el parámetro es el término independiente $d$, no la dirección: todos los planos del haz tienen el mismo normal. Es el caso opuesto al haz de rectas del parcial, donde el centro estaba fijo y giraba la dirección.</div>`,
        resultado: tex`<strong>No</strong> está contenida: $\vec d_2 \perp \vec n_{\pi_1}$ ✓ pero $P_2 \notin \pi_1$ ($1+0-3 = -2 \neq 0$), así que es paralela y disjunta, a distancia $\tfrac{2}{\sqrt{11}}$. El haz pedido es $2x + y - z + d = 0$ con $d \in \mathbb{R}$ (haz impropio de normal $\vec d_2$).` }
    ]}
]});

/* ============================================================
   Recuperatorio del segundo parcial — 28/11/2025
   ============================================================ */
EAL.examen({
  id: 'p2r-2025-11-28', tipo: 'p2', sigla: '2PR',
  titulo: 'Recuperatorio 2.º parcial',
  fecha: '28 de noviembre de 2025',
  carrera: 'FaEA — Área Álgebra',
  resumen: 'Subespacios e intersección con interpretación geométrica, matriz de una transformación R³ → P₂ en distintas bases, y reconstrucción de T a partir del núcleo.',
  unidades: ['u4', 'u5', 'u6'],
  nota: tex`<b class="lbl">Consigna del examen</b> «TODAS LAS RESPUESTAS DEBEN ESTAR JUSTIFICADAS.»<br><br>
  <b class="lbl">Por qué conviene empezar por acá</b> Este modelo cubre casi exactamente el contenido de las unidades 4, 5 y 6, y su ejercicio 2 es prácticamente el ejercicio 14 del TP 6.<br><br>
  <b class="lbl">Recordatorio de notación</b> La cátedra escribe $[T]_{BD}$ con la base del <strong>dominio primero</strong> y la del <strong>codominio segundo</strong>, de modo que $[T(v)]_D = [T]_{BD}\,[v]_B$. Varios libros lo escriben al revés; acá se usa siempre la convención de la cátedra ([[u6-matriz-asociada]]).`,

  ejercicios: [

  /* --------------------------- 1 --------------------------- */
  { id: 'p2r-1', num: '1',
    enunciado: tex`<p>Dados los subespacios de $\mathbb{R}^3$: $\;S = \operatorname{gen}\{(1,-1,0),\; (0,1,-1),\; (1,0,-1)\}$ y
    $\;T = \{(x,y,z) \in \mathbb{R}^3 : x + y = 0 \;\wedge\; z = 0\}$.</p>`,
    incisos: [

      { id: 'p2r-1a', rot: 'a', enunciado: tex`Hallar la ecuación que caracteriza a $S$, dar dimensión y base.`,
        conceptos: ['u4-hallar-generado', 'u4-hallar-base', 'u4-base', 'u4-dimension'],
        pista: tex`Antes de hacer cualquier cuenta, mirá los tres generadores: ¿no hay uno que sea suma de los otros dos?`,
        resolucion: tex`<h3>Paso 1 — Los tres generadores no son independientes</h3>
        <p>Se ve a ojo:</p>
        <div class="fx center">$$(1,-1,0) + (0,1,-1) = (1,\, 0,\, -1)$$</div>
        <p>El <strong>tercer generador es la suma de los dos primeros</strong>, así que es redundante ([[u4-hallar-base]]):</p>
        <div class="fx center">$$S = \operatorname{gen}\{(1,-1,0),\; (0,1,-1)\}$$</div>
        <p>Y estos dos sí son linealmente independientes (no son múltiplos uno del otro: el primero tiene tercera componente $0$ y el segundo no).</p>
        <div class="fx center">$$\boxed{\dim S = 2}, \qquad B_S = \{(1,-1,0),\; (0,1,-1)\}$$</div>

        <h3>Paso 2 — La ecuación</h3>
        <p>$S$ es un subespacio de dimensión 2 en $\mathbb{R}^3$, así que se describe con <strong>una</strong> ecuación ([[u4-hallar-generado]]). El vector de coeficientes es perpendicular a los dos generadores, o sea su producto vectorial:</p>
        <div class="fx center">$$(1,-1,0) \times (0,1,-1) = \bigl((-1)(-1) - 0\cdot1,\;\; 0\cdot0 - 1(-1),\;\; 1\cdot1 - (-1)\cdot0\bigr) = (1,\, 1,\, 1)$$</div>
        <div class="fx center">$$\boxed{S = \{(x,y,z) \in \mathbb{R}^3 \;:\; x + y + z = 0\}}$$</div>

        <h3>Verificación por el otro camino</h3>
        <p>Vale la pena hacerlo también planteando el sistema, que es el método general cuando no hay producto vectorial a mano (p. ej. en $\mathbb{R}^4$). Un vector $(x,y,z)$ está en $S$ si existen $\alpha,\beta$ con</p>
        <div class="fx center">$$\alpha(1,-1,0) + \beta(0,1,-1) = (x,y,z) \;\Longrightarrow\; \begin{cases} \alpha = x \\ -\alpha + \beta = y \\ -\beta = z \end{cases}$$</div>
        <p>De la primera, $\alpha = x$; de la tercera, $\beta = -z$. Sustituyendo en la segunda:</p>
        <div class="fx center">$$-x + (-z) = y \;\Longrightarrow\; x + y + z = 0 \;✓$$</div>
        <p><strong>Control de los generadores:</strong> $(1,-1,0)$: $1-1+0 = 0$ ✓; $(0,1,-1)$: $0+1-1 = 0$ ✓; $(1,0,-1)$: $1+0-1 = 0$ ✓ — los tres cumplen la ecuación, como debe ser.</p>
        <div class="note tip"><b class="lbl">El control de dimensión que conviene hacer siempre</b>
        En $\mathbb{R}^3$: una ecuación independiente ⟹ dimensión $3 - 1 = 2$ ✓. Si la cuenta hubiera dado dos ecuaciones, la dimensión tendría que ser 1, y eso no cuadraría con tener dos generadores independientes. Es un chequeo barato que agarra la mayoría de los errores.</div>`,
        resultado: tex`$S: x + y + z = 0$, con $\dim S = 2$ y base $\{(1,-1,0),\,(0,1,-1)\}$. El tercer generador es redundante: $(1,0,-1) = (1,-1,0)+(0,1,-1)$.` },

      { id: 'p2r-1b', rot: 'b', enunciado: tex`Hallar el subespacio $S \cap T$, dar base y dimensión.`,
        conceptos: ['u4-teorema-5', 'u4-hallar-base'],
        pista: tex`Describí $T$ primero. Después fijate si los vectores de $T$ cumplen o no la ecuación de $S$ — puede que no haya nada que resolver.`,
        resolucion: tex`<h3>Paso 1 — Describir $T$</h3>
        <p>$T = \{x+y = 0 \;\wedge\; z = 0\}$: dos ecuaciones independientes en $\mathbb{R}^3$, luego $\dim T = 3 - 2 = 1$. Resolviendo, $y = -x$ y $z = 0$:</p>
        <div class="fx center">$$T = \{(t,\, -t,\, 0) : t \in \mathbb{R}\} = \operatorname{gen}\{(1,-1,0)\}, \qquad \dim T = 1$$</div>

        <h3>Paso 2 — La intersección</h3>
        <p>Por [[u4-teorema-5]] la intersección es un subespacio, y se obtiene juntando <em>todas</em> las ecuaciones:</p>
        <div class="fx center">$$S \cap T: \begin{cases} x + y + z = 0 & (\text{de } S) \\ x + y = 0 & (\text{de } T) \\ z = 0 & (\text{de } T)\end{cases}$$</div>
        <p>Pero la primera ecuación es consecuencia de las otras dos: si $x+y = 0$ y $z = 0$, entonces $x+y+z = 0 + 0 = 0$ automáticamente. El sistema se reduce a las dos de $T$, así que</p>
        <div class="fx center">$$\boxed{S \cap T = T = \operatorname{gen}\{(1,-1,0)\}}, \qquad \dim(S \cap T) = 1$$</div>
        <p>con base $\{(1,-1,0)\}$.</p>

        <h3>Dicho de otro modo: $T \subseteq S$</h3>
        <p>El generador de $T$ cumple la ecuación de $S$:</p>
        <div class="fx center">$$(1,-1,0): \quad 1 + (-1) + 0 = 0 \;✓$$</div>
        <p>y como $S$ es un subespacio, todo múltiplo $(t,-t,0)$ también está en $S$. Entonces $T \subseteq S$, y cuando un conjunto está contenido en el otro la intersección es el chico:</p>
        <div class="fx center">$$T \subseteq S \;\Longrightarrow\; S \cap T = T$$</div>
        <div class="note tip"><b class="lbl">Mirar antes de calcular</b>
        Este inciso se puede responder sin resolver ningún sistema: basta evaluar el generador de $T$ en la ecuación de $S$. Cuando $T$ tiene dimensión 1 (o pocos generadores), chequear la inclusión es siempre más rápido que armar y triangular el sistema combinado.</div>
        <div class="note"><b class="lbl">Control de dimensiones</b>
        $\dim(S\cap T) \leq \min\{\dim S, \dim T\} = \min\{2,1\} = 1$, y dio exactamente 1 ✓. El máximo posible se alcanza justamente cuando uno está contenido en el otro, que es lo que pasa acá.</div>`,
        resultado: tex`$S \cap T = T = \operatorname{gen}\{(1,-1,0)\}$, de dimensión 1 y base $\{(1,-1,0)\}$ — porque $T \subseteq S$ (el generador de $T$ cumple $x+y+z=0$).` },

      { id: 'p2r-1c', rot: 'c', enunciado: tex`Dar interpretación geométrica de $S$, $T$ y $S \cap T$.`,
        conceptos: ['u4-teorema-4', 'u4-hiperplano', 'u4-dimension'],
        pista: tex`En $\mathbb{R}^3$: dimensión 0 → punto, 1 → recta, 2 → plano, 3 → todo el espacio. Y todos pasan por el origen.`,
        resolucion: tex`<p>Todo subespacio de $\mathbb{R}^3$ contiene al vector nulo ([[u4-teorema-4]]), así que todos los objetos de este ejercicio <strong>pasan por el origen</strong>. La dimensión decide qué son ([[u4-dimension]]):</p>

        <div class="tabla-wrap"><table>
          <thead><tr><th>Subespacio</th><th>Dim.</th><th>Es…</th><th>Descripción</th></tr></thead>
          <tbody>
            <tr><td>$S$</td><td>2</td><td><strong>un plano</strong> por el origen</td><td>$x+y+z = 0$, de normal $(1,1,1)$</td></tr>
            <tr><td>$T$</td><td>1</td><td><strong>una recta</strong> por el origen</td><td>dirección $(1,-1,0)$</td></tr>
            <tr><td>$S \cap T$</td><td>1</td><td>la <strong>misma recta</strong> $T$</td><td>$T$ está <em>contenida</em> en el plano $S$</td></tr>
          </tbody>
        </table></div>

        <h3>La figura completa</h3>
        <p>$S$ es el plano por el origen perpendicular a $(1,1,1)$, es decir el plano que corta a los tres ejes en forma simétrica. $T$ es una recta por el origen, con dirección $(1,-1,0)$, que está <strong>acostada dentro de ese plano</strong>: no lo atraviesa, sino que lo recorre.</p>
        <p>Por eso la intersección no es un punto (lo que pasaría si la recta atravesara el plano) sino la recta entera. El control geométrico es que la dirección de $T$ sea perpendicular al normal de $S$:</p>
        <div class="fx center">$$(1,-1,0) \cdot (1,1,1) = 1 - 1 + 0 = 0 \;✓$$</div>
        <div class="note tip"><b class="lbl">$S$ es un hiperplano</b>
        Un subespacio de dimensión $n-1$ en un espacio de dimensión $n$ se llama <strong>hiperplano</strong> ([[u4-hiperplano]]). En $\mathbb{R}^3$ los hiperplanos son los planos por el origen; en $\mathbb{R}^2$ serían las rectas por el origen. Siempre se describen con una sola ecuación lineal homogénea, que es exactamente la forma de $S$.</div>
        <div class="note warn"><b class="lbl">Recta y plano «por el origen», no cualquiera</b>
        Un plano como $x+y+z = 1$ <strong>no</strong> es un subespacio: no contiene al $\vec 0$. Al interpretar geométricamente un subespacio hay que decir siempre «por el origen» — es lo que lo distingue de la recta o el plano genéricos de las unidades 2 y 3.</div>`,
        resultado: tex`$S$ es un <strong>plano por el origen</strong> ($\dim 2$, normal $(1,1,1)$), $T$ es una <strong>recta por el origen</strong> ($\dim 1$, dirección $(1,-1,0)$), y $S \cap T = T$: la recta está <strong>contenida</strong> en el plano. Control: $(1,-1,0)\cdot(1,1,1) = 0$.` }
    ]},

  /* --------------------------- 2 --------------------------- */
  { id: 'p2r-2', num: '2',
    enunciado: tex`<p>Sea $[T]_{BC} = \begin{pmatrix} -1 & 1 & -1 \\ 4 & 2 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ la representación matricial de la transformación lineal $T: \mathbb{R}^3 \to P_2$ respecto de la base $B = \{(2,3,1),\; (0,1,-1),\; (0,0,1)\}$ y de la canónica $C = \{x^2,\, x,\, 1\}$ de $P_2$.</p>`,
    incisos: [

      { id: 'p2r-2a', rot: 'a', enunciado: tex`Sabiendo que $D = \{x^2 - 2x + 1,\;\; x,\;\; 2x^2 - x + 1\}$ es base de $P_2$, calcular $[T]_{BD}$.`,
        conceptos: ['u6-cambio-base-matriz', 'u5-matriz-cambio', 'u5-inversa'],
        pista: tex`Sólo cambia la base del <strong>codominio</strong>: $B$ queda igual. Así que la matriz de cambio se multiplica por un solo lado. ¿Por cuál?`,
        resolucion: tex`<h3>Qué hay que cambiar</h3>
        <p>Se pasa de $[T]_{BC}$ a $[T]_{BD}$: la base del dominio ($B$) <strong>no cambia</strong>, sólo la del codominio ($C \to D$). Por [[u6-cambio-base-matriz]], eso se corrige multiplicando por izquierda:</p>
        <div class="fx center">$$[T]_{BD} = [\;]_{CD} \cdot [T]_{BC}$$</div>
        <p>donde $[\;]_{CD}$ es la matriz de cambio de base <strong>de $C$ a $D$</strong> ([[u5-matriz-cambio]]).</p>
        <div class="note tip"><b class="lbl">Cómo saber de qué lado va</b>
        Leyendo los subíndices como una cadena que tiene que encajar: $[\;]_{CD}\,[T]_{BC}$ junta $\,{}_{BC}$ con $\,{}_{CD}$ y «cancela» la $C$ del medio, dejando $\,{}_{BD}$ ✓. Si se multiplicara del otro lado, la cadena no cierra. Con la convención de la cátedra —origen primero, destino después— el truco funciona siempre.</div>

        <h3>Paso 1 — La matriz $[\;]_{DC}$ (la fácil)</h3>
        <p>Es directo escribir los vectores de $D$ en la base canónica $C = \{x^2, x, 1\}$, poniéndolos <strong>como columnas</strong>:</p>
        <div class="fx center">$$x^2 - 2x + 1 \to (1,-2,1), \qquad x \to (0,1,0), \qquad 2x^2 - x + 1 \to (2,-1,1)$$</div>
        <div class="fx center">$$[\;]_{DC} = \begin{pmatrix} 1 & 0 & 2 \\ -2 & 1 & -1 \\ 1 & 0 & 1 \end{pmatrix}$$</div>
        <p><strong>Control de que $D$ es base:</strong> desarrollando por la segunda columna (tiene dos ceros),</p>
        <div class="fx center">$$\det[\;]_{DC} = 1 \cdot \begin{vmatrix} 1 & 2 \\ 1 & 1 \end{vmatrix} = 1 - 2 = -1 \neq 0 \;✓$$</div>
        <p>así que los tres polinomios son independientes y $D$ es efectivamente base de $P_2$, como afirma el enunciado.</p>

        <h3>Paso 2 — Invertir</h3>
        <p>La que hace falta es la del otro sentido ([[u5-inversa]]): $\;[\;]_{CD} = \bigl([\;]_{DC}\bigr)^{-1}$.</p>
        <div class="fx center">$$[\;]_{CD} = \begin{pmatrix} -1 & 0 & 2 \\ -1 & 1 & 3 \\ 1 & 0 & -1 \end{pmatrix}$$</div>
        <p><strong>Control</strong> (el producto debe dar la identidad):</p>
        <div class="fx center">$$\begin{pmatrix} 1 & 0 & 2 \\ -2 & 1 & -1 \\ 1 & 0 & 1 \end{pmatrix}
        \begin{pmatrix} -1 & 0 & 2 \\ -1 & 1 & 3 \\ 1 & 0 & -1 \end{pmatrix}
        = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \;✓$$</div>
        <p>(Primera fila: $-1+0+2 = 1$; $\;0+0+0 = 0$; $\;2+0-2 = 0$ ✓)</p>

        <h3>Paso 3 — El producto</h3>
        <div class="fx center">$$[T]_{BD} = \begin{pmatrix} -1 & 0 & 2 \\ -1 & 1 & 3 \\ 1 & 0 & -1 \end{pmatrix}
        \begin{pmatrix} -1 & 1 & -1 \\ 4 & 2 & 1 \\ 1 & 1 & 0 \end{pmatrix}
        = \begin{pmatrix} 3 & 1 & 1 \\ 8 & 4 & 2 \\ -2 & 0 & -1 \end{pmatrix}$$</div>
        <p>Fila por fila:</p>
        <ul>
          <li>$(-1,0,2)$: $\;1+0+2 = 3$; $\;-1+0+2 = 1$; $\;1+0+0 = 1$</li>
          <li>$(-1,1,3)$: $\;1+4+3 = 8$; $\;-1+2+3 = 4$; $\;1+1+0 = 2$</li>
          <li>$(1,0,-1)$: $\;-1+0-1 = -2$; $\;1+0-1 = 0$; $\;-1+0-0 = -1$</li>
        </ul>
        <div class="note tip"><b class="lbl">Control de la primera columna</b>
        La primera columna de $[T]_{BD}$ tiene que ser $[T(2,3,1)]_D$, porque $(2,3,1)$ es el primer vector de $B$. De $[T]_{BC}$, la primera columna es $[T(2,3,1)]_C = (-1,4,1)$, o sea $T(2,3,1) = -x^2+4x+1$. Y en efecto
        $$3(x^2-2x+1) + 8(x) - 2(2x^2-x+1) = (3-4)x^2 + (-6+8+2)x + (3-2) = -x^2 + 4x + 1 \;✓$$
        Este chequeo —una columna cualquiera, reconstruida desde $D$— es el que conviene hacer en el parcial.</div>`,
        resultado: tex`$[T]_{BD} = [\;]_{CD}\,[T]_{BC} = \begin{pmatrix} 3 & 1 & 1 \\ 8 & 4 & 2 \\ -2 & 0 & -1 \end{pmatrix}$, con $[\;]_{CD} = \begin{pmatrix} -1 & 0 & 2 \\ -1 & 1 & 3 \\ 1 & 0 & -1 \end{pmatrix}$.` },

      { id: 'p2r-2b', rot: 'b', enunciado: tex`Hallar $[T(0,-1,1)]_C$; $\;T(0,-1,1)$ y $\;[T(2,4,0)]_D$.`,
        conceptos: ['u6-matriz-asociada', 'u6-de-matriz-a-tl', 'u5-calcular-coordenadas'],
        pista: tex`La matriz come coordenadas en $B$, no vectores de $\mathbb{R}^3$. El primer paso siempre es escribir el vector en la base $B$.`,
        resolucion: tex`<p>La regla es $[T(v)]_D = [T]_{BD}\,[v]_B$ ([[u6-matriz-asociada]]): hay que entrar con las <strong>coordenadas en $B$</strong>, nunca con el vector tal como viene dado.</p>

        <h3>Parte 1 — $[T(0,-1,1)]_C$</h3>
        <p>Primero las coordenadas en $B = \{(2,3,1), (0,1,-1), (0,0,1)\}$ ([[u5-calcular-coordenadas]]). Planteando $\alpha(2,3,1) + \beta(0,1,-1) + \gamma(0,0,1) = (0,-1,1)$:</p>
        <div class="fx center">$$\begin{cases} 2\alpha = 0 \\ 3\alpha + \beta = -1 \\ \alpha - \beta + \gamma = 1 \end{cases}$$</div>
        <p>El sistema es triangular, así que sale en cascada: $\alpha = 0$ ⟹ $\beta = -1$ ⟹ $0 + 1 + \gamma = 1$ ⟹ $\gamma = 0$.</p>
        <div class="fx center">$$[(0,-1,1)]_B = (0,\, -1,\, 0)$$</div>
        <p>Verificación: $0(2,3,1) - 1(0,1,-1) + 0(0,0,1) = (0,-1,1)$ ✓</p>
        <p>Ahora con $[T]_{BC}$:</p>
        <div class="fx center">$$[T(0,-1,1)]_C = \begin{pmatrix} -1 & 1 & -1 \\ 4 & 2 & 1 \\ 1 & 1 & 0 \end{pmatrix}\begin{pmatrix} 0 \\ -1 \\ 0 \end{pmatrix} = -\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ -1 \end{pmatrix}$$</div>
        <div class="note tip"><b class="lbl">Atajo</b> Como $[(0,-1,1)]_B = (0,-1,0)$, el producto es directamente $-1$ veces la <strong>segunda columna</strong> de la matriz. Cuando las coordenadas son casi todas cero no hace falta multiplicar nada.</div>

        <h3>Parte 2 — $T(0,-1,1)$ como polinomio</h3>
        <p>Las coordenadas $(-1,-2,-1)$ están en $C = \{x^2, x, 1\}$, así que se leen como coeficientes ([[u6-de-matriz-a-tl]]):</p>
        <div class="fx center">$$T(0,-1,1) = -1 \cdot x^2 + (-2) \cdot x + (-1) \cdot 1 = -x^2 - 2x - 1 = \boxed{-(x+1)^2}$$</div>

        <h3>Parte 3 — $[T(2,4,0)]_D$</h3>
        <p>Coordenadas de $(2,4,0)$ en $B$:</p>
        <div class="fx center">$$\begin{cases} 2\alpha = 2 \\ 3\alpha + \beta = 4 \\ \alpha - \beta + \gamma = 0 \end{cases} \;\Longrightarrow\; \alpha = 1,\;\; \beta = 1,\;\; \gamma = 0$$</div>
        <p>Verificación: $1(2,3,1) + 1(0,1,-1) + 0(0,0,1) = (2,4,0)$ ✓</p>
        <p>Como se pide en la base $D$, se usa la matriz del inciso (a):</p>
        <div class="fx center">$$[T(2,4,0)]_D = \begin{pmatrix} 3 & 1 & 1 \\ 8 & 4 & 2 \\ -2 & 0 & -1 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3+1 \\ 8+4 \\ -2+0 \end{pmatrix} = \begin{pmatrix} 4 \\ 12 \\ -2 \end{pmatrix}$$</div>
        <p>(Es la suma de las dos primeras columnas, porque las coordenadas son $(1,1,0)$.)</p>

        <h3>Verificación cruzada de la parte 3</h3>
        <p>Es el control más valioso del ejercicio, porque chequea de un saque el inciso (a) y este. Por el camino de $C$:</p>
        <div class="fx center">$$[T(2,4,0)]_C = \begin{pmatrix} -1 & 1 & -1 \\ 4 & 2 & 1 \\ 1 & 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 6 \\ 2 \end{pmatrix} \;\Longrightarrow\; T(2,4,0) = 6x + 2$$</div>
        <p>Y reconstruyendo el mismo polinomio desde las coordenadas en $D$ que acabamos de obtener:</p>
        <div class="fx center">$$4(x^2 - 2x + 1) + 12(x) - 2(2x^2 - x + 1)$$</div>
        <div class="fx center">$$= (4 - 4)x^2 + (-8 + 12 + 2)x + (4 - 2) = 6x + 2 \;✓$$</div>
        <p>Los dos caminos dan el mismo polinomio, así que $[T]_{BD}$ está bien calculada.</p>
        <div class="note warn"><b class="lbl">El error más común de este tipo de ejercicio</b>
        Multiplicar la matriz por $(0,-1,1)$ o $(2,4,0)$ directamente. La matriz <strong>no actúa sobre vectores</strong>, actúa sobre <em>coordenadas en la base del dominio</em>. Con $B$ canónica no se nota la diferencia; acá $B$ no es canónica y da un resultado completamente distinto.</div>`,
        resultado: tex`$[T(0,-1,1)]_C = (-1,-2,-1)$, luego $T(0,-1,1) = -x^2-2x-1 = -(x+1)^2$. Y $[T(2,4,0)]_D = (4, 12, -2)$. Control: por $C$ sale $T(2,4,0) = 6x+2$, y $4(x^2-2x+1)+12x-2(2x^2-x+1) = 6x+2$ ✓` }
    ]},

  /* --------------------------- 3 --------------------------- */
  { id: 'p2r-3', num: '3',
    enunciado: tex`<p>Sea $T: \mathbb{R}^3 \to \mathbb{R}^3$ la transformación lineal tal que $\operatorname{Nuc}(T) = \operatorname{gen}\{(1,2,1)\}$ y se cumple que $T(1,0,0) = (1,0,1)$ y $T(0,1,0) = (0,1,1)$.</p>`,
    incisos: [

      { id: 'p2r-3a', rot: 'a', enunciado: tex`Determinar $T(0,0,1)$ de modo que el núcleo dado sea efectivamente $\operatorname{gen}\{(1,2,1)\}$.`,
        conceptos: ['u6-nucleo-imagen', 'u6-propiedades-tl', 'u6-teorema-unicidad'],
        pista: tex`Escribí $(1,2,1)$ en términos de los canónicos y aplicá linealidad. Queda una sola ecuación vectorial con una sola incógnita.`,
        resolucion: tex`<p>La clave es que $(1,2,1)$ está en el núcleo, o sea $T(1,2,1) = \vec 0$ ([[u6-nucleo-imagen]]). Descomponiendo en canónicos y usando la linealidad ([[u6-propiedades-tl]]):</p>
        <div class="fx center">$$(1,2,1) = 1\cdot(1,0,0) + 2\cdot(0,1,0) + 1\cdot(0,0,1)$$</div>
        <div class="fx center">$$T(1,2,1) = T(1,0,0) + 2\,T(0,1,0) + T(0,0,1) = \vec 0$$</div>
        <p>Sustituyendo los dos datos:</p>
        <div class="fx center">$$(1,0,1) + 2(0,1,1) + T(0,0,1) = (0,0,0)$$</div>
        <div class="fx center">$$(1,0,1) + (0,2,2) = (1,\, 2,\, 3)$$</div>
        <div class="fx center">$$(1,2,3) + T(0,0,1) = (0,0,0) \;\Longrightarrow\; \boxed{T(0,0,1) = (-1,\, -2,\, -3)}$$</div>

        <h3>Verificación de que el núcleo es exactamente ese</h3>
        <p>Hay que chequear dos cosas, no una: que $(1,2,1)$ esté en el núcleo y que el núcleo <strong>no sea más grande</strong>.</p>
        <p><strong>(i) $(1,2,1)$ está:</strong></p>
        <div class="fx center">$$T(1,2,1) = (1,0,1) + 2(0,1,1) + (-1,-2,-3) = (1-1,\;\; 2-2,\;\; 3-3) = (0,0,0) \;✓$$</div>
        <p><strong>(ii) La dimensión del núcleo es 1, no 2 ni 3.</strong> La matriz de $T$ en la canónica tiene por columnas las imágenes de los canónicos:</p>
        <div class="fx center">$$A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 1 & 1 & -3 \end{pmatrix}$$</div>
        <p>La tercera fila es la suma de las dos primeras, y las dos primeras son claramente independientes, así que $\operatorname{rg}(A) = 2$. Entonces</p>
        <div class="fx center">$$\dim \operatorname{Nuc}(T) = 3 - \operatorname{rg}(A) = 3 - 2 = 1 \;✓$$</div>
        <p>Un núcleo de dimensión 1 que contiene a $(1,2,1)$ es exactamente $\operatorname{gen}\{(1,2,1)\}$ ✓</p>
        <div class="note tip"><b class="lbl">Por qué $T(0,0,1)$ queda determinado de forma única</b>
        Por el [[u6-teorema-unicidad]], una transformación lineal está determinada por las imágenes de una base. Acá se dan dos de las tres, y la tercera condición —que $(1,2,1)$ esté en el núcleo— es una ecuación vectorial que fija la que falta. No hay libertad: la respuesta es única.</div>
        <div class="note warn"><b class="lbl">No alcanza con que $T(1,2,1) = \vec 0$</b>
        Esa condición sola garantiza $\operatorname{gen}\{(1,2,1)\} \subseteq \operatorname{Nuc}(T)$, pero no la igualdad. Hay que verificar también la dimensión; si hubiera dado $\dim\operatorname{Nuc} = 2$, el enunciado no se cumpliría y habría que revisar. Es el paso (ii) y suele ser el que se olvida.</div>`,
        resultado: tex`$T(0,0,1) = (-1,-2,-3)$, de $T(1,0,0) + 2T(0,1,0) + T(0,0,1) = \vec 0$. Con eso $\operatorname{rg} = 2$ y $\dim\operatorname{Nuc} = 1$, así que el núcleo es exactamente $\operatorname{gen}\{(1,2,1)\}$.` },

      { id: 'p2r-3b', rot: 'b', enunciado: tex`Hallar la expresión analítica de $T(x,y,z)$.`,
        conceptos: ['u6-hallar-expresion'],
        pista: tex`Ya están las tres imágenes de los canónicos: la expresión sale de combinarlas con $x$, $y$, $z$.`,
        resolucion: tex`<p>Con las imágenes de la base canónica ya conocidas, la expresión sale por linealidad ([[u6-hallar-expresion]]):</p>
        <div class="fx center">$$T(x,y,z) = x\,T(1,0,0) + y\,T(0,1,0) + z\,T(0,0,1)$$</div>
        <div class="fx center">$$= x\,(1,0,1) + y\,(0,1,1) + z\,(-1,-2,-3)$$</div>
        <div class="fx center">$$= (x,\, 0,\, x) + (0,\, y,\, y) + (-z,\, -2z,\, -3z)$$</div>
        <div class="fx center">$$\boxed{T(x,y,z) = (x - z,\;\; y - 2z,\;\; x + y - 3z)}$$</div>

        <h3>Verificaciones</h3>
        <p><strong>Los tres datos:</strong></p>
        <ul>
          <li>$T(1,0,0) = (1-0,\; 0-0,\; 1+0-0) = (1,0,1)$ ✓</li>
          <li>$T(0,1,0) = (0-0,\; 1-0,\; 0+1-0) = (0,1,1)$ ✓</li>
          <li>$T(0,0,1) = (0-1,\; 0-2,\; 0+0-3) = (-1,-2,-3)$ ✓</li>
        </ul>
        <p><strong>El núcleo:</strong> $\;T(1,2,1) = (1-1,\; 2-2,\; 1+2-3) = (0,0,0)$ ✓</p>
        <p><strong>El núcleo completo,</strong> resolviendo $T(x,y,z) = \vec 0$:</p>
        <div class="fx center">$$\begin{cases} x - z = 0 \\ y - 2z = 0 \\ x + y - 3z = 0 \end{cases}$$</div>
        <p>De las dos primeras, $x = z$ e $y = 2z$; la tercera queda $z + 2z - 3z = 0$, que se cumple sola (es redundante). Entonces</p>
        <div class="fx center">$$\operatorname{Nuc}(T) = \{(z,\, 2z,\, z) : z \in \mathbb{R}\} = \operatorname{gen}\{(1,2,1)\} \;✓$$</div>
        <p>exactamente el núcleo que pedía el enunciado.</p>
        <div class="note tip"><b class="lbl">Control de linealidad gratis</b>
        Las tres componentes de la expresión son <strong>polinomios homogéneos de grado 1</strong> en $x,y,z$: sin términos constantes, sin cuadrados, sin productos $xy$. Eso es lo que caracteriza una transformación lineal. Si en la expresión apareciera un $+1$ o un $x^2$, hay un error en algún paso.</div>`,
        resultado: tex`$T(x,y,z) = (x - z,\;\; y - 2z,\;\; x + y - 3z)$. Verificado: reproduce las tres imágenes y su núcleo es exactamente $\operatorname{gen}\{(1,2,1)\}$.` },

      { id: 'p2r-3c', rot: 'c', enunciado: tex`Encontrar una base de la imagen de $T$.`,
        conceptos: ['u6-imagen-generadores', 'u6-teorema-dimension', 'u4-hallar-base'],
        pista: tex`La imagen está generada por las imágenes de los canónicos. Pero hay tres y la dimensión ya se sabe: ¿cuántas pueden ser independientes?`,
        resolucion: tex`<h3>Paso 1 — Cuántos vectores tiene que tener la base</h3>
        <p>Por el [[u6-teorema-dimension]] (teorema de las dimensiones):</p>
        <div class="fx center">$$\dim \operatorname{Nuc}(T) + \dim \operatorname{Im}(T) = \dim \mathbb{R}^3 = 3$$</div>
        <div class="fx center">$$1 + \dim \operatorname{Im}(T) = 3 \;\Longrightarrow\; \dim \operatorname{Im}(T) = 2$$</div>
        <p>Sabemos de entrada que hay que encontrar exactamente <strong>dos</strong> vectores independientes.</p>

        <h3>Paso 2 — Los generadores y la depuración</h3>
        <p>La imagen está generada por las imágenes de los canónicos ([[u6-imagen-generadores]]):</p>
        <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{(1,0,1),\;\; (0,1,1),\;\; (-1,-2,-3)\}$$</div>
        <p>Son tres generadores para un subespacio de dimensión 2, así que uno sobra ([[u4-hallar-base]]). El tercero es combinación de los otros:</p>
        <div class="fx center">$$-1\,(1,0,1) - 2\,(0,1,1) = (-1,\;\; -2,\;\; -1-2) = (-1,-2,-3) \;✓$$</div>
        <p>(Era previsible: es exactamente la relación $T(0,0,1) = -T(1,0,0) - 2T(0,1,0)$ del inciso (a).) Los dos primeros son independientes —no son múltiplos uno del otro— así que</p>
        <div class="fx center">$$\boxed{B_{\operatorname{Im}} = \{(1,0,1),\;\; (0,1,1)\}}, \qquad \dim\operatorname{Im}(T) = 2$$</div>

        <h3>La imagen como plano</h3>
        <p>Siendo de dimensión 2 en $\mathbb{R}^3$, la imagen es un plano por el origen. Su ecuación:</p>
        <div class="fx center">$$(1,0,1) \times (0,1,1) = \bigl(0\cdot1 - 1\cdot1,\;\; 1\cdot0 - 1\cdot1,\;\; 1\cdot1 - 0\cdot0\bigr) = (-1,\, -1,\, 1)$$</div>
        <div class="fx center">$$\operatorname{Im}(T) = \{(x,y,z) : x + y - z = 0\}$$</div>
        <p><strong>Verificación con los tres generadores:</strong></p>
        <ul>
          <li>$(1,0,1)$: $\;1 + 0 - 1 = 0$ ✓</li>
          <li>$(0,1,1)$: $\;0 + 1 - 1 = 0$ ✓</li>
          <li>$(-1,-2,-3)$: $\;-1 - 2 + 3 = 0$ ✓</li>
        </ul>
        <p>Y con la expresión analítica, para cualquier $(x,y,z)$:</p>
        <div class="fx center">$$(x-z) + (y-2z) - (x+y-3z) = x - z + y - 2z - x - y + 3z = 0 \;✓$$</div>
        <p>es decir, <em>toda</em> imagen cumple la ecuación del plano, para todo punto del dominio. Es la verificación más fuerte posible de este inciso.</p>
        <div class="note tip"><b class="lbl">$T$ no es inyectiva ni sobreyectiva</b>
        $\dim\operatorname{Nuc} = 1 \neq 0$ ⟹ no es inyectiva (hay toda una recta que va al $\vec 0$). Y $\dim\operatorname{Im} = 2 < 3$ ⟹ no es sobreyectiva: la imagen es un plano, no todo $\mathbb{R}^3$. En una transformación de un espacio en sí mismo las dos cosas van siempre juntas, y el teorema de las dimensiones es el que lo explica.</div>`,
        resultado: tex`$B_{\operatorname{Im}} = \{(1,0,1),\, (0,1,1)\}$, de dimensión 2 (por el teorema de las dimensiones: $1 + 2 = 3$). El tercer generador es redundante: $(-1,-2,-3) = -(1,0,1) - 2(0,1,1)$. La imagen es el plano $x+y-z = 0$.` }
    ]}
]});

/* ============================================================
   Parcial de promoción — 2/12/25
   ============================================================ */
EAL.examen({
  id: 'prom-2025-12-02', tipo: 'prom', sigla: 'PROM',
  titulo: 'Parcial de promoción',
  fecha: '2 de diciembre de 2025',
  carrera: 'LSI · LCC · PN · SN · PP',
  resumen: 'Un único ejercicio de diagonalización completo, de punta a punta, más el teorema resumen. Es el guion exacto de la unidad 7.',
  unidades: ['u7'],
  nota: tex`<b class="lbl">Qué muestra este modelo</b> El parcial de promoción es <strong>un solo ejercicio</strong> que recorre todos los pasos de [[u7-metodo-diagonalizar]]. Si se puede hacer completo y justificado, la unidad 7 está lista.<br><br>
  <b class="lbl">Atención al espacio</b> La transformación va de $P_2$ en $P_2$, no de $\mathbb{R}^3$ en $\mathbb{R}^3$. Las cuentas son idénticas —$\dim P_2 = 3$— pero los autovectores hay que darlos como <strong>polinomios</strong>, usando la base canónica $C = \{x^2, x, 1\}$ para leer las coordenadas.`,

  ejercicios: [
  { id: 'prom-1', num: '1',
    enunciado: tex`<p>Sea $T: P_2 \to P_2$ tal que $[T]_C = \begin{pmatrix} 8 & 0 & -3 \\ 0 & 5 & 0 \\ 6 & 0 & -1 \end{pmatrix}$. Calcular:</p>
    <div class="note tip"><b class="lbl">Antes de arrancar: la columna de ceros es un regalo</b> La segunda fila y la segunda columna tienen ceros fuera de la diagonal. Eso significa que $x$ ya es autovector (de autovalor 5) y que el determinante característico se desarrolla por esa fila, reduciendo todo a un $2\times2$. Conviene aprovecharlo desde el principio.</div>`,
    incisos: [

      { id: 'prom-1a', rot: 'a', enunciado: tex`Polinomio característico y ecuación característica asociada a $T$.`,
        conceptos: ['u7-polinomio-caracteristico'],
        pista: tex`Desarrollá $\det([T]_C - \lambda I)$ por la segunda fila: queda $(5-\lambda)$ por un determinante de $2\times2$.`,
        resolucion: tex`<p>Por definición ([[u7-polinomio-caracteristico]]), $\;P(\lambda) = \det\bigl([T]_C - \lambda I\bigr)$:</p>
        <div class="fx center">$$[T]_C - \lambda I = \begin{pmatrix} 8-\lambda & 0 & -3 \\ 0 & 5-\lambda & 0 \\ 6 & 0 & -1-\lambda \end{pmatrix}$$</div>
        <p>Desarrollando por la <strong>segunda fila</strong>, que tiene dos ceros:</p>
        <div class="fx center">$$P(\lambda) = (5-\lambda)\begin{vmatrix} 8-\lambda & -3 \\ 6 & -1-\lambda \end{vmatrix}$$</div>
        <div class="fx center">$$= (5-\lambda)\Bigl[(8-\lambda)(-1-\lambda) - (-3)(6)\Bigr] = (5-\lambda)\bigl[(8-\lambda)(-1-\lambda) + 18\bigr]$$</div>
        <p>Desarrollando el corchete:</p>
        <div class="fx center">$$(8-\lambda)(-1-\lambda) = -8 - 8\lambda + \lambda + \lambda^2 = \lambda^2 - 7\lambda - 8$$</div>
        <div class="fx center">$$\lambda^2 - 7\lambda - 8 + 18 = \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2)$$</div>
        <p>Entonces</p>
        <div class="fx center">$$P(\lambda) = (5-\lambda)(\lambda-5)(\lambda-2) = -(\lambda-5)(\lambda-5)(\lambda-2)$$</div>
        <div class="fx center">$$\boxed{P(\lambda) = -(\lambda - 5)^2\,(\lambda - 2)}$$</div>
        <p>y la <strong>ecuación característica</strong> es</p>
        <div class="fx center">$$\boxed{-(\lambda-5)^2(\lambda-2) = 0} \qquad\text{o, equivalentemente,}\qquad (\lambda-5)^2(\lambda-2) = 0$$</div>

        <h3>Verificaciones</h3>
        <p><strong>Traza.</strong> La suma de los autovalores debe ser la traza de la matriz:</p>
        <div class="fx center">$$5 + 5 + 2 = 12, \qquad \operatorname{tr}[T]_C = 8 + 5 + (-1) = 12 \;✓$$</div>
        <p><strong>Determinante.</strong> El producto de los autovalores debe ser el determinante:</p>
        <div class="fx center">$$5 \cdot 5 \cdot 2 = 50, \qquad \det[T]_C = 5\begin{vmatrix} 8 & -3 \\ 6 & -1 \end{vmatrix} = 5(-8 + 18) = 50 \;✓$$</div>
        <div class="note tip"><b class="lbl">El control de traza y determinante es el mejor que hay</b>
        Se hace en diez segundos y detecta casi cualquier error de signo en el polinomio característico. Vale siempre: suma de autovalores = traza, producto = determinante, contando cada autovalor con su multiplicidad algebraica.</div>
        <div class="note warn"><b class="lbl">El signo de adelante</b>
        Para una matriz de $3\times3$, el coeficiente principal de $P(\lambda)$ es $-1$ (viene de $(-\lambda)^3$). Escribir $P(\lambda) = (\lambda-5)^2(\lambda-2)$ sin el menos es un error de signo, aunque las <em>raíces</em> —y por lo tanto los autovalores— sean las mismas. La ecuación característica igualada a cero no se ve afectada.</div>`,
        resultado: tex`$P(\lambda) = -(\lambda-5)^2(\lambda-2)$, con ecuación característica $(\lambda-5)^2(\lambda-2) = 0$. Controles: traza $= 5+5+2 = 12$ ✓, determinante $= 5\cdot5\cdot2 = 50$ ✓` },

      { id: 'prom-1b', rot: 'b', enunciado: tex`Autovalores y autovectores asociados a ellos.`,
        conceptos: ['u7-autovalor', 'u7-espacio-propio'],
        pista: tex`Los autovalores son las raíces de (a). Para cada uno, resolvé $([T]_C - \lambda I)\,v = \vec 0$ y después traducí las coordenadas a polinomios.`,
        resolucion: tex`<h3>Autovalores</h3>
        <p>Son las raíces de la ecuación característica ([[u7-autovalor]]):</p>
        <div class="fx center">$$\boxed{\lambda_1 = 5 \;\;(\text{doble}), \qquad \lambda_2 = 2 \;\;(\text{simple})}$$</div>
        <p>Las dos son <strong>reales</strong>, lo que es la primera condición para poder diagonalizar.</p>

        <h3>Autovectores de $\lambda_1 = 5$</h3>
        <p>Resolviendo $\bigl([T]_C - 5I\bigr)\,v = \vec 0$:</p>
        <div class="fx center">$$\begin{pmatrix} 3 & 0 & -3 \\ 0 & 0 & 0 \\ 6 & 0 & -6 \end{pmatrix}\begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$</div>
        <p>La tercera fila es el doble de la primera y la segunda es nula, así que todo el sistema se reduce a <strong>una sola ecuación</strong>:</p>
        <div class="fx center">$$3a - 3c = 0 \;\Longrightarrow\; a = c$$</div>
        <p>Con $b$ <strong>libre</strong> (no aparece en ninguna ecuación) y $a = c$, las soluciones son $(a,\, b,\, a)$ con $a, b \in \mathbb{R}$, es decir</p>
        <div class="fx center">$$(a,b,a) = a\,(1,0,1) + b\,(0,1,0)$$</div>
        <p>Traduciendo a polinomios con $C = \{x^2, x, 1\}$:</p>
        <div class="fx center">$$(1,0,1) \to x^2 + 1, \qquad (0,1,0) \to x$$</div>
        <p>Los autovectores de $\lambda = 5$ son todos los polinomios de la forma $a(x^2+1) + b\,x$ con $(a,b) \neq (0,0)$.</p>
        <p><strong>Verificación:</strong></p>
        <div class="fx center">$$[T]_C\,(1,0,1) = (8 - 3,\;\; 0,\;\; 6 - 1) = (5,\, 0,\, 5) = 5\,(1,0,1) \;✓$$</div>
        <div class="fx center">$$[T]_C\,(0,1,0) = (0,\;\; 5,\;\; 0) = 5\,(0,1,0) \;✓$$</div>

        <h3>Autovectores de $\lambda_2 = 2$</h3>
        <div class="fx center">$$\begin{pmatrix} 6 & 0 & -3 \\ 0 & 3 & 0 \\ 6 & 0 & -3 \end{pmatrix}\begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
        \;\Longrightarrow\; \begin{cases} 6a - 3c = 0 \;\Longrightarrow\; c = 2a \\ 3b = 0 \;\Longrightarrow\; b = 0 \end{cases}$$</div>
        <p>(La tercera fila repite la primera.) Las soluciones son $(a,\, 0,\, 2a) = a\,(1,0,2)$, o sea</p>
        <div class="fx center">$$(1,0,2) \to x^2 + 2$$</div>
        <p><strong>Verificación:</strong></p>
        <div class="fx center">$$[T]_C\,(1,0,2) = (8 - 6,\;\; 0,\;\; 6 - 2) = (2,\, 0,\, 4) = 2\,(1,0,2) \;✓$$</div>
        <div class="note warn"><b class="lbl">Dar los autovectores como polinomios, no como ternas</b>
        El dominio es $P_2$, así que un autovector es un <em>polinomio</em>. Las ternas $(1,0,1)$, $(0,1,0)$, $(1,0,2)$ son sus <strong>coordenadas</strong> en $C$; la respuesta completa son $x^2+1$, $x$ y $x^2+2$. Es exactamente el punto donde la cátedra descuenta puntos en este ejercicio.</div>
        <div class="note tip"><b class="lbl">Lectura directa de una fila de ceros</b>
        En el sistema de $\lambda = 5$, la variable $b$ no aparece en ninguna ecuación. Eso dice que $x$ es autovector por sí solo, algo que ya se podía anticipar mirando la segunda columna de $[T]_C$: es $(0,5,0)$, o sea $T(x) = 5x$ directamente.</div>`,
        resultado: tex`$\lambda_1 = 5$ (doble), con autovectores $a(x^2+1) + bx$; y $\lambda_2 = 2$ (simple), con autovectores $a(x^2+2)$. Verificado: $[T]_C$ aplicada a $(1,0,1)$, $(0,1,0)$ y $(1,0,2)$ da $5$, $5$ y $2$ veces cada una.` },

      { id: 'prom-1c', rot: 'c', enunciado: tex`Espacios propios, dimensión algebraica y geométrica de cada autovalor.`,
        conceptos: ['u7-espacio-propio', 'u7-multiplicidades', 'u7-teorema-multiplicidades'],
        resolucion: tex`<h3>Los espacios propios</h3>
        <p>El espacio propio $E_\lambda$ es el subespacio de <em>todos</em> los autovectores de $\lambda$ junto con el vector nulo ([[u7-espacio-propio]]):</p>
        <div class="fx center">$$E_5 = \operatorname{gen}\{x^2 + 1,\;\; x\}, \qquad E_2 = \operatorname{gen}\{x^2 + 2\}$$</div>

        <h3>Las multiplicidades</h3>
        <p>La <strong>algebraica</strong> $m_a$ es la cantidad de veces que el autovalor aparece como raíz de $P(\lambda) = -(\lambda-5)^2(\lambda-2)$; la <strong>geométrica</strong> $m_g$ es la dimensión del espacio propio ([[u7-multiplicidades]]):</p>

        <div class="tabla-wrap"><table>
          <thead><tr><th>$\lambda$</th><th>$E_\lambda$</th><th>$m_a$</th><th>$m_g = \dim E_\lambda$</th><th>¿$m_a = m_g$?</th></tr></thead>
          <tbody>
            <tr><td>$5$</td><td>$\operatorname{gen}\{x^2+1,\; x\}$</td><td>2</td><td>2</td><td><strong>Sí</strong> ✓</td></tr>
            <tr><td>$2$</td><td>$\operatorname{gen}\{x^2+2\}$</td><td>1</td><td>1</td><td><strong>Sí</strong> ✓</td></tr>
          </tbody>
        </table></div>

        <p>Para $\lambda = 5$ el sistema homogéneo se redujo a una sola ecuación independiente en $3$ incógnitas, de donde $m_g = 3 - 1 = 2$; coincide con la multiplicidad algebraica, que es el caso favorable.</p>

        <h3>Controles</h3>
        <p><strong>Suma de multiplicidades algebraicas</strong> $= 2 + 1 = 3 = \dim P_2$ ✓ (siempre tiene que dar la dimensión del espacio, si todas las raíces son reales).</p>
        <p><strong>La desigualdad del teorema.</strong> El [[u7-teorema-multiplicidades]] garantiza que $1 \leq m_g(\lambda) \leq m_a(\lambda)$ para todo autovalor. Acá se da la igualdad en los dos casos, que es el extremo bueno de la desigualdad ✓</p>
        <div class="note tip"><b class="lbl">Dónde podría haber fallado</b>
        El autovalor a vigilar es siempre el <strong>repetido</strong>, acá $\lambda = 5$. Si el sistema $([T]_C - 5I)v = \vec 0$ hubiera dejado una sola variable libre en lugar de dos, sería $m_g = 1 < 2 = m_a$ y la matriz <em>no</em> sería diagonalizable. Para un autovalor simple nunca hay problema: $1 \leq m_g \leq m_a = 1$ fuerza $m_g = 1$.</div>
        <div class="note"><b class="lbl">Por qué $E_5$ tiene dimensión 2 acá</b>
        Mirando $[T]_C - 5I = \begin{pmatrix} 3 & 0 & -3 \\ 0 & 0 & 0 \\ 6 & 0 & -6\end{pmatrix}$: su rango es $1$ (las tres filas son múltiplos de $(1,0,-1)$ o nulas). Entonces la nulidad es $3 - 1 = 2 = m_g$. Contar el rango de $A - \lambda I$ es la forma más rápida de obtener $m_g$ sin resolver el sistema entero.</div>`,
        resultado: tex`$E_5 = \operatorname{gen}\{x^2+1,\, x\}$ con $m_a = m_g = 2$; $\;E_2 = \operatorname{gen}\{x^2+2\}$ con $m_a = m_g = 1$. Las multiplicidades coinciden en los dos autovalores, y $m_a$ suma $3 = \dim P_2$.` },

      { id: 'prom-1d', rot: 'd', enunciado: tex`Base de autovectores y su forma diagonal correspondiente.`,
        conceptos: ['u7-criterio-diagonalizacion', 'u7-diagonalizable', 'u7-semejantes'],
        pista: tex`Juntá las bases de los dos espacios propios. El orden de la diagonal tiene que respetar el orden en que pusiste los autovectores.`,
        resolucion: tex`<h3>¿Es diagonalizable?</h3>
        <p><strong>Sí.</strong> Por el [[u7-criterio-diagonalizacion]] se cumplen las dos condiciones:</p>
        <ul>
          <li>todas las raíces del polinomio característico son <strong>reales</strong> ($5$ y $2$) ✓</li>
          <li>$m_g(\lambda) = m_a(\lambda)$ para <strong>todo</strong> autovalor ✓ (inciso c)</li>
        </ul>
        <p>Equivalentemente: juntando las bases de los espacios propios se consiguen $3 = \dim P_2$ autovectores linealmente independientes.</p>

        <h3>La base de autovectores</h3>
        <div class="fx center">$$\boxed{B = \{\,x^2 + 1,\;\; x,\;\; x^2 + 2\,\}}$$</div>
        <p>Los dos primeros son la base de $E_5$ y el tercero la de $E_2$.</p>
        <p><strong>Verificación de independencia</strong> — en coordenadas de $C$, puestas como columnas:</p>
        <div class="fx center">$$P = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix}, \qquad
        \det P = 1\begin{vmatrix} 1 & 1 \\ 1 & 2 \end{vmatrix} = 2 - 1 = 1 \neq 0 \;✓$$</div>
        <p>(Desarrollando por la segunda fila.) Los tres polinomios son independientes, así que $B$ es base de $P_2$.</p>

        <h3>La forma diagonal</h3>
        <p>La diagonal lleva los autovalores en el <strong>mismo orden</strong> en que están los autovectores en $B$: primero los dos de $\lambda = 5$, después el de $\lambda = 2$:</p>
        <div class="fx center">$$\boxed{[T]_B = D = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 2 \end{pmatrix}}$$</div>
        <p>Y la relación de semejanza ([[u7-semejantes]]) es $\;D = P^{-1}\,[T]_C\,P$.</p>

        <h3>Verificación de la semejanza</h3>
        <p>En lugar de invertir $P$, conviene chequear la forma equivalente $[T]_C\,P = P\,D$, que es sólo multiplicar:</p>
        <div class="fx center">$$[T]_C\,P = \begin{pmatrix} 8 & 0 & -3 \\ 0 & 5 & 0 \\ 6 & 0 & -1 \end{pmatrix}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix} = \begin{pmatrix} 5 & 0 & 2 \\ 0 & 5 & 0 \\ 5 & 0 & 4 \end{pmatrix}$$</div>
        <div class="fx center">$$P\,D = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix}\begin{pmatrix} 5 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 2 \end{pmatrix} = \begin{pmatrix} 5 & 0 & 2 \\ 0 & 5 & 0 \\ 5 & 0 & 4 \end{pmatrix} \;✓$$</div>
        <p>Las dos coinciden, así que la diagonalización es correcta. (Cada columna de $[T]_C P$ es el autovalor por la columna correspondiente de $P$: eso es justamente la definición de autovector.)</p>
        <div class="note tip"><b class="lbl">Traza y determinante, otra vez</b>
        $D$ y $[T]_C$ son semejantes, así que comparten traza y determinante: $\operatorname{tr} D = 5+5+2 = 12$ ✓ y $\det D = 50$ ✓, los mismos valores del inciso (a).</div>
        <div class="note warn"><b class="lbl">El orden importa</b>
        Si se escribe $B = \{x^2+2,\; x^2+1,\; x\}$, entonces $D = \operatorname{diag}(2,5,5)$. Las dos respuestas son correctas, pero la base y la diagonal <strong>tienen que ser consistentes entre sí</strong>. Mezclarlas es un error.</div>`,
        resultado: tex`Diagonalizable. $B = \{x^2+1,\; x,\; x^2+2\}$ y $[T]_B = D = \operatorname{diag}(5,5,2)$, con $P = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 2\end{pmatrix}$, $\det P = 1 \neq 0$. Verificado: $[T]_C P = P D$.` },

      { id: 'prom-1e', rot: 'e', enunciado: tex`Enuncie <strong>tres ítems equivalentes del Teorema Resumen</strong> según los autovalores que calculó.`,
        conceptos: ['u7-teorema-resumen', 'u4-teorema-18'],
        pista: tex`La bisagra es el ítem 12: «cero no es autovalor». Mirá los autovalores que te dieron y decidí si los doce ítems son todos verdaderos o todos falsos.`,
        resolucion: tex`<h3>El punto de partida: ¿es $0$ autovalor?</h3>
        <p>Los autovalores son $\lambda_1 = 5$ y $\lambda_2 = 2$. <strong>Cero no es autovalor de $[T]_C$.</strong></p>
        <p>Ése es el <strong>ítem 12</strong> del [[u7-teorema-resumen]], y como los doce ítems son equivalentes, al valer uno valen <strong>todos</strong>. Tres de ellos, enunciados para esta matriz:</p>

        <ol class="pasos">
          <li><span class="ptit">Ítem 1 — $[T]_C$ es invertible.</span>
            <p>Existe $\bigl([T]_C\bigr)^{-1}$, y por lo tanto $T$ admite transformación inversa $T^{-1}: P_2 \to P_2$, también lineal.</p></li>
          <li><span class="ptit">Ítem 8 — $\det [T]_C \neq 0$.</span>
            <p>En efecto, $\det [T]_C = 5 \cdot 5 \cdot 2 = 50 \neq 0$ (el producto de los autovalores), como se verificó en el inciso (a).</p></li>
          <li><span class="ptit">Ítem 11 — $T$ es un isomorfismo.</span>
            <p>$T$ es lineal, inyectiva y sobreyectiva de $P_2$ en $P_2$. Equivalentemente, $\operatorname{Nuc}(T) = \{0\}$ (ítem 9: la nulidad es cero) y $\rho([T]_C) = 3$ (ítem 10: el rango es máximo).</p></li>
        </ol>

        <h3>Por qué «cero no es autovalor» equivale a todo lo demás</h3>
        <p>La cadena es corta y conviene saber decirla:</p>
        <div class="fx center">$$\lambda = 0 \text{ es autovalor} \iff \det\bigl([T]_C - 0\cdot I\bigr) = 0 \iff \det [T]_C = 0 \iff [T]_C \text{ no es invertible}$$</div>
        <p>Negando los dos extremos: $0$ no es autovalor $\iff$ la matriz es invertible. De ahí se enganchan los otros diez ítems.</p>
        <p>También se ve por el espacio propio: $E_0 = \operatorname{Nuc}(T)$, así que $0$ es autovalor exactamente cuando el núcleo es no trivial, es decir cuando $T$ no es inyectiva.</p>

        <h3>Control por el otro lado</h3>
        <p>$\operatorname{Nuc}(T) = \{0\}$ se puede verificar directo, sin usar el teorema: resolviendo $[T]_C\,v = \vec 0$,</p>
        <div class="fx center">$$\begin{cases} 8a - 3c = 0 \\ 5b = 0 \\ 6a - c = 0 \end{cases}$$</div>
        <p>De la segunda, $b = 0$. De la tercera, $c = 6a$; sustituyendo en la primera, $8a - 18a = -10a = 0$, luego $a = 0$ y entonces $c = 0$. Sólo la solución trivial ✓ — que es el <strong>ítem 2</strong> del teorema, y confirma todos los demás.</p>
        <div class="note warn"><b class="lbl">El caso opuesto, que es el que aparece en los finales</b>
        Si entre los autovalores hubiera salido un $0$, los doce ítems serían <strong>falsos</strong> y habría que enunciar sus negaciones: la matriz no es invertible, $\det = 0$, el sistema homogéneo tiene infinitas soluciones, el rango es menor que $3$, $T$ no es isomorfismo. Conviene tener preparadas las dos versiones, porque el enunciado dice «según los autovalores que calculó» justamente para ver si se razonó o se recitó.</div>
        <div class="note tip"><b class="lbl">Dos teoremas resumen, uno contenido en el otro</b>
        El de la unidad 7 tiene doce ítems; el [[u4-teorema-18|Teorema resumen de la unidad 4]] tiene los primeros siete, sin la parte de autovalores. El ítem 12 es el que une las dos unidades, y es el que los parciales usan como bisagra.</div>`,
        resultado: tex`Como los autovalores son $5$ y $2$, <strong>cero no es autovalor</strong> (ítem 12) y por lo tanto los doce ítems valen. Tres de ellos: $[T]_C$ es invertible (ítem 1); $\det[T]_C = 50 \neq 0$ (ítem 8); $T$ es un isomorfismo (ítem 11). Control directo: el sistema homogéneo sólo tiene la solución trivial (ítem 2).` }
    ]}
]});
