/* Unidad 7 — Autovalores y autovectores
   Fuentes: "eal sc 26 autovalores y autovectores ar.pdf" (diapositivas 2026)
            "Unidad 6 - Autovalores y Autovectores.pdf" (apunte de teoría) */

EAL.unidad({
  id: 'u7', num: 7,
  titulo: 'Autovalores y autovectores',
  resumen: 'Las direcciones que la transformación no cambia. Polinomio característico, espacios propios, multiplicidades, el teorema resumen de doce ítems y el criterio de diagonalización.',
  secciones: [

  /* ========================================================= */
  { id: 'u7-s1', titulo: '1. Autovalores, autovectores y espacios propios',
    conceptos: [

    { id: 'u7-autovalor', tipo: 'def', titulo: 'Autovalor y autovector',
      cuerpo: tex`<p>Sean $V$ un $\mathbb{R}$-espacio vectorial de dimensión finita y $T: V \to V$ una transformación lineal. Un escalar $\lambda \in \mathbb{R}$ es un <strong>autovalor</strong> de $T$ si existe un vector $v \in V$, <strong>$v \neq \vec 0$</strong>, tal que</p>
      <div class="fx center">$$T(v) = \lambda\, v$$</div>
      <p>Ese $v$ se llama <strong>autovector</strong> de $T$ asociado al autovalor $\lambda$.</p>
      <p>También se los llama <strong>valores y vectores característicos</strong> (o propios), y la bibliografía los nota indistintamente.</p>
      <div class="note warn"><b class="lbl">El vector nulo nunca es autovector</b>
      $T(\vec 0) = \lambda \vec 0$ se cumple para <em>todo</em> $\lambda$, así que admitirlo haría que cualquier número fuera autovalor. En cambio $\lambda = 0$ <strong>sí</strong> puede ser autovalor: significa que hay un $v \neq \vec 0$ con $T(v) = \vec 0$, o sea que el [[u6-nucleo-imagen|núcleo]] no es trivial.</div>
      <div class="note tip"><b class="lbl">Método — verificar si un vector dado es autovector</b>
      Se calcula $T(v)$ y se mira si el resultado es un múltiplo escalar de $v$. Si $T(v) = \lambda v$, ese $\lambda$ es el autovalor asociado; si no es múltiplo, no es autovector. Es una cuenta de dos líneas y no requiere el polinomio característico.</div>` },

    { id: 'u7-propiedades', tipo: 'prop', titulo: 'Propiedades de los autovectores',
      cuerpo: tex`<ol>
        <li>Si $v$ es autovector de $T$ asociado a $\lambda$, entonces $\alpha v$ también lo es, para todo $\alpha \neq 0$. (Los autovectores <strong>nunca son únicos</strong>: vienen en rectas enteras.)</li>
        <li>Si $v$ y $w$ son autovectores asociados al <strong>mismo</strong> autovalor $\lambda$, toda combinación lineal no nula de ellos es también autovector asociado a $\lambda$.</li>
        <li>Autovectores asociados a autovalores <strong>distintos</strong> son linealmente independientes.</li>
      </ol>
      <div class="note tip"><b class="lbl">Demostración de la propiedad 2 (la piden en el TP)</b>
      Sean $T(v) = \lambda v$, $T(w) = \lambda w$ y $u = \alpha v + \beta w \neq \vec 0$. Por linealidad,
      $$T(u) = T(\alpha v + \beta w) = \alpha T(v) + \beta T(w) = \alpha \lambda v + \beta \lambda w = \lambda(\alpha v + \beta w) = \lambda u$$
      Luego $u$ es autovector asociado a $\lambda$. $\blacksquare$ Es exactamente lo que dice que el [[u7-espacio-propio|espacio propio]] es un subespacio. Notar que el paso clave usa que <strong>el autovalor es el mismo</strong> en ambos términos: con autovalores distintos la cuenta no se puede factorizar, y de hecho el resultado es falso.</div>` },

    { id: 'u7-espacio-propio', tipo: 'def', titulo: 'Espacio propio',
      cuerpo: tex`<p>Sea $\lambda$ un autovalor de $T: V \to V$. El <strong>espacio propio</strong> (o subespacio característico) asociado a $\lambda$ es</p>
      <div class="fx center">$$E_\lambda = \{\, v \in V : T(v) = \lambda v \,\} = \operatorname{Nuc}(T - \lambda\, \mathrm{Id})$$</div>
      <p>y es un <strong>subespacio vectorial</strong> de $V$. Contiene a todos los autovectores asociados a $\lambda$, más el vector nulo.</p>
      <div class="note tip"><b class="lbl">La identidad que resuelve todo</b>
      $T(v) = \lambda v \iff T(v) - \lambda v = \vec 0 \iff (A - \lambda I)\,v = \vec 0$. Calcular el espacio propio es entonces <strong>resolver un sistema homogéneo</strong>, el de matriz $A - \lambda I$. Y por eso $\lambda$ es autovalor si y sólo si ese sistema tiene soluciones no triviales, lo que por el [[u4-teorema-18|Teorema resumen]] ocurre si y sólo si $\det(A - \lambda I) = 0$.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u7-s2', titulo: '2. Polinomio característico y multiplicidades',
    conceptos: [

    { id: 'u7-polinomio-caracteristico', tipo: 'def', titulo: 'Polinomio y ecuación característicos',
      cuerpo: tex`<p>Sea $A$ la matriz asociada a $T$ respecto de alguna base. Se llama <strong>polinomio característico</strong> de $T$ a</p>
      <div class="fx center">$$P(\lambda) = \det\bigl(A - \lambda\, I\bigr)$$</div>
      <p>que es un polinomio de grado $n = \dim V$ en $\lambda$. La <strong>ecuación característica</strong> es $P(\lambda) = 0$, y sus <strong>raíces reales son exactamente los autovalores</strong> de $T$.</p>
      <div class="note"><b class="lbl">No depende de la base elegida</b>
      Dos matrices asociadas a la misma $T$ en bases distintas son [[u7-semejantes|semejantes]], y matrices semejantes tienen el mismo polinomio característico. Por eso tiene sentido hablar del polinomio característico <em>de la transformación</em>.</div>
      <div class="note tip"><b class="lbl">Teorema — Matrices triangulares</b>
      Los valores característicos de una matriz triangular (superior o inferior, y en particular diagonal) son <strong>los elementos de su diagonal principal</strong>. Si la matriz del enunciado es triangular, los autovalores se leen sin calcular nada. Conviene mirar la matriz antes de lanzarse al determinante.</div>` },

    { id: 'u7-multiplicidades', tipo: 'def', titulo: 'Multiplicidad algebraica y geométrica',
      cuerpo: tex`<ul>
        <li>La <strong>multiplicidad algebraica</strong> de $\lambda$, $m_a(\lambda)$, es su multiplicidad como raíz del polinomio característico: el exponente con el que aparece el factor $(\lambda_0 - \lambda)$ en la factorización.</li>
        <li>La <strong>multiplicidad geométrica</strong> de $\lambda$, $m_g(\lambda)$, es la dimensión del espacio propio: $m_g(\lambda) = \dim E_\lambda$.</li>
      </ul>` },

    { id: 'u7-teorema-multiplicidades', tipo: 'teo', titulo: 'Teorema — Relación entre las multiplicidades',
      cuerpo: tex`<p>Si $\lambda$ es un autovalor de $A$, entonces</p>
      <div class="fx center">$$1 \;\le\; m_g(\lambda) \;\le\; m_a(\lambda)$$</div>
      <div class="note tip"><b class="lbl">Dos consecuencias que ahorran cuentas</b>
      <ol>
        <li>Todo autovalor tiene al menos un autovector: $m_g \ge 1$. Si el cálculo del espacio propio da dimensión 0, hay un error.</li>
        <li>Si $m_a(\lambda) = 1$, entonces forzosamente $m_g(\lambda) = 1$: el espacio propio es una recta y no hace falta más análisis. <strong>Sólo los autovalores con $m_a \ge 2$ pueden traer problemas</strong> de diagonalización, y son los únicos que vale la pena examinar en detalle.</li>
      </ol></div>` },

    { id: 'u7-teorema-n-autovectores', tipo: 'teo', titulo: 'Teorema — Cuándo hay n autovectores L.I.',
      cuerpo: tex`<p>Sea $A$ una matriz de $n \times n$. Entonces $A$ tiene $n$ autovectores linealmente independientes <strong>si y sólo si la multiplicidad geométrica de cada autovalor es igual a su multiplicidad algebraica</strong>.</p>
      <p>En particular, $A$ tiene $n$ autovectores L.I. si todos los autovalores son <strong>distintos</strong>, ya que entonces cada uno tiene $m_a = 1$ y por lo tanto $m_g = 1$.</p>
      <div class="note tip"><b class="lbl">Corolario operativo</b> Si una matriz de $n \times n$ tiene $n$ autovalores reales y distintos, es diagonalizable y no hay nada que verificar.</div>` },

    { id: 'u7-teorema-resumen', tipo: 'teo', titulo: 'Teorema de resumen (12 ítems equivalentes)',
      cuerpo: tex`<p>Sea $A$ una matriz de $n \times n$. Las siguientes doce afirmaciones son <strong>equivalentes</strong>: cada una implica a las otras once, de manera que si una es cierta, todas las demás lo son.</p>
      <ol>
        <li>$A$ es invertible.</li>
        <li>La única solución del sistema homogéneo $A\vec x = \vec 0$ es la trivial ($\vec x = \vec 0$).</li>
        <li>Para cada vector $\vec b$ de dimensión $n$, el sistema $A\vec x = \vec b$ tiene solución única.</li>
        <li>$A$ es equivalente por renglones a la matriz identidad $I_n$.</li>
        <li>$A$ se puede expresar como producto de matrices elementales.</li>
        <li>La forma escalonada por renglones de $A$ tiene $n$ pivotes.</li>
        <li>Las columnas (y los renglones) de $A$ son linealmente independientes.</li>
        <li>$\det A \neq 0$.</li>
        <li>$\nu(A) = 0$ (la nulidad es cero).</li>
        <li>$\rho(A) = n$ (el rango es $n$).</li>
        <li>La transformación lineal $T$ de $\mathbb{R}^n$ en $\mathbb{R}^n$ definida por $T\vec x = A\vec x$ es un <strong>isomorfismo</strong>.</li>
        <li><strong>Cero no es un autovalor de $A$.</strong></li>
      </ol>
      <div class="note warn"><b class="lbl">Aparece textual en parciales y finales</b>
      Los enunciados piden «enuncie tres ítems equivalentes del Teorema Resumen <em>según los autovalores que calculó</em>». Lo que esperan es que se use el ítem 12 como bisagra:
      <ul>
        <li>Si <strong>$0$ no es autovalor</strong>: todos los doce ítems valen. Se pueden enunciar, por ejemplo, que $A$ es invertible, que $\det A \neq 0$ y que la transformación es un isomorfismo.</li>
        <li>Si <strong>$0$ sí es autovalor</strong>: los doce ítems son <em>falsos</em>. Se enuncia entonces la negación de cada uno: $A$ no es invertible, $\det A = 0$, el sistema homogéneo tiene soluciones no triviales, el rango es menor que $n$, la transformación no es inyectiva ni sobreyectiva.</li>
      </ul>
      Es la versión ampliada del [[u4-teorema-18|Teorema resumen 18]] de la unidad 4, que tenía siete ítems.</div>
      <div class="note tip"><b class="lbl">Por qué «cero no es autovalor» equivale a invertible</b>
      $\lambda = 0$ es autovalor $\iff \det(A - 0\cdot I) = 0 \iff \det A = 0 \iff A$ no es invertible. También, por el [[u7-espacio-propio|espacio propio]]: $E_0 = \operatorname{Nuc}(T)$, así que $0$ es autovalor exactamente cuando el núcleo no es trivial, es decir cuando $T$ no es inyectiva.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u7-s3', titulo: '3. Diagonalización',
    conceptos: [

    { id: 'u7-semejantes', tipo: 'def', titulo: 'Matrices semejantes',
      cuerpo: tex`<p>Dos matrices $A$ y $B$ de $n \times n$ son <strong>semejantes</strong> si existe una matriz invertible $P$ de $n \times n$ tal que</p>
      <div class="fx center">$$B = P^{-1} A\, P$$</div>
      <p>La función que lleva $A$ en $B$ se denomina <strong>transformación de semejanza</strong>.</p>
      <div class="note tip"><b class="lbl">Teorema</b> Si $A$ y $B$ son semejantes, entonces tienen el <strong>mismo polinomio característico</strong>, y por lo tanto los mismos autovalores con las mismas multiplicidades algebraicas. También comparten determinante, traza y rango.</div>
      <div class="note"><b class="lbl">Qué son en esta materia</b> Dos matrices asociadas a la misma transformación lineal en bases distintas son semejantes, y $P$ es la matriz de cambio de base correspondiente ([[u6-cambio-base-matriz]]).</div>` },

    { id: 'u7-diagonalizable', tipo: 'def', titulo: 'Transformación (o matriz) diagonalizable',
      cuerpo: tex`<p>Una transformación lineal $T: V \to V$ se dice <strong>diagonalizable</strong> si existe una base $B$ de $V$ tal que $[T]_B$ sea una matriz <strong>diagonal</strong>. Equivalentemente, una matriz $A$ es diagonalizable si es semejante a una matriz diagonal: existe $P$ invertible con $D = P^{-1} A P$ diagonal.</p>` },

    { id: 'u7-criterio-diagonalizacion', tipo: 'teo', titulo: 'Teorema — Criterio de diagonalización',
      cuerpo: tex`<p>Una matriz $A$ de $n \times n$ es diagonalizable <strong>si y sólo si tiene $n$ autovectores linealmente independientes</strong>. En ese caso, si $B$ es una base formada por autovectores:</p>
      <div class="fx center">$$[T]_B = D = \begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix}$$</div>
      <p>La diagonal lleva los autovalores, <strong>cada uno repetido tantas veces como su multiplicidad</strong> y en el mismo orden en que los autovectores correspondientes aparecen en $B$.</p>
      <p>Combinando con el [[u7-teorema-n-autovectores|teorema anterior]], el criterio operativo es:</p>
      <div class="fx center">$$A \text{ es diagonalizable} \iff m_g(\lambda_i) = m_a(\lambda_i) \;\text{ para todo autovalor } \lambda_i \;\text{ y todas las raíces son reales}$$</div>
      <div class="note tip"><b class="lbl">Corolario</b> Si la matriz de $n \times n$ tiene $n$ autovalores <strong>distintos</strong>, es diagonalizable.</div>
      <div class="note warn"><b class="lbl">Las dos razones por las que una matriz no es diagonalizable</b>
      Es lo que piden explicar los parciales cuando dicen «explicar por qué no es posible diagonalizar, cuando no lo sea»:
      <ol>
        <li><strong>Faltan raíces reales.</strong> El polinomio característico tiene factores cuadráticos irreducibles en $\mathbb{R}$ (discriminante negativo). No hay suficientes autovalores reales como para juntar $n$ autovectores, porque la materia trabaja sobre $\mathbb{R}$.</li>
        <li><strong>$m_g < m_a$ para algún autovalor.</strong> Hay un autovalor repetido cuyo espacio propio es «más chico» de lo que su multiplicidad algebraica exigiría. Faltan autovectores L.I. aunque los autovalores sean todos reales.</li>
      </ol>
      Hay que decir <strong>cuál</strong> de las dos ocurre, no sólo que no se puede.</div>` },

    { id: 'u7-metodo-diagonalizar', tipo: 'met', titulo: 'Método — el procedimiento completo',
      cuerpo: tex`<p>El guion que siguen casi todos los ejercicios de la unidad y los parciales:</p>
      <ol class="pasos">
        <li><span class="ptit">Armar la matriz.</span> Si dan una expresión analítica, se calcula $[T]_C$ con [[u6-matriz-asociada]]. Si dan la matriz, se usa como está. Si dan $[T]_B$ en otra base, se puede trabajar directamente con ella: los autovalores son los mismos.</li>
        <li><span class="ptit">Polinomio característico.</span> $P(\lambda) = \det(A - \lambda I)$. Conviene desarrollar por la fila o columna con más ceros, y factorizar en lugar de distribuir todo.</li>
        <li><span class="ptit">Autovalores.</span> Se resuelve $P(\lambda) = 0$ y se anota la <strong>multiplicidad algebraica</strong> de cada raíz real. Si aparece un factor cuadrático sin raíces reales, se registra y se descarta.</li>
        <li><span class="ptit">Espacios propios.</span> Para cada $\lambda_i$ se resuelve el sistema homogéneo $(A - \lambda_i I)\vec x = \vec 0$, se da una base y se anota la dimensión, que es la <strong>multiplicidad geométrica</strong>.</li>
        <li><span class="ptit">Decidir.</span> Si $m_g = m_a$ para todos y la suma de las $m_a$ es $n$, es diagonalizable. Si no, se explica cuál de las dos causas lo impide.</li>
        <li><span class="ptit">Armar la base y la forma diagonal.</span> $B$ es la unión de las bases de los espacios propios; $[T]_B = D$ tiene los autovalores en la diagonal, en el orden de $B$.</li>
        <li><span class="ptit">Verificar.</span> Que $\operatorname{tr} A = \sum \lambda_i$ y $\det A = \prod \lambda_i$ (con multiplicidades). Es un control rápido y muy efectivo contra errores de signo en el polinomio característico.</li>
      </ol>
      <div class="note tip"><b class="lbl">«Dos maneras distintas de calcular $[T]_B$»</b>
      Es otro pedido textual. <strong>(1)</strong> Directamente, escribiendo la diagonal con los autovalores: si $v_i$ es autovector de $\lambda_i$, entonces $T(v_i) = \lambda_i v_i$ y $[T(v_i)]_B$ es $\lambda_i$ en el lugar $i$ y ceros en el resto. <strong>(2)</strong> Por conjugación: $[T]_B = P^{-1}\,[T]_C\,P$ con $P = [\;]_{BC}$, la matriz que tiene los autovectores como columnas.</div>` },

    { id: 'u7-leer-polinomio', tipo: 'met', titulo: 'Método — decidir diagonalizabilidad leyendo el polinomio característico',
      cuerpo: tex`<p>Dado sólo $P(\lambda)$, sin la matriz, se puede concluir bastante. Se factoriza, se identifican las raíces reales con sus multiplicidades y se aplica el [[u7-criterio-diagonalizacion|criterio]]:</p>
      <div class="tbl"><table>
        <thead><tr><th>Forma de $P(\lambda)$</th><th>Conclusión</th><th>Por qué</th></tr></thead>
        <tbody>
          <tr><td>$n$ raíces reales <strong>distintas</strong></td><td><strong>diagonalizable</strong></td><td>todas con $m_a = 1$, luego $m_g = 1$</td></tr>
          <tr><td>hay raíces reales <strong>repetidas</strong>, y la suma de multiplicidades es $n$</td><td><strong>posiblemente</strong> diagonalizable</td><td>falta conocer $m_g$ de las repetidas; hay que calcular el espacio propio</td></tr>
          <tr><td>hay un factor cuadrático <strong>irreducible</strong> en $\mathbb{R}$</td><td><strong>no</strong> diagonalizable</td><td>las raíces reales no alcanzan para $n$ autovectores</td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">Cómo se reconoce un factor irreducible</b>
      Para $a\lambda^2 + b\lambda + c$, se calcula el discriminante $\Delta = b^2 - 4ac$. Si $\Delta < 0$, no tiene raíces reales. Por ejemplo $\lambda^2 + \lambda + 1$ tiene $\Delta = -3 < 0$: irreducible. En cambio $\lambda^2 - 5\lambda + 2$ tiene $\Delta = 17 > 0$ y aporta dos raíces reales distintas, aunque sean irracionales.</div>
      <div class="note warn"><b class="lbl">El caso $P(\lambda) = -\lambda^5$</b>
      Es $\lambda = 0$ con $m_a = 5$. Es diagonalizable sólo si $m_g = 5$, es decir si $E_0 = \operatorname{Nuc}(T)$ tiene dimensión 5, lo que forzaría $A = 0$. Dicho de otro modo: la única matriz de $5 \times 5$ con ese polinomio característico que es diagonalizable es la matriz nula. Así que lo correcto es «posiblemente diagonalizable» y aclarar bajo qué condición.</div>` },

    { id: 'u7-sin-calcular', tipo: 'met', titulo: 'Método — autovalores a partir de datos cualitativos',
      cuerpo: tex`<p>Muchos ejercicios dan los transformados de una base, sin matriz ni expresión analítica, y piden autovalores «sin realizar cálculos». La clave es reconocer la forma $T(v) = \lambda v$ en los datos:</p>
      <ul>
        <li><strong>$T(v) = \lambda v$ con $v$ de la base</strong> ⇒ $\lambda$ es autovalor y $v$ un autovector asociado. Por ejemplo $T(a) = -2a$ dice que $-2$ es autovalor.</li>
        <li><strong>$T(v) = \vec 0$</strong> ⇒ $\lambda = 0$ es autovalor, y $v \in \operatorname{Nuc}(T)$.</li>
        <li><strong>$T(v) = v$</strong> ⇒ $\lambda = 1$ es autovalor.</li>
        <li><strong>$T(v) = w$ con $w$ otro vector de la base</strong> ⇒ eso <em>no</em> da un autovalor; aporta una columna no diagonal a $[T]_B$ y suele ser la razón por la que la transformación no es diagonalizable.</li>
      </ul>
      <div class="note tip"><b class="lbl">La estrategia</b>
      Se escribe $[T]_B$ a partir de los datos (que es inmediato: cada $T(v_i)$ expresado en la base $B$ da una columna) y se trabaja con esa matriz. Si queda triangular o diagonal, los autovalores se leen de la diagonal. Núcleo e imagen también salen de ahí con [[u6-nucleo-imagen-matriz]]. Con esto se resuelven los ejercicios enunciados en espacios vectoriales abstractos, donde los «vectores» son símbolos $a, b, c, d$ sin componentes.</div>` }
  ]}

]});
