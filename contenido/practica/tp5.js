/* TP 5 — Cambio de base
   Enunciado: "T P N° 5 Cambio de Base.pdf" (7_EAL_2026/5_cambio_de_base) */

EAL.tp({
  id: 'tp5', num: 5, unidad: 'u5',
  titulo: 'Cambio de base',
  resumen: 'Coordenadas de un vector en una base, matrices de cambio de base, composición vía la canónica y recuperación de bases a partir de datos.',
  nota: tex`<b class="lbl">Antes de abrir las resoluciones</b> Intentá cada ítem a mano y usá la resolución para <strong>autocorregirte</strong>.<br><br>
  <b class="lbl">La notación de la cátedra, que hay que fijar de entrada</b> $[\;]_{BD}$ es la matriz de cambio <strong>de $B$ a $D$</strong>: origen primero, destino segundo ([[u5-matriz-cambio]]). Sus columnas son los vectores de $B$ <em>escritos en la base $D$</em>, y actúa así:
  $$[x]_D = [\;]_{BD}\,[x]_B$$
  Muchos libros usan el orden inverso; mezclarlos arruina el segundo parcial.<br><br>
  <b class="lbl">Las tres cosas que resuelven todo el práctico</b>
  <ol>
    <li><strong>$[\;]_{BC}$ sale sin hacer cuentas:</strong> se ponen los vectores de $B$ como columnas. Siempre conviene calcular esta y no su inversa.</li>
    <li><strong>$[\;]_{CB} = \bigl([\;]_{BC}\bigr)^{-1}$</strong>, por [[u5-inversa]]. Una sola inversión, nunca dos.</li>
    <li><strong>Todo se compone vía la canónica:</strong> $[\;]_{BD} = [\;]_{CD}\cdot[\;]_{BC}$ ([[u5-via-canonica]]). Los subíndices interiores se cancelan; si no cierran, el orden está mal.</li>
  </ol>`,

  ejercicios: [

  /* ========================= 1 ========================= */
  { id: 'tp5-1', num: '1',
    enunciado: tex`<p>Graficar en $\mathbb{R}^2$ los puntos $Q = (-8,-1)$ y $S = (-2,2)$ y dar las coordenadas de los mismos en la base $B = \{(2,1); (-4,1)\}$.</p>`,
    conceptos: ['u5-coordenadas', 'u5-calcular-coordenadas', 'u5-grafico'],
    pista: tex`Para cada punto se plantea $\alpha(2,1) + \beta(-4,1) = $ punto y se resuelve un sistema $2\times 2$. Si vas a hacerlo dos veces, conviene resolver el caso genérico una sola vez.`,
    resolucion: tex`<h3>Coordenadas de $Q = (-8,-1)$</h3>
    <p>Se plantea $\alpha(2,1) + \beta(-4,1) = (-8,-1)$ ([[u5-calcular-coordenadas]]):</p>
    <div class="fx center">$$\begin{cases} 2\alpha - 4\beta = -8 \\ \alpha + \beta = -1 \end{cases}$$</div>
    <p>De la 2.ª, $\alpha = -1 - \beta$. Sustituyendo en la 1.ª:</p>
    <div class="fx center">$$2(-1-\beta) - 4\beta = -8 \;\Longrightarrow\; -2 - 6\beta = -8 \;\Longrightarrow\; \beta = 1, \quad \alpha = -2$$</div>
    <div class="fx center">$$[Q]_B = \begin{pmatrix} -2 \\ 1 \end{pmatrix}$$</div>
    <p><strong>Verificación:</strong> $\;-2(2,1) + 1(-4,1) = (-4,-2) + (-4,1) = (-8,-1)$ ✓</p>

    <h3>Coordenadas de $S = (-2,2)$</h3>
    <div class="fx center">$$\begin{cases} 2\alpha - 4\beta = -2 \\ \alpha + \beta = 2 \end{cases}$$</div>
    <p>De la 2.ª, $\alpha = 2 - \beta$; sustituyendo: $\;4 - 6\beta = -2 \Rightarrow \beta = 1$, $\alpha = 1$.</p>
    <div class="fx center">$$[S]_B = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$</div>
    <p><strong>Verificación:</strong> $\;1(2,1) + 1(-4,1) = (-2,2)$ ✓</p>

    <h3>La fórmula genérica (conviene tenerla)</h3>
    <p>Resolviendo con $(x,y)$ en lugar de números: de $\alpha = y - \beta$ y $2(y-\beta) - 4\beta = x$ sale $2y - 6\beta = x$, de donde</p>
    <div class="fx center">$$\beta = \frac{2y - x}{6}, \qquad \alpha = y - \beta = \frac{x + 4y}{6}$$</div>
    <div class="fx center">$$[(x,y)]_B = \frac{1}{6}\begin{pmatrix} x + 4y \\ 2y - x \end{pmatrix}$$</div>
    <p>Controles: para $Q = (-8,-1)$ da $\tfrac16(-8-4,\; -2+8) = (-2, 1)$ ✓; para $S = (-2,2)$ da $\tfrac16(-2+8,\; 4+2) = (1,1)$ ✓</p>

    <h3>El gráfico</h3>
    <p>Hay que dibujar <strong>dos</strong> sistemas de ejes ([[u5-grafico]]):</p>
    <ol class="pasos">
      <li><span class="ptit">Sistema canónico.</span> Se marcan $Q = (-8,-1)$ y $S = (-2,2)$ con la cuadrícula habitual.</li>
      <li><span class="ptit">Sistema oblicuo de $B$.</span> Se dibujan $v_1 = (2,1)$ y $v_2 = (-4,1)$ desde el origen como <em>nuevos ejes</em>. Por el extremo de cada punto se traza una paralela a cada uno de los dos vectores; donde esas paralelas cortan a los ejes nuevos se leen los múltiplos de $v_1$ y $v_2$, y <strong>esos múltiplos son las coordenadas</strong>.</li>
    </ol>
    <p>Para $Q$ hay que recorrer $-2$ veces $v_1$ (o sea 2 veces en sentido opuesto) y $+1$ vez $v_2$. Para $S$, una vez cada uno — el paralelogramo de lados $v_1$ y $v_2$ tiene su diagonal justo en $S$, lo que se ve a ojo: $(2,1) + (-4,1) = (-2,2)$.</p>
    <div class="note tip"><b class="lbl">Qué muestra el dibujo</b>
    Que los puntos <strong>no se mueven</strong>: lo que cambia es la cuadrícula con la que se los mide. $Q$ sigue estando donde está; lo que cambia es que en el sistema canónico se describe con $(-8,-1)$ y en el de $B$ con $(-2,1)$. Es la idea que después explica por qué una [[u6-matriz-asociada|matriz de transformación]] cambia al cambiar de base aunque la transformación sea la misma.</div>
    <div class="note warn"><b class="lbl">No confundir el vector con sus coordenadas</b> $[Q]_B = (-2,1)$ <em>no</em> significa que $Q$ sea el punto $(-2,1)$ del plano. Son dos listas de números que describen el mismo punto con cuadrículas distintas. Ver la advertencia en [[u5-coordenadas]].</div>`,
    resultado: tex`$[Q]_B = \binom{-2}{1}$ y $[S]_B = \binom{1}{1}$. Fórmula general: $[(x,y)]_B = \frac16\binom{x+4y}{2y-x}$.` },

  /* ========================= 2 ========================= */
  { id: 'tp5-2', num: '2',
    enunciado: tex`<p>Sea $B = \{v_1, v_2, \dots, v_n\}$ una base cualquiera del espacio vectorial $V$.</p>
    <div class="note tip"><b class="lbl">Los dos ítems se responden con el mismo teorema</b> La clave en ambos es el [[u4-teorema-21|Teorema 21]]: en una base, la escritura de cada vector es <strong>única</strong>. Así que basta <em>exhibir</em> una escritura y la unicidad garantiza que no hay otra. No hace falta resolver ningún sistema.</div>`,
    incisos: [

      { id: 'tp5-2a', rot: 'a', enunciado: tex`¿Cuáles son las coordenadas del vector nulo de $V$ respecto de la base $B$? Justificar.`,
        conceptos: ['u5-coordenadas-casos', 'u4-teorema-21'],
        resolucion: tex`<p>Las coordenadas del vector nulo son <strong>todas cero</strong>, en cualquier base:</p>
        <div class="fx center">$$[\vec 0]_B = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}$$</div>
        <h3>Justificación</h3>
        <p>Por el [[u4-teorema-2|Teorema 2]], $0 \cdot v = \vec 0$ para todo $v \in V$. Entonces</p>
        <div class="fx center">$$\vec 0 = 0\,v_1 + 0\,v_2 + \dots + 0\,v_n$$</div>
        <p>es una escritura válida de $\vec 0$ como combinación lineal de $B$, con todos los escalares nulos.</p>
        <p>Y por el [[u4-teorema-21|Teorema 21]], al ser $B$ una base esa escritura es <strong>la única</strong>. Luego los escalares $0, 0, \dots, 0$ son <em>las</em> coordenadas, y no hay otra posibilidad. $\blacksquare$</p>
        <div class="note"><b class="lbl">Por qué hace falta la unicidad</b>
        Sin ella, el argumento estaría incompleto: habríamos mostrado <em>una</em> forma de escribir $\vec 0$, pero podría haber otras. De hecho, si $B$ fuera L.D. habría infinitas (esa es justamente la definición de [[u4-li-ld|dependencia lineal]]: el nulo escrito de forma no trivial), y «las coordenadas del nulo» no estaría bien definido. La independencia lineal de la base es lo que hace que la respuesta sea única.</div>`,
        resultado: tex`$[\vec 0]_B = (0, 0, \dots, 0)^t$ en cualquier base. Justificación: $\vec 0 = 0v_1 + \dots + 0v_n$ es una escritura válida, y por el Teorema 21 es la única.` },

      { id: 'tp5-2b', rot: 'b', enunciado: tex`¿Cuáles son las coordenadas del vector $v_i$, con $i = 1, 2, \dots, n$, respecto de la base $B$? Justificar.`,
        conceptos: ['u5-coordenadas-casos', 'u4-teorema-21'],
        resolucion: tex`<p>Las coordenadas de $v_i$ son el <strong>$i$-ésimo vector canónico</strong>: un $1$ en el lugar $i$ y ceros en el resto.</p>
        <div class="fx center">$$[v_i]_B = e_i = \begin{pmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix} \;\leftarrow \text{lugar } i$$</div>
        <h3>Justificación</h3>
        <p>El propio $v_i$ se escribe como combinación lineal de $B$ así:</p>
        <div class="fx center">$$v_i = 0\,v_1 + \dots + 0\,v_{i-1} + 1\cdot v_i + 0\,v_{i+1} + \dots + 0\,v_n$$</div>
        <p>usando $1 \cdot v_i = v_i$ (axioma x de la [[u4-espacio-vectorial|Definición 1]]) y $0 \cdot v_j = \vec 0$ para los demás. Por el [[u4-teorema-21|Teorema 21]] esa escritura es única, así que esas son <em>las</em> coordenadas. $\blacksquare$</p>
        <div class="note tip"><b class="lbl">La consecuencia importante</b>
        <strong>Toda base, vista en sus propias coordenadas, «se vuelve» la canónica.</strong> Y de ahí sale directamente que
        $$[\;]_{BB} = I_n$$
        porque las columnas de $[\;]_{BB}$ son exactamente los $[v_i]_B = e_i$, que son las columnas de la identidad ([[u5-matriz-cambio]]).</div>
        <div class="note"><b class="lbl">Dónde se usa en este práctico</b>
        En los ejercicios 3.a y 5.a se piden las coordenadas de un vector que <em>resulta ser</em> uno de los vectores de la base. Reconocerlo ahorra resolver el sistema entero: la respuesta se escribe directamente. Conviene mirar siempre los datos antes de calcular.</div>`,
        resultado: tex`$[v_i]_B = e_i$ (un 1 en el lugar $i$, ceros en el resto). Consecuencia: $[\;]_{BB} = I_n$.` }
    ]},

  /* ========================= 3 ========================= */
  { id: 'tp5-3', num: '3',
    enunciado: tex`<p>Sea $B = \{(3,1,2); (-1,0,2); (4,1,1)\}$ una base de $\mathbb{R}^3$.</p>
    <div class="note tip"><b class="lbl">Estrategia para los tres incisos</b> Conviene hacer el inciso <strong>b)</strong> primero —la fórmula genérica— y después leer a) y c) de ahí. Calcular tres sistemas por separado es hacer tres veces el mismo trabajo.</div>`,
    incisos: [

      { id: 'tp5-3a', rot: 'a', enunciado: tex`Encontrar $[(1,1,1)]_B$ y $[(-1,0,2)]_B$.`,
        conceptos: ['u5-calcular-coordenadas', 'u5-coordenadas-casos'],
        pista: tex`Mirá bien el segundo vector antes de armar el sistema: ¿no te suena de algún lado?`,
        resolucion: tex`<h3>$[(-1,0,2)]_B$ — sin hacer ninguna cuenta</h3>
        <p>$(-1,0,2)$ es <strong>el segundo vector de la base $B$</strong>. Por el inciso 2.b ([[u5-coordenadas-casos]]):</p>
        <div class="fx center">$$[(-1,0,2)]_B = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$</div>
        <p>Resolver el sistema daría lo mismo, pero es trabajo perdido.</p>

        <h3>$[(1,1,1)]_B$</h3>
        <p>Se plantea $\alpha(3,1,2) + \beta(-1,0,2) + \gamma(4,1,1) = (1,1,1)$:</p>
        <div class="fx center">$$\begin{cases} (1)\;\; 3\alpha - \beta + 4\gamma = 1 \\ (2)\;\; \alpha \phantom{{}- \beta} + \gamma = 1 \\ (3)\;\; 2\alpha + 2\beta + \gamma = 1 \end{cases}$$</div>
        <p>Conviene empezar por la (2), que tiene sólo dos incógnitas: $\;\alpha = 1 - \gamma$.</p>
        <p>En (1): $\;3(1-\gamma) - \beta + 4\gamma = 1 \Rightarrow 3 + \gamma - \beta = 1 \Rightarrow \beta = \gamma + 2$.</p>
        <p>En (3): $\;2(1-\gamma) + 2(\gamma+2) + \gamma = 1 \Rightarrow 2 - 2\gamma + 2\gamma + 4 + \gamma = 1 \Rightarrow 6 + \gamma = 1$</p>
        <div class="fx center">$$\gamma = -5, \qquad \alpha = 1 - (-5) = 6, \qquad \beta = -5 + 2 = -3$$</div>
        <div class="fx center">$$[(1,1,1)]_B = \begin{pmatrix} 6 \\ -3 \\ -5 \end{pmatrix}$$</div>
        <p><strong>Verificación.</strong></p>
        <div class="fx center">$$6(3,1,2) - 3(-1,0,2) - 5(4,1,1) = (18,6,12) + (3,0,-6) + (-20,-5,-5) = (1,1,1) \;✓$$</div>
        <div class="note"><b class="lbl">Coordenadas grandes para un vector chico</b> $(1,1,1)$ es un vector modesto y sus coordenadas en $B$ son $6, -3, -5$. No hay error: cuando los vectores de la base «apuntan» en direcciones parecidas, hacen falta coeficientes grandes que se cancelen entre sí para llegar a un vector pequeño.</div>`,
        resultado: tex`$[(1,1,1)]_B = (6,\, -3,\, -5)^t$ y $[(-1,0,2)]_B = (0,\, 1,\, 0)^t$ — el segundo sale directo por ser el 2.º vector de $B$.` },

      { id: 'tp5-3b', rot: 'b', enunciado: tex`Hallar $[(x,y,z)]_B$ para un vector cualquiera $(x,y,z) \in \mathbb{R}^3$.`,
        conceptos: ['u5-calcular-coordenadas'],
        pista: tex`Es el mismo sistema de a) pero con $x,y,z$ en el miembro derecho. Resolvelo tratándolos como constantes.`,
        resolucion: tex`<p>Mismo sistema, con el miembro derecho genérico:</p>
        <div class="fx center">$$\begin{cases} (1)\;\; 3\alpha - \beta + 4\gamma = x \\ (2)\;\; \alpha + \gamma = y \\ (3)\;\; 2\alpha + 2\beta + \gamma = z \end{cases}$$</div>
        <ol class="pasos">
          <li><span class="ptit">De (2):</span> $\;\alpha = y - \gamma$.</li>
          <li><span class="ptit">En (1):</span> $\;3(y-\gamma) - \beta + 4\gamma = x \Rightarrow 3y + \gamma - \beta = x \Rightarrow \beta = 3y + \gamma - x$.</li>
          <li><span class="ptit">En (3):</span>
            $$2(y-\gamma) + 2(3y + \gamma - x) + \gamma = z$$
            $$2y - 2\gamma + 6y + 2\gamma - 2x + \gamma = z \;\Longrightarrow\; -2x + 8y + \gamma = z$$
            $$\gamma = 2x - 8y + z$$</li>
          <li><span class="ptit">Volver atrás:</span>
            $$\alpha = y - \gamma = y - 2x + 8y - z = -2x + 9y - z$$
            $$\beta = 3y + \gamma - x = 3y + 2x - 8y + z - x = x - 5y + z$$</li>
        </ol>
        <div class="fx center">$$[(x,y,z)]_B = \begin{pmatrix} -2x + 9y - z \\ x - 5y + z \\ 2x - 8y + z \end{pmatrix}$$</div>
        <h3>Verificaciones con los datos de a)</h3>
        <p>Para $(1,1,1)$: $\;\alpha = -2+9-1 = 6$, $\;\beta = 1-5+1 = -3$, $\;\gamma = 2-8+1 = -5$ ✓</p>
        <p>Para $(-1,0,2)$: $\;\alpha = 2+0-2 = 0$, $\;\beta = -1-0+2 = 1$, $\;\gamma = -2-0+2 = 0$ ✓</p>
        <p>Las dos coinciden con el inciso a), lo que valida la fórmula.</p>
        <div class="note tip"><b class="lbl">Qué es esta fórmula, en realidad</b>
        Es exactamente la matriz $[\;]_{CB}$ del inciso c) aplicada a $(x,y,z)$. Las tres expresiones lineales son las tres filas de esa matriz. Por eso b) y c) son el mismo cálculo escrito de dos maneras — y por eso conviene hacer b) primero.</div>`,
        resultado: tex`$[(x,y,z)]_B = \begin{pmatrix} -2x+9y-z \\ x-5y+z \\ 2x-8y+z\end{pmatrix}$` },

      { id: 'tp5-3c', rot: 'c', enunciado: tex`Hallar la matriz de cambio de $C$ a $B$.`,
        conceptos: ['u5-matriz-cambio', 'u5-inversa', 'u5-via-canonica'],
        pista: tex`Se pide $[\;]_{CB}$: sus columnas son los canónicos escritos en $B$. Con la fórmula de b) salen de reemplazar.`,
        resolucion: tex`<p>Por la definición ([[u5-matriz-cambio]]), las columnas de $[\;]_{CB}$ son $[e_1]_B$, $[e_2]_B$, $[e_3]_B$. Se obtienen reemplazando en la fórmula del inciso b):</p>
        <div class="tbl"><table>
          <thead><tr><th>Canónico</th><th>$\alpha = -2x+9y-z$</th><th>$\beta = x-5y+z$</th><th>$\gamma = 2x-8y+z$</th></tr></thead>
          <tbody>
            <tr><td>$e_1 = (1,0,0)$</td><td>$-2$</td><td>$1$</td><td>$2$</td></tr>
            <tr><td>$e_2 = (0,1,0)$</td><td>$9$</td><td>$-5$</td><td>$-8$</td></tr>
            <tr><td>$e_3 = (0,0,1)$</td><td>$-1$</td><td>$1$</td><td>$1$</td></tr>
          </tbody>
        </table></div>
        <p>Cada fila de la tabla es una <strong>columna</strong> de la matriz:</p>
        <div class="fx center">$$[\;]_{CB} = \begin{pmatrix} -2 & 9 & -1 \\ 1 & -5 & 1 \\ 2 & -8 & 1 \end{pmatrix}$$</div>

        <h3>Verificación: debe ser la inversa de $[\;]_{BC}$</h3>
        <p>$[\;]_{BC}$ se escribe <strong>sin hacer cuentas</strong>, poniendo los vectores de $B$ como columnas:</p>
        <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} 3 & -1 & 4 \\ 1 & 0 & 1 \\ 2 & 2 & 1 \end{pmatrix}$$</div>
        <p>Por [[u5-inversa]] debe valer $[\;]_{CB} \cdot [\;]_{BC} = I_3$. Multiplicando:</p>
        <div class="fx center">$$\begin{pmatrix} -2 & 9 & -1 \\ 1 & -5 & 1 \\ 2 & -8 & 1 \end{pmatrix}
        \begin{pmatrix} 3 & -1 & 4 \\ 1 & 0 & 1 \\ 2 & 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \;✓$$</div>
        <p>Entrada por entrada, la primera fila: $\;(-6+9-2,\; 2+0-2,\; -8+9-1) = (1,0,0)$ ✓. Las otras dos salen igual.</p>
        <div class="note tip"><b class="lbl">El camino alternativo (y por qué no conviene acá)</b>
        Se podría haber calculado $[\;]_{CB}$ invirtiendo $[\;]_{BC}$ con la matriz adjunta. Es correcto, pero más laborioso. Como el inciso b) ya pedía la fórmula genérica, leer las columnas de ahí es gratis.
        <p>Dato de control: $\det [\;]_{BC} = 1$ (desarrollando por la segunda fila: $-1(-1-8) - 1(6+2) = 9-8 = 1$). Que el determinante valga $\pm 1$ explica por qué $[\;]_{CB}$ salió con <strong>entradas enteras</strong>: la inversa de una matriz entera es entera exactamente cuando su determinante es $\pm 1$.</p></div>
        <div class="note warn"><b class="lbl">No confundir las dos</b> $[\;]_{BC}$ tiene los vectores de $B$ como columnas; $[\;]_{CB}$ es su inversa. La que se pide acá es la <em>segunda</em>, la que convierte coordenadas canónicas en coordenadas de $B$: $[x]_B = [\;]_{CB}\,[x]_C$.</div>`,
        resultado: tex`$[\;]_{CB} = \begin{pmatrix} -2 & 9 & -1 \\ 1 & -5 & 1 \\ 2 & -8 & 1\end{pmatrix}$, que es la inversa de $[\;]_{BC} = \begin{pmatrix} 3 & -1 & 4 \\ 1 & 0 & 1 \\ 2 & 2 & 1\end{pmatrix}$.` }
    ]},

  /* ========================= 4 ========================= */
  { id: 'tp5-4', num: '4',
    enunciado: tex`<p>Sea $B = \{v_1, v_2\}$ una base de $\mathbb{R}^2$. Hallar $B$, sabiendo que
    $[(-1,1)]_B = \begin{pmatrix} 3 \\ 5 \end{pmatrix}$ y $[(1,1)]_B = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.</p>`,
    conceptos: ['u5-recuperar-base', 'u5-coordenadas'],
    pista: tex`Cada dato de coordenadas <em>es</em> una ecuación vectorial. Escribilas y resolvé el sistema tratando a $v_1$ y $v_2$ como incógnitas (vectoriales).`,
    resolucion: tex`<p>Este ejercicio es la definición de coordenadas leída <strong>al revés</strong> ([[u5-recuperar-base]]): se conocen las coordenadas y se busca la base.</p>
    <h3>Traducir los datos a ecuaciones vectoriales</h3>
    <p>$[(-1,1)]_B = \binom{3}{5}$ significa, por definición de [[u5-coordenadas]], que $(-1,1) = 3v_1 + 5v_2$. Análogamente el otro dato:</p>
    <div class="fx center">$$\text{(I)} \quad 3\,v_1 + 5\,v_2 = (-1,\, 1)$$</div>
    <div class="fx center">$$\text{(II)} \quad 2\,v_1 + 3\,v_2 = (1,\, 1)$$</div>
    <p>Es un sistema lineal de dos ecuaciones con dos incógnitas, sólo que las incógnitas son <strong>vectores</strong>. Se resuelve igual.</p>
    <h3>Eliminar $v_2$</h3>
    <p>Multiplicando (I) por $3$ y (II) por $5$ para igualar los coeficientes de $v_2$:</p>
    <div class="fx center">$$3 \cdot \text{(I)}: \quad 9v_1 + 15v_2 = (-3,\, 3)$$</div>
    <div class="fx center">$$5 \cdot \text{(II)}: \quad 10v_1 + 15v_2 = (5,\, 5)$$</div>
    <p>Restando la primera de la segunda:</p>
    <div class="fx center">$$v_1 = (5,5) - (-3,3) = (8,\, 2)$$</div>
    <h3>Despejar $v_2$</h3>
    <p>De (II): $\;3v_2 = (1,1) - 2(8,2) = (1,1) - (16,4) = (-15,-3)$, luego</p>
    <div class="fx center">$$v_2 = (-5,\, -1)$$</div>
    <div class="fx center">$$B = \{(8,2),\; (-5,-1)\}$$</div>

    <h3>Verificaciones</h3>
    <p><strong>(I):</strong> $\;3(8,2) + 5(-5,-1) = (24,6) + (-25,-5) = (-1,1)$ ✓</p>
    <p><strong>(II):</strong> $\;2(8,2) + 3(-5,-1) = (16,4) + (-15,-3) = (1,1)$ ✓</p>
    <p><strong>¿Es base?</strong> Hay que comprobarlo, porque el enunciado lo afirma pero el resultado debe ser consistente:</p>
    <div class="fx center">$$\det \begin{pmatrix} 8 & -5 \\ 2 & -1 \end{pmatrix} = -8 + 10 = 2 \neq 0 \;✓$$</div>
    <p>Son L.I., y dos vectores L.I. en $\mathbb{R}^2$ forman base ([[u4-teorema-26]]).</p>

    <h3>El mismo cálculo en forma matricial</h3>
    <p>Para quien prefiera matrices: la relación $[x]_C = [\;]_{BC}\,[x]_B$ aplicada a los dos datos a la vez se escribe</p>
    <div class="fx center">$$[\;]_{BC} \cdot \begin{pmatrix} 3 & 2 \\ 5 & 3 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 1 & 1 \end{pmatrix}$$</div>
    <p>donde cada columna es un dato. Entonces, invirtiendo (el determinante de la matriz de coordenadas es $9-10 = -1$):</p>
    <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} -1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 3 & 2 \\ 5 & 3 \end{pmatrix}^{-1}
    = \begin{pmatrix} -1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} -3 & 2 \\ 5 & -3 \end{pmatrix} = \begin{pmatrix} 8 & -5 \\ 2 & -1 \end{pmatrix}$$</div>
    <p>y las columnas de $[\;]_{BC}$ <strong>son</strong> los vectores de $B$: $(8,2)$ y $(-5,-1)$ ✓ El mismo resultado.</p>
    <div class="note tip"><b class="lbl">Por qué la solución es única</b>
    La matriz de coordenadas $\binom{3\;\;2}{5\;\;3}$ tiene determinante $-1 \neq 0$, así que el sistema (I)-(II) es compatible determinado y hay <strong>una sola</strong> base posible. Si los dos vectores de coordenadas dados hubieran sido proporcionales, el sistema sería indeterminado o incompatible y el ejercicio no tendría solución única.</div>`,
    resultado: tex`$B = \{(8,2),\; (-5,-1)\}$. Verificación: $3(8,2)+5(-5,-1) = (-1,1)$ y $2(8,2)+3(-5,-1) = (1,1)$, con $\det = 2 \neq 0$.` },

  /* ========================= 5 ========================= */
  { id: 'tp5-5', num: '5',
    enunciado: tex`<p>Sea $S = \{P(x) = a_3x^3 + a_2x^2 + a_1x + a_0 \in P_3 \;/\; a_3 = a_2 - a_0 \;\wedge\; a_1 = 0\}$ un subespacio vectorial de $P_3$ y $B = \{-x^3 + 1;\; x^3 + x^2\}$ es base de $S$.</p>
    <div class="note tip"><b class="lbl">Primero, entender $S$</b>
    Las condiciones son $a_3 = a_2 - a_0$ y $a_1 = 0$: quedan <strong>dos</strong> parámetros libres ($a_2$ y $a_0$), así que $\dim S = 2$ — coherente con que $B$ tenga dos elementos.
    <p>El elemento genérico es $\;P(x) = (a_2 - a_0)x^3 + a_2 x^2 + 0x + a_0$.</p>
    <p>Control de que $B \subset S$: para $-x^3+1$ es $a_3=-1$, $a_2=0$, $a_1=0$, $a_0=1$, y $a_2 - a_0 = -1 = a_3$ ✓. Para $x^3+x^2$ es $a_3=1$, $a_2=1$, $a_0=0$, y $1 - 0 = 1$ ✓.</p></div>`,
    incisos: [

      { id: 'tp5-5a', rot: 'a', enunciado: tex`Hallar $[x^3 + x^2]_B$ y $[2x^3 + 3x^2 + 1]_B$.`,
        conceptos: ['u5-calcular-coordenadas', 'u5-coordenadas-casos'],
        pista: tex`Uno de los dos polinomios es un elemento de $B$. Y antes de calcular el otro, verificá que pertenezca a $S$.`,
        resolucion: tex`<h3>$[x^3 + x^2]_B$ — directo</h3>
        <p>$x^3 + x^2$ es <strong>el segundo vector de $B$</strong>, así que por el ejercicio 2.b ([[u5-coordenadas-casos]]):</p>
        <div class="fx center">$$[x^3+x^2]_B = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$</div>

        <h3>$[2x^3 + 3x^2 + 1]_B$</h3>
        <p><strong>Paso 0 — ¿pertenece a $S$?</strong> Sus coeficientes son $a_3=2$, $a_2=3$, $a_1=0$, $a_0=1$. Entonces $a_2 - a_0 = 3 - 1 = 2 = a_3$ ✓ y $a_1 = 0$ ✓. Sí pertenece, así que tiene coordenadas en $B$.</p>
        <p><strong>Paso 1 — el sistema.</strong> Se plantea $\alpha(-x^3+1) + \beta(x^3+x^2) = 2x^3 + 3x^2 + 1$ e se igualan coeficientes:</p>
        <div class="tbl"><table>
          <thead><tr><th>Potencia</th><th>Ecuación</th></tr></thead>
          <tbody>
            <tr><td>$x^3$</td><td>$-\alpha + \beta = 2$</td></tr>
            <tr><td>$x^2$</td><td>$\beta = 3$</td></tr>
            <tr><td>$x^1$</td><td>$0 = 0$ (se cumple siempre)</td></tr>
            <tr><td>$x^0$</td><td>$\alpha = 1$</td></tr>
          </tbody>
        </table></div>
        <p>Las ecuaciones de $x^2$ y $x^0$ dan los valores directamente: $\beta = 3$ y $\alpha = 1$. Y la de $x^3$ queda como <strong>control</strong>: $\;-1 + 3 = 2$ ✓</p>
        <div class="fx center">$$[2x^3+3x^2+1]_B = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$$</div>
        <p><strong>Verificación directa:</strong> $\;1(-x^3+1) + 3(x^3+x^2) = -x^3 + 1 + 3x^3 + 3x^2 = 2x^3 + 3x^2 + 1$ ✓</p>
        <div class="note"><b class="lbl">Cuatro ecuaciones, dos incógnitas</b>
        El sistema tiene <strong>cuatro</strong> ecuaciones (una por coeficiente de $P_3$) y sólo <strong>dos</strong> incógnitas. Que sea compatible no es automático: lo garantiza el hecho de que el polinomio pertenezca a $S$, que es el paso 0. Si no perteneciera, el sistema sería incompatible — y eso es precisamente lo que pasaría con, por ejemplo, $x^3 + x$ (tiene $a_1 \neq 0$).</div>`,
        resultado: tex`$[x^3+x^2]_B = \binom{0}{1}$ (es el 2.º vector de $B$) y $[2x^3+3x^2+1]_B = \binom{1}{3}$.` },

      { id: 'tp5-5b', rot: 'b', enunciado: tex`Sabiendo que $[Q(x)]_B = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$, hallar $Q(x)$.`,
        conceptos: ['u5-coordenadas'],
        pista: tex`Acá no hay sistema: las coordenadas son los coeficientes de la combinación lineal. Es sólo reconstruir.`,
        resolucion: tex`<p>Las coordenadas <strong>son</strong> los escalares de la combinación lineal, así que reconstruir el vector es una cuenta directa:</p>
        <div class="fx center">$$Q(x) = -1\,(-x^3+1) + 2\,(x^3+x^2)$$</div>
        <div class="fx center">$$= x^3 - 1 + 2x^3 + 2x^2 = 3x^3 + 2x^2 - 1$$</div>
        <div class="fx center">$$Q(x) = 3x^3 + 2x^2 - 1$$</div>
        <h3>Verificación: ¿pertenece a $S$?</h3>
        <p>Tiene que pertenecer, porque es combinación lineal de elementos de $S$ y $S$ es subespacio. Se controla igual:</p>
        <p>$a_3 = 3$, $a_2 = 2$, $a_1 = 0$, $a_0 = -1$. Entonces $a_2 - a_0 = 2 - (-1) = 3 = a_3$ ✓ y $a_1 = 0$ ✓</p>
        <div class="note tip"><b class="lbl">Las dos direcciones del cálculo</b>
        <strong>De vector a coordenadas</strong> (inciso a): hay que <em>resolver un sistema</em>.
        <strong>De coordenadas a vector</strong> (este inciso): basta <em>combinar</em>, sin resolver nada.
        <p>La segunda dirección es siempre la fácil, y conviene aprovecharla: cuando un ejercicio pide «hallar el vector», es una cuenta de dos líneas.</p></div>`,
        resultado: tex`$Q(x) = 3x^3 + 2x^2 - 1$` },

      { id: 'tp5-5c', rot: 'c', enunciado: tex`Hallar $[Q(x)]_C$.`,
        conceptos: ['u5-coordenadas', 'u4-base'],
        pista: tex`$C$ es la base canónica de $P_3$. Las coordenadas canónicas de un polinomio son… sus propios coeficientes.`,
        resolucion: tex`<p>$C$ es la base canónica de $P_3$, que tiene <strong>cuatro</strong> elementos:</p>
        <div class="fx center">$$C = \{1,\; x,\; x^2,\; x^3\}$$</div>
        <p>En esa base, las coordenadas de un polinomio son simplemente sus <strong>coeficientes</strong>, en el orden de la base. Con $Q(x) = 3x^3 + 2x^2 + 0x - 1$:</p>
        <div class="fx center">$$[Q(x)]_C = \begin{pmatrix} -1 \\ 0 \\ 2 \\ 3 \end{pmatrix} \begin{matrix} \leftarrow 1 \\ \leftarrow x \\ \leftarrow x^2 \\ \leftarrow x^3 \end{matrix}$$</div>
        <div class="note warn"><b class="lbl">Dos cosas a cuidar</b>
        <strong>(1) El orden de la base.</strong> Si se toma $C = \{x^3, x^2, x, 1\}$ —que algunos textos usan— las coordenadas quedan $(3, 2, 0, -1)^t$. Ninguna es «más correcta»: hay que <em>declarar</em> qué orden se usa, porque una base es un conjunto <strong>ordenado</strong> ([[u4-base]]).
        <p><strong>(2) No olvidar el cero.</strong> El coeficiente de $x$ es $0$ y ocupa un lugar en el vector de coordenadas. Escribir $(-1,2,3)^t$ con tres entradas sería un error de dimensión.</p></div>
        <div class="note tip"><b class="lbl">Por qué pasa de 2 a 4 coordenadas</b>
        $[Q]_B$ tiene <strong>2</strong> entradas y $[Q]_C$ tiene <strong>4</strong>. No es contradictorio: la cantidad de coordenadas es la dimensión del <em>espacio en el que se está trabajando</em>. En $B$ se mira a $Q$ como elemento de $S$ ($\dim S = 2$); en $C$, como elemento de $P_3$ ($\dim P_3 = 4$).
        <p>Y por eso <strong>no existe</strong> una «matriz de cambio de $B$ a $C$» cuadrada acá: sería de $4 \times 2$, y las matrices de cambio de base son cuadradas e inversibles ([[u5-inversa]]). El cambio entre bases de espacios de dimensiones distintas no es un cambio de base.</p></div>`,
        resultado: tex`Con $C = \{1,x,x^2,x^3\}$: $\;[Q(x)]_C = (-1,\, 0,\, 2,\, 3)^t$. (Con el orden $\{x^3,x^2,x,1\}$ sería $(3,2,0,-1)^t$.)` }
    ]},

  /* ========================= 6 ========================= */
  { id: 'tp5-6', num: '6',
    enunciado: tex`<p>Sea $D = \{x^2 + x - 1,\; -x^2 + 2,\; x - 1\}$ base del espacio vectorial $P_2(\mathbb{R})$.
    Sabiendo que $[P(x)]_D = \begin{pmatrix} -1 \\ -1 \\ 2 \end{pmatrix}$, hallar $[P(x)]_C$ y $P(x)$.</p>`,
    conceptos: ['u5-coordenadas', 'u5-matriz-cambio', 'u4-base'],
    pista: tex`Reconstruí $P(x)$ combinando los tres polinomios de $D$ con los coeficientes dados. Después las coordenadas canónicas se leen solas.`,
    resolucion: tex`<p>Es la dirección fácil del cálculo: de coordenadas a vector basta combinar.</p>
    <h3>Reconstruir $P(x)$</h3>
    <div class="fx center">$$P(x) = -1\,(x^2+x-1) \;+\; (-1)\,(-x^2+2) \;+\; 2\,(x-1)$$</div>
    <p>Desarrollando término por término:</p>
    <div class="fx center">$$\begin{aligned}
    -1\,(x^2+x-1) &= -x^2 - x + 1 \\
    -1\,(-x^2+2) &= \phantom{-}x^2 \phantom{{}- x} - 2 \\
    2\,(x-1) &= \phantom{-x^2} + 2x - 2
    \end{aligned}$$</div>
    <p>Y sumando por potencias:</p>
    <div class="tbl"><table>
      <thead><tr><th>Potencia</th><th>Suma</th><th>Resultado</th></tr></thead>
      <tbody>
        <tr><td>$x^2$</td><td>$-1 + 1 + 0$</td><td>$0$</td></tr>
        <tr><td>$x^1$</td><td>$-1 + 0 + 2$</td><td>$1$</td></tr>
        <tr><td>$x^0$</td><td>$1 - 2 - 2$</td><td>$-3$</td></tr>
      </tbody>
    </table></div>
    <div class="fx center">$$P(x) = x - 3$$</div>
    <div class="note"><b class="lbl">El término en $x^2$ se cancela</b> No es un error: $P(x)$ resulta de grado 1 aunque los tres generadores tengan grado 2 o 1. $P_2$ contiene los polinomios de grado <strong>menor o igual</strong> que 2, así que $x-3$ es un elemento perfectamente válido.</div>

    <h3>Coordenadas canónicas</h3>
    <p>Con $C = \{1,\, x,\, x^2\}$, las coordenadas son los coeficientes de $P(x) = -3 + 1\cdot x + 0\cdot x^2$:</p>
    <div class="fx center">$$[P(x)]_C = \begin{pmatrix} -3 \\ 1 \\ 0 \end{pmatrix}$$</div>

    <h3>Verificación por el camino matricial</h3>
    <p>El mismo resultado se obtiene con la matriz de cambio $[\;]_{DC}$, cuyas columnas son los vectores de $D$ en coordenadas canónicas ([[u5-matriz-cambio]]):</p>
    <div class="fx center">$$[\;]_{DC} = \begin{pmatrix} -1 & 2 & -1 \\ 1 & 0 & 1 \\ 1 & -1 & 0 \end{pmatrix}
    \begin{matrix} \leftarrow 1 \\ \leftarrow x \\ \leftarrow x^2 \end{matrix}$$</div>
    <p>Entonces, por el [[u5-teorema-cambio|teorema del cambio de base]]:</p>
    <div class="fx center">$$[P]_C = [\;]_{DC}\,[P]_D = \begin{pmatrix} -1 & 2 & -1 \\ 1 & 0 & 1 \\ 1 & -1 & 0 \end{pmatrix}\begin{pmatrix} -1 \\ -1 \\ 2 \end{pmatrix}
    = \begin{pmatrix} 1 - 2 - 2 \\ -1 + 0 + 2 \\ -1 + 1 + 0 \end{pmatrix} = \begin{pmatrix} -3 \\ 1 \\ 0 \end{pmatrix} \;✓$$</div>
    <p>Coincide con el cálculo directo.</p>
    <div class="note tip"><b class="lbl">Control de que $D$ es base</b>
    El enunciado lo afirma, pero conviene saber verificarlo. En coordenadas canónicas los tres polinomios son $(-1,1,1)$, $(2,0,-1)$ y $(-1,1,0)$, y
    $$\det \begin{pmatrix} -1 & 1 & 1 \\ 2 & 0 & -1 \\ -1 & 1 & 0 \end{pmatrix} = -1(0+1) - 1(0-1) + 1(2-0) = -1 + 1 + 2 = 2 \neq 0$$
    Son L.I., y tres vectores L.I. en un espacio de dimensión 3 forman base ([[u4-teorema-26]]) ✓</div>`,
    resultado: tex`$P(x) = x - 3$, y con $C = \{1,x,x^2\}$ resulta $[P(x)]_C = (-3,\, 1,\, 0)^t$.` },
  /* ========================= 7 ========================= */
  { id: 'tp5-7', num: '7',
    enunciado: tex`<p>Sean $B = \{(1,2,3); (1,-1,0); (3,0,0)\}$ y $B'$ bases de $\mathbb{R}^3$ y $M$ la matriz de cambio de $B$ a $B'$,
    $M = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \\ 1 & 2 & 3 \end{pmatrix}$. Hallar $B'$.</p>`,
    conceptos: ['u5-recuperar-base', 'u5-matriz-cambio', 'u5-inversa'],
    pista: tex`$M = [\;]_{BB'}$, así que su columna $j$ es el $j$-ésimo vector de $B$ <em>escrito en la base $B'$</em>. Eso da tres ecuaciones vectoriales con $w_1, w_2, w_3$ como incógnitas. Mirá la tercera columna primero: tiene dos ceros.`,
    resolucion: tex`<p>Sea $B' = \{w_1, w_2, w_3\}$, que es lo que hay que hallar. Por la definición de [[u5-matriz-cambio]], la columna $j$ de $M = [\;]_{BB'}$ es el vector de coordenadas del $j$-ésimo vector de $B$ respecto de $B'$. Leyendo las tres columnas:</p>
    <div class="fx center">$$\begin{aligned}
    \text{(I)} \quad (1,2,3) &= 1\,w_1 + 1\,w_2 + 1\,w_3 \\
    \text{(II)} \quad (1,-1,0) &= 1\,w_1 - 1\,w_2 + 2\,w_3 \\
    \text{(III)} \quad (3,0,0) &= 0\,w_1 + 0\,w_2 + 3\,w_3
    \end{aligned}$$</div>
    <div class="note tip"><b class="lbl">Los coeficientes se leen por columnas, no por filas</b> Es el error más frecuente del ejercicio. La primera columna de $M$ es $(1,1,1)^t$ y son los coeficientes de $w_1, w_2, w_3$ en la escritura del <em>primer</em> vector de $B$.</div>

    <h3>Resolver el sistema</h3>
    <ol class="pasos">
      <li><span class="ptit">De (III), que es la más simple:</span>
        $$3w_3 = (3,0,0) \;\Longrightarrow\; w_3 = (1,\, 0,\, 0)$$</li>
      <li><span class="ptit">Sumando (I) + (II)</span> se cancela $w_2$:
        $$(1,2,3) + (1,-1,0) = 2w_1 + 3w_3$$
        $$(2,1,3) = 2w_1 + 3(1,0,0) = 2w_1 + (3,0,0)$$
        $$2w_1 = (2,1,3) - (3,0,0) = (-1,\, 1,\, 3) \;\Longrightarrow\; w_1 = \left(-\tfrac{1}{2},\; \tfrac{1}{2},\; \tfrac{3}{2}\right)$$</li>
      <li><span class="ptit">Restando (I) − (II)</span> se cancela $w_1$:
        $$(1,2,3) - (1,-1,0) = 2w_2 - w_3$$
        $$(0,3,3) = 2w_2 - (1,0,0) \;\Longrightarrow\; 2w_2 = (1,\, 3,\, 3) \;\Longrightarrow\; w_2 = \left(\tfrac{1}{2},\; \tfrac{3}{2},\; \tfrac{3}{2}\right)$$</li>
    </ol>
    <div class="fx center">$$B' = \left\{ \left(-\tfrac{1}{2},\, \tfrac{1}{2},\, \tfrac{3}{2}\right),\;\; \left(\tfrac{1}{2},\, \tfrac{3}{2},\, \tfrac{3}{2}\right),\;\; (1,\, 0,\, 0) \right\}$$</div>

    <h3>Verificación de las tres ecuaciones</h3>
    <p><strong>(I):</strong> $\;w_1 + w_2 + w_3 = \left(-\tfrac12 + \tfrac12 + 1,\;\; \tfrac12 + \tfrac32 + 0,\;\; \tfrac32 + \tfrac32 + 0\right) = (1,\, 2,\, 3)$ ✓</p>
    <p><strong>(II):</strong> $\;w_1 - w_2 + 2w_3 = \left(-\tfrac12 - \tfrac12 + 2,\;\; \tfrac12 - \tfrac32,\;\; \tfrac32 - \tfrac32\right) = (1,\, -1,\, 0)$ ✓</p>
    <p><strong>(III):</strong> $\;3w_3 = 3(1,0,0) = (3,0,0)$ ✓</p>
    <p><strong>¿Es base?</strong></p>
    <div class="fx center">$$\det \begin{pmatrix} -\tfrac12 & \tfrac12 & 1 \\ \tfrac12 & \tfrac32 & 0 \\ \tfrac32 & \tfrac32 & 0 \end{pmatrix}
    = 1 \cdot \begin{vmatrix} \tfrac12 & \tfrac32 \\ \tfrac32 & \tfrac32 \end{vmatrix} = \tfrac34 - \tfrac94 = -\tfrac32 \neq 0 \;✓$$</div>
    <p>(Desarrollado por la tercera columna, que tiene dos ceros.)</p>

    <h3>El camino matricial, para comparar</h3>
    <p>De $[x]_{B'} = M\,[x]_B$ y $[x]_C = [\;]_{B'C}[x]_{B'}$ sale $[x]_C = [\;]_{B'C}\,M\,[x]_B$, que comparado con $[x]_C = [\;]_{BC}[x]_B$ da</p>
    <div class="fx center">$$[\;]_{BC} = [\;]_{B'C} \cdot M \;\Longrightarrow\; [\;]_{B'C} = [\;]_{BC} \cdot M^{-1}$$</div>
    <p>con $[\;]_{BC}$ escrita sin cuentas (los vectores de $B$ como columnas). Resulta</p>
    <div class="fx center">$$M^{-1} = \begin{pmatrix} \tfrac12 & \tfrac12 & 0 \\ \tfrac12 & -\tfrac12 & 0 \\ -\tfrac12 & \tfrac16 & \tfrac13 \end{pmatrix}, \qquad
    [\;]_{B'C} = \begin{pmatrix} 1 & 1 & 3 \\ 2 & -1 & 0 \\ 3 & 0 & 0 \end{pmatrix} M^{-1}
    = \begin{pmatrix} -\tfrac12 & \tfrac12 & 1 \\ \tfrac12 & \tfrac32 & 0 \\ \tfrac32 & \tfrac32 & 0 \end{pmatrix}$$</div>
    <p>y las <strong>columnas</strong> de $[\;]_{B'C}$ son los vectores de $B'$ ✓ El mismo resultado, con mucha más cuenta: hay que invertir una matriz de $3\times3$.</p>
    <div class="note tip"><b class="lbl">Cuál camino conviene</b>
    El sistema de ecuaciones vectoriales es <strong>mucho más corto</strong> acá, porque $M$ tiene una columna con dos ceros que resuelve $w_3$ de entrada y permite eliminar por suma y resta. El camino matricial siempre funciona, pero exige invertir; conviene mirar la matriz antes de elegir.</div>`,
    resultado: tex`$B' = \left\{\left(-\frac12, \frac12, \frac32\right),\; \left(\frac12, \frac32, \frac32\right),\; (1,0,0)\right\}$, con $\det = -\frac32 \neq 0$.` },

  /* ========================= 8 ========================= */
  { id: 'tp5-8', num: '8',
    enunciado: tex`<p>Sea $B = \{(2,0); (0,-1)\}$ una base de $\mathbb{R}^2$.</p>
    <div class="note tip"><b class="lbl">Un ejercicio «de taller»</b> Los seis incisos recorren todo el circuito del cambio de base con una base muy simple —cada vector apoyado en un eje—, para que las cuentas no tapen las ideas. Es el mejor ítem del práctico para fijar la notación.</div>`,
    incisos: [

      { id: 'tp5-8a', rot: 'a', enunciado: tex`Hallar la matriz de cambio de base de $C$ a $B$.`,
        conceptos: ['u5-matriz-cambio', 'u5-inversa'],
        resolucion: tex`<p>Se pide $[\;]_{CB}$, cuyas columnas son los canónicos escritos en $B$ ([[u5-matriz-cambio]]).</p>
        <p><strong>Columna 1 —</strong> $e_1 = (1,0) = \alpha(2,0) + \beta(0,-1)$:</p>
        <div class="fx center">$$2\alpha = 1 \;\Longrightarrow\; \alpha = \tfrac12; \qquad -\beta = 0 \;\Longrightarrow\; \beta = 0$$</div>
        <p><strong>Columna 2 —</strong> $e_2 = (0,1) = \alpha(2,0) + \beta(0,-1)$:</p>
        <div class="fx center">$$2\alpha = 0 \;\Longrightarrow\; \alpha = 0; \qquad -\beta = 1 \;\Longrightarrow\; \beta = -1$$</div>
        <div class="fx center">$$[\;]_{CB} = \begin{pmatrix} \tfrac12 & 0 \\ 0 & -1 \end{pmatrix}$$</div>
        <div class="note"><b class="lbl">Sale diagonal, y tiene sentido</b> Cada vector de $B$ es múltiplo de un canónico distinto, así que las coordenadas no se mezclan: la primera componente se divide por $2$ y la segunda cambia de signo. Esta base «reescala el eje $x$ al doble y da vuelta el eje $y$».</div>`,
        resultado: tex`$[\;]_{CB} = \begin{pmatrix} \frac12 & 0 \\ 0 & -1\end{pmatrix}$` },

      { id: 'tp5-8b', rot: 'b', enunciado: tex`Siendo $v = (2,3)$, calcular $[v]_B$ usando la matriz hallada en el inciso a).`,
        conceptos: ['u5-teorema-cambio'],
        resolucion: tex`<p>Por el [[u5-teorema-cambio|teorema del cambio de base]], $\;[v]_B = [\;]_{CB}\,[v]_C$, y $[v]_C = \binom{2}{3}$ porque las coordenadas canónicas de un vector de $\mathbb{R}^2$ son sus propias componentes.</p>
        <div class="fx center">$$[v]_B = \begin{pmatrix} \tfrac12 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 2 \\ 3 \end{pmatrix}
        = \begin{pmatrix} \tfrac12 \cdot 2 + 0 \cdot 3 \\ 0 \cdot 2 + (-1)\cdot 3 \end{pmatrix} = \begin{pmatrix} 1 \\ -3 \end{pmatrix}$$</div>
        <div class="note tip"><b class="lbl">Control de subíndices</b> $[\;]_{C\boxed{B}} \cdot [v]_{\boxed{C}}$: el subíndice de entrada ($C$) coincide con el de la derecha de la matriz, y el resultado queda en $B$. Si no cerraran, la multiplicación estaría mal planteada.</div>`,
        resultado: tex`$[v]_B = \binom{1}{-3}$` },

      { id: 'tp5-8c', rot: 'c', enunciado: tex`Calcular directamente $[v]_B$.`,
        conceptos: ['u5-calcular-coordenadas'],
        resolucion: tex`<p>Sin matrices, planteando la combinación lineal ([[u5-calcular-coordenadas]]):</p>
        <div class="fx center">$$\alpha(2,0) + \beta(0,-1) = (2,3)$$</div>
        <div class="fx center">$$\begin{cases} 2\alpha = 2 \;\Longrightarrow\; \alpha = 1 \\ -\beta = 3 \;\Longrightarrow\; \beta = -3 \end{cases}$$</div>
        <div class="fx center">$$[v]_B = \begin{pmatrix} 1 \\ -3 \end{pmatrix}$$</div>
        <p><strong>Coincide con el inciso b)</strong> ✓ — que es el punto de pedir los dos caminos.</p>
        <p>Verificación: $\;1(2,0) - 3(0,-1) = (2,0) + (0,3) = (2,3)$ ✓</p>
        <div class="note tip"><b class="lbl">Cuándo conviene cada uno</b>
        Para <strong>un</strong> vector, el camino directo es más rápido. La matriz paga cuando hay que convertir <strong>varios</strong> vectores: se calcula una vez y después cada conversión es una multiplicación. Es el mismo criterio que en el ejercicio 3.</div>`,
        resultado: tex`$[v]_B = \binom{1}{-3}$, igual que por la matriz.` },

      { id: 'tp5-8d', rot: 'd', enunciado: tex`Comprobar gráficamente el resultado.`,
        conceptos: ['u5-grafico'],
        resolucion: tex`<p>Hay que dibujar los dos sistemas ([[u5-grafico]]):</p>
        <h3>Sistema canónico</h3>
        <p>$v = (2,3)$: dos unidades a la derecha, tres hacia arriba. Las coordenadas se leen sobre los ejes habituales.</p>
        <h3>Sistema de $B$</h3>
        <p>Se dibujan los vectores de la base como nuevos ejes:</p>
        <ul>
          <li>$v_1 = (2,0)$: sobre el semieje positivo $X$, pero de <strong>longitud 2</strong>. La unidad del nuevo eje horizontal mide el doble.</li>
          <li>$v_2 = (0,-1)$: sobre el semieje <strong>negativo</strong> $Y$, de longitud 1. El nuevo eje vertical apunta <strong>hacia abajo</strong>.</li>
        </ul>
        <p>Ahora se lee $v$ en esa cuadrícula:</p>
        <ul>
          <li><strong>Horizontalmente:</strong> $v$ llega a $x = 2$, y cada paso de $v_1$ avanza $2$. Hace falta <strong>1 paso</strong> ⇒ primera coordenada $1$ ✓</li>
          <li><strong>Verticalmente:</strong> $v$ llega a $y = 3$, pero $v_2$ apunta hacia abajo. Hay que dar <strong>3 pasos en sentido contrario</strong> a $v_2$ ⇒ segunda coordenada $-3$ ✓</li>
        </ul>
        <div class="fx center">$$v = 1 \cdot (2,0) \;+\; (-3)\cdot(0,-1)$$</div>
        <div class="note tip"><b class="lbl">Qué explica cada número</b>
        El $\tfrac12$ de la matriz $[\;]_{CB}$ aparece porque la unidad horizontal se <strong>duplicó</strong>: medir con una regla dos veces más larga da números la mitad de grandes. Y el $-1$ aparece porque el eje vertical se <strong>dio vuelta</strong>: lo que antes era $+3$ ahora se cuenta como $-3$.
        <p>Es la lectura geométrica de una matriz de cambio diagonal: reescala y/o invierte cada eje por separado, sin mezclarlos.</p></div>
        <div class="note"><b class="lbl">En este caso los ejes siguen siendo perpendiculares</b> Porque $v_1$ y $v_2$ son ortogonales. Con una base como la del ejercicio 1, $\{(2,1),(-4,1)\}$, los nuevos ejes quedan <strong>oblicuos</strong> y hay que trazar paralelas para leer las coordenadas. Esta base es deliberadamente más simple.</div>`,
        resultado: tex`Dibujando $v_1 = (2,0)$ y $v_2 = (0,-1)$ como ejes: $v$ necesita <strong>1</strong> paso de $v_1$ (que mide 2) y <strong>$-3$</strong> pasos de $v_2$ (que apunta hacia abajo). Coincide con $[v]_B = \binom{1}{-3}$.` },

      { id: 'tp5-8e', rot: 'e', enunciado: tex`Hallar la matriz de cambio de base de $B$ a $C$.`,
        conceptos: ['u5-matriz-cambio', 'u5-inversa'],
        pista: tex`Esta es la fácil: no requiere resolver ningún sistema.`,
        resolucion: tex`<p>$[\;]_{BC}$ tiene como columnas los vectores de $B$ <strong>escritos en la canónica</strong>, o sea sus propias componentes. Se escribe sin ninguna cuenta:</p>
        <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$$</div>
        <h3>Control por [[u5-inversa]]</h3>
        <p>Debe ser la inversa de la matriz del inciso a):</p>
        <div class="fx center">$$[\;]_{BC}\cdot[\;]_{CB} = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} \tfrac12 & 0 \\ 0 & -1\end{pmatrix}
        = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \;✓$$</div>
        <p>Siendo diagonales, la inversa se obtiene invirtiendo cada entrada: $\;2 \to \tfrac12$ y $\;-1 \to -1$ (el $-1$ es su propio inverso).</p>
        <div class="note tip"><b class="lbl">La que siempre conviene calcular primero</b>
        De las dos matrices, $[\;]_{BC}$ es <strong>gratis</strong> (los vectores como columnas) y $[\;]_{CB}$ exige resolver sistemas o invertir. Por eso la estrategia general es: escribir $[\;]_{BC}$, y obtener $[\;]_{CB}$ como su inversa — una sola inversión. Acá se hizo al revés porque el enunciado pedía ese orden, pero en un parcial conviene el camino corto.</div>`,
        resultado: tex`$[\;]_{BC} = \begin{pmatrix} 2 & 0 \\ 0 & -1\end{pmatrix}$, que es la inversa de $[\;]_{CB}$.` },

      { id: 'tp5-8f', rot: 'f', enunciado: tex`Sea $[w]_B = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$, hallar $[w]_C$ de <strong>dos maneras distintas</strong>.`,
        conceptos: ['u5-teorema-cambio', 'u5-coordenadas', 'u5-inversa'],
        pista: tex`Una manera es con la matriz del inciso e). La otra es la definición de coordenadas, sin matrices.`,
        resolucion: tex`<div class="note"><b class="lbl">Sobre la lectura del enunciado</b> En el PDF este vector aparece con lo que parece una tercera fila, pero es el <strong>número de página</strong> que quedó pegado en la extracción del texto. En $\mathbb{R}^2$ el vector de coordenadas tiene dos entradas, y son $\binom{-1}{3}$.</div>

        <h3>Manera 1 — con la matriz de cambio</h3>
        <p>Por el [[u5-teorema-cambio|teorema]], usando $[\;]_{BC}$ del inciso e):</p>
        <div class="fx center">$$[w]_C = [\;]_{BC}\,[w]_B = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} -1 \\ 3 \end{pmatrix}
        = \begin{pmatrix} 2(-1) + 0 \\ 0 + (-1)(3) \end{pmatrix} = \begin{pmatrix} -2 \\ -3 \end{pmatrix}$$</div>

        <h3>Manera 2 — directo desde la definición</h3>
        <p>Las coordenadas <strong>son</strong> los escalares de la combinación lineal ([[u5-coordenadas]]), así que basta reconstruir el vector:</p>
        <div class="fx center">$$w = -1\,(2,0) + 3\,(0,-1) = (-2,\, 0) + (0,\, -3) = (-2,\, -3)$$</div>
        <p>Y las coordenadas canónicas de $w$ son sus propias componentes:</p>
        <div class="fx center">$$[w]_C = \begin{pmatrix} -2 \\ -3 \end{pmatrix}$$</div>
        <p><strong>Los dos caminos coinciden</strong> ✓</p>
        <div class="note tip"><b class="lbl">Por qué dan lo mismo, necesariamente</b>
        No es una coincidencia a verificar: <strong>son el mismo cálculo</strong>. Multiplicar $[\;]_{BC}$ por $[w]_B$ es exactamente combinar las columnas de $[\;]_{BC}$ —que son los vectores de $B$— con los coeficientes $[w]_B$. La matriz no hace nada distinto de la definición; sólo empaqueta la cuenta.
        <p>Esto vale en general: <em>multiplicar una matriz por un vector columna es combinar linealmente las columnas de la matriz con las entradas del vector.</em> Reconocerlo hace innecesario memorizar la fórmula del cambio de base.</p></div>
        <div class="note warn"><b class="lbl">Qué respuesta NO es</b> Una tentación es usar $[\;]_{CB}$ en lugar de $[\;]_{BC}$ y dar $\binom{-1/2}{-3}$. El control de subíndices lo detecta: $[\;]_{C\boxed{B}}\cdot[w]_{\boxed{B}}$ no cierra, porque la entrada está en $B$ y la matriz espera algo en $C$.</div>`,
        resultado: tex`$[w]_C = \binom{-2}{-3}$, es decir $w = (-2,-3)$. Por matriz: $[\;]_{BC}[w]_B$; directo: $-1(2,0) + 3(0,-1)$.` }
    ]},

  /* ========================= 9 ========================= */
  { id: 'tp5-9', num: '9',
    enunciado: tex`<p>Dadas las bases de $\mathbb{R}^3$: $B_1 = \{(1,1,1); (1,1,0); (1,0,0)\}$ y $B_2 = \{(2,1,2); (1,0,3); (2,3,-5)\}$.</p>
    <div class="note tip"><b class="lbl">$B_1$ tiene una propiedad que conviene explotar</b>
    Es «triangular»: planteando $\alpha(1,1,1) + \beta(1,1,0) + \gamma(1,0,0) = (x,y,z)$ queda
    $$\begin{cases} \alpha + \beta + \gamma = x \\ \alpha + \beta = y \\ \alpha = z\end{cases}
    \;\Longrightarrow\; \boxed{\;\alpha = z, \quad \beta = y - z, \quad \gamma = x - y\;}$$
    Las coordenadas en $B_1$ se leen con tres restas, <strong>sin resolver ningún sistema</strong>. Esta fórmula resuelve medio ejercicio.</div>`,
    incisos: [

      { id: 'tp5-9a', rot: 'a', enunciado: tex`Hallar $[(1,1,3)]_{B_1}$.`,
        conceptos: ['u5-calcular-coordenadas'],
        resolucion: tex`<p>Con la fórmula $\alpha = z$, $\beta = y-z$, $\gamma = x-y$ aplicada a $(x,y,z) = (1,1,3)$:</p>
        <div class="fx center">$$\alpha = 3, \qquad \beta = 1 - 3 = -2, \qquad \gamma = 1 - 1 = 0$$</div>
        <div class="fx center">$$[(1,1,3)]_{B_1} = \begin{pmatrix} 3 \\ -2 \\ 0 \end{pmatrix}$$</div>
        <p><strong>Verificación.</strong></p>
        <div class="fx center">$$3(1,1,1) - 2(1,1,0) + 0(1,0,0) = (3,3,3) + (-2,-2,0) = (1,\, 1,\, 3) \;✓$$</div>
        <div class="note"><b class="lbl">La tercera coordenada es nula</b> Significa que $(1,1,3)$ se escribe usando sólo los dos primeros vectores de $B_1$. No es un problema: las coordenadas pueden ser cero, lo que no puede ser cero es <em>toda</em> la escritura de un vector no nulo.</div>`,
        resultado: tex`$[(1,1,3)]_{B_1} = (3,\, -2,\, 0)^t$` },

      { id: 'tp5-9b', rot: 'b', enunciado: tex`Hallar las matrices de cambio de base de $B_1$ a $B_2$ y de $C$ a $B_1$.`,
        conceptos: ['u5-matriz-cambio', 'u5-via-canonica', 'u5-inversa'],
        pista: tex`Para $[\;]_{CB_1}$ usá la fórmula triangular con los canónicos. Para $[\;]_{B_1B_2}$ conviene pasar por la canónica en lugar de resolver tres sistemas.`,
        resolucion: tex`<h3>Matriz de cambio de $C$ a $B_1$</h3>
        <p>Sus columnas son $[e_i]_{B_1}$, que salen de la fórmula triangular:</p>
        <div class="tbl"><table>
          <thead><tr><th>Canónico</th><th>$\alpha = z$</th><th>$\beta = y-z$</th><th>$\gamma = x-y$</th></tr></thead>
          <tbody>
            <tr><td>$e_1 = (1,0,0)$</td><td>$0$</td><td>$0$</td><td>$1$</td></tr>
            <tr><td>$e_2 = (0,1,0)$</td><td>$0$</td><td>$1$</td><td>$-1$</td></tr>
            <tr><td>$e_3 = (0,0,1)$</td><td>$1$</td><td>$-1$</td><td>$0$</td></tr>
          </tbody>
        </table></div>
        <div class="fx center">$$[\;]_{CB_1} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}$$</div>
        <p><strong>Control</strong> ([[u5-inversa]]): debe ser la inversa de $[\;]_{B_1C}$, que es la matriz con los vectores de $B_1$ como columnas.</p>
        <div class="fx center">$$\begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}
        \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix} = I_3 \;✓$$</div>
        <p>Primera fila: $(1,\, 0,\, 0)$; segunda: $(1-1,\; 1-0,\; 0-0) = (0,1,0)$; tercera: $(1-1,\; 1-1,\; 1-0) = (0,0,1)$ ✓</p>

        <h3>Matriz de cambio de $B_1$ a $B_2$</h3>
        <p>Calcularla directamente exigiría resolver <strong>tres</strong> sistemas (uno por cada vector de $B_1$ escrito en $B_2$). El camino corto es pasar por la canónica ([[u5-via-canonica]]):</p>
        <div class="fx center">$$[\;]_{B_1B_2} = [\;]_{CB_2}\cdot[\;]_{B_1C}, \qquad\text{con}\qquad [\;]_{CB_2} = \bigl([\;]_{B_2C}\bigr)^{-1}$$</div>
        <p>Así hay que invertir <strong>una sola</strong> matriz. Con</p>
        <div class="fx center">$$[\;]_{B_2C} = \begin{pmatrix} 2 & 1 & 2 \\ 1 & 0 & 3 \\ 2 & 3 & -5 \end{pmatrix}, \qquad \det = -1$$</div>
        <p>(desarrollando por la segunda fila: $-1(-5-6) - 3(6-2) = 11 - 12 = -1$), la inversa resulta</p>
        <div class="fx center">$$[\;]_{CB_2} = \begin{pmatrix} 9 & -11 & -3 \\ -11 & 14 & 4 \\ -3 & 4 & 1 \end{pmatrix}$$</div>
        <p>Control: $[\;]_{CB_2}\cdot[\;]_{B_2C} = I_3$. Primera fila por primera columna: $18 - 11 - 6 = 1$ ✓; por la segunda: $9 - 0 - 9 = 0$ ✓; por la tercera: $18 - 33 + 15 = 0$ ✓</p>
        <p>Y finalmente:</p>
        <div class="fx center">$$[\;]_{B_1B_2} = \begin{pmatrix} 9 & -11 & -3 \\ -11 & 14 & 4 \\ -3 & 4 & 1 \end{pmatrix}
        \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}
        = \begin{pmatrix} -5 & -2 & 9 \\ 7 & 3 & -11 \\ 2 & 1 & -3 \end{pmatrix}$$</div>

        <h3>Verificación por columnas</h3>
        <p>Cada columna debe ser un vector de $B_1$ escrito en $B_2$:</p>
        <div class="fx center">$$-5(2,1,2) + 7(1,0,3) + 2(2,3,-5) = (-10+7+4,\; -5+0+6,\; -10+21-10) = (1,1,1) \;✓$$</div>
        <div class="fx center">$$-2(2,1,2) + 3(1,0,3) + 1(2,3,-5) = (-4+3+2,\; -2+0+3,\; -4+9-5) = (1,1,0) \;✓$$</div>
        <div class="fx center">$$9(2,1,2) - 11(1,0,3) - 3(2,3,-5) = (18-11-6,\; 9+0-9,\; 18-33+15) = (1,0,0) \;✓$$</div>
        <p>Las tres columnas reproducen exactamente $B_1$.</p>
        <div class="note tip"><b class="lbl">El orden de los factores</b>
        En $[\;]_{B_1\boxed{B_2}} = [\;]_{C\boxed{B_2}}\cdot[\;]_{\boxed{B_1}C}$ los subíndices interiores ($C$) se cancelan y sobreviven $B_1$ a la derecha (entrada) y $B_2$ a la izquierda (salida). Se lee <strong>de derecha a izquierda</strong>: primero de $B_1$ a la canónica, después de la canónica a $B_2$. Invertir el orden da una matriz distinta y sin sentido.</div>`,
        resultado: tex`$[\;]_{CB_1} = \begin{pmatrix} 0&0&1\\0&1&-1\\1&-1&0\end{pmatrix}$ &nbsp;y&nbsp; $[\;]_{B_1B_2} = \begin{pmatrix} -5&-2&9\\7&3&-11\\2&1&-3\end{pmatrix}$.` },

      { id: 'tp5-9c', rot: 'c', enunciado: tex`Utilizando $[\;]_{C,B_1}$ hallar $[\;]_{B_2,B_1}$. Rehacer el inciso a) utilizando matrices de cambio.`,
        conceptos: ['u5-via-canonica', 'u5-teorema-cambio'],
        resolucion: tex`<h3>La matriz $[\;]_{B_2B_1}$</h3>
        <p>Mismo esquema de composición, ahora en el otro sentido:</p>
        <div class="fx center">$$[\;]_{B_2B_1} = [\;]_{CB_1}\cdot[\;]_{B_2C}$$</div>
        <p>Las dos matrices ya están disponibles: $[\;]_{CB_1}$ del inciso b) y $[\;]_{B_2C}$ gratis (vectores de $B_2$ como columnas). <strong>No hay que invertir nada.</strong></p>
        <div class="fx center">$$[\;]_{B_2B_1} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}
        \begin{pmatrix} 2 & 1 & 2 \\ 1 & 0 & 3 \\ 2 & 3 & -5 \end{pmatrix}
        = \begin{pmatrix} 2 & 3 & -5 \\ -1 & -3 & 8 \\ 1 & 1 & -1 \end{pmatrix}$$</div>
        <p>Fila por fila: la 1.ª de $[\;]_{CB_1}$ es $(0,0,1)$, que selecciona la tercera fila de $[\;]_{B_2C}$: $(2,3,-5)$. La 2.ª es $(0,1,-1)$: segunda menos tercera fila, $(1-2,\; 0-3,\; 3+5) = (-1,-3,8)$. La 3.ª es $(1,-1,0)$: primera menos segunda, $(2-1,\; 1-0,\; 2-3) = (1,1,-1)$.</p>

        <h3>Verificación por la fórmula triangular</h3>
        <p>Cada columna debe ser un vector de $B_2$ escrito en $B_1$. Con $\alpha = z$, $\beta = y-z$, $\gamma = x-y$:</p>
        <div class="tbl"><table>
          <thead><tr><th>Vector de $B_2$</th><th>$\alpha$</th><th>$\beta$</th><th>$\gamma$</th><th>¿Coincide?</th></tr></thead>
          <tbody>
            <tr><td>$(2,1,2)$</td><td>$2$</td><td>$1-2 = -1$</td><td>$2-1 = 1$</td><td>columna 1 ✓</td></tr>
            <tr><td>$(1,0,3)$</td><td>$3$</td><td>$0-3 = -3$</td><td>$1-0 = 1$</td><td>columna 2 ✓</td></tr>
            <tr><td>$(2,3,-5)$</td><td>$-5$</td><td>$3+5 = 8$</td><td>$2-3 = -1$</td><td>columna 3 ✓</td></tr>
          </tbody>
        </table></div>
        <p><strong>Control extra:</strong> $[\;]_{B_2B_1}$ debe ser la inversa de $[\;]_{B_1B_2}$ del inciso b). Multiplicando:</p>
        <div class="fx center">$$\begin{pmatrix} -5 & -2 & 9 \\ 7 & 3 & -11 \\ 2 & 1 & -3 \end{pmatrix}
        \begin{pmatrix} 2 & 3 & -5 \\ -1 & -3 & 8 \\ 1 & 1 & -1 \end{pmatrix} = I_3 \;✓$$</div>
        <p>Primera fila: $(-10+2+9,\; -15+6+9,\; 25-16-9) = (1,0,0)$ ✓</p>

        <h3>Rehacer el inciso a) con matrices</h3>
        <p>Por el [[u5-teorema-cambio|teorema]], y recordando que $[(1,1,3)]_C = (1,1,3)^t$:</p>
        <div class="fx center">$$[(1,1,3)]_{B_1} = [\;]_{CB_1}\begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix}
        = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix}
        = \begin{pmatrix} 3 \\ 1 - 3 \\ 1 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ -2 \\ 0 \end{pmatrix}$$</div>
        <p><strong>Coincide con el inciso a)</strong> ✓</p>
        <div class="note tip"><b class="lbl">El mapa completo del ejercicio</b>
        Entre tres bases hay seis matrices de cambio, y todas se obtienen de <strong>dos</strong> datos gratis ($[\;]_{B_1C}$ y $[\;]_{B_2C}$, los vectores como columnas) más <strong>una</strong> inversión:
        <div class="tbl"><table>
          <thead><tr><th>Matriz</th><th>Cómo se obtiene</th></tr></thead>
          <tbody>
            <tr><td>$[\;]_{B_1C}$, $[\;]_{B_2C}$</td><td>gratis: vectores como columnas</td></tr>
            <tr><td>$[\;]_{CB_1}$, $[\;]_{CB_2}$</td><td>invirtiendo las anteriores</td></tr>
            <tr><td>$[\;]_{B_1B_2}$</td><td>$[\;]_{CB_2}\cdot[\;]_{B_1C}$</td></tr>
            <tr><td>$[\;]_{B_2B_1}$</td><td>$[\;]_{CB_1}\cdot[\;]_{B_2C}$</td></tr>
          </tbody>
        </table></div>
        Nunca hace falta resolver sistemas vector por vector: todo sale de componer. Es la idea que el TP 6 reutiliza para las matrices de transformación ([[u6-cambio-base-matriz]]).</div>`,
        resultado: tex`$[\;]_{B_2B_1} = \begin{pmatrix} 2&3&-5\\-1&-3&8\\1&1&-1\end{pmatrix}$, inversa de $[\;]_{B_1B_2}$. Y $[(1,1,3)]_{B_1} = [\;]_{CB_1}(1,1,3)^t = (3,-2,0)^t$, igual que en a).` }
    ]},

  /* ========================= 10 ========================= */
  { id: 'tp5-10', num: '10',
    enunciado: tex`<p>Sean $V$ un espacio vectorial de dimensión 4 y $B_1 = \{v_1,v_2,v_3,v_4\}$, $B_2 = \{w_1,w_2,w_3,w_4\}$ dos bases de $V$ donde:</p>
    <div class="fx">$$\begin{aligned}
    w_1 &= 3v_1 + 5v_3 + 2v_4 \\
    w_2 &= 3v_1 + 6v_2 + 4v_3 + 3v_4 \\
    w_3 &= -4v_1 + v_2 + 2v_3 + 3v_4 \\
    w_4 &= -3v_1 + v_2 + v_3 + 2v_4
    \end{aligned}$$</div>
    <p>Hallar la matriz de cambio de base de $B_2$ a $B_1$.</p>`,
    conceptos: ['u5-matriz-cambio', 'u5-coordenadas'],
    pista: tex`Leé bien qué se pide: de $B_2$ a $B_1$. ¿Qué tienen que ser las columnas? Fijate si los datos ya te las dan.`,
    resolucion: tex`<p>Este ejercicio <strong>no requiere ninguna cuenta</strong>: se resuelve leyendo la definición con cuidado. Todo el trabajo está en no confundir el orden.</p>
    <h3>Qué pide la definición</h3>
    <p>Se pide $[\;]_{B_2B_1}$, y por [[u5-matriz-cambio]] su columna $j$ es</p>
    <div class="fx center">$$[w_j]_{B_1} \qquad \text{(el } j\text{-ésimo vector de } B_2 \text{ escrito en } B_1\text{)}$$</div>
    <p>Y los datos del enunciado son exactamente eso: cada $w_j$ expresado como combinación lineal de los $v_i$. Las coordenadas se leen de los coeficientes, cuidando los <strong>términos ausentes</strong>, que valen cero:</p>
    <div class="tbl"><table>
      <thead><tr><th></th><th>$v_1$</th><th>$v_2$</th><th>$v_3$</th><th>$v_4$</th><th>$[w_j]_{B_1}$</th></tr></thead>
      <tbody>
        <tr><td>$w_1 = 3v_1 + 5v_3 + 2v_4$</td><td>$3$</td><td><strong>$0$</strong></td><td>$5$</td><td>$2$</td><td>$(3,0,5,2)^t$</td></tr>
        <tr><td>$w_2 = 3v_1 + 6v_2 + 4v_3 + 3v_4$</td><td>$3$</td><td>$6$</td><td>$4$</td><td>$3$</td><td>$(3,6,4,3)^t$</td></tr>
        <tr><td>$w_3 = -4v_1 + v_2 + 2v_3 + 3v_4$</td><td>$-4$</td><td>$1$</td><td>$2$</td><td>$3$</td><td>$(-4,1,2,3)^t$</td></tr>
        <tr><td>$w_4 = -3v_1 + v_2 + v_3 + 2v_4$</td><td>$-3$</td><td>$1$</td><td>$1$</td><td>$2$</td><td>$(-3,1,1,2)^t$</td></tr>
      </tbody>
    </table></div>
    <p>Esos cuatro vectores, puestos <strong>como columnas</strong>:</p>
    <div class="fx center">$$[\;]_{B_2B_1} = \begin{pmatrix}
    3 & 3 & -4 & -3 \\
    0 & 6 & 1 & 1 \\
    5 & 4 & 2 & 1 \\
    2 & 3 & 3 & 2
    \end{pmatrix}$$</div>

    <div class="note warn"><b class="lbl">Los tres errores posibles, y cómo evitarlos</b>
    <ol>
      <li><strong>Poner los coeficientes por filas</strong> en lugar de por columnas (es decir, dar la transpuesta). El control: la columna 1 tiene que reproducir $w_1$ al combinar los $v_i$, y eso sólo pasa si está en columna.</li>
      <li><strong>Invertir la matriz</strong>, creyendo que hace falta un cálculo. No: los datos vienen ya en la dirección pedida. La inversa sería $[\;]_{B_1B_2}$, que el ejercicio <em>no</em> pide.</li>
      <li><strong>Olvidar el cero de $w_1$.</strong> $w_1$ no tiene término en $v_2$, así que su segunda coordenada es $0$. Escribir $(3,5,2)$ con tres entradas en un espacio de dimensión 4 es un error de dimensión.</li>
    </ol></div>

    <h3>Control del sentido</h3>
    <p>La matriz debe cumplir $[x]_{B_1} = [\;]_{B_2B_1}\,[x]_{B_2}$. Probando con $x = w_1$, cuyas coordenadas en $B_2$ son $(1,0,0,0)^t$ ([[u5-coordenadas-casos]]):</p>
    <div class="fx center">$$[\;]_{B_2B_1}\begin{pmatrix} 1 \\ 0 \\ 0 \\ 0\end{pmatrix} = \begin{pmatrix} 3 \\ 0 \\ 5 \\ 2\end{pmatrix} = [w_1]_{B_1} \;✓$$</div>
    <p>que es correcto, porque $w_1 = 3v_1 + 0v_2 + 5v_3 + 2v_4$. Multiplicar por el $i$-ésimo canónico extrae la columna $i$, así que este control verifica la matriz columna por columna.</p>

    <h3>¿Es inversible?</h3>
    <p>Debe serlo, porque toda matriz de cambio de base lo es ([[u5-inversa]]). Calculando el determinante por eliminación —con $F_3 \to F_3 - \tfrac53 F_1$ y $F_4 \to F_4 - \tfrac23 F_1$, que no lo alteran— y expandiendo por la primera columna:</p>
    <div class="fx center">$$\det = 3 \cdot \begin{vmatrix} 6 & 1 & 1 \\ -1 & \tfrac{26}{3} & 6 \\ 1 & \tfrac{17}{3} & 4 \end{vmatrix} = 3 \cdot \left(-\tfrac{1}{3}\right) = -1 \neq 0 \;✓$$</div>
    <p>Consistente con que $B_1$ y $B_2$ sean ambas bases de $V$.</p>
    <div class="note tip"><b class="lbl">Qué evalúa este ejercicio</b>
    Precisamente que se entienda la <strong>dirección</strong> de la notación. Los datos están dados en la forma más favorable posible, y el único riesgo es traducirlos al revés. Es el ítem que conviene tener clarísimo antes del TP 6, donde la misma convención se aplica a $[T]_{BD}$ y donde un error de orden arrastra todo el ejercicio.</div>`,
    resultado: tex`$[\;]_{B_2B_1} = \begin{pmatrix} 3&3&-4&-3\\0&6&1&1\\5&4&2&1\\2&3&3&2\end{pmatrix}$ — las coordenadas dadas, puestas como columnas. No hace falta ningún cálculo; $\det = -1 \neq 0$.` }

]});
