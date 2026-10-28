/* TP 2 — Rectas en el plano
   Enunciado: "TP_Rectas_en_el_plano.pdf" (7_EAL_2026/2_rectas_en_el_plano) */

EAL.tp({
  id: 'tp2', num: 2, unidad: 'u2',
  titulo: 'Rectas en el plano',
  resumen: 'Formas de la ecuación, paralelismo y perpendicularidad, intersecciones, ángulos, distancias, equidistancia y haces de rectas.',
  nota: tex`<b class="lbl">Antes de abrir las resoluciones</b> Intentá cada ítem a mano y usá la resolución para <strong>autocorregirte</strong>. Casi todo el práctico se reduce a dos movimientos: conseguir <em>un punto y una dirección</em>, y acordarse de que en $ax+by+c=0$ el vector $(a,b)$ es el <strong>normal</strong> ([[u2-implicita]]). Si ves esos dos, el resto es álgebra.`,

  ejercicios: [

  /* ========================= 1 ========================= */
  { id: 'tp2-1', num: '1',
    enunciado: tex`<p><strong>Hallar la ecuación de la recta que:</strong></p>`,
    incisos: [

      { id: 'tp2-1a', rot: 'a', enunciado: tex`pasa por $P = (1,2)$ y $Q = (2,3)$. Escribirla en todas las formas.`,
        conceptos: ['u2-pasaje', 'u2-vectorial', 'u2-parametrica', 'u2-cartesiana', 'u2-implicita', 'u2-pendiente', 'u2-segmentaria'],
        pista: tex`Con dos puntos, el director sale de [[u1-componentes-pq]]: $\vec u = Q - P$. Desde ahí se recorre el circuito de [[u2-pasaje]] sin volver a pensar.`,
        resolucion: tex`<p><strong>Punto de partida: la función lineal.</strong> Si venís de Análisis, este ejercicio ya lo sabés resolver así:</p>
        <ol class="pasos">
          <li><span class="ptit">Pendiente.</span> $\;m = \dfrac{y_1 - y_0}{x_1 - x_0} = \dfrac{3 - 2}{2 - 1} = \dfrac{1}{1} = 1$.</li>
          <li><span class="ptit">Ordenada al origen.</span> $f(x) = 1 \cdot x + h$ tiene que pasar por $P = (1,2)$, o sea $f(1) = 2$: $\;1 \cdot 1 + h = 2 \Rightarrow h = 1$.</li>
          <li><span class="ptit">Resultado.</span> $\;f(x) = x + 1$, o sea $\boxed{y = x + 1}$.</li>
        </ol>
        <p>Está <strong>bien</strong>, y es una de las respuestas: la llamada <strong>ecuación explícita</strong> $y = mx + h$ ([[u2-punto-pendiente]]). Lo que pasa es que el enunciado pide «todas las formas», y en Álgebra la recta se mira desde otro lugar.</p>

        <div class="note"><b class="lbl">El cambio de mirada</b>
        En Análisis, $y = x + 1$ es una <em>función</em>: entra un $x$, sale un $y$. En Álgebra, la recta es un <strong>conjunto de puntos del plano</strong>, y ese mismo conjunto se puede describir de seis maneras distintas. No son seis rectas: es <strong>la misma recta</strong> escrita en seis «idiomas», y cada uno deja ver a simple vista un dato distinto. ¿Por qué no alcanza con $y = mx + h$? Porque no sirve para todo: la recta vertical $x = 3$ no es una función y no tiene pendiente, y en el espacio (TP 3) una recta <strong>no tiene</strong> ecuación $y = mx+h$. La forma vectorial, en cambio, funciona siempre, en $\mathbb{R}^2$ y en $\mathbb{R}^3$.</div>

        <p><strong>El puente entre tu cuenta y los vectores.</strong> Mirá el numerador y el denominador de tu fórmula de la pendiente: son las restas $x_1 - x_0 = 1$ e $y_1 - y_0 = 1$. Esas dos restas juntas forman el vector</p>
        <div class="fx center">$$\vec u = Q - P = (2-1,\; 3-2) = (1, 1)$$</div>
        <p>que es la flecha que va de $P$ a $Q$ ([[u1-componentes-pq]]). Se llama <strong>vector director</strong>: indica hacia dónde «apunta» la recta. Tu pendiente es simplemente el cociente de sus componentes, $m = \dfrac{u_2}{u_1} = \dfrac{1}{1}$. O sea: <em>vos ya calculaste el director sin saberlo</em>; Álgebra se queda con las dos restas por separado en vez de dividirlas.</p>

        <p><strong>Las seis formas de un vistazo.</strong> La columna «cómo reconocerla» es para que, cuando veas una ecuación suelta, sepas en qué forma está:</p>
        <div class="tbl"><table>
          <thead><tr><th>Forma</th><th>Aspecto general</th><th>Cómo reconocerla</th><th>Qué se lee directo</th><th>En este ejercicio</th></tr></thead>
          <tbody>
            <tr><td>Vectorial</td><td>$(x,y) = (x_0,y_0) + \lambda\,(u_1,u_2)$</td><td>pares ordenados y la letra $\lambda$</td><td>un punto y el director</td><td>$(x,y) = (1,2) + \lambda(1,1)$</td></tr>
            <tr><td>Paramétricas</td><td>$x = x_0 + \lambda u_1$<br>$y = y_0 + \lambda u_2$</td><td>dos ecuaciones, una para $x$ y otra para $y$, ambas con $\lambda$</td><td>un punto y el director</td><td>$x = 1+\lambda$<br>$y = 2+\lambda$</td></tr>
            <tr><td>Cartesiana (simétrica)</td><td>$\dfrac{x-x_0}{u_1} = \dfrac{y-y_0}{u_2}$</td><td>dos fracciones igualadas, sin $\lambda$</td><td>un punto (cambiado de signo) y el director (abajo)</td><td>$\dfrac{x-1}{1} = \dfrac{y-2}{1}$</td></tr>
            <tr><td>Implícita (general)</td><td>$ax + by + c = 0$</td><td>todo de un lado, igualado a <strong>cero</strong></td><td>el <strong>normal</strong> $(a,b)$</td><td>$x - y + 1 = 0$</td></tr>
            <tr><td>Explícita</td><td>$y = mx + h$</td><td>$y$ despejada sola</td><td>pendiente y ordenada al origen</td><td>$y = x + 1$</td></tr>
            <tr><td>Segmentaria</td><td>$\dfrac{x}{p} + \dfrac{y}{q} = 1$</td><td>$x$ e $y$ divididas, igualado a <strong>uno</strong></td><td>dónde corta a cada eje</td><td>$\dfrac{x}{-1} + \dfrac{y}{1} = 1$</td></tr>
          </tbody>
        </table></div>

        <p><strong>Qué es $\lambda$ y de dónde sale.</strong> La letra es <strong>lambda</strong> ($\lambda$), la «l» griega; no es delta ($\delta$ o $\Delta$). En este tema $\Delta$ aparece sólo como discriminante de una cuadrática ($\Delta = b^2 - 4ac$), y no tiene nada que ver. $\lambda$ es un <strong>parámetro</strong>: un número real que puede tomar cualquier valor, y cada valor que le das produce un punto de la recta.</p>
        <p>Sale de esta idea: parado en $P$, a cualquier otro punto $X = (x,y)$ de la recta se llega caminando en la dirección de $\vec u$, hacia adelante o hacia atrás. Entonces la flecha $\overrightarrow{PX}$ es paralela a $\vec u$, y dos vectores paralelos son múltiplos uno del otro ([[u1-teorema-1]]): existe un número $\lambda$ con</p>
        <div class="fx center">$$\overrightarrow{PX} = \lambda\,\vec u \;\Longrightarrow\; X - P = \lambda\,\vec u \;\Longrightarrow\; X = P + \lambda\,\vec u$$</div>
        <p>Eso es la ecuación vectorial. $\lambda$ cuenta <strong>cuántas veces $\vec u$ hay que caminar</strong> desde $P$: $\lambda = 2$ es dar dos pasos de $\vec u$, $\lambda = \tfrac12$ medio paso, $\lambda = -1$ un paso para atrás. Si te ayuda, pensalo como un <em>tiempo</em>: salís de $P$ con velocidad $\vec u$ y en el instante $\lambda$ estás en $P + \lambda\vec u$.</p>
        <div class="tbl"><table>
          <thead><tr><th>$\lambda$</th><th>$P + \lambda\,\vec u = (1,2) + \lambda(1,1)$</th><th>Punto</th></tr></thead>
          <tbody>
            <tr><td>$-2$</td><td>$(1-2,\; 2-2)$</td><td>$(-1, 0)$ — corte con el eje $X$</td></tr>
            <tr><td>$-1$</td><td>$(1-1,\; 2-1)$</td><td>$(0, 1)$ — corte con el eje $Y$</td></tr>
            <tr><td>$0$</td><td>$(1,\; 2)$</td><td>$(1, 2) = P$</td></tr>
            <tr><td>$\tfrac12$</td><td>$(1+\tfrac12,\; 2+\tfrac12)$</td><td>$(1{,}5;\; 2{,}5)$ — punto medio de $PQ$</td></tr>
            <tr><td>$1$</td><td>$(1+1,\; 2+1)$</td><td>$(2, 3) = Q$</td></tr>
            <tr><td>$2$</td><td>$(1+2,\; 2+2)$</td><td>$(3, 4)$</td></tr>
          </tbody>
        </table></div>
        <figure class="fig">
        <svg viewBox="0 0 460 400" role="img" aria-label="La recta y igual a x más 1 con los puntos que da lambda igual a menos 2, menos 1, 0, un medio, 1 y 2; el vector director u va de P a Q y de Q al punto con lambda 2">
          <line class="edge" x1="20" y1="320" x2="445" y2="320"/>
          <line class="edge" x1="150" y1="390" x2="150" y2="25"/>
          <path class="edge" d="M100,316 v8 M200,316 v8 M250,316 v8 M300,316 v8 M350,316 v8 M146,270 h8 M146,220 h8 M146,170 h8 M146,120 h8 M146,70 h8"/>
          <text class="sm" x="436" y="340">x</text>
          <text class="sm" x="158" y="34">y</text>
          <text class="sm" x="134" y="338">O</text>
          <line class="edge" style="stroke-width:1.8" x1="40" y1="380" x2="370" y2="50"/>
          <line class="c-teo" x1="150" y1="320" x2="196.0" y2="228.0"/><polygon class="c-teo" points="200,220 199.1,231.8 191.1,227.8"/>
          <line class="c-def" x1="200" y1="220" x2="243.6" y2="176.4"/><polygon class="c-def" points="250,170 245.4,181.0 239.0,174.6"/>
          <line class="c-def" x1="250" y1="170" x2="293.6" y2="126.4"/><polygon class="c-def" points="300,120 295.4,131.0 289.0,124.6"/>
          <circle class="c-ink" cx="100" cy="320" r="4"/>
          <circle class="c-ink" cx="150" cy="270" r="4"/>
          <circle class="c-ink" cx="200" cy="220" r="4"/>
          <circle class="c-ink" cx="225" cy="195" r="3.2"/>
          <circle class="c-ink" cx="250" cy="170" r="4"/>
          <circle class="c-ink" cx="300" cy="120" r="4"/>
          <text x="90" y="310" text-anchor="end">λ = −2</text>
          <text x="140" y="262" text-anchor="end">λ = −1</text>
          <text x="212" y="238">λ = 0 <tspan class="sm" dx="4">(P)</tspan></text>
          <text x="215" y="187" text-anchor="end">λ = ½</text>
          <text x="262" y="188">λ = 1 <tspan class="sm" dx="4">(Q)</tspan></text>
          <text x="312" y="138">λ = 2</text>
          <text class="c-def" x="236" y="214">u</text>
          <text class="c-def" x="286" y="164">u</text>
          <text class="c-teo" x="176" y="294">P</text>
        </svg>
        <figcaption>La recta $y = x + 1$. Desde $P$ (flecha azul, del origen a $P$) se camina con el director $\vec u = (1,1)$ (verde): un paso de $\vec u$ lleva a $Q$ ($\lambda = 1$), dos pasos a $(3,4)$ ($\lambda = 2$), y con $\lambda$ negativo se va para atrás. Cada valor de $\lambda$ es un punto; todos los $\lambda \in \mathbb{R}$ juntos son la recta entera. Las marcas de los ejes van de a una unidad.</figcaption>
        </figure>
        <div class="note tip"><b class="lbl">Para qué sirve $\lambda$: saber si un punto está en la recta</b>
        Un punto está en la recta si existe <strong>un mismo</strong> $\lambda$ que lo produce. ¿Está $(3,5)$? De $x$: $3 = 1 + \lambda \Rightarrow \lambda = 2$. De $y$: $5 = 2 + \lambda \Rightarrow \lambda = 3$. La coordenada $x$ pide dos pasos y la $y$ pide tres: no hay un $\lambda$ que sirva para las dos, así que $(3,5)$ <strong>no</strong> está. En cambio $(3,4)$ pide $\lambda = 2$ en ambas ✓.</div>

        <p><strong>Ahora sí, todas las formas paso a paso.</strong></p>
        <ol class="pasos">
          <li><span class="ptit">Punto y director.</span> Tomamos $P = (1,2)$ y $\vec u = Q - P = (1,1)$. Es lo único que hay que «pensar»; todo lo demás es reescribir.</li>
          <li><span class="ptit">Vectorial</span> ([[u2-vectorial]]): punto $+\;\lambda\,\cdot$ director.
            $$(x,y) = (1,2) + \lambda\,(1,1), \qquad \lambda \in \mathbb{R}$$</li>
          <li><span class="ptit">Paramétricas</span> ([[u2-parametrica]]): es la misma ecuación leída coordenada por coordenada. Haciendo la cuenta del lado derecho, $(1,2) + \lambda(1,1) = (1 + \lambda,\; 2 + \lambda)$, y dos pares son iguales cuando coinciden sus componentes:
            $$\begin{cases} x = 1 + \lambda \\ y = 2 + \lambda \end{cases} \qquad \lambda \in \mathbb{R}$$</li>
          <li><span class="ptit">Cartesiana</span> ([[u2-cartesiana]]): se <strong>elimina</strong> $\lambda$. De la primera, $\lambda = \dfrac{x-1}{1}$; de la segunda, $\lambda = \dfrac{y-2}{1}$. Como tiene que ser el mismo $\lambda$ (justo lo del recuadro de arriba), se igualan:
            $$\frac{x-1}{1} = \frac{y-2}{1}$$
            Los denominadores son el director; los números restando, el punto. Acá quedan los «$/1$» a la vista porque son parte de la forma, aunque no cambien nada.</li>
          <li><span class="ptit">Implícita</span> ([[u2-implicita]]): se pasan los denominadores multiplicando y todo a un lado:
            $$x - 1 = y - 2 \;\Longrightarrow\; \boxed{x - y + 1 = 0}$$
            Los coeficientes de $x$ e $y$ forman el <strong>normal</strong> $\vec n = (1,-1)$, perpendicular a la recta: $(1,-1)\cdot(1,1) = 1 - 1 = 0$ ✓.</li>
          <li><span class="ptit">Explícita</span> ([[u2-punto-pendiente]]) — <strong>acá aparece tu función lineal</strong>. Despejando $y$ de la implícita:
            $$y = x + 1 \qquad (m = 1,\; h = 1)$$
            Es exactamente tu $f(x) = 1\cdot x + 1$. Y la pendiente coincide con la que sale del director, $m = \dfrac{u_2}{u_1} = \dfrac11 = 1$ ([[u2-pendiente]]).</li>
          <li><span class="ptit">Segmentaria</span> ([[u2-segmentaria]]): se deja el número solo a la derecha y se divide para que quede $1$. De $x - y + 1 = 0$ sale $x - y = -1$; dividiendo todo por $-1$: $\;-x + y = 1$. Y como $-x = \dfrac{x}{-1}$:
            $$\frac{x}{-1} + \frac{y}{1} = 1$$
            Los denominadores son los cortes con los ejes: con el $X$ en $(-1, 0)$ y con el $Y$ en $(0, 1)$. Son los puntos de $\lambda = -2$ y $\lambda = -1$ de la tabla.</li>
        </ol>

        <p><strong>Verificación: el mismo punto cumple las seis.</strong> Tomando $(3,4)$, que es $\lambda = 2$:</p>
        <ul>
          <li>vectorial y paramétricas: $(1,2) + 2(1,1) = (3,4)$ ✓;</li>
          <li>cartesiana: $\dfrac{3-1}{1} = 2$ y $\dfrac{4-2}{1} = 2$ ✓;</li>
          <li>implícita: $3 - 4 + 1 = 0$ ✓;</li>
          <li>explícita: $1 \cdot 3 + 1 = 4$ ✓;</li>
          <li>segmentaria: $\dfrac{3}{-1} + \dfrac{4}{1} = -3 + 4 = 1$ ✓.</li>
        </ul>
        <p>Que un mismo punto las cumpla todas es la prueba de que son la misma recta escrita de formas distintas.</p>

        <div class="note warn"><b class="lbl">Lo que se confunde</b>
        <strong>(1)</strong> En la implícita, $(a,b) = (1,-1)$ es el <strong>normal</strong>, no el director; el director es $(-b, a) = (1,1)$. <strong>(2)</strong> Las formas con $\lambda$ y la cartesiana <strong>no son únicas</strong>: con $Q$ como punto y $(2,2)$ como director, $(x,y) = (2,3) + \lambda(2,2)$ es la misma recta, sólo que ahora $\lambda = 0$ cae en $Q$ y cada paso es el doble de largo. La explícita y la segmentaria, en cambio, sí son únicas, y por eso sirven para comparar resultados con los de un compañero. <strong>(3)</strong> La segmentaria va igualada a $1$, no a $-1$: si te queda $\dfrac{x}{1} - y = -1$, falta dividir por $-1$.</div>`,
        resultado: tex`$x - y + 1 = 0$; $\;(x,y) = (1,2)+\lambda(1,1)$; $\;\frac{x-1}{1} = \frac{y-2}{1}$; $\;y = x+1$; $\;\frac{x}{-1} + \frac{y}{1} = 1$.` },

      { id: 'tp2-1b', rot: 'b', enunciado: tex`es paralela a la recta $3x - 2y + 1 = 0$ y pasa por el punto $P = (3,1)$.`,
        conceptos: ['u2-paralelismo', 'u2-implicita'],
        pista: tex`Paralela ⇒ <strong>mismo normal</strong>. Sólo cambia el término independiente, que se ajusta con el punto.`,
        resolucion: tex`<p>Por el [[u2-paralelismo|Teorema 1]], dos rectas son paralelas cuando sus normales son paralelos. Lo más cómodo es conservar literalmente el normal $\vec n = (3,-2)$ y dejar $c$ incógnita:</p>
        <div class="fx center">$$L': 3x - 2y + c = 0$$</div>
        <p>Se impone que pase por $P = (3,1)$:</p>
        <div class="fx center">$$3(3) - 2(1) + c = 0 \;\Longrightarrow\; 9 - 2 + c = 0 \;\Longrightarrow\; c = -7$$</div>
        <div class="note tip"><b class="lbl">Por qué este método</b> No hace falta calcular el director ni la pendiente: paralelismo de rectas en forma implícita es «copiar $a$ y $b$, recalcular $c$». Es una línea de cuenta.</div>`,
        resultado: tex`$L': 3x - 2y - 7 = 0$` },

      { id: 'tp2-1c', rot: 'c', enunciado: tex`es perpendicular a la recta $3x - 2y + 1 = 0$ y pasa por el punto $P = (3,1)$.`,
        conceptos: ['u2-perpendicularidad', 'u2-implicita'],
        pista: tex`El normal de la perpendicular es el <em>director</em> de la original: $(a,b) \to (-b,a)$.`,
        resolucion: tex`<p>El director de $L: 3x-2y+1=0$ es $\vec u = (-b, a) = (2, 3)$ ([[u2-implicita]]). La recta buscada es perpendicular a $L$, así que su <strong>normal</strong> es ese director:</p>
        <div class="fx center">$$\vec n' = (2,3) \;\Longrightarrow\; L'': 2x + 3y + c = 0$$</div>
        <p>Con $P = (3,1)$: $\;2(3) + 3(1) + c = 0 \Rightarrow 6 + 3 + c = 0 \Rightarrow c = -9$.</p>
        <p><strong>Verificación.</strong> Por el [[u2-perpendicularidad|Teorema 2]], los normales deben ser ortogonales: $(3,-2)\cdot(2,3) = 6 - 6 = 0$ ✓.</p>
        <div class="note"><b class="lbl">Control por pendientes</b> $m_L = \tfrac{3}{2}$ y $m_{L''} = -\tfrac{2}{3}$: inversas y opuestas, con producto $-1$ ✓.</div>`,
        resultado: tex`$L'': 2x + 3y - 9 = 0$` },

      { id: 'tp2-1d', rot: 'd', enunciado: tex`tiene ordenada al origen $-3$ y abscisa al origen $5$.`,
        conceptos: ['u2-segmentaria'],
        pista: tex`Es la forma segmentaria, directo.`,
        resolucion: tex`<p>Abscisa al origen $p = 5$ (corte $(5,0)$) y ordenada al origen $q = -3$ (corte $(0,-3)$). Por [[u2-segmentaria]]:</p>
        <div class="fx center">$$\frac{x}{5} + \frac{y}{-3} = 1$$</div>
        <p>Multiplicando por $15$ para llevarla a implícita: $\;3x - 5y = 15$, es decir</p>
        <div class="fx center">$$3x - 5y - 15 = 0$$</div>
        <p><strong>Verificación.</strong> $(5,0)$: $15 - 0 - 15 = 0$ ✓. $(0,-3)$: $0 + 15 - 15 = 0$ ✓.</p>`,
        resultado: tex`$\frac{x}{5} + \frac{y}{-3} = 1$, o bien $3x - 5y - 15 = 0$.` },

      { id: 'tp2-1e', rot: 'e', enunciado: tex`es mediatriz del segmento determinado por $(7,4)$ y $(1,2)$.`,
        conceptos: ['u2-mediatriz', 'u2-perpendicularidad', 'u2-implicita'],
        pista: tex`La mediatriz pasa por el punto medio y es perpendicular al segmento: punto medio + normal $= \overrightarrow{AB}$.`,
        resolucion: tex`<p>Sean $A = (7,4)$ y $B = (1,2)$.</p>
        <ol class="pasos">
          <li><span class="ptit">Punto medio.</span> $M = \dfrac{A+B}{2} = \left( \dfrac{7+1}{2}, \dfrac{4+2}{2} \right) = (4, 3)$.</li>
          <li><span class="ptit">Normal.</span> La mediatriz es perpendicular a $AB$, así que su normal <strong>es</strong> $\overrightarrow{AB} = B - A = (-6,-2)$. Se simplifica dividiendo por $-2$: $\vec n = (3,1)$.</li>
          <li><span class="ptit">Ecuación.</span> $3x + y + c = 0$ por $M = (4,3)$: $\;12 + 3 + c = 0 \Rightarrow c = -15$.</li>
        </ol>
        <div class="fx center">$$3x + y - 15 = 0$$</div>
        <p><strong>Verificación por equidistancia</strong> (que es la otra definición de mediatriz, ver [[u2-mediatriz]]). Con [[u2-distancia-punto-recta]] y $\|\vec n\| = \sqrt{10}$:</p>
        <div class="fx center">$$d(A,L) = \frac{|21 + 4 - 15|}{\sqrt{10}} = \frac{10}{\sqrt{10}} = \sqrt{10}, \qquad
        d(B,L) = \frac{|3 + 2 - 15|}{\sqrt{10}} = \frac{10}{\sqrt{10}} = \sqrt{10}$$</div>
        <p>Iguales ✓.</p>`,
        resultado: tex`$3x + y - 15 = 0$` }
    ]},

  /* ========================= 2 ========================= */
  { id: 'tp2-2', num: '2',
    enunciado: tex`<p>Los puntos $A = (3,1)$, $B = (-2,5)$ y $C = (-4,3)$ forman un triángulo.</p>
    <div class="note tip"><b class="lbl">No confundir las tres rectas notables</b>
    <strong>Mediana</strong> del lado $AB$: une el punto medio de $AB$ con el vértice opuesto $C$ (pasa por un vértice).
    <strong>Mediatriz</strong> del lado $AC$: perpendicular a $AC$ por su punto medio (no pasa por ningún vértice en general).
    <strong>Altura</strong>: perpendicular a un lado por el vértice opuesto. Ver [[u2-mediatriz]].</div>`,
    incisos: [

      { id: 'tp2-2a1', rot: 'a.1', enunciado: tex`Hallar la ecuación de la recta que contiene a la <strong>mediana</strong> del lado $AB$.`,
        conceptos: ['u2-mediatriz', 'u2-pasaje'],
        pista: tex`Punto medio de $AB$ y el vértice $C$: son dos puntos, y el ejercicio 1.a ya mostró el camino.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Punto medio de $AB$.</span>
            $$M = \left( \frac{3 + (-2)}{2},\; \frac{1+5}{2} \right) = \left( \frac{1}{2},\; 3 \right)$$</li>
          <li><span class="ptit">Director.</span> La mediana une $M$ con el vértice opuesto $C = (-4,3)$:
            $$\vec u = C - M = \left( -4 - \tfrac12,\; 3 - 3 \right) = \left( -\tfrac{9}{2},\; 0 \right)$$
            La segunda componente es <strong>nula</strong>: el director es horizontal, y se puede simplificar a $\vec u = (1,0)$.</li>
          <li><span class="ptit">Ecuación.</span> Una recta horizontal por puntos de ordenada 3:
            $$y = 3, \quad\text{es decir}\quad y - 3 = 0$$</li>
        </ol>
        <div class="note"><b class="lbl">Por qué sale tan redondo</b> $M$ y $C$ tienen la <strong>misma ordenada</strong> ($3$ y $3$), así que la mediana es paralela al eje $X$. Conviene notarlo antes de calcular: ahorra todo el trabajo. Su pendiente es $m = 0$.</div>
        <p><strong>Verificación.</strong> $M = (\tfrac12, 3)$: $3 - 3 = 0$ ✓. $C = (-4,3)$: $3-3=0$ ✓.</p>`,
        resultado: tex`$y - 3 = 0$ (recta horizontal $y = 3$).` },

      { id: 'tp2-2a2', rot: 'a.2', enunciado: tex`Hallar la ecuación de la recta que contiene a la <strong>mediatriz</strong> del lado $AC$.`,
        conceptos: ['u2-mediatriz', 'u2-perpendicularidad'],
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Punto medio de $AC$</span>, con $A = (3,1)$, $C = (-4,3)$:
            $$M = \left( \frac{3-4}{2},\; \frac{1+3}{2} \right) = \left( -\tfrac{1}{2},\; 2 \right)$$</li>
          <li><span class="ptit">Normal.</span> $\vec n = \overrightarrow{AC} = C - A = (-7, 2)$.</li>
          <li><span class="ptit">Ecuación.</span> $-7x + 2y + c = 0$ por $M$:
            $$-7\left(-\tfrac12\right) + 2(2) + c = 0 \;\Longrightarrow\; \tfrac{7}{2} + 4 + c = 0 \;\Longrightarrow\; c = -\tfrac{15}{2}$$
            Multiplicando todo por $-2$ para sacar la fracción:
            $$14x - 4y + 15 = 0$$</li>
        </ol>
        <p><strong>Verificación por equidistancia.</strong> $\|\vec n\| = \sqrt{196+16} = \sqrt{212} = 2\sqrt{53}$.</p>
        <div class="fx center">$$d(A,L) = \frac{|14(3) - 4(1) + 15|}{2\sqrt{53}} = \frac{53}{2\sqrt{53}} = \frac{\sqrt{53}}{2}$$</div>
        <div class="fx center">$$d(C,L) = \frac{|14(-4) - 4(3) + 15|}{2\sqrt{53}} = \frac{|-53|}{2\sqrt{53}} = \frac{\sqrt{53}}{2}$$</div>
        <p>Iguales ✓.</p>`,
        resultado: tex`$14x - 4y + 15 = 0$` },

      { id: 'tp2-2b', rot: 'b', enunciado: tex`Indicar si los puntos $M = (1,2)$ y $N = (-3,4)$ pertenecen a la recta que pasa por $B$ y $C$. Escribir la recta en forma paramétrica.`,
        conceptos: ['u2-parametrica', 'u2-pasaje'],
        pista: tex`Armá la recta $BC$, pasala a implícita y reemplazá cada punto: pertenecer es satisfacer la ecuación.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">La recta $BC$.</span> Con $B = (-2,5)$, $C = (-4,3)$:
            $$\vec u = C - B = (-2, -2) \;\longrightarrow\; \text{simplificado } (1,1)$$</li>
          <li><span class="ptit">Paramétricas.</span>
            $$L: \begin{cases} x = -2 + \lambda \\ y = 5 + \lambda \end{cases} \qquad \lambda \in \mathbb{R}$$</li>
          <li><span class="ptit">Implícita</span> (para testear pertenencia de un tirón). De $\dfrac{x+2}{1} = \dfrac{y-5}{1}$:
            $$x + 2 = y - 5 \;\Longrightarrow\; x - y + 7 = 0$$</li>
          <li><span class="ptit">Testear los puntos.</span>
            $$M = (1,2): \quad 1 - 2 + 7 = 6 \neq 0 \;\Longrightarrow\; M \notin L$$
            $$N = (-3,4): \quad -3 - 4 + 7 = 0 \;\Longrightarrow\; N \in L$$</li>
        </ol>
        <p>Y el valor del parámetro que da $N$: de $x = -2 + \lambda = -3$ sale $\lambda = -1$, y entonces $y = 5 - 1 = 4$ ✓.</p>
        <div class="note tip"><b class="lbl">Con las paramétricas también se puede</b> Se plantea $-2+\lambda = x_0$ y $5 + \lambda = y_0$: si el <strong>mismo</strong> $\lambda$ resuelve las dos, el punto pertenece. Para $M$: la primera da $\lambda = 3$ y la segunda $\lambda = -3$; al no coincidir, $M \notin L$. Es el mismo razonamiento, con una cuenta más.</div>`,
        resultado: tex`$L: \;x = -2+\lambda,\; y = 5+\lambda$ (implícita $x - y + 7 = 0$). $\;M \notin L$; $\;N \in L$ (con $\lambda = -1$).` }
    ]},

  /* ========================= 3 ========================= */
  { id: 'tp2-3', num: '3',
    enunciado: tex`<p>Hallar, en caso de ser posible, el <strong>punto de intersección</strong> y el <strong>ángulo</strong> que forman entre sí los siguientes pares de rectas:</p>`,
    incisos: [

      { id: 'tp2-3a', rot: 'a', enunciado: tex`$L_1: x - 2y - 2 = 0$ y $L_2: 3x - 2y + 1 = 0$`,
        conceptos: ['u2-interseccion', 'u2-angulo-rectas'],
        pista: tex`Sistema de dos ecuaciones. El ángulo sale de los normales con [[u2-angulo-rectas]], y no te olvides del valor absoluto.`,
        resolucion: tex`<p><strong>Intersección.</strong> Restando las dos ecuaciones se elimina $y$ de una vez:</p>
        <div class="fx center">$$(x - 2y - 2) - (3x - 2y + 1) = 0 \;\Longrightarrow\; -2x - 3 = 0 \;\Longrightarrow\; x = -\tfrac{3}{2}$$</div>
        <p>Reemplazando en $L_1$: $\;-\tfrac32 - 2y - 2 = 0 \Rightarrow -2y = \tfrac{7}{2} \Rightarrow y = -\tfrac{7}{4}$.</p>
        <div class="fx center">$$L_1 \cap L_2 = \left\{ \left( -\tfrac{3}{2},\; -\tfrac{7}{4} \right) \right\}$$</div>
        <p>Como el sistema resultó <strong>compatible determinado</strong>, las rectas son incidentes ([[u2-interseccion]]).</p>
        <p><strong>Ángulo.</strong> Normales $\vec n_1 = (1,-2)$ y $\vec n_2 = (3,-2)$:</p>
        <div class="fx center">$$\vec n_1 \cdot \vec n_2 = 3 + 4 = 7, \qquad \|\vec n_1\| = \sqrt{5}, \qquad \|\vec n_2\| = \sqrt{13}$$</div>
        <div class="fx center">$$\cos\theta = \frac{|7|}{\sqrt{5}\sqrt{13}} = \frac{7}{\sqrt{65}} \approx 0{,}8682 \;\Longrightarrow\; \theta \approx 29{,}7° \approx 29°45'$$</div>
        <p><strong>Verificación del punto</strong> en $L_2$: $3\left(-\tfrac32\right) - 2\left(-\tfrac74\right) + 1 = -\tfrac92 + \tfrac72 + 1 = -1 + 1 = 0$ ✓.</p>`,
        resultado: tex`Punto $\left(-\tfrac{3}{2}, -\tfrac{7}{4}\right)$; $\;\cos\theta = \frac{7}{\sqrt{65}}$, $\;\theta \approx 29{,}7°$.` },

      { id: 'tp2-3b', rot: 'b', enunciado: tex`$L_1: x + y = 2$ y $L_2: -2x - 2y = 7$`,
        conceptos: ['u2-interseccion', 'u2-paralelismo', 'u2-angulo-rectas'],
        pista: tex`Mirá los normales antes de resolver el sistema.`,
        resolucion: tex`<p>Llevando ambas a implícita: $L_1: x + y - 2 = 0$ y $L_2: -2x - 2y - 7 = 0$, con normales</p>
        <div class="fx center">$$\vec n_1 = (1,1), \qquad \vec n_2 = (-2,-2) = -2\,(1,1)$$</div>
        <p>Los normales son <strong>paralelos</strong>, así que por el [[u2-paralelismo|Teorema 1]] las rectas son paralelas. Para decidir si son coincidentes o distintas se compara el término independiente: multiplicando $L_1$ por $-2$ queda $-2x - 2y + 4 = 0$, y $4 \neq -7$.</p>
        <div class="note warn"><b class="lbl">Conclusión</b> Son <strong>paralelas distintas</strong>: $L_1 \cap L_2 = \varnothing$, no hay punto de intersección. El sistema es <strong>incompatible</strong> — restando $-2L_1$ de $L_2$ se llega a $0 = -11$, un absurdo.</div>
        <p><strong>Ángulo.</strong> Como son paralelas, el ángulo entre ellas es</p>
        <div class="fx center">$$\cos\theta = \frac{|(1,1)\cdot(-2,-2)|}{\sqrt{2}\cdot 2\sqrt{2}} = \frac{|-4|}{4} = 1 \;\Longrightarrow\; \theta = 0°$$</div>
        <p>Acá se ve para qué sirve el valor absoluto de [[u2-angulo-rectas]]: sin él el coseno daría $-1$ y el «ángulo» $180°$, cuando dos rectas paralelas forman $0°$.</p>`,
        resultado: tex`No se cortan: son <strong>paralelas distintas</strong>, $L_1 \cap L_2 = \varnothing$. El ángulo entre ellas es $0°$.` }
    ]},

  /* ========================= 4 ========================= */
  { id: 'tp2-4', num: '4',
    enunciado: tex`<p>Hallar la <strong>distancia</strong> del punto $P$ a la recta $L$ siendo:</p>`,
    incisos: [

      { id: 'tp2-4a', rot: 'a', enunciado: tex`$P = (1,2)$ y $L: 3x - 2y + 1 = 0$`,
        conceptos: ['u2-distancia-punto-recta'],
        pista: tex`Aplicá la fórmula sin prejuzgar el resultado: fijate qué sale en el numerador.`,
        resolucion: tex`<p>Por [[u2-distancia-punto-recta]], con $\vec n = (3,-2)$ y $\|\vec n\| = \sqrt{9+4} = \sqrt{13}$:</p>
        <div class="fx center">$$d(P,L) = \frac{|3(1) - 2(2) + 1|}{\sqrt{13}} = \frac{|3 - 4 + 1|}{\sqrt{13}} = \frac{0}{\sqrt{13}} = 0$$</div>
        <div class="note tip"><b class="lbl">Qué significa que dé cero</b>
        La distancia es $0$ exactamente cuando <strong>el punto pertenece a la recta</strong>. Y de hecho así es: reemplazando $(1,2)$ en $3x-2y+1$ se obtiene $0$, que es la condición de pertenencia. El numerador de la fórmula de distancia <em>es</em> el miembro izquierdo de la ecuación evaluado en el punto, así que la fórmula de distancia también funciona como test de pertenencia.</div>`,
        resultado: tex`$d(P,L) = 0$: el punto $P = (1,2)$ <strong>pertenece</strong> a $L$.` },

      { id: 'tp2-4b', rot: 'b', enunciado: tex`$P = (0,1)$ y $L: 2x - y + 2 = 0$`,
        conceptos: ['u2-distancia-punto-recta'],
        resolucion: tex`<p>$\vec n = (2,-1)$, $\;\|\vec n\| = \sqrt{4+1} = \sqrt5$:</p>
        <div class="fx center">$$d(P,L) = \frac{|2(0) - 1 + 2|}{\sqrt{5}} = \frac{|1|}{\sqrt{5}} = \frac{1}{\sqrt{5}} = \frac{\sqrt{5}}{5} \approx 0{,}447$$</div>`,
        resultado: tex`$d(P,L) = \frac{\sqrt{5}}{5} \approx 0{,}45$` }
    ]},

  /* ========================= 5 ========================= */
  { id: 'tp2-5', num: '5',
    enunciado: tex`<p>Sean $A = (-1,2)$ y $B = (3,-6)$:</p>`,
    incisos: [

      { id: 'tp2-5a', rot: 'a', enunciado: tex`Hallar un punto sobre el eje $x$ que equidiste de los puntos $A$ y $B$.`,
        conceptos: ['u2-equidistancia', 'u1-distancia-puntos'],
        pista: tex`Un punto del eje $x$ es $(x,0)$: una sola incógnita. Planteá $d(P,A) = d(P,B)$ y elevá al cuadrado.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Escribir el punto con una sola incógnita.</span> Todo punto del eje $x$ tiene segunda coordenada nula: $P = (x, 0)$.</li>
          <li><span class="ptit">Plantear la igualdad al cuadrado.</span> Como ambos miembros son distancias (no negativas), elevar al cuadrado es equivalente y saca las raíces ([[u2-equidistancia]]):
            $$d(P,A)^2 = d(P,B)^2$$
            $$(x+1)^2 + (0-2)^2 = (x-3)^2 + (0+6)^2$$</li>
          <li><span class="ptit">Desarrollar.</span>
            $$x^2 + 2x + 1 + 4 = x^2 - 6x + 9 + 36$$
            Los $x^2$ se cancelan — siempre pasa, y es lo que hace que la ecuación quede lineal:
            $$2x + 5 = -6x + 45 \;\Longrightarrow\; 8x = 40 \;\Longrightarrow\; x = 5$$</li>
        </ol>
        <div class="fx center">$$P = (5, 0)$$</div>
        <p><strong>Verificación.</strong> $d(P,A) = \sqrt{(5+1)^2 + (0-2)^2} = \sqrt{36+4} = \sqrt{40}$ y $d(P,B) = \sqrt{(5-3)^2 + (0+6)^2} = \sqrt{4+36} = \sqrt{40}$ ✓.</p>
        <div class="note tip"><b class="lbl">Lectura geométrica</b> El conjunto de puntos que equidistan de $A$ y $B$ es la <strong>mediatriz</strong> de $AB$ ([[u2-mediatriz]]). Lo que se calculó es la intersección de esa mediatriz con el eje $x$ — y por eso la solución es <em>única</em>: una recta no paralela al eje $x$ lo corta en un solo punto.</div>`,
        resultado: tex`$P = (5,0)$, a distancia $\sqrt{40} = 2\sqrt{10}$ de cada uno.` },

      { id: 'tp2-5b', rot: 'b', enunciado: tex`Hallar un punto sobre la recta $L: 2x - y + 1 = 0$ que equidiste de los puntos $A$ y $B$.`,
        conceptos: ['u2-equidistancia', 'u2-parametrica', 'u1-distancia-puntos'],
        pista: tex`Misma idea, pero el punto se parametriza con la recta: despejá $y$ de $L$ para que quede una sola incógnita.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Parametrizar la recta.</span> De $2x - y + 1 = 0$ sale $y = 2x + 1$, así que todo punto de $L$ es $P = (x,\; 2x+1)$: una incógnita.</li>
          <li><span class="ptit">Igualar los cuadrados de las distancias.</span>
            $$(x+1)^2 + (2x+1-2)^2 = (x-3)^2 + (2x+1+6)^2$$
            $$(x+1)^2 + (2x-1)^2 = (x-3)^2 + (2x+7)^2$$</li>
          <li><span class="ptit">Desarrollar.</span>
            $$\underbrace{(x^2+2x+1) + (4x^2-4x+1)}_{5x^2 - 2x + 2} = \underbrace{(x^2-6x+9) + (4x^2+28x+49)}_{5x^2 + 22x + 58}$$
            Se cancelan los $5x^2$:
            $$-2x + 2 = 22x + 58 \;\Longrightarrow\; -24x = 56 \;\Longrightarrow\; x = -\frac{7}{3}$$</li>
          <li><span class="ptit">Recuperar la ordenada.</span> $y = 2\left(-\tfrac73\right) + 1 = -\tfrac{14}{3} + \tfrac33 = -\tfrac{11}{3}$.</li>
        </ol>
        <div class="fx center">$$P = \left( -\frac{7}{3},\; -\frac{11}{3} \right)$$</div>
        <p><strong>Verificación.</strong></p>
        <div class="fx center">$$d(P,A)^2 = \left(-\tfrac73+1\right)^2 + \left(-\tfrac{11}{3}-2\right)^2 = \left(-\tfrac43\right)^2 + \left(-\tfrac{17}{3}\right)^2 = \tfrac{16+289}{9} = \tfrac{305}{9}$$</div>
        <div class="fx center">$$d(P,B)^2 = \left(-\tfrac73-3\right)^2 + \left(-\tfrac{11}{3}+6\right)^2 = \left(-\tfrac{16}{3}\right)^2 + \left(\tfrac73\right)^2 = \tfrac{256+49}{9} = \tfrac{305}{9}$$</div>
        <p>Iguales ✓.</p>
        <div class="note tip"><b class="lbl">Camino alternativo, más corto</b>
        Como equidistar de $A$ y $B$ es estar en la mediatriz de $AB$, se puede hallar esa mediatriz y <strong>cortarla con $L$</strong>:
        $M = \left(\tfrac{-1+3}{2}, \tfrac{2-6}{2}\right) = (1,-2)$ y $\vec n = \overrightarrow{AB} = (4,-8) \sim (1,-2)$, de donde la mediatriz es $x - 2y - 5 = 0$. Intersecándola con $2x - y + 1 = 0$: sustituyendo $y = 2x+1$ queda $x - 4x - 2 - 5 = 0 \Rightarrow -3x = 7 \Rightarrow x = -\tfrac73$ — el mismo resultado, sin elevar nada al cuadrado.</div>`,
        resultado: tex`$P = \left(-\frac{7}{3},\, -\frac{11}{3}\right)$, con $d(P,A) = d(P,B) = \sqrt{\frac{305}{9}} = \frac{\sqrt{305}}{3}$.` }
    ]},

  /* ========================= 6 ========================= */
  { id: 'tp2-6', num: '6',
    enunciado: tex`<p><strong>Puntos y rectas a distancia dada:</strong></p>`,
    incisos: [

      { id: 'tp2-6a', rot: 'a', enunciado: tex`Hallar los puntos pertenecientes a la recta $L: 5x - y + 6 = 0$ que equidistan 2 unidades del punto $(-3,1)$.`,
        conceptos: ['u2-equidistancia', 'u1-distancia-puntos', 'u2-parametrica'],
        pista: tex`El punto se parametriza con $L$ y se plantea $d = 2$. Acá la ecuación <strong>sí</strong> queda cuadrática: esperá dos soluciones.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Parametrizar $L$.</span> De $5x - y + 6 = 0$: $\;y = 5x + 6$, luego $P = (x,\; 5x+6)$.</li>
          <li><span class="ptit">Imponer la distancia al cuadrado.</span> Con $Q = (-3,1)$ y $d = 2$:
            $$(x+3)^2 + (5x+6-1)^2 = 2^2$$
            $$(x+3)^2 + (5x+5)^2 = 4$$</li>
          <li><span class="ptit">Desarrollar.</span>
            $$x^2 + 6x + 9 + 25x^2 + 50x + 25 = 4$$
            $$26x^2 + 56x + 34 = 4 \;\Longrightarrow\; 26x^2 + 56x + 30 = 0$$
            Dividiendo por 2: $\;13x^2 + 28x + 15 = 0$.
            <div class="note"><b class="lbl">Acá no se cancelan los cuadrados</b> A diferencia del ejercicio 5, no hay dos distancias que se igualan entre sí sino una distancia igualada a una constante, así que los términos cuadráticos sobreviven. Eso es lo que produce <strong>dos</strong> soluciones.</div></li>
          <li><span class="ptit">Resolver.</span> $\Delta = 28^2 - 4(13)(15) = 784 - 780 = 4$, $\;\sqrt\Delta = 2$:
            $$x = \frac{-28 \pm 2}{26} \;\Longrightarrow\; x_1 = \frac{-26}{26} = -1, \qquad x_2 = \frac{-30}{26} = -\frac{15}{13}$$</li>
          <li><span class="ptit">Recuperar las ordenadas.</span>
            $$x_1 = -1 \Rightarrow y_1 = 5(-1)+6 = 1 \;\Longrightarrow\; P_1 = (-1,\, 1)$$
            $$x_2 = -\tfrac{15}{13} \Rightarrow y_2 = -\tfrac{75}{13} + \tfrac{78}{13} = \tfrac{3}{13} \;\Longrightarrow\; P_2 = \left(-\tfrac{15}{13},\, \tfrac{3}{13}\right)$$</li>
        </ol>
        <p><strong>Verificación.</strong></p>
        <div class="fx center">$$d(P_1,Q) = \sqrt{(-1+3)^2 + (1-1)^2} = \sqrt{4} = 2 \;✓$$</div>
        <div class="fx center">$$d(P_2,Q)^2 = \left(\tfrac{24}{13}\right)^2 + \left(-\tfrac{10}{13}\right)^2 = \frac{576 + 100}{169} = \frac{676}{169} = 4 \;✓$$</div>
        <div class="note tip"><b class="lbl">Por qué dos y no otra cantidad</b> Se está cortando la recta $L$ con la <strong>circunferencia</strong> de centro $Q$ y radio 2. Una recta y una circunferencia se cortan en dos puntos (secante), uno (tangente) o ninguno. Que $\Delta > 0$ confirma el caso secante; si hubiera dado $\Delta = 0$ la recta sería tangente y habría un único punto, y con $\Delta < 0$ ninguno.</div>`,
        resultado: tex`$P_1 = (-1,1)$ y $P_2 = \left(-\frac{15}{13},\, \frac{3}{13}\right)$.` },

      { id: 'tp2-6b', rot: 'b', enunciado: tex`Dados el punto $P = (-2,1)$ y la recta $L: 3x - 4y - 5 = 0$, hallar las rectas paralelas a $L$ que distan 4 unidades del punto $P$.`,
        conceptos: ['u2-paralelismo', 'u2-distancia-punto-recta', 'u2-equidistancia'],
        pista: tex`La paralela conserva el normal y deja $c$ incógnita. Después se impone la distancia: el valor absoluto va a dar dos respuestas.`,
        resolucion: tex`<ol class="pasos">
          <li><span class="ptit">Familia de paralelas.</span> Mismo normal $\vec n = (3,-4)$, con $c$ incógnita ([[u2-paralelismo]]):
            $$L': 3x - 4y + c = 0, \qquad \|\vec n\| = \sqrt{9+16} = 5$$</li>
          <li><span class="ptit">Imponer la distancia.</span> Por [[u2-distancia-punto-recta]], con $P = (-2,1)$:
            $$d(P, L') = \frac{|3(-2) - 4(1) + c|}{5} = \frac{|c - 10|}{5} = 4$$</li>
          <li><span class="ptit">Resolver el valor absoluto.</span>
            $$|c - 10| = 20 \;\Longrightarrow\; c - 10 = 20 \;\;\text{o}\;\; c - 10 = -20$$
            $$c_1 = 30, \qquad c_2 = -10$$</li>
        </ol>
        <div class="fx center">$$L'_1: 3x - 4y + 30 = 0 \qquad\qquad L'_2: 3x - 4y - 10 = 0$$</div>
        <p><strong>Verificación.</strong> $\;d(P, L'_1) = \dfrac{|-6-4+30|}{5} = \dfrac{20}{5} = 4$ ✓; $\;d(P, L'_2) = \dfrac{|-6-4-10|}{5} = \dfrac{20}{5} = 4$ ✓.</p>
        <div class="note tip"><b class="lbl">Siempre son dos, una a cada lado</b>
        El valor absoluto de la fórmula de distancia borra el signo, y al despejarlo reaparecen los dos casos: una paralela a cada lado del punto $P$. Omitir una de las dos es el error más común del ítem.
        Dato de control: $d(P,L) = \dfrac{|-6-4-5|}{5} = 3$, así que $P$ está a 3 unidades de $L$. Tiene sentido que las paralelas a distancia 4 de $P$ estén a $3+4 = 7$ y a $4-3 = 1$ unidades de $L$ — y en efecto $\tfrac{|30+5|}{5} = 7$ y $\tfrac{|-10+5|}{5} = 1$ ✓.</div>`,
        resultado: tex`$3x - 4y + 30 = 0$ y $3x - 4y - 10 = 0$.` }
    ]},

  /* ========================= 7 ========================= */
  { id: 'tp2-7', num: '7',
    enunciado: tex`<p>Escribir las ecuaciones de los <strong>haces de rectas</strong> determinados por las siguientes condiciones:</p>
    <div class="note tip"><b class="lbl">Qué se espera de la respuesta</b> Un haz es una <em>familia</em> de rectas con un parámetro ([[u2-haz]]). La respuesta es una ecuación con una letra libre, más —cuando corresponda— la aclaración de <strong>qué recta queda afuera</strong> del haz.</div>`,
    incisos: [

      { id: 'tp2-7a', rot: 'a', enunciado: tex`pasan por el punto $(3,-1)$;`,
        conceptos: ['u2-haz', 'u2-haces-tipicos'],
        resolucion: tex`<p>Es un <strong>haz propio</strong> (concurrente) con centro en $(3,-1)$. Usando la forma punto-pendiente ([[u2-punto-pendiente]]):</p>
        <div class="fx center">$$y + 1 = k\,(x - 3), \qquad k \in \mathbb{R}$$</div>
        <div class="note warn"><b class="lbl">Falta una recta</b> Este haz <strong>no contiene la vertical $x = 3$</strong>, porque ninguna $k$ real da pendiente infinita. Para incluirla hay que usar la forma con dos parámetros:
        $$\alpha\,(x-3) + \beta\,(y+1) = 0, \qquad (\alpha,\beta) \neq (0,0)$$
        que con $\beta = 0$ devuelve $x = 3$. Conviene escribir la primera forma y <em>aclarar</em> la excepción: es exactamente lo que se evalúa.</div>`,
        resultado: tex`$y + 1 = k(x-3)$, $k \in \mathbb{R}$, más la recta $x = 3$ (que el haz con un parámetro no incluye).` },

      { id: 'tp2-7b', rot: 'b', enunciado: tex`tienen abscisa al origen 2;`,
        conceptos: ['u2-haces-tipicos', 'u2-segmentaria'],
        resolucion: tex`<p>Abscisa al origen 2 significa que todas cortan al eje $x$ en $(2,0)$, así que es el haz propio de centro $(2,0)$:</p>
        <div class="fx center">$$y = k\,(x-2), \qquad k \in \mathbb{R}$$</div>
        <div class="note"><b class="lbl">Dos observaciones</b>
        Con $k = 0$ se obtiene $y = 0$, el propio eje $x$, que tiene <em>infinitas</em> abscisas al origen; si se quiere ser estricto, se excluye $k = 0$.
        Tampoco está la vertical $x = 2$, que estrictamente no tiene abscisa al origen única sino que <em>es</em> el corte. En forma segmentaria el haz se escribe $\dfrac{x}{2} + \dfrac{y}{q} = 1$ con parámetro $q \neq 0$, que excluye las horizontales.</div>`,
        resultado: tex`$y = k(x-2)$, $k \in \mathbb{R}$ — equivalentemente $\frac{x}{2} + \frac{y}{q} = 1$ con parámetro $q$.` },

      { id: 'tp2-7c', rot: 'c', enunciado: tex`la suma de la abscisa y la ordenada al origen es 10;`,
        conceptos: ['u2-haces-tipicos', 'u2-segmentaria'],
        pista: tex`Partí de la segmentaria y usá la condición para eliminar una de las dos letras.`,
        resolucion: tex`<p>En la forma segmentaria $\dfrac{x}{p} + \dfrac{y}{q} = 1$, la condición es $p + q = 10$, de donde $q = 10 - p$. Queda <strong>un solo</strong> parámetro:</p>
        <div class="fx center">$$\frac{x}{p} + \frac{y}{10 - p} = 1, \qquad p \in \mathbb{R},\; p \neq 0,\; p \neq 10$$</div>
        <p>Las exclusiones son necesarias porque la forma segmentaria no admite denominadores nulos: $p = 0$ y $p = 10$ dejarían uno de los dos sin sentido.</p>
        <p>Si se quiere en forma implícita, multiplicando por $p(10-p)$:</p>
        <div class="fx center">$$(10-p)\,x + p\,y - p(10-p) = 0$$</div>
        <div class="note"><b class="lbl">Qué tipo de haz es</b> No es ni propio ni impropio: no todas pasan por un punto fijo ni son todas paralelas. Es una familia de un parámetro definida por una condición sobre los cortes con los ejes, y eso basta para llamarla haz según [[u2-haz]].</div>`,
        resultado: tex`$\frac{x}{p} + \frac{y}{10-p} = 1$, con $p \neq 0, 10$; en implícita, $(10-p)x + py - p(10-p) = 0$.` },

      { id: 'tp2-7d', rot: 'd', enunciado: tex`son paralelas a la recta $y = 4x - 1$;`,
        conceptos: ['u2-haces-tipicos', 'u2-paralelismo'],
        resolucion: tex`<p>Paralelas ⇒ misma pendiente $m = 4$. Es un <strong>haz impropio</strong> (de paralelas), y lo que varía es la ordenada al origen:</p>
        <div class="fx center">$$y = 4x + k, \qquad k \in \mathbb{R}$$</div>
        <p>En forma implícita: $4x - y + k = 0$. Acá el haz es completo: no queda ninguna recta de pendiente 4 afuera.</p>`,
        resultado: tex`$y = 4x + k$, $k \in \mathbb{R}$ (equivalentemente $4x - y + k = 0$).` },

      { id: 'tp2-7e', rot: 'e', enunciado: tex`son perpendiculares a la recta $y = -3x + 1$.`,
        conceptos: ['u2-haces-tipicos', 'u2-perpendicularidad'],
        resolucion: tex`<p>La recta dada tiene $m = -3$. Por el [[u2-perpendicularidad|Teorema 2]], las perpendiculares tienen pendiente inversa y opuesta:</p>
        <div class="fx center">$$m' = -\frac{1}{m} = -\frac{1}{-3} = \frac{1}{3}$$</div>
        <p>Haz impropio de pendiente $\tfrac13$:</p>
        <div class="fx center">$$y = \frac{1}{3}x + k, \qquad k \in \mathbb{R} \qquad\text{(implícita: } x - 3y + 3k = 0\text{)}$$</div>
        <p><strong>Control.</strong> $m \cdot m' = (-3)\left(\tfrac13\right) = -1$ ✓.</p>`,
        resultado: tex`$y = \frac{1}{3}x + k$, $k \in \mathbb{R}$.` }
    ]},

  /* ========================= 8 ========================= */
  { id: 'tp2-8', num: '8',
    enunciado: tex`<p>En cada uno de los haces del ejercicio anterior, <strong>en los casos que sea posible</strong>, hallar el valor del parámetro para el cual la recta correspondiente pasa por el punto $(6,3)$. Dar la ecuación de tales rectas.</p>
    <div class="note tip"><b class="lbl">El «en los casos que sea posible» avisa algo</b> Uno de los cinco haces <strong>no</strong> tiene ninguna recta que pase por $(6,3)$, y hay que detectarlo y justificarlo.</div>`,
    conceptos: ['u2-haz-por-punto', 'u2-haces-tipicos'],
    pista: tex`Reemplazar $x = 6$, $y = 3$ en cada haz y despejar el parámetro ([[u2-haz-por-punto]]). Si la ecuación resultante no tiene solución real, no hay recta.`,
    resolucion: tex`<p><strong>a) Haz por $(3,-1)$:</strong> $\;y + 1 = k(x-3)$.</p>
    <div class="fx center">$$3 + 1 = k(6-3) \;\Longrightarrow\; 4 = 3k \;\Longrightarrow\; k = \frac{4}{3}$$</div>
    <p>Recta: $\;y + 1 = \tfrac43(x-3) \Rightarrow 3y + 3 = 4x - 12 \Rightarrow \boxed{4x - 3y - 15 = 0}$.</p>
    <p>Control: $(3,-1)$ da $12+3-15 = 0$ ✓ y $(6,3)$ da $24-9-15 = 0$ ✓.</p>
    <hr>
    <p><strong>b) Haz de abscisa al origen 2:</strong> $\;y = k(x-2)$.</p>
    <div class="fx center">$$3 = k(6-2) = 4k \;\Longrightarrow\; k = \frac{3}{4}$$</div>
    <p>Recta: $\;y = \tfrac34(x-2) \Rightarrow 4y = 3x - 6 \Rightarrow \boxed{3x - 4y - 6 = 0}$.</p>
    <p>Control: $(2,0)$ da $6-0-6=0$ ✓ y $(6,3)$ da $18-12-6=0$ ✓.</p>
    <hr>
    <p><strong>c) Haz con $p + q = 10$:</strong> $\;\dfrac{x}{p} + \dfrac{y}{10-p} = 1$.</p>
    <div class="fx center">$$\frac{6}{p} + \frac{3}{10-p} = 1$$</div>
    <p>Multiplicando por $p(10-p)$:</p>
    <div class="fx center">$$6(10-p) + 3p = p(10-p) \;\Longrightarrow\; 60 - 6p + 3p = 10p - p^2 \;\Longrightarrow\; 60 - 3p = 10p - p^2$$</div>
    <div class="fx center">$$p^2 - 13p + 60 = 0, \qquad \Delta = 169 - 240 = -71 < 0$$</div>
    <div class="note warn"><b class="lbl">Este es el caso imposible</b>
    El discriminante es <strong>negativo</strong>, así que no hay ningún $p$ real. <strong>Ninguna recta de este haz pasa por $(6,3)$.</strong>
    Interpretación: si una recta pasa por $(6,3)$ y corta a los ejes en $(p,0)$ y $(0,q)$ con $p+q=10$, entonces $p$ y $q$ tendrían que ser las raíces de $p^2 - 13p + 60 = 0$, es decir dos números de suma 13 y producto 60; pero ya se les pidió suma 10. Las dos condiciones son incompatibles.</div>
    <hr>
    <p><strong>d) Haz paralelo a $y = 4x-1$:</strong> $\;y = 4x + k$.</p>
    <div class="fx center">$$3 = 4(6) + k = 24 + k \;\Longrightarrow\; k = -21$$</div>
    <p>Recta: $\;\boxed{y = 4x - 21}$, o $4x - y - 21 = 0$.</p>
    <hr>
    <p><strong>e) Haz perpendicular a $y = -3x+1$:</strong> $\;y = \tfrac13 x + k$.</p>
    <div class="fx center">$$3 = \frac{1}{3}(6) + k = 2 + k \;\Longrightarrow\; k = 1$$</div>
    <p>Recta: $\;y = \tfrac13 x + 1$, o $\boxed{x - 3y + 3 = 0}$.</p>
    <div class="note tip"><b class="lbl">Por qué d) y e) nunca fallan</b> Un haz impropio contiene <strong>exactamente una</strong> recta por cada punto del plano: dada la dirección, por un punto pasa una única paralela a ella. Los haces propios en cambio fallan sólo si el punto coincide con el centro (ahí sirven todas) o si hace falta justo la recta excluida. Los haces como el de c), definidos por una condición algebraica, pueden no tener solución, y eso es lo que pasa acá.</div>`,
    resultado: tex`a) $k = \tfrac43$, $\;4x-3y-15=0$. &nbsp; b) $k = \tfrac34$, $\;3x-4y-6=0$. &nbsp; <strong>c) imposible</strong> ($\Delta = -71 < 0$). &nbsp; d) $k = -21$, $\;y = 4x-21$. &nbsp; e) $k = 1$, $\;x-3y+3=0$.` },

  /* ========================= 9 ========================= */
  { id: 'tp2-9', num: '9',
    enunciado: tex`<p>Investigar la <strong>propiedad que caracteriza</strong> a cada uno de los siguientes haces de rectas:</p>
    <div class="note tip"><b class="lbl">Cómo se reconoce un haz</b> Si el parámetro aparece <strong>sólo en el término independiente</strong>, el haz es <em>impropio</em> (de paralelas). Si multiplica a $x$ o a $y$, hay que agrupar los términos con el parámetro: lo que queda igualado a cero por separado da el <em>centro</em> del haz.</div>`,
    incisos: [

      { id: 'tp2-9a', rot: 'a', enunciado: tex`$3x - 5y + k = 0$`,
        conceptos: ['u2-haz', 'u2-paralelismo'],
        resolucion: tex`<p>El parámetro aparece sólo en el término independiente, así que el normal $\vec n = (3,-5)$ es el <strong>mismo para toda la familia</strong>.</p>
        <p><strong>Propiedad:</strong> es un <strong>haz impropio</strong>. Son todas las rectas <strong>paralelas entre sí</strong> de normal $(3,-5)$, es decir de director $(5,3)$ y pendiente $m = \tfrac{3}{5}$. Es la familia <em>completa</em> de rectas de pendiente $\tfrac35$: dado cualquier punto del plano, hay exactamente una del haz que lo contiene.</p>`,
        resultado: tex`Haz impropio: todas las rectas de pendiente $m = \frac{3}{5}$ (paralelas entre sí).` },

      { id: 'tp2-9b', rot: 'b', enunciado: tex`$kx + y - 2k = 0$`,
        conceptos: ['u2-haz', 'u2-haz-por-punto'],
        pista: tex`Agrupá los términos que tienen $k$ y sacá factor común.`,
        resolucion: tex`<p>Se agrupa por el parámetro:</p>
        <div class="fx center">$$kx + y - 2k = 0 \;\Longrightarrow\; k\,(x - 2) + y = 0$$</div>
        <p>Para que esto valga <strong>cualquiera sea $k$</strong>, un punto debe anular los dos bloques a la vez:</p>
        <div class="fx center">$$\begin{cases} x - 2 = 0 \\ y = 0 \end{cases} \;\Longrightarrow\; (2, 0)$$</div>
        <p><strong>Propiedad:</strong> es un <strong>haz propio</strong> con <strong>centro en $(2,0)$</strong>: todas las rectas pasan por ese punto. Equivalentemente, es el haz de rectas con abscisa al origen 2 (el del ejercicio 7.b).</p>
        <div class="note"><b class="lbl">Qué recta falta</b> Despejando, $y = -k(x-2)$: la pendiente es $-k$ y recorre todos los reales, así que están todas las rectas por $(2,0)$ <strong>salvo la vertical $x = 2$</strong>.</div>`,
        resultado: tex`Haz propio de centro $(2,0)$ — todas las rectas por $(2,0)$ excepto la vertical $x = 2$.` },

      { id: 'tp2-9c', rot: 'c', enunciado: tex`$kx - y = 4$`,
        conceptos: ['u2-haz', 'u2-pendiente'],
        resolucion: tex`<p>Despejando $y$: $\;y = kx - 4$. El parámetro es la <strong>pendiente</strong> y la ordenada al origen es fija, $-4$.</p>
        <p><strong>Propiedad:</strong> es un <strong>haz propio</strong> con <strong>centro en $(0,-4)$</strong>: todas las rectas tienen ordenada al origen $-4$, es decir pasan por el punto $(0,-4)$.</p>
        <div class="note"><b class="lbl">Qué recta falta</b> La vertical $x = 0$ (el eje $y$), que no tiene pendiente definida y por lo tanto no se obtiene con ningún $k$ real.</div>
        <p>Se puede verificar agrupando como en el inciso b): $\;k\,x - (y+4) = 0$ exige $x = 0$ y $y + 4 = 0$, o sea $(0,-4)$ ✓.</p>`,
        resultado: tex`Haz propio de centro $(0,-4)$ — todas las rectas de ordenada al origen $-4$, excepto el eje $y$.` },

      { id: 'tp2-9d', rot: 'd', enunciado: tex`$y - 2 = k(x+1)$`,
        conceptos: ['u2-haz', 'u2-punto-pendiente'],
        resolucion: tex`<p>Está escrito directamente en forma punto-pendiente ([[u2-punto-pendiente]]): $\;y - y_0 = k(x - x_0)$ con $x_0 = -1$, $y_0 = 2$.</p>
        <p><strong>Propiedad:</strong> es un <strong>haz propio</strong> con <strong>centro en $(-1, 2)$</strong>. El parámetro $k$ es la pendiente.</p>
        <div class="note"><b class="lbl">Qué recta falta</b> La vertical $x = -1$.</div>
        <p>Control: reemplazando $(-1,2)$ queda $2 - 2 = k(-1+1)$, o sea $0 = 0$, cierto para todo $k$ ✓.</p>`,
        resultado: tex`Haz propio de centro $(-1,2)$, excepto la vertical $x = -1$.` }
    ]},

  /* ========================= 10 ========================= */
  { id: 'tp2-10', num: '10',
    enunciado: tex`<p>Demostrar que las rectas $\;r_1: 5x - y - 6 = 0$, $\;r_2: x + 5y - 22 = 0$, $\;r_3: 5x - y - 32 = 0$ y $\;r_4: x + 5y + 4 = 0$ forman un <strong>cuadrado</strong>. Hallar los vértices de dicho cuadrado.</p>`,
    conceptos: ['u2-paralelismo', 'u2-perpendicularidad', 'u2-interseccion', 'u2-distancia-punto-recta'],
    pista: tex`Un cuadrado necesita <strong>tres</strong> cosas: dos pares de paralelas, que esos pares sean perpendiculares entre sí, y que las dos distancias entre paralelas sean <em>iguales</em>. Las dos primeras dan un rectángulo; la tercera es la que lo vuelve cuadrado.`,
    resolucion: tex`<p>Los normales son $\;\vec n_1 = (5,-1)$, $\;\vec n_2 = (1,5)$, $\;\vec n_3 = (5,-1)$, $\;\vec n_4 = (1,5)$.</p>

    <h3>Paso 1 — Dos pares de paralelas</h3>
    <p>Por el [[u2-paralelismo|Teorema 1]]: $\vec n_1 = \vec n_3$ ⇒ $r_1 \parallel r_3$, y $\vec n_2 = \vec n_4$ ⇒ $r_2 \parallel r_4$.</p>
    <p>Y son <strong>distintas</strong> en cada par, porque los términos independientes difieren: $-6 \neq -32$ y $-22 \neq 4$. Si fueran coincidentes no habría cuadrilátero.</p>

    <h3>Paso 2 — Los dos pares son perpendiculares entre sí</h3>
    <p>Por el [[u2-perpendicularidad|Teorema 2]]:</p>
    <div class="fx center">$$\vec n_1 \cdot \vec n_2 = (5)(1) + (-1)(5) = 5 - 5 = 0$$</div>
    <p>Luego $r_1 \perp r_2$, y por paralelismo lo mismo vale para todas las combinaciones de un par con el otro. <strong>Hasta acá hay un rectángulo.</strong></p>

    <h3>Paso 3 — Los lados miden lo mismo</h3>
    <p>La distancia entre dos paralelas se mide tomando un punto de una y aplicando [[u2-distancia-punto-recta]] a la otra. Notar que $\|\vec n_1\| = \|\vec n_2\| = \sqrt{26}$.</p>
    <p><strong>Entre $r_1$ y $r_3$:</strong> un punto de $r_1$ es $(0,-6)$ (poniendo $x = 0$ en $5x - y - 6 = 0$).</p>
    <div class="fx center">$$d(r_1, r_3) = \frac{|5(0) - (-6) - 32|}{\sqrt{26}} = \frac{|6 - 32|}{\sqrt{26}} = \frac{26}{\sqrt{26}} = \sqrt{26}$$</div>
    <p><strong>Entre $r_2$ y $r_4$:</strong> un punto de $r_2$ es $\left(0, \tfrac{22}{5}\right)$.</p>
    <div class="fx center">$$d(r_2, r_4) = \frac{\left|0 + 5\left(\tfrac{22}{5}\right) + 4\right|}{\sqrt{26}} = \frac{|22+4|}{\sqrt{26}} = \frac{26}{\sqrt{26}} = \sqrt{26}$$</div>
    <p>Las dos distancias son iguales, $\sqrt{26}$. Un rectángulo con los dos pares de lados iguales es un <strong>cuadrado</strong> de lado $\sqrt{26}$. $\blacksquare$</p>

    <h3>Paso 4 — Los vértices</h3>
    <p>Cada vértice es la intersección de una recta de un par con una del otro par ([[u2-interseccion]]). Hay cuatro combinaciones. En todos los casos conviene despejar $y = 5x - c$ de la recta del primer par y sustituir.</p>
    <div class="tbl"><table>
      <thead><tr><th>Vértice</th><th>Sistema</th><th>Cuenta</th><th>Punto</th></tr></thead>
      <tbody>
        <tr><td>$r_1 \cap r_2$</td><td>$5x - y = 6$; $\;x + 5y = 22$</td><td>$y = 5x-6$; $\;x + 25x - 30 = 22 \Rightarrow 26x = 52$</td><td>$(2,\,4)$</td></tr>
        <tr><td>$r_2 \cap r_3$</td><td>$5x - y = 32$; $\;x + 5y = 22$</td><td>$y = 5x-32$; $\;26x = 182$</td><td>$(7,\,3)$</td></tr>
        <tr><td>$r_3 \cap r_4$</td><td>$5x - y = 32$; $\;x + 5y = -4$</td><td>$y = 5x-32$; $\;26x = 156$</td><td>$(6,\,-2)$</td></tr>
        <tr><td>$r_4 \cap r_1$</td><td>$5x - y = 6$; $\;x + 5y = -4$</td><td>$y = 5x-6$; $\;26x = 26$</td><td>$(1,\,-1)$</td></tr>
      </tbody>
    </table></div>
    <p>Recorridos en ese orden, los vértices van consecutivos alrededor del cuadrado.</p>

    <h3>Verificación independiente</h3>
    <p><strong>Lados</strong> (los cuatro deben medir $\sqrt{26}$):</p>
    <div class="fx center">$$\begin{aligned}
    |(2,4)(7,3)| &= \sqrt{5^2 + (-1)^2} = \sqrt{26} \\
    |(7,3)(6,-2)| &= \sqrt{(-1)^2 + (-5)^2} = \sqrt{26} \\
    |(6,-2)(1,-1)| &= \sqrt{(-5)^2 + 1^2} = \sqrt{26} \\
    |(1,-1)(2,4)| &= \sqrt{1^2 + 5^2} = \sqrt{26}
    \end{aligned}$$</div>
    <p><strong>Diagonales</strong> (en un cuadrado son iguales y valen lado$\,\cdot\sqrt2$):</p>
    <div class="fx center">$$|(2,4)(6,-2)| = \sqrt{16+36} = \sqrt{52}, \qquad |(7,3)(1,-1)| = \sqrt{36+16} = \sqrt{52}$$</div>
    <p>Y $\sqrt{52} = \sqrt{26}\cdot\sqrt2$ ✓. Cuatro lados iguales con diagonales iguales es un cuadrado, lo que confirma el resultado por un camino distinto al de los pasos 1-3.</p>
    <div class="note tip"><b class="lbl">Por qué los tres pasos son necesarios</b>
    Sólo paralelismo ⇒ paralelogramo. Paralelismo + perpendicularidad ⇒ rectángulo. Agregando la igualdad de distancias ⇒ cuadrado. Si se omite el paso 3, la demostración está incompleta: un rectángulo no es un cuadrado. Acá el paso 3 funcionó porque los dos normales tienen el <strong>mismo módulo</strong> $\sqrt{26}$ y las diferencias de términos independientes también son ambas $26$ — no es casualidad del enunciado, es lo que lo hace cuadrado.</div>`,
    resultado: tex`Es un cuadrado de lado $\sqrt{26}$: $r_1 \parallel r_3$, $r_2 \parallel r_4$, los pares son perpendiculares y $d(r_1,r_3) = d(r_2,r_4) = \sqrt{26}$. Vértices: $(2,4)$, $(7,3)$, $(6,-2)$ y $(1,-1)$.` }

]});
