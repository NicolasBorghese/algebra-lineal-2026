/* Unidad 2 — Rectas en el plano
   Fuentes: "eal sc 26 rectas en el plano ar.pdf" (diapositivas 2026)
            "Unidad 2 - Rectas en el plano.pdf" (apunte de teoría) */

EAL.unidad({
  id: 'u2', num: 2,
  titulo: 'Rectas en el plano',
  resumen: 'Las seis formas de escribir una recta de R² y cómo pasar de una a otra, más paralelismo, perpendicularidad, ángulos, distancias y haces de rectas.',
  secciones: [

  /* ========================================================= */
  { id: 'u2-s1', titulo: '1. Las formas de la ecuación de la recta',
    intro: 'Una recta queda determinada por un punto y una dirección. Todas las formas que siguen dicen lo mismo; cambiar de una a otra es puro álgebra, y buena parte del TP 2 consiste justamente en eso.',
    conceptos: [

    { id: 'u2-vectorial', tipo: 'def', titulo: 'Ecuación vectorial',
      cuerpo: tex`<p>Sea $L$ la recta que pasa por el punto $P_0 = (x_0, y_0)$ y tiene la dirección del vector $\vec u = (u_1, u_2) \neq \vec 0$. Si $P = (x,y)$ es un punto cualquiera de $L$, el vector $\overrightarrow{P_0P}$ es paralelo a $\vec u$, así que $\overrightarrow{P_0P} = \lambda \vec u$ (por [[u1-teorema-1]]). Como $P = P_0 + \overrightarrow{P_0P}$:</p>
      <div class="fx center">$$L: \;(x, y) = (x_0, y_0) + \lambda\,(u_1, u_2), \qquad \lambda \in \mathbb{R}$$</div>
      <p>$\vec u$ se llama <strong>vector director</strong> de $L$. No es único: cualquier $\alpha \vec u$ con $\alpha \neq 0$ sirve igual.</p>
      <p>La letra $\lambda$ es <strong>lambda</strong> (no delta) y se llama <strong>parámetro</strong>: es un número real libre que cuenta cuántas veces se camina $\vec u$ desde $P_0$. Cada valor de $\lambda$ da un punto de la recta; $\lambda = 0$ da $P_0$, y los negativos van en sentido contrario a $\vec u$.</p>
      <div class="note tip"><b class="lbl">Ejemplo</b> La recta por $P_0 = (2,-1)$ con director $\vec u = (3,2)$ es $(x,y) = (2,-1) + \lambda\,(3,2)$. Con $\lambda = 1$ se llega a $(5, 1)$; con $\lambda = -1$, a $(-1,-3)$. Este mismo ejemplo sigue en las formas de abajo.</div>` },

    { id: 'u2-parametrica', tipo: 'def', titulo: 'Ecuaciones paramétricas',
      cuerpo: tex`<p>Escribiendo la [[u2-vectorial|ecuación vectorial]] componente por componente:</p>
      <div class="fx center">$$L: \begin{cases} x = x_0 + \lambda\, u_1 \\ y = y_0 + \lambda\, u_2 \end{cases} \qquad \lambda \in \mathbb{R}$$</div>
      <p>Dándole valores a $\lambda$ se obtienen puntos de la recta. $\lambda = 0$ devuelve $P_0$.</p>
      <div class="note tip"><b class="lbl">Ejemplo</b> $(x,y) = (2,-1) + \lambda(3,2) = (2 + 3\lambda,\; -1 + 2\lambda)$, así que $\;x = 2 + 3\lambda$, $\;y = -1 + 2\lambda$. Se reconocen por ser <strong>dos</strong> ecuaciones, ambas con $\lambda$.</div>` },

    { id: 'u2-cartesiana', tipo: 'def', titulo: 'Ecuación cartesiana (simétrica)',
      cuerpo: tex`<p>Si el director $\vec u = (u_1, u_2)$ tiene $u_1 \neq 0$ y $u_2 \neq 0$, se despeja $\lambda$ de las dos [[u2-parametrica|paramétricas]] y se iguala:</p>
      <div class="fx center">$$L: \;\frac{x - x_0}{u_1} = \frac{y - y_0}{u_2}$$</div>
      <div class="note"><b class="lbl">Cuando una componente del director es nula</b>
      La escritura $\dfrac{x-2}{0} = \dfrac{y+3}{3}$ no tiene sentido algebraico pero sí geométrico: es la recta que pasa por $(2,-3)$ y es paralela a $\vec u = (0,3)$, es decir paralela al eje $Y$. Su ecuación es $x = 2$. Análogamente, director $(a, 0)$ da una recta horizontal $y = y_0$.</div>
      <div class="note tip"><b class="lbl">Ejemplo</b> De $x = 2 + 3\lambda$ sale $\lambda = \frac{x-2}{3}$; de $y = -1 + 2\lambda$ sale $\lambda = \frac{y+1}{2}$. Igualando: $\;\dfrac{x-2}{3} = \dfrac{y+1}{2}$. Ojo con el signo: $y_0 = -1$ aparece como $y + 1$.</div>` },

    { id: 'u2-pendiente', tipo: 'def', titulo: 'Pendiente de una recta',
      cuerpo: tex`<p>Si $\alpha$ es el ángulo que forma el vector director de $L$ con el semieje positivo $X$, entonces $\tan \alpha$ es la <strong>pendiente</strong> de $L$ y se nota $m$:</p>
      <div class="fx center">$$m = \tan\alpha = \frac{u_2}{u_1} \qquad (u_1 \neq 0)$$</div>
      <p>Y si se conocen dos puntos $P=(x_1,y_1)$, $Q=(x_2,y_2)$ de la recta, su director es $\overrightarrow{PQ} = Q - P$, de donde</p>
      <div class="fx center">$$m = \frac{y_2 - y_1}{x_2 - x_1}$$</div>
      <p>Las rectas verticales no tienen pendiente definida ($u_1 = 0$).</p>
      <div class="note tip"><b class="lbl">Ejemplo</b> Con director $(3,2)$: $m = \frac{2}{3}$. Es la misma fórmula «$\frac{y_1-y_0}{x_1-x_0}$» de Análisis: el numerador y el denominador son justamente las componentes del director $Q - P$.</div>` },

    { id: 'u2-punto-pendiente', tipo: 'form', titulo: 'Ecuación punto-pendiente y explícita',
      cuerpo: tex`<p><strong>Punto-pendiente:</strong> recta de pendiente $m$ que pasa por $P_0=(x_0,y_0)$:</p>
      <div class="fx center">$$y - y_0 = m\,(x - x_0)$$</div>
      <p><strong>Explícita:</strong> distribuyendo y despejando $y$,</p>
      <div class="fx center">$$y = m\,x + h$$</div>
      <p>donde $h$ es la <strong>ordenada al origen</strong> (el valor de $y$ cuando $x=0$, o sea el punto $(0,h)$).</p>
      <p>Es la «función lineal» $f(x) = mx + h$ de Análisis: de las seis formas, es la única que mira la recta como función.</p>
      <div class="note tip"><b class="lbl">Ejemplo</b> Punto-pendiente con $P_0 = (2,-1)$ y $m = \frac23$: $\;y + 1 = \frac{2}{3}(x - 2)$. Despejando, $\;y = \frac{2}{3}x - \frac{7}{3}$, con $h = -\frac73$. Control: $x = 2$ da $\frac43 - \frac73 = -1$ ✓.</div>` },

    { id: 'u2-implicita', tipo: 'def', titulo: 'Ecuación implícita (general) y vector normal',
      cuerpo: tex`<p>Operando sobre la [[u2-cartesiana|cartesiana]] se llega a la forma</p>
      <div class="fx center">$$L: \; a\,x + b\,y + c = 0$$</div>
      <p>Si el director es $\vec u = (u_1, u_2)$, resulta $\vec u = (-b, a)$; por lo tanto</p>
      <div class="fx center">$$\vec n = (a, b) \;\text{ es un vector } \textbf{normal} \text{ (perpendicular) a } L$$</div>
      <div class="note tip"><b class="lbl">La idea más rentable de la unidad</b>
      Los coeficientes de $x$ e $y$ en la ecuación implícita <strong>son</strong> las componentes de un vector normal a la recta. Y si $\vec n = (a,b)$ es normal, entonces $\vec u = (-b, a)$ es director (son perpendiculares por [[u1-teorema-3]]). Pasar de normal a director es «dar vuelta y cambiar un signo». Con eso se resuelven casi todos los ítems de paralelas y perpendiculares.</div>
      <div class="note"><b class="lbl">Ejemplo</b> De $\frac{x-2}{3} = \frac{y+1}{2}$, multiplicando en cruz: $2(x-2) = 3(y+1) \Rightarrow 2x - 4 = 3y + 3 \Rightarrow 2x - 3y - 7 = 0$. Normal $\vec n = (2,-3)$; director $(-b, a) = (3, 2)$ ✓, el mismo con el que se empezó.</div>` },

    { id: 'u2-segmentaria', tipo: 'form', titulo: 'Ecuación segmentaria',
      cuerpo: tex`<p>Si en la [[u2-implicita|implícita]] $a$, $b$ y $c$ son todos no nulos, se puede escribir</p>
      <div class="fx center">$$L: \;\frac{x}{p} + \frac{y}{q} = 1, \qquad p = -\frac{c}{a}, \quad q = -\frac{c}{b}$$</div>
      <p>donde $p$ es la <strong>abscisa al origen</strong> (corte con el eje $X$, punto $(p,0)$) y $q$ la <strong>ordenada al origen</strong> (corte con el eje $Y$, punto $(0,q)$).</p>
      <div class="note tip"><b class="lbl">Uso directo</b> «Hallar la recta con ordenada al origen $-3$ y abscisa al origen $5$» se resuelve de una: $\dfrac{x}{5} + \dfrac{y}{-3} = 1$, y después se lleva a implícita si hace falta.</div>
      <div class="note"><b class="lbl">Ejemplo</b> De $2x - 3y - 7 = 0$: $\;2x - 3y = 7$, y dividiendo por $7$, $\;\frac{2x}{7} - \frac{3y}{7} = 1$, o sea $\;\dfrac{x}{7/2} + \dfrac{y}{-7/3} = 1$. Corta al eje $X$ en $(\frac72, 0)$ y al eje $Y$ en $(0, -\frac73)$ — la misma $h$ de la explícita.</div>` },

    { id: 'u2-pasaje', tipo: 'met', titulo: 'Método — cómo pasar de una forma a otra',
      cuerpo: tex`<p>Los enunciados que piden «escribirla en todas las formas» siguen siempre este circuito:</p>
      <ol class="pasos">
        <li><span class="ptit">Conseguir un punto y un director.</span> Con dos puntos $P,Q$: el punto es $P$ y el director $\overrightarrow{PQ} = Q-P$. Con una implícita: el normal es $(a,b)$, el director $(-b,a)$, y un punto se obtiene dándole un valor a $x$ y despejando $y$.</li>
        <li><span class="ptit">Vectorial:</span> $(x,y) = P + \lambda \vec u$.</li>
        <li><span class="ptit">Paramétricas:</span> separar en componentes.</li>
        <li><span class="ptit">Cartesiana:</span> despejar $\lambda$ de ambas e igualar.</li>
        <li><span class="ptit">Implícita:</span> pasar los denominadores multiplicando e igualar a cero.</li>
        <li><span class="ptit">Explícita:</span> despejar $y$; de ahí se lee $m$ y $h$.</li>
        <li><span class="ptit">Segmentaria:</span> pasar $c$ al otro miembro y dividir todo por $-c$.</li>
      </ol>` }
  ]},

  /* ========================================================= */
  { id: 'u2-s2', titulo: '2. Posición relativa: paralelismo, perpendicularidad, ángulo e intersección',
    conceptos: [

    { id: 'u2-paralelismo', tipo: 'teo', titulo: 'Teorema 1 — Condición de paralelismo',
      cuerpo: tex`<p>Sean $L: ax+by+c=0$ y $L': a'x+b'y+c'=0$, con directores $\vec u, \vec u'$ y normales $\vec n = (a,b)$, $\vec n' = (a',b')$. Las siguientes afirmaciones son <strong>equivalentes</strong>:</p>
      <ol>
        <li>$L \parallel L'$;</li>
        <li>los directores son paralelos: $\vec u = \alpha \vec u'$ con $\alpha \neq 0$;</li>
        <li>los normales son paralelos: $\vec n = \alpha \vec n'$ con $\alpha \neq 0$ (equivale a $\tfrac{a}{a'} = \tfrac{b}{b'}$);</li>
        <li>las pendientes son iguales: $m = m'$.</li>
      </ol>
      <div class="note"><b class="lbl">Paralelas distintas vs. coincidentes</b>
      Si además $\tfrac{a}{a'} = \tfrac{b}{b'} = \tfrac{c}{c'}$, las rectas son <strong>coincidentes</strong> (la misma recta escrita de dos formas). Si se cumple la proporción en $a,b$ pero no en $c$, son paralelas distintas y la intersección es vacía.</div>` },

    { id: 'u2-perpendicularidad', tipo: 'teo', titulo: 'Teorema 2 — Condición de perpendicularidad',
      cuerpo: tex`<p>Con la notación anterior, son equivalentes:</p>
      <ol>
        <li>$L \perp L'$;</li>
        <li>los directores son ortogonales: $\vec u \cdot \vec u' = 0$;</li>
        <li>los normales son ortogonales: $\vec n \cdot \vec n' = 0$, es decir $a a' + b b' = 0$;</li>
        <li>las pendientes son <strong>inversas y opuestas</strong>:</li>
      </ol>
      <div class="fx center">$$m' = -\frac{1}{m}, \qquad \text{equivalentemente } \; m \cdot m' = -1$$</div>
      <div class="note tip"><b class="lbl">Receta</b> Para la paralela a $ax+by+c=0$ por un punto: se conserva $(a,b)$ y se recalcula $c$ con el punto. Para la perpendicular: se usa $(-b, a)$ como nuevo normal, o sea $-bx + ay + c' = 0$, y se ajusta $c'$ con el punto.</div>` },

    { id: 'u2-angulo-rectas', tipo: 'form', titulo: 'Ángulo entre dos rectas',
      cuerpo: tex`<p>Si $L$ y $L'$ tienen directores $\vec u$ y $\vec u'$ (y normales $\vec n$, $\vec n'$), el ángulo entre las rectas es</p>
      <div class="fx center">$$\cos\theta = \frac{|\vec u \cdot \vec u'|}{\|\vec u\|\,\|\vec u'\|} = \frac{|\vec n \cdot \vec n'|}{\|\vec n\|\,\|\vec n'\|}, \qquad 0 \le \theta \le \frac{\pi}{2}$$</div>
      <div class="note warn"><b class="lbl">Por qué el valor absoluto</b>
      Dos rectas que se cortan forman dos pares de ángulos suplementarios. Por convención se toma el <strong>agudo</strong>, y el módulo en el numerador garantiza $\cos\theta \ge 0$, o sea $\theta \in [0°, 90°]$. Es la única diferencia con el [[u1-teorema-2|ángulo entre vectores]], donde el signo sí importa.</div>` },

    { id: 'u2-interseccion', tipo: 'met', titulo: 'Método — intersección de dos rectas',
      cuerpo: tex`<p>Se resuelve el sistema formado por las dos ecuaciones implícitas. Según el resultado:</p>
      <div class="tbl"><table>
        <thead><tr><th>El sistema es</th><th>Posición relativa</th><th>Intersección</th></tr></thead>
        <tbody>
          <tr><td>compatible determinado</td><td>incidentes (se cortan)</td><td>un punto</td></tr>
          <tr><td>incompatible</td><td>paralelas distintas</td><td>$\varnothing$</td></tr>
          <tr><td>compatible indeterminado</td><td>coincidentes</td><td>la recta entera</td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">Atajo</b> Si una recta viene en paramétricas, conviene sustituir $x$ e $y$ en la implícita de la otra y despejar $\lambda$: una ecuación con una incógnita. Sin solución ⇒ paralelas; infinitas ⇒ coincidentes.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u2-s3', titulo: '3. Distancias',
    conceptos: [

    { id: 'u2-distancia-punto-recta', tipo: 'form', titulo: 'Distancia de un punto a una recta',
      cuerpo: tex`<p>Sea $L: ax + by + c = 0$ y $P_0 = (x_0, y_0) \notin L$. La menor distancia de $P_0$ a $L$ se mide sobre la perpendicular a $L$ por $P_0$, y vale</p>
      <div class="fx center">$$d(P_0, L) = \frac{\bigl|\, \overrightarrow{P_1 P_0} \cdot \vec n \,\bigr|}{\|\vec n\|}
      \;=\; \frac{\bigl|\, a x_0 + b y_0 + c \,\bigr|}{\sqrt{a^2 + b^2}}$$</div>
      <p>donde $P_1$ es cualquier punto de $L$ y $\vec n = (a,b)$ su normal. La fórmula de la derecha es la de uso directo: se reemplazan las coordenadas del punto en el miembro izquierdo de la ecuación implícita y se divide por el módulo del normal.</p>
      <div class="note warn"><b class="lbl">Requisito</b> La ecuación tiene que estar <strong>igualada a cero</strong> antes de reemplazar. Si está en la forma $y = mx+h$, primero hay que pasarla a $mx - y + h = 0$.</div>
      <div class="note tip"><b class="lbl">De dónde sale</b> Es la proyección de $\overrightarrow{P_1P_0}$ sobre el normal ([[u1-proyeccion-ortogonal]]): la componente del vector punto-a-recta en la dirección perpendicular a la recta.</div>` },

    { id: 'u2-equidistancia', tipo: 'met', titulo: 'Método — puntos que equidistan',
      cuerpo: tex`<p>Varios ítems del TP 2 piden puntos que cumplen una condición de distancia. El patrón es siempre el mismo: <strong>escribir el punto incógnita con la menor cantidad de parámetros posible y plantear la igualdad de distancias</strong>.</p>
      <ul>
        <li><strong>Punto del eje $X$ que equidista de $A$ y $B$:</strong> el punto es $(x, 0)$; se plantea $d(P,A) = d(P,B)$ con [[u1-distancia-puntos]], se elevan al cuadrado ambos miembros y se despeja $x$.</li>
        <li><strong>Punto de una recta $L$ que equidista de $A$ y $B$:</strong> se parametriza $L$ para que el punto tenga un solo parámetro, y se plantea la misma igualdad.</li>
        <li><strong>Puntos de $L$ que distan $k$ de $P$:</strong> punto parametrizado, $d = k$, cuadrado y resolver. Suele dar <strong>dos</strong> soluciones.</li>
        <li><strong>Rectas paralelas a $L$ que distan $k$ de $P$:</strong> la paralela es $ax+by+c'=0$ con $c'$ incógnita; se plantea $d(P, L') = k$ con [[u2-distancia-punto-recta]] y se despeja $c'$. El valor absoluto da <strong>dos</strong> rectas, una a cada lado.</li>
      </ul>
      <div class="note tip"><b class="lbl">Por qué elevar al cuadrado</b> Para sacarse de encima las raíces. Como ambos miembros son distancias (no negativas), elevar al cuadrado es una equivalencia y no introduce soluciones falsas.</div>` },

    { id: 'u2-mediatriz', tipo: 'def', titulo: 'Mediatriz, mediana y altura',
      cuerpo: tex`<ul>
        <li><strong>Mediatriz</strong> de un segmento $AB$: la recta perpendicular a $AB$ que pasa por su punto medio. Es también el lugar geométrico de los puntos que equidistan de $A$ y $B$.</li>
        <li><strong>Mediana</strong> de un triángulo relativa al lado $AB$: la recta que une el punto medio de $AB$ con el vértice opuesto $C$.</li>
        <li><strong>Altura</strong> relativa al lado $AB$: la recta perpendicular a $AB$ que pasa por $C$.</li>
      </ul>
      <p>El <strong>punto medio</strong> de $AB$ es</p>
      <div class="fx center">$$M = \frac{A + B}{2} = \left( \frac{x_A + x_B}{2}, \; \frac{y_A + y_B}{2} \right)$$</div>
      <div class="note tip"><b class="lbl">Cómo armar cada una</b>
      Mediatriz: punto $= M$, normal $= \overrightarrow{AB}$ ⇒ directo a implícita.
      Mediana: dos puntos ($M$ y $C$) ⇒ [[u2-pasaje]].
      Altura: punto $= C$, normal $= \overrightarrow{AB}$.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u2-s4', titulo: '4. Haces de rectas',
    conceptos: [

    { id: 'u2-haz', tipo: 'def', titulo: 'Haz de rectas',
      cuerpo: tex`<p>Se define <strong>haz de rectas</strong> al conjunto de rectas cuyas ecuaciones dependen de un valor real arbitrario llamado <strong>parámetro del haz</strong>.</p>
      <p>Hay dos tipos básicos:</p>
      <ul>
        <li><strong>Haz propio</strong> (concurrente): todas las rectas pasan por un punto fijo, llamado <strong>centro del haz</strong>. Ejemplo: $y = kx - 3$, con $k \in \mathbb{R}$, son infinitas rectas por $(0,-3)$.</li>
        <li><strong>Haz impropio</strong> (de paralelas): todas las rectas tienen la misma dirección. Ejemplo: $y = -2x + k$, con $k \in \mathbb{R}$, son todas las rectas de pendiente $-2$.</li>
      </ul>` },

    { id: 'u2-haces-tipicos', tipo: 'form', titulo: 'Los haces que piden los prácticos',
      cuerpo: tex`<div class="tbl"><table>
        <thead><tr><th>Condición</th><th>Ecuación del haz</th><th>Observación</th></tr></thead>
        <tbody>
          <tr><td>pasan por $(x_0, y_0)$</td><td>$y - y_0 = k(x - x_0)$</td><td>falta la vertical $x = x_0$</td></tr>
          <tr><td>abscisa al origen $p$</td><td>$\dfrac{x}{p} + \dfrac{y}{q} = 1$, $q$ parámetro</td><td>equivale al haz por $(p,0)$</td></tr>
          <tr><td>$p + q = 10$</td><td>$\dfrac{x}{p} + \dfrac{y}{10-p} = 1$</td><td>parámetro $p$, con $p \neq 0, 10$</td></tr>
          <tr><td>paralelas a $y = 4x - 1$</td><td>$y = 4x + k$</td><td>haz impropio</td></tr>
          <tr><td>perpendiculares a $y = -3x+1$</td><td>$y = \tfrac{1}{3}x + k$</td><td>haz impropio, $m' = -1/m$</td></tr>
          <tr><td>paralelas a $ax+by+c=0$</td><td>$ax + by + k = 0$</td><td>mismo normal</td></tr>
          <tr><td>por la intersección de $L_1$ y $L_2$</td><td>$L_1 + k\,L_2 = 0$</td><td>no incluye a $L_2$</td></tr>
        </tbody>
      </table></div>
      <div class="note warn"><b class="lbl">Lo que siempre se descuenta un punto</b>
      El haz $y - y_0 = k(x-x_0)$ <strong>no contiene la recta vertical</strong> $x = x_0$, porque ninguna $k$ real da pendiente infinita. Cuando el enunciado dice «escribir el haz», conviene aclararlo. Lo mismo con $L_1 + kL_2 = 0$: no contiene a $L_2$.</div>` },

    { id: 'u2-haz-por-punto', tipo: 'met', titulo: 'Método — hallar el parámetro para que una recta del haz pase por un punto',
      cuerpo: tex`<p>Es sustituir y despejar: se reemplazan las coordenadas del punto en la ecuación del haz y queda una ecuación con una sola incógnita, el parámetro.</p>
      <ol class="pasos">
        <li>Reemplazar $x$ e $y$ por las coordenadas del punto dado.</li>
        <li>Despejar $k$ (o el parámetro que sea).</li>
        <li>Sustituir el valor hallado en la ecuación del haz para obtener la recta concreta.</li>
      </ol>
      <p>Si al despejar no hay solución, significa que ninguna recta del haz pasa por ese punto —y hay que explicar por qué (típicamente porque la única recta que lo haría es la vertical, que el haz no incluye).</p>` }
  ]}

]});
