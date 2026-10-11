/* Unidad 1 — Vectores en R² y R³
   Fuentes: "eal sc 26 vectores ar.pdf" (diapositivas 2026, Mg. C. Pozzebon)
            "Unidad 1 - Vectores.pdf" (apunte de teoría, Mg. M. Albornoz) */

EAL.unidad({
  id: 'u1', num: 1,
  titulo: 'Vectores en R² y R³',
  resumen: 'Qué es un vector, cómo se opera con componentes y los tres productos (escalar, vectorial y mixto) con sus lecturas geométricas: ángulos, proyecciones, áreas y volúmenes.',
  secciones: [

  /* ========================================================= */
  { id: 'u1-s1', titulo: '1. Vector, elementos y equivalencia',
    intro: 'Todo arranca con el segmento orientado. Las tres características que lo definen —dirección, sentido y módulo— son las que después aparecen una y otra vez en los enunciados de los prácticos.',
    conceptos: [

    { id: 'u1-segmento-dirigido', tipo: 'def', titulo: 'Segmento de recta dirigido',
      cuerpo: tex`<p>Dados dos puntos $P$ y $Q$, el <strong>segmento de recta dirigido</strong> (u orientado) de $P$ a $Q$, que se nota $\overrightarrow{PQ}$, es el segmento de recta que va de $P$ a $Q$.</p>
      <p>$P$ se llama <strong>punto inicial</strong>, origen o punto de aplicación; $Q$ es el <strong>punto terminal</strong>, final o extremo. Es evidente que $\overrightarrow{PQ} \neq \overrightarrow{QP}$: el orden importa.</p>` },

    { id: 'u1-vector', tipo: 'def', titulo: 'Vector y sus tres elementos',
      cuerpo: tex`<p>Se llama <strong>vector</strong> a todo segmento orientado: $\vec{v} = \overrightarrow{PQ}$. Queda determinado por tres elementos:</p>
      <ul>
        <li><strong>Dirección:</strong> la que determina la recta que contiene al vector.</li>
        <li><strong>Sentido:</strong> la orientación sobre esa recta, dada por el origen $P$ y el extremo $Q$.</li>
        <li><strong>Módulo</strong> o norma: la longitud del vector, que se nota $\|\vec{v}\|$.</li>
      </ul>
      <div class="note"><b class="lbl">Dos observaciones que se usan todo el tiempo</b>
      <p>$\|\vec{v}\| \ge 0$, y $\|\vec{v}\| = 0$ sólo si origen y extremo coinciden ($P = Q$).</p>
      <p>Todos los vectores situados sobre una misma recta o sobre rectas paralelas tienen la <strong>misma dirección</strong>. Dirección y sentido son cosas distintas: dos vectores opuestos comparten dirección y difieren en el sentido.</p></div>` },

    { id: 'u1-equivalentes', tipo: 'def', titulo: 'Vectores equivalentes (vectores libres)',
      cuerpo: tex`<p>Son <strong>equivalentes</strong> los vectores que tienen la misma longitud, la misma dirección y el mismo sentido. Los vectores equivalentes se consideran <em>iguales</em> aunque estén en posiciones distintas del plano; por eso se los llama <strong>vectores libres</strong>: no interesa su punto de aplicación.</p>
      <div class="note tip"><b class="lbl">Para qué sirve</b> Es la idea detrás de los ejercicios del tipo «hallar un segmento dirigido con punto inicial en $P$ equivalente a $\vec{v}$»: se busca el extremo $Q$ tal que $\overrightarrow{PQ}$ tenga las mismas componentes que $\vec{v}$.</div>` },

    { id: 'u1-versor-nulo-paralelos', tipo: 'def', titulo: 'Versor, vector nulo y vectores paralelos',
      cuerpo: tex`<ol>
        <li>Se llama <strong>versor</strong> a todo vector de módulo $1$. Se nota $\breve{v}$.</li>
        <li>Se llama <strong>vector nulo</strong> al que tiene módulo cero: $\vec{0}$. No tiene dirección ni sentido definidos.</li>
        <li>Se llaman <strong>vectores paralelos</strong> o <strong>colineales</strong> a los que tienen la misma recta de acción o rectas de acción paralelas.</li>
      </ol>` },

    { id: 'u1-componentes', tipo: 'def', titulo: 'Componentes de un vector',
      cuerpo: tex`<p>Cada punto del plano define un vector libre con origen en el origen de coordenadas y extremo en el punto, y recíprocamente. Hay entonces una <strong>correspondencia biunívoca</strong> entre vectores libres y puntos: a cada vector se lo identifica con las coordenadas de su extremo.</p>
      <p>En $\mathbb{R}^2$: $\vec{v} = (a, b)$. En $\mathbb{R}^3$: $\vec{v} = (a, b, c)$, que es la diagonal del paralelepípedo de aristas $a$, $b$, $c$. En general, en $\mathbb{R}^n$ un vector es una $n$-upla ordenada $(x_1, x_2, \dots, x_n)$.</p>` },

    { id: 'u1-componentes-pq', tipo: 'form', titulo: 'Componentes a partir de dos puntos',
      cuerpo: tex`<p>Si $P = (p_1, p_2, p_3)$ es el punto inicial y $Q = (q_1, q_2, q_3)$ el final, las componentes del vector $\overrightarrow{PQ}$ son</p>
      <div class="fx center">$$\overrightarrow{PQ} = Q - P = (q_1 - p_1,\; q_2 - p_2,\; q_3 - p_3)$$</div>
      <p><strong>Final menos inicial.</strong> Lo mismo en $\mathbb{R}^2$ con dos componentes.</p>
      <div class="note warn"><b class="lbl">Error típico</b> Restar al revés da el vector opuesto $\overrightarrow{QP}$: mismo módulo y dirección, sentido contrario.</div>` },

    { id: 'u1-proyeccion-geom', tipo: 'def', titulo: 'Proyección (idea geométrica)',
      cuerpo: tex`<p><strong>De un punto:</strong> la proyección de $P$ sobre una recta $L$ paralelamente al vector $\vec{u}$ se obtiene trazando por $P$ una recta paralela a $\vec{u}$; donde corta a $L$ está $P'$. Se escribe $\operatorname{proy}_{\vec u} (P) = P'$.</p>
      <p><strong>De un vector:</strong> se proyectan el origen y el extremo de $\vec{v}$ y se unen los puntos obtenidos.</p>
      <p>Si la dirección de proyección es <strong>perpendicular</strong> a $L$, la proyección se llama <strong>ortogonal</strong>. Cuando el enunciado pide «la proyección» sin aclarar dirección, se entiende la ortogonal.</p>
      <div class="note"><b class="lbl">Observación</b> Vectores iguales tienen proyecciones iguales.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u1-s2', titulo: '2. Operaciones: suma, resta y producto por un escalar',
    conceptos: [

    { id: 'u1-suma', tipo: 'def', titulo: 'Suma y resta por componentes',
      cuerpo: tex`<p>Si $\vec{u} = (u_1, u_2, u_3)$ y $\vec{v} = (v_1, v_2, v_3)$:</p>
      <div class="fx center">$$\vec{u} + \vec{v} = (u_1 + v_1,\; u_2 + v_2,\; u_3 + v_3) \qquad
      \vec{u} - \vec{v} = (u_1 - v_1,\; u_2 - v_2,\; u_3 - v_3)$$</div>
      <p>Geométricamente la suma es la <strong>regla del paralelogramo</strong> (o poner un vector a continuación del otro); la resta $\vec{u} - \vec{v}$ es el vector que va <em>del extremo de $\vec v$ al extremo de $\vec u$</em>.</p>` },

    { id: 'u1-escalar-por-vector', tipo: 'def', titulo: 'Producto de un escalar por un vector',
      cuerpo: tex`<p>Para $\alpha \in \mathbb{R}$: $\;\alpha\,\vec{v} = (\alpha v_1,\; \alpha v_2,\; \alpha v_3)$.</p>
      <p>El resultado tiene la <strong>misma dirección</strong> que $\vec v$ y módulo $\|\alpha \vec v\| = |\alpha|\,\|\vec v\|$. Sobre el sentido y el tamaño:</p>
      <div class="tbl"><table>
        <thead><tr><th>$\alpha$</th><th>Sentido</th><th>Módulo</th></tr></thead>
        <tbody>
          <tr><td>$\alpha > 1$</td><td>igual</td><td>se alarga</td></tr>
          <tr><td>$0 < \alpha < 1$</td><td>igual</td><td>se acorta</td></tr>
          <tr><td>$\alpha = -1$</td><td>opuesto</td><td>igual</td></tr>
          <tr><td>$\alpha < 0$</td><td>opuesto</td><td>según $|\alpha|$</td></tr>
          <tr><td>$\alpha = 0$</td><td>—</td><td>da $\vec 0$</td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">Esta es la herramienta</b> Todo ejercicio del tipo «hallar un vector con la misma dirección que $\vec v$ y el doble de su longitud» o «sentido opuesto y la mitad del módulo» se resuelve eligiendo el $\alpha$ adecuado: $2\vec v$ y $-\tfrac{1}{2}\vec v$ respectivamente.</div>` },

    { id: 'u1-prop-suma', tipo: 'prop', titulo: 'Propiedades de la suma y del producto por escalar',
      cuerpo: tex`<p>Para todos $\vec u, \vec v, \vec w$ y $\alpha, \beta \in \mathbb{R}$:</p>
      <ol>
        <li>$\vec u + \vec v = \vec v + \vec u$ (conmutativa)</li>
        <li>$(\vec u + \vec v) + \vec w = \vec u + (\vec v + \vec w)$ (asociativa)</li>
        <li>$\vec u + \vec 0 = \vec u$ (neutro)</li>
        <li>$\vec u + (-\vec u) = \vec 0$ (opuesto)</li>
        <li>$\alpha(\vec u + \vec v) = \alpha \vec u + \alpha \vec v$ (distributiva respecto de la suma de vectores)</li>
        <li>$(\alpha + \beta)\vec u = \alpha \vec u + \beta \vec u$ (distributiva respecto de la suma de escalares)</li>
        <li>$\alpha(\beta \vec u) = (\alpha\beta)\vec u$</li>
        <li>$1 \cdot \vec u = \vec u$</li>
      </ol>
      <div class="note tip"><b class="lbl">Dato que vuelve en la unidad 4</b> Estas ocho propiedades son exactamente los axiomas que convierten a $\mathbb{R}^n$ en un [[u4-espacio-vectorial|espacio vectorial]]. Lo que acá son «propiedades de los vectores» allá se vuelve la definición misma.</div>` },

    { id: 'u1-teorema-1', tipo: 'teo', titulo: 'Teorema 1 — Condición de paralelismo',
      cuerpo: tex`<p>En el plano y en el espacio, <strong>dos vectores no nulos son paralelos si y sólo si uno es múltiplo escalar del otro</strong>. En símbolos:</p>
      <div class="fx center">$$\vec u \parallel \vec v \iff \exists\, \alpha \in \mathbb{R} - \{0\} \;:\; \vec u = \alpha\, \vec v$$</div>
      <p>Dos vectores paralelos pueden tener igual o distinto sentido, e igual o distinto módulo.</p>
      <div class="note tip"><b class="lbl">En la práctica</b> Para verificar paralelismo se comparan las componentes: $\vec u \parallel \vec v$ si $\dfrac{u_1}{v_1} = \dfrac{u_2}{v_2} = \dfrac{u_3}{v_3}$ (proporcionalidad), cuidando los denominadores nulos.</div>` },

    { id: 'u1-modulo', tipo: 'form', titulo: 'Módulo de un vector',
      cuerpo: tex`<div class="fx center">$$\|\vec v\| = \sqrt{v_1^2 + v_2^2} \quad \text{en } \mathbb{R}^2
      \qquad\qquad \|\vec v\| = \sqrt{v_1^2 + v_2^2 + v_3^2} \quad \text{en } \mathbb{R}^3$$</div>
      <p>Es el teorema de Pitágoras aplicado una o dos veces. Propiedades:</p>
      <ol>
        <li>$\|\vec v\| \ge 0$, y $\|\vec v\| = 0 \iff \vec v = \vec 0$.</li>
        <li>$\|\alpha \vec v\| = |\alpha|\,\|\vec v\|$ — el escalar sale <strong>en valor absoluto</strong>.</li>
        <li>$\|\vec u + \vec v\| \le \|\vec u\| + \|\vec v\|$ (desigualdad triangular).</li>
      </ol>
      <div class="note warn"><b class="lbl">Error típico</b> $\|\vec u + \vec v\| \neq \|\vec u\| + \|\vec v\|$ en general. Hay que sumar primero los vectores y después tomar módulo.</div>` },

    { id: 'u1-distancia-puntos', tipo: 'form', titulo: 'Distancia entre dos puntos',
      cuerpo: tex`<div class="fx center">$$d(P, Q) = \|\overrightarrow{PQ}\| = \sqrt{(q_1-p_1)^2 + (q_2-p_2)^2 + (q_3-p_3)^2}$$</div>
      <p>La distancia entre dos puntos <strong>es</strong> el módulo del vector que los une: son el mismo número, mirado de dos maneras.</p>` },

    { id: 'u1-versor-asociado', tipo: 'form', titulo: 'Versor asociado (normalización)',
      cuerpo: tex`<p>Dado $\vec v \neq \vec 0$, el versor con su misma dirección y sentido es</p>
      <div class="fx center">$$\breve{v} = \frac{\vec v}{\|\vec v\|}, \qquad \text{y se verifica } \|\breve v\| = 1.$$</div>
      <div class="note tip"><b class="lbl">Receta para «un vector de norma $k$ paralelo a $\vec v$»</b>
      Primero se normaliza y después se escala: $\;\vec a = \pm\, k\,\dfrac{\vec v}{\|\vec v\|}$.
      Hay <strong>dos</strong> soluciones (una por cada sentido), salvo que el enunciado fije el sentido.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u1-s3', titulo: '3. Producto escalar: ángulos, ortogonalidad y proyecciones',
    intro: 'El producto escalar devuelve un número, no un vector. Es la herramienta para todo lo que tenga que ver con ángulos, perpendicularidad y proyecciones.',
    conceptos: [

    { id: 'u1-producto-escalar', tipo: 'def', titulo: 'Producto escalar (o punto)',
      cuerpo: tex`<p>Dados $\vec u = (u_1, u_2, u_3)$ y $\vec v = (v_1, v_2, v_3)$:</p>
      <div class="fx center">$$\vec u \cdot \vec v = u_1 v_1 + u_2 v_2 + u_3 v_3 \;\in\; \mathbb{R}$$</div>
      <p>El resultado es un <strong>escalar</strong>. Propiedades:</p>
      <ol>
        <li>$\vec u \cdot \vec v = \vec v \cdot \vec u$ (conmutativa)</li>
        <li>$\vec u \cdot (\vec v + \vec w) = \vec u \cdot \vec v + \vec u \cdot \vec w$ (distributiva)</li>
        <li>$(\alpha \vec u) \cdot \vec v = \alpha (\vec u \cdot \vec v)$</li>
        <li>$\vec v \cdot \vec v = \|\vec v\|^2$, de donde $\|\vec v\| = \sqrt{\vec v \cdot \vec v}$</li>
        <li>$\vec 0 \cdot \vec v = 0$</li>
      </ol>` },

    { id: 'u1-teorema-2', tipo: 'teo', titulo: 'Teorema 2 — Producto escalar y ángulo',
      cuerpo: tex`<p>Sean $\vec u$ y $\vec v$ dos vectores distintos de cero. Si $\theta$ es el ángulo entre ellos, entonces</p>
      <div class="fx center">$$\vec u \cdot \vec v = \|\vec u\|\,\|\vec v\|\, \cos\theta
      \qquad\Longrightarrow\qquad \cos\theta = \frac{\vec u \cdot \vec v}{\|\vec u\|\,\|\vec v\|}$$</div>
      <p>con $0 \le \theta \le \pi$ (se toma siempre el ángulo no orientado entre $0°$ y $180°$).</p>
      <div class="note tip"><b class="lbl">Leer el signo antes de calcular</b>
      <ul>
        <li>$\vec u \cdot \vec v > 0 \Rightarrow \theta$ <strong>agudo</strong></li>
        <li>$\vec u \cdot \vec v = 0 \Rightarrow \theta$ <strong>recto</strong></li>
        <li>$\vec u \cdot \vec v < 0 \Rightarrow \theta$ <strong>obtuso</strong></li>
      </ul></div>` },

    { id: 'u1-teorema-3', tipo: 'teo', titulo: 'Teorema 3 — Condición de perpendicularidad',
      cuerpo: tex`<p>Los vectores $\vec u$ y $\vec v$, distintos de cero, son <strong>ortogonales</strong> (o perpendiculares) si y sólo si</p>
      <div class="fx center">$$\vec u \cdot \vec v = 0$$</div>
      <p>Es el caso $\theta = 90°$ del [[u1-teorema-2|Teorema 2]], porque $\cos 90° = 0$.</p>
      <div class="note tip"><b class="lbl">Uso práctico</b> Es la ecuación que se plantea en todos los ejercicios de «hallar $k$ para que sean ortogonales»: se arma $\vec u \cdot \vec v = 0$ y se despeja. En $\mathbb{R}^2$, un vector perpendicular a $(a, b)$ es $(-b, a)$ (y también $(b, -a)$).</div>` },

    { id: 'u1-proyeccion-ortogonal', tipo: 'form', titulo: 'Vector proyección ortogonal',
      cuerpo: tex`<p>La proyección ortogonal de $\vec u$ <strong>en la dirección de</strong> $\vec v \neq \vec 0$ es el vector</p>
      <div class="fx center">$$\operatorname{proy}_{\vec v}\, \vec u \;=\; \frac{\vec u \cdot \vec v}{\|\vec v\|^{2}}\; \vec v
      \;=\; \frac{\vec u \cdot \vec v}{\vec v \cdot \vec v}\; \vec v$$</div>
      <p>y su módulo —la <strong>proyección escalar</strong>, o «componente de $\vec u$ sobre $\vec v$»— es</p>
      <div class="fx center">$$\left\| \operatorname{proy}_{\vec v}\, \vec u \right\| = \frac{|\vec u \cdot \vec v|}{\|\vec v\|}$$</div>
      <div class="note warn"><b class="lbl">Cuidado con el orden</b> «Proyectar $\vec u$ sobre $\vec v$» da un vector <strong>paralelo a $\vec v$</strong>. Si se invierten los papeles, el resultado es otro. En el denominador va siempre el vector <em>sobre el que</em> se proyecta.</div>
      <div class="note tip"><b class="lbl">Descomposición</b> Si $\vec w = \operatorname{proy}_{\vec v} \vec u$ y $\vec t = \vec u - \vec w$, entonces $\vec u = \vec w + \vec t$ con $\vec w \parallel \vec v$ y $\vec t \perp \vec v$. Además $\vec t \perp \vec w$. Esta descomposición es la que piden varios ítems del TP 1.</div>` },

    { id: 'u1-canonicos', tipo: 'def', titulo: 'Versores canónicos',
      cuerpo: tex`<p>En $\mathbb{R}^3$ se llaman versores canónicos a</p>
      <div class="fx center">$$\breve{i} = (1,0,0), \qquad \breve{j} = (0,1,0), \qquad \breve{k} = (0,0,1)$$</div>
      <p>y todo vector se escribe $\vec v = v_1 \breve i + v_2 \breve j + v_3 \breve k$. En $\mathbb{R}^2$: $\breve i = (1,0)$, $\breve j = (0,1)$.</p>
      <p>Son ortogonales entre sí y de módulo 1 (base ortonormal). Más adelante este conjunto es la [[u4-base|base canónica]] de $\mathbb{R}^n$.</p>` }
  ]},

  /* ========================================================= */
  { id: 'u1-s4', titulo: '4. Producto vectorial: áreas y vectores normales',
    intro: 'El producto vectorial sólo está definido en R³ y devuelve un vector perpendicular a los dos dados. Es la herramienta para «hallar un vector ortogonal a ambos» y para calcular áreas.',
    conceptos: [

    { id: 'u1-producto-vectorial', tipo: 'def', titulo: 'Producto vectorial (o cruz)',
      cuerpo: tex`<p>Dados $\vec u = (u_1, u_2, u_3)$ y $\vec v = (v_1, v_2, v_3)$ en $\mathbb{R}^3$:</p>
      <div class="fx center">$$\vec u \times \vec v = \begin{vmatrix} \breve i & \breve j & \breve k \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix}
      = \bigl(u_2 v_3 - u_3 v_2,\;\; u_3 v_1 - u_1 v_3,\;\; u_1 v_2 - u_2 v_1\bigr)$$</div>
      <p>El resultado es un <strong>vector</strong>, perpendicular simultáneamente a $\vec u$ y a $\vec v$, con sentido dado por la regla de la mano derecha.</p>
      <div class="note"><b class="lbl">En $\mathbb{R}^2$</b> El producto vectorial está definido en $\mathbb{R}^3$. Para aplicarlo a vectores del plano se les agrega una tercera componente nula: $(a,b) \to (a,b,0)$.</div>` },

    { id: 'u1-prop-vectorial', tipo: 'prop', titulo: 'Propiedades del producto vectorial',
      cuerpo: tex`<ol>
        <li>$\vec u \times \vec v = -\,(\vec v \times \vec u)$ — <strong>anticonmutativa</strong>.</li>
        <li>$\vec u \times (\vec v + \vec w) = \vec u \times \vec v + \vec u \times \vec w$ (distributiva).</li>
        <li>$(\alpha \vec u) \times \vec v = \alpha (\vec u \times \vec v)$.</li>
        <li>$\vec u \times \vec u = \vec 0$.</li>
        <li>$\vec u \times \vec 0 = \vec 0$.</li>
        <li>$(\vec u \times \vec v) \cdot \vec u = 0$ y $(\vec u \times \vec v) \cdot \vec v = 0$: el resultado es perpendicular a ambos.</li>
        <li><strong>$\vec u \times \vec v = \vec 0$ (con $\vec u, \vec v$ no nulos) $\iff$ $\vec u \parallel \vec v$.</strong></li>
        <li><strong>No</strong> hay asociatividad: $(\vec u \times \vec v) \times \vec w \neq \vec u \times (\vec v \times \vec w)$ en general.</li>
        <li>$\breve i \times \breve j = \breve k$, $\;\breve j \times \breve k = \breve i$, $\;\breve k \times \breve i = \breve j$.</li>
      </ol>
      <div class="note tip"><b class="lbl">Las dos lecturas que resuelven ejercicios</b>
      La propiedad 6 es la que usás cuando piden «un vector ortogonal a $\vec u$ y a $\vec v$ simultáneamente»: la respuesta es $\vec u \times \vec v$.
      La propiedad 7 es un test de paralelismo alternativo al [[u1-teorema-1|Teorema 1]].</div>` },

    { id: 'u1-teorema-4', tipo: 'teo', titulo: 'Teorema 4 — Módulo del producto vectorial',
      cuerpo: tex`<p>Si $\theta$ es el ángulo entre $\vec u$ y $\vec v$, entonces</p>
      <div class="fx center">$$\|\vec u \times \vec v\| = \|\vec u\|\,\|\vec v\|\,\operatorname{sen}\theta$$</div>
      <p>Comparar con el [[u1-teorema-2|Teorema 2]]: el escalar lleva coseno, el vectorial lleva seno. De aquí sale también que $\vec u \times \vec v = \vec 0$ cuando $\theta = 0$ o $\theta = \pi$, es decir cuando son paralelos.</p>` },

    { id: 'u1-teorema-5', tipo: 'teo', titulo: 'Teorema 5 y Corolario 6 — Áreas',
      cuerpo: tex`<p><strong>Teorema 5.</strong> El área del <strong>paralelogramo</strong> de lados adyacentes $\vec u$ y $\vec v$ es</p>
      <div class="fx center">$$A_{\square} = \|\vec u \times \vec v\|$$</div>
      <p><strong>Corolario 6.</strong> El área del <strong>triángulo</strong> de lados adyacentes $\vec u$ y $\vec v$ es la mitad:</p>
      <div class="fx center">$$A_{\triangle} = \tfrac{1}{2}\,\|\vec u \times \vec v\|$$</div>
      <p>Las dos salen del [[u1-teorema-4]]: el área de un paralelogramo es base por altura, y tomando $\|\vec u\|$ como base, la altura es $\|\vec v\|\operatorname{sen}\theta$ — justo lo que mide $\|\vec u \times \vec v\|$.</p>
      <div class="note tip"><b class="lbl">Si te dan vértices y no vectores</b> Con $A$, $B$, $C$ se arman dos lados adyacentes como $\vec u = \overrightarrow{AB} = B - A$ y $\vec v = \overrightarrow{AC} = C - A$, usando [[u1-componentes-pq]], y se aplica la fórmula.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u1-s5', titulo: '5. Producto mixto: volúmenes y coplanaridad',
    conceptos: [

    { id: 'u1-producto-mixto', tipo: 'def', titulo: 'Producto mixto (triple producto escalar)',
      cuerpo: tex`<p>Dados tres vectores de $\mathbb{R}^3$, el <strong>producto mixto</strong> es el escalar</p>
      <div class="fx center">$$[\vec u, \vec v, \vec w] = \vec u \cdot (\vec v \times \vec w)
      = \begin{vmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{vmatrix}$$</div>
      <p>Se calcula como un determinante $3\times 3$ con los tres vectores por filas.</p>` },

    { id: 'u1-volumen', tipo: 'form', titulo: 'Volumen del paralelepípedo',
      cuerpo: tex`<p>El volumen del paralelepípedo de aristas $\vec u$, $\vec v$ y $\vec w$ es el <strong>valor absoluto</strong> del producto mixto:</p>
      <div class="fx center">$$V = \bigl|\, \vec w \cdot (\vec u \times \vec v) \,\bigr|$$</div>
      <p>Y el volumen del tetraedro que determinan es $V_{\text{tetra}} = \tfrac{1}{6}\,\bigl| \vec w \cdot (\vec u \times \vec v) \bigr|$.</p>
      <div class="note tip"><b class="lbl">Volumen = área de la base × altura</b>
      Si $\vec u$ y $\vec v$ forman la base, entonces $A_{\text{base}} = \|\vec u \times \vec v\|$ (por el [[u1-teorema-5|Teorema 5]]) y la <strong>altura</strong> es la proyección de la tercera arista $\vec w$ sobre la normal a la base:
      $$h = \frac{\bigl| \vec w \cdot (\vec u \times \vec v) \bigr|}{\|\vec u \times \vec v\|} = \frac{V}{A_{\text{base}}}$$
      El <strong>vector altura</strong> es $\operatorname{proy}_{\vec u \times \vec v} \vec w$, por [[u1-proyeccion-ortogonal]]. Esta cadena es exactamente la que piden los ejercicios de paralelepípedo.</div>` },

    { id: 'u1-coplanaridad', tipo: 'teo', titulo: 'Criterio de coplanaridad',
      cuerpo: tex`<p>Tres vectores no nulos $\vec u$, $\vec v$, $\vec w$ de $\mathbb{R}^3$ son <strong>coplanares</strong> (están en un mismo plano) si y sólo si su producto mixto es nulo:</p>
      <div class="fx center">$$\vec u \cdot (\vec v \times \vec w) = 0 \iff \vec u, \vec v, \vec w \text{ coplanares}$$</div>
      <p>Interpretación: el paralelepípedo que determinan tiene volumen cero, o sea que es «chato».</p>
      <div class="note tip"><b class="lbl">Dos lecturas más</b>
      En el lenguaje de la unidad 4, coplanares equivale a [[u4-li-ld|linealmente dependientes]]; y tres vectores de $\mathbb{R}^3$ con producto mixto no nulo forman una [[u4-base|base]] de $\mathbb{R}^3$. Es el mismo hecho dicho de tres maneras, y los parciales lo aprovechan.</div>` }
  ]}

]});
