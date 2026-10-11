/* Finales — modelos 2025/2026
   Fuentes: 7_EAL_2026/finales_ejemplos

   Enunciados verificados con la re-extracción UCS-2 de los PDF; ya no quedan
   lecturas dudosas. Ver la nota del archivo de parciales. */

/* ============================================================
   Final — 9/12/25
   ============================================================ */
EAL.examen({
  id: 'final-2025-12-09', tipo: 'final', sigla: 'F1',
  titulo: 'Final regular — 9/12/25',
  fecha: '9 de diciembre de 2025',
  carrera: 'LSI · LCC',
  resumen: 'Plano por tres puntos y posición relativa de rectas; coordenadas en dos bases con interpretación gráfica; verdadero/falso sobre diagonalización y autovalores a partir de datos cualitativos.',
  unidades: ['u3', 'u5', 'u7'],
  nota: tex`<b class="lbl">Estructura típica de un final</b> Un ejercicio de geometría en $\mathbb{R}^3$, uno de cambio de base con gráfico, y uno de autovalores con justificación teórica. Los tres finales de la carpeta siguen este molde.<br><br>
  <b class="lbl">El ejercicio 3 no tiene cuentas</b> Da el polinomio característico ya factoreado, o las imágenes de vectores abstractos. Se resuelve razonando sobre multiplicidades y sobre el teorema resumen, no calculando determinantes. Es el tipo de ítem que más se repite en los finales.`,

  ejercicios: [

  /* --------------------------- 1 --------------------------- */
  { id: 'f1-1', num: '1',
    enunciado: tex`<p><strong>Geometría en $\mathbb{R}^3$:</strong></p>`,
    incisos: [

      { id: 'f1-1a', rot: 'a', enunciado: tex`Sea el triángulo de vértices $A = (1,0,1)$, $B = (3,2,-1)$, $C = (2,-1,2)$. Calcular el <strong>normal</strong> del plano que contiene al triángulo, su <strong>ecuación implícita</strong>, y decir si $P = (1,1,0)$ pertenece a él.`,
        conceptos: ['u3-normal-desde-directores', 'u3-plano-implicita', 'u1-producto-vectorial', 'u3-axioma-1'],
        pista: tex`Dos lados del triángulo dan dos vectores del plano. El normal es su producto vectorial.`,
        resolucion: tex`<h3>Paso 1 — Dos vectores del plano</h3>
        <p>Los lados del triángulo que salen de $A$:</p>
        <div class="fx center">$$\overrightarrow{AB} = (3-1,\; 2-0,\; -1-1) = (2,\, 2,\, -2)$$</div>
        <div class="fx center">$$\overrightarrow{AC} = (2-1,\; -1-0,\; 2-1) = (1,\, -1,\, 1)$$</div>
        <p><strong>Control previo:</strong> no son paralelos ($\overrightarrow{AB} = 2(1,1,-1)$ y $\overrightarrow{AC} = (1,-1,1)$ no son múltiplos), así que los tres puntos no son colineales y determinan un plano único ([[u3-axioma-1]]).</p>

        <h3>Paso 2 — El normal</h3>
        <p>Por [[u3-normal-desde-directores]], el normal es el producto vectorial ([[u1-producto-vectorial]]):</p>
        <div class="fx center">$$\vec n = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \breve i & \breve j & \breve k \\ 2 & 2 & -2 \\ 1 & -1 & 1 \end{vmatrix}$$</div>
        <div class="fx center">$$= \breve i\bigl(2\cdot1 - (-2)(-1)\bigr) - \breve j\bigl(2\cdot1 - (-2)(1)\bigr) + \breve k\bigl(2(-1) - 2(1)\bigr)$$</div>
        <div class="fx center">$$= \breve i(2 - 2) - \breve j(2 + 2) + \breve k(-2 - 2) = (0,\, -4,\, -4)$$</div>
        <p>Dividiendo por $-4$ (el normal queda definido salvo múltiplos), conviene usar</p>
        <div class="fx center">$$\vec n = (0,\, 1,\, 1)$$</div>

        <h3>Paso 3 — La ecuación implícita</h3>
        <p>Pasando por $A = (1,0,1)$ ([[u3-plano-implicita]]):</p>
        <div class="fx center">$$0(x-1) + 1(y-0) + 1(z-1) = 0 \;\Longrightarrow\; \boxed{\pi: \; y + z - 1 = 0}$$</div>
        <p><strong>Verificación con los tres vértices:</strong></p>
        <ul>
          <li>$A = (1,0,1)$: $\;0 + 1 - 1 = 0$ ✓</li>
          <li>$B = (3,2,-1)$: $\;2 - 1 - 1 = 0$ ✓</li>
          <li>$C = (2,-1,2)$: $\;-1 + 2 - 1 = 0$ ✓</li>
        </ul>

        <h3>Paso 4 — ¿Pertenece $P = (1,1,0)$?</h3>
        <div class="fx center">$$1 + 0 - 1 = 0 \;✓$$</div>
        <p><strong>Sí, $P$ pertenece al plano</strong> que contiene al triángulo.</p>
        <div class="note tip"><b class="lbl">Lo que dice la ausencia de $x$</b>
        El normal es $(0,1,1)$: tiene primera componente nula, o sea es perpendicular a $\breve i$. Eso significa que el plano <strong>contiene la dirección del eje $x$</strong> — es paralelo a ese eje. Por eso la ecuación no tiene $x$: la primera coordenada de un punto es irrelevante para pertenecer. Cualquier punto de la forma $(t, 1, 0)$ está en el plano, sea cual sea $t$.</div>
        <div class="note warn"><b class="lbl">Pertenecer al plano no es estar en el triángulo</b>
        $P$ está en el plano, lo que no significa que esté <em>dentro</em> del triángulo $ABC$. El enunciado pregunta por el plano, que es lo que se responde; decidir si un punto cae dentro del triángulo requiere otras herramientas y no se pide acá.</div>`,
        resultado: tex`$\vec n = \overrightarrow{AB} \times \overrightarrow{AC} = (0,-4,-4) \parallel (0,1,1)$, y el plano es $\pi: y + z - 1 = 0$. <strong>Sí</strong>, $P = (1,1,0)$ pertenece: $1 + 0 - 1 = 0$. El plano es paralelo al eje $x$.` },

      { id: 'f1-1b', rot: 'b', enunciado: tex`Sean las rectas $l_1: (x,y,z) = (2,8,-7) + \lambda\,(1,3,-2)$, con $\lambda \in \mathbb{R}$, y $\;l_2: \dfrac{x}{2} = \dfrac{y-2}{-1} = \dfrac{z+3}{1}$.
      Si son <strong>incidentes</strong>, calcular el punto de intersección y el plano que las contiene. Si son <strong>alabeadas</strong>, calcular la distancia entre ellas.`,
        conceptos: ['u3-teorema-7', 'u3-alabeadas', 'u3-dist-rectas-alabeadas', 'u3-normal-desde-directores'],
        pista: tex`Calculá el producto mixto primero: decide cuál de las dos ramas del enunciado hay que hacer. Y mirá bien el vector que une los dos puntos.`,
        resolucion: tex`<h3>Paso 1 — Punto y director de cada recta</h3>
        <div class="fx center">$$l_1: \quad P_1 = (2,\, 8,\, -7), \qquad \vec d_1 = (1,\, 3,\, -2)$$</div>
        <p>Para $l_2$, escribiendo la forma simétrica como $\dfrac{x-0}{2} = \dfrac{y-2}{-1} = \dfrac{z-(-3)}{1}$:</p>
        <div class="fx center">$$l_2: \quad P_2 = (0,\, 2,\, -3), \qquad \vec d_2 = (2,\, -1,\, 1)$$</div>
        <p>Los directores no son paralelos (ninguno es múltiplo del otro).</p>

        <h3>Paso 2 — ¿Incidentes o alabeadas?</h3>
        <div class="fx center">$$\overrightarrow{P_1P_2} = (0-2,\;\; 2-8,\;\; -3+7) = (-2,\, -6,\, 4)$$</div>
        <p>Por el [[u3-teorema-7]], se cortan si y sólo si el producto mixto se anula:</p>
        <div class="fx center">$$\begin{vmatrix} -2 & -6 & 4 \\ 1 & 3 & -2 \\ 2 & -1 & 1 \end{vmatrix}
        = -2\bigl(3 - 2\bigr) + 6\bigl(1 + 4\bigr) + 4\bigl(-1 - 6\bigr)$$</div>
        <div class="fx center">$$= -2(1) + 6(5) + 4(-7) = -2 + 30 - 28 = 0$$</div>
        <p>El producto mixto es cero y los directores no son paralelos, así que las rectas son <strong>incidentes</strong>: hay que hacer la primera rama del enunciado.</p>
        <div class="note tip"><b class="lbl">Atajo que estaba a la vista</b>
        $\overrightarrow{P_1P_2} = (-2,-6,4) = -2\,(1,3,-2) = -2\,\vec d_1$. El vector que une los dos puntos es <strong>paralelo al director de $l_1$</strong>, lo que significa que $P_2$ ya está sobre $l_1$. Con sólo notar eso el producto mixto es cero sin calcularlo (un determinante con dos filas proporcionales se anula), y además el punto de intersección queda identificado de una.</div>

        <h3>Paso 3 — El punto de intersección</h3>
        <p>Por el atajo anterior, $P_2 = (0,2,-3)$ debe estar en $l_1$. Verificando con $\lambda = -2$:</p>
        <div class="fx center">$$(2,8,-7) + (-2)(1,3,-2) = (2-2,\;\; 8-6,\;\; -7+4) = (0,\, 2,\, -3) \;✓$$</div>
        <div class="fx center">$$\boxed{l_1 \cap l_2 = \{(0,\, 2,\, -3)\}}$$</div>
        <p>Y $P_2$ está en $l_2$ por construcción (es el punto base de su forma simétrica) ✓</p>

        <h3>Paso 4 — El plano que las contiene</h3>
        <p>Normal = producto vectorial de los directores ([[u3-normal-desde-directores]]):</p>
        <div class="fx center">$$\vec n = \vec d_1 \times \vec d_2 = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & 3 & -2 \\ 2 & -1 & 1 \end{vmatrix}
        = \breve i(3 - 2) - \breve j(1 + 4) + \breve k(-1 - 6) = (1,\, -5,\, -7)$$</div>
        <p>Pasando por el punto de intersección $(0,2,-3)$:</p>
        <div class="fx center">$$1(x - 0) - 5(y - 2) - 7(z + 3) = 0$$</div>
        <div class="fx center">$$x - 5y + 10 - 7z - 21 = 0 \;\Longrightarrow\; \boxed{\pi: \; x - 5y - 7z - 11 = 0}$$</div>

        <h3>Verificaciones</h3>
        <p><strong>$P_1 = (2,8,-7)$:</strong> $\;2 - 40 + 49 - 11 = 0$ ✓</p>
        <p><strong>$P_2 = (0,2,-3)$:</strong> $\;0 - 10 + 21 - 11 = 0$ ✓</p>
        <p><strong>Los dos directores son paralelos al plano:</strong></p>
        <div class="fx center">$$\vec d_1 \cdot \vec n = (1,3,-2)\cdot(1,-5,-7) = 1 - 15 + 14 = 0 \;✓$$</div>
        <div class="fx center">$$\vec d_2 \cdot \vec n = (2,-1,1)\cdot(1,-5,-7) = 2 + 5 - 7 = 0 \;✓$$</div>
        <p>Punto más dirección en los dos casos ⟹ las dos rectas están contenidas en $\pi$ ✓</p>
        <div class="note"><b class="lbl">Por qué la distancia no se calcula acá</b>
        El enunciado plantea dos ramas excluyentes. Siendo incidentes, la distancia entre ellas es $0$ y la fórmula de [[u3-dist-rectas-alabeadas]] daría justamente $\tfrac{|0|}{\|\vec d_1 \times \vec d_2\|} = 0$: consistente, pero no es lo que se pide. Lo que hay que entregar es el punto y el plano.</div>`,
        resultado: tex`<strong>Incidentes</strong> (producto mixto $= 0$, directores no paralelos). Se cortan en $(0,2,-3)$ y el plano que las contiene es $\pi: x - 5y - 7z - 11 = 0$, de normal $\vec d_1 \times \vec d_2 = (1,-5,-7)$.` }
    ]},

  /* --------------------------- 2 --------------------------- */
  { id: 'f1-2', num: '2',
    enunciado: tex`<p>Sean la base canónica de $\mathbb{R}^2$ y $\mathcal{B} = \{(1,-1),\; (2,1)\}$.</p>`,
    incisos: [

      { id: 'f1-2a', rot: 'a', enunciado: tex`Representar al vector $\vec v = (4,-1)$ en <strong>dos sistemas de ejes coordenados cartesianos</strong> y mostrar gráficamente en cada sistema de dónde surgen las coordenadas del vector en cada base.`,
        conceptos: ['u5-grafico', 'u5-coordenadas'],
        pista: tex`En cada sistema, las coordenadas son los <em>pasos</em> que hay que dar sobre cada eje. Lo que cambia entre los dos dibujos no es el vector: son los ejes.`,
        resolucion: tex`<p>El punto del ejercicio es que <strong>el vector es siempre el mismo</strong> (la misma flecha en el mismo lugar del plano); lo que cambia son los ejes contra los cuales se lo mide ([[u5-grafico]]).</p>

        <h3>Sistema 1 — ejes canónicos</h3>
        <p>Los ejes son las direcciones $\breve e_1 = (1,0)$ y $\breve e_2 = (0,1)$, perpendiculares entre sí y con la cuadrícula de siempre. Para llegar a $\vec v$ desde el origen:</p>
        <div class="fx center">$$\vec v = 4\,(1,0) + (-1)\,(0,1)$$</div>
        <p><strong>Gráficamente:</strong> se avanzan $4$ unidades sobre el eje $x$ y se baja $1$ sobre el eje $y$. El rectángulo de lados paralelos a los ejes que tiene al origen y a $\vec v$ como vértices opuestos tiene lados de longitud $4$ y $1$: ésas son las coordenadas.</p>
        <div class="fx center">$$[\vec v]_{C} = (4,\, -1)$$</div>
        <p>Como la base es la canónica, las coordenadas coinciden con las componentes del vector — es el único caso en que eso pasa.</p>

        <h3>Sistema 2 — ejes en las direcciones de $\mathcal{B}$</h3>
        <p>Ahora los ejes son las rectas que pasan por el origen con las direcciones $\vec b_1 = (1,-1)$ y $\vec b_2 = (2,1)$. Son dos ejes oblicuos (no perpendiculares: $(1,-1)\cdot(2,1) = 2 - 1 = 1 \neq 0$) y con unidades propias: una «unidad» del primer eje es el segmento de $(0,0)$ a $(1,-1)$, de longitud $\sqrt2$.</p>
        <p>Para llegar a $\vec v$ caminando sobre esos ejes hacen falta <strong>2 pasos</strong> en la dirección de $\vec b_1$ y <strong>1 paso</strong> en la de $\vec b_2$:</p>
        <div class="fx center">$$\vec v = 2\,(1,-1) + 1\,(2,1) = (2,-2) + (2,1) = (4,\, -1) \;✓$$</div>
        <div class="fx center">$$[\vec v]_{\mathcal{B}} = (2,\, 1)$$</div>
        <p><strong>Gráficamente:</strong> se traza por la punta de $\vec v$ una paralela a $\vec b_2$ hasta cortar el eje de $\vec b_1$, y una paralela a $\vec b_1$ hasta cortar el eje de $\vec b_2$. Queda armado un <strong>paralelogramo</strong> (no un rectángulo, porque los ejes son oblicuos) cuyos lados miden $2$ unidades de $\vec b_1$ y $1$ unidad de $\vec b_2$. Esos dos números son las coordenadas.</p>

        <div class="tabla-wrap"><table>
          <thead><tr><th>Base</th><th>Ejes</th><th>Figura auxiliar</th><th>Coordenadas de $\vec v$</th></tr></thead>
          <tbody>
            <tr><td>canónica</td><td>perpendiculares, unidad 1</td><td>rectángulo</td><td>$(4,\, -1)$</td></tr>
            <tr><td>$\mathcal{B}$</td><td>oblicuos, unidad $\sqrt2$ y $\sqrt5$</td><td>paralelogramo</td><td>$(2,\, 1)$</td></tr>
          </tbody>
        </table></div>

        <div class="note tip"><b class="lbl">La idea que quieren ver</b>
        La construcción es la misma en los dos dibujos —proyectar <em>en forma paralela al otro eje</em>— y es la regla del paralelogramo de la suma de vectores leída al revés. Con ejes perpendiculares el paralelogramo resulta un rectángulo y la proyección paralela coincide con la ortogonal; con ejes oblicuos no, y es el error típico: <strong>no</strong> hay que proyectar perpendicularmente sobre los ejes de $\mathcal{B}$.</div>
        <div class="note warn"><b class="lbl">Dos flechas y un solo vector</b>
        En los dos dibujos la flecha de $\vec v$ va del origen al mismo punto del plano. Los números $(4,-1)$ y $(2,1)$ describen <em>el mismo vector</em> en dos sistemas distintos. Decir «el vector cambió» es el malentendido que el ejercicio busca descartar.</div>`,
        resultado: tex`En los ejes canónicos, $\vec v = 4(1,0) - 1(0,1)$, y el rectángulo auxiliar da $[\vec v]_C = (4,-1)$. En los ejes de $\mathcal{B}$, $\vec v = 2(1,-1) + 1(2,1)$, y el <strong>paralelogramo</strong> auxiliar (ejes oblicuos) da $[\vec v]_{\mathcal{B}} = (2,1)$. Es el mismo vector medido contra ejes distintos.` },

      { id: 'f1-2b', rot: 'b', enunciado: tex`Verificar <strong>algebraicamente</strong> el resultado obtenido en a).`,
        conceptos: ['u5-calcular-coordenadas', 'u4-teorema-21'],
        pista: tex`Planteá el sistema $\alpha\,\vec b_1 + \beta\,\vec b_2 = \vec v$ y resolvelo. El gráfico sugiere la respuesta; el sistema la demuestra.`,
        resolucion: tex`<h3>El sistema</h3>
        <p>Por definición, las coordenadas en $\mathcal{B}$ son los escalares de la combinación lineal ([[u5-calcular-coordenadas]]):</p>
        <div class="fx center">$$\alpha\,(1,-1) + \beta\,(2,1) = (4,\, -1)$$</div>
        <div class="fx center">$$\begin{cases} \alpha + 2\beta = 4 \\ -\alpha + \beta = -1 \end{cases}$$</div>
        <p>Sumando las dos ecuaciones (se cancela $\alpha$):</p>
        <div class="fx center">$$3\beta = 3 \;\Longrightarrow\; \beta = 1 \;\Longrightarrow\; \alpha = 4 - 2(1) = 2$$</div>
        <div class="fx center">$$\boxed{[\vec v]_{\mathcal{B}} = (2,\, 1)}$$</div>
        <p>que es exactamente lo que daba el gráfico del inciso (a) ✓</p>

        <h3>Verificación</h3>
        <div class="fx center">$$2(1,-1) + 1(2,1) = (2,-2) + (2,1) = (4,\, -1) = \vec v \;✓$$</div>

        <h3>En forma matricial</h3>
        <p>El mismo cálculo escrito como un producto, que es la forma que conviene cuando hay varios vectores que convertir:</p>
        <div class="fx center">$$\underbrace{\begin{pmatrix} 1 & 2 \\ -1 & 1 \end{pmatrix}}_{[\;]_{\mathcal{B}C}}\begin{pmatrix} \alpha \\ \beta \end{pmatrix} = \begin{pmatrix} 4 \\ -1 \end{pmatrix}$$</div>
        <p>La matriz tiene por columnas los vectores de $\mathcal{B}$ escritos en la canónica. Su determinante es</p>
        <div class="fx center">$$\det = (1)(1) - (2)(-1) = 1 + 2 = 3 \neq 0$$</div>
        <p>lo que confirma que $\mathcal{B}$ es base de $\mathbb{R}^2$. Invirtiendo:</p>
        <div class="fx center">$$[\;]_{C\mathcal{B}} = \frac{1}{3}\begin{pmatrix} 1 & -2 \\ 1 & 1 \end{pmatrix}, \qquad
        [\vec v]_{\mathcal{B}} = \frac13\begin{pmatrix} 1 & -2 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 4 \\ -1 \end{pmatrix} = \frac13\begin{pmatrix} 6 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix} \;✓$$</div>
        <div class="note tip"><b class="lbl">Por qué la respuesta es única</b>
        Por el [[u4-teorema-21]], la expresión de un vector como combinación lineal de los elementos de una <strong>base</strong> es única. Eso es lo que permite hablar de «las» coordenadas y lo que garantiza que el gráfico y el sistema tengan que coincidir: no hay dos respuestas posibles. Algebraicamente se refleja en que la matriz de la base es inversible ($\det = 3 \neq 0$), así que el sistema tiene solución única.</div>`,
        resultado: tex`Resolviendo $\alpha(1,-1) + \beta(2,1) = (4,-1)$ sale $\alpha = 2$, $\beta = 1$, o sea $[\vec v]_{\mathcal{B}} = (2,1)$ — coincide con el gráfico. La matriz de la base tiene $\det = 3 \neq 0$, así que la solución es única ([[u4-teorema-21]]).` }
    ]},

  /* --------------------------- 3 --------------------------- */
  { id: 'f1-3', num: '3',
    enunciado: tex`<p><strong>Autovalores y diagonalización:</strong></p>`,
    incisos: [

      { id: 'f1-3ai', rot: 'a.i', enunciado: tex`Sea $T: M_2 \to M_2$. Si el polinomio característico es $P(\lambda) = -\lambda\,(\lambda+1)(\lambda^2+1)$, decir si es verdadero o falso y justificar: <strong>$T$ es diagonalizable.</strong>`,
        conceptos: ['u7-leer-polinomio', 'u7-criterio-diagonalizacion'],
        pista: tex`Fijate en el factor $\lambda^2+1$: ¿tiene raíces reales? ¿Cuántos autovectores reales L.I. se pueden juntar entonces, y cuántos harían falta?`,
        resolucion: tex`<h3>Respuesta: FALSO</h3>
        <p>Primero, el espacio: $M_2$ son las matrices de $2\times2$, así que $\dim M_2 = 4$. Para diagonalizar hacen falta <strong>4 autovectores linealmente independientes</strong> ([[u7-criterio-diagonalizacion]]).</p>

        <h3>Qué autovalores reales hay</h3>
        <p>Leyendo el polinomio factor por factor ([[u7-leer-polinomio]]):</p>
        <div class="fx center">$$P(\lambda) = -\lambda\,(\lambda+1)\,(\lambda^2+1)$$</div>
        <div class="tabla-wrap"><table>
          <thead><tr><th>Factor</th><th>Raíces</th><th>¿Reales?</th><th>Aporte a $m_a$</th></tr></thead>
          <tbody>
            <tr><td>$\lambda$</td><td>$\lambda = 0$</td><td>sí</td><td>1</td></tr>
            <tr><td>$\lambda + 1$</td><td>$\lambda = -1$</td><td>sí</td><td>1</td></tr>
            <tr><td>$\lambda^2 + 1$</td><td>$\lambda = \pm i$</td><td><strong>no</strong></td><td>0 (en $\mathbb{R}$)</td></tr>
          </tbody>
        </table></div>
        <p>El factor $\lambda^2 + 1$ tiene discriminante $\Delta = 0 - 4 = -4 < 0$: es <strong>irreducible en $\mathbb{R}$</strong>. La materia trabaja sobre $\mathbb{R}$, así que esas dos raíces no son autovalores.</p>

        <h3>El conteo que decide</h3>
        <p>Sólo hay dos autovalores reales, $0$ y $-1$, los dos de multiplicidad algebraica $1$. Como $m_g \leq m_a$, cada uno aporta <strong>a lo sumo un</strong> autovector independiente:</p>
        <div class="fx center">$$\text{autovectores L.I. disponibles} \leq 1 + 1 = 2 \; < \; 4 = \dim M_2$$</div>
        <p>No alcanzan. <strong>$T$ no es diagonalizable</strong>, y la causa es la primera de las dos de [[u7-criterio-diagonalizacion]]: <strong>faltan raíces reales</strong> en el polinomio característico.</p>
        <div class="note tip"><b class="lbl">La forma corta de justificarlo</b>
        «Falso: $\lambda^2+1$ no tiene raíces reales ($\Delta < 0$), así que sólo hay 2 autovalores reales, ambos simples; se consiguen a lo sumo 2 autovectores L.I. y harían falta 4, porque $\dim M_2 = 4$.» Con eso está completo. Lo importante es decir <em>cuál</em> de las dos causas es, no sólo que no se puede.</div>
        <div class="note"><b class="lbl">Un detalle de signo del enunciado</b>
        Para una matriz de $4\times4$ el coeficiente principal del polinomio característico es $+1$, no $-1$: de $(-\lambda)^4$ sale $+\lambda^4$. El polinomio dado, $-\lambda(\lambda+1)(\lambda^2+1)$, tiene término principal $-\lambda^4$. Es un descuido de signo del enunciado que <strong>no afecta nada</strong> de lo que se pregunta: las raíces, las multiplicidades y las conclusiones son idénticas, porque el signo global no cambia dónde se anula el polinomio.</div>`,
        resultado: tex`<strong>FALSO.</strong> $\lambda^2+1$ es irreducible en $\mathbb{R}$ ($\Delta = -4 < 0$), así que los únicos autovalores reales son $0$ y $-1$, ambos simples: a lo sumo $1+1 = 2$ autovectores L.I., y hacen falta $4 = \dim M_2$. No es diagonalizable por <strong>falta de raíces reales</strong>.` },

      { id: 'f1-3aii', rot: 'a.ii', enunciado: tex`Decir si es verdadero o falso y justificar: <strong>la multiplicidad geométrica de $\lambda = 0$ es 2.</strong>`,
        conceptos: ['u7-multiplicidades', 'u7-autovalor', 'u7-teorema-multiplicidades'],
        pista: tex`¿Cuál es la multiplicidad <em>algebraica</em> de $\lambda = 0$ en ese polinomio? Y después aplicá la desigualdad del teorema.`,
        resolucion: tex`<h3>Respuesta: FALSO</h3>
        <p>En $P(\lambda) = -\lambda\,(\lambda+1)(\lambda^2+1)$, el factor $\lambda$ aparece <strong>una sola vez</strong> (a la primera potencia). Entonces</p>
        <div class="fx center">$$m_a(0) = 1$$</div>
        <p>Por el [[u7-teorema-multiplicidades]], para todo autovalor vale</p>
        <div class="fx center">$$1 \;\leq\; m_g(\lambda) \;\leq\; m_a(\lambda)$$</div>
        <p>Aplicado a $\lambda = 0$:</p>
        <div class="fx center">$$1 \leq m_g(0) \leq 1 \;\Longrightarrow\; \boxed{m_g(0) = 1}$$</div>
        <p>La desigualdad lo fuerza: no hay margen. La multiplicidad geométrica es $1$, no $2$, así que la afirmación es <strong>falsa</strong>.</p>
        <div class="note tip"><b class="lbl">Regla práctica para autovalores simples</b>
        Si $m_a(\lambda) = 1$, entonces necesariamente $m_g(\lambda) = 1$: queda «apretada» entre $1$ y $1$. Las multiplicidades sólo pueden diferir en los autovalores <strong>repetidos</strong>, y por eso ésos son los únicos que hay que examinar al decidir si algo es diagonalizable.</div>
        <div class="note"><b class="lbl">Qué sí es cierto sobre $\lambda = 0$</b>
        $m_g(0) = \dim E_0 = \dim \operatorname{Nuc}(T) = 1$: el núcleo de $T$ es una recta (un subespacio de dimensión 1 de $M_2$), no un plano. Que $0$ sea autovalor es lo que hace que el núcleo no sea trivial, y es la clave del inciso siguiente.</div>`,
        resultado: tex`<strong>FALSO.</strong> El factor $\lambda$ aparece a la primera potencia, así que $m_a(0) = 1$; y como $1 \leq m_g \leq m_a$, resulta $m_g(0) = 1 \neq 2$.` },

      { id: 'f1-3aiii', rot: 'a.iii', enunciado: tex`Decir si es verdadero o falso y justificar: $\;\bigl|[T]_C\bigr| = 0$.`,
        conceptos: ['u7-teorema-resumen', 'u7-polinomio-caracteristico'],
        pista: tex`¿Es $0$ un autovalor? Mirá el ítem 12 del teorema resumen. O, más directo todavía: evaluá $P(0)$.`,
        resolucion: tex`<h3>Respuesta: VERDADERO</h3>
        <p>Hay dos caminos, los dos cortos.</p>

        <h3>Camino 1 — Evaluar el polinomio en $0$</h3>
        <p>Por definición, $P(\lambda) = \det\bigl([T]_C - \lambda I\bigr)$ ([[u7-polinomio-caracteristico]]). Poniendo $\lambda = 0$:</p>
        <div class="fx center">$$P(0) = \det\bigl([T]_C - 0 \cdot I\bigr) = \det [T]_C$$</div>
        <p>Y del polinomio dado:</p>
        <div class="fx center">$$P(0) = -0 \cdot (0+1)(0^2+1) = 0$$</div>
        <div class="fx center">$$\Longrightarrow \; \det [T]_C = 0 \;✓$$</div>

        <h3>Camino 2 — El teorema resumen</h3>
        <p>$\lambda = 0$ <strong>es</strong> autovalor (es raíz de $P$). El ítem 12 del [[u7-teorema-resumen]] dice «cero no es autovalor de $A$», y acá <em>falla</em>. Como los doce ítems son equivalentes, al fallar uno fallan todos: en particular falla el ítem 8, que afirma $\det A \neq 0$. Por lo tanto</p>
        <div class="fx center">$$\det [T]_C = 0$$</div>
        <p>Dicho de otro modo: $[T]_C$ <strong>no</strong> es invertible, $T$ no es isomorfismo, $\operatorname{Nuc}(T) \neq \{0\}$, el rango es menor que $4$ y el sistema homogéneo tiene soluciones no triviales — todas las negaciones, juntas.</p>

        <h3>Control por el producto de los autovalores</h3>
        <p>El determinante es el producto de las cuatro raíces del polinomio característico (contando las complejas):</p>
        <div class="fx center">$$0 \cdot (-1) \cdot i \cdot (-i) = 0 \;✓$$</div>
        <p>El factor $0$ se come todo el producto, sin importar los demás.</p>
        <div class="note tip"><b class="lbl">La bisagra de los tres ítems</b>
        Los tres verdadero/falso de este ejercicio salen de leer el <strong>mismo</strong> polinomio con tres preguntas distintas: el factor irreducible decide la diagonalización (a.i), la potencia de $\lambda$ decide la multiplicidad (a.ii) y la presencia del $\lambda$ decide el determinante (a.iii). Nunca hay que calcular una matriz.</div>`,
        resultado: tex`<strong>VERDADERO.</strong> $\det[T]_C = P(0) = -0\cdot(1)(1) = 0$. Equivalentemente: $0$ es autovalor, así que falla el ítem 12 del teorema resumen y con él los doce — en particular $\det = 0$ y $[T]_C$ no es invertible.` },

      { id: 'f1-3bi', rot: 'b.i', enunciado: tex`Sea $T: \mathbb{R}^3 \to \mathbb{R}^3$ con $T(a) = 2a$, $\;T(b) = -b$, $\;T(c) = -a + b$, siendo $a$ y $b$ linealmente independientes. ¿Es $B = \{a,b,c\}$ base? Justifique.`,
        conceptos: ['u4-li-ld', 'u4-teorema-26', 'u4-base'],
        pista: tex`Suponé que $c$ dependiera de $a$ y $b$ y aplicá $T$: la linealidad deja una sola posibilidad. Después preguntate si en ese caso los datos alcanzarían para definir $T$.`,
        resolucion: tex`<h3>Respuesta: SÍ, es base</h3>
        <p>$B$ tiene tres vectores y $\dim \mathbb{R}^3 = 3$, así que por el [[u4-teorema-26]] basta mostrar que son <strong>linealmente independientes</strong> ([[u4-base]]).</p>

        <h3>Paso 1 — $a$ y $b$ son L.I. (y además se entiende por qué)</h3>
        <p>Es dato del enunciado. Pero no es un dato arbitrario: $a$ y $b$ son autovectores de autovalores <strong>distintos</strong> ($2$ y $-1$), y los autovectores de autovalores distintos son siempre linealmente independientes. El enunciado lo da explícito para que no haya que invocar ese teorema.</p>

        <h3>Paso 2 — ¿Puede $c$ depender de $a$ y $b$?</h3>
        <p>Supongamos que sí: $\;c = \alpha a + \beta b$ para ciertos escalares. Aplicando $T$ y usando la linealidad:</p>
        <div class="fx center">$$T(c) = \alpha\,T(a) + \beta\,T(b) = \alpha(2a) + \beta(-b) = 2\alpha\,a - \beta\,b$$</div>
        <p>Pero el dato es $T(c) = -a + b$. Igualando y usando que $a, b$ son L.I. (los coeficientes tienen que coincidir uno a uno):</p>
        <div class="fx center">$$2\alpha = -1 \;\Longrightarrow\; \alpha = -\tfrac12, \qquad -\beta = 1 \;\Longrightarrow\; \beta = -1$$</div>
        <p>O sea: la <strong>única</strong> dependencia posible sería $c = -\tfrac12 a - b$.</p>

        <h3>Paso 3 — Por qué ese caso queda descartado</h3>
        <p>Si fuera $c = -\tfrac12 a - b$, entonces $a$, $b$ y $c$ vivirían todos en el plano $\operatorname{gen}\{a,b\}$, de dimensión $2$. Pero entonces los tres datos del enunciado describirían a $T$ <strong>sólo sobre ese plano</strong>, y no habría información sobre el resto de $\mathbb{R}^3$: el enunciado «sea $T: \mathbb{R}^3 \to \mathbb{R}^3$ <em>tal que</em> $T(a) = 2a$, $T(b) = -b$, $T(c) = -a+b$» no definiría ninguna transformación de $\mathbb{R}^3$ en $\mathbb{R}^3$.</p>
        <p>Para que los datos determinen $T$ en todo $\mathbb{R}^3$, los tres vectores tienen que generar $\mathbb{R}^3$. Por lo tanto $c \notin \operatorname{gen}\{a,b\}$, los tres son L.I. ([[u4-li-ld]]) y</p>
        <div class="fx center">$$\boxed{B = \{a,\, b,\, c\} \text{ es base de } \mathbb{R}^3}$$</div>
        <div class="note warn"><b class="lbl">Qué hay que decir y qué no alcanza</b>
        No alcanza con «son tres vectores en $\mathbb{R}^3$, entonces son base»: tres vectores pueden ser L.D. (por ejemplo si uno es suma de los otros). El paso que hay que mostrar es el 2: aplicarle $T$ a la supuesta combinación y ver qué fuerza la linealidad. Ése es el razonamiento que se evalúa.</div>
        <div class="note tip"><b class="lbl">Para qué sirve esto</b>
        Con $B$ base ya se puede escribir $[T]_B$, que es lo que pide el inciso siguiente. Sin saber que $B$ es base no habría matriz asociada en esa base y el ejercicio no podría continuar — otra señal de cuál es la respuesta esperada.</div>`,
        resultado: tex`<strong>Sí.</strong> La única dependencia posible sería $c = -\tfrac12 a - b$ (aplicando $T$ a $c = \alpha a + \beta b$ sale $\alpha = -\tfrac12$, $\beta = -1$); pero en ese caso los tres vectores generarían sólo un plano y los datos no definirían $T$ en todo $\mathbb{R}^3$. Luego $c \notin \operatorname{gen}\{a,b\}$ y $B$ es base.` },

      { id: 'f1-3bii', rot: 'b.ii', enunciado: tex`Enuncie justificadamente los <strong>autovalores</strong> de la transformación.`,
        conceptos: ['u7-sin-calcular', 'u7-autovalor', 'u7-polinomio-caracteristico'],
        pista: tex`Dos autovalores se leen directo de los datos. Para el tercero, armá $[T]_B$ y mirá su forma — o buscá el núcleo.`,
        resolucion: tex`<h3>Dos autovalores están a la vista</h3>
        <p>Por la definición de [[u7-autovalor]], $T(v) = \lambda v$ con $v \neq \vec 0$:</p>
        <ul>
          <li>$T(a) = 2a \;\Longrightarrow\; \boxed{\lambda_1 = 2}$, con autovector $a$</li>
          <li>$T(b) = -b \;\Longrightarrow\; \boxed{\lambda_2 = -1}$, con autovector $b$</li>
        </ul>
        <p>Los dos se leen directamente de los datos, sin ninguna cuenta ([[u7-sin-calcular]]).</p>

        <h3>El tercero, con la matriz en la base $B$</h3>
        <p>Como $B = \{a,b,c\}$ es base (inciso b.i), se puede armar $[T]_B$ poniendo por columnas las coordenadas de las imágenes:</p>
        <div class="fx center">$$T(a) = 2a \to (2,0,0), \quad T(b) = -b \to (0,-1,0), \quad T(c) = -a+b \to (-1,1,0)$$</div>
        <div class="fx center">$$[T]_B = \begin{pmatrix} 2 & 0 & -1 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$</div>
        <p>Es <strong>triangular superior</strong>, así que su polinomio característico es el producto de los factores de la diagonal:</p>
        <div class="fx center">$$P(\lambda) = (2-\lambda)(-1-\lambda)(0-\lambda) = -\lambda\,(2-\lambda)(-1-\lambda)$$</div>
        <div class="fx center">$$\boxed{\lambda_1 = 2, \qquad \lambda_2 = -1, \qquad \lambda_3 = 0}$$</div>
        <p>(Los autovalores no dependen de la base elegida: $[T]_B$ y $[T]_C$ son semejantes y tienen el mismo polinomio característico.)</p>

        <h3>Justificación del tercero sin polinomio</h3>
        <p>Vale la pena verlo también a mano, porque es la forma de justificarlo sin escribir la matriz. $\lambda = 0$ es autovalor $\iff$ existe $v \neq \vec 0$ con $T(v) = \vec 0$. Tomando $v = \alpha a + \beta b + \gamma c$ y usando linealidad:</p>
        <div class="fx center">$$T(v) = \alpha(2a) + \beta(-b) + \gamma(-a+b) = (2\alpha - \gamma)\,a + (\gamma - \beta)\,b$$</div>
        <p>Igualando a $\vec 0$ y usando que $a,b$ son L.I.:</p>
        <div class="fx center">$$2\alpha - \gamma = 0 \;\;\text{y}\;\; \gamma - \beta = 0 \;\Longrightarrow\; \gamma = 2\alpha, \;\; \beta = 2\alpha$$</div>
        <p>Con $\alpha = 1$: $\;v = a + 2b + 2c \neq \vec 0$, y</p>
        <div class="fx center">$$T(a + 2b + 2c) = 2a + 2(-b) + 2(-a+b) = 2a - 2b - 2a + 2b = \vec 0 \;✓$$</div>
        <p>Entonces $\lambda_3 = 0$, con autovector $a + 2b + 2c$.</p>

        <h3>Controles</h3>
        <p><strong>Traza:</strong> $\;2 + (-1) + 0 = 1 = \operatorname{tr}[T]_B = 2 - 1 + 0$ ✓</p>
        <p><strong>Determinante:</strong> $\;2 \cdot (-1) \cdot 0 = 0$, y $\det[T]_B = 0$ porque la tercera fila es nula ✓</p>
        <div class="note tip"><b class="lbl">Diagonalizable, de paso</b>
        Los tres autovalores son <strong>distintos</strong> ($2$, $-1$, $0$), así que por el corolario de [[u7-criterio-diagonalizacion]] $T$ <em>es</em> diagonalizable, con base de autovectores $\{a,\; b,\; a+2b+2c\}$ y forma diagonal $\operatorname{diag}(2,-1,0)$.</div>
        <div class="note"><b class="lbl">El $0$ no es casualidad</b>
        $T(c) = -a + b$ no es múltiplo de $c$, así que $c$ no es autovector; pero la combinación $a + 2b + 2c$ sí cae en el núcleo. Que $0$ sea autovalor dice que $T$ no es inyectiva y que $\det[T]_B = 0$: todos los ítems del teorema resumen fallan para esta transformación.</div>`,
        resultado: tex`$\lambda_1 = 2$ (autovector $a$) y $\lambda_2 = -1$ (autovector $b$) se leen de los datos; y $\lambda_3 = 0$, con autovector $a + 2b + 2c$, porque $[T]_B = \begin{pmatrix} 2 & 0 & -1 \\ 0 & -1 & 1 \\ 0 & 0 & 0\end{pmatrix}$ es triangular con un $0$ en la diagonal. Controles: traza $1$ ✓, determinante $0$ ✓` }
    ]}
]});

