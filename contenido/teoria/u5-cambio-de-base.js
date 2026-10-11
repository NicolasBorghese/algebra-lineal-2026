/* Unidad 5 — Cambio de base
   Fuentes: "eal sc 26 cambio de base ar.pdf" (diapositivas 2026)
            "Unidad 4 - Espacios Vectoriales.pdf", última sección (apunte de teoría) */

EAL.unidad({
  id: 'u5', num: 5,
  titulo: 'Cambio de base',
  resumen: 'Coordenadas de un vector respecto de una base y la matriz que traduce coordenadas de una base a otra. La unidad más corta y la que más se usa después.',
  secciones: [

  /* ========================================================= */
  { id: 'u5-s1', titulo: '1. Coordenadas de un vector',
    conceptos: [

    { id: 'u5-coordenadas', tipo: 'def', titulo: 'Vector de coordenadas',
      cuerpo: tex`<p>Sea $B = \{v_1, v_2, \dots, v_n\}$ una base <strong>ordenada</strong> de $V$ y $x \in V$. Por el [[u4-teorema-21|Teorema 21]] existen escalares únicos $\alpha_1, \dots, \alpha_n$ tales que $x = \alpha_1 v_1 + \dots + \alpha_n v_n$. Esos escalares forman el <strong>vector de coordenadas de $x$ en la base $B$</strong>:</p>
      <div class="fx center">$$[x]_B = \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \vdots \\ \alpha_n \end{pmatrix}$$</div>
      <p>Se escribe siempre como <strong>columna</strong>.</p>
      <div class="note warn"><b class="lbl">Distinguir el vector de sus coordenadas</b>
      $x$ es el objeto (un punto de $\mathbb{R}^n$, un polinomio, una matriz); $[x]_B$ es la lista de escalares que lo reconstruye a partir de $B$. Son cosas distintas y coinciden sólo cuando $B$ es la base canónica. En $\mathbb{R}^2$ con $B = \{(2,1), (-4,1)\}$, el punto $Q = (-8,-1)$ tiene $[Q]_B = \binom{-2}{1}$: las coordenadas no se parecen en nada a las componentes.</div>` },

    { id: 'u5-calcular-coordenadas', tipo: 'met', titulo: 'Método — calcular las coordenadas',
      cuerpo: tex`<p>Se plantea la combinación lineal y se resuelve el sistema:</p>
      <ol class="pasos">
        <li><span class="ptit">Escribir</span> $x = \alpha_1 v_1 + \alpha_2 v_2 + \dots + \alpha_n v_n$ con los $\alpha_i$ como incógnitas.</li>
        <li><span class="ptit">Igualar</span> componente por componente (o coeficiente por coeficiente si son polinomios, o entrada por entrada si son matrices).</li>
        <li><span class="ptit">Resolver</span> el sistema. Como $B$ es base, el sistema es siempre <strong>compatible determinado</strong>: la solución existe y es única.</li>
      </ol>
      <div class="note tip"><b class="lbl">Si hay que hacerlo para varios vectores</b>
      Conviene calcular $[(x,y,z)]_B$ <strong>genérico</strong> una sola vez (dejando $x,y,z$ como parámetros) y después evaluar. Esa fórmula genérica es, de hecho, la matriz $[\;]_{CB}$ aplicada a $(x,y,z)$.</div>` },

    { id: 'u5-coordenadas-casos', tipo: 'obs', titulo: 'Dos casos que salen sin calcular',
      cuerpo: tex`<p>Sea $B = \{v_1, \dots, v_n\}$ una base cualquiera de $V$:</p>
      <ul>
        <li>Las coordenadas del <strong>vector nulo</strong> son todas cero: $[\vec 0]_B = (0, 0, \dots, 0)^t$. Justificación: $\vec 0 = 0 v_1 + \dots + 0 v_n$, y por el [[u4-teorema-21|Teorema 21]] esa escritura es la única.</li>
        <li>Las coordenadas del $i$-ésimo vector de la base son el $i$-ésimo canónico: $[v_i]_B = e_i$, es decir un $1$ en el lugar $i$ y ceros en el resto. Justificación: $v_i = 0 v_1 + \dots + 1\cdot v_i + \dots + 0 v_n$.</li>
      </ul>
      <div class="note tip"><b class="lbl">Consecuencia</b> Toda base, vista en sus propias coordenadas, «se vuelve» la canónica. Por eso $[\;]_{BB} = I_n$.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u5-s2', titulo: '2. La matriz de cambio de base',
    conceptos: [

    { id: 'u5-matriz-cambio', tipo: 'def', titulo: 'Matriz de cambio de base (o de transición)',
      cuerpo: tex`<p>Si $B = \{u_1, \dots, u_n\}$ y $D = \{w_1, \dots, w_n\}$ son bases ordenadas de un espacio $V$ de dimensión finita, la <strong>matriz de cambio de base de $B$ a $D$</strong> es la matriz $A$ de orden $n \times n$ cuya <strong>columna $j$-ésima es el vector de coordenadas del $j$-ésimo vector de $B$ respecto de $D$</strong>:</p>
      <div class="fx center">$$[\;]_{BD} \;=\; \Bigl(\; [u_1]_D \;\Big|\; [u_2]_D \;\Big|\; \cdots \;\Big|\; [u_n]_D \;\Bigr)$$</div>
      <div class="note warn"><b class="lbl">La notación de la cátedra: origen primero, destino segundo</b>
      $[\;]_{BD}$ se lee «<strong>de $B$ a $D$</strong>». Muchos libros usan el orden inverso, así que conviene fijar esta convención y no mezclarla. La regla mnemotécnica: <em>las columnas se escriben en la base del subíndice de la derecha, y son los vectores de la base del subíndice de la izquierda.</em></div>` },

    { id: 'u5-teorema-cambio', tipo: 'teo', titulo: 'Teorema — Cómo actúa la matriz de cambio',
      cuerpo: tex`<p>Sean $V$ de dimensión finita, $B$ y $D$ bases ordenadas de $V$ y $A = [\;]_{BD}$. Entonces para todo $x \in V$:</p>
      <div class="fx center">$$[x]_D \;=\; [\;]_{BD} \cdot [x]_B$$</div>
      <div class="note tip"><b class="lbl">Chequeo de consistencia</b>
      Los subíndices «se cancelan» como en una cadena: $[\;]_{B\boxed{D}} \cdot [x]_{\boxed{B}}$ — el subíndice de entrada ($B$) tiene que coincidir con el de la derecha de la matriz, y el resultado queda en el otro ($D$). Si no coinciden, la multiplicación está mal planteada. Esto permite detectar errores antes de hacer la cuenta.</div>` },

    { id: 'u5-inversa', tipo: 'teo', titulo: 'Teorema — Inversibilidad',
      cuerpo: tex`<p>Si $A = [\;]_{BD}$ es la matriz de cambio de base de $B$ a $D$, entonces</p>
      <ol>
        <li>$A$ es inversible;</li>
        <li>$A^{-1}$ es la matriz de cambio de base <strong>de $D$ a $B$</strong>: $\;[\;]_{DB} = \bigl([\;]_{BD}\bigr)^{-1}$.</li>
      </ol>
      <p>Es inversible porque sus columnas son las coordenadas de una base, y por lo tanto son linealmente independientes ([[u4-teorema-18|Teorema resumen 18]]).</p>
      <div class="note tip"><b class="lbl">Ahorro de trabajo</b> Cuando el ejercicio pide las matrices «de $C$ a $B$» y «de $B$ a $C$», sólo hay que calcular una: la otra es su inversa. Y la fácil siempre es $[\;]_{BC}$, porque las coordenadas canónicas de los vectores de $B$ son sus propias componentes: se ponen como columnas y listo, sin resolver ningún sistema.</div>` },

    { id: 'u5-via-canonica', tipo: 'form', titulo: 'Composición de cambios de base',
      cuerpo: tex`<p>Las matrices de cambio se componen multiplicando, pasando por una base intermedia (típicamente la canónica $C$):</p>
      <div class="fx center">$$[\;]_{BD} \;=\; [\;]_{CD} \cdot [\;]_{BC}$$</div>
      <p><strong>Demostración.</strong> Para todo $x$: $[x]_D = [\;]_{BD}[x]_B$. Por otro lado $[x]_D = [\;]_{CD}[x]_C$ y $[x]_C = [\;]_{BC}[x]_B$, de donde $[x]_D = [\;]_{CD}\bigl([\;]_{BC}[x]_B\bigr) = \bigl([\;]_{CD}[\;]_{BC}\bigr)[x]_B$. Comparando las dos expresiones para todo $x$, las matrices coinciden. $\blacksquare$</p>
      <div class="note tip"><b class="lbl">La estrategia general</b>
      Casi nunca conviene calcular $[\;]_{B_1 B_2}$ directamente (habría que resolver $n$ sistemas). El camino corto es:
      $$[\;]_{B_1 B_2} = [\;]_{C B_2} \cdot [\;]_{B_1 C} = \bigl([\;]_{B_2 C}\bigr)^{-1} \cdot [\;]_{B_1 C}$$
      y las dos matrices $[\;]_{B_i C}$ se escriben <strong>sin hacer cuentas</strong>, poniendo los vectores de cada base como columnas. Sólo queda invertir una matriz.</div>` },

    { id: 'u5-recuperar-base', tipo: 'met', titulo: 'Método — recuperar una base a partir de datos de coordenadas',
      cuerpo: tex`<p>Varios ítems del TP 5 dan coordenadas o una matriz de cambio y piden la base. La clave es leer la definición al revés.</p>
      <p><strong>Caso 1 — dan $[x_1]_B$ y $[x_2]_B$ y piden $B = \{v_1, v_2\}$.</strong> Cada dato es una ecuación vectorial: si $[x_1]_B = \binom{a}{b}$ entonces $x_1 = a v_1 + b v_2$. Con dos datos quedan dos ecuaciones vectoriales y dos incógnitas vectoriales; se resuelve como un sistema (por sustitución o combinando las ecuaciones).</p>
      <p><strong>Caso 2 — dan $M = [\;]_{BB'}$ y la base $B$, y piden $B'$.</strong> Las columnas de $M$ son $[u_j]_{B'}$, o sea $u_j = \sum_i m_{ij} w_i$ donde $B' = \{w_1, \dots, w_n\}$. Eso es un sistema lineal con los $w_i$ como incógnitas vectoriales. Equivalentemente, en forma matricial: $[\;]_{BC} = [\;]_{B'C} \cdot M$, de donde</p>
      <div class="fx center">$$[\;]_{B'C} = [\;]_{BC} \cdot M^{-1}$$</div>
      <p>y las columnas de $[\;]_{B'C}$ son directamente los vectores de $B'$.</p>
      <div class="note tip"><b class="lbl">Verificación</b> Siempre conviene comprobar al final: con la base hallada, recalcular una de las coordenadas dadas y ver que coincide. Es rápido y detecta errores de signo.</div>` },

    { id: 'u5-grafico', tipo: 'met', titulo: 'Método — comprobar gráficamente las coordenadas',
      cuerpo: tex`<p>Los ítems que piden «verificar gráficamente» esperan ver dos sistemas de ejes:</p>
      <ol>
        <li>En el sistema <strong>canónico</strong>, el vector se descompone en múltiplos de $\breve i$ y $\breve j$: las coordenadas se leen sobre los ejes habituales.</li>
        <li>En el sistema <strong>oblicuo</strong> determinado por $B = \{v_1, v_2\}$, se dibujan los dos vectores de la base como nuevos ejes y se traza por el extremo del vector una paralela a cada uno. Los múltiplos de $v_1$ y $v_2$ que se leen en esas intersecciones <strong>son</strong> $[x]_B$.</li>
      </ol>
      <div class="note tip"><b class="lbl">Qué está mostrando el dibujo</b>
      Que cambiar de base es cambiar la cuadrícula con la que se mide, no mover el vector. El vector es el mismo; lo que cambia son los números con los que se lo describe. Es la idea que después explica por qué una [[u6-matriz-asociada|matriz de transformación]] cambia al cambiar de base aunque la transformación sea la misma.</div>` }
  ]}

]});
