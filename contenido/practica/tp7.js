/* TP 7 — Autovalores y autovectores
   Enunciado: "AutovaloresAutovectores-2014_2_.pdf" (7_EAL_2026/7_autovalores_autovectores) */

EAL.tp({
  id: 'tp7', num: 7, unidad: 'u7',
  titulo: 'Autovalores y autovectores',
  resumen: 'Polinomio característico, espacios propios, multiplicidades y diagonalización, en R^n, en polinomios, en matrices y en espacios abstractos.',
  nota: tex`<b class="lbl">Antes de abrir las resoluciones</b> Intentá cada ítem a mano y usá la resolución para <strong>autocorregirte</strong>.<br><br>
  <b class="lbl">Dónde pega el parcial</b> Esta unidad es casi todo el parcial de promoción y aparece en los tres finales. El guion completo está en [[u7-metodo-diagonalizar]], y el ejercicio 6 de este práctico es exactamente el formato del parcial.<br><br>
  <b class="lbl">Los cuatro atajos que más tiempo ahorran</b>
  <ol>
    <li><strong>Matriz triangular ⇒ autovalores en la diagonal.</strong> Mirar la matriz antes de lanzarse al determinante ([[u7-polinomio-caracteristico]]).</li>
    <li><strong>$m_a = 1 \Rightarrow m_g = 1$</strong>, por $1 \le m_g \le m_a$ ([[u7-teorema-multiplicidades]]). Sólo los autovalores <em>repetidos</em> pueden impedir la diagonalización: son los únicos que hay que examinar.</li>
    <li><strong>Controles de traza y determinante:</strong> $\operatorname{tr}A = \sum \lambda_i$ y $\det A = \prod \lambda_i$ (con multiplicidades). Detectan errores de signo en el polinomio característico en dos segundos.</li>
    <li><strong>$\lambda = 0$ es autovalor $\iff$ el núcleo no es trivial</strong>, porque $E_0 = \operatorname{Nuc}(T)$ ([[u7-espacio-propio]]). De ahí salen todas las preguntas de inyectividad «sin calcular».</li>
  </ol>`,

  ejercicios: [

  /* ========================= 1 ========================= */
  { id: 'tp7-1', num: '1',
    enunciado: tex`<p>Sea $A = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$ la matriz asociada a una transformación lineal con respecto a la base canónica.</p>`,
    incisos: [

      { id: 'tp7-1a', rot: 'a', enunciado: tex`Determinar cuáles de los siguientes vectores de $\mathbb{R}^2$ son autovectores de $A$ y para ellos dar el autovalor asociado: i) $(1,1)$; ii) $(-2,1)$; iii) $(-3,3)$.`,
        conceptos: ['u7-autovalor'],
        pista: tex`Para cada vector, calculá $Av$ y mirá si el resultado es un <em>múltiplo escalar</em> del vector original. No hace falta el polinomio característico.`,
        resolucion: tex`<p>El test es directo ([[u7-autovalor]]): se calcula $Av$ y se verifica si da $\lambda v$ para algún escalar.</p>

        <h3>i) $v = (1,1)$</h3>
        <div class="fx center">$$A\begin{pmatrix} 1 \\ 1\end{pmatrix} = \begin{pmatrix} 2+2 \\ 2+2\end{pmatrix} = \begin{pmatrix} 4 \\ 4\end{pmatrix} = 4\begin{pmatrix} 1 \\ 1\end{pmatrix}$$</div>
        <p><strong>Sí es autovector</strong>, con $\lambda = 4$.</p>

        <h3>ii) $v = (-2,1)$</h3>
        <div class="fx center">$$A\begin{pmatrix} -2 \\ 1\end{pmatrix} = \begin{pmatrix} -4+2 \\ -4+2\end{pmatrix} = \begin{pmatrix} -2 \\ -2\end{pmatrix}$$</div>
        <p>¿Es $(-2,-2)$ múltiplo de $(-2,1)$? La primera componente exigiría $\lambda = 1$ y la segunda $\lambda = -2$. No coinciden.</p>
        <p><strong>No es autovector.</strong></p>

        <h3>iii) $v = (-3,3)$</h3>
        <div class="fx center">$$A\begin{pmatrix} -3 \\ 3\end{pmatrix} = \begin{pmatrix} -6+6 \\ -6+6\end{pmatrix} = \begin{pmatrix} 0 \\ 0\end{pmatrix} = 0 \cdot \begin{pmatrix} -3 \\ 3\end{pmatrix}$$</div>
        <p><strong>Sí es autovector</strong>, con $\lambda = 0$.</p>
        <div class="note warn"><b class="lbl">Que el autovalor sea 0 es perfectamente válido</b>
        Lo que <strong>no</strong> puede ser nulo es el <em>autovector</em>. Acá $v = (-3,3) \neq \vec 0$ y su imagen es $\vec 0$, lo que significa que $v \in \operatorname{Nuc}(A)$. Por [[u7-espacio-propio]], $E_0 = \operatorname{Nuc}(T)$, así que $\lambda = 0$ siendo autovalor es exactamente la señal de que $T$ no es inyectiva.</div>`,
        resultado: tex`i) $(1,1)$ <strong>sí</strong>, con $\lambda = 4$. &nbsp; ii) $(-2,1)$ <strong>no</strong> ($A v = (-2,-2)$, que no es múltiplo de $v$). &nbsp; iii) $(-3,3)$ <strong>sí</strong>, con $\lambda = 0$.` },

      { id: 'tp7-1b', rot: 'b', enunciado: tex`Para cada uno de los autovalores, encontrar dos autovectores asociados.`,
        conceptos: ['u7-espacio-propio', 'u7-propiedades'],
        pista: tex`Primero hay que estar seguro de cuáles son <em>todos</em> los autovalores: para eso sí hace falta el polinomio característico. Después, cada espacio propio es una recta, y cualquier múltiplo no nulo sirve.`,
        resolucion: tex`<h3>Paso 1 — Todos los autovalores</h3>
        <div class="fx center">$$P(\lambda) = \det(A - \lambda I) = \begin{vmatrix} 2-\lambda & 2 \\ 2 & 2-\lambda\end{vmatrix} = (2-\lambda)^2 - 4 = \lambda^2 - 4\lambda = \lambda\,(\lambda - 4)$$</div>
        <div class="fx center">$$\lambda_1 = 0, \qquad \lambda_2 = 4$$</div>
        <p>Son los dos que aparecieron en el inciso a) — no hay otros. Control: $\operatorname{tr}A = 2+2 = 4 = 0 + 4$ ✓ y $\det A = 4 - 4 = 0 = 0 \cdot 4$ ✓</p>

        <h3>Paso 2 — Espacios propios</h3>
        <p><strong>$\lambda = 0$:</strong> se resuelve $(A - 0\,I)\,v = \vec 0$, o sea $A v = \vec 0$:</p>
        <div class="fx center">$$2x + 2y = 0 \;\Longrightarrow\; y = -x \;\Longrightarrow\; E_0 = \operatorname{gen}\{(1,-1)\}$$</div>
        <p><strong>Dos autovectores:</strong> $\;(1,-1)$ y $\;(2,-2)$. También $(-3,3)$, el del inciso a.iii.</p>

        <p><strong>$\lambda = 4$:</strong> se resuelve $(A - 4I)v = \vec 0$:</p>
        <div class="fx center">$$\begin{pmatrix} -2 & 2 \\ 2 & -2\end{pmatrix}\begin{pmatrix} x \\ y\end{pmatrix} = \vec 0 \;\Longrightarrow\; -2x + 2y = 0 \;\Longrightarrow\; y = x \;\Longrightarrow\; E_4 = \operatorname{gen}\{(1,1)\}$$</div>
        <p><strong>Dos autovectores:</strong> $\;(1,1)$ y $\;(5,5)$.</p>

        <div class="note tip"><b class="lbl">Por qué siempre hay infinitos</b>
        Por la propiedad 1 de [[u7-propiedades]], si $v$ es autovector de $\lambda$ también lo es $\alpha v$ para todo $\alpha \neq 0$. Los autovectores nunca son únicos: vienen en <strong>rectas enteras</strong> (los espacios propios, menos el origen). Pedir «dos autovectores» es pedir dos múltiplos distintos.</div>
        <div class="note"><b class="lbl">Dato</b> $\dim E_0 = \dim E_4 = 1$, y como ambos tienen $m_a = 1$, por [[u7-teorema-multiplicidades]] no podía ser de otra manera. Dos autovalores distintos en $\mathbb{R}^2$ ⇒ $A$ es diagonalizable, con $B = \{(1,-1),(1,1)\}$ y $[T]_B = \operatorname{diag}(0,4)$.</div>`,
        resultado: tex`$\lambda = 0$: $E_0 = \operatorname{gen}\{(1,-1)\}$ — por ejemplo $(1,-1)$ y $(2,-2)$. &nbsp; $\lambda = 4$: $E_4 = \operatorname{gen}\{(1,1)\}$ — por ejemplo $(1,1)$ y $(5,5)$.` }
    ]},

  /* ========================= 2 ========================= */
  { id: 'tp7-2', num: '2',
    enunciado: tex`<p>Sea la transformación lineal $T: P_2 \to P_2$ tal que $T(ax^2+bx+c) = 3ax^2 + (a+5b-c)x + (a+2b+2c)$.</p>
    <div class="note tip"><b class="lbl">El test no requiere matriz</b> Para decidir si un polinomio es autovector basta evaluar $T$ en él y ver si el resultado es un múltiplo. Recién en el inciso b) conviene armar la matriz.</div>`,
    incisos: [

      { id: 'tp7-2a', rot: 'a', enunciado: tex`Determinar cuáles de los siguientes vectores de $P_2$ son autovectores de $T$. En tal caso, determinar el autovalor asociado: i) $p(x) = x^2 - x - 1$; ii) $p(x) = 2x$; iii) $p(x) = x+1$; iv) $p(x) = 2x^2 + x + 4$.`,
        conceptos: ['u7-autovalor'],
        resolucion: tex`<p>Para cada polinomio se identifican $a$, $b$, $c$ y se aplica la fórmula.</p>

        <h3>i) $p = x^2 - x - 1$ &nbsp;($a=1$, $b=-1$, $c=-1$)</h3>
        <div class="fx center">$$T(p) = 3(1)x^2 + \bigl(1 + 5(-1) - (-1)\bigr)x + \bigl(1 + 2(-1) + 2(-1)\bigr)$$</div>
        <div class="fx center">$$= 3x^2 + (1-5+1)x + (1-2-2) = 3x^2 - 3x - 3 = 3\,(x^2 - x - 1) = 3p$$</div>
        <p><strong>Sí es autovector</strong>, con $\lambda = 3$.</p>

        <h3>ii) $p = 2x$ &nbsp;($a=0$, $b=2$, $c=0$)</h3>
        <div class="fx center">$$T(p) = 0 + (0 + 10 - 0)x + (0 + 4 + 0) = 10x + 4$$</div>
        <p>¿Es $10x+4$ múltiplo de $2x$? Tendría que ser $\lambda \cdot 2x$, que no tiene término constante, pero aparece un $4$. <strong>No es autovector.</strong></p>

        <h3>iii) $p = x+1$ &nbsp;($a=0$, $b=1$, $c=1$)</h3>
        <div class="fx center">$$T(p) = 0 + (0 + 5 - 1)x + (0 + 2 + 2) = 4x + 4 = 4\,(x+1) = 4p$$</div>
        <p><strong>Sí es autovector</strong>, con $\lambda = 4$.</p>

        <h3>iv) $p = 2x^2 + x + 4$ &nbsp;($a=2$, $b=1$, $c=4$)</h3>
        <div class="fx center">$$T(p) = 6x^2 + (2 + 5 - 4)x + (2 + 2 + 8) = 6x^2 + 3x + 12 = 3\,(2x^2+x+4) = 3p$$</div>
        <p><strong>Sí es autovector</strong>, con $\lambda = 3$.</p>
        <div class="note"><b class="lbl">Dos autovectores del mismo autovalor</b>
        Los incisos i) y iv) dan los dos $\lambda = 3$, y <strong>no son múltiplos entre sí</strong> ($x^2-x-1$ y $2x^2+x+4$). Por la propiedad 2 de [[u7-propiedades]], toda combinación lineal no nula de ellos también es autovector de $\lambda = 3$, así que $\dim E_3 \ge 2$. Es lo que el inciso b) explota.</div>`,
        resultado: tex`i) <strong>sí</strong>, $\lambda = 3$. &nbsp; ii) <strong>no</strong> ($T(2x) = 10x+4$). &nbsp; iii) <strong>sí</strong>, $\lambda = 4$. &nbsp; iv) <strong>sí</strong>, $\lambda = 3$.` },

      { id: 'tp7-2b', rot: 'b', enunciado: tex`Para el autovalor $\lambda = 3$ hallar un autovector asociado que no sea múltiplo escalar de los anteriores.`,
        conceptos: ['u7-espacio-propio'],
        pista: tex`Calculá el espacio propio $E_3$ completo. Vas a ver que tiene dimensión 2, así que hay mucho más que múltiplos de los dos ya encontrados.`,
        resolucion: tex`<h3>Paso 1 — La matriz de $T$</h3>
        <p>Usando coordenadas $(a,b,c)$ para $ax^2+bx+c$ —es decir la base ordenada $\{x^2,\, x,\, 1\}$— la fórmula $T(a,b,c) = (3a,\;\; a+5b-c,\;\; a+2b+2c)$ da</p>
        <div class="fx center">$$A = \begin{pmatrix} 3 & 0 & 0 \\ 1 & 5 & -1 \\ 1 & 2 & 2 \end{pmatrix}$$</div>

        <h3>Paso 2 — El espacio propio $E_3$</h3>
        <p>Se resuelve $(A - 3I)\,v = \vec 0$:</p>
        <div class="fx center">$$\begin{pmatrix} 0 & 0 & 0 \\ 1 & 2 & -1 \\ 1 & 2 & -1 \end{pmatrix}\begin{pmatrix} a \\ b \\ c\end{pmatrix} = \vec 0
        \;\Longrightarrow\; a + 2b - c = 0 \;\Longrightarrow\; c = a + 2b$$</div>
        <p>La primera fila es nula y las otras dos son <strong>iguales</strong>: queda <em>una sola</em> ecuación con tres incógnitas, así que $a$ y $b$ son libres y</p>
        <div class="fx center">$$\dim E_3 = 2$$</div>
        <p>Base, dando valor 1 a cada parámetro libre ([[u4-hallar-base]]):</p>
        <div class="fx center">$$(a,b) = (1,0) \to (1,0,1) = x^2 + 1, \qquad (a,b) = (0,1) \to (0,1,2) = x + 2$$</div>
        <div class="fx center">$$E_3 = \operatorname{gen}\{x^2 + 1,\;\; x + 2\}$$</div>

        <h3>Paso 3 — Elegir uno que no sea múltiplo de los anteriores</h3>
        <p>Los del inciso a) eran $p_1 = x^2 - x - 1$ y $p_4 = 2x^2 + x + 4$. Sirve, por ejemplo,</p>
        <div class="fx center">$$\boxed{p(x) = x^2 + 1}$$</div>
        <p>que no es múltiplo de ninguno de los dos (ni de $p_1$, que tiene término en $x$, ni de $p_4$, cuya razón de coeficientes no es constante).</p>
        <p><strong>Verificación directa</strong> con la fórmula original ($a=1$, $b=0$, $c=1$):</p>
        <div class="fx center">$$T(x^2+1) = 3x^2 + (1 + 0 - 1)x + (1 + 0 + 2) = 3x^2 + 3 = 3\,(x^2+1) \;✓$$</div>
        <p>También sirve $x + 2$: $\;T(x+2) = 0 + (0+5-2)x + (0+2+4) = 3x + 6 = 3(x+2)$ ✓</p>

        <div class="note tip"><b class="lbl">El panorama completo de esta $T$</b>
        $$P(\lambda) = (3-\lambda)\bigl[(5-\lambda)(2-\lambda) + 2\bigr] = (3-\lambda)(\lambda^2 - 7\lambda + 12) = -(\lambda-3)^2(\lambda - 4)$$
        Autovalores: $\lambda = 3$ con $m_a = 2$ y $\lambda = 4$ con $m_a = 1$. Y se verificó $m_g(3) = 2 = m_a(3)$; para $\lambda=4$ es $m_g = 1 = m_a$ automáticamente, con $E_4 = \operatorname{gen}\{x+1\}$ (el del inciso a.iii).
        <p>Como $m_g = m_a$ en los dos, <strong>$T$ es diagonalizable</strong> ([[u7-criterio-diagonalizacion]]), con $B = \{x^2+1,\; x+2,\; x+1\}$ y $[T]_B = \operatorname{diag}(3,3,4)$.</p>
        <p>Control: $\operatorname{tr}A = 3+5+2 = 10 = 3+3+4$ ✓</p></div>`,
        resultado: tex`$E_3 = \operatorname{gen}\{x^2+1,\; x+2\}$, de dimensión 2. Por ejemplo $p(x) = x^2 + 1$, que cumple $T(p) = 3p$ y no es múltiplo de los del inciso a).` }
    ]},

  /* ========================= 3 ========================= */
  { id: 'tp7-3', num: '3',
    enunciado: tex`<p>Dada la transformación lineal $T: \mathbb{R}^3 \to \mathbb{R}^3$ tal que
    $T(x,y,z) = \begin{pmatrix} 2 & 0 & 1 \\ -1 & -1 & 1 \\ 2 & 0 & 1 \end{pmatrix} \cdot \begin{pmatrix} x \\ y \\ z \end{pmatrix}$, hallar:</p>
    <div class="note"><b class="lbl">Observación que conviene hacer de entrada</b> La primera y la tercera fila de la matriz son <strong>idénticas</strong>. Eso garantiza $\det A = 0$, es decir que $\lambda = 0$ va a ser autovalor — antes de calcular nada.</div>`,
    incisos: [

      { id: 'tp7-3a', rot: 'a', enunciado: tex`El polinomio característico, autovalores y conjunto de autovectores.`,
        conceptos: ['u7-polinomio-caracteristico', 'u7-autovalor'],
        pista: tex`La segunda columna tiene dos ceros: desarrollá el determinante por ahí.`,
        resolucion: tex`<h3>Polinomio característico</h3>
        <p>Conviene desarrollar por la <strong>segunda columna</strong>, que tiene dos ceros — sólo sobrevive la entrada $(2,2)$, con signo $+$:</p>
        <div class="fx center">$$P(\lambda) = \begin{vmatrix} 2-\lambda & 0 & 1 \\ -1 & -1-\lambda & 1 \\ 2 & 0 & 1-\lambda \end{vmatrix}
        = (-1-\lambda)\begin{vmatrix} 2-\lambda & 1 \\ 2 & 1-\lambda\end{vmatrix}$$</div>
        <div class="fx center">$$= (-1-\lambda)\bigl[(2-\lambda)(1-\lambda) - 2\bigr] = (-1-\lambda)\bigl[\lambda^2 - 3\lambda + 2 - 2\bigr] = (-1-\lambda)\,\lambda\,(\lambda - 3)$$</div>
        <div class="fx center">$$P(\lambda) = -\lambda\,(\lambda+1)(\lambda-3)$$</div>
        <h3>Autovalores</h3>
        <div class="fx center">$$\lambda_1 = 0, \qquad \lambda_2 = -1, \qquad \lambda_3 = 3$$</div>
        <p><strong>Tres autovalores reales y distintos</strong>, cada uno con $m_a = 1$. Por el [[u7-teorema-n-autovectores|corolario]], eso ya garantiza que $T$ es diagonalizable.</p>
        <p><strong>Controles:</strong> $\operatorname{tr}A = 2 - 1 + 1 = 2 = 0 - 1 + 3$ ✓ y $\det A = 0 = 0\cdot(-1)\cdot 3$ ✓ (consistente con las filas repetidas).</p>

        <h3>Autovectores</h3>
        <p><strong>$\lambda = 0$:</strong> se resuelve $A v = \vec 0$:</p>
        <div class="fx center">$$\begin{cases} 2x + z = 0 \\ -x - y + z = 0 \\ 2x + z = 0 \end{cases}$$</div>
        <p>La 3.ª repite la 1.ª. De ella, $z = -2x$; sustituyendo en la 2.ª: $\;-x - y - 2x = 0 \Rightarrow y = -3x$.</p>
        <div class="fx center">$$E_0 = \operatorname{gen}\{(1,\, -3,\, -2)\}$$</div>
        <p>Control: $A(1,-3,-2) = (2+0-2,\;\; -1+3-2,\;\; 2+0-2) = (0,0,0)$ ✓</p>

        <p><strong>$\lambda = -1$:</strong> se resuelve $(A + I)v = \vec 0$:</p>
        <div class="fx center">$$\begin{pmatrix} 3 & 0 & 1 \\ -1 & 0 & 1 \\ 2 & 0 & 2\end{pmatrix}: \quad \begin{cases} 3x + z = 0 \\ -x + z = 0\end{cases} \;\Longrightarrow\; z = x \;\text{ y }\; z = -3x \;\Longrightarrow\; x = z = 0$$</div>
        <p>La columna de $y$ es nula, así que $y$ queda libre:</p>
        <div class="fx center">$$E_{-1} = \operatorname{gen}\{(0,\, 1,\, 0)\}$$</div>
        <p>Control: $A(0,1,0) = (0,\, -1,\, 0) = -1\,(0,1,0)$ ✓</p>

        <p><strong>$\lambda = 3$:</strong> se resuelve $(A - 3I)v = \vec 0$:</p>
        <div class="fx center">$$\begin{pmatrix} -1 & 0 & 1 \\ -1 & -4 & 1 \\ 2 & 0 & -2\end{pmatrix}: \quad -x + z = 0 \;\Rightarrow\; z = x; \quad -x - 4y + z = -4y = 0 \;\Rightarrow\; y = 0$$</div>
        <div class="fx center">$$E_3 = \operatorname{gen}\{(1,\, 0,\, 1)\}$$</div>
        <p>Control: $A(1,0,1) = (2+0+1,\;\; -1-0+1,\;\; 2+0+1) = (3,0,3) = 3\,(1,0,1)$ ✓</p>
        <div class="note"><b class="lbl">El «conjunto de autovectores»</b> Son todos los vectores no nulos de $E_0 \cup E_{-1} \cup E_3$, es decir todos los múltiplos no nulos de $(1,-3,-2)$, de $(0,1,0)$ y de $(1,0,1)$.</div>`,
        resultado: tex`$P(\lambda) = -\lambda(\lambda+1)(\lambda-3)$, con $\lambda = 0,\, -1,\, 3$. Autovectores: múltiplos no nulos de $(1,-3,-2)$, $(0,1,0)$ y $(1,0,1)$ respectivamente.` },

      { id: 'tp7-3b', rot: 'b', enunciado: tex`El subespacio propio correspondiente a cada autovalor indicando la dimensión del mismo. Si es posible, hallar una base $B$ formada por autovectores tal que $[T]_B$ sea diagonal y calcular $[T]_B$.`,
        conceptos: ['u7-espacio-propio', 'u7-multiplicidades', 'u7-criterio-diagonalizacion'],
        resolucion: tex`<h3>Subespacios propios y multiplicidades</h3>
        <div class="tbl"><table>
          <thead><tr><th>$\lambda$</th><th>$E_\lambda$</th><th>$m_g = \dim E_\lambda$</th><th>$m_a$</th><th>¿$m_g = m_a$?</th></tr></thead>
          <tbody>
            <tr><td>$0$</td><td>$\operatorname{gen}\{(1,-3,-2)\}$</td><td>1</td><td>1</td><td>sí</td></tr>
            <tr><td>$-1$</td><td>$\operatorname{gen}\{(0,1,0)\}$</td><td>1</td><td>1</td><td>sí</td></tr>
            <tr><td>$3$</td><td>$\operatorname{gen}\{(1,0,1)\}$</td><td>1</td><td>1</td><td>sí</td></tr>
          </tbody>
        </table></div>
        <p>Los tres autovalores tienen $m_a = 1$, así que por [[u7-teorema-multiplicidades]] forzosamente $m_g = 1$: no hacía falta ni calcular las dimensiones. Y la suma de las multiplicidades es $3 = \dim \mathbb{R}^3$.</p>

        <h3>Diagonalización</h3>
        <p>Por el [[u7-criterio-diagonalizacion|criterio]], $T$ <strong>es diagonalizable</strong>: hay tres autovectores L.I. (uno por cada autovalor distinto, y autovectores de autovalores distintos son siempre L.I. por la propiedad 3 de [[u7-propiedades]]).</p>
        <div class="fx center">$$B = \{(1,-3,-2),\;\; (0,1,0),\;\; (1,0,1)\}$$</div>
        <div class="fx center">$$[T]_B = \begin{pmatrix} 0 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 3 \end{pmatrix}$$</div>
        <p>La diagonal lleva los autovalores <strong>en el mismo orden</strong> en que los autovectores aparecen en $B$.</p>
        <p><strong>Control de que $B$ es base:</strong></p>
        <div class="fx center">$$\det\begin{pmatrix} 1 & -3 & -2 \\ 0 & 1 & 0 \\ 1 & 0 & 1\end{pmatrix} = 1\cdot\begin{vmatrix} 1 & -2 \\ 1 & 1\end{vmatrix} = 1 + 2 = 3 \neq 0 \;✓$$</div>
        <p>(Desarrollado por la segunda fila.)</p>
        <div class="note tip"><b class="lbl">Las dos maneras de obtener $[T]_B$</b>
        <strong>(1) Directa:</strong> como $T(v_i) = \lambda_i v_i$, resulta $[T(v_i)]_B = \lambda_i e_i$, y la matriz es diagonal con los autovalores — se escribe sin multiplicar nada.
        <p><strong>(2) Por conjugación:</strong> $[T]_B = P^{-1}A\,P$ con $P = [\;]_{BC}$, la matriz que tiene los autovectores como columnas. Da lo mismo, con mucho más trabajo. Es lo que piden los ejercicios 6 y los parciales cuando dicen «indicar dos maneras distintas de calcularla» ([[u7-metodo-diagonalizar]]).</p></div>`,
        resultado: tex`$E_0 = \operatorname{gen}\{(1,-3,-2)\}$, $E_{-1} = \operatorname{gen}\{(0,1,0)\}$, $E_3 = \operatorname{gen}\{(1,0,1)\}$, todos de dimensión 1. <strong>Es diagonalizable:</strong> con esa $B$, $[T]_B = \operatorname{diag}(0,\, -1,\, 3)$.` },

      { id: 'tp7-3c', rot: 'c', enunciado: tex`<strong>Sin realizar cálculos</strong>, indicar cuál es el núcleo de la transformación lineal.`,
        conceptos: ['u7-espacio-propio', 'u7-teorema-resumen'],
        resolucion: tex`<div class="fx center">$$\operatorname{Nuc}(T) = E_0 = \operatorname{gen}\{(1,\, -3,\, -2)\}, \qquad \dim\operatorname{Nuc}(T) = 1$$</div>
        <h3>Justificación</h3>
        <p>Por la identidad de [[u7-espacio-propio]]:</p>
        <div class="fx center">$$E_\lambda = \operatorname{Nuc}(T - \lambda\,\mathrm{Id}) \;\Longrightarrow\; E_0 = \operatorname{Nuc}(T - 0\cdot\mathrm{Id}) = \operatorname{Nuc}(T)$$</div>
        <p>El espacio propio del autovalor $0$ <strong>es</strong> el núcleo. Y en el inciso a) ya se calculó $E_0 = \operatorname{gen}\{(1,-3,-2)\}$, así que no hay nada nuevo que resolver: es el mismo sistema homogéneo $Av = \vec 0$, ya hecho.</p>
        <div class="note tip"><b class="lbl">Esto es lo que el ítem quiere que se note</b>
        Resolver «el núcleo» después de haber calculado los espacios propios es hacer dos veces el mismo trabajo. La equivalencia útil:
        $$\lambda = 0 \text{ es autovalor} \iff \operatorname{Nuc}(T) \neq \{\vec 0\} \iff T \text{ no es inyectiva} \iff \det A = 0$$
        que es el ítem xii del [[u7-teorema-resumen|teorema de resumen]]. Acá $0$ sí es autovalor, así que $T$ no es inyectiva ni sobreyectiva, y todos los doce ítems del teorema son <strong>falsos</strong>.</div>
        <div class="note"><b class="lbl">Y por el teorema de la dimensión</b> $\dim\operatorname{Im}(T) = 3 - 1 = 2$, que coincide con que la matriz tenga dos filas distintas (rango 2).</div>`,
        resultado: tex`$\operatorname{Nuc}(T) = E_0 = \operatorname{gen}\{(1,-3,-2)\}$, de dimensión 1 — porque $E_0 = \operatorname{Nuc}(T - 0\cdot\mathrm{Id}) = \operatorname{Nuc}(T)$, ya calculado en a).` }
    ]},

  /* ========================= 4 ========================= */
  { id: 'tp7-4', num: '4',
    enunciado: tex`<p>Dada la transformación lineal $T: M_2(\mathbb{R}) \to M_2(\mathbb{R})$ tal que $T(A) = D \cdot A$, donde $D = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, hallar:</p>`,
    incisos: [

      { id: 'tp7-4a', rot: 'a', enunciado: tex`El polinomio característico, autovalores y conjunto de autovectores.`,
        conceptos: ['u7-polinomio-caracteristico', 'u6-matriz-asociada'],
        pista: tex`Calculá $D\cdot A$ con $A$ genérica y armá la matriz de $T$ en la base canónica de $M_2$. Va a salir triangular.`,
        resolucion: tex`<h3>Paso 1 — La matriz de $T$</h3>
        <p>Con $A = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$:</p>
        <div class="fx center">$$T(A) = D\,A = \begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}\begin{pmatrix} a & b \\ c & d\end{pmatrix} = \begin{pmatrix} a+c & b+d \\ c & d \end{pmatrix}$$</div>
        <p>En coordenadas $(a,b,c,d)$ respecto de la base canónica $\{E_{11}, E_{12}, E_{21}, E_{22}\}$, eso es $T(a,b,c,d) = (a+c,\; b+d,\; c,\; d)$, es decir</p>
        <div class="fx center">$$M = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$</div>

        <h3>Paso 2 — Polinomio característico</h3>
        <p>$M$ es <strong>triangular superior</strong>, así que por el teorema de [[u7-polinomio-caracteristico]] los autovalores son los elementos de la diagonal y</p>
        <div class="fx center">$$P(\lambda) = (1-\lambda)^4$$</div>
        <div class="fx center">$$\lambda = 1 \text{ es el único autovalor, con } m_a = 4$$</div>
        <p>Control: $\operatorname{tr}M = 1+1+1+1 = 4 = 1+1+1+1$ ✓ y $\det M = 1 = 1^4$ ✓</p>

        <h3>Paso 3 — Autovectores</h3>
        <p>Se resuelve $(M - I)\,v = \vec 0$:</p>
        <div class="fx center">$$\begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} a \\ b \\ c \\ d\end{pmatrix} = \vec 0
        \;\Longrightarrow\; \begin{cases} c = 0 \\ d = 0 \end{cases}, \quad a, b \text{ libres}$$</div>
        <div class="fx center">$$E_1 = \left\{ \begin{pmatrix} a & b \\ 0 & 0\end{pmatrix} : a, b \in \mathbb{R} \right\} = \operatorname{gen}\left\{ \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix},\; \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} \right\}$$</div>
        <p><strong>El conjunto de autovectores</strong> son todas las matrices no nulas con la <strong>segunda fila nula</strong>.</p>
        <p><strong>Verificación:</strong> $\;T\begin{pmatrix} a & b \\ 0 & 0\end{pmatrix} = \begin{pmatrix} a+0 & b+0 \\ 0 & 0\end{pmatrix} = \begin{pmatrix} a & b \\ 0 & 0\end{pmatrix}$ ✓ queda fija, o sea $\lambda = 1$.</p>
        <div class="note"><b class="lbl">Por qué tiene sentido</b> Multiplicar por $D = I + E_{12}$ por izquierda <em>suma la segunda fila a la primera</em>. Si la segunda fila ya es nula, la matriz no cambia — de ahí que esas sean exactamente las fijas.</div>`,
        resultado: tex`$P(\lambda) = (1-\lambda)^4$, único autovalor $\lambda = 1$ con $m_a = 4$. Autovectores: las matrices no nulas $\begin{pmatrix} a & b \\ 0 & 0\end{pmatrix}$.` },

      { id: 'tp7-4b', rot: 'b', enunciado: tex`El subespacio propio correspondiente a cada autovalor indicando la dimensión del mismo. ¿Es $T$ diagonalizable? Justificar y, si es posible, hallar una base $B$ formada por autovectores tal que $[T]_B$ sea diagonal.`,
        conceptos: ['u7-espacio-propio', 'u7-criterio-diagonalizacion', 'u7-multiplicidades'],
        resolucion: tex`<h3>El único subespacio propio</h3>
        <div class="fx center">$$E_1 = \operatorname{gen}\left\{ \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix},\; \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} \right\}, \qquad m_g(1) = \dim E_1 = 2$$</div>

        <h3>¿Es diagonalizable? NO</h3>
        <p>Por el [[u7-criterio-diagonalizacion|criterio]], haría falta $m_g = m_a$ para todo autovalor. Acá hay un solo autovalor y</p>
        <div class="fx center">$$m_g(1) = 2 \;\;<\;\; 4 = m_a(1)$$</div>
        <p>Es la <strong>segunda</strong> de las dos causas de no diagonalizabilidad: todas las raíces son reales, pero el espacio propio es «más chico» de lo que la multiplicidad algebraica exigiría.</p>
        <p>Dicho de otro modo: $\dim M_2(\mathbb{R}) = 4$ y harían falta <strong>4</strong> autovectores linealmente independientes, pero sólo hay <strong>2</strong> disponibles — todos los autovectores viven en un subespacio de dimensión 2. No existe ninguna base de $M_2(\mathbb{R})$ formada por autovectores, así que <strong>no hay $B$ que diagonalice a $T$.</strong></p>
        <div class="note warn"><b class="lbl">Cómo redactar la justificación</b>
        No alcanza decir «no es diagonalizable». Hay que indicar <strong>cuál</strong> de las dos causas de [[u7-criterio-diagonalizacion]] ocurre:
        <ul>
          <li><strong>Acá:</strong> $m_g(1) = 2 < 4 = m_a(1)$. Faltan autovectores L.I. aunque el único autovalor sea real.</li>
          <li><strong>La otra causa</strong> (que no es esta) sería tener factores cuadráticos irreducibles en $\mathbb{R}$, como en el ejercicio 5.iv.</li>
        </ul>
        Es exactamente lo que piden los finales con «explicar por qué no es posible diagonalizar, cuando no lo sea».</div>
        <div class="note tip"><b class="lbl">Dato de consistencia</b>
        $\lambda = 0$ <strong>no</strong> es autovalor ($\det M = 1 \neq 0$), así que $T$ es un isomorfismo: $\operatorname{Nuc}(T) = \{0\}$ e $\operatorname{Im}(T) = M_2(\mathbb{R})$. Se puede ser inversible y no diagonalizable a la vez — son propiedades independientes.</div>`,
        resultado: tex`$E_1 = \operatorname{gen}\left\{\begin{pmatrix}1&0\\0&0\end{pmatrix}, \begin{pmatrix}0&1\\0&0\end{pmatrix}\right\}$, con $m_g = 2$. <strong>No es diagonalizable:</strong> $m_g(1) = 2 < 4 = m_a(1)$, así que no hay 4 autovectores L.I. y no existe base que la diagonalice.` }
    ]},
  /* ========================= 5 ========================= */
  { id: 'tp7-5', num: '5',
    enunciado: tex`<p>Para cada una de las siguientes transformaciones lineales, si es posible, hallar <strong>(a)</strong> el polinomio característico, autovalores y conjunto de autovectores; y <strong>(b)</strong> el subespacio propio correspondiente a cada autovalor indicando su dimensión, y si es posible una base $B$ formada por autovectores tal que $[T]_B$ sea diagonal, calculando $[T]_B$.</p>
    <div class="note tip"><b class="lbl">Los seis incisos cubren los tres desenlaces posibles</b>
    <strong>Diagonalizable:</strong> i), v), vi). &nbsp; <strong>No diagonalizable por $m_g < m_a$:</strong> ii), iii). &nbsp; <strong>No diagonalizable por falta de raíces reales:</strong> iv).
    <p>Vale la pena hacerlos los seis: son el muestrario completo de lo que puede salir en un parcial.</p></div>`,
    incisos: [

      { id: 'tp7-5i', rot: 'i', enunciado: tex`$T: \mathbb{R}^2 \to \mathbb{R}^2$, $\;T(x,y) = (-6x - 4y,\; 12x + 8y)$`,
        conceptos: ['u7-metodo-diagonalizar', 'u7-criterio-diagonalizacion'],
        resolucion: tex`<div class="fx center">$$A = \begin{pmatrix} -6 & -4 \\ 12 & 8\end{pmatrix}$$</div>
        <h3>Polinomio característico y autovalores</h3>
        <div class="fx center">$$P(\lambda) = (-6-\lambda)(8-\lambda) - (-4)(12) = \lambda^2 - 2\lambda - 48 + 48 = \lambda^2 - 2\lambda = \lambda\,(\lambda-2)$$</div>
        <div class="fx center">$$\lambda_1 = 0, \qquad \lambda_2 = 2$$</div>
        <p>Control: $\operatorname{tr}A = -6+8 = 2 = 0+2$ ✓; $\det A = -48+48 = 0 = 0\cdot 2$ ✓</p>
        <h3>Espacios propios</h3>
        <p><strong>$\lambda = 0$:</strong> $\;-6x - 4y = 0 \Rightarrow 3x + 2y = 0$. Tomando $x = 2$: $y = -3$.</p>
        <div class="fx center">$$E_0 = \operatorname{gen}\{(2,-3)\}, \qquad \dim = 1$$</div>
        <p>Control: $A(2,-3) = (-12+12,\; 24-24) = (0,0)$ ✓</p>
        <p><strong>$\lambda = 2$:</strong> $\;(A-2I) = \begin{pmatrix} -8 & -4 \\ 12 & 6\end{pmatrix}$, de donde $-8x - 4y = 0 \Rightarrow y = -2x$.</p>
        <div class="fx center">$$E_2 = \operatorname{gen}\{(1,-2)\}, \qquad \dim = 1$$</div>
        <p>Control: $A(1,-2) = (-6+8,\; 12-16) = (2,-4) = 2(1,-2)$ ✓</p>
        <h3>Diagonalización</h3>
        <p>Dos autovalores reales distintos en $\mathbb{R}^2$ ⇒ <strong>diagonalizable</strong>.</p>
        <div class="fx center">$$B = \{(2,-3),\; (1,-2)\}, \qquad [T]_B = \begin{pmatrix} 0 & 0 \\ 0 & 2\end{pmatrix}$$</div>
        <p>Control de que $B$ es base: $\det\begin{vmatrix} 2 & 1 \\ -3 & -2\end{vmatrix} = -4+3 = -1 \neq 0$ ✓</p>
        <div class="note"><b class="lbl">$\lambda = 0$ es autovalor</b> Así que $T$ no es inyectiva: $\operatorname{Nuc}(T) = E_0 = \operatorname{gen}\{(2,-3)\}$. Es una proyección oblicua escalada por 2 sobre la recta $y = -2x$.</div>`,
        resultado: tex`$P(\lambda) = \lambda(\lambda-2)$. $E_0 = \operatorname{gen}\{(2,-3)\}$, $E_2 = \operatorname{gen}\{(1,-2)\}$, ambos de $\dim 1$. <strong>Diagonalizable:</strong> $[T]_B = \operatorname{diag}(0,2)$.` },

      { id: 'tp7-5ii', rot: 'ii', enunciado: tex`$T: \mathbb{R}^2 \to \mathbb{R}^2$, $\;T(x,y) = (2x + y,\; 2y)$`,
        conceptos: ['u7-metodo-diagonalizar', 'u7-multiplicidades'],
        resolucion: tex`<div class="fx center">$$A = \begin{pmatrix} 2 & 1 \\ 0 & 2\end{pmatrix}$$</div>
        <h3>Autovalores — se leen de la diagonal</h3>
        <p>$A$ es <strong>triangular superior</strong>, así que por [[u7-polinomio-caracteristico]]:</p>
        <div class="fx center">$$P(\lambda) = (2-\lambda)^2, \qquad \lambda = 2 \text{ con } m_a = 2$$</div>
        <h3>Espacio propio</h3>
        <div class="fx center">$$(A - 2I) = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} \;\Longrightarrow\; y = 0, \quad x \text{ libre}$$</div>
        <div class="fx center">$$E_2 = \operatorname{gen}\{(1,0)\}, \qquad m_g = 1$$</div>
        <p>Control: $A(1,0) = (2,0) = 2(1,0)$ ✓</p>
        <h3>No es diagonalizable</h3>
        <div class="fx center">$$m_g(2) = 1 \;<\; 2 = m_a(2)$$</div>
        <p>Harían falta <strong>2</strong> autovectores L.I. en $\mathbb{R}^2$ y sólo hay <strong>1</strong> (todos los autovectores son múltiplos de $(1,0)$). No existe base de autovectores, así que <strong>no hay $[T]_B$ diagonal</strong>.</p>
        <div class="note tip"><b class="lbl">El ejemplo canónico de este fenómeno</b>
        $\begin{pmatrix} \lambda & 1 \\ 0 & \lambda\end{pmatrix}$ es el bloque no diagonalizable más simple que existe. Tiene un único autovalor con $m_a = 2$ y $m_g = 1$, y el «1» de arriba es justamente lo que impide la diagonalización: si fuera $0$, la matriz ya sería diagonal con $m_g = 2$.
        <p>Geométricamente es una <em>transvección</em> escalada: estira por 2 y además «corta» horizontalmente.</p></div>`,
        resultado: tex`$P(\lambda) = (2-\lambda)^2$, $\lambda = 2$ con $m_a = 2$. $E_2 = \operatorname{gen}\{(1,0)\}$ con $m_g = 1$. <strong>No es diagonalizable:</strong> $m_g = 1 < 2 = m_a$.` },

      { id: 'tp7-5iii', rot: 'iii', enunciado: tex`$T: \mathbb{R}^3 \to \mathbb{R}^3$, $\;T(x,y,z) = (x,\; x+y,\; x+y+z)$`,
        conceptos: ['u7-metodo-diagonalizar', 'u7-polinomio-caracteristico'],
        resolucion: tex`<div class="fx center">$$A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$$</div>
        <h3>Autovalores</h3>
        <p>$A$ es <strong>triangular inferior</strong>, con todos los elementos de la diagonal iguales a 1:</p>
        <div class="fx center">$$P(\lambda) = (1-\lambda)^3, \qquad \lambda = 1 \text{ con } m_a = 3$$</div>
        <h3>Espacio propio</h3>
        <div class="fx center">$$(A - I) = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 1 & 1 & 0 \end{pmatrix}: \quad \begin{cases} x = 0 \;\text{(fila 2)} \\ x + y = 0 \;\Rightarrow\; y = 0\end{cases}, \quad z \text{ libre}$$</div>
        <div class="fx center">$$E_1 = \operatorname{gen}\{(0,0,1)\}, \qquad m_g = 1$$</div>
        <p>Control: $A(0,0,1) = (0,\, 0,\, 1) = 1\cdot(0,0,1)$ ✓</p>
        <h3>No es diagonalizable</h3>
        <div class="fx center">$$m_g(1) = 1 \;<\; 3 = m_a(1)$$</div>
        <p>Es el mismo diagnóstico que en ii), pero más extremo: hay un solo autovector independiente para un autovalor de multiplicidad 3. Faltan dos.</p>
        <div class="note"><b class="lbl">Dato</b> $\det A = 1 \neq 0$, así que $T$ es un isomorfismo pero no es diagonalizable. Como en el ejercicio 4: inversibilidad y diagonalizabilidad son propiedades independientes.</div>`,
        resultado: tex`$P(\lambda) = (1-\lambda)^3$, $\lambda = 1$ con $m_a = 3$. $E_1 = \operatorname{gen}\{(0,0,1)\}$ con $m_g = 1$. <strong>No es diagonalizable:</strong> $m_g = 1 < 3 = m_a$.` },

      { id: 'tp7-5iv', rot: 'iv', enunciado: tex`$T: P_1 \to P_1$, $\;T(ax+b) = (3a+b)x + (-2a+3b)$`,
        conceptos: ['u7-metodo-diagonalizar', 'u7-leer-polinomio'],
        pista: tex`Calculá el discriminante del polinomio característico antes de buscar raíces.`,
        resolucion: tex`<p>Usando coordenadas $(a,b)$ para $ax+b$, la fórmula es $T(a,b) = (3a+b,\;\; -2a+3b)$, es decir</p>
        <div class="fx center">$$A = \begin{pmatrix} 3 & 1 \\ -2 & 3\end{pmatrix}$$</div>
        <h3>Polinomio característico</h3>
        <div class="fx center">$$P(\lambda) = (3-\lambda)^2 - (1)(-2) = (3-\lambda)^2 + 2 = \lambda^2 - 6\lambda + 11$$</div>
        <h3>No hay autovalores reales</h3>
        <div class="fx center">$$\Delta = (-6)^2 - 4(1)(11) = 36 - 44 = -8 \;<\; 0$$</div>
        <div class="note warn"><b class="lbl">Discriminante negativo</b>
        $P(\lambda)$ es un <strong>factor cuadrático irreducible en $\mathbb{R}$</strong>: no tiene raíces reales. Por lo tanto:
        <ul>
          <li>$T$ <strong>no tiene autovalores</strong> (en $\mathbb{R}$);</li>
          <li>$T$ <strong>no tiene autovectores</strong>;</li>
          <li>no hay espacios propios, y <strong>$T$ no es diagonalizable</strong>.</li>
        </ul>
        Es la <strong>primera</strong> de las dos causas de no diagonalizabilidad de [[u7-criterio-diagonalizacion]], y la única de los seis incisos donde aparece. En ii) y iii) el problema era $m_g < m_a$; acá el problema es que no hay con qué empezar.</div>
        <div class="note tip"><b class="lbl">Qué es esta transformación</b>
        Se puede escribir $A = 3I + \begin{pmatrix} 0 & 1 \\ -2 & 0\end{pmatrix}$: una <strong>rotación</strong> escalada y desplazada. Las rotaciones del plano (salvo por $0°$ y $180°$) no dejan ninguna dirección invariante, y por eso no tienen autovectores reales — es la lectura geométrica del discriminante negativo.
        <p>Sobre $\mathbb{C}$ los autovalores serían $3 \pm i\sqrt2$ y sí sería diagonalizable, pero la materia trabaja sobre $\mathbb{R}$.</p></div>`,
        resultado: tex`$P(\lambda) = \lambda^2 - 6\lambda + 11$, con $\Delta = -8 < 0$: <strong>no tiene autovalores ni autovectores reales</strong>, así que no es diagonalizable.` },

      { id: 'tp7-5v', rot: 'v', enunciado: tex`$T: P_2 \to P_2$, $\;T(ax^2+bx+c) = 5ax^2 + (-2c+3b)x + (3c-2b)$`,
        conceptos: ['u7-metodo-diagonalizar', 'u6-matriz-asociada'],
        pista: tex`La matriz queda en bloques: una entrada aislada y un bloque $2\times2$. El determinante se parte en dos.`,
        resolucion: tex`<p>En coordenadas $(a,b,c)$ para $ax^2+bx+c$: $\;T(a,b,c) = (5a,\;\; 3b - 2c,\;\; -2b + 3c)$, o sea</p>
        <div class="fx center">$$A = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 3 & -2 \\ 0 & -2 & 3 \end{pmatrix}$$</div>
        <h3>Polinomio característico</h3>
        <p>La matriz es <strong>diagonal por bloques</strong>, así que el determinante se factoriza:</p>
        <div class="fx center">$$P(\lambda) = (5-\lambda)\begin{vmatrix} 3-\lambda & -2 \\ -2 & 3-\lambda\end{vmatrix} = (5-\lambda)\bigl[(3-\lambda)^2 - 4\bigr]$$</div>
        <p>Y $(3-\lambda)^2 - 4$ es una diferencia de cuadrados: $\;(3-\lambda-2)(3-\lambda+2) = (1-\lambda)(5-\lambda)$.</p>
        <div class="fx center">$$P(\lambda) = (5-\lambda)^2\,(1-\lambda)$$</div>
        <div class="fx center">$$\lambda = 5 \text{ con } m_a = 2, \qquad \lambda = 1 \text{ con } m_a = 1$$</div>
        <p>Controles: $\operatorname{tr}A = 5+3+3 = 11 = 5+5+1$ ✓; $\det A = 5(9-4) = 25 = 5\cdot5\cdot1$ ✓</p>

        <h3>Espacios propios</h3>
        <p><strong>$\lambda = 5$</strong> (el repetido, el único que hay que examinar con cuidado):</p>
        <div class="fx center">$$(A - 5I) = \begin{pmatrix} 0 & 0 & 0 \\ 0 & -2 & -2 \\ 0 & -2 & -2\end{pmatrix} \;\Longrightarrow\; -2b - 2c = 0 \;\Longrightarrow\; c = -b, \quad a, b \text{ libres}$$</div>
        <div class="fx center">$$E_5 = \operatorname{gen}\{(1,0,0),\;\; (0,1,-1)\} = \operatorname{gen}\{x^2,\;\; x - 1\}, \qquad m_g = 2 = m_a \;✓$$</div>
        <p>Controles: $T(x^2) = 5x^2$ ✓ y $T(x-1)$, con $(a,b,c) = (0,1,-1)$, da $(0,\; 3+2,\; -2-3) = (0,5,-5) = 5(0,1,-1)$ ✓</p>

        <p><strong>$\lambda = 1$:</strong></p>
        <div class="fx center">$$(A - I) = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 2 & -2 \\ 0 & -2 & 2\end{pmatrix} \;\Longrightarrow\; a = 0, \quad c = b$$</div>
        <div class="fx center">$$E_1 = \operatorname{gen}\{(0,1,1)\} = \operatorname{gen}\{x + 1\}, \qquad m_g = 1 = m_a \;✓$$</div>
        <p>Control: $T(x+1)$, con $(0,1,1)$, da $(0,\; 3-2,\; -2+3) = (0,1,1)$ ✓</p>

        <h3>Diagonalización</h3>
        <p>$m_g = m_a$ en los dos autovalores, y $2 + 1 = 3 = \dim P_2$ ⇒ <strong>diagonalizable</strong>.</p>
        <div class="fx center">$$B = \{x^2,\;\; x-1,\;\; x+1\}, \qquad [T]_B = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1\end{pmatrix}$$</div>
        <div class="note"><b class="lbl">El autovalor repetido va dos veces en la diagonal</b> Una por cada vector de la base de $E_5$, y en el orden en que aparecen en $B$. Es lo que dice [[u7-criterio-diagonalizacion]]: cada autovalor se repite tantas veces como su multiplicidad.</div>`,
        resultado: tex`$P(\lambda) = (5-\lambda)^2(1-\lambda)$. $E_5 = \operatorname{gen}\{x^2,\, x-1\}$ ($m_g = 2$), $E_1 = \operatorname{gen}\{x+1\}$ ($m_g = 1$). <strong>Diagonalizable:</strong> $[T]_B = \operatorname{diag}(5,5,1)$.` },

      { id: 'tp7-5vi', rot: 'vi', enunciado: tex`$T: M_2 \to M_2$, $\;T\begin{pmatrix} a & b \\ c & d\end{pmatrix} = \begin{pmatrix} 2a+2b & -a+5b \\ 2a-c & 4a-8c+3d\end{pmatrix}$`,
        conceptos: ['u7-metodo-diagonalizar', 'u6-matriz-asociada'],
        pista: tex`Armá la matriz $4\times4$ en coordenadas $(a,b,c,d)$ y fijate que queda triangular por bloques: las columnas 3 y 4 tienen ceros arriba.`,
        resolucion: tex`<p>En coordenadas $(a,b,c,d)$: $\;T(a,b,c,d) = (2a+2b,\;\; -a+5b,\;\; 2a-c,\;\; 4a-8c+3d)$, o sea</p>
        <div class="fx center">$$M = \begin{pmatrix} 2 & 2 & 0 & 0 \\ -1 & 5 & 0 & 0 \\ 2 & 0 & -1 & 0 \\ 4 & 0 & -8 & 3 \end{pmatrix}$$</div>
        <h3>Polinomio característico — se parte en bloques</h3>
        <p>Las columnas 3 y 4 tienen ceros en las filas 1 y 2, así que $M$ es <strong>triangular inferior por bloques</strong>:</p>
        <div class="fx center">$$M = \begin{pmatrix} M_1 & 0 \\ * & M_2\end{pmatrix}, \qquad M_1 = \begin{pmatrix} 2 & 2 \\ -1 & 5\end{pmatrix}, \qquad M_2 = \begin{pmatrix} -1 & 0 \\ -8 & 3\end{pmatrix}$$</div>
        <p>y el determinante es el producto de los determinantes de los bloques:</p>
        <div class="fx center">$$\det(M_1 - \lambda I) = (2-\lambda)(5-\lambda) + 2 = \lambda^2 - 7\lambda + 12 = (\lambda-3)(\lambda-4)$$</div>
        <div class="fx center">$$\det(M_2 - \lambda I) = (-1-\lambda)(3-\lambda)$$</div>
        <div class="fx center">$$\lambda = 3 \;(m_a = 2), \qquad \lambda = 4 \;(m_a = 1), \qquad \lambda = -1 \;(m_a = 1)$$</div>
        <p>El $3$ aparece una vez por cada bloque, de ahí su multiplicidad 2. Control: $\operatorname{tr}M = 2+5-1+3 = 9 = 3+3+4-1$ ✓</p>

        <h3>Espacios propios</h3>
        <p><strong>$\lambda = 3$</strong> (el repetido):</p>
        <div class="fx center">$$(M - 3I) = \begin{pmatrix} -1 & 2 & 0 & 0 \\ -1 & 2 & 0 & 0 \\ 2 & 0 & -4 & 0 \\ 4 & 0 & -8 & 0 \end{pmatrix}$$</div>
        <p>Filas 1 y 2 son iguales: $a = 2b$. Fila 3: $2a - 4c = 0 \Rightarrow c = a/2 = b$. Fila 4: $4a - 8c = 8b - 8b = 0$, se cumple siempre. Y la columna de $d$ es <strong>nula</strong>, así que $d$ queda libre.</p>
        <div class="fx center">$$E_3 = \operatorname{gen}\left\{ \begin{pmatrix} 2 & 1 \\ 1 & 0\end{pmatrix},\;\; \begin{pmatrix} 0 & 0 \\ 0 & 1\end{pmatrix} \right\}, \qquad m_g = 2 = m_a \;✓$$</div>
        <p>Controles: para $(2,1,1,0)$, $\;T = (4+2,\; -2+5,\; 4-1,\; 8-8+0) = (6,3,3,0) = 3(2,1,1,0)$ ✓. Para $(0,0,0,1)$, $\;T = (0,0,0,3) = 3(0,0,0,1)$ ✓</p>

        <p><strong>$\lambda = 4$:</strong> de $(M-4I)$ sale $b = a$ (filas 1-2), $c = \tfrac{2a}{5}$ (fila 3) y $d = \tfrac{4a}{5}$ (fila 4). Tomando $a = 5$:</p>
        <div class="fx center">$$E_4 = \operatorname{gen}\left\{ \begin{pmatrix} 5 & 5 \\ 2 & 4\end{pmatrix} \right\}, \qquad m_g = 1$$</div>
        <p>Control: $T(5,5,2,4) = (10+10,\; -5+25,\; 10-2,\; 20-16+12) = (20,20,8,16) = 4(5,5,2,4)$ ✓</p>

        <p><strong>$\lambda = -1$:</strong> de $(M+I)$, la fila 3 da $2a = 0 \Rightarrow a = 0$; la fila 1 da $2b = 0 \Rightarrow b = 0$; la fila 4 da $-8c + 4d = 0 \Rightarrow d = 2c$.</p>
        <div class="fx center">$$E_{-1} = \operatorname{gen}\left\{ \begin{pmatrix} 0 & 0 \\ 1 & 2\end{pmatrix} \right\}, \qquad m_g = 1$$</div>
        <p>Control: $T(0,0,1,2) = (0,\; 0,\; -1,\; -8+6) = (0,0,-1,-2) = -1(0,0,1,2)$ ✓</p>

        <h3>Diagonalización</h3>
        <p>$m_g = m_a$ en los tres ($2$, $1$, $1$) y suman $4 = \dim M_2(\mathbb{R})$ ⇒ <strong>diagonalizable</strong>.</p>
        <div class="fx center">$$B = \left\{ \begin{pmatrix} 2&1\\1&0\end{pmatrix},\; \begin{pmatrix} 0&0\\0&1\end{pmatrix},\; \begin{pmatrix} 5&5\\2&4\end{pmatrix},\; \begin{pmatrix} 0&0\\1&2\end{pmatrix} \right\}$$</div>
        <div class="fx center">$$[T]_B = \operatorname{diag}(3,\; 3,\; 4,\; -1)$$</div>`,
        resultado: tex`$\lambda = 3$ ($m_a = m_g = 2$), $\lambda = 4$ y $\lambda = -1$ ($m_a = m_g = 1$). <strong>Diagonalizable:</strong> con $B = \left\{\begin{pmatrix}2&1\\1&0\end{pmatrix}, \begin{pmatrix}0&0\\0&1\end{pmatrix}, \begin{pmatrix}5&5\\2&4\end{pmatrix}, \begin{pmatrix}0&0\\1&2\end{pmatrix}\right\}$, $[T]_B = \operatorname{diag}(3,3,4,-1)$.` }
    ]},

  /* ========================= 6 ========================= */
  { id: 'tp7-6', num: '6',
    enunciado: tex`<p>Suponiendo que cada una de las siguientes matrices es la matriz asociada a una transformación lineal $T: \mathbb{R}^n \to \mathbb{R}^n$ con respecto a la base canónica:</p>
    <p><strong>(a)</strong> Hallar autovalores, autovectores y subespacios propios. <strong>(b)</strong> ¿Es posible hallar una base $B$ formada por autovectores tal que $[T]_B$ sea diagonal? Justificar. <strong>(c)</strong> Si es posible, escribir $[T]_B$ e indicar <strong>dos maneras distintas</strong> de calcularla.</p>
    <div class="note tip"><b class="lbl">Las dos maneras de calcular $[T]_B$</b>
    <strong>(1) Directa:</strong> si $v_i$ es autovector de $\lambda_i$, entonces $T(v_i) = \lambda_i v_i$ y por lo tanto $[T(v_i)]_B = \lambda_i e_i$. La matriz es diagonal con los autovalores, <em>escrita sin multiplicar nada</em>.
    <p><strong>(2) Por conjugación:</strong> $[T]_B = P^{-1} A\, P$ con $P = [\;]_{BC}$, la matriz que tiene los autovectores como columnas ([[u6-cambio-base-matriz]]). Da lo mismo, con mucho más trabajo — pero es lo que el enunciado quiere ver enunciado.</p>
    <p>Este ejercicio es el formato exacto del <strong>parcial de promoción</strong>.</p></div>`,
    incisos: [

      { id: 'tp7-6i', rot: 'i', enunciado: tex`$\begin{pmatrix} 3 & 0 & -3 \\ -1 & 2 & 3 \\ 1 & 0 & -1 \end{pmatrix}$`,
        conceptos: ['u7-metodo-diagonalizar', 'u7-criterio-diagonalizacion'],
        resolucion: tex`<h3>(a) Autovalores</h3>
        <p>La segunda columna tiene dos ceros: conviene desarrollar por ahí (sobrevive sólo la entrada $(2,2)$, con signo $+$):</p>
        <div class="fx center">$$P(\lambda) = (2-\lambda)\begin{vmatrix} 3-\lambda & -3 \\ 1 & -1-\lambda\end{vmatrix} = (2-\lambda)\bigl[(3-\lambda)(-1-\lambda) + 3\bigr]$$</div>
        <div class="fx center">$$= (2-\lambda)\bigl[\lambda^2 - 2\lambda - 3 + 3\bigr] = (2-\lambda)\,\lambda\,(\lambda-2) = -\lambda\,(\lambda-2)^2$$</div>
        <div class="fx center">$$\lambda = 0 \;(m_a = 1), \qquad \lambda = 2 \;(m_a = 2)$$</div>
        <p>Controles: $\operatorname{tr}A = 3+2-1 = 4 = 0+2+2$ ✓; $\det A = 0$ ✓ (porque $0$ es autovalor).</p>

        <h3>Espacios propios</h3>
        <p><strong>$\lambda = 0$:</strong> $A v = \vec 0$ da $3x - 3z = 0 \Rightarrow x = z$; y $-x + 2y + 3z = 0 \Rightarrow 2y = x - 3z = -2z \Rightarrow y = -z$.</p>
        <div class="fx center">$$E_0 = \operatorname{gen}\{(1,-1,1)\}, \qquad m_g = 1 = m_a \;✓$$</div>
        <p>Control: $A(1,-1,1) = (3+0-3,\; -1-2+3,\; 1+0-1) = (0,0,0)$ ✓</p>
        <p><strong>$\lambda = 2$</strong> (el repetido):</p>
        <div class="fx center">$$(A - 2I) = \begin{pmatrix} 1 & 0 & -3 \\ -1 & 0 & 3 \\ 1 & 0 & -3\end{pmatrix}$$</div>
        <p>Las tres filas son proporcionales: queda <strong>una sola</strong> ecuación, $x - 3z = 0$, con $y$ y $z$ libres.</p>
        <div class="fx center">$$E_2 = \operatorname{gen}\{(3,0,1),\;\; (0,1,0)\}, \qquad m_g = 2 = m_a \;✓$$</div>
        <p>Controles: $A(3,0,1) = (9+0-3,\; -3+0+3,\; 3+0-1) = (6,0,2) = 2(3,0,1)$ ✓; $\;A(0,1,0) = (0,2,0) = 2(0,1,0)$ ✓</p>

        <h3>(b) Sí es diagonalizable</h3>
        <p>$m_g = m_a$ en los dos autovalores y las multiplicidades suman $1 + 2 = 3 = \dim\mathbb{R}^3$. Por el [[u7-criterio-diagonalizacion|criterio]], hay 3 autovectores L.I. y existe base de autovectores.</p>

        <h3>(c) La matriz diagonal</h3>
        <div class="fx center">$$B = \{(1,-1,1),\;\; (3,0,1),\;\; (0,1,0)\}, \qquad [T]_B = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2\end{pmatrix}$$</div>
        <p><strong>Manera 1 (directa):</strong> $T(v_1) = 0\,v_1$, $T(v_2) = 2v_2$, $T(v_3) = 2v_3$, luego las columnas son $0\,e_1$, $2e_2$, $2e_3$.</p>
        <p><strong>Manera 2 (conjugación):</strong> $[T]_B = P^{-1}AP$ con</p>
        <div class="fx center">$$P = \begin{pmatrix} 1 & 3 & 0 \\ -1 & 0 & 1 \\ 1 & 1 & 0\end{pmatrix}, \qquad \det P = 2 \neq 0$$</div>
        <p>(el determinante no nulo confirma además que $B$ es base ✓)</p>`,
        resultado: tex`$P(\lambda) = -\lambda(\lambda-2)^2$. $E_0 = \operatorname{gen}\{(1,-1,1)\}$ ($m_g=1$), $E_2 = \operatorname{gen}\{(3,0,1),(0,1,0)\}$ ($m_g=2$). <strong>Diagonalizable:</strong> $[T]_B = \operatorname{diag}(0,2,2)$.` },

      { id: 'tp7-6ii', rot: 'ii', enunciado: tex`$\begin{pmatrix} -3 & 2 & 1 \\ 0 & -5 & -7 \\ 0 & 2 & 4 \end{pmatrix}$`,
        conceptos: ['u7-metodo-diagonalizar', 'u7-criterio-diagonalizacion'],
        resolucion: tex`<h3>(a) Autovalores</h3>
        <p>La primera columna tiene dos ceros: se desarrolla por ahí.</p>
        <div class="fx center">$$P(\lambda) = (-3-\lambda)\begin{vmatrix} -5-\lambda & -7 \\ 2 & 4-\lambda\end{vmatrix} = (-3-\lambda)\bigl[(-5-\lambda)(4-\lambda) + 14\bigr]$$</div>
        <div class="fx center">$$= (-3-\lambda)\bigl[\lambda^2 + \lambda - 20 + 14\bigr] = (-3-\lambda)(\lambda^2 + \lambda - 6) = (-3-\lambda)(\lambda+3)(\lambda-2)$$</div>
        <div class="fx center">$$P(\lambda) = -(\lambda+3)^2\,(\lambda-2)$$</div>
        <div class="fx center">$$\lambda = -3 \;(m_a = 2), \qquad \lambda = 2 \;(m_a = 1)$$</div>
        <p>Control: $\operatorname{tr}A = -3-5+4 = -4 = -3-3+2$ ✓</p>

        <h3>Espacios propios</h3>
        <p><strong>$\lambda = -3$</strong> (el repetido, el que decide):</p>
        <div class="fx center">$$(A + 3I) = \begin{pmatrix} 0 & 2 & 1 \\ 0 & -2 & -7 \\ 0 & 2 & 7\end{pmatrix}$$</div>
        <p>Sumando las filas 1 y 2: $\;-6z = 0 \Rightarrow z = 0$. Y entonces la fila 1 da $2y = 0 \Rightarrow y = 0$. Sólo $x$ queda libre.</p>
        <div class="fx center">$$E_{-3} = \operatorname{gen}\{(1,0,0)\}, \qquad m_g = 1$$</div>
        <p>Control: $A(1,0,0) = (-3,0,0) = -3(1,0,0)$ ✓</p>
        <p><strong>$\lambda = 2$:</strong> de $(A-2I)$, la fila 2 da $-7y - 7z = 0 \Rightarrow z = -y$; la fila 1 da $-5x + 2y + z = -5x + y = 0 \Rightarrow y = 5x$.</p>
        <div class="fx center">$$E_2 = \operatorname{gen}\{(1,\, 5,\, -5)\}, \qquad m_g = 1 = m_a \;✓$$</div>
        <p>Control: $A(1,5,-5) = (-3+10-5,\; 0-25+35,\; 0+10-20) = (2,10,-10) = 2(1,5,-5)$ ✓</p>

        <h3>(b) y (c) — No es diagonalizable</h3>
        <div class="fx center">$$m_g(-3) = 1 \;<\; 2 = m_a(-3)$$</div>
        <p>Como no se cumple $m_g = m_a$ para todos los autovalores, por el [[u7-criterio-diagonalizacion|criterio]] <strong>no existe</strong> base de autovectores: hay sólo $1 + 1 = 2$ autovectores L.I. y harían falta 3.</p>
        <p>En consecuencia el inciso (c) no aplica: no hay $[T]_B$ diagonal.</p>
        <div class="note warn"><b class="lbl">Cómo redactar el «explicar por qué»</b>
        Todas las raíces del polinomio característico son <strong>reales</strong> ($-3$ doble y $2$), así que la causa no es la falta de autovalores. La causa es que el espacio propio del autovalor repetido es <em>más chico</em> que su multiplicidad algebraica: $\dim E_{-3} = 1$ pero $-3$ aparece dos veces como raíz. Faltan autovectores.
        <p>Es la distinción que piden los finales del 3/8/26 y del 27/8/26, donde comparan dos matrices parecidas y hay que decir cuál falla y por qué.</p></div>`,
        resultado: tex`$P(\lambda) = -(\lambda+3)^2(\lambda-2)$. $E_{-3} = \operatorname{gen}\{(1,0,0)\}$ ($m_g=1$), $E_2 = \operatorname{gen}\{(1,5,-5)\}$ ($m_g=1$). <strong>No es diagonalizable:</strong> $m_g(-3) = 1 < 2 = m_a(-3)$ — sólo 2 autovectores L.I. de los 3 necesarios.` },

      { id: 'tp7-6iii', rot: 'iii', enunciado: tex`$\begin{pmatrix} 1&2&3&4 \\ 0&2&3&4 \\ 0&0&3&4 \\ 0&0&0&4 \end{pmatrix}$`,
        conceptos: ['u7-polinomio-caracteristico', 'u7-teorema-n-autovectores'],
        pista: tex`Mirá la forma de la matriz antes de calcular cualquier determinante.`,
        resolucion: tex`<h3>(a) Autovalores — sin calcular nada</h3>
        <p>La matriz es <strong>triangular superior</strong>, así que por el teorema de [[u7-polinomio-caracteristico]] sus autovalores son los elementos de la diagonal:</p>
        <div class="fx center">$$P(\lambda) = (1-\lambda)(2-\lambda)(3-\lambda)(4-\lambda)$$</div>
        <div class="fx center">$$\lambda = 1,\; 2,\; 3,\; 4 \qquad \text{todos con } m_a = 1$$</div>

        <h3>(b) Sí es diagonalizable — y se justifica en una línea</h3>
        <p>Hay <strong>4 autovalores reales y distintos</strong> en un espacio de dimensión 4. Por el [[u7-teorema-n-autovectores|corolario]], eso basta: cada uno tiene $m_a = 1$, luego $m_g = 1$ por [[u7-teorema-multiplicidades]], y autovectores de autovalores distintos son L.I. Se obtienen 4 autovectores L.I. y la matriz es diagonalizable.</p>
        <div class="note tip"><b class="lbl">No hay nada que verificar</b> Cuando los $n$ autovalores son distintos, la diagonalizabilidad es automática: no hace falta calcular ningún espacio propio para <em>decidirlo</em>. Sólo hacen falta los autovectores si se pide la base.</div>

        <h3>Espacios propios</h3>
        <p>Resolviendo cada sistema $(A - \lambda I)v = \vec 0$ de abajo hacia arriba (la estructura triangular lo hace mecánico):</p>
        <div class="tbl"><table>
          <thead><tr><th>$\lambda$</th><th>$E_\lambda$</th><th>$m_g$</th></tr></thead>
          <tbody>
            <tr><td>$1$</td><td>$\operatorname{gen}\{(1,0,0,0)\}$</td><td>1</td></tr>
            <tr><td>$2$</td><td>$\operatorname{gen}\{(2,1,0,0)\}$</td><td>1</td></tr>
            <tr><td>$3$</td><td>$\operatorname{gen}\{(9,6,2,0)\}$</td><td>1</td></tr>
            <tr><td>$4$</td><td>$\operatorname{gen}\{(32,24,12,3)\}$</td><td>1</td></tr>
          </tbody>
        </table></div>
        <p><strong>Controles:</strong></p>
        <div class="fx center">$$A(2,1,0,0) = (2+2,\; 2,\; 0,\; 0) = (4,2,0,0) = 2\,(2,1,0,0) \;✓$$</div>
        <div class="fx center">$$A(9,6,2,0) = (9+12+6,\; 12+6,\; 6,\; 0) = (27,18,6,0) = 3\,(9,6,2,0) \;✓$$</div>
        <div class="fx center">$$A(32,24,12,3) = (32+48+36+12,\; 48+36+12,\; 36+12,\; 12) = (128,96,48,12) = 4\,(32,24,12,3) \;✓$$</div>

        <h3>(c) La matriz diagonal</h3>
        <div class="fx center">$$B = \{(1,0,0,0),\; (2,1,0,0),\; (9,6,2,0),\; (32,24,12,3)\}$$</div>
        <div class="fx center">$$[T]_B = \operatorname{diag}(1,\, 2,\, 3,\, 4)$$</div>
        <p><strong>Manera 1:</strong> directamente, porque $T(v_i) = \lambda_i v_i$.</p>
        <p><strong>Manera 2:</strong> $[T]_B = P^{-1}AP$ con $P$ la matriz de autovectores como columnas, que resulta triangular superior con diagonal $(1,1,2,3)$, de donde $\det P = 6 \neq 0$ ✓</p>
        <div class="note"><b class="lbl">Control global</b> $\operatorname{tr}A = 1+2+3+4 = 10 = 1+2+3+4$ ✓ y $\det A = 1\cdot2\cdot3\cdot4 = 24$ ✓ (producto de la diagonal, al ser triangular).</div>`,
        resultado: tex`$P(\lambda) = (1-\lambda)(2-\lambda)(3-\lambda)(4-\lambda)$: cuatro autovalores distintos ⇒ <strong>diagonalizable</strong> sin más verificación. $[T]_B = \operatorname{diag}(1,2,3,4)$ con $B = \{(1,0,0,0), (2,1,0,0), (9,6,2,0), (32,24,12,3)\}$.` }
    ]},

  /* ========================= 7 ========================= */
  { id: 'tp7-7', num: '7',
    enunciado: tex`<p>Sea $T: \mathbb{R}^2 \to \mathbb{R}^2$ tal que $[T]_B = \begin{pmatrix} 5 & 0 \\ 6 & -5 \end{pmatrix}$ y $[\;]_{CB} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ matriz de cambio de base.</p>
    <div class="note warn"><b class="lbl">La trampa del ejercicio</b>
    Los autovalores se pueden leer de $[T]_B$ directamente (es triangular), porque <strong>matrices semejantes comparten autovalores</strong> ([[u7-semejantes]]). Pero los <strong>autovectores</strong> que salgan de $[T]_B$ están en <em>coordenadas de $B$</em>, y hay que convertirlos a vectores de $\mathbb{R}^2$ antes de darlos como respuesta.</div>`,
    incisos: [

      { id: 'tp7-7a', rot: 'a', enunciado: tex`Hallar los autovalores, conjunto de autovectores y subespacios propios.`,
        conceptos: ['u7-polinomio-caracteristico', 'u7-semejantes', 'u6-cambio-base-matriz'],
        pista: tex`Los autovalores salen de $[T]_B$ sin más. Para los autovectores, resolvé en coordenadas de $B$ y después pasá a la canónica con $[\;]_{BC} = ([\;]_{CB})^{-1}$.`,
        resolucion: tex`<h3>Autovalores</h3>
        <p>$[T]_B$ es triangular inferior, así que</p>
        <div class="fx center">$$P(\lambda) = (5-\lambda)(-5-\lambda) = \lambda^2 - 25, \qquad \lambda_1 = 5, \qquad \lambda_2 = -5$$</div>
        <p>Y son los autovalores <strong>de $T$</strong>, no sólo de esa matriz: el polinomio característico no depende de la base elegida ([[u7-semejantes]]).</p>

        <h3>Autovectores en coordenadas de $B$</h3>
        <p><strong>$\lambda = 5$:</strong> $\;\bigl([T]_B - 5I\bigr)v = \vec 0$ con $\begin{pmatrix} 0 & 0 \\ 6 & -10\end{pmatrix}$, de donde $6v_1 - 10v_2 = 0 \Rightarrow 3v_1 = 5v_2$. Tomando $v_2 = 3$: $[x]_B = \binom{5}{3}$.</p>
        <p><strong>$\lambda = -5$:</strong> $\;\bigl([T]_B + 5I\bigr)v = \vec 0$ con $\begin{pmatrix} 10 & 0 \\ 6 & 0\end{pmatrix}$, de donde $v_1 = 0$ y $v_2$ libre: $[x]_B = \binom{0}{1}$.</p>

        <h3>Pasar a coordenadas canónicas</h3>
        <p>Hace falta $[\;]_{BC} = \bigl([\;]_{CB}\bigr)^{-1}$. Con $\det\begin{vmatrix} 2 & 1 \\ 1 & 1\end{vmatrix} = 1$:</p>
        <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} 1 & -1 \\ -1 & 2\end{pmatrix}$$</div>
        <div class="fx center">$$\lambda = 5: \quad [\;]_{BC}\begin{pmatrix} 5 \\ 3\end{pmatrix} = \begin{pmatrix} 5-3 \\ -5+6\end{pmatrix} = \begin{pmatrix} 2 \\ 1\end{pmatrix}$$</div>
        <div class="fx center">$$\lambda = -5: \quad [\;]_{BC}\begin{pmatrix} 0 \\ 1\end{pmatrix} = \begin{pmatrix} -1 \\ 2\end{pmatrix}$$</div>
        <div class="fx center">$$E_5 = \operatorname{gen}\{(2,1)\}, \qquad E_{-5} = \operatorname{gen}\{(-1,2)\} = \operatorname{gen}\{(1,-2)\}$$</div>
        <p>ambos de dimensión 1 (cada autovalor tiene $m_a = 1$). El <strong>conjunto de autovectores</strong> son los múltiplos no nulos de $(2,1)$ y de $(1,-2)$.</p>

        <h3>Verificación independiente</h3>
        <p>Las columnas de $[\;]_{BC}$ son los vectores de $B$, así que $B = \{(1,-1),\; (-1,2)\}$. Y calculando $[T]_C$ por conjugación:</p>
        <div class="fx center">$$[T]_C = [\;]_{BC}\,[T]_B\,[\;]_{CB} = \begin{pmatrix} 3 & 4 \\ 4 & -3\end{pmatrix}
        \;\Longrightarrow\; T(x,y) = (3x + 4y,\;\; 4x - 3y)$$</div>
        <p>Controles: $\;T(2,1) = (6+4,\; 8-3) = (10,5) = 5(2,1)$ ✓ y $\;T(1,-2) = (3-8,\; 4+6) = (-5,10) = -5(1,-2)$ ✓</p>
        <p>Y el polinomio característico de $[T]_C$: $\;(3-\lambda)(-3-\lambda) - 16 = \lambda^2 - 25$ ✓ el mismo.</p>
        <div class="note tip"><b class="lbl">El error que el ejercicio busca</b>
        Dar $\binom{5}{3}$ y $\binom{0}{1}$ como autovectores. Son <strong>coordenadas en $B$</strong>, no vectores de $\mathbb{R}^2$. El paso de conversión es obligatorio, y es el mismo que advierte [[u6-nucleo-imagen-matriz]] para núcleo e imagen.</div>`,
        resultado: tex`$P(\lambda) = \lambda^2 - 25$, con $\lambda = 5$ y $\lambda = -5$. $E_5 = \operatorname{gen}\{(2,1)\}$ y $E_{-5} = \operatorname{gen}\{(1,-2)\}$, de dimensión 1 cada uno. (De paso: $[T]_C = \begin{pmatrix} 3&4\\4&-3\end{pmatrix}$.)` },

      { id: 'tp7-7b', rot: 'b', enunciado: tex`Si es posible, hallar una base $B'$ formada por autovectores tal que $[T]_{B'}$ sea diagonal y calcular $[T]_{B'}$.`,
        conceptos: ['u7-criterio-diagonalizacion', 'u5-matriz-cambio'],
        resolucion: tex`<p><strong>Sí es posible.</strong> Hay dos autovalores reales <strong>distintos</strong> en $\mathbb{R}^2$, así que por el [[u7-teorema-n-autovectores|corolario]] la transformación es diagonalizable sin necesidad de verificar multiplicidades.</p>
        <div class="fx center">$$B' = \{(2,1),\;\; (1,-2)\}$$</div>
        <div class="fx center">$$[T]_{B'} = \begin{pmatrix} 5 & 0 \\ 0 & -5 \end{pmatrix}$$</div>
        <p><strong>Control de que $B'$ es base:</strong> $\;\det\begin{vmatrix} 2 & 1 \\ 1 & -2\end{vmatrix} = -4 - 1 = -5 \neq 0$ ✓</p>
        <p><strong>Control por traza y determinante:</strong> $\operatorname{tr}[T]_B = 5 - 5 = 0 = \operatorname{tr}[T]_{B'}$ ✓ y $\det[T]_B = -25 = \det[T]_{B'}$ ✓. Las tres matrices ($[T]_B$, $[T]_C$ y $[T]_{B'}$) son semejantes entre sí.</p>
        <div class="note tip"><b class="lbl">Una observación geométrica que vale la pena</b>
        Los dos autovectores son <strong>ortogonales</strong>: $(2,1)\cdot(1,-2) = 2 - 2 = 0$. No es casualidad — $[T]_C = \begin{pmatrix} 3&4\\4&-3\end{pmatrix}$ es <strong>simétrica</strong>, y las matrices simétricas siempre tienen autovectores ortogonales.
        <p>Con autovalores $5$ y $-5$ y traza nula, $T$ es $5$ veces una <strong>simetría axial</strong>: refleja respecto de la recta $\operatorname{gen}\{(2,1)\}$ (que queda fija, $\lambda = +5$) invirtiendo la dirección perpendicular ($\lambda = -5$), y escala todo por 5.</p></div>`,
        resultado: tex`<strong>Sí:</strong> $B' = \{(2,1),\, (1,-2)\}$ y $[T]_{B'} = \operatorname{diag}(5,\, -5)$. Los dos autovectores resultan ortogonales, porque $[T]_C$ es simétrica.` }
    ]},
  /* ========================= 8 ========================= */
  { id: 'tp7-8', num: '8',
    enunciado: tex`<p>Suponiendo que los polinomios de grado 5 dados a continuación son polinomios característicos de alguna matriz $A$ de orden 5, indicar en cada caso si la matriz $A$ <strong>es diagonalizable</strong>, <strong>no es diagonalizable</strong>, o <strong>posiblemente sea diagonalizable</strong>:</p>
    <div class="note tip"><b class="lbl">El criterio, en tres renglones</b> ([[u7-leer-polinomio]])
    <div class="tbl"><table>
      <thead><tr><th>Si el polinomio…</th><th>Entonces</th><th>Por qué</th></tr></thead>
      <tbody>
        <tr><td>tiene 5 raíces reales <strong>distintas</strong></td><td><strong>es</strong> diagonalizable</td><td>todas con $m_a=1$, luego $m_g=1$</td></tr>
        <tr><td>tiene raíces reales <strong>repetidas</strong> (y suman 5)</td><td><strong>posiblemente</strong></td><td>falta conocer $m_g$ de las repetidas</td></tr>
        <tr><td>tiene algún factor <strong>irreducible</strong> en $\mathbb{R}$</td><td><strong>no es</strong> diagonalizable</td><td>las raíces reales no llegan a 5</td></tr>
      </tbody>
    </table></div>
    Lo primero es siempre <strong>factorizar</strong> y contar las multiplicidades de las raíces reales.</div>`,
    incisos: [

      { id: 'tp7-8a', rot: 'a', enunciado: tex`$P(\lambda) = (1-\lambda)(2-\lambda)(3-\lambda)(4-\lambda)(5-\lambda)$`,
        conceptos: ['u7-leer-polinomio'],
        resolucion: tex`<p><strong>ES diagonalizable</strong> (con certeza).</p>
        <p>Las raíces son $1, 2, 3, 4, 5$: <strong>cinco raíces reales y distintas</strong>, cada una con $m_a = 1$.</p>
        <p>Por [[u7-teorema-multiplicidades]], $1 \le m_g \le m_a = 1$ fuerza $m_g = 1$ para todas. Entonces $m_g = m_a$ en los cinco autovalores y, por el [[u7-criterio-diagonalizacion|criterio]], $A$ es diagonalizable.</p>
        <div class="note"><b class="lbl">No hay nada que calcular</b> Es el único caso en que el polinomio característico decide por sí solo y a favor. Equivalentemente: $n$ autovalores distintos en dimensión $n$ ⇒ diagonalizable ([[u7-teorema-n-autovectores|corolario]]).</div>`,
        resultado: tex`<strong>Es diagonalizable.</strong> Cinco raíces reales distintas, todas con $m_a = 1$, luego $m_g = 1 = m_a$ en todas.` },

      { id: 'tp7-8b', rot: 'b', enunciado: tex`$P(\lambda) = (1-\lambda)^2(3-\lambda)(-1-\lambda)^2$`,
        conceptos: ['u7-leer-polinomio', 'u7-multiplicidades'],
        resolucion: tex`<p><strong>POSIBLEMENTE</strong> sea diagonalizable.</p>
        <p>Raíces reales y multiplicidades algebraicas:</p>
        <div class="fx center">$$\lambda = 1 \;(m_a = 2), \qquad \lambda = 3 \;(m_a = 1), \qquad \lambda = -1 \;(m_a = 2)$$</div>
        <p>Suman $2 + 1 + 2 = 5$ ✓: todas las raíces son reales, no falta ninguna.</p>
        <p>Pero hay <strong>dos autovalores repetidos</strong>, $\lambda = 1$ y $\lambda = -1$. Para ellos sólo se sabe $1 \le m_g \le 2$, y el polinomio característico no alcanza para determinar $m_g$: hay que calcular los espacios propios.</p>
        <div class="fx center">$$\text{Es diagonalizable} \iff \dim E_1 = 2 \;\text{ y }\; \dim E_{-1} = 2$$</div>
        <p>Si cualquiera de los dos tuviera dimensión 1, no lo sería.</p>
        <div class="note"><b class="lbl">$\lambda = 3$ no da problemas</b> Tiene $m_a = 1$, así que $m_g = 1$ automáticamente. Es lo que dice el atajo 2 de la nota del práctico: <strong>sólo los autovalores repetidos hay que examinar</strong>.</div>`,
        resultado: tex`<strong>Posiblemente.</strong> Todas las raíces son reales ($2+1+2=5$), pero $\lambda=1$ y $\lambda=-1$ están repetidos: hace falta verificar si $\dim E_1 = 2$ y $\dim E_{-1} = 2$.` },

      { id: 'tp7-8c', rot: 'c', enunciado: tex`$P(\lambda) = -\lambda^5$`,
        conceptos: ['u7-leer-polinomio'],
        pista: tex`Es un solo autovalor con multiplicidad 5. ¿Qué tendría que pasar para que $m_g = 5$?`,
        resolucion: tex`<p><strong>POSIBLEMENTE</strong> sea diagonalizable — aunque en la práctica sólo en un caso muy particular.</p>
        <p>Hay un único autovalor, $\lambda = 0$, con $m_a = 5$. Es una raíz real repetida, así que el criterio dice «posiblemente»: todo depende de $m_g(0)$.</p>
        <div class="fx center">$$\text{Es diagonalizable} \iff m_g(0) = \dim E_0 = \dim\operatorname{Nuc}(A) = 5$$</div>
        <div class="note tip"><b class="lbl">Qué significa eso concretamente</b>
        Si $\dim\operatorname{Nuc}(A) = 5 = \dim\mathbb{R}^5$, entonces $\operatorname{Nuc}(A) = \mathbb{R}^5$, o sea $A v = \vec 0$ para <strong>todo</strong> $v$: la matriz es la <strong>matriz nula</strong>.
        <p>Y efectivamente $A = 0$ ya es diagonal, con $P(\lambda) = (-\lambda)^5 = -\lambda^5$ ✓. En cambio cualquier matriz nilpotente no nula con ese polinomio característico (por ejemplo la que tiene unos en la diagonal superior y ceros en el resto) tiene $m_g < 5$ y no es diagonalizable.</p>
        <p>Así que la respuesta formal es <strong>posiblemente</strong>, y conviene agregar la precisión: <em>es diagonalizable si y sólo si $A$ es la matriz nula.</em></p></div>
        <div class="note"><b class="lbl">De paso</b> $\lambda = 0$ con $m_a = 5$ implica $\det A = 0$, así que $A$ nunca es inversible — todos los ítems del [[u7-teorema-resumen|teorema de resumen]] son falsos, cualquiera sea $A$.</div>`,
        resultado: tex`<strong>Posiblemente.</strong> Único autovalor $\lambda=0$ con $m_a=5$; es diagonalizable si y sólo si $m_g(0) = 5$, es decir <em>si y sólo si $A$ es la matriz nula</em>.` },

      { id: 'tp7-8d', rot: 'd', enunciado: tex`$P(\lambda) = (4-\lambda)^3(\lambda^2 + \lambda + 1)$`,
        conceptos: ['u7-leer-polinomio'],
        pista: tex`Calculá el discriminante del factor cuadrático.`,
        resolucion: tex`<p><strong>NO es diagonalizable.</strong></p>
        <p>El factor cuadrático $\lambda^2 + \lambda + 1$ tiene discriminante</p>
        <div class="fx center">$$\Delta = 1^2 - 4(1)(1) = 1 - 4 = -3 \;<\; 0$$</div>
        <p>así que es <strong>irreducible en $\mathbb{R}$</strong>: no aporta ninguna raíz real.</p>
        <p>La única raíz real es $\lambda = 4$, con $m_a = 3$. Entonces</p>
        <div class="fx center">$$\sum_{\lambda \text{ real}} m_a(\lambda) = 3 \;<\; 5$$</div>
        <p>Por [[u7-teorema-multiplicidades]], la cantidad total de autovectores L.I. disponibles es a lo sumo $\sum m_g \le \sum m_a = 3 < 5$. No alcanzan para formar una base de $\mathbb{R}^5$, así que <strong>no existe</strong> base de autovectores.</p>
        <div class="note warn"><b class="lbl">Esta es la primera causa de no diagonalizabilidad</b>
        Faltan <em>autovalores reales</em>, no autovectores. Es distinto del caso $m_g < m_a$: acá ni siquiera hay raíces con las que empezar. Cuando un final pide «explicar por qué no es posible diagonalizar», hay que decir <strong>cuál</strong> de las dos causas ocurre ([[u7-criterio-diagonalizacion]]).
        <p>Sobre $\mathbb{C}$ el factor aportaría dos raíces complejas conjugadas y el análisis cambiaría, pero la materia trabaja sobre $\mathbb{R}$.</p></div>`,
        resultado: tex`<strong>No es diagonalizable.</strong> $\lambda^2+\lambda+1$ tiene $\Delta = -3 < 0$: es irreducible en $\mathbb{R}$. La única raíz real es $4$ con $m_a = 3 < 5$, así que no hay 5 autovectores L.I.` },

      { id: 'tp7-8e', rot: 'e', enunciado: tex`$P(\lambda) = (-1-\lambda)(-3 + 2\lambda + \lambda^2)(6 - 5\lambda + \lambda^2)$`,
        conceptos: ['u7-leer-polinomio', 'u7-multiplicidades'],
        pista: tex`Reordená cada trinomio en potencias decrecientes y factorizalo antes de contar nada.`,
        resolucion: tex`<p><strong>ES diagonalizable</strong> (con certeza).</p>
        <h3>Reordenar y factorizar</h3>
        <p>Los dos trinomios están escritos con las potencias en orden creciente; conviene reescribirlos:</p>
        <div class="fx center">$$-3 + 2\lambda + \lambda^2 = \lambda^2 + 2\lambda - 3 = (\lambda + 3)(\lambda - 1)$$</div>
        <div class="fx center">$$6 - 5\lambda + \lambda^2 = \lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3)$$</div>
        <p>(Los dos tienen discriminante positivo: $4 + 12 = 16$ y $25 - 24 = 1$.) Entonces</p>
        <div class="fx center">$$P(\lambda) = (-1-\lambda)(\lambda+3)(\lambda-1)(\lambda-2)(\lambda-3)$$</div>
        <h3>Cinco raíces reales distintas</h3>
        <div class="fx center">$$\lambda = -1, \quad \lambda = -3, \quad \lambda = 1, \quad \lambda = 2, \quad \lambda = 3$$</div>
        <p>Son <strong>cinco</strong> valores <strong>distintos</strong>, todos reales, cada uno con $m_a = 1$. Por [[u7-teorema-multiplicidades]] eso fuerza $m_g = 1$ en todos, así que $m_g = m_a$ y por el [[u7-criterio-diagonalizacion|criterio]] la matriz <strong>es diagonalizable</strong>.</p>
        <p>Es el mismo caso que el inciso a), sólo disfrazado: el enunciado presenta el polinomio parcialmente factorizado y con los trinomios desordenados, pero al factorizar aparecen cinco raíces simples.</p>
        <div class="note warn"><b class="lbl">Por qué hay que factorizar antes de responder</b>
        A primera vista parece un polinomio con factores cuadráticos, y es tentador contestar «posiblemente» (como en b) o en c)) o incluso «no» (como en d) o f), donde los cuadráticos sí son irreducibles). Pero acá los dos trinomios <strong>se factorizan en $\mathbb{R}$</strong> y no comparten ninguna raíz entre sí ni con $\lambda = -1$.
        <p>El chequeo decisivo son los discriminantes: si alguno hubiera sido negativo, la respuesta sería «no es diagonalizable»; si dos factores hubieran compartido una raíz, sería «posiblemente».</p></div>`,
        resultado: tex`<strong>Es diagonalizable.</strong> Factorizando, $P(\lambda) = (-1-\lambda)(\lambda+3)(\lambda-1)(\lambda-2)(\lambda-3)$: cinco raíces reales <strong>distintas</strong> ($-1, -3, 1, 2, 3$), todas con $m_a = m_g = 1$.` },

      { id: 'tp7-8f', rot: 'f', enunciado: tex`$P(\lambda) = (1-\lambda)^3(1+\lambda^2)$`,
        conceptos: ['u7-leer-polinomio'],
        resolucion: tex`<p><strong>NO es diagonalizable.</strong></p>
        <p>El factor $1 + \lambda^2$ no tiene raíces reales: $\;\lambda^2 = -1$ es imposible en $\mathbb{R}$ (su discriminante es $0 - 4 = -4 < 0$). Es <strong>irreducible en $\mathbb{R}$</strong>.</p>
        <p>La única raíz real es $\lambda = 1$ con $m_a = 3$, y</p>
        <div class="fx center">$$\sum_{\lambda \text{ real}} m_a(\lambda) = 3 \;<\; 5$$</div>
        <p>Como en el inciso d), faltan autovalores reales: a lo sumo se consiguen 3 autovectores L.I. y harían falta 5. <strong>No existe</strong> base de autovectores.</p>
        <div class="note tip"><b class="lbl">Resumen de los seis incisos</b>
        <div class="tbl"><table>
          <thead><tr><th></th><th>Raíces reales (con $m_a$)</th><th>$\sum m_a$</th><th>Respuesta</th></tr></thead>
          <tbody>
            <tr><td>a</td><td>$1,2,3,4,5$ (todas simples)</td><td>5</td><td><strong>es</strong></td></tr>
            <tr><td>b</td><td>$1^{(2)}, 3, (-1)^{(2)}$</td><td>5</td><td>posiblemente</td></tr>
            <tr><td>c</td><td>$0^{(5)}$</td><td>5</td><td>posiblemente</td></tr>
            <tr><td>d</td><td>$4^{(3)}$</td><td>3</td><td><strong>no</strong></td></tr>
            <tr><td>e</td><td>$-3,\, -1,\, 1,\, 2,\, 3$ (todas simples)</td><td>5</td><td><strong>es</strong></td></tr>
            <tr><td>f</td><td>$1^{(3)}$</td><td>3</td><td><strong>no</strong></td></tr>
          </tbody>
        </table></div>
        <strong>La regla:</strong> si $\sum m_a < n$ ⇒ <em>no</em>; si $\sum m_a = n$ con todas simples ⇒ <em>sí</em>; si $\sum m_a = n$ con alguna repetida ⇒ <em>posiblemente</em>.</div>`,
        resultado: tex`<strong>No es diagonalizable.</strong> $1+\lambda^2$ no tiene raíces reales, así que la única es $\lambda=1$ con $m_a=3 < 5$.` }
    ]},

  /* ========================= 9 ========================= */
  { id: 'tp7-9', num: '9',
    enunciado: tex`<p>Sea $T$ una transformación lineal cuyos autovalores son $1$, $-1$ y $0$ y tal que tres autovectores asociados a ellos, respectivamente, son $a = (1,0,0)$, $b = (0,-1,-1)$ y $c = (0,-1,1)$.
    Hallar $[T]_C$ utilizando matrices de transformación y de cambio de base. Dar la expresión de la transformación lineal. ¿Es $T$ inyectiva? ¿Es sobreyectiva? Justificar.</p>`,
    conceptos: ['u7-criterio-diagonalizacion', 'u6-cambio-base-matriz', 'u6-inyectiva-sobreyectiva', 'u7-teorema-resumen'],
    pista: tex`En la base de autovectores la matriz ya es diagonal. Lo que falta es «deshacer» el cambio de base: $[T]_C = P\,[T]_B\,P^{-1}$ con $P$ la matriz de autovectores como columnas.`,
    resolucion: tex`<h3>Paso 1 — La matriz en la base de autovectores</h3>
    <p>Sea $B = \{a, b, c\} = \{(1,0,0),\; (0,-1,-1),\; (0,-1,1)\}$. Por dato $T(a) = 1\cdot a$, $T(b) = -1\cdot b$, $T(c) = 0 \cdot c$, así que</p>
    <div class="fx center">$$[T]_B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$</div>
    <p>que es diagonal, como debe ser siendo $B$ una base de autovectores ([[u7-criterio-diagonalizacion]]).</p>
    <p><strong>Control de que $B$ es base:</strong> $\;\det[\;]_{BC} = 1\cdot\begin{vmatrix} -1 & -1 \\ -1 & 1\end{vmatrix} = -1-1 = -2 \neq 0$ ✓</p>

    <h3>Paso 2 — Las matrices de cambio de base</h3>
    <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & -1 \\ 0 & -1 & 1 \end{pmatrix}, \qquad
    [\;]_{CB} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -\tfrac12 & -\tfrac12 \\ 0 & -\tfrac12 & \tfrac12 \end{pmatrix}$$</div>
    <p>Control: $[\;]_{BC}[\;]_{CB} = I_3$ ✓ (el bloque $2\times2$ inferior tiene determinante $-2$, y su inversa es $-\tfrac12\begin{pmatrix} 1 & 1 \\ 1 & -1\end{pmatrix}$).</p>

    <h3>Paso 3 — Conjugar</h3>
    <p>Por [[u6-cambio-base-matriz]], $\;[T]_C = [\;]_{BC}\cdot[T]_B\cdot[\;]_{CB}$.</p>
    <p>El primer producto es inmediato, porque $[T]_B$ diagonal <strong>escala las filas</strong> de $[\;]_{CB}$ por $1$, $-1$ y $0$:</p>
    <div class="fx center">$$[T]_B\,[\;]_{CB} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \tfrac12 & \tfrac12 \\ 0 & 0 & 0 \end{pmatrix}$$</div>
    <div class="fx center">$$[T]_C = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & -1 \\ 0 & -1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 \\ 0 & \tfrac12 & \tfrac12 \\ 0 & 0 & 0 \end{pmatrix}
    = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -\tfrac12 & -\tfrac12 \\ 0 & -\tfrac12 & -\tfrac12 \end{pmatrix}$$</div>

    <h3>La expresión analítica</h3>
    <div class="fx center">$$T(x,y,z) = \left(x,\;\; -\frac{y+z}{2},\;\; -\frac{y+z}{2}\right)$$</div>
    <p><strong>Verificación con los tres datos:</strong></p>
    <div class="fx center">$$T(1,0,0) = (1,\, 0,\, 0) = 1\cdot a \;✓$$</div>
    <div class="fx center">$$T(0,-1,-1) = \left(0,\; -\tfrac{-2}{2},\; -\tfrac{-2}{2}\right) = (0,\, 1,\, 1) = -1\cdot b \;✓$$</div>
    <div class="fx center">$$T(0,-1,1) = \left(0,\; -\tfrac{0}{2},\; -\tfrac{0}{2}\right) = (0,\, 0,\, 0) = 0 \cdot c \;✓$$</div>
    <p>Controles globales: $\operatorname{tr}[T]_C = 1 - \tfrac12 - \tfrac12 = 0 = 1 + (-1) + 0$ ✓ y $\det[T]_C = 0$ ✓ (porque $0$ es autovalor).</p>

    <h3>¿Inyectiva? ¿Sobreyectiva? — No, y no</h3>
    <p>La justificación más corta pasa por el ítem xii del [[u7-teorema-resumen|teorema de resumen]]:</p>
    <div class="fx center">$$\lambda = 0 \textbf{ es autovalor} \;\Longrightarrow\; \det[T]_C = 0 \;\Longrightarrow\; T \text{ no es inversible}$$</div>
    <p>Más concretamente:</p>
    <ul>
      <li><strong>No es inyectiva.</strong> $\operatorname{Nuc}(T) = E_0 = \operatorname{gen}\{c\} = \operatorname{gen}\{(0,-1,1)\} \neq \{\vec 0\}$, y por [[u6-inyectiva-sobreyectiva]] eso es exactamente la falla de inyectividad.</li>
      <li><strong>No es sobreyectiva.</strong> Por el teorema de la dimensión, $\dim\operatorname{Im}(T) = 3 - 1 = 2 < 3 = \dim\mathbb{R}^3$.</li>
    </ul>
    <p>Siendo $T: \mathbb{R}^3 \to \mathbb{R}^3$ un endomorfismo, las dos propiedades son equivalentes: falla una si y sólo si falla la otra. Como los <strong>doce</strong> ítems del teorema de resumen son equivalentes entre sí y uno es falso, todos lo son.</p>
    <div class="note tip"><b class="lbl">El atajo que conviene reconocer</b>
    Para responder «¿es inyectiva?» en este tipo de ejercicio no hace falta calcular nada: basta mirar <strong>si $0$ está entre los autovalores</strong>. Si está, no es inyectiva ni sobreyectiva; si no está, es un isomorfismo. Es la pregunta que aparece en los finales, y se contesta en un renglón.</div>`,
    resultado: tex`$[T]_C = \begin{pmatrix} 1&0&0\\0&-\frac12&-\frac12\\0&-\frac12&-\frac12\end{pmatrix}$, es decir $T(x,y,z) = \left(x,\, -\frac{y+z}{2},\, -\frac{y+z}{2}\right)$. <strong>No es inyectiva ni sobreyectiva</strong>, porque $0$ es autovalor: $\operatorname{Nuc}(T) = \operatorname{gen}\{(0,-1,1)\}$ y $\dim\operatorname{Im}(T) = 2 < 3$.` },

  /* ========================= 10 ========================= */
  { id: 'tp7-10', num: '10',
    enunciado: tex`<p>Sean $B = \{(1,0,1), (1,1,-1), (1,3,-2)\}$ una base de $\mathbb{R}^3$ y $T: \mathbb{R}^3 \to \mathbb{R}^3$ una transformación lineal tal que
    $T(1,0,1) = -2(1,0,1)$, $\;T(1,1,-1) = (1,1,-1)$ y $\;T(1,3,-2) = (1,3,-2)$.
    <strong>Sin encontrar la expresión de la transformación lineal</strong>, indicar:</p>
    <div class="note tip"><b class="lbl">Leer los datos como lo que son</b>
    Los tres datos tienen la forma $T(v) = \lambda v$: <strong>los tres vectores de $B$ son autovectores</strong>, con autovalores $-2$, $1$ y $1$. Entonces
    $$[T]_B = \operatorname{diag}(-2,\; 1,\; 1)$$
    ya es diagonal, y de ella sale todo lo que el ejercicio pide sin calcular la expresión analítica ([[u7-sin-calcular]]).</div>`,
    incisos: [

      { id: 'tp7-10a', rot: 'a', enunciado: tex`Imagen y núcleo de $T$, dimensión y base de los mismos.`,
        conceptos: ['u7-sin-calcular', 'u6-nucleo-imagen-matriz', 'u6-teorema-dimension'],
        pista: tex`¿Está el 0 entre los autovalores?`,
        resolucion: tex`<p>Los autovalores son $-2$, $1$ y $1$: <strong>ninguno es cero</strong>.</p>
        <h3>Núcleo</h3>
        <p>Por el ítem xii del [[u7-teorema-resumen|teorema de resumen]], $0$ no es autovalor si y sólo si la matriz es inversible. Y como $E_0 = \operatorname{Nuc}(T)$ ([[u7-espacio-propio]]), que $0$ no sea autovalor significa precisamente que el núcleo es trivial:</p>
        <div class="fx center">$$\operatorname{Nuc}(T) = \{(0,0,0)\}, \qquad \dim\operatorname{Nuc}(T) = 0$$</div>
        <p>Su base es el conjunto vacío (el subespacio nulo no tiene base).</p>
        <p>Comprobación directa: $\det[T]_B = (-2)(1)(1) = -2 \neq 0$, así que el sistema homogéneo $[T]_B\,v = \vec 0$ tiene sólo la solución trivial.</p>
        <h3>Imagen</h3>
        <p>Por el [[u6-teorema-dimension|teorema de la dimensión]]:</p>
        <div class="fx center">$$\dim\operatorname{Im}(T) = 3 - 0 = 3 = \dim\mathbb{R}^3 \;\Longrightarrow\; \operatorname{Im}(T) = \mathbb{R}^3$$</div>
        <p>Base: cualquiera de $\mathbb{R}^3$ — la canónica, o la propia $B$.</p>
        <div class="note"><b class="lbl">$T$ es un isomorfismo</b> Núcleo trivial e imagen total: es inyectiva y sobreyectiva ([[u6-inyectiva-sobreyectiva]]). Todos los doce ítems del teorema de resumen son verdaderos.</div>`,
        resultado: tex`$\operatorname{Nuc}(T) = \{(0,0,0)\}$, $\dim 0$ (porque $0$ no es autovalor); $\operatorname{Im}(T) = \mathbb{R}^3$, $\dim 3$. $T$ es un isomorfismo.` },

      { id: 'tp7-10b', rot: 'b', enunciado: tex`Autovalores, autovectores y subespacios propios.`,
        conceptos: ['u7-sin-calcular', 'u7-espacio-propio'],
        resolucion: tex`<p>Los datos <strong>son</strong> la respuesta, leídos correctamente.</p>
        <h3>Autovalores</h3>
        <p>$[T]_B = \operatorname{diag}(-2,1,1)$ es diagonal, así que</p>
        <div class="fx center">$$P(\lambda) = (-2-\lambda)(1-\lambda)^2$$</div>
        <div class="fx center">$$\lambda = -2 \;(m_a = 1), \qquad \lambda = 1 \;(m_a = 2)$$</div>

        <h3>Subespacios propios</h3>
        <p><strong>$\lambda = -2$:</strong> el dato $T(1,0,1) = -2(1,0,1)$ da un autovector, y como $m_a = 1$ se tiene $m_g = 1$ por [[u7-teorema-multiplicidades]], así que no hay más:</p>
        <div class="fx center">$$E_{-2} = \operatorname{gen}\{(1,0,1)\}, \qquad \dim = 1$$</div>
        <p><strong>$\lambda = 1$:</strong> los otros dos datos dan dos autovectores de autovalor 1, y son L.I. (están en una base). Entonces $m_g \ge 2$; y por $m_g \le m_a = 2$, resulta $m_g = 2$ exactamente:</p>
        <div class="fx center">$$E_1 = \operatorname{gen}\{(1,1,-1),\;\; (1,3,-2)\}, \qquad \dim = 2$$</div>
        <p>Es un <strong>plano por el origen</strong>. Su ecuación, con el producto vectorial:</p>
        <div class="fx center">$$(1,1,-1) \times (1,3,-2) = \breve i(-2+3) - \breve j(-2+1) + \breve k(3-1) = (1,\, 1,\, 2)$$</div>
        <div class="fx center">$$E_1 = \{(x,y,z) : x + y + 2z = 0\}$$</div>
        <p>Controles: $(1,1,-1) \Rightarrow 1+1-2 = 0$ ✓; $(1,3,-2) \Rightarrow 1+3-4 = 0$ ✓. Y $(1,0,1) \Rightarrow 1+0+2 = 3 \neq 0$ ✓ — correctamente <em>fuera</em> de $E_1$, como debe estar un autovector de otro autovalor.</p>
        <p><strong>Conjunto de autovectores:</strong> los múltiplos no nulos de $(1,0,1)$, más todos los vectores no nulos del plano $x+y+2z = 0$.</p>
        <div class="note tip"><b class="lbl">Interpretación geométrica</b>
        $T$ deja <strong>fijo</strong> todo el plano $x+y+2z=0$ ($\lambda = 1$) e invierte y duplica la dirección $(1,0,1)$ ($\lambda = -2$). Es una simetría respecto de ese plano, escalada por $2$ en la dirección transversal.</div>`,
        resultado: tex`$\lambda = -2$ con $E_{-2} = \operatorname{gen}\{(1,0,1)\}$ ($\dim 1$); $\lambda = 1$ con $E_1 = \operatorname{gen}\{(1,1,-1),(1,3,-2)\}$ ($\dim 2$), que es el plano $x+y+2z=0$.` },

      { id: 'tp7-10c', rot: 'c', enunciado: tex`¿Es $T$ diagonalizable? Justificar y, si es posible, dar la base $B$ que hace que $[T]_B$ sea diagonal. Justificar.`,
        conceptos: ['u7-criterio-diagonalizacion'],
        resolucion: tex`<p><strong>Sí es diagonalizable</strong>, y de hecho <strong>ya está diagonalizada</strong>: la base que lo logra es la propia $B$ del enunciado.</p>
        <h3>Justificación por el criterio</h3>
        <div class="tbl"><table>
          <thead><tr><th>$\lambda$</th><th>$m_a$</th><th>$m_g$</th><th>¿$m_g = m_a$?</th></tr></thead>
          <tbody>
            <tr><td>$-2$</td><td>1</td><td>1</td><td>sí</td></tr>
            <tr><td>$1$</td><td>2</td><td>2</td><td>sí</td></tr>
          </tbody>
        </table></div>
        <p>Se cumple $m_g = m_a$ para todos los autovalores y las multiplicidades suman $1 + 2 = 3 = \dim\mathbb{R}^3$. Por el [[u7-criterio-diagonalizacion|criterio]], $T$ es diagonalizable.</p>
        <h3>La base y la forma diagonal</h3>
        <div class="fx center">$$B = \{(1,0,1),\;\; (1,1,-1),\;\; (1,3,-2)\}, \qquad [T]_B = \begin{pmatrix} -2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{pmatrix}$$</div>
        <p><strong>Justificación de que esa $B$ sirve:</strong> es una base de $\mathbb{R}^3$ (dato del enunciado) <em>y</em> está formada íntegramente por autovectores, porque los tres datos son de la forma $T(v) = \lambda v$. En una base de autovectores la matriz es necesariamente diagonal, con los autovalores en la diagonal y en el orden de la base.</p>
        <p><strong>Control de que $B$ es base:</strong></p>
        <div class="fx center">$$\det\begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & -1 \\ 1 & 3 & -2\end{pmatrix} = 1(-2+3) - 0(-2+1) + 1(3-1) = 1 + 2 = 3 \neq 0 \;✓$$</div>
        <div class="note tip"><b class="lbl">Por qué el enunciado dice «sin encontrar la expresión»</b>
        Porque no hace falta. Calcular $[T]_C$ y la fórmula de $T(x,y,z)$ exigiría invertir una matriz de $3\times3$, y <strong>no aportaría nada</strong>: núcleo, imagen, autovalores, espacios propios y diagonalización salen todos de $[T]_B = \operatorname{diag}(-2,1,1)$, que se escribe leyendo los datos.
        <p>Es el patrón de [[u7-sin-calcular]], y el mismo que usan los ejercicios 12 y 13 en espacios abstractos.</p></div>`,
        resultado: tex`<strong>Sí.</strong> $m_g = m_a$ en los dos autovalores ($1$ y $2$), sumando $3 = \dim\mathbb{R}^3$. La base es la propia $B = \{(1,0,1),(1,1,-1),(1,3,-2)\}$, con $[T]_B = \operatorname{diag}(-2,1,1)$.` }
    ]},

  /* ========================= 11 ========================= */
  { id: 'tp7-11', num: '11',
    enunciado: tex`<p>Probar que si $v$ y $w$ son autovectores de $T$ asociados al <strong>mismo</strong> autovalor, entonces cualquier combinación lineal de ellos es también autovector de $T$.</p>`,
    conceptos: ['u7-propiedades', 'u7-espacio-propio', 'u6-propiedades-tl'],
    pista: tex`Aplicá $T$ a la combinación lineal y usá la linealidad. La clave es que el autovalor sea <em>el mismo</em> en los dos términos: eso permite sacarlo de factor común.`,
    resolucion: tex`<h3>Enunciado preciso</h3>
    <p>Sean $v, w$ autovectores de $T$ asociados al mismo autovalor $\lambda$, es decir</p>
    <div class="fx center">$$T(v) = \lambda v, \qquad T(w) = \lambda w$$</div>
    <p>y sea $u = \alpha v + \beta w$ con $\alpha, \beta \in \mathbb{R}$ <strong>tales que $u \neq \vec 0$</strong>. Hay que probar que $u$ es autovector de $T$ asociado a $\lambda$.</p>

    <h3>Demostración</h3>
    <div class="fx center">$$T(u) = T(\alpha v + \beta w) \overset{\text{(1)}}{=} \alpha\,T(v) + \beta\,T(w) \overset{\text{(2)}}{=} \alpha\,\lambda v + \beta\,\lambda w \overset{\text{(3)}}{=} \lambda\,(\alpha v + \beta w) = \lambda\, u$$</div>
    <p>donde</p>
    <ol>
      <li>es la <strong>linealidad</strong> de $T$ (propiedad 4 de [[u6-propiedades-tl]]);</li>
      <li>es la hipótesis sobre $v$ y $w$;</li>
      <li>es sacar $\lambda$ de <strong>factor común</strong>, que se puede hacer <em>precisamente porque el autovalor es el mismo en los dos términos</em>.</li>
    </ol>
    <p>Luego $T(u) = \lambda u$ con $u \neq \vec 0$, es decir $u$ es autovector de $T$ asociado a $\lambda$. $\blacksquare$</p>

    <div class="note warn"><b class="lbl">Las dos condiciones que no se pueden omitir</b>
    <strong>(1) $u \neq \vec 0$.</strong> El vector nulo cumple $T(\vec 0) = \lambda\vec 0$ para todo $\lambda$, pero <em>por definición no es autovector</em> ([[u7-autovalor]]). Si se toma $\beta = -\alpha$ con $w = v$, la combinación da $\vec 0$ y hay que excluirla. Al enunciar el resultado hay que decir «cualquier combinación lineal <em>no nula</em>».
    <p><strong>(2) El autovalor debe ser el mismo.</strong> Con autovalores distintos el paso (3) <strong>falla</strong>: $\alpha\lambda_1 v + \beta\lambda_2 w$ no se puede escribir como $\lambda(\alpha v + \beta w)$.</p></div>

    <h3>Contraejemplo con autovalores distintos</h3>
    <p>Con la matriz del ejercicio 1, $A = \begin{pmatrix} 2&2\\2&2\end{pmatrix}$: $\;(1,1)$ es autovector de $\lambda = 4$ y $(1,-1)$ de $\lambda = 0$. Su suma es $(2,0)$, y</p>
    <div class="fx center">$$A\begin{pmatrix} 2 \\ 0\end{pmatrix} = \begin{pmatrix} 4 \\ 4\end{pmatrix}$$</div>
    <p>que <strong>no</strong> es múltiplo de $(2,0)$. La suma de autovectores de autovalores distintos no es autovector.</p>

    <div class="note tip"><b class="lbl">Qué dice realmente este resultado</b>
    Que $E_\lambda \cup \{\vec 0\}$ es <strong>cerrado para combinaciones lineales</strong>, es decir que el espacio propio</p>
    $$E_\lambda = \{v : T(v) = \lambda v\}$$
    es un <strong>subespacio vectorial</strong> ([[u7-espacio-propio]]). Es exactamente la propiedad 2 de [[u7-propiedades]], y es lo que permite hablar de «base y dimensión de $E_\lambda$» —es decir de la multiplicidad geométrica— en todos los demás ejercicios del práctico.
    <p>Notar que $E_\lambda$ incluye al $\vec 0$ (para ser subespacio debe contenerlo), pero el nulo no es <em>autovector</em>. La distinción entre «el espacio propio» y «el conjunto de autovectores» es exactamente esa.</p></div>`,
    resultado: tex`$T(\alpha v + \beta w) = \alpha T(v) + \beta T(w) = \alpha\lambda v + \beta\lambda w = \lambda(\alpha v + \beta w)$, usando la linealidad y que el autovalor es el <strong>mismo</strong> en ambos términos. Hay que pedir $\alpha v + \beta w \neq \vec 0$. Equivale a decir que $E_\lambda$ es un subespacio.` },

  /* ========================= 12 ========================= */
  { id: 'tp7-12', num: '12',
    enunciado: tex`<p>Sean $B = \{a,b,c,d\}$ una base de un espacio vectorial $V$ y $T: V \to V$ la transformación lineal tal que
    $T(a) = -2a$, $\;T(b) = b$, $\;T(c) = a$ y $\;T(d) = 0$.</p>
    <div class="note tip"><b class="lbl">Armar $[T]_B$ es el primer paso siempre</b>
    Los vectores son símbolos sin componentes, pero eso no importa: cada dato da una columna de $[T]_B$, escribiendo el transformado en coordenadas de $B$ ([[u7-sin-calcular]]).
    <div class="fx center">$$[T(a)]_B = \begin{pmatrix} -2\\0\\0\\0\end{pmatrix}, \;\; [T(b)]_B = \begin{pmatrix} 0\\1\\0\\0\end{pmatrix}, \;\; [T(c)]_B = \begin{pmatrix} 1\\0\\0\\0\end{pmatrix}, \;\; [T(d)]_B = \begin{pmatrix} 0\\0\\0\\0\end{pmatrix}$$</div>
    $$[T]_B = \begin{pmatrix} -2 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
    <p><strong>Atención a la tercera columna:</strong> $T(c) = a$ <em>no</em> es de la forma $\lambda c$, así que $c$ no es autovector y esa columna no es diagonal. Es lo que distingue este ejercicio del 10.</p></div>`,
    incisos: [

      { id: 'tp7-12a', rot: 'a', enunciado: tex`Hallar imagen y núcleo de $T$, dar dimensión y base de los mismos.`,
        conceptos: ['u7-sin-calcular', 'u6-nucleo-imagen-matriz'],
        resolucion: tex`<h3>Imagen</h3>
        <p>Por [[u6-imagen-generadores]], la imagen está generada por los transformados de la base:</p>
        <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{-2a,\;\; b,\;\; a,\;\; 0\} = \operatorname{gen}\{a,\;\; b\}$$</div>
        <p>($-2a$ y $a$ generan la misma recta, y el $0$ no aporta.) Como $a$ y $b$ son L.I. (están en una base):</p>
        <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{a, b\}, \qquad \dim = 2, \qquad \text{base } \{a, b\}$$</div>

        <h3>Núcleo</h3>
        <p>Se resuelve $[T]_B\,x = \vec 0$ con $x = (x_1,x_2,x_3,x_4)$ las coordenadas en $B$:</p>
        <div class="fx center">$$\begin{cases} -2x_1 + x_3 = 0 \;\Longrightarrow\; x_3 = 2x_1 \\ x_2 = 0 \\ 0 = 0 \\ 0 = 0 \end{cases}$$</div>
        <p>Quedan libres $x_1$ y $x_4$, luego $\dim\operatorname{Nuc}(T) = 2$. Dando valor 1 a cada libre:</p>
        <div class="fx center">$$(x_1,x_4) = (1,0) \to (1,0,2,0) = a + 2c, \qquad (0,1) \to (0,0,0,1) = d$$</div>
        <div class="fx center">$$\operatorname{Nuc}(T) = \operatorname{gen}\{a + 2c,\;\; d\}, \qquad \dim = 2$$</div>
        <p><strong>Verificaciones</strong> (directas, sin matriz):</p>
        <div class="fx center">$$T(a + 2c) = T(a) + 2T(c) = -2a + 2a = 0 \;✓, \qquad T(d) = 0 \;✓$$</div>
        <p>Control por el [[u6-teorema-dimension|teorema de la dimensión]]: $\;\dim V = 4 = 2 + 2$ ✓</p>
        <div class="note warn"><b class="lbl">El elemento del núcleo que se escapa</b>
        Es fácil dar $\operatorname{Nuc}(T) = \operatorname{gen}\{d\}$ y quedarse corto. El vector $a + 2c$ también va al nulo, por la <strong>cancelación</strong> entre $T(a) = -2a$ y $T(c) = a$. Resolver el sistema completo lo detecta; adivinar, no.</div>`,
        resultado: tex`$\operatorname{Im}(T) = \operatorname{gen}\{a, b\}$, $\dim 2$. &nbsp; $\operatorname{Nuc}(T) = \operatorname{gen}\{a+2c,\; d\}$, $\dim 2$. Control: $4 = 2+2$.` },

      { id: 'tp7-12b', rot: 'b', enunciado: tex`Autovalores, autovectores y subespacios propios de $T$.`,
        conceptos: ['u7-sin-calcular', 'u7-polinomio-caracteristico'],
        resolucion: tex`<h3>Polinomio característico</h3>
        <p>$[T]_B - \lambda I$ es <strong>triangular superior</strong>:</p>
        <div class="fx center">$$\begin{pmatrix} -2-\lambda & 0 & 1 & 0 \\ 0 & 1-\lambda & 0 & 0 \\ 0 & 0 & -\lambda & 0 \\ 0 & 0 & 0 & -\lambda \end{pmatrix}
        \;\Longrightarrow\; P(\lambda) = (-2-\lambda)(1-\lambda)\,\lambda^2$$</div>
        <div class="fx center">$$\lambda = -2 \;(m_a=1), \qquad \lambda = 1 \;(m_a=1), \qquad \lambda = 0 \;(m_a=2)$$</div>
        <p>Control: $\operatorname{tr}[T]_B = -2+1+0+0 = -1 = -2+1+0+0$ ✓</p>

        <h3>Subespacios propios</h3>
        <p><strong>$\lambda = -2$:</strong> de $([T]_B + 2I)x = \vec 0$ salen $x_3 = 0$ (fila 1), $3x_2 = 0$, $2x_3 = 0$, $2x_4 = 0$, dejando $x_1$ libre.</p>
        <div class="fx center">$$E_{-2} = \operatorname{gen}\{a\}, \qquad m_g = 1 = m_a \;✓$$</div>
        <p><strong>$\lambda = 1$:</strong> de $([T]_B - I)x = \vec 0$ salen $x_3 = 0$, $x_4 = 0$ y $-3x_1 + x_3 = -3x_1 = 0 \Rightarrow x_1 = 0$, con $x_2$ libre.</p>
        <div class="fx center">$$E_1 = \operatorname{gen}\{b\}, \qquad m_g = 1 = m_a \;✓$$</div>
        <p><strong>$\lambda = 0$:</strong> es el núcleo, ya calculado en a) ([[u7-espacio-propio]]):</p>
        <div class="fx center">$$E_0 = \operatorname{Nuc}(T) = \operatorname{gen}\{a + 2c,\;\; d\}, \qquad m_g = 2 = m_a \;✓$$</div>
        <p><strong>Conjunto de autovectores:</strong> los múltiplos no nulos de $a$, los de $b$, y todos los elementos no nulos de $\operatorname{gen}\{a+2c,\, d\}$.</p>
        <div class="note tip"><b class="lbl">Dos lecturas rápidas de los datos</b>
        $T(a) = -2a$ y $T(b) = b$ se leen directamente como autovectores ($\lambda = -2$ y $\lambda = 1$), y $T(d) = 0$ como autovector de $\lambda = 0$. El único dato que <strong>no</strong> da un autovector es $T(c) = a$ — y es también el que genera el segundo elemento del núcleo por cancelación. Ver [[u7-sin-calcular]].</div>`,
        resultado: tex`$P(\lambda) = (-2-\lambda)(1-\lambda)\lambda^2$. $E_{-2} = \operatorname{gen}\{a\}$, $E_1 = \operatorname{gen}\{b\}$ (ambos $m_g=1$) y $E_0 = \operatorname{gen}\{a+2c,\, d\}$ ($m_g = 2$).` },

      { id: 'tp7-12c', rot: 'c', enunciado: tex`¿$T$ es diagonalizable? Justificar y, si es posible, indicar una base $M$ tal que $[T]_M$ sea diagonal. Justificar y hallar $[T]_M$.`,
        conceptos: ['u7-criterio-diagonalizacion', 'u7-multiplicidades'],
        resolucion: tex`<p><strong>Sí es diagonalizable.</strong></p>
        <h3>Justificación</h3>
        <div class="tbl"><table>
          <thead><tr><th>$\lambda$</th><th>$m_a$</th><th>$m_g$</th><th>¿$m_g = m_a$?</th></tr></thead>
          <tbody>
            <tr><td>$-2$</td><td>1</td><td>1</td><td>sí</td></tr>
            <tr><td>$1$</td><td>1</td><td>1</td><td>sí</td></tr>
            <tr><td>$0$</td><td>2</td><td>2</td><td>sí</td></tr>
          </tbody>
        </table></div>
        <p>Se cumple $m_g = m_a$ en los tres autovalores, y las multiplicidades suman $1+1+2 = 4 = \dim V$. Por el [[u7-criterio-diagonalizacion|criterio]] hay 4 autovectores L.I. y existe base de autovectores.</p>
        <h3>La base y la forma diagonal</h3>
        <p>Se unen las bases de los tres espacios propios:</p>
        <div class="fx center">$$M = \{a,\;\; b,\;\; a + 2c,\;\; d\}$$</div>
        <div class="fx center">$$[T]_M = \begin{pmatrix} -2 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$</div>
        <p>con los autovalores $-2$, $1$, $0$, $0$ en el orden de $M$.</p>
        <p><strong>Justificación de que $M$ es base:</strong> en coordenadas de $B$ los cuatro vectores son $(1,0,0,0)$, $(0,1,0,0)$, $(1,0,2,0)$ y $(0,0,0,1)$, y</p>
        <div class="fx center">$$\det\begin{pmatrix} 1&0&1&0 \\ 0&1&0&0 \\ 0&0&2&0 \\ 0&0&0&1\end{pmatrix} = 1\cdot1\cdot2\cdot1 = 2 \neq 0 \;✓$$</div>
        <p>(es triangular superior). Siendo 4 vectores L.I. en un espacio de dimensión 4, forman base por el [[u4-teorema-26|Teorema 26]]. Y al ser todos autovectores, $[T]_M$ es diagonal.</p>
        <div class="note tip"><b class="lbl">Lo que cambió respecto de $B$</b>
        $[T]_B$ <strong>no</strong> era diagonal: tenía un 1 fuera de la diagonal, por el dato $T(c) = a$. La base $M$ reemplaza $c$ por $a + 2c$ —que sí es autovector— y $[T]_M$ queda diagonal. Es el ejemplo más claro de que la diagonalizabilidad es una propiedad de $T$, no de la matriz con que se la escribió: la misma transformación tiene una representación diagonal y otras que no lo son ([[u7-semejantes]]).</div>`,
        resultado: tex`<strong>Sí.</strong> $m_g = m_a$ en los tres autovalores, sumando $4 = \dim V$. Con $M = \{a,\; b,\; a+2c,\; d\}$ resulta $[T]_M = \operatorname{diag}(-2,\, 1,\, 0,\, 0)$.` }
    ]},

  /* ========================= 13 ========================= */
  { id: 'tp7-13', num: '13',
    enunciado: tex`<p>Sea $B = \{a,b,c\}$ una base de un espacio vectorial $V$.</p>
    <div class="note warn"><b class="lbl">Cuidado en el inciso c)</b> El inciso b) pide $[T]_{BD}$, una matriz con <strong>dos bases distintas</strong>. Los autovalores <em>no</em> se pueden leer de ella: hacen falta la misma base en dominio y codominio. Hay que pasar a $[T]_B$ (o a $[T]_D$) primero.</div>`,
    incisos: [

      { id: 'tp7-13a', rot: 'a', enunciado: tex`Verificar que $D = \{a-b,\; 2b+c,\; 3a\}$ es base de $V$.`,
        conceptos: ['u4-li-ld', 'u4-teorema-26'],
        resolucion: tex`<p>Se trabaja en coordenadas respecto de $B$, que es base y por lo tanto permite asignarlas ([[u5-coordenadas]]):</p>
        <div class="fx center">$$a - b \to (1,-1,0), \qquad 2b + c \to (0,2,1), \qquad 3a \to (3,0,0)$$</div>
        <p>Como $\dim V = 3$ y hay 3 vectores, por el [[u4-teorema-26|Teorema 26]] basta verificar la independencia lineal, y para eso alcanza un determinante ([[u4-teorema-15-17|Teorema 17]]):</p>
        <div class="fx center">$$\det \begin{pmatrix} 1 & -1 & 0 \\ 0 & 2 & 1 \\ 3 & 0 & 0 \end{pmatrix} = 3 \cdot \begin{vmatrix} -1 & 0 \\ 2 & 1\end{vmatrix} = 3\,(-1 - 0) = -3 \neq 0$$</div>
        <p>(Desarrollado por la tercera fila, que tiene dos ceros; el signo de la posición $(3,1)$ es $+$.)</p>
        <p>$\det \neq 0$ ⇒ los tres son L.I. ⇒ <strong>$D$ es base de $V$</strong>. $\blacksquare$</p>`,
        resultado: tex`Sí: en coordenadas de $B$ los vectores son $(1,-1,0)$, $(0,2,1)$ y $(3,0,0)$, con $\det = -3 \neq 0$. Son 3 vectores L.I. en un espacio de dimensión 3, luego base.` },

      { id: 'tp7-13b', rot: 'b', enunciado: tex`Hallar $[T]_{BD}$ sabiendo que $T(a) = 2a - 2b$, $\;T(b) = 0$ y $\;T(c) = 9a$.`,
        conceptos: ['u6-matriz-asociada', 'u5-calcular-coordenadas'],
        pista: tex`Las columnas son $[T(a)]_D$, $[T(b)]_D$ y $[T(c)]_D$: hay que escribir cada transformado en la base <strong>$D$</strong>, no en $B$.`,
        resolucion: tex`<p>Por [[u6-matriz-asociada]], las columnas de $[T]_{BD}$ son los transformados de los vectores de $B$ <strong>expresados en $D$</strong>.</p>
        <h3>Coordenadas genéricas en $D$</h3>
        <p>Si $x = \alpha a + \beta b + \gamma c$ y se escribe $x = p(a-b) + q(2b+c) + r(3a)$, agrupando:</p>
        <div class="fx center">$$x = (p + 3r)\,a + (-p + 2q)\,b + q\,c$$</div>
        <div class="fx center">$$\begin{cases} \alpha = p + 3r \\ \beta = -p + 2q \\ \gamma = q \end{cases}
        \;\Longrightarrow\; q = \gamma, \quad p = 2\gamma - \beta, \quad r = \frac{\alpha + \beta - 2\gamma}{3}$$</div>

        <h3>Las tres columnas</h3>
        <div class="tbl"><table>
          <thead><tr><th>$v$</th><th>$T(v)$</th><th>$(\alpha,\beta,\gamma)$</th><th>$[T(v)]_D = (p,q,r)$</th></tr></thead>
          <tbody>
            <tr><td>$a$</td><td>$2a - 2b$</td><td>$(2,-2,0)$</td><td>$(2,\; 0,\; 0)$</td></tr>
            <tr><td>$b$</td><td>$0$</td><td>$(0,0,0)$</td><td>$(0,\; 0,\; 0)$</td></tr>
            <tr><td>$c$</td><td>$9a$</td><td>$(9,0,0)$</td><td>$(0,\; 0,\; 3)$</td></tr>
          </tbody>
        </table></div>
        <div class="fx center">$$[T]_{BD} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$$</div>
        <p><strong>Verificaciones.</strong> Columna 1: $\;2(a-b) = 2a - 2b = T(a)$ ✓. Columna 3: $\;3(3a) = 9a = T(c)$ ✓</p>
        <div class="note warn"><b class="lbl">Que salga diagonal es engañoso</b>
        $[T]_{BD}$ resultó diagonal, pero <strong>eso no significa que $T$ sea diagonalizable</strong>: mezcla dos bases distintas. Sus entradas $2$, $0$, $3$ <em>no</em> son los autovalores de $T$. El inciso c) lo aclara.</div>`,
        resultado: tex`$[T]_{BD} = \begin{pmatrix} 2&0&0\\0&0&0\\0&0&3\end{pmatrix}$, usando $[x]_D = \left(2\gamma-\beta,\; \gamma,\; \frac{\alpha+\beta-2\gamma}{3}\right)$ para $x = \alpha a + \beta b + \gamma c$.` },

      { id: 'tp7-13c', rot: 'c', enunciado: tex`Calcular los autovalores de la transformación lineal del inciso anterior.`,
        conceptos: ['u7-polinomio-caracteristico'],
        pista: tex`No uses $[T]_{BD}$. Para los autovalores hace falta una matriz con la <em>misma</em> base en dominio y codominio.`,
        resolucion: tex`<div class="note warn"><b class="lbl">Primero, lo que NO se puede hacer</b>
        Leer «$2$, $0$, $3$» de la diagonal de $[T]_{BD}$. Esa matriz tiene base $B$ en el dominio y $D$ en el codominio, y el polinomio característico $\det(M - \lambda I)$ sólo tiene sentido para la matriz de un <strong>endomorfismo en una sola base</strong>. Con dos bases distintas, restar $\lambda I$ no corresponde a restar $\lambda\,\mathrm{Id}$ a la transformación.</div>

        <h3>Paso 1 — Pasar a $[T]_B$</h3>
        <p>Es inmediato, porque los datos ya están en términos de $a, b, c$. Las columnas son $[T(v)]_B$:</p>
        <div class="fx center">$$T(a) = 2a - 2b \to (2,-2,0), \quad T(b) = 0 \to (0,0,0), \quad T(c) = 9a \to (9,0,0)$$</div>
        <div class="fx center">$$[T]_B = \begin{pmatrix} 2 & 0 & 9 \\ -2 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$</div>
        <p><strong>Control por composición:</strong> debe valer $[T]_B = [\;]_{DB}\cdot[T]_{BD}$, con $[\;]_{DB}$ los vectores de $D$ en coordenadas de $B$ como columnas:</p>
        <div class="fx center">$$\begin{pmatrix} 1 & 0 & 3 \\ -1 & 2 & 0 \\ 0 & 1 & 0\end{pmatrix}\begin{pmatrix} 2 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 3\end{pmatrix}
        = \begin{pmatrix} 2 & 0 & 9 \\ -2 & 0 & 0 \\ 0 & 0 & 0\end{pmatrix} \;✓$$</div>

        <h3>Paso 2 — Polinomio característico</h3>
        <p>La tercera fila es nula salvo el $-\lambda$, así que conviene desarrollar por ahí:</p>
        <div class="fx center">$$P(\lambda) = \begin{vmatrix} 2-\lambda & 0 & 9 \\ -2 & -\lambda & 0 \\ 0 & 0 & -\lambda \end{vmatrix}
        = -\lambda \begin{vmatrix} 2-\lambda & 0 \\ -2 & -\lambda\end{vmatrix} = -\lambda\,\bigl[(2-\lambda)(-\lambda)\bigr]$$</div>
        <div class="fx center">$$P(\lambda) = \lambda^2\,(2-\lambda)$$</div>
        <div class="fx center">$$\lambda = 0 \;(m_a = 2), \qquad \lambda = 2 \;(m_a = 1)$$</div>
        <p>Control: $\operatorname{tr}[T]_B = 2 + 0 + 0 = 2 = 0 + 0 + 2$ ✓ y $\det[T]_B = 0$ ✓ (porque $0$ es autovalor).</p>
        <div class="note tip"><b class="lbl">Los autovalores no son los de $[T]_{BD}$</b>
        Salieron $0$ (doble) y $2$, <strong>no</strong> $2$, $0$, $3$. El $3$ de $[T]_{BD}$ era un artefacto del cambio de base, no un autovalor. Es el punto de todo el ejercicio.</div>`,
        resultado: tex`$[T]_B = \begin{pmatrix} 2&0&9\\-2&0&0\\0&0&0\end{pmatrix}$ y $P(\lambda) = \lambda^2(2-\lambda)$: autovalores $\lambda = 0$ (con $m_a=2$) y $\lambda = 2$. <strong>No</strong> son las entradas de $[T]_{BD}$.` },

      { id: 'tp7-13d', rot: 'd', enunciado: tex`Calcular imagen y núcleo de $T$, dar base y dimensión de los mismos. ¿Es $T$ diagonalizable? Justificar.`,
        conceptos: ['u6-nucleo-imagen-matriz', 'u7-criterio-diagonalizacion'],
        resolucion: tex`<h3>Imagen</h3>
        <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{T(a),\, T(b),\, T(c)\} = \operatorname{gen}\{2a-2b,\;\; 0,\;\; 9a\} = \operatorname{gen}\{a - b,\;\; a\} = \operatorname{gen}\{a,\, b\}$$</div>
        <div class="fx center">$$\dim\operatorname{Im}(T) = 2, \qquad \text{base } \{a,\, b\} \;\text{ (también sirve } \{a-b,\, a\})$$</div>

        <h3>Núcleo</h3>
        <p>Se resuelve $[T]_B\,x = \vec 0$ con $x = (x_1,x_2,x_3)$ en coordenadas de $B$:</p>
        <div class="fx center">$$\begin{cases} 2x_1 + 9x_3 = 0 \\ -2x_1 = 0 \;\Longrightarrow\; x_1 = 0 \\ 0 = 0\end{cases} \;\Longrightarrow\; x_1 = 0,\;\; x_3 = 0, \;\; x_2 \text{ libre}$$</div>
        <div class="fx center">$$\operatorname{Nuc}(T) = \operatorname{gen}\{b\}, \qquad \dim = 1$$</div>
        <p>Verificación directa: $T(b) = 0$ ✓ (es el dato). Control: $\;3 = 1 + 2$ ✓</p>

        <h3>¿Es diagonalizable? NO</h3>
        <p>El autovalor $\lambda = 0$ tiene $m_a = 2$, y su espacio propio es el núcleo ([[u7-espacio-propio]]):</p>
        <div class="fx center">$$m_g(0) = \dim E_0 = \dim\operatorname{Nuc}(T) = 1 \;<\; 2 = m_a(0)$$</div>
        <p>Por el [[u7-criterio-diagonalizacion|criterio]], $T$ <strong>no es diagonalizable</strong>: falta un autovector para el autovalor $0$.</p>
        <p>Para completar el cuadro, el otro autovalor sí está bien: de $([T]_B - 2I)x = \vec 0$ salen $9x_3 = 0 \Rightarrow x_3 = 0$ y $-2x_1 - 2x_2 = 0 \Rightarrow x_2 = -x_1$, de donde</p>
        <div class="fx center">$$E_2 = \operatorname{gen}\{a - b\}, \qquad m_g = 1 = m_a \;✓$$</div>
        <p>Control: $T(a-b) = T(a) - T(b) = 2a - 2b - 0 = 2(a-b)$ ✓</p>
        <p>En total hay $1 + 1 = 2$ autovectores L.I. y harían falta $3$.</p>
        <div class="note tip"><b class="lbl">El cierre del práctico</b>
        Este último ítem junta casi todo: matriz en bases mixtas, autovalores calculados en la base correcta, núcleo como espacio propio de $\lambda = 0$, y el criterio $m_g$ contra $m_a$ decidiendo la diagonalización. Si sale completo, la unidad 7 está lista para el parcial de promoción.</div>`,
        resultado: tex`$\operatorname{Im}(T) = \operatorname{gen}\{a,b\}$ ($\dim 2$) y $\operatorname{Nuc}(T) = \operatorname{gen}\{b\}$ ($\dim 1$). <strong>No es diagonalizable:</strong> $m_g(0) = 1 < 2 = m_a(0)$ — hay sólo 2 autovectores L.I. de los 3 necesarios.` }
    ]}

]});