/* ============================================================
   Final — 3/8/26
   ============================================================ */
EAL.examen({
  id: 'final-2026-08-03', tipo: 'final', sigla: 'F2',
  titulo: 'Final — 3/8/26',
  fecha: '3 de agosto de 2026',
  carrera: 'LSI · LCC',
  resumen: 'Puntos de una recta a distancia dada, ángulo entre planos con parámetro y demostración de la fórmula recta-plano, dos diagonalizaciones comparadas y una transformación en base abstracta.',
  unidades: ['u3', 'u7', 'u6'],
  nota: tex`<b class="lbl">Ojo con el ejercicio 2.b</b> Pide <strong>demostrar</strong>, no aplicar, la fórmula del ángulo entre recta y plano. Está desarrollada en [[u3-angulo-recta-plano]].<br><br>
  <b class="lbl">Y con el ejercicio 3</b> Las dos matrices difieren en una sola fila, y <em>ninguna</em> de las dos es diagonalizable — pero por <strong>causas distintas</strong>. Es el ítem que mide si se entendió la diferencia entre las dos razones de [[u7-criterio-diagonalizacion]].`,

  ejercicios: [

  /* --------------------------- 1 --------------------------- */
  { id: 'f2-1', num: '1',
    enunciado: tex`<p>Sean las rectas $\;l: \dfrac{x-1}{2} = y + 2 = -z\;$ y $\;m: (x,y,z) = (2,-1,2) + \alpha\,(1,1,0)$, con $\alpha \in \mathbb{R}$.</p>
    <div class="note tip"><b class="lbl">Cómo leer la forma simétrica de $l$</b> Escrita completa es $\dfrac{x-1}{2} = \dfrac{y+2}{1} = \dfrac{z}{-1}$, de donde $P_l = (1,-2,0)$ y $\vec d_l = (2,1,-1)$. El $-z$ del enunciado es $\dfrac{z-0}{-1}$.</div>`,
    incisos: [

      { id: 'f2-1a', rot: 'a', enunciado: tex`Escribir en función de un parámetro $\gamma \in \mathbb{R}$ todos los puntos de la recta $l$.`,
        conceptos: ['u3-recta-vectorial'],
        resolucion: tex`<p>Igualando las tres fracciones al parámetro $\gamma$:</p>
        <div class="fx center">$$\frac{x-1}{2} = \frac{y+2}{1} = \frac{z}{-1} = \gamma$$</div>
        <p>y despejando cada coordenada ([[u3-recta-vectorial]]):</p>
        <div class="fx center">$$x = 1 + 2\gamma, \qquad y = -2 + \gamma, \qquad z = -\gamma$$</div>
        <div class="fx center">$$\boxed{P(\gamma) = (1 + 2\gamma,\;\; -2 + \gamma,\;\; -\gamma), \qquad \gamma \in \mathbb{R}}$$</div>
        <p>o en forma vectorial, $\;(x,y,z) = (1,-2,0) + \gamma\,(2,1,-1)$.</p>
        <h3>Verificación</h3>
        <p>Dos puntos cualesquiera, chequeados contra la forma simétrica original:</p>
        <ul>
          <li>$\gamma = 0$: $\;P = (1,-2,0)$. $\;\frac{1-1}{2} = 0$, $\;-2+2 = 0$, $\;-0 = 0$ ✓</li>
          <li>$\gamma = 1$: $\;P = (3,-1,-1)$. $\;\frac{3-1}{2} = 1$, $\;-1+2 = 1$, $\;-(-1) = 1$ ✓</li>
        </ul>
        <div class="note tip"><b class="lbl">Para qué sirve este inciso</b>
        Es el inciso «de servicio»: los tres que siguen trabajan sobre esta parametrización. Tener el punto genérico escrito prolijamente es lo que hace que (b), (c) y (d) sean sólo cuentas.</div>`,
        resultado: tex`$P(\gamma) = (1+2\gamma,\; -2+\gamma,\; -\gamma)$ con $\gamma \in \mathbb{R}$; es decir $(x,y,z) = (1,-2,0) + \gamma(2,1,-1)$.` },

      { id: 'f2-1b', rot: 'b', enunciado: tex`Hallar todos los puntos de $l$ que tienen <strong>distancia 3</strong> al punto $Q = (3,0,1)$.`,
        conceptos: ['u1-distancia-puntos', 'u3-recta-vectorial', 'u2-equidistancia'],
        pista: tex`Planteá $\|P(\gamma) - Q\|^2 = 9$ (al cuadrado, para no arrastrar la raíz) y resolvé la cuadrática en $\gamma$.`,
        resolucion: tex`<p>Se impone la condición sobre el punto genérico ([[u1-distancia-puntos]]). Conviene trabajar con el <strong>cuadrado</strong> de la distancia para no arrastrar la raíz:</p>
        <div class="fx center">$$P(\gamma) - Q = (1+2\gamma - 3,\;\; -2+\gamma - 0,\;\; -\gamma - 1) = (2\gamma - 2,\;\; \gamma - 2,\;\; -\gamma - 1)$$</div>
        <div class="fx center">$$\|P(\gamma) - Q\|^2 = (2\gamma-2)^2 + (\gamma-2)^2 + (\gamma+1)^2 = 9$$</div>
        <p>Desarrollando cada cuadrado:</p>
        <div class="fx center">$$(4\gamma^2 - 8\gamma + 4) + (\gamma^2 - 4\gamma + 4) + (\gamma^2 + 2\gamma + 1) = 6\gamma^2 - 10\gamma + 9$$</div>
        <div class="fx center">$$6\gamma^2 - 10\gamma + 9 = 9 \;\Longrightarrow\; 6\gamma^2 - 10\gamma = 0 \;\Longrightarrow\; 2\gamma\,(3\gamma - 5) = 0$$</div>
        <div class="fx center">$$\gamma_1 = 0, \qquad \gamma_2 = \frac{5}{3}$$</div>
        <p>Evaluando en la parametrización:</p>
        <div class="fx center">$$\boxed{P_1 = (1,\, -2,\, 0)} \qquad\qquad \boxed{P_2 = \left(\frac{13}{3},\; -\frac13,\; -\frac53\right)}$$</div>

        <h3>Verificaciones</h3>
        <p><strong>$P_1 = (1,-2,0)$:</strong></p>
        <div class="fx center">$$P_1 - Q = (-2,\, -2,\, -1), \qquad \|P_1 - Q\| = \sqrt{4+4+1} = \sqrt9 = 3 \;✓$$</div>
        <p><strong>$P_2$:</strong></p>
        <div class="fx center">$$P_2 - Q = \left(\tfrac{13}{3} - 3,\; -\tfrac13,\; -\tfrac53 - 1\right) = \left(\tfrac43,\; -\tfrac13,\; -\tfrac83\right)$$</div>
        <div class="fx center">$$\|P_2 - Q\|^2 = \frac{16 + 1 + 64}{9} = \frac{81}{9} = 9 \;\Longrightarrow\; \|P_2 - Q\| = 3 \;✓$$</div>
        <div class="note tip"><b class="lbl">Por qué hay exactamente dos</b>
        Geométricamente: la esfera de centro $Q$ y radio $3$ corta a la recta $l$ en dos puntos. La cuadrática en $\gamma$ refleja eso. Si hubiera dado discriminante nulo, la esfera sería tangente (un punto); si negativo, la recta pasaría a más de $3$ de $Q$ y no habría ninguno. Vale la pena nombrar el caso, porque el enunciado dice «todos los puntos» precisamente para ver si se dan los dos.</div>
        <div class="note"><b class="lbl">Que $\gamma = 0$ sea solución es cómodo</b>
        Significa que el punto base de la parametrización, $(1,-2,0)$, ya está a distancia $3$ de $Q$. Ese mismo punto vuelve a aparecer en el inciso (c), lo que sirve de control cruzado.</div>`,
        resultado: tex`$\gamma = 0$ y $\gamma = \tfrac53$, de $6\gamma^2 - 10\gamma = 0$: los puntos son $(1,-2,0)$ y $\left(\tfrac{13}{3}, -\tfrac13, -\tfrac53\right)$, ambos verificados a distancia exactamente $3$ de $Q$.` },

      { id: 'f2-1c', rot: 'c', enunciado: tex`Determinar todos los puntos de $l$ que tienen <strong>distancia 2</strong> a la recta $m$.`,
        conceptos: ['u3-dist-punto-recta', 'u1-producto-vectorial'],
        pista: tex`Misma idea que (b), pero la distancia es ahora punto-a-recta: $\dfrac{\|\overrightarrow{MP} \times \vec d_m\|}{\|\vec d_m\|}$. El producto vectorial se calcula con $\gamma$ adentro.`,
        resolucion: tex`<p>De $m$: punto $M = (2,-1,2)$ y director $\vec d_m = (1,1,0)$, con $\|\vec d_m\| = \sqrt2$.</p>
        <p>Por [[u3-dist-punto-recta]], la distancia del punto genérico de $l$ a la recta $m$ es</p>
        <div class="fx center">$$d\bigl(P(\gamma),\, m\bigr) = \frac{\bigl\|\overrightarrow{MP(\gamma)} \times \vec d_m\bigr\|}{\|\vec d_m\|}$$</div>

        <h3>Paso 1 — El producto vectorial con $\gamma$ adentro</h3>
        <div class="fx center">$$\overrightarrow{MP(\gamma)} = (1+2\gamma - 2,\;\; -2+\gamma+1,\;\; -\gamma - 2) = (2\gamma - 1,\;\; \gamma - 1,\;\; -\gamma - 2)$$</div>
        <div class="fx center">$$\overrightarrow{MP} \times \vec d_m = \begin{vmatrix} \breve i & \breve j & \breve k \\ 2\gamma-1 & \gamma-1 & -\gamma-2 \\ 1 & 1 & 0 \end{vmatrix}$$</div>
        <div class="fx center">$$= \breve i\bigl[(\gamma-1)(0) - (-\gamma-2)(1)\bigr] - \breve j\bigl[(2\gamma-1)(0) - (-\gamma-2)(1)\bigr] + \breve k\bigl[(2\gamma-1) - (\gamma-1)\bigr]$$</div>
        <div class="fx center">$$= \bigl(\gamma + 2,\;\; -(\gamma+2),\;\; \gamma\bigr)$$</div>

        <h3>Paso 2 — Imponer la distancia</h3>
        <div class="fx center">$$\bigl\|\overrightarrow{MP} \times \vec d_m\bigr\|^2 = (\gamma+2)^2 + (\gamma+2)^2 + \gamma^2 = 2(\gamma+2)^2 + \gamma^2$$</div>
        <div class="fx center">$$d^2 = \frac{2(\gamma+2)^2 + \gamma^2}{2} = 4 \;\Longrightarrow\; 2(\gamma+2)^2 + \gamma^2 = 8$$</div>
        <div class="fx center">$$2(\gamma^2 + 4\gamma + 4) + \gamma^2 = 8 \;\Longrightarrow\; 3\gamma^2 + 8\gamma + 8 = 8 \;\Longrightarrow\; 3\gamma^2 + 8\gamma = 0$$</div>
        <div class="fx center">$$\gamma\,(3\gamma + 8) = 0 \;\Longrightarrow\; \gamma_1 = 0, \qquad \gamma_2 = -\frac83$$</div>
        <div class="fx center">$$\boxed{P_1 = (1,\, -2,\, 0)} \qquad\qquad \boxed{P_2 = \left(-\frac{13}{3},\; -\frac{14}{3},\; \frac83\right)}$$</div>

        <h3>Verificaciones</h3>
        <p><strong>$P_1 = (1,-2,0)$:</strong> $\;\overrightarrow{MP_1} = (-1,-1,-2)$, y</p>
        <div class="fx center">$$(-1,-1,-2) \times (1,1,0) = (2,\, -2,\, 0), \qquad \|(2,-2,0)\| = \sqrt8 = 2\sqrt2$$</div>
        <div class="fx center">$$d = \frac{2\sqrt2}{\sqrt2} = 2 \;✓$$</div>
        <p><strong>$P_2$:</strong> $\;\overrightarrow{MP_2} = \left(-\tfrac{19}{3},\, -\tfrac{11}{3},\, \tfrac23\right)$, y</p>
        <div class="fx center">$$\overrightarrow{MP_2} \times (1,1,0) = \left(-\tfrac23,\; \tfrac23,\; -\tfrac83\right), \qquad \text{norma}^2 = \frac{4+4+64}{9} = 8$$</div>
        <div class="fx center">$$d = \frac{\sqrt8}{\sqrt2} = \sqrt4 = 2 \;✓$$</div>
        <div class="note tip"><b class="lbl">El punto que aparece en los dos incisos</b>
        $(1,-2,0)$ sale como solución tanto en (b) como en (c): está a distancia $3$ de $Q$ <em>y</em> a distancia $2$ de $m$. No es una casualidad del enunciado sino de los números elegidos, y funciona como control: si uno de los dos incisos no lo hubiera dado, habría un error en alguno.</div>`,
        resultado: tex`$\gamma = 0$ y $\gamma = -\tfrac83$, de $3\gamma^2 + 8\gamma = 0$: los puntos son $(1,-2,0)$ y $\left(-\tfrac{13}{3}, -\tfrac{14}{3}, \tfrac83\right)$, los dos verificados a distancia $2$ de $m$.` },

      { id: 'f2-1d', rot: 'd', enunciado: tex`Estudiar la <strong>posición relativa</strong> de las dos rectas y dar su distancia.`,
        conceptos: ['u3-teorema-7', 'u3-dist-rectas-alabeadas', 'u3-alabeadas'],
        resolucion: tex`<h3>Paso 1 — ¿Paralelas?</h3>
        <p>$\vec d_l = (2,1,-1)$ y $\vec d_m = (1,1,0)$: no son múltiplos (la tercera componente de $\vec d_m$ es $0$ y la de $\vec d_l$ no). <strong>No son paralelas.</strong></p>

        <h3>Paso 2 — El producto mixto</h3>
        <p>Con $P_l = (1,-2,0)$ y $M = (2,-1,2)$:</p>
        <div class="fx center">$$\overrightarrow{P_l M} = (2-1,\;\; -1+2,\;\; 2-0) = (1,\, 1,\, 2)$$</div>
        <div class="fx center">$$\begin{vmatrix} 1 & 1 & 2 \\ 2 & 1 & -1 \\ 1 & 1 & 0 \end{vmatrix}
        = 1\bigl(1\cdot0 - (-1)(1)\bigr) - 1\bigl(2\cdot0 - (-1)(1)\bigr) + 2\bigl(2 - 1\bigr)$$</div>
        <div class="fx center">$$= 1(1) - 1(1) + 2(1) = 1 - 1 + 2 = 2 \neq 0$$</div>
        <p>No coplanares ⟹ por el [[u3-teorema-7]], las rectas son <strong>alabeadas</strong> ([[u3-alabeadas]]): no son paralelas y no se cortan.</p>

        <h3>Paso 3 — La distancia</h3>
        <div class="fx center">$$\vec d_l \times \vec d_m = \begin{vmatrix} \breve i & \breve j & \breve k \\ 2 & 1 & -1 \\ 1 & 1 & 0 \end{vmatrix}
        = \breve i(0 + 1) - \breve j(0 + 1) + \breve k(2 - 1) = (1,\, -1,\, 1)$$</div>
        <div class="fx center">$$\|\vec d_l \times \vec d_m\| = \sqrt{1+1+1} = \sqrt3$$</div>
        <p>Por [[u3-dist-rectas-alabeadas]]:</p>
        <div class="fx center">$$d(l,m) = \frac{\bigl|\overrightarrow{P_lM} \cdot (\vec d_l \times \vec d_m)\bigr|}{\|\vec d_l \times \vec d_m\|} = \frac{|2|}{\sqrt3} = \frac{2}{\sqrt3} = \frac{2\sqrt3}{3} \approx 1{,}15$$</div>
        <p>Control del numerador: $(1,1,2)\cdot(1,-1,1) = 1 - 1 + 2 = 2$ ✓, el mismo valor que el determinante.</p>

        <h3>Control cruzado con el inciso (c)</h3>
        <p>La distancia entre las rectas es $\tfrac{2}{\sqrt3} \approx 1{,}15$, que es la <strong>mínima</strong> distancia de cualquier punto de $l$ a $m$. En (c) se buscaron los puntos a distancia $2$, y</p>
        <div class="fx center">$$2 > \frac{2}{\sqrt3} \approx 1{,}15 \;✓$$</div>
        <p>Siendo $2$ mayor que el mínimo, era de esperar que hubiera <strong>dos</strong> soluciones (una a cada lado del punto más cercano), y eso es exactamente lo que dio. Si se hubiera pedido distancia $1$, menor que el mínimo, no habría habido ninguna.</p>
        <div class="note tip"><b class="lbl">Un ejercicio con los cuatro incisos encadenados</b>
        (a) da la parametrización, (b) y (c) la usan para imponer condiciones, y (d) explica por qué (c) tenía dos soluciones. Vale la pena hacerlos en orden y reutilizar las cuentas: $\vec d_l \times \vec d_m$ de (d) y el producto vectorial de (c) son operaciones con los mismos vectores.</div>`,
        resultado: tex`<strong>Alabeadas</strong>: directores no paralelos y producto mixto $= 2 \neq 0$. $d(l,m) = \dfrac{2}{\sqrt3} = \dfrac{2\sqrt3}{3} \approx 1{,}15$, con $\vec d_l \times \vec d_m = (1,-1,1)$. Como $2 > \tfrac{2}{\sqrt3}$, es coherente que (c) tenga dos soluciones.` }
    ]},

  /* --------------------------- 2 --------------------------- */
  { id: 'f2-2', num: '2',
    enunciado: tex`<p><strong>Ángulos:</strong></p>`,
    incisos: [

      { id: 'f2-2a', rot: 'a', enunciado: tex`Calcular el valor de $m \in \mathbb{R}$ para que el plano $\pi_1: x + y + 10 = 0$ y el plano $\pi_2: m\,x + y + z + 5 = 0$ formen un ángulo de $45°$.`,
        conceptos: ['u3-angulo-planos', 'u1-producto-escalar'],
        pista: tex`$\cos 45° = \tfrac{\sqrt2}{2} = \tfrac{1}{\sqrt2}$. Al elevar al cuadrado los $m^2$ se cancelan y queda una ecuación <em>lineal</em>.`,
        resolucion: tex`<h3>Los normales</h3>
        <p>$\vec n_1 = (1,\, 1,\, 0)$ y $\vec n_2 = (m,\, 1,\, 1)$, con</p>
        <div class="fx center">$$\|\vec n_1\| = \sqrt2, \qquad \|\vec n_2\| = \sqrt{m^2 + 2}, \qquad \vec n_1 \cdot \vec n_2 = m + 1$$</div>

        <h3>La ecuación</h3>
        <p>Por [[u3-angulo-planos]], el ángulo entre dos planos es el ángulo entre sus normales:</p>
        <div class="fx center">$$\cos 45° = \frac{|\vec n_1 \cdot \vec n_2|}{\|\vec n_1\|\,\|\vec n_2\|} \;\Longrightarrow\; \frac{1}{\sqrt2} = \frac{|m+1|}{\sqrt2 \cdot \sqrt{m^2+2}}$$</div>
        <p>Los $\sqrt2$ se cancelan:</p>
        <div class="fx center">$$|m + 1| = \sqrt{m^2 + 2}$$</div>
        <p>Elevando al cuadrado (los dos miembros son $\geq 0$):</p>
        <div class="fx center">$$m^2 + 2m + 1 = m^2 + 2 \;\Longrightarrow\; 2m = 1 \;\Longrightarrow\; \boxed{m = \frac12}$$</div>

        <h3>Verificación</h3>
        <p>Con $m = \tfrac12$: $\;\vec n_2 = \left(\tfrac12, 1, 1\right)$, y</p>
        <div class="fx center">$$\vec n_1 \cdot \vec n_2 = \tfrac12 + 1 = \tfrac32, \qquad \|\vec n_2\| = \sqrt{\tfrac14 + 1 + 1} = \sqrt{\tfrac94} = \tfrac32$$</div>
        <div class="fx center">$$\cos\theta = \frac{3/2}{\sqrt2 \cdot 3/2} = \frac{1}{\sqrt2} = \frac{\sqrt2}{2} \;\Longrightarrow\; \theta = 45° \;✓$$</div>
        <div class="note tip"><b class="lbl">Por qué acá hay una sola solución y no dos</b>
        En los problemas de ángulo suelen salir dos valores del parámetro, porque la ecuación es cuadrática. Acá los términos $m^2$ se <strong>cancelan</strong> al elevar al cuadrado y queda una ecuación lineal: solución única. Lo que lo provoca es que $\|\vec n_1\| = \sqrt2$ coincida con el $\sqrt2$ que trae el $\cos 45°$. No hay que forzar un segundo valor: si la ecuación quedó lineal, la respuesta es una.</div>
        <div class="note"><b class="lbl">Control de que el ángulo es el agudo</b>
        El valor absoluto en el numerador garantiza $\cos\theta \geq 0$, o sea $\theta \leq 90°$. Dos planos que se cortan determinan dos ángulos suplementarios ($45°$ y $135°$ acá); por convención se da el agudo.</div>`,
        resultado: tex`$m = \tfrac12$, único. La ecuación $|m+1| = \sqrt{m^2+2}$ se vuelve <strong>lineal</strong> al elevar al cuadrado (se cancelan los $m^2$). Verificado: $\cos\theta = \tfrac{3/2}{\sqrt2 \cdot 3/2} = \tfrac{1}{\sqrt2}$.` },

      { id: 'f2-2b', rot: 'b', enunciado: tex`Explique detalladamente <strong>por qué</strong> el ángulo entre una recta $l$ y un plano $\pi$ es
      $$\alpha = \arcsin \frac{\bigl|\vec d_l \cdot \vec n_\pi\bigr|}{\|\vec d_l\| \cdot \|\vec n_\pi\|}$$`,
        conceptos: ['u3-angulo-recta-plano', 'u3-proy-recta-plano', 'u1-teorema-2'],
        pista: tex`Es un «demostrar», no un «calcular». La clave: la fórmula del coseno da el ángulo con el <em>normal</em>, no con el plano. ¿Qué relación hay entre esos dos ángulos?`,
        resolucion: tex`<p>Este ítem pide una <strong>demostración</strong>. El argumento tiene tres pasos.</p>

        <h3>Paso 1 — Qué es, por definición, el ángulo entre recta y plano</h3>
        <p>El ángulo $\alpha$ entre una recta $l$ y un plano $\pi$ se define como el ángulo que forma $l$ con su <strong>proyección ortogonal sobre $\pi$</strong> ([[u3-angulo-recta-plano]]). De todos los ángulos que $l$ forma con las rectas del plano, ése es el <strong>menor</strong>, y por eso se lo toma como el ángulo con el plano. Por construcción $0° \leq \alpha \leq 90°$.</p>

        <h3>Paso 2 — El ángulo que sí sabemos calcular es el que forma con el normal</h3>
        <p>La herramienta disponible es el producto escalar, que por el [[u1-teorema-2]] da el ángulo <strong>entre dos vectores</strong>. Los dos vectores que tenemos son $\vec d_l$ (director de la recta) y $\vec n_\pi$ (normal del plano). Llamando $\theta$ al ángulo entre ellos:</p>
        <div class="fx center">$$\cos\theta = \frac{\bigl|\vec d_l \cdot \vec n_\pi\bigr|}{\|\vec d_l\|\,\|\vec n_\pi\|}$$</div>
        <p>(El valor absoluto es para quedarse con el agudo: $\vec n_\pi$ y $-\vec n_\pi$ describen el mismo plano, así que el signo no es información geométrica.)</p>
        <p>Pero $\theta$ <strong>no</strong> es $\alpha$: es el ángulo con la perpendicular al plano, no con el plano.</p>

        <h3>Paso 3 — La relación entre $\alpha$ y $\theta$: son complementarios</h3>
        <p>Acá está el corazón del argumento. Consideremos el triángulo rectángulo que se forma con:</p>
        <ul>
          <li>un punto $A$ de la recta, fuera del plano;</li>
          <li>su proyección ortogonal $A'$ sobre el plano (que se obtiene bajando en la dirección de $\vec n_\pi$);</li>
          <li>el punto $B$ donde la recta corta al plano.</li>
        </ul>
        <p>En el triángulo $A\,A'\,B$, el ángulo en $A'$ es <strong>recto</strong> (porque $\overrightarrow{AA'}$ es paralelo a $\vec n_\pi$, perpendicular al plano, y $\overrightarrow{A'B}$ está en el plano). Entonces:</p>
        <ul>
          <li>el ángulo en $B$ es $\alpha$: es el que forma la recta $AB$ con su proyección $A'B$, o sea el ángulo recta-plano;</li>
          <li>el ángulo en $A$ es $\theta$: es el que forma la recta con la dirección normal $\overrightarrow{AA'}$.</li>
        </ul>
        <p>Como los tres ángulos de un triángulo suman $180°$ y uno de ellos es $90°$:</p>
        <div class="fx center">$$\alpha + \theta = 90° \;\Longrightarrow\; \alpha = 90° - \theta$$</div>
        <p>Es decir, <strong>$\alpha$ y $\theta$ son complementarios</strong>.</p>

        <h3>Paso 4 — Cerrar con la identidad trigonométrica</h3>
        <p>De $\alpha = 90° - \theta$ y la identidad $\sin(90° - \theta) = \cos\theta$:</p>
        <div class="fx center">$$\sin\alpha = \sin(90° - \theta) = \cos\theta = \frac{\bigl|\vec d_l \cdot \vec n_\pi\bigr|}{\|\vec d_l\|\,\|\vec n_\pi\|}$$</div>
        <p>y aplicando $\arcsin$ a los dos miembros (legítimo porque $0° \leq \alpha \leq 90°$, donde el seno es inyectivo):</p>
        <div class="fx center">$$\boxed{\alpha = \arcsin \frac{\bigl|\vec d_l \cdot \vec n_\pi\bigr|}{\|\vec d_l\|\,\|\vec n_\pi\|}} \qquad \blacksquare$$</div>

        <h3>Los dos casos extremos, que confirman la fórmula</h3>
        <div class="tabla-wrap"><table>
          <thead><tr><th>Situación</th><th>$\vec d_l \cdot \vec n_\pi$</th><th>$\alpha$ por la fórmula</th><th>¿Coherente?</th></tr></thead>
          <tbody>
            <tr><td>$l \parallel \pi$ (o contenida)</td><td>$0$</td><td>$\arcsin 0 = 0°$</td><td>sí: la recta no se inclina respecto del plano</td></tr>
            <tr><td>$l \perp \pi$</td><td>$\vec d_l \parallel \vec n_\pi$, cociente $= 1$</td><td>$\arcsin 1 = 90°$</td><td>sí: la recta entra perpendicular</td></tr>
          </tbody>
        </table></div>

        <div class="note tip"><b class="lbl">La frase que resume la demostración</b>
        «El producto escalar mide el ángulo con el <strong>normal</strong>, no con el plano; y esos dos ángulos son complementarios, porque aparecen como los dos ángulos agudos de un mismo triángulo rectángulo. Por eso donde iría $\arccos$ va $\arcsin$.» Si hay que escribirlo corto, ésa es la idea completa.</div>
        <div class="note warn"><b class="lbl">El error que esta fórmula previene</b>
        Usar $\arccos$ en lugar de $\arcsin$ da el ángulo con el normal, que es el <strong>complemento</strong> del pedido. Por eso la fórmula de recta-plano lleva seno mientras que las de recta-recta y plano-plano llevan coseno: en esos dos casos los objetos que se comparan son del mismo tipo (dos directores o dos normales) y no hace falta el cambio de $90°$.</div>`,
        resultado: tex`Porque el producto escalar sólo da el ángulo $\theta$ entre $\vec d_l$ y $\vec n_\pi$, y ese $\theta$ es el <strong>complementario</strong> de $\alpha$: los dos son ángulos agudos del triángulo rectángulo $A A' B$ (punto de la recta, su proyección sobre $\pi$, e intersección con $\pi$), así que $\alpha + \theta = 90°$. De $\sin\alpha = \sin(90°-\theta) = \cos\theta$ sale la fórmula con $\arcsin$.` }
    ]},

  /* --------------------------- 3 --------------------------- */
  { id: 'f2-3', num: '3',
    enunciado: tex`<p>Sean las siguientes matrices de transformación respecto de la base canónica:</p>
    <div class="fx center">$$\text{a)}\;\; A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & -1 \end{pmatrix}
    \qquad\qquad \text{b)}\;\; B = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -4 & -4 \end{pmatrix}$$</div>
    <div class="note tip"><b class="lbl">La estructura por bloques simplifica todo</b> Las dos matrices tienen la primera fila y la primera columna con ceros fuera de la diagonal. Eso las parte en un bloque $1\times1$ (el $2$) y un bloque $2\times2$ abajo a la derecha: el polinomio característico es el producto de los dos, $\;P(\lambda) = (2-\lambda)\cdot\det(\text{bloque} - \lambda I)$.</div>`,
    incisos: [

      { id: 'f2-3i', rot: 'i', enunciado: tex`Para cada una de ellas calcule el <strong>polinomio característico</strong>, sus <strong>espacios propios</strong> correspondientes y diga si son <strong>diagonalizables</strong>.`,
        conceptos: ['u7-metodo-diagonalizar', 'u7-polinomio-caracteristico', 'u7-criterio-diagonalizacion'],
        pista: tex`Desarrollá por la primera fila. Y cuando tengas los dos polinomios, compará: uno tiene un factor irreducible y el otro una raíz doble. No es lo mismo.`,
        resolucion: tex`<h2>Matriz a) — $A$</h2>
        <h3>Polinomio característico</h3>
        <p>Desarrollando por la primera fila ([[u7-polinomio-caracteristico]]):</p>
        <div class="fx center">$$P_A(\lambda) = \det\begin{pmatrix} 2-\lambda & 0 & 0 \\ 0 & -\lambda & 1 \\ 0 & -1 & -1-\lambda \end{pmatrix}
        = (2-\lambda)\begin{vmatrix} -\lambda & 1 \\ -1 & -1-\lambda \end{vmatrix}$$</div>
        <div class="fx center">$$= (2-\lambda)\bigl[(-\lambda)(-1-\lambda) - (1)(-1)\bigr] = (2-\lambda)\bigl[\lambda + \lambda^2 + 1\bigr]$$</div>
        <div class="fx center">$$\boxed{P_A(\lambda) = (2-\lambda)\,(\lambda^2 + \lambda + 1)}$$</div>

        <h3>Autovalores</h3>
        <p>El factor $\lambda^2 + \lambda + 1$ tiene</p>
        <div class="fx center">$$\Delta = 1^2 - 4(1)(1) = 1 - 4 = -3 < 0$$</div>
        <p>así que es <strong>irreducible en $\mathbb{R}$</strong>: no aporta autovalores. El único autovalor real es</p>
        <div class="fx center">$$\lambda = 2, \qquad m_a(2) = 1$$</div>

        <h3>Espacio propio</h3>
        <p>Resolviendo $(A - 2I)\,v = \vec 0$:</p>
        <div class="fx center">$$\begin{pmatrix} 0 & 0 & 0 \\ 0 & -2 & 1 \\ 0 & -1 & -3 \end{pmatrix}\begin{pmatrix} x \\ y \\ z\end{pmatrix} = \vec 0
        \;\Longrightarrow\; \begin{cases} -2y + z = 0 \;\Longrightarrow\; z = 2y \\ -y - 3z = 0 \end{cases}$$</div>
        <p>Sustituyendo $z = 2y$ en la segunda: $\;-y - 6y = -7y = 0 \Rightarrow y = 0$, y entonces $z = 0$. La variable $x$ queda libre (la primera fila es nula):</p>
        <div class="fx center">$$E_2 = \operatorname{gen}\{(1,\, 0,\, 0)\}, \qquad m_g(2) = 1 = m_a(2) \;✓$$</div>
        <p>Verificación: $\;A\,(1,0,0) = (2,0,0) = 2\,(1,0,0)$ ✓</p>

        <h3>¿Diagonalizable?</h3>
        <p><strong>NO.</strong> Hay un solo autovalor real, simple, así que se consigue <strong>un</strong> autovector independiente y hacen falta <strong>tres</strong>. Causa: <strong>faltan raíces reales</strong> (primera causa de [[u7-criterio-diagonalizacion]]).</p>
        <p>Controles: $\operatorname{tr} A = 2 + 0 - 1 = 1$, y la suma de las tres raíces es $2 + (-1) = 1$ ✓ (las raíces de $\lambda^2+\lambda+1$ suman $-1$). $\det A = 2\,(0 + 1) = 2$, y el producto de las raíces es $2 \cdot 1 = 2$ ✓</p>

        <hr>

        <h2>Matriz b) — $B$</h2>
        <h3>Polinomio característico</h3>
        <div class="fx center">$$P_B(\lambda) = (2-\lambda)\begin{vmatrix} -\lambda & 1 \\ -4 & -4-\lambda \end{vmatrix}
        = (2-\lambda)\bigl[(-\lambda)(-4-\lambda) + 4\bigr]$$</div>
        <div class="fx center">$$= (2-\lambda)\bigl[4\lambda + \lambda^2 + 4\bigr] = (2-\lambda)(\lambda + 2)^2$$</div>
        <div class="fx center">$$\boxed{P_B(\lambda) = (2-\lambda)\,(\lambda+2)^2}$$</div>
        <p>Acá el bloque $2\times2$ sí factorea en $\mathbb{R}$: $\;\lambda^2 + 4\lambda + 4 = (\lambda+2)^2$, cuadrado perfecto.</p>

        <h3>Autovalores</h3>
        <div class="fx center">$$\lambda_1 = 2 \;\;(m_a = 1), \qquad \lambda_2 = -2 \;\;(m_a = 2)$$</div>
        <p>Las dos raíces son reales — a diferencia de $A$. Pero hay una <strong>repetida</strong>, así que hay que mirarle la multiplicidad geométrica.</p>

        <h3>Espacio propio de $\lambda_1 = 2$</h3>
        <div class="fx center">$$(B - 2I) = \begin{pmatrix} 0 & 0 & 0 \\ 0 & -2 & 1 \\ 0 & -4 & -6 \end{pmatrix}
        \;\Longrightarrow\; \begin{cases} z = 2y \\ -4y - 6z = 0 \end{cases}$$</div>
        <p>Sustituyendo: $\;-4y - 12y = -16y = 0 \Rightarrow y = 0$, $z = 0$, $x$ libre.</p>
        <div class="fx center">$$E_2 = \operatorname{gen}\{(1,0,0)\}, \qquad m_g = 1 = m_a \;✓$$</div>

        <h3>Espacio propio de $\lambda_2 = -2$ — el que decide</h3>
        <div class="fx center">$$(B + 2I) = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & -4 & -2 \end{pmatrix}
        \;\Longrightarrow\; \begin{cases} 4x = 0 \;\Longrightarrow\; x = 0 \\ 2y + z = 0 \;\Longrightarrow\; z = -2y \\ -4y - 2z = 0 \end{cases}$$</div>
        <p>La tercera ecuación es redundante: $\;-4y - 2(-2y) = -4y + 4y = 0$ para todo $y$. Queda una sola variable libre ($y$):</p>
        <div class="fx center">$$E_{-2} = \operatorname{gen}\{(0,\, 1,\, -2)\}, \qquad m_g(-2) = 1 \; < \; 2 = m_a(-2)$$</div>
        <p>Verificación: $\;B\,(0,1,-2) = (0,\;\; -2,\;\; -4 + 8) = (0,-2,4) = -2\,(0,1,-2)$ ✓</p>

        <h3>¿Diagonalizable?</h3>
        <p><strong>NO.</strong> Todas las raíces son reales, pero $m_g(-2) = 1 < 2 = m_a(-2)$: sólo se consiguen $1 + 1 = 2$ autovectores L.I. y hacen falta $3$. Causa: <strong>$m_g < m_a$ en el autovalor repetido</strong> (segunda causa de [[u7-criterio-diagonalizacion]]).</p>
        <p>Controles: $\operatorname{tr} B = 2 + 0 - 4 = -2 = 2 + (-2) + (-2)$ ✓; $\det B = 2\,(0 + 4) = 8 = 2 \cdot (-2) \cdot (-2)$ ✓</p>

        <hr>

        <h3>Las dos juntas: mismo veredicto, causas distintas</h3>
        <div class="tabla-wrap"><table>
          <thead><tr><th></th><th>$P(\lambda)$</th><th>Autovalores reales</th><th>Espacios propios</th><th>¿Diag.?</th><th>Por qué</th></tr></thead>
          <tbody>
            <tr><td>$A$</td><td>$(2-\lambda)(\lambda^2+\lambda+1)$</td><td>$2$ (simple)</td><td>$E_2 = \operatorname{gen}\{(1,0,0)\}$</td><td><strong>No</strong></td><td>faltan raíces reales ($\Delta = -3 < 0$)</td></tr>
            <tr><td>$B$</td><td>$(2-\lambda)(\lambda+2)^2$</td><td>$2$ y $-2$ (doble)</td><td>$E_2 = \operatorname{gen}\{(1,0,0)\}$, $E_{-2} = \operatorname{gen}\{(0,1,-2)\}$</td><td><strong>No</strong></td><td>$m_g(-2) = 1 < 2 = m_a(-2)$</td></tr>
          </tbody>
        </table></div>
        <div class="note tip"><b class="lbl">Para qué está armado así el ejercicio</b>
        Las dos matrices difieren <strong>sólo en la última fila</strong> ($-1,-1$ contra $-4,-4$) y ninguna de las dos es diagonalizable — pero por las dos causas <em>distintas</em> del criterio. El ejercicio no se contesta con «no es diagonalizable»: hay que decir cuál de las dos razones es en cada caso, que es lo que pide explícitamente el ejercicio 2.iii del otro final.</div>`,
        resultado: tex`<strong>a)</strong> $P_A(\lambda) = (2-\lambda)(\lambda^2+\lambda+1)$; único autovalor real $\lambda = 2$ con $E_2 = \operatorname{gen}\{(1,0,0)\}$. <strong>No</strong> diagonalizable: $\lambda^2+\lambda+1$ tiene $\Delta = -3 < 0$, faltan raíces reales.<br>
        <strong>b)</strong> $P_B(\lambda) = (2-\lambda)(\lambda+2)^2$; $E_2 = \operatorname{gen}\{(1,0,0)\}$ y $E_{-2} = \operatorname{gen}\{(0,1,-2)\}$. <strong>No</strong> diagonalizable: $m_g(-2) = 1 < 2 = m_a(-2)$.` },

      { id: 'f2-3ii', rot: 'ii', enunciado: tex`Enuncie <strong>tres ítems del teorema resumen</strong> para a) y <strong>tres ítems distintos</strong> para b).`,
        conceptos: ['u7-teorema-resumen', 'u4-teorema-18'],
        pista: tex`Fijate si $0$ es autovalor en cada caso. Si no lo es, los doce ítems valen y se puede elegir cualquiera — el enunciado sólo exige que los tres de b) sean <em>distintos</em> de los de a).`,
        resolucion: tex`<h3>El paso previo: ¿es $0$ autovalor?</h3>
        <p>En ninguna de las dos. Los autovalores de $A$ son $2$ (y un par complejo), y los de $B$ son $2$ y $-2$. Equivalentemente, los determinantes no se anulan:</p>
        <div class="fx center">$$\det A = 2 \neq 0, \qquad \det B = 8 \neq 0$$</div>
        <p>El <strong>ítem 12</strong> del [[u7-teorema-resumen]] («cero no es autovalor») se cumple en los dos casos, y como los doce ítems son equivalentes, <strong>los doce valen para las dos matrices</strong>. Se pueden elegir tres cualesquiera para cada una.</p>

        <h3>Tres ítems para $A$</h3>
        <ol class="pasos">
          <li><span class="ptit">Ítem 1 — $A$ es invertible.</span>
            <p>Existe $A^{-1}$, y la transformación asociada admite inversa.</p></li>
          <li><span class="ptit">Ítem 8 — $\det A \neq 0$.</span>
            <p>En efecto, $\det A = 2$.</p></li>
          <li><span class="ptit">Ítem 11 — la transformación $T\vec x = A\vec x$ es un isomorfismo de $\mathbb{R}^3$ en $\mathbb{R}^3$.</span>
            <p>Es lineal, inyectiva y sobreyectiva.</p></li>
        </ol>

        <h3>Tres ítems distintos para $B$</h3>
        <ol class="pasos">
          <li><span class="ptit">Ítem 2 — la única solución de $B\vec x = \vec 0$ es la trivial.</span>
            <p>El sistema homogéneo no tiene soluciones no nulas.</p></li>
          <li><span class="ptit">Ítem 7 — las columnas (y las filas) de $B$ son linealmente independientes.</span>
            <p>Las tres columnas $(2,0,0)$, $(0,0,-4)$, $(0,1,-4)$ forman una base de $\mathbb{R}^3$.</p></li>
          <li><span class="ptit">Ítem 10 — $\rho(B) = 3$.</span>
            <p>El rango es máximo, y equivalentemente $\nu(B) = 0$ (ítem 9): la nulidad es cero.</p></li>
        </ol>

        <h3>Verificación del ítem 2 para $B$, a mano</h3>
        <p>Resolviendo $B\vec x = \vec 0$:</p>
        <div class="fx center">$$\begin{cases} 2x = 0 \\ z = 0 \\ -4y - 4z = 0 \end{cases} \;\Longrightarrow\; x = 0,\;\; z = 0,\;\; y = 0$$</div>
        <p>Sólo la solución trivial ✓ — lo que confirma, vía el teorema, los otros once ítems.</p>
        <div class="note warn"><b class="lbl">Invertible y diagonalizable son cosas independientes</b>
        Éste es el punto más importante del ejercicio: las dos matrices son <strong>invertibles</strong> (los doce ítems del teorema resumen valen) y sin embargo <strong>ninguna es diagonalizable</strong> (inciso i). No hay contradicción: el teorema resumen habla de que $0$ no sea autovalor, y la diagonalización depende de que haya suficientes autovectores. Una matriz puede ser perfectamente invertible y no diagonalizable, como acá.</div>
        <div class="note tip"><b class="lbl">Por qué el enunciado pide «tres distintos»</b>
        Para que no se repita la misma terna dos veces y se vea que se conocen varios ítems. Como los doce son equivalentes y los dos casos son del mismo lado (todos verdaderos), cualquier reparto sirve; lo que se evalúa es enunciarlos bien y señalar que la bisagra es el ítem 12. El [[u4-teorema-18|teorema resumen de la unidad 4]] cubre los primeros siete, sin la parte de autovalores.</div>`,
        resultado: tex`En las dos, $0$ <strong>no</strong> es autovalor ($\det A = 2$, $\det B = 8$), así que los doce ítems valen para ambas. Para $A$: es invertible (1), $\det A \neq 0$ (8), es isomorfismo (11). Para $B$: el homogéneo sólo tiene la solución trivial (2), las columnas son L.I. (7), $\rho(B) = 3$ (10). Nótese que las dos son invertibles y <strong>ninguna</strong> diagonalizable: son propiedades independientes.` }
    ]},

  /* --------------------------- 4 --------------------------- */
  { id: 'f2-4', num: '4',
    enunciado: tex`<p>Sea $B = \{a,b,c,d\}$ una base de un espacio vectorial $V$ y $T: V \to V$ una transformación lineal con
    $$T(a) = c, \qquad T(b) = 0, \qquad T(c) = c, \qquad T(d) = -d.$$</p>
    <div class="note tip"><b class="lbl">Leer los datos</b> Tres de los cuatro son de la forma $T(v) = \lambda v$ ($\lambda = 0$, $1$ y $-1$): $b$, $c$ y $d$ ya son autovectores. El que no lo es, $T(a) = c$, es el que hay que examinar — mismo patrón que el ejercicio 12 del TP 7.</div>`,
    incisos: [

      { id: 'f2-4a', rot: 'a', enunciado: tex`Calcular imagen y núcleo de $T$. Dar dimensión y base de ambos.`,
        conceptos: ['u7-sin-calcular', 'u6-nucleo-imagen-matriz', 'u6-teorema-dimension'],
        pista: tex`La imagen la generan las cuatro imágenes dadas (ojo que una es el vector nulo y dos son iguales). Para el núcleo, aplicá $T$ a un vector genérico $\alpha a + \beta b + \gamma c + \delta d$.`,
        resolucion: tex`<h3>La matriz en la base $B$</h3>
        <p>Conviene armarla aunque no la pidan: ordena todo el ejercicio. Las columnas son las coordenadas de las imágenes en $B = \{a,b,c,d\}$:</p>
        <div class="fx center">$$T(a) = c \to (0,0,1,0), \quad T(b) = 0 \to (0,0,0,0),$$</div>
        <div class="fx center">$$T(c) = c \to (0,0,1,0), \quad T(d) = -d \to (0,0,0,-1)$$</div>
        <div class="fx center">$$[T]_B = \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix}$$</div>

        <h3>Imagen</h3>
        <p>Está generada por las imágenes de los vectores de la base ([[u6-nucleo-imagen-matriz]]):</p>
        <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{c,\; \vec 0,\; c,\; -d\} = \operatorname{gen}\{c,\; d\}$$</div>
        <p>(Se descarta el $\vec 0$, se descarta la repetición de $c$, y $-d$ genera lo mismo que $d$.) Como $c$ y $d$ son dos vectores de una base, son linealmente independientes:</p>
        <div class="fx center">$$\boxed{\operatorname{Im}(T) = \operatorname{gen}\{c,\, d\}, \qquad \dim\operatorname{Im}(T) = 2}$$</div>
        <p>con base $\{c,\, d\}$.</p>

        <h3>Núcleo</h3>
        <p>Tomando un vector genérico $v = \alpha a + \beta b + \gamma c + \delta d$ y aplicando linealidad:</p>
        <div class="fx center">$$T(v) = \alpha\,c + \beta\,\vec 0 + \gamma\,c + \delta\,(-d) = (\alpha + \gamma)\,c - \delta\,d$$</div>
        <p>Igualando a $\vec 0$ y usando que $c, d$ son L.I. (sus coeficientes deben anularse):</p>
        <div class="fx center">$$\alpha + \gamma = 0 \;\Longrightarrow\; \gamma = -\alpha, \qquad \delta = 0$$</div>
        <p>y $\beta$ queda <strong>libre</strong> (no aparece en ninguna ecuación, porque $T(b) = \vec 0$). Entonces</p>
        <div class="fx center">$$v = \alpha\,a + \beta\,b - \alpha\,c = \alpha\,(a - c) + \beta\,b$$</div>
        <div class="fx center">$$\boxed{\operatorname{Nuc}(T) = \operatorname{gen}\{a - c,\;\; b\}, \qquad \dim\operatorname{Nuc}(T) = 2}$$</div>
        <p>con base $\{a - c,\; b\}$ (son L.I. porque $a$, $b$, $c$ pertenecen a una base).</p>

        <h3>Verificaciones</h3>
        <p><strong>Los generadores del núcleo:</strong></p>
        <div class="fx center">$$T(a - c) = T(a) - T(c) = c - c = \vec 0 \;✓, \qquad T(b) = \vec 0 \;✓$$</div>
        <p><strong>Teorema de las dimensiones</strong> ([[u6-teorema-dimension]]):</p>
        <div class="fx center">$$\dim\operatorname{Nuc}(T) + \dim\operatorname{Im}(T) = 2 + 2 = 4 = \dim V \;✓$$</div>
        <p><strong>Rango de la matriz:</strong> $[T]_B$ tiene dos filas nulas y las otras dos ($(1,0,1,0)$ y $(0,0,0,-1)$) son independientes, así que $\rho = 2 = \dim\operatorname{Im}$ ✓ y $\nu = 4 - 2 = 2 = \dim\operatorname{Nuc}$ ✓</p>
        <div class="note tip"><b class="lbl">Dos lecturas del mismo hecho</b>
        $T(a) = T(c) = c$: los dos vectores tienen la misma imagen, así que su diferencia $a - c$ cae en el núcleo. Eso es exactamente lo que dice que $T$ no sea inyectiva, y es la razón por la que las dos primeras columnas de $[T]_B$ no aportan rango nuevo.</div>`,
        resultado: tex`$\operatorname{Im}(T) = \operatorname{gen}\{c, d\}$, dimensión 2, base $\{c,d\}$. $\operatorname{Nuc}(T) = \operatorname{gen}\{a-c,\; b\}$, dimensión 2, base $\{a-c,\, b\}$. Control: $2 + 2 = 4 = \dim V$ ✓` },

      { id: 'f2-4b', rot: 'b', enunciado: tex`Calcular autovalores, autovectores y subespacios propios de $T$.`,
        conceptos: ['u7-sin-calcular', 'u7-espacio-propio', 'u7-polinomio-caracteristico'],
        pista: tex`Tres autovalores se leen de los datos. Para las multiplicidades, el polinomio característico de $[T]_B$ sale de una matriz casi triangular.`,
        resolucion: tex`<h3>Los autovalores que se leen de los datos</h3>
        <p>Directamente de las definiciones ([[u7-sin-calcular]]):</p>
        <ul>
          <li>$T(b) = \vec 0 = 0 \cdot b \;\Longrightarrow\; \lambda = 0$, con autovector $b$</li>
          <li>$T(c) = c = 1 \cdot c \;\Longrightarrow\; \lambda = 1$, con autovector $c$</li>
          <li>$T(d) = -d = (-1) \cdot d \;\Longrightarrow\; \lambda = -1$, con autovector $d$</li>
        </ul>
        <p>Y del inciso (a) ya sabemos que $a - c$ también está en el núcleo, así que es otro autovector de $\lambda = 0$.</p>

        <h3>El polinomio característico, para las multiplicidades</h3>
        <p>La matriz $[T]_B - \lambda I$ es <strong>triangular inferior</strong> (el único elemento fuera de la diagonal es el $1$ de la posición $(3,1)$, debajo de ella):</p>
        <div class="fx center">$$[T]_B - \lambda I = \begin{pmatrix} -\lambda & 0 & 0 & 0 \\ 0 & -\lambda & 0 & 0 \\ 1 & 0 & 1-\lambda & 0 \\ 0 & 0 & 0 & -1-\lambda \end{pmatrix}$$</div>
        <p>El determinante de una triangular es el producto de su diagonal:</p>
        <div class="fx center">$$P(\lambda) = (-\lambda)(-\lambda)(1-\lambda)(-1-\lambda) = \lambda^2\,(1-\lambda)(-1-\lambda)$$</div>
        <div class="fx center">$$(1-\lambda)(-1-\lambda) = -(1-\lambda)(1+\lambda) = -(1 - \lambda^2) = \lambda^2 - 1$$</div>
        <div class="fx center">$$\boxed{P(\lambda) = \lambda^2\,(\lambda^2 - 1) = \lambda^2\,(\lambda-1)(\lambda+1)}$$</div>
        <p>Control de grado y signo: grado $4 = \dim V$ ✓, y coeficiente principal $+1$, como corresponde a una matriz de $4\times4$ ✓</p>

        <h3>Multiplicidades algebraicas</h3>
        <div class="fx center">$$m_a(0) = 2, \qquad m_a(1) = 1, \qquad m_a(-1) = 1 \qquad (\text{suman } 4 \;✓)$$</div>

        <h3>Los subespacios propios</h3>
        <p><strong>$\lambda = 0$:</strong> es el núcleo, ya calculado en (a):</p>
        <div class="fx center">$$E_0 = \operatorname{Nuc}(T) = \operatorname{gen}\{a - c,\;\; b\}, \qquad m_g(0) = 2$$</div>
        <p><strong>$\lambda = 1$:</strong> hay que resolver $T(v) = v$ con $v = \alpha a + \beta b + \gamma c + \delta d$. Usando $T(v) = (\alpha+\gamma)c - \delta d$ del inciso (a):</p>
        <div class="fx center">$$(\alpha + \gamma)\,c - \delta\,d = \alpha a + \beta b + \gamma c + \delta d$$</div>
        <p>Comparando coeficientes (en la base $\{a,b,c,d\}$): $\;\alpha = 0$ (coef. de $a$), $\;\beta = 0$ (coef. de $b$), $\;\alpha + \gamma = \gamma$ (se cumple siempre dado $\alpha = 0$), $\;-\delta = \delta \Rightarrow \delta = 0$. Queda $\gamma$ libre:</p>
        <div class="fx center">$$E_1 = \operatorname{gen}\{c\}, \qquad m_g(1) = 1$$</div>
        <p><strong>$\lambda = -1$:</strong> ahora $T(v) = -v$:</p>
        <div class="fx center">$$(\alpha+\gamma)\,c - \delta\,d = -\alpha a - \beta b - \gamma c - \delta d$$</div>
        <p>De donde $\alpha = 0$, $\beta = 0$, $\;\alpha + \gamma = -\gamma \Rightarrow 2\gamma = 0 \Rightarrow \gamma = 0$, y la ecuación de $d$ se cumple para todo $\delta$:</p>
        <div class="fx center">$$E_{-1} = \operatorname{gen}\{d\}, \qquad m_g(-1) = 1$$</div>

        <div class="tabla-wrap"><table>
          <thead><tr><th>$\lambda$</th><th>$E_\lambda$</th><th>$m_a$</th><th>$m_g$</th><th>¿Iguales?</th></tr></thead>
          <tbody>
            <tr><td>$0$</td><td>$\operatorname{gen}\{a-c,\; b\}$</td><td>2</td><td>2</td><td><strong>sí</strong> ✓</td></tr>
            <tr><td>$1$</td><td>$\operatorname{gen}\{c\}$</td><td>1</td><td>1</td><td><strong>sí</strong> ✓</td></tr>
            <tr><td>$-1$</td><td>$\operatorname{gen}\{d\}$</td><td>1</td><td>1</td><td><strong>sí</strong> ✓</td></tr>
          </tbody>
        </table></div>

        <h3>Controles</h3>
        <p><strong>Traza:</strong> $\;\operatorname{tr}[T]_B = 0 + 0 + 1 + (-1) = 0$, y la suma de autovalores con multiplicidad es $0 + 0 + 1 - 1 = 0$ ✓</p>
        <p><strong>Determinante:</strong> $\;\det[T]_B = 0$ (tiene dos filas nulas), y el producto es $0 \cdot 0 \cdot 1 \cdot (-1) = 0$ ✓ — coherente con que $0$ sea autovalor.</p>
        <div class="note tip"><b class="lbl">$a$ no es autovector, pero $a - c$ sí</b>
        $T(a) = c$ no es múltiplo de $a$, así que $a$ por sí solo no es autovector. Lo que sí es autovector es la combinación $a - c$, con autovalor $0$. Es el vector que «arregla» la multiplicidad de $\lambda = 0$ y, como se ve en (c), lo que salva la diagonalización.</div>`,
        resultado: tex`$P(\lambda) = \lambda^2(\lambda-1)(\lambda+1)$. Autovalores: $\lambda = 0$ ($m_a = 2$) con $E_0 = \operatorname{gen}\{a-c,\, b\}$; $\lambda = 1$ con $E_1 = \operatorname{gen}\{c\}$; $\lambda = -1$ con $E_{-1} = \operatorname{gen}\{d\}$. Las tres multiplicidades geométricas igualan a las algebraicas.` },

      { id: 'f2-4c', rot: 'c', enunciado: tex`¿$T$ es diagonalizable? Si es afirmativo, dar la base que permite la diagonalización y la forma diagonal.`,
        conceptos: ['u7-criterio-diagonalizacion', 'u7-multiplicidades'],
        resolucion: tex`<h3>Respuesta: SÍ, es diagonalizable</h3>
        <p>Se verifican las dos condiciones de [[u7-criterio-diagonalizacion]]:</p>
        <ul>
          <li>todas las raíces de $P(\lambda) = \lambda^2(\lambda-1)(\lambda+1)$ son <strong>reales</strong> ($0$, $0$, $1$, $-1$) ✓</li>
          <li>$m_g(\lambda) = m_a(\lambda)$ para <strong>todos</strong> los autovalores ✓ (tabla del inciso b)</li>
        </ul>
        <p>Equivalentemente: juntando las bases de los tres espacios propios se obtienen $2 + 1 + 1 = 4 = \dim V$ autovectores linealmente independientes.</p>

        <h3>La base de autovectores</h3>
        <div class="fx center">$$\boxed{B' = \{\,a - c,\;\; b,\;\; c,\;\; d\,\}}$$</div>
        <p>(Los dos primeros son la base de $E_0$, el tercero de $E_1$, el cuarto de $E_{-1}$.)</p>
        <p><strong>Verificación de que $B'$ es base de $V$.</strong> Se obtiene de $B = \{a,b,c,d\}$ reemplazando $a$ por $a - c$, que es una operación elemental (restarle a un vector de la base un múltiplo de otro) y por lo tanto preserva la independencia lineal. En coordenadas de $B$, puestas como columnas:</p>
        <div class="fx center">$$P = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}, \qquad \det P = 1 \neq 0 \;✓$$</div>
        <p>(Es triangular inferior con todos unos en la diagonal.)</p>

        <h3>La forma diagonal</h3>
        <p>En la diagonal van los autovalores, en el mismo orden que los autovectores de $B'$:</p>
        <div class="fx center">$$\boxed{[T]_{B'} = D = \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix} = \operatorname{diag}(0,\, 0,\, 1,\, -1)}$$</div>

        <h3>Verificación directa</h3>
        <p>Aplicando $T$ a cada vector de $B'$:</p>
        <ul>
          <li>$T(a-c) = c - c = \vec 0 = 0\,(a-c)$ ✓ → primera columna $(0,0,0,0)$</li>
          <li>$T(b) = \vec 0 = 0\,b$ ✓ → segunda columna $(0,0,0,0)$</li>
          <li>$T(c) = c = 1\,c$ ✓ → tercera columna $(0,0,1,0)$</li>
          <li>$T(d) = -d = (-1)\,d$ ✓ → cuarta columna $(0,0,0,-1)$</li>
        </ul>
        <p>Cada imagen es un múltiplo del propio vector, así que la matriz es diagonal ✓</p>
        <p><strong>Controles de semejanza:</strong> $\operatorname{tr} D = 0 + 0 + 1 - 1 = 0 = \operatorname{tr}[T]_B$ ✓ y $\det D = 0 = \det[T]_B$ ✓</p>
        <div class="note tip"><b class="lbl">Por qué $T(a) = c$ no arruinó la diagonalización</b>
        El dato «raro» hacía temer el caso $m_g < m_a$: es el patrón típico de las matrices no diagonalizables (una variable de más en el polinomio característico sin autovector que la respalde). Pero acá $\lambda = 0$ tenía $m_a = 2$ y el núcleo resultó de dimensión <strong>2</strong>, justo lo necesario — gracias a que $T(b) = \vec 0$ aportaba un autovector independiente de $a - c$. Si $b$ no hubiera estado en el núcleo, $m_g(0)$ habría sido $1 < 2$ y la respuesta sería «no».</div>
        <div class="note"><b class="lbl">$T$ no es invertible, y es diagonalizable igual</b>
        $\lambda = 0$ es autovalor, así que $\det[T]_B = 0$ y <strong>todos</strong> los ítems del teorema resumen fallan: $T$ no es invertible ni isomorfismo. Pero sí es diagonalizable. Es el espejo del ejercicio 3 de este mismo final, donde las dos matrices eran invertibles y ninguna diagonalizable: las dos propiedades son independientes entre sí, en los dos sentidos.</div>`,
        resultado: tex`<strong>Sí.</strong> Todas las raíces son reales y $m_g = m_a$ en los tres autovalores. Base: $B' = \{a-c,\; b,\; c,\; d\}$ y $[T]_{B'} = \operatorname{diag}(0, 0, 1, -1)$. Nótese que $T$ <em>no</em> es invertible ($0$ es autovalor) y es diagonalizable igual.` }
    ]}
]});

