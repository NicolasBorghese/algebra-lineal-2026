/* Unidad 3 — Rectas y planos en el espacio
   Fuentes: "eal sc 26 r3 ar.pdf" (diapositivas 2026)
            "Unidad 3 - Rectas y planos en el espacio.pdf" (apunte de teoría) */

EAL.unidad({
  id: 'u3', num: 3,
  titulo: 'Rectas y planos en el espacio',
  resumen: 'El plano y la recta en R³, sus formas de escritura, las posiciones relativas entre ellos (incluidas las rectas alabeadas), ángulos, distancias y proyecciones.',
  secciones: [

  /* ========================================================= */
  { id: 'u3-s1', titulo: '1. El plano',
    intro: 'En R³ una única ecuación lineal ya no describe una recta sino un plano. El objeto clave es el vector normal.',
    conceptos: [

    { id: 'u3-axioma-1', tipo: 'teo', titulo: 'Axioma 1 — Determinación del plano',
      cuerpo: tex`<p>Por <strong>tres puntos no alineados</strong> pasa un único plano.</p>
      <p>Equivalentemente, un plano queda determinado por un punto y dos vectores no paralelos contenidos en él, o por un punto y un vector normal.</p>` },

    { id: 'u3-plano-vectorial', tipo: 'def', titulo: 'Ecuación vectorial y paramétrica del plano',
      cuerpo: tex`<p>Sea $\pi$ el plano que pasa por $P_0 = (x_0,y_0,z_0)$ y es paralelo a los vectores no paralelos $\vec u$ y $\vec v$. Entonces</p>
      <div class="fx center">$$\pi: \;(x,y,z) = (x_0,y_0,z_0) + \lambda\,\vec u + \mu\,\vec v, \qquad \lambda, \mu \in \mathbb{R}$$</div>
      <p>Por componentes, las <strong>ecuaciones paramétricas</strong>:</p>
      <div class="fx center">$$\begin{cases} x = x_0 + \lambda u_1 + \mu v_1 \\ y = y_0 + \lambda u_2 + \mu v_2 \\ z = z_0 + \lambda u_3 + \mu v_3 \end{cases}$$</div>
      <p>Hacen falta <strong>dos</strong> parámetros, porque el plano es un objeto de dimensión 2.</p>` },

    { id: 'u3-plano-implicita', tipo: 'def', titulo: 'Ecuación implícita del plano y vector normal',
      cuerpo: tex`<p>Todo plano está representado por una ecuación lineal en $x$, $y$, $z$:</p>
      <div class="fx center">$$\pi: \; a\,x + b\,y + c\,z + d = 0$$</div>
      <p>y el vector</p>
      <div class="fx center">$$\vec n = (a, b, c)$$</div>
      <p>es <strong>normal</strong> (perpendicular) al plano: es ortogonal a todo vector contenido en $\pi$.</p>
      <div class="note tip"><b class="lbl">La idea central de la unidad</b>
      Un plano «es» su normal más un punto. De los coeficientes de la ecuación se lee el normal, y recíprocamente: si se conoce $\vec n = (a,b,c)$ y un punto $P_0$ del plano, la ecuación sale de pedir que $\overrightarrow{P_0P} \perp \vec n$:
      $$\vec n \cdot (P - P_0) = 0 \;\Longrightarrow\; a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$$
      Casi todos los ejercicios de la unidad se reducen a <strong>conseguir un normal y un punto</strong>.</div>` },

    { id: 'u3-normal-desde-directores', tipo: 'met', titulo: 'Método — conseguir el normal del plano',
      cuerpo: tex`<p>Según el dato que aparezca en el enunciado:</p>
      <div class="tbl"><table>
        <thead><tr><th>Dato</th><th>Normal</th></tr></thead>
        <tbody>
          <tr><td>dos vectores $\vec u, \vec v$ paralelos al plano</td><td>$\vec n = \vec u \times \vec v$ ([[u1-producto-vectorial]])</td></tr>
          <tr><td>tres puntos $A, B, C$ no alineados</td><td>$\vec n = \overrightarrow{AB} \times \overrightarrow{AC}$</td></tr>
          <tr><td>plano paralelo a $\pi': a'x+b'y+c'z+d'=0$</td><td>$\vec n = (a',b',c')$, el mismo</td></tr>
          <tr><td>plano perpendicular a una recta de director $\vec u$</td><td>$\vec n = \vec u$</td></tr>
          <tr><td>plano que contiene a una recta de director $\vec u$ y a un punto $Q$ externo</td><td>$\vec n = \vec u \times \overrightarrow{P_0 Q}$, con $P_0 \in L$</td></tr>
          <tr><td>plano que contiene dos rectas coplanares de directores $\vec u_1, \vec u_2$</td><td>$\vec n = \vec u_1 \times \vec u_2$ (si no son paralelas)</td></tr>
          <tr><td>plano perpendicular a dos planos de normales $\vec n_1, \vec n_2$</td><td>$\vec n = \vec n_1 \times \vec n_2$</td></tr>
        </tbody>
      </table></div>
      <p>Después, con cualquier punto conocido del plano, se despeja $d$ reemplazando en $ax+by+cz+d=0$.</p>` },

    { id: 'u3-plano-segmentaria', tipo: 'form', titulo: 'Ecuación segmentaria del plano',
      cuerpo: tex`<p>Si el plano corta a los tres ejes coordenados en $x = p$, $y = q$, $z = r$ (todos no nulos):</p>
      <div class="fx center">$$\pi: \;\frac{x}{p} + \frac{y}{q} + \frac{z}{r} = 1$$</div>
      <p>Los números $p$, $q$, $r$ son las coordenadas de los puntos de corte con los ejes: $(p,0,0)$, $(0,q,0)$, $(0,0,r)$.</p>
      <div class="note tip"><b class="lbl">Uso directo</b> «Hallar el plano que corta a los ejes en $x=3$, $y=1$, $z=-2$» sale de una: $\dfrac{x}{3} + \dfrac{y}{1} + \dfrac{z}{-2} = 1$, y multiplicando por $6$ queda $2x + 6y - 3z - 6 = 0$.</div>` },

    { id: 'u3-trazas', tipo: 'met', titulo: 'Método — intersección del plano con ejes y planos coordenados',
      cuerpo: tex`<p>Se anulan variables:</p>
      <ul>
        <li><strong>Con el eje $X$:</strong> se pone $y = 0$ y $z = 0$ y se despeja $x$. Análogo para los otros ejes.</li>
        <li><strong>Con el plano coordenado $XY$</strong> (que es $z=0$): se reemplaza $z = 0$ y queda una recta en las variables $x,y$. Esa recta es la <strong>traza</strong> del plano sobre $XY$. Análogo con $XZ$ ($y=0$) y $YZ$ ($x=0$).</li>
      </ul>
      <div class="note"><b class="lbl">Planos con coeficientes nulos</b>
      Cuando falta una variable, el plano es <strong>paralelo al eje de esa variable</strong>:
      <ul>
        <li>$x + y - 4 = 0$: no aparece $z$ ⇒ paralelo al eje $Z$. Es un plano «vertical».</li>
        <li>$x - y = 0$: no aparece $z$ y además $d=0$ ⇒ paralelo al eje $Z$ y contiene al origen, o sea <strong>contiene</strong> al eje $Z$.</li>
        <li>$x + z - 2 = 0$: no aparece $y$ ⇒ paralelo al eje $Y$.</li>
      </ul>
      Esto es lo que hay que detectar en los ejercicios de «analizar la intersección con los ejes y los planos coordenados».</div>` }
  ]},

  /* ========================================================= */
  { id: 'u3-s2', titulo: '2. La recta en el espacio',
    conceptos: [

    { id: 'u3-recta-vectorial', tipo: 'def', titulo: 'Ecuación vectorial, paramétrica y cartesiana',
      cuerpo: tex`<p>Recta por $P_0 = (x_0,y_0,z_0)$ con director $\vec u = (u_1,u_2,u_3) \neq \vec 0$:</p>
      <div class="fx center">$$L: \;(x,y,z) = (x_0,y_0,z_0) + \lambda\,(u_1,u_2,u_3), \qquad \lambda \in \mathbb{R}$$</div>
      <p><strong>Paramétricas:</strong> $\;x = x_0 + \lambda u_1$, $\;y = y_0 + \lambda u_2$, $\;z = z_0 + \lambda u_3$.</p>
      <p><strong>Cartesiana</strong> (simétrica), si las tres componentes del director son no nulas:</p>
      <div class="fx center">$$L: \;\frac{x - x_0}{u_1} = \frac{y - y_0}{u_2} = \frac{z - z_0}{u_3}$$</div>
      <p>Igual que en el plano, la recta necesita <strong>un</strong> parámetro: es un objeto de dimensión 1.</p>` },

    { id: 'u3-recta-interseccion', tipo: 'def', titulo: 'La recta como intersección de dos planos',
      cuerpo: tex`<p>Recíprocamente, todo sistema del tipo</p>
      <div class="fx center">$$L: \begin{cases} a_1 x + b_1 y + c_1 z + d_1 = 0 \\ a_2 x + b_2 y + c_2 z + d_2 = 0 \end{cases}$$</div>
      <p>con los normales $\vec n_1$ y $\vec n_2$ <strong>no paralelos</strong>, representa una recta en $\mathbb{R}^3$: la intersección de los dos planos.</p>
      <div class="note tip"><b class="lbl">La doble lectura que hay que dominar</b>
      <p><strong>De intersección a paramétrica:</strong> se resuelve el sistema (queda una variable libre, que se toma como parámetro). El director también se puede obtener directo como $\vec u = \vec n_1 \times \vec n_2$, porque la recta está en ambos planos y por lo tanto es perpendicular a los dos normales.</p>
      <p><strong>De cartesiana a intersección de planos:</strong> la cadena de igualdades $\dfrac{x-x_0}{u_1} = \dfrac{y-y_0}{u_2} = \dfrac{z-z_0}{u_3}$ se parte en dos igualdades independientes, por ejemplo la 1.ª con la 2.ª y la 2.ª con la 3.ª, y cada una da un plano.</p></div>` },

    { id: 'u3-alineados', tipo: 'met', titulo: 'Método — ¿tres o más puntos alineados?',
      cuerpo: tex`<p>Dados $A$, $B$, $C$: se arman $\overrightarrow{AB}$ y $\overrightarrow{AC}$.</p>
      <ul>
        <li>Si $\overrightarrow{AB} \parallel \overrightarrow{AC}$ (es decir $\overrightarrow{AB} \times \overrightarrow{AC} = \vec 0$, por [[u1-prop-vectorial]]), los puntos <strong>están alineados</strong> y hay una recta que los contiene: punto $A$, director $\overrightarrow{AB}$.</li>
        <li>Si no son paralelos, los puntos <strong>no están alineados</strong> y determinan un plano único ([[u3-axioma-1]]), con normal $\overrightarrow{AB} \times \overrightarrow{AC}$.</li>
      </ul>
      <p>Con cuatro puntos o más: se determina el plano con tres de ellos y se verifica si el cuarto lo satisface. Si no, los cuatro no son coplanares y no hay un único plano que los contenga.</p>` },

    { id: 'u3-pertenencia', tipo: 'met', titulo: 'Método — ¿una recta está contenida en un plano?',
      cuerpo: tex`<p>Hay que verificar <strong>dos</strong> cosas:</p>
      <ol class="pasos">
        <li><span class="ptit">Que sean paralelos:</span> $\vec u \cdot \vec n = 0$, donde $\vec u$ es el director de la recta y $\vec n$ el normal del plano.</li>
        <li><span class="ptit">Que compartan un punto:</span> un punto $P_0$ de la recta satisface la ecuación del plano.</li>
      </ol>
      <p>Las dos juntas ⇒ $L \subset \pi$. Sólo la primera ⇒ $L \parallel \pi$ y no se cortan. Si falla la primera ⇒ se cortan en un punto.</p>
      <div class="note tip"><b class="lbl">Alternativa de una sola cuenta</b> Se sustituyen las paramétricas de $L$ en la ecuación de $\pi$. Si queda una identidad ($0 = 0$), la recta está contenida; si queda una contradicción, es paralela y disjunta; si se despeja un $\lambda$ único, se cortan en ese punto.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u3-s3', titulo: '3. Posiciones relativas',
    conceptos: [

    { id: 'u3-teorema-2-3', tipo: 'teo', titulo: 'Teoremas 2 y 3 — Paralelismo y perpendicularidad entre rectas',
      cuerpo: tex`<p>Sean $L_1$ y $L_2$ rectas de $\mathbb{R}^3$ con directores $\vec u_1$ y $\vec u_2$.</p>
      <ul>
        <li>$L_1 \parallel L_2 \iff \vec u_1 \parallel \vec u_2 \iff \vec u_1 \times \vec u_2 = \vec 0$.</li>
        <li>$L_1 \perp L_2 \iff \vec u_1 \cdot \vec u_2 = 0$.</li>
      </ul>
      <div class="note warn"><b class="lbl">Ojo</b> En $\mathbb{R}^3$, «perpendiculares» no implica que se corten: dos rectas alabeadas pueden tener directores ortogonales. Si el enunciado pide una perpendicular <em>que corte</em> a la otra, hay que imponer además la incidencia.</div>` },

    { id: 'u3-alabeadas', tipo: 'def', titulo: 'Rectas coplanares y alabeadas',
      cuerpo: tex`<p>Dos rectas de $\mathbb{R}^3$ contenidas en un mismo plano se dicen <strong>coplanares</strong>; en caso contrario, <strong>alabeadas</strong>.</p>
      <p>Dos rectas son <strong>alabeadas</strong> si no son paralelas, ni coincidentes, ni incidentes. Equivalentemente: $L_1$ y $L_2$ son alabeadas si no existe un plano que contenga a ambas.</p>
      <div class="note"><b class="lbl">Las cuatro posiciones posibles</b>
      <ul>
        <li><strong>Coincidentes:</strong> misma recta. Directores paralelos y comparten puntos.</li>
        <li><strong>Paralelas distintas:</strong> directores paralelos, sin puntos comunes.</li>
        <li><strong>Incidentes:</strong> directores no paralelos, se cortan en un punto. Son coplanares.</li>
        <li><strong>Alabeadas:</strong> directores no paralelos, no se cortan. No son coplanares.</li>
      </ul></div>` },

    { id: 'u3-teorema-7', tipo: 'teo', titulo: 'Teorema 7 — Criterio para clasificar dos rectas',
      cuerpo: tex`<p>Sean $L_1$ y $L_2$ rectas de $\mathbb{R}^3$ de directores $\vec u_1$ y $\vec u_2$, con $P_1 \in L_1$ y $P_2 \in L_2$. Se mira primero el producto vectorial de los directores y después el producto mixto:</p>
      <div class="tbl"><table>
        <thead><tr><th>$\vec u_1 \times \vec u_2$</th><th>$\overrightarrow{P_1P_2} \cdot (\vec u_1 \times \vec u_2)$</th><th>Posición</th></tr></thead>
        <tbody>
          <tr><td>$= \vec 0$</td><td>—</td><td>paralelas o coincidentes (se decide viendo si $P_2 \in L_1$)</td></tr>
          <tr><td>$\neq \vec 0$</td><td>$= 0$</td><td><strong>incidentes</strong> (coplanares, se cortan en un punto)</td></tr>
          <tr><td>$\neq \vec 0$</td><td>$\neq 0$</td><td><strong>alabeadas</strong></td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">Por qué funciona</b> El producto mixto $\overrightarrow{P_1P_2} \cdot (\vec u_1 \times \vec u_2)$ es cero exactamente cuando los tres vectores son [[u1-coplanaridad|coplanares]], y eso es lo que significa que las dos rectas vivan en un mismo plano. Es el mismo criterio de la unidad 1 aplicado acá.</div>
      <div class="note"><b class="lbl">Método completo</b> Este test es el primer paso obligado de todos los ítems «analizar la posición relativa». Una vez clasificadas: si son incidentes se iguala las paramétricas (con <strong>parámetros de nombres distintos</strong>) y se resuelve el sistema para hallar el punto; si son alabeadas se calcula la distancia con [[u3-dist-rectas-alabeadas]].</div>` },

    { id: 'u3-planos-posicion', tipo: 'met', titulo: 'Método — posición relativa de dos o tres planos',
      cuerpo: tex`<p>Para dos planos $\pi_1$, $\pi_2$ de normales $\vec n_1$, $\vec n_2$:</p>
      <ul>
        <li>$\vec n_1 \times \vec n_2 \neq \vec 0$ ⇒ se cortan en una <strong>recta</strong>; su director es $\vec n_1 \times \vec n_2$.</li>
        <li>$\vec n_1 \parallel \vec n_2$ y las ecuaciones son proporcionales <strong>en los cuatro coeficientes</strong> ⇒ <strong>coincidentes</strong>.</li>
        <li>$\vec n_1 \parallel \vec n_2$ pero el término independiente rompe la proporción ⇒ <strong>paralelos distintos</strong>, intersección vacía.</li>
      </ul>
      <p>Con tres o más planos se resuelve el sistema y se interpreta:</p>
      <div class="tbl"><table>
        <thead><tr><th>El sistema es</th><th>La intersección es</th></tr></thead>
        <tbody>
          <tr><td>compatible determinado</td><td>un punto</td></tr>
          <tr><td>compatible indeterminado con 1 grado de libertad</td><td>una recta</td></tr>
          <tr><td>compatible indeterminado con 2 grados de libertad</td><td>un plano (eran todos el mismo)</td></tr>
          <tr><td>incompatible</td><td>$\varnothing$</td></tr>
        </tbody>
      </table></div>` },

    { id: 'u3-teorema-4', tipo: 'teo', titulo: 'Teorema 4 — Paralelismo y perpendicularidad entre planos',
      cuerpo: tex`<p>Sean $\pi_1$, $\pi_2$ de normales $\vec n_1$, $\vec n_2$.</p>
      <ul>
        <li>$\pi_1 \parallel \pi_2 \iff \vec n_1 \parallel \vec n_2$.</li>
        <li>$\pi_1 \perp \pi_2 \iff \vec n_1 \cdot \vec n_2 = 0$.</li>
      </ul>
      <div class="note tip"><b class="lbl">Uso típico</b> «Hallar $k$ para que $\pi_1 \perp \pi_2$» se resuelve planteando $\vec n_1 \cdot \vec n_2 = 0$ y despejando $k$: una ecuación lineal en $k$.</div>` },

    { id: 'u3-teorema-5-6', tipo: 'teo', titulo: 'Teoremas 5 y 6 — Recta y plano',
      cuerpo: tex`<p>Sea $L$ de director $\vec u$ y $\pi$ de normal $\vec n$. Notar que las condiciones <strong>se invierten</strong> respecto de recta-recta y plano-plano:</p>
      <ul>
        <li>$L \parallel \pi \iff \vec u \cdot \vec n = 0$ (el director es perpendicular al normal). Incluye el caso $L \subset \pi$.</li>
        <li>$L \perp \pi \iff \vec u \parallel \vec n$, es decir $\vec u \times \vec n = \vec 0$.</li>
      </ul>
      <div class="note warn"><b class="lbl">Es la confusión número uno de la unidad</b>
      Entre dos objetos <em>del mismo tipo</em> (recta-recta, plano-plano) el paralelismo se chequea con producto vectorial nulo y la perpendicularidad con producto escalar nulo. Entre recta y plano es al revés, porque el plano se representa por su normal y no por su dirección.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u3-s4', titulo: '4. Ángulos',
    conceptos: [

    { id: 'u3-angulo-planos', tipo: 'form', titulo: 'Ángulo entre dos planos',
      cuerpo: tex`<p>El ángulo entre dos planos es el que forman sus vectores normales:</p>
      <div class="fx center">$$\cos\theta = \frac{\bigl|\vec n_1 \cdot \vec n_2\bigr|}{\|\vec n_1\|\,\|\vec n_2\|}, \qquad 0 \le \theta \le \frac{\pi}{2}$$</div>
      <p>El valor absoluto asegura que se tome el ángulo <strong>agudo</strong> (dos planos que se cortan forman dos pares de ángulos suplementarios).</p>` },

    { id: 'u3-angulo-rectas', tipo: 'form', titulo: 'Ángulo entre dos rectas',
      cuerpo: tex`<div class="fx center">$$\cos\theta = \frac{\bigl|\vec u_1 \cdot \vec u_2\bigr|}{\|\vec u_1\|\,\|\vec u_2\|}, \qquad 0 \le \theta \le \frac{\pi}{2}$$</div>
      <p>Igual que en el plano ([[u2-angulo-rectas]]). Se puede calcular incluso si las rectas son alabeadas: es el ángulo entre sus direcciones.</p>` },

    { id: 'u3-angulo-recta-plano', tipo: 'form', titulo: 'Ángulo entre recta y plano',
      cuerpo: tex`<p>Se define como el ángulo <strong>agudo</strong> $\theta$ que forman la recta $L$ y su proyección ortogonal $L'$ sobre el plano $\pi$. Si $\beta$ es el ángulo entre el director $\vec u$ y el normal $\vec n$, entonces $\theta = \tfrac{\pi}{2} - \beta$, y como $\cos(\tfrac{\pi}{2} - \beta) = \operatorname{sen}\beta$ resulta</p>
      <div class="fx center">$$\operatorname{sen}\theta = \frac{\bigl|\vec u \cdot \vec n\bigr|}{\|\vec u\|\,\|\vec n\|}, \qquad 0 \le \theta \le \frac{\pi}{2}$$</div>
      <div class="note warn"><b class="lbl">Acá va seno, no coseno</b>
      Es la fórmula que los finales piden <em>explicar</em>, no sólo aplicar. La razón: lo que uno calcula con el producto escalar es el ángulo con el <strong>normal</strong>, y el ángulo con el <strong>plano</strong> es su complemento. Al pasar de coseno del complemento a seno del ángulo buscado, la expresión queda con seno.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u3-s5', titulo: '5. Distancias',
    intro: 'Todas las distancias de la unidad se reducen a una proyección. Vale la pena ver el patrón en lugar de memorizar cinco fórmulas sueltas.',
    conceptos: [

    { id: 'u3-dist-punto-plano', tipo: 'form', titulo: 'Distancia de un punto a un plano',
      cuerpo: tex`<p>Sea $\pi: ax+by+cz+d=0$ y $P_0 = (x_0,y_0,z_0)$:</p>
      <div class="fx center">$$d(P_0, \pi) = \frac{\bigl|\overrightarrow{P_1P_0} \cdot \vec n\bigr|}{\|\vec n\|}
      = \frac{\bigl|\,a x_0 + b y_0 + c z_0 + d\,\bigr|}{\sqrt{a^2+b^2+c^2}}$$</div>
      <p>Es la versión en $\mathbb{R}^3$ de [[u2-distancia-punto-recta]]: se reemplazan las coordenadas del punto en el miembro izquierdo y se divide por el módulo del normal.</p>` },

    { id: 'u3-dist-punto-recta', tipo: 'form', titulo: 'Distancia de un punto a una recta',
      cuerpo: tex`<p>Sea $L$ de director $\vec u$ con $P_1 \in L$, y $P_0$ un punto exterior:</p>
      <div class="fx center">$$d(P_0, L) = \frac{\bigl\| \overrightarrow{P_1P_0} \times \vec u \bigr\|}{\|\vec u\|}$$</div>
      <div class="note tip"><b class="lbl">De dónde sale</b>
      $\|\overrightarrow{P_1P_0} \times \vec u\|$ es el área del paralelogramo de lados $\overrightarrow{P_1P_0}$ y $\vec u$ ([[u1-teorema-5]]). Como área $=$ base $\times$ altura y la base es $\|\vec u\|$, la altura —que es justamente la distancia del punto a la recta— se obtiene dividiendo.</div>
      <div class="note"><b class="lbl">Camino alternativo (el que piden cuando además quieren el pie de la perpendicular)</b>
      Se escribe el punto genérico $P(\lambda)$ de $L$, se impone $\overrightarrow{P_0 P(\lambda)} \cdot \vec u = 0$, se despeja $\lambda$ y se obtiene el pie $P^*$. Entonces $d = \|\overrightarrow{P_0 P^*}\|$. Da más trabajo pero devuelve también el punto más próximo.</div>` },

    { id: 'u3-dist-rectas-alabeadas', tipo: 'form', titulo: 'Distancia entre dos rectas alabeadas',
      cuerpo: tex`<p>Si $L_1$ y $L_2$ son alabeadas, la distancia entre ambas es la longitud de un segmento perpendicular a las dos simultáneamente. Un vector con esa dirección es $\vec n = \vec u_1 \times \vec u_2$, porque es perpendicular a $\vec u_1$ y a $\vec u_2$. Tomando $P_1 \in L_1$ y $P_2 \in L_2$:</p>
      <div class="fx center">$$d(L_1, L_2) = \frac{\bigl| \overrightarrow{P_1P_2} \cdot (\vec u_1 \times \vec u_2) \bigr|}{\bigl\| \vec u_1 \times \vec u_2 \bigr\|}$$</div>
      <div class="note tip"><b class="lbl">La fórmula clasifica y mide a la vez</b>
      <ol>
        <li>Si $\vec u_1 \times \vec u_2 = \vec 0$ ⇒ las rectas son <strong>paralelas</strong> (la fórmula no se aplica: se usa distancia de un punto de una a la otra recta).</li>
        <li>Si $\overrightarrow{P_1P_2} \cdot (\vec u_1 \times \vec u_2) = 0$ ⇒ las rectas son <strong>incidentes</strong> y $d = 0$.</li>
        <li>Si $d \neq 0$ ⇒ las rectas son <strong>alabeadas</strong>.</li>
      </ol>
      Es el [[u3-teorema-7|Teorema 7]] escrito como una sola cuenta.</div>` },

    { id: 'u3-dist-resto', tipo: 'form', titulo: 'Los demás casos de distancia',
      cuerpo: tex`<p>Cuando los objetos se cortan, la distancia es $0$. Cuando son paralelos, se elige un punto de uno y se mide a la otra figura:</p>
      <div class="tbl"><table>
        <thead><tr><th>Caso</th><th>Distancia</th></tr></thead>
        <tbody>
          <tr><td>recta y plano, si $L \cap \pi \neq \varnothing$</td><td>$0$</td></tr>
          <tr><td>recta y plano paralelos</td><td>$d(P_0, \pi)$ con $P_0 \in L$ cualquiera</td></tr>
          <tr><td>dos planos que se cortan</td><td>$0$</td></tr>
          <tr><td>dos planos paralelos</td><td>$d(P, \pi_2)$ con $P \in \pi_1$ cualquiera</td></tr>
          <tr><td>dos rectas incidentes o coincidentes</td><td>$0$</td></tr>
          <tr><td>dos rectas paralelas</td><td>$d(P_1, L_2)$ con $P_1 \in L_1$ cualquiera</td></tr>
          <tr><td>dos rectas alabeadas</td><td>[[u3-dist-rectas-alabeadas|fórmula del producto mixto]]</td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">Planos paralelos a distancia dada</b>
      Para «hallar los planos paralelos a $\pi$ que distan $k$ de $P$»: el plano buscado tiene el mismo normal, o sea $ax+by+cz+d'=0$ con $d'$ incógnita. Se plantea $d(P, \pi') = k$ con [[u3-dist-punto-plano]] y se despeja $d'$. El valor absoluto da <strong>dos</strong> soluciones, una a cada lado del punto.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u3-s6', titulo: '6. Proyecciones sobre un plano',
    conceptos: [

    { id: 'u3-proy-punto-plano', tipo: 'met', titulo: 'Método — proyección de un punto sobre un plano',
      cuerpo: tex`<p><strong>Proyección ortogonal</strong> de $P$ sobre $\pi$ (normal $\vec n$):</p>
      <ol class="pasos">
        <li><span class="ptit">Armar la recta auxiliar</span> que pasa por $P$ y es perpendicular a $\pi$: director $= \vec n$, o sea $L: (x,y,z) = P + \lambda \vec n$.</li>
        <li><span class="ptit">Intersecar</span> $L$ con $\pi$: se sustituyen las paramétricas en la ecuación del plano y se despeja $\lambda$.</li>
        <li><span class="ptit">Evaluar</span> ese $\lambda$ en las paramétricas. El punto obtenido es $P'$, la proyección.</li>
      </ol>
      <p><strong>Proyección según una dirección $\vec v$</strong> (no ortogonal): idéntico, pero la recta auxiliar se arma con director $\vec v$ en lugar de $\vec n$.</p>
      <div class="note"><b class="lbl">Caso degenerado</b> Si $\vec v \cdot \vec n = 0$, la recta auxiliar es paralela al plano y la proyección según esa dirección no existe (o es todo el plano, si el punto ya pertenece a $\pi$). Conviene verificarlo antes.</div>` },

    { id: 'u3-proy-recta-plano', tipo: 'met', titulo: 'Método — proyección de una recta sobre un plano',
      cuerpo: tex`<p>La proyección de una recta es otra recta (salvo que la recta sea perpendicular al plano, en cuyo caso es un punto). Hay dos caminos:</p>
      <p><strong>Camino 1 — dos puntos.</strong> Se eligen dos puntos cualesquiera de $L$, se proyecta cada uno con [[u3-proy-punto-plano]] y se arma la recta que pasa por las dos proyecciones. Es el más simple de explicar.</p>
      <p><strong>Camino 2 — plano proyectante.</strong> Se construye el plano $\sigma$ que contiene a $L$ y es perpendicular a $\pi$ (su normal es $\vec n_\sigma = \vec u_L \times \vec n_\pi$, por [[u3-normal-desde-directores]]). La proyección es $L' = \sigma \cap \pi$, que se obtiene resolviendo el sistema de los dos planos ([[u3-recta-interseccion]]).</p>
      <div class="note tip"><b class="lbl">Proyección según una dirección</b> Mismo esquema: el plano proyectante se arma con $\vec n_\sigma = \vec u_L \times \vec v$, donde $\vec v$ es la dirección de proyección.</div>
      <div class="note"><b class="lbl">Casos particulares que aparecen en el TP</b>
      Si $L \subset \pi$, la proyección es $L$ misma. Si $L \perp \pi$, la proyección es el punto $L \cap \pi$.</div>` }
  ]}

]});
