/* Unidad 6 — Transformaciones lineales
   Fuentes: "eal sc 25 transformaciones lineales ar.pdf" (diapositivas)
            "Unidad 5 - Transformaciones Lineales.pdf" (apunte de teoría) */

EAL.unidad({
  id: 'u6', num: 6,
  titulo: 'Transformaciones lineales',
  resumen: 'Funciones entre espacios vectoriales que respetan la estructura. Núcleo e imagen, el teorema de la dimensión, inyectividad y sobreyectividad, y la matriz asociada respecto de un par de bases.',
  secciones: [

  /* ========================================================= */
  { id: 'u6-s1', titulo: '1. Definición y propiedades',
    conceptos: [

    { id: 'u6-transformacion-lineal', tipo: 'def', titulo: 'Transformación lineal',
      cuerpo: tex`<p>Sean $V$ y $W$ dos $\mathbb{R}$-espacios vectoriales. Una aplicación $T: V \to W$ se dice <strong>transformación lineal</strong> si para todos $u, v \in V$ y todo $\alpha \in \mathbb{R}$:</p>
      <div class="fx center">$$\textbf{(1)}\;\; T(u + v) = T(u) + T(v) \qquad\qquad \textbf{(2)}\;\; T(\alpha\, u) = \alpha\, T(u)$$</div>
      <p>La condición (1) es la <strong>aditividad</strong>; la (2), la <strong>homogeneidad</strong>. Las dos juntas equivalen a la única condición $T(\alpha u + \beta v) = \alpha T(u) + \beta T(v)$.</p>
      <div class="note tip"><b class="lbl">Método — ¿es lineal?</b>
      Para probar que <strong>sí</strong>, se verifican las dos condiciones con vectores genéricos. Para probar que <strong>no</strong>, se busca un contraejemplo numérico, o se usa el filtro rápido de [[u6-propiedades-tl]]: si $T(\vec 0) \neq \vec 0$, no es lineal y se termina en un renglón.</div>
      <div class="note warn"><b class="lbl">Señales de que no es lineal</b>
      Términos constantes ($T(x,y) = (x+1, y)$), potencias o productos de las variables ($x^2$, $xy$), valores absolutos, raíces. Las transformaciones lineales son <strong>homogéneas de grado 1</strong> en cada variable: cada componente de la salida es combinación lineal de las variables de entrada, sin términos sueltos.</div>` },

    { id: 'u6-propiedades-tl', tipo: 'prop', titulo: 'Propiedades de una transformación lineal',
      cuerpo: tex`<p>Si $T: V \to W$ es lineal, entonces:</p>
      <ol>
        <li>$T(\vec 0_V) = \vec 0_W$;</li>
        <li>$T(-v) = -T(v)$;</li>
        <li>$T(u - v) = T(u) - T(v)$;</li>
        <li>$T\left(\displaystyle\sum_{i=1}^{n} \alpha_i v_i\right) = \displaystyle\sum_{i=1}^{n} \alpha_i\, T(v_i)$ — vale para cualquier combinación lineal.</li>
      </ol>
      <div class="note tip"><b class="lbl">La propiedad 4 es la que hace funcionar toda la unidad</b>
      Dice que conocer los transformados de <strong>una base</strong> alcanza para conocer $T$ en todo el espacio: cualquier vector se escribe como combinación lineal de la base y $T$ se «reparte» sobre esa combinación. Es la base del [[u6-teorema-unicidad|teorema de existencia y unicidad]] y de la [[u6-matriz-asociada|matriz asociada]].</div>` },

    { id: 'u6-ejemplos-geometricos', tipo: 'obs', titulo: 'Transformaciones geométricas del plano',
      cuerpo: tex`<p>Varias transformaciones geométricas son lineales, y los finales preguntan por ellas:</p>
      <div class="tbl"><table>
        <thead><tr><th>Transformación</th><th>Expresión</th><th>¿Lineal?</th></tr></thead>
        <tbody>
          <tr><td>proyección sobre el eje $x$</td><td>$T(x,y) = (x, 0)$</td><td>sí</td></tr>
          <tr><td>simetría respecto del eje $x$</td><td>$T(x,y) = (x, -y)$</td><td>sí</td></tr>
          <tr><td><strong>simetría central</strong> con centro en el origen</td><td>$T(x,y) = (-x,-y) = -\,(x,y)$</td><td>sí</td></tr>
          <tr><td>rotación de ángulo $\theta$ alrededor del origen</td><td>$T(x,y) = (x\cos\theta - y\operatorname{sen}\theta,\; x\operatorname{sen}\theta + y\cos\theta)$</td><td>sí</td></tr>
          <tr><td>homotecia de razón $k$</td><td>$T(v) = k\,v$</td><td>sí</td></tr>
          <tr><td><strong>traslación</strong> por $\vec a \neq \vec 0$</td><td>$T(v) = v + \vec a$</td><td><strong>no</strong>: $T(\vec 0) = \vec a \neq \vec 0$</td></tr>
          <tr><td>simetría con centro fuera del origen</td><td>—</td><td><strong>no</strong>, por la misma razón</td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">Cómo justificar la simetría central</b>
      $T(v) = -v$ es lineal porque $T(u+v) = -(u+v) = -u + (-v) = T(u) + T(v)$ y $T(\alpha v) = -\alpha v = \alpha(-v) = \alpha T(v)$. Es la homotecia de razón $-1$. La aclaración «con centro en el origen» del enunciado no es decorativa: con otro centro deja de ser lineal.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u6-s2', titulo: '2. Núcleo e imagen',
    conceptos: [

    { id: 'u6-nucleo-imagen', tipo: 'def', titulo: 'Núcleo e imagen',
      cuerpo: tex`<p>Si $T: V \to W$ es una transformación lineal, se definen:</p>
      <div class="fx center">$$\operatorname{Nuc}(T) = \{\, v \in V : T(v) = \vec 0_W \,\} \;\subseteq V$$</div>
      <div class="fx center">$$\operatorname{Im}(T) = \{\, w \in W : \exists\, v \in V,\; T(v) = w \,\} \;\subseteq W$$</div>
      <p>El núcleo (o <em>kernel</em>) vive en el espacio de <strong>partida</strong>; la imagen (o <em>rango</em>), en el de <strong>llegada</strong>. Confundirlos es el error más costoso de la unidad.</p>` },

    { id: 'u6-nucleo-imagen-subespacios', tipo: 'prop', titulo: 'Proposición — Son subespacios',
      cuerpo: tex`<p>Si $T: V \to W$ es lineal, entonces:</p>
      <ol>
        <li>$\operatorname{Nuc}(T)$ es un subespacio de $V$;</li>
        <li>$\operatorname{Im}(T)$ es un subespacio de $W$.</li>
      </ol>
      <p>En particular ambos contienen al vector nulo respectivo, y tiene sentido hablar de su <strong>base</strong> y su <strong>dimensión</strong> ([[u4-dimension]]).</p>` },

    { id: 'u6-imagen-generadores', tipo: 'teo', titulo: 'Teorema — La imagen está generada por los transformados de una base',
      cuerpo: tex`<p>Sea $T: V \to W$ lineal. Si $B = \{v_1, v_2, \dots, v_n\}$ es una base de $V$, entonces</p>
      <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{\, T(v_1),\, T(v_2),\, \dots,\, T(v_n) \,\}$$</div>
      <div class="note tip"><b class="lbl">Es el método para calcular la imagen</b>
      Se transforma una base del dominio (típicamente la canónica, cuyos transformados son las columnas de [[u6-matriz-asociada|la matriz asociada]]), y se depura el conjunto obtenido quedándose con los linealmente independientes ([[u4-hallar-base]]). Eso da una base de $\operatorname{Im}(T)$ y, contando, su dimensión.</div>
      <div class="note warn"><b class="lbl">Cuidado</b> Los $T(v_i)$ <strong>generan</strong> la imagen pero no necesariamente son una base: pueden ser L.D. Siempre hay que verificar la independencia antes de llamarlos base.</div>` },

    { id: 'u6-teorema-dimension', tipo: 'teo', titulo: 'Teorema de la dimensión',
      cuerpo: tex`<p>Sea $T: V \to W$ una transformación lineal con $V$ de dimensión finita. Entonces</p>
      <div class="fx center">$$\dim V \;=\; \dim \operatorname{Nuc}(T) \;+\; \dim \operatorname{Im}(T)$$</div>
      <p>Las dos dimensiones del miembro derecho se llaman respectivamente <strong>nulidad</strong> y <strong>rango</strong> de $T$.</p>
      <div class="note tip"><b class="lbl">El teorema más útil de la unidad</b>
      Calculando <strong>una</strong> de las dos dimensiones, la otra sale gratis. Y permite responder sin cuentas preguntas de existencia:
      <ul>
        <li>$T: \mathbb{R}^3 \to \mathbb{R}^2$ nunca es inyectiva: $\dim \operatorname{Im}(T) \le 2$, luego $\dim \operatorname{Nuc}(T) \ge 1 > 0$.</li>
        <li>$T: \mathbb{R}^2 \to \mathbb{R}^3$ nunca es sobreyectiva: $\dim \operatorname{Im}(T) \le 2 < 3$.</li>
        <li>Si $\dim V > \dim W$, no hay inyectivas; si $\dim V < \dim W$, no hay sobreyectivas.</li>
      </ul>
      Es la justificación que esperan los ítems de verdadero/falso.</div>
      <div class="note"><b class="lbl">Caso particular que piden construir</b>
      $f: \mathbb{R}^4 \to \mathbb{R}^3$ con $\dim \operatorname{Nuc}(f) = \dim \operatorname{Im}(f)$: por el teorema $4 = 2d$, luego $d = 2$. Hay que exhibir una $f$ con núcleo e imagen de dimensión 2, por ejemplo $f(x,y,z,t) = (x, y, 0)$.</div>` },

    { id: 'u6-inyectiva-sobreyectiva', tipo: 'prop', titulo: 'Inyectividad, sobreyectividad e isomorfismo',
      cuerpo: tex`<ul>
        <li><strong>Inyectividad.</strong> $T$ es inyectiva $\iff \operatorname{Nuc}(T) = \{\vec 0\} \iff \dim \operatorname{Nuc}(T) = 0$.</li>
        <li><strong>Sobreyectividad.</strong> $T$ es sobreyectiva $\iff \operatorname{Im}(T) = W \iff \dim \operatorname{Im}(T) = \dim W$.</li>
        <li><strong>Isomorfismo.</strong> $T$ es biyectiva (inyectiva y sobreyectiva). Entonces $\dim V = \dim W$ y existe $T^{-1}$, que también es lineal.</li>
      </ul>
      <div class="note tip"><b class="lbl">Por qué basta el núcleo para la inyectividad</b>
      Si $T(u) = T(v)$ entonces $T(u - v) = \vec 0$, o sea $u - v \in \operatorname{Nuc}(T)$. Si el núcleo es trivial, $u - v = \vec 0$ y por lo tanto $u = v$. La linealidad convierte una condición sobre <em>todos los pares</em> de vectores en una condición sobre <em>un solo</em> subespacio.</div>` },

    { id: 'u6-nucleo-sin-calcular', tipo: 'met', titulo: 'Método — núcleo e imagen sin calcular T',
      cuerpo: tex`<p>Varios ítems piden núcleo e imagen «sin calcular la transformación lineal». Se usan los datos tal como vienen:</p>
      <ul>
        <li><strong>Si dan vectores que van al nulo:</strong> ya son elementos del núcleo. Si son L.I., generan un subespacio contenido en $\operatorname{Nuc}(T)$; con el [[u6-teorema-dimension|teorema de la dimensión]] se acota y muchas veces se concluye que son exactamente una base del núcleo.</li>
        <li><strong>Si dan los transformados de una base:</strong> esos vectores generan la imagen ([[u6-imagen-generadores]]). Se depuran y se cuenta; la dimensión del núcleo sale por el teorema de la dimensión.</li>
        <li><strong>Interpretación geométrica:</strong> en $\mathbb{R}^3$, dimensión 1 ⇒ recta por el origen; dimensión 2 ⇒ plano por el origen; dimensión 0 ⇒ sólo el origen. Cuando el enunciado pide «qué representan geométricamente» y «dar las ecuaciones», hay que escribir la recta o el plano correspondiente con [[u4-hallar-generado]].</li>
      </ul>
      <div class="note tip"><b class="lbl">Ejemplo del esquema</b>
      Si $T: \mathbb{R}^3 \to \mathbb{R}^2$ cumple $T(u_1) = T(u_2) = \vec 0$ con $u_1, u_2$ L.I., y $T(u_3) = v \neq \vec 0$: entonces $\dim \operatorname{Im}(T) \ge 1$ y $\dim \operatorname{Nuc}(T) \ge 2$; como $3 = \dim\operatorname{Nuc} + \dim\operatorname{Im}$, forzosamente $\dim \operatorname{Nuc}(T) = 2$ y $\dim \operatorname{Im}(T) = 1$. El núcleo es entonces <strong>exactamente</strong> $\operatorname{gen}\{u_1, u_2\}$: un plano que pasa por el origen, cuya ecuación se obtiene con el producto vectorial.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u6-s3', titulo: '3. Existencia y unicidad',
    conceptos: [

    { id: 'u6-teorema-unicidad', tipo: 'teo', titulo: 'Teorema — Existencia y unicidad a partir de una base',
      cuerpo: tex`<p>Sean $V$, $W$ espacios vectoriales, $B = \{v_1, \dots, v_n\}$ una <strong>base</strong> de $V$ y $\{w_1, \dots, w_n\}$ un conjunto cualquiera de vectores de $W$. Entonces existe una <strong>única</strong> transformación lineal $T: V \to W$ tal que $T(v_i) = w_i$ para $1 \le i \le n$.</p>
      <div class="note tip"><b class="lbl">Lo que hay que mirar: si los datos son una base</b>
      El teorema pide que los vectores del dominio formen base. De ahí salen los tres escenarios posibles de los ejercicios de existencia:
      <ol>
        <li><strong>Los vectores dados forman base de $V$</strong> ⇒ existe una única $T$. Fin de la discusión.</li>
        <li><strong>Son L.I. pero no generan $V$</strong> ⇒ existe $T$ pero <strong>no es única</strong>: hay libertad para elegir las imágenes de los vectores que faltan para completar la base.</li>
        <li><strong>Son L.D.</strong> ⇒ hay que verificar <strong>compatibilidad</strong>. Si $v_3 = \alpha v_1 + \beta v_2$, la linealidad obliga a que $w_3 = \alpha w_1 + \beta w_2$. Si los datos la respetan, $T$ existe (única o no, según si generan); si la violan, <strong>no existe</strong> ninguna $T$ lineal con esos datos.</li>
      </ol></div>
      <div class="note warn"><b class="lbl">El procedimiento ante vectores L.D.</b>
      Primero se escribe la relación de dependencia entre los vectores del dominio. Después se chequea si la misma relación vale entre las imágenes. Ese chequeo <strong>es</strong> la respuesta del ejercicio, y es también la manera de hallar los valores de parámetros ($a$, $b$, $c$) que hacen posible la transformación.</div>` },

    { id: 'u6-hallar-expresion', tipo: 'met', titulo: 'Método — hallar la expresión analítica de T',
      cuerpo: tex`<p>Dado $T(v_i) = w_i$ sobre una base $B = \{v_1, \dots, v_n\}$, para obtener $T(x,y,z)$:</p>
      <ol class="pasos">
        <li><span class="ptit">Escribir el vector genérico en la base.</span> $(x,y,z) = \alpha v_1 + \beta v_2 + \gamma v_3$, y despejar $\alpha, \beta, \gamma$ en función de $x, y, z$ (esto es calcular $[(x,y,z)]_B$, ver [[u5-calcular-coordenadas]]).</li>
        <li><span class="ptit">Aplicar la linealidad.</span> Por [[u6-propiedades-tl]], $T(x,y,z) = \alpha\, w_1 + \beta\, w_2 + \gamma\, w_3$.</li>
        <li><span class="ptit">Reemplazar</span> los $\alpha, \beta, \gamma$ hallados y simplificar.</li>
        <li><span class="ptit">Verificar</span> con uno de los datos: evaluar $T$ en $v_1$ y comprobar que da $w_1$.</li>
      </ol>
      <div class="note tip"><b class="lbl">Atajo cuando los datos son sobre la base canónica</b>
      Si se conocen $T(e_1), T(e_2), \dots$, no hace falta resolver ningún sistema: $T(x,y,z) = x\,T(e_1) + y\,T(e_2) + z\,T(e_3)$ directamente. Y esos transformados son exactamente las columnas de $[T]_C$.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u6-s4', titulo: '4. Matriz asociada a una transformación lineal',
    conceptos: [

    { id: 'u6-matriz-asociada', tipo: 'teo', titulo: 'Teorema y definición — Matriz de transformación',
      cuerpo: tex`<p>Sean $V$ y $W$ espacios vectoriales de dimensión $n$ y $m$, $T: V \to W$ lineal, y $B = \{v_1, \dots, v_n\}$, $D = \{w_1, \dots, w_m\}$ bases ordenadas de $V$ y $W$. Entonces existe una <strong>única</strong> matriz $A$ de orden $m \times n$ tal que</p>
      <div class="fx center">$$[T(x)]_D \;=\; A \cdot [x]_B \qquad \forall\, x \in V$$</div>
      <p>Esa matriz se nota $A = [T]_{BD}$ y se llama <strong>matriz de transformación</strong> (o matriz asociada) de $T$. Se calcula columna por columna:</p>
      <div class="fx center">$$[T]_{BD} \;=\; \Bigl(\; [T(v_1)]_D \;\Big|\; [T(v_2)]_D \;\Big|\; \cdots \;\Big|\; [T(v_n)]_D \;\Bigr)$$</div>
      <p>es decir, la columna $i$-ésima es el transformado del $i$-ésimo vector de $B$, <strong>escrito en la base $D$</strong>.</p>
      <div class="note warn"><b class="lbl">La convención de la cátedra</b>
      En $[T]_{BD}$ el <strong>primer</strong> subíndice es la base del <strong>dominio</strong> y el segundo la del <strong>codominio</strong>: igual que en [[u5-matriz-cambio]]. El orden de la multiplicación lo confirma: $[T(x)]_D = [T]_{BD}[x]_B$, y los subíndices $B$ se encuentran. Si la matriz es $m \times n$ con $m \neq n$, el tamaño también desambigua: las <strong>columnas</strong> son tantas como $\dim V$.</div>
      <div class="note"><b class="lbl">Caso canónico</b> Si se toman las bases canónicas en ambos espacios, $A = [T]_{CC}$ y se nota simplemente $[T]_C$. Sus columnas son $T(e_1), T(e_2), \dots$ tal como salen, sin ningún cambio de base.</div>` },

    { id: 'u6-de-matriz-a-tl', tipo: 'met', titulo: 'Método — de la matriz a la transformación y al revés',
      cuerpo: tex`<p><strong>De $[T]_C$ a la expresión analítica.</strong> Se multiplica la matriz por el vector genérico como columna:</p>
      <div class="fx center">$$T(x,y,z) = [T]_C \cdot \begin{pmatrix} x \\ y \\ z \end{pmatrix}$$</div>
      <p><strong>De $[T]_{BD}$ (bases no canónicas) a la expresión analítica.</strong> Hay dos caminos:</p>
      <ul>
        <li><strong>Camino largo pero seguro:</strong> las columnas dan $[T(v_i)]_D$; se reconstruye cada $T(v_i)$ combinando los vectores de $D$ con esos coeficientes; con los pares $(v_i, T(v_i))$ se aplica [[u6-hallar-expresion]].</li>
        <li><strong>Camino matricial:</strong> se compone con matrices de cambio de base (ver [[u6-cambio-base-matriz]]) para obtener $[T]_C$ y de ahí la expresión.</li>
      </ul>
      <div class="note tip"><b class="lbl">Para calcular $T(x_0)$ de un vector concreto</b>
      $[T(x_0)]_D = [T]_{BD} \cdot [x_0]_B$. Hay que acordarse de <strong>dos</strong> conversiones: pasar $x_0$ a coordenadas en $B$ antes de multiplicar, y volver de coordenadas en $D$ al vector al final. Olvidarse de alguna de las dos es el error más frecuente de la unidad.</div>` },

    { id: 'u6-cambio-base-matriz', tipo: 'form', titulo: 'Cambiar las bases de la matriz de una transformación',
      cuerpo: tex`<p>La transformación es siempre la misma; lo que cambia al cambiar de bases es su matriz. La relación es</p>
      <div class="fx center">$$[T]_{B'D'} \;=\; [\;]_{DD'} \cdot [T]_{BD} \cdot [\;]_{B'B}$$</div>
      <p>Se lee de derecha a izquierda, siguiendo el recorrido de las coordenadas: primero se pasa de $B'$ a $B$, después se aplica $T$ llegando a coordenadas en $D$, y finalmente se pasa de $D$ a $D'$.</p>
      <div class="note tip"><b class="lbl">Caso $V = W$ con una sola base (el de la unidad 7)</b>
      $$[T]_{B'} = [\;]_{BB'} \cdot [T]_{B} \cdot [\;]_{B'B} = P^{-1}\,[T]_B\,P, \qquad P = [\;]_{B'B}$$
      Las matrices $[T]_B$ y $[T]_{B'}$ resultan <strong>semejantes</strong>. Es la noción que permite preguntarse si existe una base en la que la matriz sea diagonal — todo el contenido de la unidad 7.</div>
      <div class="note"><b class="lbl">Chequeo de subíndices</b>
      En la cadena $[\;]_{D\boxed{D'}} \cdot [T]_{\boxed{B}\boxed{D}} \cdot [\;]_{B'\boxed{B}}$, cada subíndice interior debe aparecer dos veces, cancelándose. Lo que sobrevive en los extremos es $B'$ (entrada) y $D'$ (salida), que es lo que se busca. Si no cierra, el orden de los factores está mal.</div>
      <div class="note tip"><b class="lbl">«Hallar $[T]_B$ de dos maneras distintas»</b>
      Es un pedido textual del TP 6. Las dos maneras son: <strong>(1)</strong> directa, calculando $T(v_i)$ para cada vector de $B$ y escribiendo cada resultado en coordenadas de $B$; <strong>(2)</strong> matricial, calculando $[T]_C$ y conjugando con las matrices de cambio de base. Deben dar lo mismo.</div>` },

    { id: 'u6-nucleo-imagen-matriz', tipo: 'met', titulo: 'Método — núcleo e imagen desde la matriz',
      cuerpo: tex`<p>Con $A = [T]_{BD}$:</p>
      <ul>
        <li><strong>Imagen:</strong> está generada por las <strong>columnas</strong> de $A$ —son los $[T(v_i)]_D$—. Su dimensión es el <strong>rango</strong> de $A$ (cantidad de columnas L.I., o de pivotes al escalonar).</li>
        <li><strong>Núcleo:</strong> se resuelve el sistema homogéneo $A\,\vec c = \vec 0$. Las soluciones son las <strong>coordenadas en $B$</strong> de los vectores del núcleo, no los vectores mismos.</li>
      </ul>
      <div class="note warn"><b class="lbl">El paso que se saltea</b>
      Si $B$ no es la canónica, las soluciones del sistema homogéneo son coordenadas y hay que <strong>reconstruir</strong> los vectores combinando la base $B$ con ellas. Lo mismo del lado de la imagen: las columnas son coordenadas en $D$ y hay que reconstruir con $D$. Sólo cuando ambas bases son canónicas se puede leer el resultado directamente de la matriz.</div>` },

    { id: 'u6-que-se-puede-calcular', tipo: 'obs', titulo: 'Qué se puede calcular con qué (mapa de la unidad)',
      cuerpo: tex`<p>El último ejercicio del TP 6 pregunta, dada una $T: V \to W$ con bases $B$ de $V$ y $B'$ de $W$, qué se puede obtener conociendo $[x]_B$. El mapa de piezas disponibles es este:</p>
      <div class="tbl"><table>
        <thead><tr><th>Se busca</th><th>Se obtiene como</th></tr></thead>
        <tbody>
          <tr><td>$[x]_{C}$</td><td>$[\;]_{BC}\,[x]_B$ — o directo, combinando $B$ con las coordenadas</td></tr>
          <tr><td>$[x]_{B''}$ (otra base)</td><td>$[\;]_{BB''}\,[x]_B$</td></tr>
          <tr><td>$[T(x)]_{B'}$</td><td>$[T]_{BB'}\,[x]_B$</td></tr>
          <tr><td>$[T(x)]_{C}$</td><td>$[\;]_{B'C}\,[T]_{BB'}\,[x]_B$</td></tr>
          <tr><td>$T(x)$ como vector</td><td>reconstruir $[T(x)]_{B'}$ combinando los vectores de $B'$</td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">La regla única</b>
      Todo se arma encadenando matrices de modo que los subíndices se cancelen: <strong>de a la derecha para la entrada, de a la izquierda para la salida</strong>. Si la cadena cierra, el cálculo es posible; si falta una pieza (por ejemplo, no se conoce $B'$ explícitamente), lo que se puede obtener son coordenadas pero no el vector.</div>` }
  ]}

]});