/* ============================================================
   Final — 27/8/26
   ============================================================ */
EAL.examen({
  id: 'final-2026-08-27', tipo: 'final', sigla: 'F3',
  titulo: 'Final regular — 27/8/26',
  fecha: '27 de agosto de 2026',
  carrera: 'LSI · LCC',
  resumen: 'Tres verdadero/falso sobre subespacios y linealidad, y dos matrices compañeras para diagonalizar, con el pedido explícito de explicar por qué no se puede cuando no se puede.',
  unidades: ['u4', 'u6', 'u7'],
  nota: tex`<b class="lbl">El final más corto y el más conceptual</b> Sólo dos ejercicios, pero el 1 es puro «justificar» y el 2 pide explicar la causa de la no diagonalizabilidad. Los tres V/F del ejercicio 1 están desarrollados en [[u4-teorema-5]] y [[u6-ejemplos-geometricos]].<br><br>
  <b class="lbl">Atención al ítem 2.ii</b> No es una errata: pide las bases de los espacios propios <em>suponiendo que la transformación fuera de $P_2$ en $P_2$</em> en lugar de $\mathbb{R}^3$. Las cuentas son las mismas ($\dim P_2 = 3$), pero los autovectores hay que escribirlos como <strong>polinomios</strong>.`,

  ejercicios: [

  /* --------------------------- 1 --------------------------- */
  { id: 'f3-1', num: '1',
    enunciado: tex`<p><strong>Decir verdadero o falso. Justificar.</strong></p>`,
    incisos: [

      { id: 'f3-1a', rot: 'a', enunciado: tex`Sean $\mathcal{H}_1$ y $\mathcal{H}_2$ dos subespacios de un espacio vectorial $V$. Entonces $\mathcal{H}_1 \cap \mathcal{H}_2$ es un subespacio vectorial de $V$.`,
        conceptos: ['u4-teorema-5', 'u4-teorema-4'],
        pista: tex`Es verdadero. Hay que demostrarlo: tres cosas a chequear (el nulo, la suma y el producto por escalar).`,
        resolucion: tex`<h3>Respuesta: VERDADERO</h3>
        <p>Es el [[u4-teorema-5]]. La demostración es corta y conviene saber escribirla, porque el enunciado pide justificar.</p>

        <h3>Demostración</h3>
        <p>Hay que verificar las tres condiciones de subespacio sobre $\mathcal{H} = \mathcal{H}_1 \cap \mathcal{H}_2$.</p>
        <ol class="pasos">
          <li><span class="ptit">No es vacío: contiene al vector nulo.</span>
            <p>Por el [[u4-teorema-4]], todo subespacio contiene a $\vec 0$. Entonces $\vec 0 \in \mathcal{H}_1$ y $\vec 0 \in \mathcal{H}_2$, luego $\vec 0 \in \mathcal{H}_1 \cap \mathcal{H}_2$.</p></li>
          <li><span class="ptit">Cerrado para la suma.</span>
            <p>Sean $u, v \in \mathcal{H}_1 \cap \mathcal{H}_2$. Entonces $u, v \in \mathcal{H}_1$, y como $\mathcal{H}_1$ es subespacio, $u + v \in \mathcal{H}_1$. El mismo argumento en $\mathcal{H}_2$ da $u + v \in \mathcal{H}_2$. Por lo tanto $u + v \in \mathcal{H}_1 \cap \mathcal{H}_2$.</p></li>
          <li><span class="ptit">Cerrado para el producto por un escalar.</span>
            <p>Sean $u \in \mathcal{H}_1 \cap \mathcal{H}_2$ y $k$ un escalar. Como $u \in \mathcal{H}_1$ y $\mathcal{H}_1$ es subespacio, $k\,u \in \mathcal{H}_1$; igual en $\mathcal{H}_2$. Luego $k\,u \in \mathcal{H}_1 \cap \mathcal{H}_2$.</p></li>
        </ol>
        <p>Las tres condiciones se cumplen, así que la intersección es un subespacio de $V$. $\;\blacksquare$</p>
        <div class="note tip"><b class="lbl">La estructura del argumento, en una línea</b>
        «Lo que vale en cada uno vale en los dos, y por lo tanto en la intersección.» Las tres verificaciones son el mismo razonamiento aplicado a las tres condiciones, y conviene escribirlas las tres: es lo que se evalúa.</div>
        <div class="note warn"><b class="lbl">Con la UNIÓN es falso, y suele ser la trampa</b>
        $\mathcal{H}_1 \cup \mathcal{H}_2$ <strong>no</strong> es subespacio en general. Contraejemplo en $\mathbb{R}^2$: tomando los dos ejes, $\mathcal{H}_1 = \operatorname{gen}\{(1,0)\}$ y $\mathcal{H}_2 = \operatorname{gen}\{(0,1)\}$, los vectores $(1,0)$ y $(0,1)$ están en la unión pero su suma $(1,1)$ no está en ninguno de los dos ejes. Falla el cierre para la suma.
        <p>Es exactamente el mismo enunciado con $\cup$ en lugar de $\cap$, y la cátedra lo usa en las dos versiones. Hay que leer bien qué símbolo está escrito.</p></div>
        <div class="note"><b class="lbl">Un ejemplo concreto del teorema</b>
        En $\mathbb{R}^3$, dos planos distintos por el origen se cortan en una recta por el origen: dos subespacios de dimensión 2 cuya intersección tiene dimensión 1, y es subespacio ✓. Es el caso del ejercicio 1 del recuperatorio del segundo parcial.</div>`,
        resultado: tex`<strong>VERDADERO</strong> ([[u4-teorema-5]]). $\vec 0$ está en los dos, y si $u,v$ están en los dos entonces $u+v$ y $ku$ también, por ser cada uno subespacio. Ojo: con la <strong>unión</strong> sería falso — contraejemplo, los dos ejes de $\mathbb{R}^2$.` },

      { id: 'f3-1b', rot: 'b', enunciado: tex`La <strong>simetría central</strong> en el plano, con centro en el origen de coordenadas, es una transformación lineal.`,
        conceptos: ['u6-ejemplos-geometricos', 'u6-transformacion-lineal'],
        pista: tex`Primero escribí la fórmula de la simetría central: ¿en qué va a parar $(x,y)$? Después chequeá las dos propiedades.`,
        resolucion: tex`<h3>Respuesta: VERDADERO</h3>
        <h3>Paso 1 — La expresión analítica</h3>
        <p>La simetría central de centro $O$ manda cada punto $P$ al punto $P'$ tal que $O$ es el punto medio de $PP'$. Con centro en el origen, eso significa</p>
        <div class="fx center">$$T(x,y) = (-x,\, -y) = -\,(x,y)$$</div>
        <p>Es decir, $T = -\operatorname{Id}$: la multiplicación por el escalar $-1$ ([[u6-ejemplos-geometricos]]).</p>

        <h3>Paso 2 — Verificar las dos propiedades</h3>
        <p>Por la definición de [[u6-transformacion-lineal]] hay que chequear aditividad y homogeneidad. Sean $u = (x_1,y_1)$, $v = (x_2,y_2)$ y $k \in \mathbb{R}$.</p>
        <p><strong>Aditividad:</strong></p>
        <div class="fx center">$$T(u + v) = T(x_1+x_2,\; y_1+y_2) = \bigl(-(x_1+x_2),\; -(y_1+y_2)\bigr)$$</div>
        <div class="fx center">$$= (-x_1, -y_1) + (-x_2, -y_2) = T(u) + T(v) \;✓$$</div>
        <p><strong>Homogeneidad:</strong></p>
        <div class="fx center">$$T(k\,u) = T(kx_1,\; ky_1) = (-kx_1,\; -ky_1) = k\,(-x_1, -y_1) = k\,T(u) \;✓$$</div>
        <p>Las dos se cumplen, así que <strong>es una transformación lineal</strong>.</p>

        <h3>La matriz asociada</h3>
        <div class="fx center">$$[T]_C = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = -I_2$$</div>
        <p>Que exista una matriz que la represente es otra forma de confirmar la linealidad: toda transformación lineal de $\mathbb{R}^n$ en $\mathbb{R}^m$ es «multiplicar por una matriz», y recíprocamente.</p>
        <div class="note tip"><b class="lbl">Control rápido que descarta la mitad de los casos</b>
        Toda transformación lineal cumple $T(\vec 0) = \vec 0$. Acá $T(0,0) = (0,0)$ ✓, así que el candidato sobrevive y hay que hacer las cuentas. Si hubiera fallado, se descartaría en una línea — como pasa en el inciso (c).</div>
        <div class="note warn"><b class="lbl">Si el centro no fuera el origen, sería FALSO</b>
        La simetría central de centro $(a,b) \neq (0,0)$ es $T(x,y) = (2a - x,\; 2b - y)$, y entonces $T(0,0) = (2a, 2b) \neq (0,0)$: <strong>no</strong> es lineal (es una transformación afín). La frase «con centro en el origen de coordenadas» del enunciado no es decorativa: es justamente la hipótesis que hace verdadera la afirmación.</div>
        <div class="note"><b class="lbl">Dato extra: es diagonalizable</b>
        $-I_2$ ya es diagonal, con único autovalor $\lambda = -1$ de $m_a = m_g = 2$: todo vector no nulo del plano es autovector. Geométricamente es evidente, porque la simetría central invierte el sentido de cualquier vector sin cambiarle la dirección.</div>`,
        resultado: tex`<strong>VERDADERO.</strong> La simetría central con centro en el origen es $T(x,y) = (-x,-y) = -(x,y)$, con matriz $-I_2$; cumple $T(u+v) = T(u)+T(v)$ y $T(ku) = kT(u)$. Si el centro no fuera el origen sería <em>falso</em> ($T(\vec 0) \neq \vec 0$).` },

      { id: 'f3-1c', rot: 'c', enunciado: tex`$T: \mathbb{R}^2 \to \mathbb{R}$, $\;T(x,y) = x + y + 1$ es una transformación lineal.`,
        conceptos: ['u6-transformacion-lineal', 'u6-propiedades-tl'],
        pista: tex`Un solo cálculo lo resuelve. ¿Qué vale $T(0,0)$?`,
        resolucion: tex`<h3>Respuesta: FALSO</h3>
        <h3>La justificación más corta</h3>
        <p>Toda transformación lineal cumple $T(\vec 0) = \vec 0$ ([[u6-propiedades-tl]]). Acá</p>
        <div class="fx center">$$T(0,\, 0) = 0 + 0 + 1 = 1 \neq 0$$</div>
        <p>Con eso ya está: <strong>no es lineal</strong>. Es la justificación completa y es la que conviene dar.</p>

        <h3>Por qué $T(\vec 0) = \vec 0$ es obligatorio</h3>
        <p>Si $T$ fuera lineal, por homogeneidad con $k = 0$:</p>
        <div class="fx center">$$T(\vec 0) = T(0 \cdot \vec 0) = 0 \cdot T(\vec 0) = \vec 0$$</div>
        <p>así que la condición no es un requisito adicional sino una <strong>consecuencia</strong> de la definición. Por eso sirve como test: si falla, la transformación no puede ser lineal.</p>

        <h3>Verificación por el otro lado (opcional)</h3>
        <p>Mostrar directamente que falla la aditividad también sirve. Con $u = (1,0)$ y $v = (0,1)$:</p>
        <div class="fx center">$$T(u + v) = T(1,1) = 1 + 1 + 1 = 3$$</div>
        <div class="fx center">$$T(u) + T(v) = (1+0+1) + (0+1+1) = 2 + 2 = 4$$</div>
        <div class="fx center">$$3 \neq 4 \;\Longrightarrow\; T(u+v) \neq T(u) + T(v) \;✓\text{(falla)}$$</div>
        <p>El $+1$ se suma <strong>dos veces</strong> en el miembro derecho y una sola en el izquierdo: ahí está el problema.</p>
        <div class="note tip"><b class="lbl">La regla general que conviene tener</b>
        Una expresión es lineal si y sólo si es un <strong>polinomio homogéneo de grado 1</strong> en las variables: sólo términos $k\cdot x$, $k \cdot y$, sin constantes, sin potencias, sin productos de variables, sin raíces ni valores absolutos.
        <ul>
          <li>$T(x,y) = 3x - 2y$ ✓ lineal</li>
          <li>$T(x,y) = x + y + 1$ ✗ constante</li>
          <li>$T(x,y) = x^2 + y$ ✗ potencia</li>
          <li>$T(x,y) = xy$ ✗ producto de variables</li>
          <li>$T(x,y) = |x|$ ✗ valor absoluto (falla con $k = -1$)</li>
        </ul></div>
        <div class="note"><b class="lbl">Qué es entonces esta función</b>
        $T(x,y) = x+y+1$ es una función <strong>afín</strong>: una lineal ($x+y$) más una constante ($1$). Las afines son muy útiles pero no son transformaciones lineales, y toda la teoría de matrices asociadas, núcleo, imagen y autovalores no se les aplica.</div>`,
        resultado: tex`<strong>FALSO.</strong> $T(0,0) = 1 \neq 0$, y toda transformación lineal debe cumplir $T(\vec 0) = \vec 0$. (También falla la aditividad: $T(1,1) = 3$ pero $T(1,0)+T(0,1) = 4$.) Es una función <em>afín</em>, no lineal.` }
    ]},

  /* --------------------------- 2 --------------------------- */
  { id: 'f3-2', num: '2',
    enunciado: tex`<p>Para las siguientes matrices de transformación $T: \mathbb{R}^3 \to \mathbb{R}^3$:</p>
    <div class="fx center">$$\text{a)}\;\; A_C = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 6 & -11 & 6 \end{pmatrix}
    \qquad\qquad \text{b)}\;\; B_C = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 4 & -8 & 5 \end{pmatrix}$$</div>
    <div class="note"><b class="lbl">Dato útil</b> Son <strong>matrices compañeras</strong>: su polinomio característico se lee casi directamente de la última fila. Conviene calcularlo igual, pero sirve de control.</div>`,
    incisos: [

      { id: 'f3-2i', rot: 'i', enunciado: tex`Halle el <strong>polinomio característico</strong>, sus <strong>espacios propios</strong> correspondientes y diga si es diagonalizable.`,
        conceptos: ['u7-polinomio-caracteristico', 'u7-espacio-propio', 'u7-criterio-diagonalizacion'],
        pista: tex`Desarrollá el determinante por la primera columna (tiene dos ceros). Y para los autovectores aprovechá la forma compañera: probá con $(1, \lambda, \lambda^2)$.`,
        resolucion: tex`<h2>Matriz a) — $A_C$</h2>
        <h3>Polinomio característico</h3>
        <p>Desarrollando $\det(A_C - \lambda I)$ por la <strong>primera columna</strong>, que tiene dos ceros:</p>
        <div class="fx center">$$\begin{vmatrix} -\lambda & 1 & 0 \\ 0 & -\lambda & 1 \\ 6 & -11 & 6-\lambda \end{vmatrix}
        = -\lambda\begin{vmatrix} -\lambda & 1 \\ -11 & 6-\lambda \end{vmatrix} + 6\begin{vmatrix} 1 & 0 \\ -\lambda & 1 \end{vmatrix}$$</div>
        <div class="fx center">$$= -\lambda\bigl[(-\lambda)(6-\lambda) + 11\bigr] + 6\,(1) = -\lambda\bigl[\lambda^2 - 6\lambda + 11\bigr] + 6$$</div>
        <div class="fx center">$$= -\lambda^3 + 6\lambda^2 - 11\lambda + 6$$</div>
        <div class="fx center">$$\boxed{P_A(\lambda) = -(\lambda^3 - 6\lambda^2 + 11\lambda - 6) = -(\lambda-1)(\lambda-2)(\lambda-3)}$$</div>
        <p>El factoreo se encuentra probando los divisores de $6$: $\;P(1) = -(1 - 6 + 11 - 6) = 0$ ✓, y dividiendo queda $\lambda^2 - 5\lambda + 6 = (\lambda-2)(\lambda-3)$.</p>
        <div class="note tip"><b class="lbl">El control de la matriz compañera</b>
        La última fila es $(6,\; -11,\; 6)$ y el polinomio resultó $\lambda^3 - 6\lambda^2 + 11\lambda - 6$: los coeficientes son los de la última fila con los signos alternados, leídos al revés. Es la propiedad de las matrices compañeras y sirve para verificar el desarrollo sin repetirlo.</div>

        <h3>Autovalores y espacios propios</h3>
        <div class="fx center">$$\lambda_1 = 1, \qquad \lambda_2 = 2, \qquad \lambda_3 = 3 \qquad (\text{tres distintos, todos simples})$$</div>
        <p>Para una matriz compañera, el autovector de $\lambda$ es siempre $(1,\, \lambda,\, \lambda^2)$. Se ve de las dos primeras filas del sistema $(A_C - \lambda I)v = \vec 0$: con $v = (x,y,z)$, la primera da $-\lambda x + y = 0 \Rightarrow y = \lambda x$, y la segunda $-\lambda y + z = 0 \Rightarrow z = \lambda y = \lambda^2 x$. Tomando $x = 1$:</p>
        <div class="fx center">$$E_1 = \operatorname{gen}\{(1,\,1,\,1)\}, \qquad E_2 = \operatorname{gen}\{(1,\,2,\,4)\}, \qquad E_3 = \operatorname{gen}\{(1,\,3,\,9)\}$$</div>
        <p><strong>Verificaciones</strong> (la tercera fila es la que no es automática):</p>
        <div class="fx center">$$A_C\,(1,1,1) = (1,\;\; 1,\;\; 6 - 11 + 6) = (1,1,1) = 1\cdot(1,1,1) \;✓$$</div>
        <div class="fx center">$$A_C\,(1,2,4) = (2,\;\; 4,\;\; 6 - 22 + 24) = (2,4,8) = 2\cdot(1,2,4) \;✓$$</div>
        <div class="fx center">$$A_C\,(1,3,9) = (3,\;\; 9,\;\; 6 - 33 + 54) = (3,9,27) = 3\cdot(1,3,9) \;✓$$</div>
        <p>Los tres $m_a = m_g = 1$.</p>

        <h3>¿Diagonalizable?</h3>
        <p><strong>SÍ.</strong> Tiene <strong>tres autovalores reales distintos</strong>, así que por el corolario de [[u7-criterio-diagonalizacion]] es diagonalizable sin necesidad de examinar multiplicidades.</p>
        <div class="fx center">$$B = \{(1,1,1),\; (1,2,4),\; (1,3,9)\}, \qquad D = \operatorname{diag}(1,\, 2,\, 3)$$</div>
        <p>Controles: $\operatorname{tr} A_C = 0 + 0 + 6 = 6 = 1+2+3$ ✓; $\det A_C = 1 \cdot 2 \cdot 3 = 6$, y evaluando $P_A(0) = -(-6) = 6$ ✓</p>

        <hr>

        <h2>Matriz b) — $B_C$</h2>
        <h3>Polinomio característico</h3>
        <p>Mismo desarrollo, con la última fila $(4,\, -8,\, 5)$:</p>
        <div class="fx center">$$P_B(\lambda) = -\lambda\bigl[(-\lambda)(5-\lambda) + 8\bigr] + 4 = -\lambda\bigl[\lambda^2 - 5\lambda + 8\bigr] + 4$$</div>
        <div class="fx center">$$= -\lambda^3 + 5\lambda^2 - 8\lambda + 4 = -(\lambda^3 - 5\lambda^2 + 8\lambda - 4)$$</div>
        <p>Probando $\lambda = 1$: $\;1 - 5 + 8 - 4 = 0$ ✓. Dividiendo por $(\lambda - 1)$ queda $\lambda^2 - 4\lambda + 4 = (\lambda-2)^2$:</p>
        <div class="fx center">$$\boxed{P_B(\lambda) = -(\lambda - 1)(\lambda - 2)^2}$$</div>

        <h3>Autovalores</h3>
        <div class="fx center">$$\lambda_1 = 1 \;\;(m_a = 1), \qquad \lambda_2 = 2 \;\;(m_a = 2)$$</div>
        <p>Las dos son reales, pero $\lambda = 2$ es <strong>doble</strong>: hay que calcularle la multiplicidad geométrica.</p>

        <h3>Espacio propio de $\lambda_1 = 1$</h3>
        <p>Por la forma compañera, $(1, 1, 1)$:</p>
        <div class="fx center">$$E_1 = \operatorname{gen}\{(1,\,1,\,1)\}, \qquad m_g = 1 = m_a \;✓$$</div>
        <p>Verificación: $\;B_C(1,1,1) = (1,\;\; 1,\;\; 4 - 8 + 5) = (1,1,1)$ ✓</p>

        <h3>Espacio propio de $\lambda_2 = 2$ — el que decide</h3>
        <div class="fx center">$$(B_C - 2I) = \begin{pmatrix} -2 & 1 & 0 \\ 0 & -2 & 1 \\ 4 & -8 & 3 \end{pmatrix}$$</div>
        <p>De la primera fila: $\;-2x + y = 0 \Rightarrow y = 2x$. De la segunda: $\;-2y + z = 0 \Rightarrow z = 2y = 4x$. La tercera es redundante:</p>
        <div class="fx center">$$4x - 8(2x) + 3(4x) = 4x - 16x + 12x = 0 \;✓\;\text{para todo } x$$</div>
        <p>Queda <strong>una sola</strong> variable libre:</p>
        <div class="fx center">$$E_2 = \operatorname{gen}\{(1,\,2,\,4)\}, \qquad m_g(2) = 1 \; < \; 2 = m_a(2)$$</div>
        <p>Verificación: $\;B_C(1,2,4) = (2,\;\; 4,\;\; 4 - 16 + 20) = (2,4,8) = 2(1,2,4)$ ✓</p>

        <h3>¿Diagonalizable?</h3>
        <p><strong>NO.</strong> Sólo se consiguen $1 + 1 = 2$ autovectores linealmente independientes y hacen falta $3$. La causa se detalla en el inciso (iii).</p>
        <p>Controles: $\operatorname{tr} B_C = 5 = 1 + 2 + 2$ ✓; $\det B_C = 1 \cdot 2 \cdot 2 = 4$, y $P_B(0) = -(-4) = 4$ ✓</p>

        <hr>
        <div class="tabla-wrap"><table>
          <thead><tr><th></th><th>$P(\lambda)$</th><th>Autovalores</th><th>Espacios propios</th><th>¿Diag.?</th></tr></thead>
          <tbody>
            <tr><td>a)</td><td>$-(\lambda-1)(\lambda-2)(\lambda-3)$</td><td>$1, 2, 3$</td><td>$\operatorname{gen}\{(1,1,1)\}$, $\operatorname{gen}\{(1,2,4)\}$, $\operatorname{gen}\{(1,3,9)\}$</td><td><strong>Sí</strong></td></tr>
            <tr><td>b)</td><td>$-(\lambda-1)(\lambda-2)^2$</td><td>$1$, $2$ (doble)</td><td>$\operatorname{gen}\{(1,1,1)\}$, $\operatorname{gen}\{(1,2,4)\}$</td><td><strong>No</strong></td></tr>
          </tbody>
        </table></div>
        <div class="note tip"><b class="lbl">Los autovectores son los mismos de siempre</b>
        En las dos matrices aparecen $(1,1,1)$ y $(1,2,4)$: son $(1,\lambda,\lambda^2)$ para $\lambda = 1$ y $\lambda = 2$, que son autovalores de ambas. La diferencia está en el tercero: en a) hay un $\lambda = 3$ con su $(1,3,9)$, y en b) el $\lambda = 2$ se repite <strong>sin</strong> aportar un segundo autovector.</div>`,
        resultado: tex`<strong>a)</strong> $P_A(\lambda) = -(\lambda-1)(\lambda-2)(\lambda-3)$, con $E_1 = \operatorname{gen}\{(1,1,1)\}$, $E_2 = \operatorname{gen}\{(1,2,4)\}$, $E_3 = \operatorname{gen}\{(1,3,9)\}$. <strong>Sí</strong> es diagonalizable (tres autovalores distintos), $D = \operatorname{diag}(1,2,3)$.<br>
        <strong>b)</strong> $P_B(\lambda) = -(\lambda-1)(\lambda-2)^2$, con $E_1 = \operatorname{gen}\{(1,1,1)\}$ y $E_2 = \operatorname{gen}\{(1,2,4)\}$. <strong>No</strong> es diagonalizable: $m_g(2) = 1 < 2$.` },

      { id: 'f3-2ii', rot: 'ii', enunciado: tex`Escriba las <strong>bases de los espacios propios</strong> si $T: P_2 \to P_2$.`,
        conceptos: ['u7-espacio-propio', 'u4-hallar-base'],
        pista: tex`No hay que recalcular nada: las ternas ya están. Sólo hay que leerlas como coordenadas en la base canónica de $P_2$.`,
        resolucion: tex`<p>Las cuentas son <strong>idénticas</strong>, porque $\dim P_2 = 3 = \dim\mathbb{R}^3$ y la matriz es la misma. Lo único que cambia es la <em>interpretación</em>: las ternas que salieron del sistema ya no son vectores de $\mathbb{R}^3$ sino <strong>coordenadas de polinomios</strong> en la base canónica</p>
        <div class="fx center">$$C = \{x^2,\; x,\; 1\}$$</div>
        <p>de modo que $(p,\, q,\, r) \to p\,x^2 + q\,x + r$.</p>

        <h3>Traducción de las bases</h3>
        <div class="tabla-wrap"><table>
          <thead><tr><th>Coordenadas en $\mathbb{R}^3$</th><th>Polinomio en $P_2$</th></tr></thead>
          <tbody>
            <tr><td>$(1,\, 1,\, 1)$</td><td>$x^2 + x + 1$</td></tr>
            <tr><td>$(1,\, 2,\, 4)$</td><td>$x^2 + 2x + 4$</td></tr>
            <tr><td>$(1,\, 3,\, 9)$</td><td>$x^2 + 3x + 9$</td></tr>
          </tbody>
        </table></div>

        <h3>Matriz a)</h3>
        <div class="fx center">$$E_1 = \operatorname{gen}\{x^2 + x + 1\}, \qquad E_2 = \operatorname{gen}\{x^2 + 2x + 4\}, \qquad E_3 = \operatorname{gen}\{x^2 + 3x + 9\}$$</div>
        <p>Las tres bases: $\{x^2+x+1\}$, $\{x^2+2x+4\}$, $\{x^2+3x+9\}$, cada una de un solo elemento. La base que diagonaliza es</p>
        <div class="fx center">$$B = \{\,x^2+x+1,\;\; x^2+2x+4,\;\; x^2+3x+9\,\}, \qquad [T]_B = \operatorname{diag}(1,2,3)$$</div>

        <h3>Matriz b)</h3>
        <div class="fx center">$$E_1 = \operatorname{gen}\{x^2 + x + 1\}, \qquad E_2 = \operatorname{gen}\{x^2 + 2x + 4\}$$</div>
        <p>con bases $\{x^2+x+1\}$ y $\{x^2+2x+4\}$. Entre las dos aportan sólo <strong>dos</strong> polinomios independientes, y hacen falta tres: sigue sin ser diagonalizable, igual que en $\mathbb{R}^3$.</p>

        <h3>Verificación en el lenguaje de $P_2$</h3>
        <p>Vale la pena comprobar un caso directamente. Para la matriz a), $[T]_C\,(1,1,1) = (1,1,1)$ significa</p>
        <div class="fx center">$$T(x^2 + x + 1) = 1 \cdot (x^2 + x + 1)$$</div>
        <p>es decir, el polinomio $x^2+x+1$ queda fijo por $T$: es autovector de autovalor $1$ ✓</p>
        <div class="note tip"><b class="lbl">Por qué el enunciado agrega este inciso</b>
        Para comprobar que se entendió que la matriz es la <strong>misma</strong> y que lo que cambia es sólo cómo se leen las columnas. Un error frecuente es volver a hacer todas las cuentas creyendo que $P_2$ exige otro método; otro, dejar las respuestas como ternas sin traducirlas a polinomios. Los autovalores, las multiplicidades y la conclusión sobre diagonalizabilidad <strong>no cambian</strong> con el espacio: dependen sólo de la matriz.</div>
        <div class="note"><b class="lbl">Si la base canónica fuera $\{1, x, x^2\}$</b>
        Algunos libros ordenan la canónica de $P_2$ al revés. Con ese orden, $(1,1,1)$ seguiría siendo $1 + x + x^2$ (igual, por ser simétrico), pero $(1,2,4)$ pasaría a ser $1 + 2x + 4x^2$ en lugar de $x^2+2x+4$. La cátedra usa $C = \{x^2, x, 1\}$, que es el orden que se emplea acá.</div>`,
        resultado: tex`Con $C = \{x^2,x,1\}$: <strong>a)</strong> $E_1 = \operatorname{gen}\{x^2+x+1\}$, $E_2 = \operatorname{gen}\{x^2+2x+4\}$, $E_3 = \operatorname{gen}\{x^2+3x+9\}$, y $B = \{x^2+x+1,\, x^2+2x+4,\, x^2+3x+9\}$ diagonaliza. <strong>b)</strong> $E_1 = \operatorname{gen}\{x^2+x+1\}$ y $E_2 = \operatorname{gen}\{x^2+2x+4\}$: sólo dos, sigue sin diagonalizar.` },

      { id: 'f3-2iii', rot: 'iii', enunciado: tex`Explicar <strong>por qué no es posible diagonalizar</strong>, cuando no lo sea.`,
        conceptos: ['u7-criterio-diagonalizacion', 'u7-teorema-multiplicidades', 'u7-leer-polinomio'],
        pista: tex`La matriz a) sí se puede, así que hay que decirlo. Y para la b), identificar cuál de las dos causas posibles es.`,
        resolucion: tex`<h3>Matriz a): sí es posible, así que no hay nada que explicar</h3>
        <p>$P_A(\lambda) = -(\lambda-1)(\lambda-2)(\lambda-3)$ tiene <strong>tres raíces reales distintas</strong>. Autovectores de autovalores distintos son siempre linealmente independientes, así que hay $3 = \dim\mathbb{R}^3$ autovectores L.I. y la matriz es diagonalizable ([[u7-criterio-diagonalizacion]]). El enunciado dice «cuando no lo sea», y éste no es el caso.</p>

        <h3>Matriz b): no es posible, y la causa es $m_g < m_a$</h3>
        <p>Hay exactamente <strong>dos</strong> motivos por los que una matriz puede no ser diagonalizable. Conviene descartar uno y señalar el otro.</p>

        <h4>Motivo 1 — faltan raíces reales: <em>no</em> es el caso acá</h4>
        <p>$P_B(\lambda) = -(\lambda-1)(\lambda-2)^2$ factorea completamente en $\mathbb{R}$: las tres raíces son $1$, $2$ y $2$, todas reales ([[u7-leer-polinomio]]). No hay ningún factor cuadrático irreducible. Este motivo queda descartado.</p>

        <h4>Motivo 2 — multiplicidad geométrica menor que la algebraica: <strong>éste es</strong></h4>
        <p>Para $\lambda = 2$:</p>
        <div class="fx center">$$m_a(2) = 2 \quad\text{(aparece al cuadrado en } P_B) \qquad\text{pero}\qquad m_g(2) = \dim E_2 = 1$$</div>
        <p>El cálculo de $m_g$: la matriz $B_C - 2I$ tiene <strong>rango 2</strong>, porque sus filas $(-2,1,0)$ y $(0,-2,1)$ son independientes y la tercera, $(4,-8,3)$, es combinación de ellas. Entonces</p>
        <div class="fx center">$$m_g(2) = \nu(B_C - 2I) = 3 - \rho(B_C - 2I) = 3 - 2 = 1$$</div>
        <p>Como $m_g(2) = 1 < 2 = m_a(2)$, el criterio falla.</p>

        <h4>El conteo final</h4>
        <div class="fx center">$$\underbrace{m_g(1)}_{1} + \underbrace{m_g(2)}_{1} = 2 \;<\; 3 = \dim \mathbb{R}^3$$</div>
        <p>Sólo se consiguen <strong>2</strong> autovectores linealmente independientes, $(1,1,1)$ y $(1,2,4)$, y para diagonalizar harían falta <strong>3</strong>. No existe ninguna base de $\mathbb{R}^3$ formada por autovectores de $B_C$, y por lo tanto no existe base en la que $[T]$ sea diagonal.</p>

        <h3>Qué está pasando geométricamente</h3>
        <p>El autovalor $\lambda = 2$ «pide» dos direcciones propias (su multiplicidad algebraica es 2) pero el espacio propio $E_2$ es una sola <strong>recta</strong>, no un plano. Falta una dirección: no hay un segundo vector independiente que $T$ sólo estire por $2$. Por el [[u7-teorema-multiplicidades]] esto nunca puede ir al revés —siempre $1 \leq m_g \leq m_a$—, así que el déficit es la única forma en que puede fallar.</p>

        <div class="tabla-wrap"><table>
          <thead><tr><th>Matriz</th><th>¿Raíces reales?</th><th>¿$m_g = m_a$?</th><th>¿Diagonalizable?</th><th>Causa de la falla</th></tr></thead>
          <tbody>
            <tr><td>a) $A_C$</td><td>sí (1, 2, 3)</td><td>sí (todos simples)</td><td><strong>Sí</strong></td><td>—</td></tr>
            <tr><td>b) $B_C$</td><td>sí (1, 2, 2)</td><td><strong>no</strong>: $m_g(2) = 1 < 2$</td><td><strong>No</strong></td><td>déficit de autovectores en $\lambda = 2$</td></tr>
          </tbody>
        </table></div>

        <div class="note tip"><b class="lbl">Cómo redactar la respuesta en el examen</b>
        «La a) sí es diagonalizable: tiene tres autovalores reales distintos. La b) no: aunque todas sus raíces son reales, el autovalor $\lambda = 2$ tiene $m_a = 2$ pero $m_g = \dim E_2 = 1$, así que sólo hay 2 autovectores L.I. y hacen falta 3.» Lo que se evalúa es nombrar <strong>cuál</strong> de las dos causas es y respaldarlo con el cálculo de $m_g$.</div>
        <div class="note warn"><b class="lbl">No alcanza con «el autovalor está repetido»</b>
        Un autovalor repetido <em>puede</em> ser perfectamente diagonalizable: pasa en el parcial de promoción, donde $\lambda = 5$ es doble y $m_g = 2 = m_a$. La repetición es sólo el aviso de que hay que mirar; lo que decide es comparar $m_g$ con $m_a$. Decir «no es diagonalizable porque tiene un autovalor doble» es un error conceptual.</div>`,
        resultado: tex`La <strong>a) sí</strong> es diagonalizable (tres autovalores reales distintos), así que no hay nada que explicar. La <strong>b) no</strong>, y la causa es la <strong>segunda</strong> del criterio: todas las raíces son reales, pero $\lambda = 2$ tiene $m_a = 2$ y $m_g = \dim E_2 = 1$ (el rango de $B_C - 2I$ es 2). Sólo hay $1 + 1 = 2$ autovectores L.I. y hacen falta 3.` }
    ]}
]});
