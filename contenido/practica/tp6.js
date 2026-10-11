/* TP 6 — Transformaciones lineales
   Enunciado: "TPTransfLineales2014.pdf" (7_EAL_2026/6_tranformaciones_lineales) */

EAL.tp({
  id: 'tp6', num: 6, unidad: 'u6',
  titulo: 'Transformaciones lineales',
  resumen: 'Linealidad, núcleo e imagen, existencia y unicidad, y la matriz asociada respecto de distintos pares de bases.',
  nota: tex`<b class="lbl">Antes de abrir las resoluciones</b> Intentá cada ítem a mano y usá la resolución para <strong>autocorregirte</strong>.<br><br>
  <b class="lbl">Las tres herramientas que resuelven el práctico</b>
  <ol>
    <li><strong>Linealidad sobre una base.</strong> Conocer $T$ en una base alcanza para conocerla en todo el espacio: $T\!\left(\sum \alpha_i v_i\right) = \sum \alpha_i T(v_i)$ ([[u6-propiedades-tl]]). De ahí sale el [[u6-teorema-unicidad|teorema de existencia y unicidad]] y toda la maquinaria de matrices.</li>
    <li><strong>Teorema de la dimensión:</strong> $\dim V = \dim\operatorname{Nuc}(T) + \dim\operatorname{Im}(T)$. Calculando una dimensión, la otra sale gratis — y muchas preguntas de existencia se responden sin construir nada ([[u6-teorema-dimension]]).</li>
    <li><strong>La convención de la cátedra:</strong> en $[T]_{BD}$ el <strong>primer</strong> subíndice es la base del <em>dominio</em> y el segundo la del <em>codominio</em>, igual que en $[\;]_{BD}$ del TP 5. Y actúa así:
      $$[T(x)]_D = [T]_{BD}\,[x]_B$$
      El control de subíndices ($[T]_{B\boxed{D}}[x]_{\boxed{B}}$) detecta casi todos los errores antes de hacer la cuenta. Ver [[u6-matriz-asociada]].</li>
  </ol>`,

  ejercicios: [

  /* ========================= 1 ========================= */
  { id: 'tp6-1', num: '1',
    enunciado: tex`<p><strong>Aplicaciones lineales, núcleo e imagen:</strong></p>
    <div class="note tip"><b class="lbl">Cómo se decide la linealidad</b> Para probar que <strong>sí</strong> es lineal hay que verificar las dos condiciones con vectores genéricos. Para probar que <strong>no</strong>, el filtro más rápido es $T(\vec 0) \neq \vec 0$ ([[u6-propiedades-tl]]), que termina el ítem en un renglón.</div>`,
    incisos: [

      { id: 'tp6-1ai', rot: 'a.i', enunciado: tex`¿Es lineal $T: \mathbb{R}^3 \to \mathbb{R}^2$ definida por $T(x,y,z) = (2x,\; y+z)$?`,
        conceptos: ['u6-transformacion-lineal', 'u6-propiedades-tl'],
        resolucion: tex`<p><strong>Sí es lineal.</strong> Cada componente de la salida es combinación lineal de las variables de entrada, sin términos constantes ni potencias: la señal de [[u6-transformacion-lineal|linealidad]].</p>
        <h3>Aditividad</h3>
        <p>Sean $u = (x_1,y_1,z_1)$ y $v = (x_2,y_2,z_2)$. Entonces $u + v = (x_1+x_2,\; y_1+y_2,\; z_1+z_2)$ y</p>
        <div class="fx center">$$T(u+v) = \bigl(2(x_1+x_2),\;\; (y_1+y_2)+(z_1+z_2)\bigr) = \bigl(2x_1 + 2x_2,\;\; (y_1+z_1)+(y_2+z_2)\bigr)$$</div>
        <div class="fx center">$$= (2x_1,\; y_1+z_1) + (2x_2,\; y_2+z_2) = T(u) + T(v) \;✓$$</div>
        <h3>Homogeneidad</h3>
        <div class="fx center">$$T(\alpha u) = T(\alpha x_1,\; \alpha y_1,\; \alpha z_1) = (2\alpha x_1,\;\; \alpha y_1 + \alpha z_1) = \alpha\,(2x_1,\; y_1+z_1) = \alpha\,T(u) \;✓$$</div>
        <p>Las dos condiciones se cumplen, luego $T$ es transformación lineal.</p>
        <div class="note"><b class="lbl">Control rápido</b> $T(0,0,0) = (0,0)$ ✓ — necesario, aunque no suficiente.</div>`,
        resultado: tex`<strong>Sí es lineal.</strong> Se verifican $T(u+v) = T(u)+T(v)$ y $T(\alpha u) = \alpha T(u)$.` },

      { id: 'tp6-1aii', rot: 'a.ii', enunciado: tex`¿Es lineal $T: \mathbb{R}^2 \to \mathbb{R}^2$ definida por $T(x,y) = (x+1,\; y)$?`,
        conceptos: ['u6-transformacion-lineal', 'u6-propiedades-tl'],
        pista: tex`Evaluá en el vector nulo.`,
        resolucion: tex`<p><strong>No es lineal.</strong></p>
        <h3>El filtro del nulo</h3>
        <p>Por la propiedad 1 de [[u6-propiedades-tl]], toda transformación lineal cumple $T(\vec 0) = \vec 0$. Acá:</p>
        <div class="fx center">$$T(0,0) = (0+1,\; 0) = (1,\, 0) \neq (0,\, 0)$$</div>
        <p>Luego $T$ <strong>no</strong> es lineal, y el análisis termina acá.</p>
        <h3>El contraejemplo explícito (si se pide)</h3>
        <p>Falla la aditividad. Con $u = (1,0)$ y $v = (2,0)$:</p>
        <div class="fx center">$$T(u+v) = T(3,0) = (4,\, 0)$$</div>
        <div class="fx center">$$T(u) + T(v) = (2,0) + (3,0) = (5,\, 0)$$</div>
        <p>$(4,0) \neq (5,0)$ ✓ falla. En general $T(u+v) = (x_1+x_2+1,\; \cdot)$ mientras que $T(u)+T(v) = (x_1+x_2+2,\; \cdot)$: el término constante se suma <strong>dos veces</strong> en el miembro derecho.</p>
        <div class="note tip"><b class="lbl">Qué es esta aplicación</b>
        Es una <strong>traslación</strong> (por el vector $(1,0)$) compuesta con la identidad. Las traslaciones por un vector no nulo nunca son lineales, justamente porque mueven el origen ([[u6-ejemplos-geometricos]]). Cualquier término constante en la fórmula arruina la linealidad.</div>`,
        resultado: tex`<strong>No es lineal:</strong> $T(0,0) = (1,0) \neq (0,0)$. Es una traslación, y el término constante hace fallar la aditividad.` },

      { id: 'tp6-1aiii', rot: 'a.iii', enunciado: tex`¿Es lineal $T: \mathbb{R}^3 \to P_4$ definida por $T(a,b,c) = a + 2bx^2 - bx^4$?`,
        conceptos: ['u6-transformacion-lineal'],
        pista: tex`El codominio son polinomios, pero el criterio es el mismo. Fijate que $c$ no aparece en la fórmula — eso no impide la linealidad.`,
        resolucion: tex`<p><strong>Sí es lineal.</strong> El codominio es $P_4$ en lugar de $\mathbb{R}^n$, pero el criterio no cambia: cada <em>coeficiente</em> del polinomio de salida es combinación lineal de $a$, $b$, $c$.</p>
        <h3>Aditividad</h3>
        <p>Sean $u = (a_1,b_1,c_1)$ y $v = (a_2,b_2,c_2)$:</p>
        <div class="fx center">$$T(u+v) = (a_1+a_2) + 2(b_1+b_2)x^2 - (b_1+b_2)x^4$$</div>
        <div class="fx center">$$= \bigl[a_1 + 2b_1x^2 - b_1x^4\bigr] + \bigl[a_2 + 2b_2x^2 - b_2x^4\bigr] = T(u) + T(v) \;✓$$</div>
        <h3>Homogeneidad</h3>
        <div class="fx center">$$T(\alpha u) = \alpha a_1 + 2\alpha b_1 x^2 - \alpha b_1 x^4 = \alpha\bigl(a_1 + 2b_1x^2 - b_1x^4\bigr) = \alpha\,T(u) \;✓$$</div>
        <p>Luego $T$ es transformación lineal.</p>
        <div class="note tip"><b class="lbl">Que $c$ no aparezca no es un problema</b>
        La fórmula ignora la tercera variable, lo que equivale a que el coeficiente de $c$ sea $0$ en todas las salidas — perfectamente lineal. Lo que <em>sí</em> indica es que la dirección de $c$ va al polinomio nulo, es decir que $(0,0,1) \in \operatorname{Nuc}(T)$. Se verifica en el inciso b).</div>
        <div class="note"><b class="lbl">Control del nulo</b> $T(0,0,0) = 0 + 0x^2 - 0x^4 = 0$, el polinomio nulo ✓</div>`,
        resultado: tex`<strong>Sí es lineal.</strong> Cada coeficiente del polinomio de salida es combinación lineal de $a$, $b$, $c$. Que $c$ no aparezca sólo indica que $(0,0,1)$ está en el núcleo.` },

      { id: 'tp6-1b', rot: 'b', enunciado: tex`Para cada transformación lineal hallar $\operatorname{Nuc}(T)$, $\operatorname{Im}(T)$, dimensión y base para cada uno de estos subespacios.`,
        conceptos: ['u6-nucleo-imagen', 'u6-nucleo-imagen-subespacios', 'u6-imagen-generadores', 'u6-teorema-dimension', 'u4-hallar-base'],
        pista: tex`Sólo i) y iii) son lineales, así que sólo para esas tiene sentido. Para el núcleo, igualar a cero y resolver; para la imagen, transformar la base canónica y depurar.`,
        resolucion: tex`<p>Sólo los incisos <strong>i)</strong> y <strong>iii)</strong> definen transformaciones lineales, así que únicamente para ellas tienen sentido el núcleo y la imagen (son subespacios por [[u6-nucleo-imagen-subespacios]]). El ii) no es lineal y queda afuera.</p>

        <h3>i) $T: \mathbb{R}^3 \to \mathbb{R}^2$, $\;T(x,y,z) = (2x,\; y+z)$</h3>
        <p><strong>Núcleo.</strong> Se iguala a cero:</p>
        <div class="fx center">$$(2x,\; y+z) = (0,0) \;\Longrightarrow\; \begin{cases} 2x = 0 \\ y + z = 0\end{cases} \;\Longrightarrow\; x = 0,\;\; z = -y$$</div>
        <p>Los vectores son $(0,\, y,\, -y) = y\,(0,1,-1)$:</p>
        <div class="fx center">$$\operatorname{Nuc}(T) = \operatorname{gen}\{(0,1,-1)\}, \qquad \dim = 1, \qquad \text{base } \{(0,1,-1)\}$$</div>
        <p>Es una <strong>recta por el origen</strong> en $\mathbb{R}^3$, de ecuaciones $x = 0 \wedge y + z = 0$.</p>
        <p><strong>Imagen.</strong> Por [[u6-imagen-generadores]], se transforma la base canónica:</p>
        <div class="fx center">$$T(e_1) = (2,0), \qquad T(e_2) = (0,1), \qquad T(e_3) = (0,1)$$</div>
        <p>Generan $\operatorname{gen}\{(2,0),(0,1)\}$, y esos dos son L.I. (det $= 2 \neq 0$), así que</p>
        <div class="fx center">$$\operatorname{Im}(T) = \mathbb{R}^2, \qquad \dim = 2, \qquad \text{base } \{(2,0),(0,1)\} \;\text{(o la canónica)}$$</div>
        <p><strong>Control por el [[u6-teorema-dimension|teorema de la dimensión]]:</strong> $\;\dim\mathbb{R}^3 = 3 = 1 + 2$ ✓</p>
        <p>Y como $\dim\operatorname{Im}(T) = 2 = \dim\mathbb{R}^2$, $T$ es <strong>sobreyectiva</strong>; no es inyectiva, porque el núcleo no es trivial ([[u6-inyectiva-sobreyectiva]]).</p>

        <h3>iii) $T: \mathbb{R}^3 \to P_4$, $\;T(a,b,c) = a + 2bx^2 - bx^4$</h3>
        <p><strong>Núcleo.</strong> Se iguala al <strong>polinomio nulo</strong>, lo que obliga a que <em>cada coeficiente</em> se anule:</p>
        <div class="fx center">$$a + 0x + 2b\,x^2 + 0x^3 - b\,x^4 = 0 \;\Longrightarrow\; \begin{cases} a = 0 \\ 2b = 0 \\ -b = 0\end{cases} \;\Longrightarrow\; a = b = 0, \;\; c \text{ libre}$$</div>
        <div class="fx center">$$\operatorname{Nuc}(T) = \{(0,0,c)\} = \operatorname{gen}\{(0,0,1)\}, \qquad \dim = 1, \qquad \text{base } \{(0,0,1)\}$$</div>
        <p>Confirma lo anticipado en a.iii): la dirección de $c$ es exactamente el núcleo.</p>
        <p><strong>Imagen.</strong> Transformando la canónica de $\mathbb{R}^3$:</p>
        <div class="fx center">$$T(1,0,0) = 1, \qquad T(0,1,0) = 2x^2 - x^4, \qquad T(0,0,1) = 0$$</div>
        <p>El tercero es nulo y no aporta. Los otros dos son L.I. (uno es constante y el otro no tiene término constante):</p>
        <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{1,\;\; 2x^2 - x^4\}, \qquad \dim = 2, \qquad \text{base } \{1,\; 2x^2-x^4\}$$</div>
        <p><strong>Control:</strong> $\;3 = 1 + 2$ ✓</p>
        <p>Como $\dim P_4 = 5$ y $\dim\operatorname{Im}(T) = 2 < 5$, $T$ <strong>no es sobreyectiva</strong>. Tampoco inyectiva.</p>
        <div class="note tip"><b class="lbl">El patrón que conviene reconocer</b>
        Para el <strong>núcleo</strong> se resuelve un sistema homogéneo en el espacio de <em>partida</em>. Para la <strong>imagen</strong> se transforman los vectores de una base y se depura el conjunto obtenido, que vive en el espacio de <em>llegada</em>. Y el teorema de la dimensión permite calcular sólo uno de los dos y deducir la dimensión del otro — útil cuando uno de los cálculos es mucho más corto.</div>`,
        resultado: tex`<strong>i)</strong> $\operatorname{Nuc} = \operatorname{gen}\{(0,1,-1)\}$ ($\dim 1$); $\operatorname{Im} = \mathbb{R}^2$ ($\dim 2$). &nbsp; <strong>iii)</strong> $\operatorname{Nuc} = \operatorname{gen}\{(0,0,1)\}$ ($\dim 1$); $\operatorname{Im} = \operatorname{gen}\{1,\, 2x^2-x^4\}$ ($\dim 2$). &nbsp; El ii) no es lineal.` }
    ]},

  /* ========================= 2 ========================= */
  { id: 'tp6-2', num: '2',
    enunciado: tex`<p>Sea $T: \mathbb{R}^2 \to \mathbb{R}^2$ la transformación lineal $T(x,y) = (x, 0)$.</p>`,
    incisos: [

      { id: 'tp6-2a', rot: 'a', enunciado: tex`Describir geométricamente a $T$.`,
        conceptos: ['u6-ejemplos-geometricos', 'u1-proyeccion-geom'],
        resolucion: tex`<p>$T$ es la <strong>proyección ortogonal sobre el eje $x$</strong>.</p>
        <p>Cada punto $(x,y)$ se manda a $(x, 0)$: conserva su abscisa y pierde la ordenada. Geométricamente, es la «sombra» del punto sobre el eje horizontal, proyectada en dirección perpendicular a ese eje ([[u1-proyeccion-geom]]).</p>
        <div class="note"><b class="lbl">Es lineal, y figura en la tabla</b> Aparece en [[u6-ejemplos-geometricos]] como el primer caso: las proyecciones sobre los ejes son transformaciones lineales. Se puede verificar en un renglón: $T(\alpha u + \beta v) = (\alpha x_1 + \beta x_2,\; 0) = \alpha(x_1,0) + \beta(x_2,0)$.</div>
        <div class="note tip"><b class="lbl">Qué le hace al plano</b> Aplasta todo el plano sobre una recta. Es una transformación que <strong>pierde información</strong>: a partir de $T(x,y) = (x,0)$ es imposible recuperar $y$. Esa pérdida es exactamente lo que mide el núcleo, y es la razón por la que $T$ no es inyectiva.</div>`,
        resultado: tex`Es la <strong>proyección ortogonal sobre el eje $x$</strong>: $(x,y) \mapsto (x,0)$, la sombra del punto sobre el eje horizontal.` },

      { id: 'tp6-2b', rot: 'b', enunciado: tex`¿Cuál es la imagen de los vectores que se encuentran sobre el eje $y$? ¿Y de los que se encuentran sobre el eje $x$? Justificar.`,
        conceptos: ['u6-nucleo-imagen'],
        resolucion: tex`<h3>Vectores del eje $y$</h3>
        <p>Son los de la forma $(0, y)$. Reemplazando en la fórmula:</p>
        <div class="fx center">$$T(0,y) = (0,\, 0) = \vec 0 \qquad \text{para todo } y \in \mathbb{R}$$</div>
        <p><strong>Todos van al vector nulo.</strong> El eje $y$ se colapsa íntegramente en el origen: es la dirección que la proyección destruye.</p>

        <h3>Vectores del eje $x$</h3>
        <p>Son los de la forma $(x, 0)$:</p>
        <div class="fx center">$$T(x,0) = (x,\, 0) \qquad \text{para todo } x \in \mathbb{R}$$</div>
        <p><strong>Quedan fijos</strong>: cada uno es su propia imagen. Restringida al eje $x$, $T$ actúa como la <em>identidad</em>.</p>
        <div class="note tip"><b class="lbl">Lo que esto anticipa</b>
        El eje $y$ es exactamente el <strong>núcleo</strong> (todo va al nulo) y el eje $x$ es exactamente la <strong>imagen</strong> (todos sus puntos se alcanzan, y de hecho se alcanzan a sí mismos). El inciso c) lo formaliza.
        <p>Además, los vectores que quedan fijos cumplen $T(v) = 1 \cdot v$: son <strong>autovectores de autovalor 1</strong>, y los del eje $y$ cumplen $T(v) = 0 \cdot v$, autovectores de autovalor $0$. Es un adelanto de la unidad 7 ([[u7-autovalor]]).</p></div>`,
        resultado: tex`Los del eje $y$ van todos al <strong>vector nulo</strong> ($T(0,y) = (0,0)$). Los del eje $x$ <strong>quedan fijos</strong> ($T(x,0) = (x,0)$): ahí $T$ es la identidad.` },

      { id: 'tp6-2c', rot: 'c', enunciado: tex`¿Cuál es el núcleo y la imagen de la transformación lineal? Justificar <strong>sin realizar cálculos</strong>.`,
        conceptos: ['u6-nucleo-sin-calcular', 'u6-teorema-dimension'],
        pista: tex`El inciso b) ya te dio las dos respuestas. Lo que falta es argumentar que no hay <em>más</em> vectores en cada subespacio, y el teorema de la dimensión lo cierra.`,
        resolucion: tex`<div class="fx center">$$\operatorname{Nuc}(T) = \text{eje } y = \operatorname{gen}\{(0,1)\}, \qquad \operatorname{Im}(T) = \text{eje } x = \operatorname{gen}\{(1,0)\}$$</div>
        <p>ambos de dimensión 1.</p>

        <h3>Justificación sin cálculos</h3>
        <p><strong>Imagen.</strong> Toda imagen tiene la forma $(x, 0)$, es decir segunda componente nula: la imagen <em>está contenida</em> en el eje $x$. Y recíprocamente, por el inciso b) cada $(x,0)$ es imagen de sí mismo, así que el eje $x$ <em>está contenido</em> en la imagen. Las dos inclusiones dan la igualdad:</p>
        <div class="fx center">$$\operatorname{Im}(T) = \text{eje } x, \qquad \dim\operatorname{Im}(T) = 1$$</div>
        <p><strong>Núcleo.</strong> Por el inciso b), el eje $y$ está contenido en el núcleo. Para ver que no hay nada más, basta el [[u6-teorema-dimension|teorema de la dimensión]]:</p>
        <div class="fx center">$$\underbrace{2}_{\dim \mathbb{R}^2} = \dim\operatorname{Nuc}(T) + \underbrace{1}_{\dim\operatorname{Im}(T)} \;\Longrightarrow\; \dim\operatorname{Nuc}(T) = 1$$</div>
        <p>Y un subespacio de dimensión 1 que contiene al eje $y$ (que ya tiene dimensión 1) <strong>es</strong> el eje $y$, por el [[u4-teorema-24-25|Teorema 25]]. $\blacksquare$</p>

        <div class="note tip"><b class="lbl">La estructura del argumento</b>
        Es el esquema de [[u6-nucleo-sin-calcular]]: se obtiene una <em>cota inferior</em> para una dimensión con los datos disponibles, y el teorema de la dimensión la convierte en igualdad. No hace falta resolver ningún sistema homogéneo.</div>
        <div class="note"><b class="lbl">Lectura geométrica</b>
        Proyectar <strong>aplasta</strong> el plano sobre una recta —la imagen— y <strong>colapsa</strong> la recta perpendicular a ella —el núcleo—. El teorema de la dimensión dice que lo que se gana en una se pierde en la otra: $1 + 1 = 2$.
        <p>$T$ no es inyectiva (núcleo no trivial) ni sobreyectiva ($\dim\operatorname{Im} = 1 < 2$), por [[u6-inyectiva-sobreyectiva]].</p></div>`,
        resultado: tex`$\operatorname{Nuc}(T) = \operatorname{gen}\{(0,1)\}$ (el eje $y$) y $\operatorname{Im}(T) = \operatorname{gen}\{(1,0)\}$ (el eje $x$), ambos de dimensión 1. Control: $2 = 1 + 1$.` }
    ]},

  /* ========================= 3 ========================= */
  { id: 'tp6-3', num: '3',
    enunciado: tex`<p>Sea $T: \mathbb{R}^2 \to \mathbb{R}^2$ una transformación lineal tal que $T(1,0) = (1,3)$ y $T(0,1) = \left(1, \tfrac{1}{2}\right)$.</p>
    <div class="note tip"><b class="lbl">Los datos están sobre la base canónica</b> Eso es el caso más favorable: no hay que resolver ningún sistema de coordenadas. Alcanza con $T(x,y) = x\,T(e_1) + y\,T(e_2)$, por [[u6-propiedades-tl]].</div>`,
    incisos: [

      { id: 'tp6-3a', rot: 'a', enunciado: tex`Obtener la imagen del vector $(3,4)$.`,
        conceptos: ['u6-propiedades-tl', 'u6-hallar-expresion'],
        resolucion: tex`<p>Se descompone $(3,4)$ en la base canónica y se aplica la linealidad (propiedad 4 de [[u6-propiedades-tl]]):</p>
        <div class="fx center">$$(3,4) = 3\,(1,0) + 4\,(0,1)$$</div>
        <div class="fx center">$$T(3,4) = 3\,T(1,0) + 4\,T(0,1) = 3\,(1,3) + 4\left(1, \tfrac12\right)$$</div>
        <div class="fx center">$$= (3,\, 9) + (4,\, 2) = (7,\, 11)$$</div>
        <div class="note"><b class="lbl">Por qué funciona</b> La linealidad permite «repartir» $T$ sobre la combinación lineal. Sin ella, conocer $T$ en dos vectores no diría nada sobre un tercero.</div>`,
        resultado: tex`$T(3,4) = (7, 11)$` },

      { id: 'tp6-3b', rot: 'b', enunciado: tex`Obtener la imagen de cualquier vector $(x,y)$.`,
        conceptos: ['u6-hallar-expresion'],
        resolucion: tex`<p>Mismo razonamiento con el vector genérico ([[u6-hallar-expresion]], atajo canónico):</p>
        <div class="fx center">$$T(x,y) = x\,T(1,0) + y\,T(0,1) = x\,(1,3) + y\left(1,\tfrac12\right)$$</div>
        <div class="fx center">$$= (x,\, 3x) + \left(y,\, \tfrac{y}{2}\right)$$</div>
        <div class="fx center">$$T(x,y) = \left(x + y,\;\; 3x + \tfrac{y}{2}\right)$$</div>
        <p><strong>Verificaciones.</strong></p>
        <p>$T(1,0) = (1,\, 3)$ ✓ &nbsp;·&nbsp; $T(0,1) = \left(1,\, \tfrac12\right)$ ✓ &nbsp;·&nbsp; $T(3,4) = (3+4,\; 9+2) = (7,11)$ ✓ coincide con a).</p>
        <div class="note tip"><b class="lbl">La matriz sale de regalo</b>
        Los transformados de la canónica son exactamente las <strong>columnas</strong> de $[T]_C$ ([[u6-matriz-asociada]]):
        $$[T]_C = \begin{pmatrix} 1 & 1 \\ 3 & \tfrac12 \end{pmatrix}$$
        y $T(x,y) = [T]_C\binom{x}{y}$. Cuando los datos están sobre la canónica, escribir la matriz es copiar.</div>`,
        resultado: tex`$T(x,y) = \left(x+y,\; 3x + \frac{y}{2}\right)$, con $[T]_C = \begin{pmatrix} 1 & 1 \\ 3 & \frac12\end{pmatrix}$.` },

      { id: 'tp6-3c', rot: 'c', enunciado: tex`¿Esta transformación lineal es única? Justificar.`,
        conceptos: ['u6-teorema-unicidad'],
        resolucion: tex`<p><strong>Sí, es única.</strong></p>
        <h3>Justificación</h3>
        <p>El conjunto $\{(1,0),\, (0,1)\}$ es la <strong>base canónica</strong> de $\mathbb{R}^2$ — en particular, es una base. Por el [[u6-teorema-unicidad|teorema de existencia y unicidad]]:</p>
        <blockquote style="margin:0 0 13px; padding-left:14px; border-left:3px solid var(--line)">Si $B$ es una <em>base</em> de $V$ y se prescriben arbitrariamente las imágenes de sus vectores, existe una <strong>única</strong> transformación lineal que las realiza.</blockquote>
        <p>Como los dos vectores del enunciado forman base y sus imágenes están dadas, la transformación existe y no hay otra. $\blacksquare$</p>
        <div class="note tip"><b class="lbl">De dónde viene la unicidad, concretamente</b>
        Todo vector se escribe de <strong>una sola manera</strong> en una base ([[u4-teorema-21|Teorema 21]]), así que la cuenta del inciso b) no admite alternativas: $T(x,y)$ queda forzado. Si los datos hubieran sido sobre un conjunto L.I. pero no generador —por ejemplo sólo $T(1,0)$ en $\mathbb{R}^2$— habría <em>infinitas</em> transformaciones, una por cada elección de $T(0,1)$.</div>
        <div class="note"><b class="lbl">Los tres escenarios</b>
        Conviene tenerlos presentes para los ejercicios 7 y 8: los datos pueden estar sobre un conjunto que <strong>(1)</strong> es base ⇒ única; <strong>(2)</strong> es L.I. pero no genera ⇒ existe, no única; <strong>(3)</strong> es L.D. ⇒ hay que verificar compatibilidad, y puede no existir. Ver [[u6-teorema-unicidad]].</div>`,
        resultado: tex`<strong>Sí es única.</strong> $\{(1,0),(0,1)\}$ es base de $\mathbb{R}^2$, y por el teorema de existencia y unicidad las imágenes de una base determinan la transformación por completo.` }
    ]},

  /* ========================= 4 ========================= */
  { id: 'tp6-4', num: '4',
    enunciado: tex`<p>Sea $T: \mathbb{R}^3 \to \mathbb{R}^2$ una transformación lineal tal que
    $$T(1,0,1) = T(0,1,3) = (0,0) \quad\text{y}\quad T(-1,2,4) = v, \text{ con } v \neq 0.$$
    Demostrar que el núcleo de $T$ es un <strong>plano de $\mathbb{R}^3$ que pasa por el origen</strong>. Encontrar su ecuación.</p>`,
    conceptos: ['u6-nucleo-sin-calcular', 'u6-teorema-dimension', 'u4-hallar-generado', 'u1-producto-vectorial'],
    pista: tex`Dos vectores van al nulo, así que están en el núcleo: eso da una cota inferior para su dimensión. El tercero da una cota inferior para la dimensión de la imagen. El teorema de la dimensión cierra las dos.`,
    resolucion: tex`<p>Hay que probar <strong>dos</strong> cosas: que $\dim\operatorname{Nuc}(T) = 2$ (ser plano) y que contiene al origen. La segunda es automática; toda la demostración está en la primera.</p>

    <h3>Paso 1 — Cota inferior para el núcleo</h3>
    <p>Sean $u_1 = (1,0,1)$ y $u_2 = (0,1,3)$. Por dato $T(u_1) = T(u_2) = \vec 0$, así que $u_1, u_2 \in \operatorname{Nuc}(T)$.</p>
    <p>Son <strong>L.I.</strong> (no son múltiplos: la primera componente es $1$ y $0$). Entonces $\operatorname{gen}\{u_1,u_2\} \subseteq \operatorname{Nuc}(T)$ y</p>
    <div class="fx center">$$\dim\operatorname{Nuc}(T) \;\ge\; 2$$</div>

    <h3>Paso 2 — Cota inferior para la imagen</h3>
    <p>Por dato $T(-1,2,4) = v \neq \vec 0$, así que $v \in \operatorname{Im}(T)$ y la imagen contiene un vector no nulo:</p>
    <div class="fx center">$$\dim\operatorname{Im}(T) \;\ge\; 1$$</div>

    <h3>Paso 3 — El teorema de la dimensión fuerza la igualdad</h3>
    <p>Por [[u6-teorema-dimension]]:</p>
    <div class="fx center">$$3 = \dim\operatorname{Nuc}(T) + \dim\operatorname{Im}(T) \;\ge\; 2 + 1 = 3$$</div>
    <p>La desigualdad es en realidad una <strong>igualdad</strong>, así que ninguna de las dos cotas puede ser estricta:</p>
    <div class="fx center">$$\dim\operatorname{Nuc}(T) = 2, \qquad \dim\operatorname{Im}(T) = 1$$</div>
    <p>Y como $\operatorname{gen}\{u_1,u_2\}$ tiene dimensión 2 y está contenido en el núcleo, que también tiene dimensión 2, los dos coinciden ([[u4-teorema-24-25|Teorema 25]]):</p>
    <div class="fx center">$$\operatorname{Nuc}(T) = \operatorname{gen}\{(1,0,1),\;(0,1,3)\}$$</div>
    <p>Un subespacio de dimensión 2 de $\mathbb{R}^3$ es un <strong>plano</strong>, y todo subespacio contiene al vector nulo ([[u4-teorema-4]], observación 1), así que <strong>pasa por el origen</strong>. $\blacksquare$</p>

    <h3>La ecuación del plano</h3>
    <p>Con [[u4-hallar-generado]], el normal es el producto vectorial de los generadores:</p>
    <div class="fx center">$$\vec n = (1,0,1) \times (0,1,3) = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & 0 & 1 \\ 0 & 1 & 3 \end{vmatrix}
    = \breve i(0 - 1) - \breve j(3 - 0) + \breve k(1 - 0) = (-1,\, -3,\, 1)$$</div>
    <p>Cambiando el signo para dejarlo más prolijo:</p>
    <div class="fx center">$$\operatorname{Nuc}(T) = \{(x,y,z) \in \mathbb{R}^3 : x + 3y - z = 0\}$$</div>

    <h3>Verificaciones</h3>
    <p>$u_1 = (1,0,1)$: $\;1 + 0 - 1 = 0$ ✓ &nbsp;·&nbsp; $u_2 = (0,1,3)$: $\;0 + 3 - 3 = 0$ ✓</p>
    <p>Y el tercer vector <strong>no</strong> debe cumplirla, porque no está en el núcleo:</p>
    <div class="fx center">$$(-1,2,4): \quad -1 + 6 - 4 = 1 \neq 0 \;✓$$</div>
    <p>Consistente con $T(-1,2,4) = v \neq \vec 0$.</p>
    <div class="note tip"><b class="lbl">Dato adicional: los tres vectores forman base</b>
    $$\det\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 3 \\ -1 & 2 & 4\end{pmatrix} = 1(4-6) - 0 + 1(0+1) = -2 + 1 = -1 \neq 0$$
    Así que $\{u_1, u_2, (-1,2,4)\}$ es base de $\mathbb{R}^3$, y los datos determinan $T$ <strong>unívocamente</strong> una vez elegido $v$ ([[u6-teorema-unicidad]]). El enunciado deja $v$ libre, así que hay una familia de transformaciones — todas con el mismo núcleo.</div>`,
    resultado: tex`$\operatorname{Nuc}(T) = \operatorname{gen}\{(1,0,1),(0,1,3)\}$, de dimensión 2: un plano por el origen, de ecuación $x + 3y - z = 0$. La demostración combina $\dim\operatorname{Nuc} \ge 2$, $\dim\operatorname{Im} \ge 1$ y $3 = \dim\operatorname{Nuc} + \dim\operatorname{Im}$.` },

  /* ========================= 5 ========================= */
  { id: 'tp6-5', num: '5',
    enunciado: tex`<p>Sea $T: \mathbb{R}^2 \to \mathbb{R}^2$ la transformación lineal tal que $T(1,1) = (4,2)$ y $T(0,1) = (2,1)$.
    Hallar núcleo e imagen, <strong>sin calcular la transformación lineal</strong>. Dar base y dimensión de los mismos. ¿Qué representan geométricamente? Dar las ecuaciones correspondientes.</p>`,
    conceptos: ['u6-nucleo-sin-calcular', 'u6-imagen-generadores', 'u6-teorema-dimension'],
    pista: tex`Compará los dos vectores imagen entre sí antes de hacer cualquier cosa. Y para el núcleo, buscá qué combinación de $(1,1)$ y $(0,1)$ se va al nulo.`,
    resolucion: tex`<h3>Paso 0 — La observación que resuelve el ejercicio</h3>
    <p>Los dos vectores imagen son <strong>paralelos</strong>:</p>
    <div class="fx center">$$T(1,1) = (4,2) = 2\,(2,1) = 2\,T(0,1)$$</div>
    <p>Eso significa que la imagen, aunque esté generada por dos vectores, tiene dimensión 1.</p>

    <h3>Imagen</h3>
    <p>$\{(1,1),\, (0,1)\}$ es base de $\mathbb{R}^2$ (det $\begin{vmatrix} 1 & 0 \\ 1 & 1\end{vmatrix} = 1 \neq 0$), así que por [[u6-imagen-generadores]] la imagen está generada por los transformados:</p>
    <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\{(4,2),\; (2,1)\} = \operatorname{gen}\{(2,1)\}$$</div>
    <div class="fx center">$$\dim\operatorname{Im}(T) = 1, \qquad \text{base } \{(2,1)\}$$</div>
    <p><strong>Geométricamente:</strong> una <strong>recta que pasa por el origen</strong>. Su ecuación: los puntos son $t(2,1) = (2t,\, t)$, de donde $x = 2y$, es decir</p>
    <div class="fx center">$$\operatorname{Im}(T): \;x - 2y = 0$$</div>
    <p>Control: $(2,1) \Rightarrow 2 - 2 = 0$ ✓ y $(4,2) \Rightarrow 4 - 4 = 0$ ✓</p>

    <h3>Núcleo</h3>
    <p>Por el [[u6-teorema-dimension|teorema de la dimensión]]:</p>
    <div class="fx center">$$2 = \dim\operatorname{Nuc}(T) + 1 \;\Longrightarrow\; \dim\operatorname{Nuc}(T) = 1$$</div>
    <p>Para encontrarlo <em>sin calcular $T$</em>, se busca qué combinación lineal de los vectores dados se va al nulo. Por linealidad ([[u6-propiedades-tl]]):</p>
    <div class="fx center">$$T\bigl(\alpha(1,1) + \beta(0,1)\bigr) = \alpha\,T(1,1) + \beta\,T(0,1) = \alpha(4,2) + \beta(2,1) = (4\alpha + 2\beta,\;\; 2\alpha + \beta)$$</div>
    <p>Igualando a $(0,0)$:</p>
    <div class="fx center">$$\begin{cases} 4\alpha + 2\beta = 0 \\ 2\alpha + \beta = 0 \end{cases} \;\Longrightarrow\; \beta = -2\alpha \quad\text{(las dos ecuaciones dicen lo mismo)}$$</div>
    <p>Que las dos ecuaciones coincidan es otra manifestación de que las imágenes eran paralelas. Con $\alpha = 1$, $\beta = -2$, el vector del núcleo es</p>
    <div class="fx center">$$1\cdot(1,1) - 2\cdot(0,1) = (1,\; 1-2) = (1,\, -1)$$</div>
    <div class="fx center">$$\operatorname{Nuc}(T) = \operatorname{gen}\{(1,-1)\}, \qquad \dim = 1, \qquad \text{base } \{(1,-1)\}$$</div>
    <p><strong>Geométricamente:</strong> otra <strong>recta por el origen</strong>, de ecuación</p>
    <div class="fx center">$$\operatorname{Nuc}(T): \;x + y = 0$$</div>
    <p><strong>Verificación</strong> (sin usar la expresión de $T$):</p>
    <div class="fx center">$$T(1,-1) = T\bigl((1,1) - 2(0,1)\bigr) = (4,2) - 2(2,1) = (0,0) \;✓$$</div>

    <h3>Resumen</h3>
    <div class="tbl"><table>
      <thead><tr><th></th><th>Base</th><th>$\dim$</th><th>Geometría</th><th>Ecuación</th></tr></thead>
      <tbody>
        <tr><td>$\operatorname{Nuc}(T)$</td><td>$\{(1,-1)\}$</td><td>1</td><td>recta por el origen</td><td>$x + y = 0$</td></tr>
        <tr><td>$\operatorname{Im}(T)$</td><td>$\{(2,1)\}$</td><td>1</td><td>recta por el origen</td><td>$x - 2y = 0$</td></tr>
      </tbody>
    </table></div>
    <p>Control: $2 = 1 + 1$ ✓. $T$ no es inyectiva ni sobreyectiva.</p>
    <div class="note tip"><b class="lbl">Qué hace esta transformación</b>
    Aplasta el plano sobre la recta $x = 2y$, colapsando la recta $x + y = 0$. Es una proyección oblicua: a diferencia del ejercicio 2, el núcleo <strong>no</strong> es perpendicular a la imagen — sus directores $(1,-1)$ y $(2,1)$ dan producto escalar $2 - 1 = 1 \neq 0$.
    <p>Si se quisiera verificar con la expresión explícita: resolviendo, $T(x,y) = (2x + 2y,\; x+y)$, y efectivamente $T(1,-1) = (0,0)$ y toda imagen es múltiplo de $(2,1)$. Pero el enunciado pide hacerlo sin eso, y el camino de arriba es más corto.</p></div>`,
    resultado: tex`$\operatorname{Nuc}(T) = \operatorname{gen}\{(1,-1)\}$, recta $x+y=0$ ($\dim 1$); $\;\operatorname{Im}(T) = \operatorname{gen}\{(2,1)\}$, recta $x-2y=0$ ($\dim 1$). La clave: $T(1,1) = 2\,T(0,1)$, así que las imágenes son paralelas.` },
  /* ========================= 6 ========================= */
  { id: 'tp6-6', num: '6',
    enunciado: tex`<p>Dada la transformación lineal $T: M_2(\mathbb{R}) \to M_2(\mathbb{R})$ tal que $T(A) = A\cdot B - B \cdot A$, con $B = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$.
    Hallar núcleo e imagen de $T$, dar dimensión y base de cada uno de ellos.</p>`,
    conceptos: ['u6-nucleo-imagen', 'u6-teorema-dimension', 'u4-hallar-base', 'u4-dimension'],
    pista: tex`Calculá $T(A)$ para $A = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$ genérica. Vas a ver que el resultado depende de pocas combinaciones de $a,b,c,d$.`,
    resolucion: tex`<h3>Paso 1 — La fórmula explícita de $T$</h3>
    <p>Con $A = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$ y $B = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$:</p>
    <div class="fx center">$$A\,B = \begin{pmatrix} a & b \\ c & d\end{pmatrix}\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} = \begin{pmatrix} 0 & a \\ 0 & c \end{pmatrix}$$</div>
    <div class="fx center">$$B\,A = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}\begin{pmatrix} a & b \\ c & d\end{pmatrix} = \begin{pmatrix} c & d \\ 0 & 0 \end{pmatrix}$$</div>
    <div class="fx center">$$T(A) = A B - B A = \begin{pmatrix} -c & a - d \\ 0 & c \end{pmatrix}$$</div>
    <div class="note"><b class="lbl">Lo que revela la fórmula</b> La salida depende sólo de <strong>dos</strong> cantidades: $c$ y $a - d$. La variable $b$ desaparece por completo, y $a$ y $d$ entran únicamente por su diferencia. Eso ya anticipa que el núcleo tendrá dimensión 2.</div>

    <h3>Paso 2 — Núcleo</h3>
    <p>$T(A) = 0$ exige que las cuatro entradas se anulen:</p>
    <div class="fx center">$$\begin{cases} -c = 0 \\ a - d = 0 \\ 0 = 0 \\ c = 0 \end{cases} \;\Longrightarrow\; c = 0, \quad a = d, \quad b \text{ libre}$$</div>
    <p>Las matrices del núcleo son $\begin{pmatrix} a & b \\ 0 & a\end{pmatrix}$, con $a$ y $b$ libres. Dando valor 1 a cada parámetro ([[u4-hallar-base]]):</p>
    <div class="fx center">$$\operatorname{Nuc}(T) = \operatorname{gen}\left\{ \begin{pmatrix} 1 & 0 \\ 0 & 1\end{pmatrix},\;\; \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} \right\}, \qquad \dim\operatorname{Nuc}(T) = 2$$</div>
    <p>Es decir, la base es $\{I,\; B\}$ — la identidad y la propia matriz $B$ del enunciado.</p>
    <div class="note tip"><b class="lbl">Por qué tiene sentido</b>
    $T(A) = AB - BA$ mide cuánto <strong>no conmutan</strong> $A$ y $B$ (es el «conmutador»). El núcleo son entonces las matrices que <em>sí</em> conmutan con $B$. Y es natural que $I$ conmute con todo, y que $B$ conmute consigo misma: $BB - BB = 0$. Reconocer eso permite anticipar dos elementos del núcleo antes de calcular.</div>

    <h3>Paso 3 — Imagen</h3>
    <p>Escribiendo $s = -c$ y $t = a-d$, que recorren $\mathbb{R}$ independientemente, la salida genérica es</p>
    <div class="fx center">$$T(A) = \begin{pmatrix} s & t \\ 0 & -s \end{pmatrix}$$</div>
    <p>Hay dos parámetros libres, y dando valor 1 a cada uno:</p>
    <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\left\{ \begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix},\;\; \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} \right\}, \qquad \dim\operatorname{Im}(T) = 2$$</div>
    <p>En ecuaciones: $\;\operatorname{Im}(T) = \left\{ \begin{pmatrix} x & y \\ z & t\end{pmatrix} : z = 0 \;\wedge\; x + t = 0 \right\}$, o sea las matrices <strong>triangulares superiores de traza nula</strong>.</p>

    <h3>Verificación por los transformados de la base canónica</h3>
    <p>Con $E_{ij}$ la matriz canónica con un 1 en la posición $(i,j)$, y usando la fórmula del paso 1:</p>
    <div class="tbl"><table>
      <thead><tr><th>$A$</th><th>$a$</th><th>$b$</th><th>$c$</th><th>$d$</th><th>$T(A) = \begin{pmatrix} -c & a-d \\ 0 & c\end{pmatrix}$</th></tr></thead>
      <tbody>
        <tr><td>$E_{11}$</td><td>1</td><td>0</td><td>0</td><td>0</td><td>$\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$</td></tr>
        <tr><td>$E_{12}$</td><td>0</td><td>1</td><td>0</td><td>0</td><td>$\begin{pmatrix} 0 & 0 \\ 0 & 0\end{pmatrix}$</td></tr>
        <tr><td>$E_{21}$</td><td>0</td><td>0</td><td>1</td><td>0</td><td>$\begin{pmatrix} -1 & 0 \\ 0 & 1\end{pmatrix}$</td></tr>
        <tr><td>$E_{22}$</td><td>0</td><td>0</td><td>0</td><td>1</td><td>$\begin{pmatrix} 0 & -1 \\ 0 & 0\end{pmatrix}$</td></tr>
      </tbody>
    </table></div>
    <p>Por [[u6-imagen-generadores]], la imagen está generada por esas cuatro. Descartando la nula y las repetidas por signo, quedan dos independientes:</p>
    <div class="fx center">$$\operatorname{Im}(T) = \operatorname{gen}\left\{\begin{pmatrix} 0&1\\0&0\end{pmatrix},\; \begin{pmatrix} -1&0\\0&1\end{pmatrix}\right\}$$</div>
    <p>que es el mismo subespacio hallado arriba (el segundo generador es el opuesto) ✓</p>
    <p>Y se ve que $T(E_{12}) = 0$, confirmando $E_{12} = B \in \operatorname{Nuc}(T)$ ✓</p>

    <h3>Control por el teorema de la dimensión</h3>
    <div class="fx center">$$\dim M_2(\mathbb{R}) = 4 = \underbrace{2}_{\dim\operatorname{Nuc}} + \underbrace{2}_{\dim\operatorname{Im}} \;✓$$</div>
    <p>$T$ no es inyectiva ni sobreyectiva.</p>
    <div class="note"><b class="lbl">Una curiosidad útil</b> $\operatorname{Nuc}(T)$ e $\operatorname{Im}(T)$ <strong>comparten</strong> el elemento $B = \begin{pmatrix}0&1\\0&0\end{pmatrix}$. No hay contradicción: el núcleo vive en el espacio de partida y la imagen en el de llegada, y acá ambos son $M_2(\mathbb{R})$, así que pueden intersecarse. Confundirlos es el error que advierte [[u6-nucleo-imagen]].</div>`,
    resultado: tex`$T(A) = \begin{pmatrix} -c & a-d \\ 0 & c\end{pmatrix}$. &nbsp; $\operatorname{Nuc}(T) = \operatorname{gen}\{I,\, B\}$, $\dim 2$ (las matrices que conmutan con $B$). &nbsp; $\operatorname{Im}(T) = \operatorname{gen}\left\{\begin{pmatrix}1&0\\0&-1\end{pmatrix}, \begin{pmatrix}0&1\\0&0\end{pmatrix}\right\}$, $\dim 2$ (triangulares superiores de traza nula). Control: $4 = 2+2$.` },

  /* ========================= 7 ========================= */
  { id: 'tp6-7', num: '7',
    enunciado: tex`<p>Hallar, <strong>si es posible</strong>, $a, b, c \in \mathbb{R}$ para que exista una transformación lineal $T: \mathbb{R}^3 \to P_2$ tal que
    $$T(1,0,-1) = bx^2 + c, \quad T(2,-2,0) = 1 + cx, \quad T(1,1,-1) = a + bx, \quad T(1,3,-3) = c + ax.$$
    En caso de ser posible, para los valores de $a$, $b$ y $c$ encontrados indicar cómo se calcularía la transformación lineal.</p>`,
    conceptos: ['u6-teorema-unicidad', 'u4-li-ld', 'u6-hallar-expresion'],
    pista: tex`Son cuatro vectores en $\mathbb{R}^3$: forzosamente L.D. Averiguá si tres de ellos forman base, escribí el cuarto en función de esos tres, y después <strong>imponé la misma relación a las imágenes</strong> — eso es lo que exige la linealidad.`,
    resolucion: tex`<p>Cuatro vectores en $\mathbb{R}^3$ son necesariamente linealmente dependientes ([[u4-teorema-13|Teorema 13]]). Estamos entonces en el <strong>escenario 3</strong> de [[u6-teorema-unicidad]]: hay que verificar <em>compatibilidad</em>, y puede no haberla.</p>

    <h3>Paso 1 — ¿Tres de ellos forman base?</h3>
    <p>Sean $u_1 = (1,0,-1)$, $u_2 = (2,-2,0)$, $u_3 = (1,1,-1)$, $u_4 = (1,3,-3)$.</p>
    <div class="fx center">$$\det \begin{pmatrix} 1 & 0 & -1 \\ 2 & -2 & 0 \\ 1 & 1 & -1 \end{pmatrix}
    = 1\,(2 - 0) - 0\,(-2-0) + (-1)(2+2) = 2 - 4 = -2 \neq 0$$</div>
    <p>$\{u_1, u_2, u_3\}$ es <strong>base</strong> de $\mathbb{R}^3$. Por lo tanto $u_4$ es combinación lineal de los tres, y esa relación es la única restricción.</p>

    <h3>Paso 2 — La relación de dependencia</h3>
    <p>$u_4 = \alpha u_1 + \beta u_2 + \gamma u_3$:</p>
    <div class="fx center">$$\begin{cases} \alpha + 2\beta + \gamma = 1 \\ -2\beta + \gamma = 3 \\ -\alpha - \gamma = -3 \end{cases}$$</div>
    <p>De la 3.ª: $\alpha = 3 - \gamma$. Sustituyendo en la 1.ª: $\;3 - \gamma + 2\beta + \gamma = 1 \Rightarrow 2\beta = -2 \Rightarrow \beta = -1$. Y de la 2.ª: $\;2 + \gamma = 3 \Rightarrow \gamma = 1$, luego $\alpha = 2$.</p>
    <div class="fx center">$$u_4 = 2u_1 - u_2 + u_3$$</div>
    <p>Control: $\;2(1,0,-1) - (2,-2,0) + (1,1,-1) = (2,0,-2) + (-2,2,0) + (1,1,-1) = (1,3,-3)$ ✓</p>

    <h3>Paso 3 — Imponer la relación a las imágenes</h3>
    <p>La linealidad <strong>obliga</strong> a que valga la misma relación entre los transformados:</p>
    <div class="fx center">$$T(u_4) = 2\,T(u_1) - T(u_2) + T(u_3)$$</div>
    <p>Miembro izquierdo: $\;c + ax$. Miembro derecho:</p>
    <div class="fx center">$$2(bx^2 + c) - (1 + cx) + (a + bx) = 2b\,x^2 + (b - c)\,x + (2c - 1 + a)$$</div>
    <p>Igualando coeficiente a coeficiente:</p>
    <div class="tbl"><table>
      <thead><tr><th>Potencia</th><th>Izquierda</th><th>Derecha</th><th>Ecuación</th></tr></thead>
      <tbody>
        <tr><td>$x^2$</td><td>$0$</td><td>$2b$</td><td>$2b = 0 \Rightarrow b = 0$</td></tr>
        <tr><td>$x^1$</td><td>$a$</td><td>$b - c$</td><td>$a = b - c$</td></tr>
        <tr><td>$x^0$</td><td>$c$</td><td>$2c - 1 + a$</td><td>$c = 2c - 1 + a \Rightarrow a + c = 1$</td></tr>
      </tbody>
    </table></div>

    <h3>Paso 4 — El sistema es incompatible</h3>
    <p>De la 1.ª, $b = 0$. Sustituyendo en la 2.ª:</p>
    <div class="fx center">$$a = 0 - c = -c \;\Longrightarrow\; a + c = 0$$</div>
    <p>Pero la 3.ª exige $a + c = 1$. Entonces</p>
    <div class="fx center">$$0 = 1 \qquad \textbf{(absurdo)}$$</div>
    <div class="note warn"><b class="lbl">No es posible</b>
    <strong>No existen valores de $a$, $b$ y $c$</strong> que hagan posible la transformación. La condición de compatibilidad que impone la linealidad es contradictoria: pide simultáneamente $a + c = 0$ y $a + c = 1$.</div>

    <h3>Cómo <em>se calcularía</em> la transformación, si hubiera sido posible</h3>
    <p>El enunciado pregunta esto para el caso favorable, y conviene responderlo igual porque es la parte conceptual:</p>
    <ol class="pasos">
      <li><span class="ptit">Descartar el dato redundante.</span> Como $\{u_1,u_2,u_3\}$ es base y $u_4$ es combinación de ellos, el cuarto dato <strong>no aporta información nueva</strong>: una vez verificada la compatibilidad, se lo ignora.</li>
      <li><span class="ptit">Aplicar [[u6-hallar-expresion]] sobre la base.</span> Se calcula $[(x,y,z)]_{\{u_1,u_2,u_3\}}$ resolviendo el sistema con $x,y,z$ genéricos, y después
        $$T(x,y,z) = \alpha\,T(u_1) + \beta\,T(u_2) + \gamma\,T(u_3)$$
        con los $\alpha,\beta,\gamma$ hallados.</li>
      <li><span class="ptit">La transformación sería única,</span> porque los datos están sobre una base ([[u6-teorema-unicidad]], escenario 1).</li>
    </ol>
    <div class="note tip"><b class="lbl">Qué evalúa este ejercicio</b>
    Que se entienda que la linealidad <strong>no es gratis</strong>: si los vectores del dominio tienen una relación de dependencia, las imágenes tienen que respetarla. El ejercicio está armado para que esa condición falle, y la respuesta correcta es exhibir la contradicción — no «forzar» valores.
    <p>Conviene volver a leer los coeficientes del PDF antes de dar el ejercicio por cerrado: en un ítem así, cambiar un signo o un número cambia la respuesta de «imposible» a un valor concreto.</p></div>`,
    resultado: tex`<strong>No es posible.</strong> $\{u_1,u_2,u_3\}$ es base ($\det = -2$) y $u_4 = 2u_1 - u_2 + u_3$. La linealidad exige $T(u_4) = 2T(u_1) - T(u_2) + T(u_3)$, lo que da $b = 0$, $a = -c$ y $a + c = 1$ — es decir $0 = 1$, absurdo.` },

  /* ========================= 8 ========================= */
  { id: 'tp6-8', num: '8',
    enunciado: tex`<p><strong>Responder justificando la respuesta:</strong></p>
    <div class="note tip"><b class="lbl">Dos herramientas, y conviene elegir bien</b>
    Si el conjunto del <em>dominio</em> es L.D., se chequea <strong>compatibilidad</strong> (como en el ej. 7). Si la pregunta es sobre dimensiones —inyectividad, sobreyectividad, cuántos vectores caben en la imagen— se responde con el <strong>teorema de la dimensión</strong>, sin construir nada.</div>`,
    incisos: [

      { id: 'tp6-8a', rot: 'a', enunciado: tex`¿Existe alguna transformación lineal $f: \mathbb{R}^2 \to \mathbb{R}^3$ que verifique $f(1,0) = (3,0,3)$, $f(1,1) = (-1,4,2)$ y $f(1,-2) = (2,-8,5)$?`,
        conceptos: ['u6-teorema-unicidad', 'u4-li-ld'],
        pista: tex`Tres vectores en $\mathbb{R}^2$ son L.D.: buscá la relación y verificá si las imágenes la respetan.`,
        resolucion: tex`<p><strong>No existe.</strong></p>
        <h3>Paso 1 — La relación de dependencia en el dominio</h3>
        <p>Tres vectores en $\mathbb{R}^2$ son L.D. Los dos primeros, $(1,0)$ y $(1,1)$, son L.I. (det $= 1$), así que forman base y el tercero se escribe en función de ellos:</p>
        <div class="fx center">$$(1,-2) = \alpha(1,0) + \beta(1,1) \;\Longrightarrow\; \begin{cases} \alpha + \beta = 1 \\ \beta = -2\end{cases} \;\Longrightarrow\; \alpha = 3,\;\; \beta = -2$$</div>
        <div class="fx center">$$(1,-2) = 3\,(1,0) - 2\,(1,1)$$</div>
        <p>Control: $\;3(1,0) - 2(1,1) = (3,0) - (2,2) = (1,-2)$ ✓</p>

        <h3>Paso 2 — Lo que la linealidad obliga</h3>
        <div class="fx center">$$f(1,-2) = 3\,f(1,0) - 2\,f(1,1) = 3(3,0,3) - 2(-1,4,2)$$</div>
        <div class="fx center">$$= (9,0,9) - (-2,8,4) = (11,\; -8,\; 5)$$</div>

        <h3>Paso 3 — Comparar con el dato</h3>
        <div class="fx center">$$\text{obligado: } (11,-8,5) \qquad\text{vs.}\qquad \text{dato: } (2,-8,5)$$</div>
        <div class="note warn"><b class="lbl">Incompatible</b> Coinciden en la 2.ª y la 3.ª componente pero difieren en la <strong>primera</strong>: $11 \neq 2$. Los datos violan la relación que la linealidad impone, así que <strong>no existe</strong> ninguna $f$ lineal con esos tres valores.</div>
        <div class="note tip"><b class="lbl">Si el tercer dato hubiera sido $(11,-8,5)$</b>
        Entonces sí existiría, y además sería <strong>única</strong>: los dos primeros vectores forman base de $\mathbb{R}^2$, y el tercer dato sería redundante pero consistente ([[u6-teorema-unicidad]], escenario 1). La $f$ sería $f(x,y) = x\,f(1,0) + \dots$ calculada con [[u6-hallar-expresion]].</div>`,
        resultado: tex`<strong>No existe.</strong> $(1,-2) = 3(1,0) - 2(1,1)$, así que la linealidad obliga a $f(1,-2) = (11,-8,5)$, pero el dato dice $(2,-8,5)$.` },

      { id: 'tp6-8b', rot: 'b', enunciado: tex`¿Existe alguna T.L. <strong>inyectiva</strong> $T: \mathbb{R}^3 \to \mathbb{R}^2$? <br><small class="muted">(En el PDF este inciso aparece tachado; conviene resolverlo igual, porque es un verdadero/falso recurrente en los finales.)</small>`,
        conceptos: ['u6-inyectiva-sobreyectiva', 'u6-teorema-dimension'],
        resolucion: tex`<p><strong>No existe.</strong> Y la razón vale para <em>toda</em> transformación lineal de $\mathbb{R}^3$ en $\mathbb{R}^2$, sin importar cuál sea.</p>
        <h3>Justificación</h3>
        <p>Sea $T: \mathbb{R}^3 \to \mathbb{R}^2$ lineal cualquiera. La imagen es un subespacio de $\mathbb{R}^2$, así que</p>
        <div class="fx center">$$\dim\operatorname{Im}(T) \;\le\; \dim\mathbb{R}^2 = 2$$</div>
        <p>Por el [[u6-teorema-dimension|teorema de la dimensión]]:</p>
        <div class="fx center">$$\dim\operatorname{Nuc}(T) = 3 - \dim\operatorname{Im}(T) \;\ge\; 3 - 2 = 1 \;>\; 0$$</div>
        <p>Luego $\operatorname{Nuc}(T) \neq \{\vec 0\}$, y por [[u6-inyectiva-sobreyectiva]] eso significa que $T$ <strong>no es inyectiva</strong>. $\blacksquare$</p>
        <div class="note tip"><b class="lbl">La regla general</b>
        <ul>
          <li>Si $\dim V > \dim W$, <strong>no hay</strong> transformaciones inyectivas $V \to W$.</li>
          <li>Si $\dim V < \dim W$, <strong>no hay</strong> transformaciones sobreyectivas $V \to W$.</li>
          <li>Hay isomorfismos sólo si $\dim V = \dim W$.</li>
        </ul>
        Intuitivamente: no se puede meter $\mathbb{R}^3$ dentro de $\mathbb{R}^2$ sin aplastar algo. Al menos una dirección tiene que colapsar, y esa dirección es el núcleo.</div>`,
        resultado: tex`<strong>No existe.</strong> $\dim\operatorname{Im}(T) \le 2$, así que $\dim\operatorname{Nuc}(T) \ge 3-2 = 1 > 0$: el núcleo nunca es trivial y $T$ nunca es inyectiva.` },

      { id: 'tp6-8c', rot: 'c', enunciado: tex`Sean $v_1 = (1,0,1,0)$, $v_2 = (1,1,1,0)$ y $v_3 = (1,1,1,1)$. ¿Existe alguna T.L. $f: \mathbb{R}^2 \to \mathbb{R}^4$ tal que $v_1, v_2, v_3 \in \operatorname{Im}(f)$?`,
        conceptos: ['u6-teorema-dimension', 'u6-imagen-generadores', 'u4-li-ld'],
        pista: tex`¿Cuánto puede medir como máximo la imagen de una transformación que sale de $\mathbb{R}^2$? Y después, ¿cuántas direcciones independientes hay entre los tres vectores?`,
        resolucion: tex`<p><strong>No existe.</strong></p>
        <h3>Paso 1 — Cota superior para la dimensión de la imagen</h3>
        <p>Por el [[u6-teorema-dimension|teorema de la dimensión]] aplicado a $f: \mathbb{R}^2 \to \mathbb{R}^4$:</p>
        <div class="fx center">$$2 = \dim\operatorname{Nuc}(f) + \dim\operatorname{Im}(f) \;\Longrightarrow\; \dim\operatorname{Im}(f) \;\le\; 2$$</div>
        <p>Sale de $\mathbb{R}^2$, así que su imagen no puede tener dimensión mayor que 2, por grande que sea el codominio.</p>

        <h3>Paso 2 — Los tres vectores son L.I.</h3>
        <p>Planteando $\alpha v_1 + \beta v_2 + \gamma v_3 = \vec 0$ componente a componente:</p>
        <div class="fx center">$$\begin{cases} (1):\; \alpha + \beta + \gamma = 0 \\ (2):\; \beta + \gamma = 0 \\ (3):\; \alpha + \beta + \gamma = 0 \\ (4):\; \gamma = 0 \end{cases}$$</div>
        <p>De (4): $\gamma = 0$. De (2): $\beta = 0$. De (1): $\alpha = 0$. Sólo la solución trivial ⇒ <strong>L.I.</strong> ([[u4-li-ld]])</p>

        <h3>Paso 3 — La contradicción</h3>
        <p>Si $v_1, v_2, v_3 \in \operatorname{Im}(f)$, entonces $\operatorname{gen}\{v_1,v_2,v_3\} \subseteq \operatorname{Im}(f)$, porque la imagen es un subespacio ([[u6-nucleo-imagen-subespacios]]). Siendo los tres L.I.:</p>
        <div class="fx center">$$\dim\operatorname{Im}(f) \;\ge\; 3 \;>\; 2 \;\ge\; \dim\operatorname{Im}(f)$$</div>
        <p>Absurdo. Luego no existe tal $f$. $\blacksquare$</p>
        <div class="note tip"><b class="lbl">La idea en una línea</b>
        <strong>La imagen nunca puede tener dimensión mayor que el espacio de partida.</strong> Una transformación lineal puede aplastar, pero no «crear» direcciones: sale de un plano, así que su imagen es a lo sumo un plano, aunque el codominio sea $\mathbb{R}^4$ o $\mathbb{R}^{100}$.
        <p>Si en lugar de tres vectores L.I. el enunciado hubiera dado dos (o tres con uno dependiente de los otros), <strong>sí</strong> existiría: bastaría definir $f(e_1) = v_1$, $f(e_2) = v_2$.</p></div>`,
        resultado: tex`<strong>No existe.</strong> $\dim\operatorname{Im}(f) \le \dim\mathbb{R}^2 = 2$, pero $v_1,v_2,v_3$ son L.I. y exigirían $\dim\operatorname{Im}(f) \ge 3$.` },

      { id: 'tp6-8d', rot: 'd', enunciado: tex`¿Existe una <strong>única</strong> transformación lineal $T: \mathbb{R}^3 \to \mathbb{R}^2$ tal que $T(1,2,1) = (3,5)$, $T(-1,-1,0) = (-2,-2)$ y $T(1,3,2) = (4,8)$? En caso de ser posible, hallar una T.L.</p>`,
        conceptos: ['u6-teorema-unicidad', 'u4-li-ld', 'u6-hallar-expresion'],
        pista: tex`Dos preguntas en una: ¿existe? y ¿es única? Empezá por el determinante de los tres vectores del dominio.`,
        resolucion: tex`<p><strong>Existe, pero NO es única.</strong> Las dos respuestas salen del mismo cálculo.</p>
        <h3>Paso 1 — ¿Son base los tres vectores del dominio?</h3>
        <div class="fx center">$$\det \begin{pmatrix} 1 & 2 & 1 \\ -1 & -1 & 0 \\ 1 & 3 & 2 \end{pmatrix}
        = 1(-2 - 0) - 2(-2 - 0) + 1(-3 + 1) = -2 + 4 - 2 = 0$$</div>
        <p>$\det = 0$ ⇒ son <strong>L.D.</strong> No forman base, así que no se puede invocar la unicidad directamente: hay que verificar compatibilidad primero.</p>

        <h3>Paso 2 — La relación de dependencia</h3>
        <p>Con $u_1 = (1,2,1)$, $u_2 = (-1,-1,0)$, $u_3 = (1,3,2)$, se busca $u_3 = \alpha u_1 + \beta u_2$:</p>
        <div class="fx center">$$\begin{cases} \alpha - \beta = 1 \\ 2\alpha - \beta = 3 \\ \alpha = 2 \end{cases}$$</div>
        <p>De la 3.ª, $\alpha = 2$; de la 1.ª, $\beta = 1$; y la 2.ª controla: $\;4 - 1 = 3$ ✓</p>
        <div class="fx center">$$u_3 = 2\,u_1 + u_2$$</div>
        <p>Control: $\;2(1,2,1) + (-1,-1,0) = (2,4,2) + (-1,-1,0) = (1,3,2)$ ✓</p>

        <h3>Paso 3 — Compatibilidad: ¿las imágenes respetan la relación?</h3>
        <div class="fx center">$$2\,T(u_1) + T(u_2) = 2(3,5) + (-2,-2) = (6,10) + (-2,-2) = (4,\, 8)$$</div>
        <p>Y el dato dice $T(1,3,2) = (4,8)$. <strong>Coinciden</strong> ✓ Los datos son <strong>compatibles</strong>, así que $T$ <strong>existe</strong>.</p>

        <h3>Paso 4 — ¿Por qué no es única?</h3>
        <p>$u_1$ y $u_2$ son L.I. (no son múltiplos) pero generan sólo un subespacio de dimensión <strong>2</strong> de $\mathbb{R}^3$. Los datos determinan $T$ únicamente <em>sobre ese plano</em>; la imagen de cualquier vector fuera de él queda <strong>libre</strong>.</p>
        <p>Es el escenario 2 de [[u6-teorema-unicidad]]: existe, pero hay infinitas — una por cada elección de la imagen del tercer vector de una base.</p>

        <h3>Paso 5 — Construir una</h3>
        <p>El plano $\operatorname{gen}\{u_1, u_2\}$ tiene normal</p>
        <div class="fx center">$$(1,2,1) \times (-1,-1,0) = \breve i(0+1) - \breve j(0+1) + \breve k(-1+2) = (1,\, -1,\, 1)$$</div>
        <p>es decir $\;x - y + z = 0$. Controles: $u_1 \Rightarrow 1-2+1 = 0$ ✓, $u_2 \Rightarrow -1+1+0 = 0$ ✓.</p>
        <p>Se elige un vector fuera del plano, por ejemplo $e_1 = (1,0,0)$ (da $1 \neq 0$), y se le asigna una imagen arbitraria. La elección más cómoda es $T(1,0,0) = (0,0)$.</p>
        <p>Con $B = \{u_1,\, u_2,\, e_1\}$ como base, se aplica [[u6-hallar-expresion]]. Coordenadas genéricas: $(x,y,z) = \alpha u_1 + \beta u_2 + \gamma e_1$ da</p>
        <div class="fx center">$$\begin{cases} \alpha - \beta + \gamma = x \\ 2\alpha - \beta = y \\ \alpha = z \end{cases}
        \;\Longrightarrow\; \alpha = z, \quad \beta = 2z - y, \quad \gamma = x - y + z$$</div>
        <p>Y entonces</p>
        <div class="fx center">$$T(x,y,z) = z\,(3,5) + (2z-y)\,(-2,-2) + (x-y+z)\,(0,0)$$</div>
        <div class="fx center">$$= (3z,\, 5z) + (2y - 4z,\;\; 2y - 4z) = \bigl(2y - z,\;\; 2y + z\bigr)$$</div>
        <div class="fx center">$$\boxed{T(x,y,z) = (2y - z,\;\; 2y + z)}$$</div>

        <h3>Verificación de los tres datos</h3>
        <p>$T(1,2,1) = (4-1,\; 4+1) = (3,5)$ ✓ &nbsp;·&nbsp; $T(-1,-1,0) = (-2-0,\; -2+0) = (-2,-2)$ ✓ &nbsp;·&nbsp; $T(1,3,2) = (6-2,\; 6+2) = (4,8)$ ✓</p>
        <div class="note tip"><b class="lbl">Otras soluciones</b>
        Eligiendo $T(1,0,0) = (1,0)$ en lugar de $(0,0)$ se obtiene otra transformación lineal, también válida, que difiere de la anterior en $(x-y+z)(1,0)$. Cualquier elección sirve: eso <em>es</em> la no unicidad.
        <p>Notar que la $T$ hallada no depende de $x$ — consecuencia de haber elegido $T(e_1) = \vec 0$, lo que mete $e_1$ en el núcleo.</p></div>`,
        resultado: tex`<strong>Existe pero no es única.</strong> Los tres vectores son L.D. ($\det = 0$) con $u_3 = 2u_1 + u_2$, y las imágenes respetan la relación ($2(3,5)+(-2,-2) = (4,8)$ ✓). Una solución: $T(x,y,z) = (2y-z,\; 2y+z)$.` }
    ]},

  /* ========================= 9 ========================= */
  { id: 'tp6-9', num: '9',
    enunciado: tex`<p>Hallar una transformación lineal que verifique las condiciones dadas. Indicar si es única.</p>
    <div class="note tip"><b class="lbl">El método, igual en los cuatro incisos</b>
    <ol>
      <li><strong>Usar el teorema de la dimensión</strong> para deducir las dimensiones que debe tener núcleo e imagen, y verificar que sean compatibles con los espacios dados.</li>
      <li><strong>Construir sobre una base:</strong> se define $f$ sobre una base del espacio de partida, eligiendo las imágenes para que el núcleo o la imagen salgan los pedidos.</li>
      <li><strong>Ninguna es única:</strong> siempre hay libertad de elección, y conviene decirlo explícitamente.</li>
    </ol></div>`,
    incisos: [

      { id: 'tp6-9a', rot: 'a', enunciado: tex`$f: \mathbb{R}^4 \to \mathbb{R}^3$ tal que $\dim(N(f)) = \dim(\operatorname{Im}(f))$.`,
        conceptos: ['u6-teorema-dimension', 'u6-teorema-unicidad'],
        pista: tex`El teorema de la dimensión te da una ecuación con una sola incógnita.`,
        resolucion: tex`<h3>Paso 1 — Qué dimensión deben tener</h3>
        <p>Llamando $d$ al valor común, por [[u6-teorema-dimension]]:</p>
        <div class="fx center">$$4 = \dim N(f) + \dim\operatorname{Im}(f) = d + d = 2d \;\Longrightarrow\; d = 2$$</div>
        <p>Hay que construir $f$ con $\dim N(f) = \dim\operatorname{Im}(f) = 2$. Es factible: la imagen debe tener dimensión 2 y vive en $\mathbb{R}^3$, así que $2 \le 3$ ✓</p>

        <h3>Paso 2 — Construcción</h3>
        <p>La más simple: que las dos primeras coordenadas pasen y las otras dos se anulen.</p>
        <div class="fx center">$$f(x,y,z,t) = (x,\; y,\; 0)$$</div>
        <p><strong>Núcleo:</strong> $f(x,y,z,t) = (0,0,0)$ exige $x = 0$, $y = 0$, con $z,t$ libres:</p>
        <div class="fx center">$$N(f) = \operatorname{gen}\{(0,0,1,0),\; (0,0,0,1)\}, \qquad \dim = 2 \;✓$$</div>
        <p><strong>Imagen:</strong> transformando la canónica de $\mathbb{R}^4$: $\;f(e_1) = (1,0,0)$, $f(e_2) = (0,1,0)$, $f(e_3) = f(e_4) = (0,0,0)$.</p>
        <div class="fx center">$$\operatorname{Im}(f) = \operatorname{gen}\{(1,0,0),\; (0,1,0)\}, \qquad \dim = 2 \;✓$$</div>
        <p>Control: $\;4 = 2 + 2$ ✓</p>
        <div class="note"><b class="lbl">No es única</b> Hay infinitas. Por ejemplo $f(x,y,z,t) = (z,\, t,\, 0)$ o $f(x,y,z,t) = (x+y,\; z,\; 0)$ también cumplen (en el último: núcleo $\{x+y=0,\, z=0\}$ de dimensión 2, imagen $\operatorname{gen}\{(1,0,0),(0,1,0)\}$ de dimensión 2). La condición fija sólo dos dimensiones, no la transformación.</div>`,
        resultado: tex`$f(x,y,z,t) = (x,\, y,\, 0)$, con $\dim N(f) = \dim\operatorname{Im}(f) = 2$ (forzado por $4 = 2d$). <strong>No es única.</strong>` },

      { id: 'tp6-9b', rot: 'b', enunciado: tex`$f: \mathbb{R}^3 \to \mathbb{R}^3$ tal que $\operatorname{Im}(f) = S$, con $S = \{(x_1,x_2,x_3) \in \mathbb{R}^3 / x_1 + 2x_2 - 3x_3 = 0\}$.`,
        conceptos: ['u6-imagen-generadores', 'u4-hallar-base', 'u6-teorema-dimension'],
        pista: tex`Primero una base de $S$. Después definí $f$ sobre la canónica mandando los canónicos a esos vectores de la base — y al tercero, al nulo.`,
        resolucion: tex`<h3>Paso 1 — Base de $S$ y dimensiones</h3>
        <p>$S$ es una ecuación homogénea en $\mathbb{R}^3$, luego $\dim S = 2$. Despejando $x_1 = -2x_2 + 3x_3$ y dando valores a las libres ([[u4-hallar-base]]):</p>
        <div class="fx center">$$(x_2,x_3) = (1,0) \to (-2,1,0), \qquad (x_2,x_3) = (0,1) \to (3,0,1)$$</div>
        <div class="fx center">$$S = \operatorname{gen}\{(-2,1,0),\; (3,0,1)\}, \qquad \dim S = 2$$</div>
        <p>Por el teorema de la dimensión, si $\operatorname{Im}(f) = S$ entonces $\dim N(f) = 3 - 2 = 1$.</p>

        <h3>Paso 2 — Construcción</h3>
        <p>Se definen las imágenes de la base canónica de modo que generen exactamente $S$, y se manda el tercer canónico al nulo (así el núcleo tiene dimensión 1):</p>
        <div class="fx center">$$f(e_1) = (-2,1,0), \qquad f(e_2) = (3,0,1), \qquad f(e_3) = (0,0,0)$$</div>
        <p>Entonces, por [[u6-propiedades-tl]]:</p>
        <div class="fx center">$$f(x,y,z) = x(-2,1,0) + y(3,0,1) + z(0,0,0) = (-2x + 3y,\;\; x,\;\; y)$$</div>

        <h3>Verificaciones</h3>
        <p><strong>Imagen.</strong> Por [[u6-imagen-generadores]], $\operatorname{Im}(f) = \operatorname{gen}\{(-2,1,0), (3,0,1)\} = S$ ✓. Y los dos generadores cumplen la ecuación de $S$: $\;-2+2-0 = 0$ ✓ y $3+0-3 = 0$ ✓</p>
        <p><strong>Núcleo.</strong> $f(x,y,z) = (0,0,0)$ exige $x = 0$, $y = 0$ (2.ª y 3.ª componentes), y entonces la 1.ª se cumple sola. Luego</p>
        <div class="fx center">$$N(f) = \operatorname{gen}\{(0,0,1)\}, \qquad \dim = 1 \;✓$$</div>
        <p>Control: $3 = 1 + 2$ ✓</p>
        <div class="note"><b class="lbl">No es única</b> Se podría haber elegido otra base de $S$, otro orden, u otro vector para mandar al núcleo. Cada elección da una $f$ distinta con la misma imagen.</div>`,
        resultado: tex`$f(x,y,z) = (-2x+3y,\; x,\; y)$. $\operatorname{Im}(f) = \operatorname{gen}\{(-2,1,0),(3,0,1)\} = S$ ($\dim 2$) y $N(f) = \operatorname{gen}\{(0,0,1)\}$ ($\dim 1$). <strong>No es única.</strong>` },

      { id: 'tp6-9c', rot: 'c', enunciado: tex`$f: \mathbb{R}^3 \to \mathbb{R}^3$ tal que $\operatorname{Nuc}(f) = \{(x,y,z) \in \mathbb{R}^3 / -x+y+z = 0\}$.`,
        conceptos: ['u6-nucleo-imagen', 'u4-hallar-base', 'u6-teorema-dimension'],
        pista: tex`Hay un truco de una línea: si el núcleo se define por una ecuación $\ell(x,y,z) = 0$, poné esa misma expresión como primera componente.`,
        resolucion: tex`<p>Hay un atajo muy limpio para este tipo de ítem.</p>
        <h3>La construcción directa</h3>
        <p>El núcleo pedido es el conjunto donde se anula la expresión lineal $-x+y+z$. Entonces basta tomar esa expresión como <strong>primera componente</strong> y poner ceros en las demás:</p>
        <div class="fx center">$$f(x,y,z) = (-x+y+z,\;\; 0,\;\; 0)$$</div>
        <p><strong>Es lineal</strong> (cada componente es combinación lineal de las variables) y su núcleo es, por construcción,</p>
        <div class="fx center">$$f(x,y,z) = (0,0,0) \iff -x+y+z = 0 \;✓$$</div>
        <p>exactamente el conjunto pedido.</p>

        <h3>Verificación de dimensiones</h3>
        <p>$\dim\operatorname{Nuc}(f) = 2$ (una ecuación homogénea en $\mathbb{R}^3$), e</p>
        <div class="fx center">$$\operatorname{Im}(f) = \operatorname{gen}\{(1,0,0)\}, \qquad \dim\operatorname{Im}(f) = 1$$</div>
        <p>Control por [[u6-teorema-dimension]]: $\;3 = 2 + 1$ ✓</p>
        <p>Base del núcleo (si se pide): despejando $x = y+z$, los puntos son $(y+z,\, y,\, z)$, de donde $\{(1,1,0),\; (1,0,1)\}$. Controles: $-1+1+0 = 0$ ✓ y $-1+0+1 = 0$ ✓. Y en efecto $f(1,1,0) = (0,0,0)$ ✓, $f(1,0,1) = (0,0,0)$ ✓.</p>

        <h3>El camino largo, por si se pide construir sobre una base</h3>
        <p>Se toma una base del núcleo, $\{(1,1,0), (1,0,1)\}$, se la extiende con un vector fuera —por ejemplo $e_1 = (1,0,0)$, que da $-1 \neq 0$— y se define</p>
        <div class="fx center">$$f(1,1,0) = \vec 0, \qquad f(1,0,1) = \vec 0, \qquad f(1,0,0) = (1,0,0)$$</div>
        <p>Calculando coordenadas en esa base se llega a $f(x,y,z) = (x - y - z,\; 0,\; 0)$, que es la misma transformación salvo signo (su núcleo es idéntico, porque $x-y-z = -(-x+y+z)$).</p>
        <div class="note tip"><b class="lbl">No es única, y el atajo generaliza</b>
        Hay infinitas: sirve cualquier $f$ cuyo núcleo sea ese plano, por ejemplo $f(x,y,z) = (0,\; 2(-x+y+z),\; 0)$, o una que mande la dirección sobrante a cualquier vector no nulo.
        <p>La receta general: <strong>si $\operatorname{Nuc}(f)$ está dado por una ecuación lineal homogénea $\ell = 0$, entonces $f(v) = (\ell(v), 0, \dots, 0)$ funciona.</strong> Con $k$ ecuaciones independientes se usan $k$ componentes. Es la construcción más corta posible.</div>`,
        resultado: tex`$f(x,y,z) = (-x+y+z,\; 0,\; 0)$. $\operatorname{Nuc}(f)$ es el plano pedido ($\dim 2$) y $\operatorname{Im}(f) = \operatorname{gen}\{(1,0,0)\}$ ($\dim 1$). <strong>No es única.</strong>` },

      { id: 'tp6-9d', rot: 'd', enunciado: tex`$f: \mathbb{R}^3 \to \mathbb{R}^4$ tal que $\operatorname{Nuc}(f) = \{(x,y,z) \in \mathbb{R}^3 / -x+y+z = 0\}$.`,
        conceptos: ['u6-nucleo-imagen', 'u6-teorema-dimension'],
        resolucion: tex`<p>Es el <strong>mismo problema</strong> que el inciso c), con un codominio más grande. La construcción es idéntica, agregando una componente nula:</p>
        <div class="fx center">$$f(x,y,z) = (-x+y+z,\;\; 0,\;\; 0,\;\; 0)$$</div>
        <p><strong>Núcleo:</strong> $f(x,y,z) = \vec 0 \iff -x+y+z = 0$ ✓, el plano pedido, de dimensión 2.</p>
        <p><strong>Imagen:</strong> $\operatorname{Im}(f) = \operatorname{gen}\{(1,0,0,0)\}$, de dimensión 1.</p>
        <p>Control: $\;3 = 2 + 1$ ✓ — el teorema de la dimensión se aplica al espacio de <strong>partida</strong>, que sigue siendo $\mathbb{R}^3$.</p>
        <div class="note tip"><b class="lbl">Por qué el codominio casi no interviene</b>
        El teorema de la dimensión sólo involucra $\dim V$ (el de partida). El codominio impone únicamente una <strong>cota superior</strong>: $\dim\operatorname{Im}(f) \le \dim W$. Acá $\dim\operatorname{Im}(f) = 1 \le 4$ ✓, holgadamente.
        <p>Comparando c) y d): en los dos $\dim\operatorname{Im} = 1$, forzado por el núcleo. Que el codominio sea $\mathbb{R}^3$ o $\mathbb{R}^4$ no cambia nada — y eso es lo que el par de incisos quiere hacer notar.</p>
        <p>Dónde <em>sí</em> importaría: si el núcleo pedido tuviera dimensión 0 y el codominio fuera $\mathbb{R}^2$, haría falta $\dim\operatorname{Im} = 3 > 2$ y el problema sería imposible — exactamente el ejercicio 8.b.</p></div>
        <p><strong>No es única</strong>, por las mismas razones que en c).</p>`,
        resultado: tex`$f(x,y,z) = (-x+y+z,\; 0,\; 0,\; 0)$ — igual que en c) con una componente más. $\dim\operatorname{Nuc} = 2$, $\dim\operatorname{Im} = 1$, y $3 = 2+1$. <strong>No es única.</strong>` }
    ]},

  /* ========================= 10 ========================= */
  { id: 'tp6-10', num: '10',
    enunciado: tex`<p>Sea $A = \begin{pmatrix} -1 & 0 & 1 \\ 2 & 1 & 0 \\ -1 & 2 & 2 \end{pmatrix}$.
    Hallar la transformación lineal $T: \mathbb{R}^3 \to \mathbb{R}^3$ que, con respecto a la base canónica, tiene a $A$ como matriz asociada. Calcular $T(0,5,-2)$.</p>`,
    conceptos: ['u6-matriz-asociada', 'u6-de-matriz-a-tl'],
    pista: tex`Con la base canónica no hay ningún cambio de base: se multiplica la matriz por el vector genérico como columna.`,
    resolucion: tex`<p>Cuando la matriz está dada <strong>respecto de la canónica</strong>, el paso de matriz a transformación es inmediato ([[u6-de-matriz-a-tl]]): se multiplica por el vector genérico escrito como columna.</p>
    <h3>La expresión analítica</h3>
    <div class="fx center">$$T(x,y,z) = A \begin{pmatrix} x \\ y \\ z \end{pmatrix}
    = \begin{pmatrix} -1 & 0 & 1 \\ 2 & 1 & 0 \\ -1 & 2 & 2 \end{pmatrix}\begin{pmatrix} x \\ y \\ z\end{pmatrix}$$</div>
    <div class="fx center">$$T(x,y,z) = \bigl(-x + z,\;\; 2x + y,\;\; -x + 2y + 2z\bigr)$$</div>
    <div class="note"><b class="lbl">Control inmediato</b>
    Las <strong>columnas</strong> de $A$ deben ser los transformados de los canónicos ([[u6-matriz-asociada]]):
    $$T(1,0,0) = (-1,\, 2,\, -1) \;✓ \quad T(0,1,0) = (0,\, 1,\, 2) \;✓ \quad T(0,0,1) = (1,\, 0,\, 2) \;✓$$
    Las tres coinciden con las columnas de $A$ en orden.</div>

    <h3>$T(0,5,-2)$</h3>
    <p><strong>Con la expresión analítica:</strong></p>
    <div class="fx center">$$T(0,5,-2) = \bigl(-0 + (-2),\;\; 0 + 5,\;\; -0 + 10 - 4\bigr) = (-2,\; 5,\; 6)$$</div>
    <p><strong>Con la matriz</strong> (el mismo cálculo, empaquetado):</p>
    <div class="fx center">$$\begin{pmatrix} -1 & 0 & 1 \\ 2 & 1 & 0 \\ -1 & 2 & 2 \end{pmatrix}\begin{pmatrix} 0 \\ 5 \\ -2\end{pmatrix}
    = \begin{pmatrix} 0 + 0 - 2 \\ 0 + 5 + 0 \\ 0 + 10 - 4 \end{pmatrix} = \begin{pmatrix} -2 \\ 5 \\ 6 \end{pmatrix} \;✓$$</div>
    <div class="note tip"><b class="lbl">Dato de paso: $T$ es un isomorfismo</b>
    $$\det A = -1(2 - 0) - 0(4-0) + 1(4+1) = -2 + 5 = 3 \neq 0$$
    Por el [[u4-teorema-18|Teorema resumen]], $A$ es inversible, así que $\operatorname{Nuc}(T) = \{\vec 0\}$ y $\operatorname{Im}(T) = \mathbb{R}^3$: $T$ es biyectiva ([[u6-inyectiva-sobreyectiva]]). No se pedía, pero es lo primero que conviene mirar en una matriz cuadrada.</div>`,
    resultado: tex`$T(x,y,z) = (-x+z,\;\; 2x+y,\;\; -x+2y+2z)$, y $T(0,5,-2) = (-2,\, 5,\, 6)$.` },
  /* ========================= 11 ========================= */
  { id: 'tp6-11', num: '11',
    enunciado: tex`<p>Para cada una de las transformaciones lineales $T: \mathbb{R}^n \to \mathbb{R}^n$, hallar la matriz de transformación con respecto a la base canónica de $\mathbb{R}^n$. Hallar $[T]_B$ <strong>de dos maneras diferentes</strong>, siendo $B$ la base indicada:</p>
    <div class="note tip"><b class="lbl">Las dos maneras que pide el enunciado</b>
    <strong>(1) Directa:</strong> se calcula $T(v_i)$ para cada vector de $B$ y se escribe cada resultado <em>en coordenadas de $B$</em>; esas son las columnas.
    <strong>(2) Por conjugación:</strong> $\;[T]_B = [\;]_{CB}\cdot[T]_C\cdot[\;]_{BC}$, con $[\;]_{BC}$ gratis (los vectores de $B$ como columnas) y $[\;]_{CB}$ su inversa.
    <p>Deben dar lo mismo. Ver [[u6-cambio-base-matriz]].</p></div>`,
    incisos: [

      { id: 'tp6-11a', rot: 'a', enunciado: tex`$n = 2$; $\;T(x,y) = (x - 2y,\; -y)$; $\;B = \{(2,1), (-3,4)\}$.`,
        conceptos: ['u6-matriz-asociada', 'u6-cambio-base-matriz'],
        resolucion: tex`<h3>Matriz canónica</h3>
        <p>Las columnas son los transformados de los canónicos:</p>
        <div class="fx center">$$T(1,0) = (1,\, 0), \qquad T(0,1) = (-2,\, -1)$$</div>
        <div class="fx center">$$[T]_C = \begin{pmatrix} 1 & -2 \\ 0 & -1 \end{pmatrix}$$</div>

        <h3>Coordenadas en $B$ (se usan en la manera 1)</h3>
        <p>$\alpha(2,1) + \beta(-3,4) = (x,y)$ da $2\alpha - 3\beta = x$ y $\alpha + 4\beta = y$. De la 2.ª, $\alpha = y - 4\beta$; sustituyendo: $2y - 11\beta = x$, de donde</p>
        <div class="fx center">$$[(x,y)]_B = \frac{1}{11}\begin{pmatrix} 4x + 3y \\ 2y - x \end{pmatrix}$$</div>
        <p>Control: $[(2,1)]_B = \tfrac{1}{11}(8+3,\; 2-2) = (1,0)$ ✓ y $[(-3,4)]_B = \tfrac1{11}(-12+12,\; 8+3) = (0,1)$ ✓</p>

        <h3>Manera 1 — directa</h3>
        <div class="fx center">$$T(2,1) = (2 - 2,\; -1) = (0,\, -1) \;\Longrightarrow\; [(0,-1)]_B = \tfrac{1}{11}(0 - 3,\; -2 - 0) = \tfrac{1}{11}\begin{pmatrix} -3 \\ -2\end{pmatrix}$$</div>
        <div class="fx center">$$T(-3,4) = (-3 - 8,\; -4) = (-11,\, -4) \;\Longrightarrow\; [(-11,-4)]_B = \tfrac{1}{11}(-44 - 12,\; -8 + 11) = \tfrac{1}{11}\begin{pmatrix} -56 \\ 3\end{pmatrix}$$</div>
        <div class="fx center">$$[T]_B = \frac{1}{11}\begin{pmatrix} -3 & -56 \\ -2 & 3 \end{pmatrix}$$</div>

        <h3>Manera 2 — por conjugación</h3>
        <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} 2 & -3 \\ 1 & 4\end{pmatrix}, \qquad \det = 8 + 3 = 11, \qquad [\;]_{CB} = \frac{1}{11}\begin{pmatrix} 4 & 3 \\ -1 & 2\end{pmatrix}$$</div>
        <p>Primero $[T]_C\,[\;]_{BC}$:</p>
        <div class="fx center">$$\begin{pmatrix} 1 & -2 \\ 0 & -1\end{pmatrix}\begin{pmatrix} 2 & -3 \\ 1 & 4\end{pmatrix}
        = \begin{pmatrix} 2-2 & -3-8 \\ -1 & -4 \end{pmatrix} = \begin{pmatrix} 0 & -11 \\ -1 & -4\end{pmatrix}$$</div>
        <p>Y después $[\;]_{CB}$ por eso:</p>
        <div class="fx center">$$\frac{1}{11}\begin{pmatrix} 4 & 3 \\ -1 & 2\end{pmatrix}\begin{pmatrix} 0 & -11 \\ -1 & -4\end{pmatrix}
        = \frac{1}{11}\begin{pmatrix} -3 & -44-12 \\ -2 & 11-8 \end{pmatrix} = \frac{1}{11}\begin{pmatrix} -3 & -56 \\ -2 & 3\end{pmatrix} \;✓$$</div>
        <p><strong>Las dos maneras coinciden.</strong></p>
        <div class="note"><b class="lbl">Control de traza y determinante</b>
        Matrices semejantes comparten traza y determinante ([[u7-semejantes]]). $\operatorname{tr}[T]_C = 1 - 1 = 0$ y $\operatorname{tr}[T]_B = \tfrac{-3+3}{11} = 0$ ✓. $\det[T]_C = -1$ y $\det[T]_B = \tfrac{-9 - 112}{121} = \tfrac{-121}{121} = -1$ ✓. Es un chequeo rápido y muy efectivo.</div>`,
        resultado: tex`$[T]_C = \begin{pmatrix} 1 & -2 \\ 0 & -1\end{pmatrix}$ y $[T]_B = \frac{1}{11}\begin{pmatrix} -3 & -56 \\ -2 & 3\end{pmatrix}$, por los dos caminos. Control: traza $0$ y determinante $-1$ en ambas.` },

      { id: 'tp6-11b', rot: 'b', enunciado: tex`$n = 3$; $\;T(x,y,z) = (x, y, 0)$; $\;B = \{(1,0,0), (1,1,0), (1,1,1)\}$.`,
        conceptos: ['u6-matriz-asociada', 'u6-cambio-base-matriz'],
        pista: tex`Esta $B$ es triangular: las coordenadas se leen con dos restas.`,
        resolucion: tex`<h3>Matriz canónica</h3>
        <div class="fx center">$$T(e_1) = (1,0,0), \qquad T(e_2) = (0,1,0), \qquad T(e_3) = (0,0,0)$$</div>
        <div class="fx center">$$[T]_C = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$</div>
        <p>Es la proyección sobre el plano $XY$: aplasta la tercera coordenada.</p>

        <h3>Coordenadas en $B$</h3>
        <p>$B$ es triangular, igual que en el TP 5 ej. 9. De $\alpha(1,0,0) + \beta(1,1,0) + \gamma(1,1,1) = (x,y,z)$:</p>
        <div class="fx center">$$\gamma = z, \qquad \beta = y - z, \qquad \alpha = x - y \;\;\Longrightarrow\;\; [(x,y,z)]_B = \begin{pmatrix} x-y \\ y-z \\ z\end{pmatrix}$$</div>

        <h3>Manera 1 — directa</h3>
        <div class="tbl"><table>
          <thead><tr><th>$v$</th><th>$T(v) = (x,y,0)$</th><th>$[T(v)]_B$</th></tr></thead>
          <tbody>
            <tr><td>$(1,0,0)$</td><td>$(1,0,0)$</td><td>$(1-0,\; 0-0,\; 0) = (1,0,0)$</td></tr>
            <tr><td>$(1,1,0)$</td><td>$(1,1,0)$</td><td>$(1-1,\; 1-0,\; 0) = (0,1,0)$</td></tr>
            <tr><td>$(1,1,1)$</td><td>$(1,1,0)$</td><td>$(1-1,\; 1-0,\; 0) = (0,1,0)$</td></tr>
          </tbody>
        </table></div>
        <div class="fx center">$$[T]_B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$</div>
        <div class="note"><b class="lbl">Las dos últimas columnas son iguales</b> Porque $T(1,1,0) = T(1,1,1) = (1,1,0)$: los dos últimos vectores de $B$ tienen el mismo transformado. No es un error.</div>

        <h3>Manera 2 — por conjugación</h3>
        <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1\end{pmatrix}, \qquad
        [\;]_{CB} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1\end{pmatrix}$$</div>
        <p>(La segunda tiene por columnas los $[e_i]_B$, que salen de la fórmula triangular. Control: $[\;]_{CB}[\;]_{BC} = I_3$ ✓)</p>
        <p>Primero $[T]_C[\;]_{BC}$ — que simplemente anula la última fila:</p>
        <div class="fx center">$$\begin{pmatrix} 1&0&0\\0&1&0\\0&0&0\end{pmatrix}\begin{pmatrix} 1&1&1\\0&1&1\\0&0&1\end{pmatrix} = \begin{pmatrix} 1&1&1\\0&1&1\\0&0&0\end{pmatrix}$$</div>
        <p>Y después:</p>
        <div class="fx center">$$\begin{pmatrix} 1&-1&0\\0&1&-1\\0&0&1\end{pmatrix}\begin{pmatrix} 1&1&1\\0&1&1\\0&0&0\end{pmatrix}
        = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 0\end{pmatrix} \;✓$$</div>
        <p><strong>Coinciden.</strong></p>
        <div class="note tip"><b class="lbl">Control</b> Traza: $1+1+0 = 2$ en las dos ✓. Determinante: $0$ en las dos (la última fila es nula) ✓ — consistente con que $T$ no sea inyectiva: $\operatorname{Nuc}(T) = \operatorname{gen}\{(0,0,1)\}$, el eje $z$.</div>`,
        resultado: tex`$[T]_C = \begin{pmatrix} 1&0&0\\0&1&0\\0&0&0\end{pmatrix}$ y $[T]_B = \begin{pmatrix} 1&0&0\\0&1&1\\0&0&0\end{pmatrix}$, por los dos caminos.` }
    ]},

  /* ========================= 12 ========================= */
  { id: 'tp6-12', num: '12',
    enunciado: tex`<p>La matriz de la transformación $T: \mathbb{R}^3 \to \mathbb{R}^3$ respecto de la base $B$, con $B = \{(1,0,0), (1,1,0), (1,1,1)\}$,
    es $A = \begin{pmatrix} 2 & 1 & -1 \\ 3 & 2 & 2 \\ 4 & 3 & 2 \end{pmatrix}$.
    Hallar la matriz de $T$ respecto a la base $B' = \{(2,1,1), (3,2,1), (2,-3,-2)\}$.</p>`,
    conceptos: ['u6-cambio-base-matriz', 'u5-via-canonica', 'u5-inversa'],
    pista: tex`$[T]_{B'} = [\;]_{BB'}\,[T]_B\,[\;]_{B'B}$. Conviene calcular $[\;]_{B'B}$ directo (con la fórmula triangular de $B$) y obtener $[\;]_{BB'}$ como su inversa: una sola inversión.`,
    resolucion: tex`<p>La fórmula es la de [[u6-cambio-base-matriz]] con $V = W$:</p>
    <div class="fx center">$$[T]_{B'} = [\;]_{BB'}\cdot[T]_B\cdot[\;]_{B'B}$$</div>
    <p>Se lee de derecha a izquierda: de $B'$ a $B$, se aplica $T$ en $B$, y se vuelve de $B$ a $B'$. El control de subíndices confirma el orden: $[\;]_{B\boxed{B'}}[T]_{\boxed{B}\boxed{B}}[\;]_{B'\boxed{B}}$, donde los interiores se cancelan.</p>

    <h3>Paso 1 — $[\;]_{B'B}$</h3>
    <p>$B$ es triangular, así que $[(x,y,z)]_B = (x-y,\; y-z,\; z)$. Aplicándola a los vectores de $B'$:</p>
    <div class="tbl"><table>
      <thead><tr><th>$w \in B'$</th><th>$[w]_B = (x-y,\, y-z,\, z)$</th></tr></thead>
      <tbody>
        <tr><td>$(2,1,1)$</td><td>$(1,\; 0,\; 1)$</td></tr>
        <tr><td>$(3,2,1)$</td><td>$(1,\; 1,\; 1)$</td></tr>
        <tr><td>$(2,-3,-2)$</td><td>$(5,\; -1,\; -2)$</td></tr>
      </tbody>
    </table></div>
    <div class="fx center">$$[\;]_{B'B} = \begin{pmatrix} 1 & 1 & 5 \\ 0 & 1 & -1 \\ 1 & 1 & -2 \end{pmatrix}, \qquad \det = -7$$</div>

    <h3>Paso 2 — $[\;]_{BB'}$ como inversa</h3>
    <div class="fx center">$$[\;]_{BB'} = \bigl([\;]_{B'B}\bigr)^{-1} = \frac{1}{7}\begin{pmatrix} 1 & -7 & 6 \\ 1 & 7 & -1 \\ 1 & 0 & -1 \end{pmatrix}$$</div>
    <p>Control: $\;[\;]_{BB'}\cdot[\;]_{B'B} = I_3$. Primera fila: $\tfrac17(1+0+6,\;\; 1-7+6,\;\; 5+7-12) = (1,0,0)$ ✓</p>

    <h3>Paso 3 — El producto</h3>
    <p>Primero $[T]_B\cdot[\;]_{B'B}$:</p>
    <div class="fx center">$$\begin{pmatrix} 2 & 1 & -1 \\ 3 & 2 & 2 \\ 4 & 3 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 & 5 \\ 0 & 1 & -1 \\ 1 & 1 & -2\end{pmatrix}
    = \begin{pmatrix} 1 & 2 & 11 \\ 5 & 7 & 9 \\ 6 & 9 & 13 \end{pmatrix}$$</div>
    <p>Y después $[\;]_{BB'}$ por eso:</p>
    <div class="fx center">$$[T]_{B'} = \frac{1}{7}\begin{pmatrix} 1 & -7 & 6 \\ 1 & 7 & -1 \\ 1 & 0 & -1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 11 \\ 5 & 7 & 9 \\ 6 & 9 & 13 \end{pmatrix}
    = \frac{1}{7}\begin{pmatrix} 2 & 7 & 26 \\ 30 & 42 & 61 \\ -5 & -7 & -2 \end{pmatrix}$$</div>
    <div class="fx center">$$[T]_{B'} = \begin{pmatrix} \tfrac{2}{7} & 1 & \tfrac{26}{7} \\[2pt] \tfrac{30}{7} & 6 & \tfrac{61}{7} \\[2pt] -\tfrac{5}{7} & -1 & -\tfrac{2}{7} \end{pmatrix}$$</div>

    <h3>Verificación por un camino completamente distinto</h3>
    <p>Se calcula $[T]_C$ y desde ahí la expresión de $T$, y se rehace $[T]_{B'}$ en forma directa.</p>
    <div class="fx center">$$[T]_C = [\;]_{BC}\,[T]_B\,[\;]_{CB} = \begin{pmatrix} 9 & -3 & -3 \\ 7 & -2 & -1 \\ 4 & -1 & -1 \end{pmatrix}$$</div>
    <div class="fx center">$$T(x,y,z) = \bigl(9x - 3y - 3z,\;\; 7x - 2y - z,\;\; 4x - y - z\bigr)$$</div>
    <p>Control de $[T]_C$: $T(1,0,0) = (9,7,4)$ y $[(9,7,4)]_B = (9-7,\; 7-4,\; 4) = (2,3,4)$, que es la primera columna de $A$ ✓. Las otras dos columnas se verifican igual.</p>
    <p>Ahora, directo: $\;T(2,1,1) = (12,11,6)$, $\;T(3,2,1) = (18,16,9)$, $\;T(2,-3,-2) = (33,22,13)$. Pasando cada uno a coordenadas de $B'$ (con $\det[\;]_{B'C} = -7$):</p>
    <div class="fx center">$$[(12,11,6)]_{B'} = \tfrac17(2,\, 30,\, -5), \quad [(18,16,9)]_{B'} = (1,\, 6,\, -1), \quad [(33,22,13)]_{B'} = \tfrac17(26,\, 61,\, -2)$$</div>
    <p>Esas tres columnas son exactamente $[T]_{B'}$ ✓ <strong>Los dos caminos coinciden.</strong></p>
    <div class="note tip"><b class="lbl">Por qué aparecen denominadores 7</b>
    Porque $\det[\;]_{B'B} = -7$, y la inversa de una matriz entera tiene denominador igual a su determinante. No es un error de cuenta: las matrices de transformación en bases «feas» suelen tener fracciones. Lo que <strong>sí</strong> debe mantenerse entero es el control de traza y determinante:
    $$\operatorname{tr}[T]_B = 2+2+2 = 6, \qquad \operatorname{tr}[T]_{B'} = \tfrac27 + 6 - \tfrac27 = 6 \;✓$$
    Las dos matrices son [[u7-semejantes|semejantes]], así que comparten traza, determinante y polinomio característico.</div>`,
    resultado: tex`$[T]_{B'} = \frac{1}{7}\begin{pmatrix} 2 & 7 & 26 \\ 30 & 42 & 61 \\ -5 & -7 & -2\end{pmatrix}$. Verificado por dos caminos; de paso, $T(x,y,z) = (9x-3y-3z,\; 7x-2y-z,\; 4x-y-z)$.` },

  /* ========================= 13 ========================= */
  { id: 'tp6-13', num: '13',
    enunciado: tex`<p>Sea $B = \{(1,1), (1,-1)\}$ una base de $\mathbb{R}^2$ y $T: \mathbb{R}^2 \to \mathbb{R}^2$ tal que
    $[T]_{CB} = \begin{pmatrix} 1 & 1 \\ 2 & -1 \end{pmatrix}$.</p>
    <div class="note warn"><b class="lbl">Leer bien el subíndice</b> $[T]_{CB}$ tiene la <strong>canónica en el dominio</strong> y $B$ en el codominio. Por lo tanto
    $$[T(x)]_B = [T]_{CB}\,[x]_C$$
    es decir: entra un vector en coordenadas canónicas y sale su transformado en coordenadas de $B$. Las columnas son $[T(e_1)]_B$ y $[T(e_2)]_B$.</div>`,
    incisos: [

      { id: 'tp6-13a', rot: 'a', enunciado: tex`Hallar $[T]_{BC}$.`,
        conceptos: ['u6-cambio-base-matriz', 'u5-matriz-cambio'],
        pista: tex`Hay que cambiar <em>las dos</em> bases a la vez: la del dominio de $C$ a $B$, y la del codominio de $B$ a $C$. Las dos conversiones usan la misma matriz.`,
        resolucion: tex`<p>Siguiendo el recorrido de las coordenadas: se entra con $[x]_B$, se pasa a $[x]_C$, se aplica $[T]_{CB}$ obteniendo $[T(x)]_B$, y se pasa a $[T(x)]_C$. Es decir</p>
        <div class="fx center">$$[T]_{BC} = [\;]_{BC}\cdot[T]_{CB}\cdot[\;]_{BC}$$</div>
        <p>con $[\;]_{BC} = \begin{pmatrix} 1 & 1 \\ 1 & -1\end{pmatrix}$ (los vectores de $B$ como columnas), que aparece <strong>dos veces</strong>: una para la entrada y otra para la salida.</p>
        <div class="fx center">$$[T]_{CB}\,[\;]_{BC} = \begin{pmatrix} 1 & 1 \\ 2 & -1\end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1\end{pmatrix}
        = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$$</div>
        <div class="fx center">$$[T]_{BC} = \begin{pmatrix} 1 & 1 \\ 1 & -1\end{pmatrix}\begin{pmatrix} 2 & 0 \\ 1 & 3\end{pmatrix}
        = \begin{pmatrix} 3 & 3 \\ 1 & -3 \end{pmatrix}$$</div>

        <h3>Verificación directa</h3>
        <p>Las columnas de $[T]_{BC}$ deben ser $T(v_1)$ y $T(v_2)$ (en coordenadas canónicas, o sea los vectores mismos). Para calcularlos hace falta $T$, que sale de las columnas del dato:</p>
        <p>Columna 1 de $[T]_{CB}$ es $\binom{1}{2} = [T(e_1)]_B$, luego $T(e_1) = 1(1,1) + 2(1,-1) = (3,-1)$.</p>
        <p>Columna 2 es $\binom{1}{-1} = [T(e_2)]_B$, luego $T(e_2) = 1(1,1) - 1(1,-1) = (0, 2)$.</p>
        <div class="fx center">$$[T]_C = \begin{pmatrix} 3 & 0 \\ -1 & 2\end{pmatrix}, \qquad T(x,y) = (3x,\;\; -x + 2y)$$</div>
        <p>Entonces $\;T(1,1) = (3,\, 1)$ y $T(1,-1) = (3,\, -3)$, y</p>
        <div class="fx center">$$[T]_{BC} = \begin{pmatrix} 3 & 3 \\ 1 & -3\end{pmatrix} \;✓$$</div>
        <p>Coincide.</p>`,
        resultado: tex`$[T]_{BC} = \begin{pmatrix} 3 & 3 \\ 1 & -3\end{pmatrix}$. De paso, $[T]_C = \begin{pmatrix} 3 & 0 \\ -1 & 2\end{pmatrix}$ y $T(x,y) = (3x,\; -x+2y)$.` },

      { id: 'tp6-13b', rot: 'b', enunciado: tex`Hallar, sin calcular la transformación lineal, $\operatorname{Im}(T)$ y $\operatorname{Nuc}(T)$. Dar dimensión y base de ambos.`,
        conceptos: ['u6-nucleo-imagen-matriz', 'u6-teorema-dimension'],
        pista: tex`Calculá el determinante del dato antes que nada.`,
        resolucion: tex`<p>El atajo está en el determinante del dato:</p>
        <div class="fx center">$$\det[T]_{CB} = (1)(-1) - (1)(2) = -1 - 2 = -3 \neq 0$$</div>
        <p>Una matriz de cambio de base es siempre inversible, así que si $[T]_{CB}$ tiene determinante no nulo, lo mismo vale para $[T]_C$ y para cualquier otra representación de $T$ (son todas [[u7-semejantes|semejantes]] salvo cambios de base inversibles). Por el [[u4-teorema-18|Teorema resumen]], entonces:</p>
        <div class="fx center">$$\operatorname{Nuc}(T) = \{(0,0)\}, \qquad \dim\operatorname{Nuc}(T) = 0$$</div>
        <p>El sistema homogéneo $[T]_{CB}\,[x]_C = \vec 0$ tiene sólo la solución trivial ([[u6-nucleo-imagen-matriz]]). Su base es el conjunto vacío, o se dice que no tiene base.</p>
        <p>Y por el [[u6-teorema-dimension|teorema de la dimensión]]:</p>
        <div class="fx center">$$\dim\operatorname{Im}(T) = 2 - 0 = 2 = \dim\mathbb{R}^2 \;\Longrightarrow\; \operatorname{Im}(T) = \mathbb{R}^2$$</div>
        <p>con base, por ejemplo, la canónica $\{(1,0),(0,1)\}$.</p>
        <div class="note tip"><b class="lbl">$T$ es un isomorfismo</b>
        Núcleo trivial e imagen total: $T$ es inyectiva y sobreyectiva ([[u6-inyectiva-sobreyectiva]]). Es el ítem xi del [[u7-teorema-resumen|teorema de resumen]].</div>
        <div class="note"><b class="lbl">Si se quisiera una base de la imagen «a partir del dato»</b>
        Las columnas de $[T]_{CB}$ generan la imagen, pero <strong>en coordenadas de $B$</strong>. Reconstruyendo: $\binom12 \to 1(1,1)+2(1,-1) = (3,-1)$ y $\binom{1}{-1} \to (0,2)$. Y $\{(3,-1),(0,2)\}$ es base de $\mathbb{R}^2$ (det $= 6 \neq 0$) ✓. Es el paso que advierte [[u6-nucleo-imagen-matriz]]: las columnas son <em>coordenadas</em>, no vectores, salvo que el codominio esté en la canónica.</div>`,
        resultado: tex`$\det[T]_{CB} = -3 \neq 0$, así que $\operatorname{Nuc}(T) = \{(0,0)\}$ ($\dim 0$) y $\operatorname{Im}(T) = \mathbb{R}^2$ ($\dim 2$). $T$ es un isomorfismo.` },

      { id: 'tp6-13c', rot: 'c', enunciado: tex`Hallar $[T(1,1)]_B$ y $T(-2,3)$.`,
        conceptos: ['u6-de-matriz-a-tl', 'u6-matriz-asociada'],
        resolucion: tex`<h3>$[T(1,1)]_B$</h3>
        <p>La matriz dada toma entradas en coordenadas <strong>canónicas</strong>, y $[(1,1)]_C = \binom11$:</p>
        <div class="fx center">$$[T(1,1)]_B = [T]_{CB}\begin{pmatrix} 1 \\ 1\end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 2 & -1\end{pmatrix}\begin{pmatrix} 1 \\ 1\end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$$</div>
        <p><strong>Control:</strong> $T(1,1) = (3,1)$ por el inciso a). Y $[(3,1)]_B$: de $\alpha(1,1) + \beta(1,-1) = (3,1)$ sale $\alpha + \beta = 3$, $\alpha - \beta = 1$, luego $\alpha = 2$, $\beta = 1$ ✓</p>

        <h3>$T(-2,3)$</h3>
        <p><strong>Camino sin calcular $T$:</strong> primero las coordenadas en $B$ del transformado,</p>
        <div class="fx center">$$[T(-2,3)]_B = \begin{pmatrix} 1 & 1 \\ 2 & -1\end{pmatrix}\begin{pmatrix} -2 \\ 3\end{pmatrix} = \begin{pmatrix} -2+3 \\ -4-3 \end{pmatrix} = \begin{pmatrix} 1 \\ -7\end{pmatrix}$$</div>
        <p>y después se <strong>reconstruye</strong> el vector combinando la base $B$ con esas coordenadas:</p>
        <div class="fx center">$$T(-2,3) = 1\,(1,1) - 7\,(1,-1) = (1,1) + (-7,7) = (-6,\; 8)$$</div>
        <p><strong>Control con la expresión explícita</strong> del inciso a), $T(x,y) = (3x,\, -x+2y)$:</p>
        <div class="fx center">$$T(-2,3) = (3(-2),\;\; 2 + 6) = (-6,\, 8) \;✓$$</div>
        <div class="note warn"><b class="lbl">El paso que se olvida</b>
        Al usar $[T]_{CB}$, el resultado de la multiplicación está en coordenadas de $B$, <strong>no</strong> es el vector. Dar $(1,-7)$ como respuesta a «hallar $T(-2,3)$» es el error típico: falta reconstruir con la base. Es la advertencia de [[u6-de-matriz-a-tl]]: hay que cuidar <em>las dos</em> conversiones, la de entrada y la de salida.</div>`,
        resultado: tex`$[T(1,1)]_B = \binom{2}{1}$ y $T(-2,3) = (-6,\, 8)$ (de $[T(-2,3)]_B = \binom{1}{-7}$, reconstruido con $B$).` }
    ]},

  /* ========================= 14 ========================= */
  { id: 'tp6-14', num: '14',
    enunciado: tex`<p>Sea $[T]_{BB'} = \begin{pmatrix} -1 & -3 & 0 \\ 1 & \tfrac{7}{2} & 1 \end{pmatrix}$ la representación matricial de $T: \mathbb{R}^3 \to \mathbb{R}^2$ con respecto a las bases
    $B = \{(-1,0,1), (0,2,-1), (-2,0,0)\}$ y $B' = \{(-1,-1), (0,2)\}$.</p>
    <div class="note tip"><b class="lbl">El ejercicio más parecido al segundo parcial</b>
    Es exactamente la estructura del ejercicio 2 del recuperatorio del 2.º parcial: matriz dada en un par de bases no canónicas, y hay que moverse entre representaciones.
    <p>Dato de orientación: la matriz es de $2 \times 3$, con <strong>3 columnas</strong> (una por vector de $B$, el dominio) y <strong>2 filas</strong> (una por vector de $B'$, el codominio). El tamaño mismo desambigua el orden de los subíndices.</p></div>`,
    incisos: [

      { id: 'tp6-14a', rot: 'a', enunciado: tex`Calcular $[T(0,2,-1)]_{B'}$ y $T(0,2,-1)$.`,
        conceptos: ['u6-de-matriz-a-tl', 'u5-coordenadas-casos'],
        pista: tex`$(0,2,-1)$ es uno de los vectores de $B$. ¿Cuáles son sus coordenadas en $B$?`,
        resolucion: tex`<h3>Las coordenadas salen sin cuentas</h3>
        <p>$(0,2,-1)$ es el <strong>segundo vector de $B$</strong>, así que por [[u5-coordenadas-casos]]:</p>
        <div class="fx center">$$[(0,2,-1)]_B = \begin{pmatrix} 0 \\ 1 \\ 0\end{pmatrix}$$</div>
        <p>Y multiplicar una matriz por el segundo canónico <strong>extrae su segunda columna</strong>:</p>
        <div class="fx center">$$[T(0,2,-1)]_{B'} = [T]_{BB'}\begin{pmatrix} 0 \\ 1 \\ 0\end{pmatrix} = \begin{pmatrix} -3 \\ \tfrac{7}{2}\end{pmatrix}$$</div>

        <h3>El vector</h3>
        <p>Se reconstruye combinando $B' = \{(-1,-1), (0,2)\}$ con esas coordenadas:</p>
        <div class="fx center">$$T(0,2,-1) = -3\,(-1,-1) + \tfrac{7}{2}\,(0,2) = (3,\, 3) + (0,\, 7) = (3,\; 10)$$</div>
        <div class="note tip"><b class="lbl">La lectura general</b>
        La columna $j$ de $[T]_{BB'}$ <em>es</em> $[T(v_j)]_{B'}$. Así que cuando se pide el transformado de un vector de $B$, la respuesta está <strong>leída</strong> en la matriz, sin multiplicar nada. Reconocerlo ahorra tiempo en el parcial.</div>`,
        resultado: tex`$[T(0,2,-1)]_{B'} = \binom{-3}{7/2}$ (la 2.ª columna de la matriz) y $T(0,2,-1) = (3,\, 10)$.` },

      { id: 'tp6-14b', rot: 'b', enunciado: tex`Hallar $[T]_{BC}$.`,
        conceptos: ['u6-cambio-base-matriz'],
        pista: tex`Sólo cambia la base del codominio, de $B'$ a $C$. El dominio sigue en $B$, así que se multiplica por izquierda y nada más.`,
        resolucion: tex`<p>Cambia únicamente la base de llegada, así que basta componer por la izquierda ([[u6-cambio-base-matriz]]):</p>
        <div class="fx center">$$[T]_{BC} = [\;]_{B'C}\cdot[T]_{BB'}$$</div>
        <p>con $[\;]_{B'C}$ gratis — los vectores de $B'$ como columnas:</p>
        <div class="fx center">$$[\;]_{B'C} = \begin{pmatrix} -1 & 0 \\ -1 & 2\end{pmatrix}$$</div>
        <div class="fx center">$$[T]_{BC} = \begin{pmatrix} -1 & 0 \\ -1 & 2\end{pmatrix}\begin{pmatrix} -1 & -3 & 0 \\ 1 & \tfrac72 & 1\end{pmatrix}
        = \begin{pmatrix} 1 & 3 & 0 \\ 3 & 10 & 2 \end{pmatrix}$$</div>
        <p>Entrada por entrada: fila 1 es $(-1)\cdot$fila 1 de la matriz $= (1, 3, 0)$; fila 2 es $(-1)\cdot$fila 1 $+\; 2\cdot$fila 2 $= (1+2,\; 3+7,\; 0+2) = (3, 10, 2)$.</p>
        <p><strong>Control:</strong> la segunda columna de $[T]_{BC}$ debe ser $T(0,2,-1)$ en coordenadas canónicas, o sea el vector mismo: $(3, 10)$ ✓ coincide con el inciso a).</p>
        <div class="note"><b class="lbl">El control de subíndices</b> $[\;]_{B'\boxed{C}}\cdot[T]_{B\boxed{B'}}$: los $B'$ interiores se cancelan y quedan $B$ (entrada) y $C$ (salida) ✓ Si se hubiera multiplicado por derecha, los tamaños ni siquiera cerrarían ($2\times2$ por $2\times3$ funciona; $2\times3$ por $2\times2$ no).</div>`,
        resultado: tex`$[T]_{BC} = \begin{pmatrix} 1 & 3 & 0 \\ 3 & 10 & 2\end{pmatrix}$` },

      { id: 'tp6-14c', rot: 'c', enunciado: tex`Hallar $T$, núcleo, imagen, dimensión y ecuación de ambos. Dar una base para cada uno.`,
        conceptos: ['u6-de-matriz-a-tl', 'u6-nucleo-imagen-matriz', 'u6-teorema-dimension'],
        pista: tex`Para la expresión analítica hace falta $[T]_C$, es decir también cambiar la base del dominio de $B$ a $C$. Eso requiere invertir $[\;]_{BC}$.`,
        resolucion: tex`<h3>Paso 1 — La matriz canónica</h3>
        <p>Falta cambiar la base del dominio:</p>
        <div class="fx center">$$[T]_C = [T]_{CC} = [T]_{BC}\cdot[\;]_{CB}, \qquad [\;]_{CB} = \bigl([\;]_{BC}\bigr)^{-1}$$</div>
        <p>con $[\;]_{BC}$ los vectores de $B$ como columnas:</p>
        <div class="fx center">$$[\;]_{BC} = \begin{pmatrix} -1 & 0 & -2 \\ 0 & 2 & 0 \\ 1 & -1 & 0\end{pmatrix}, \qquad \det = 4$$</div>
        <div class="fx center">$$[\;]_{CB} = \begin{pmatrix} 0 & \tfrac12 & 1 \\ 0 & \tfrac12 & 0 \\ -\tfrac12 & -\tfrac14 & -\tfrac12 \end{pmatrix}$$</div>
        <p>Control: $[\;]_{CB}[\;]_{BC} = I_3$ ✓ (primera fila por las tres columnas: $1$, $0$, $0$).</p>
        <div class="fx center">$$[T]_C = \begin{pmatrix} 1 & 3 & 0 \\ 3 & 10 & 2\end{pmatrix}\begin{pmatrix} 0 & \tfrac12 & 1 \\ 0 & \tfrac12 & 0 \\ -\tfrac12 & -\tfrac14 & -\tfrac12\end{pmatrix}
        = \begin{pmatrix} 0 & 2 & 1 \\ -1 & 6 & 2 \end{pmatrix}$$</div>
        <div class="fx center">$$\boxed{T(x,y,z) = \bigl(2y + z,\;\; -x + 6y + 2z\bigr)}$$</div>
        <p><strong>Verificaciones con los tres vectores de $B$:</strong></p>
        <p>$T(-1,0,1) = (0+1,\; 1+0+2) = (1,3)$ ✓ (columna 1 de $[T]_{BC}$)</p>
        <p>$T(0,2,-1) = (4-1,\; 0+12-2) = (3,10)$ ✓ (columna 2, y coincide con a))</p>
        <p>$T(-2,0,0) = (0,\; 2) = (0,2)$ ✓ (columna 3)</p>

        <h3>Paso 2 — Núcleo</h3>
        <div class="fx center">$$\begin{cases} 2y + z = 0 \\ -x + 6y + 2z = 0\end{cases} \;\Longrightarrow\; z = -2y, \quad x = 6y + 2(-2y) = 2y$$</div>
        <p>Los vectores son $(2y,\, y,\, -2y) = y\,(2,1,-2)$:</p>
        <div class="fx center">$$\operatorname{Nuc}(T) = \operatorname{gen}\{(2,1,-2)\}, \qquad \dim = 1, \qquad \text{base } \{(2,1,-2)\}$$</div>
        <p><strong>Ecuaciones:</strong> $\;x - 2y = 0 \;\wedge\; 2y + z = 0$. <strong>Geométricamente:</strong> una recta por el origen de $\mathbb{R}^3$.</p>
        <p>Control: $T(2,1,-2) = (2-2,\; -2+6-4) = (0,0)$ ✓</p>

        <h3>Paso 3 — Imagen</h3>
        <p>Por el [[u6-teorema-dimension|teorema de la dimensión]]:</p>
        <div class="fx center">$$3 = 1 + \dim\operatorname{Im}(T) \;\Longrightarrow\; \dim\operatorname{Im}(T) = 2 = \dim\mathbb{R}^2$$</div>
        <div class="fx center">$$\operatorname{Im}(T) = \mathbb{R}^2, \qquad \text{base } \{(1,0),(0,1)\}$$</div>
        <p><strong>No tiene ecuación</strong>: es todo el espacio de llegada. $T$ es <strong>sobreyectiva</strong> y no inyectiva.</p>
        <p>Control con las columnas de $[T]_C$: $(0,-1)$, $(2,6)$, $(1,2)$. Las dos primeras son L.I. ($\det\begin{vmatrix} 0 & 2 \\ -1 & 6\end{vmatrix} = 2 \neq 0$), así que generan $\mathbb{R}^2$ ✓</p>`,
        resultado: tex`$T(x,y,z) = (2y+z,\; -x+6y+2z)$. &nbsp; $\operatorname{Nuc}(T) = \operatorname{gen}\{(2,1,-2)\}$, $\dim 1$, ecuaciones $x-2y=0 \wedge 2y+z=0$ (recta por el origen). &nbsp; $\operatorname{Im}(T) = \mathbb{R}^2$, $\dim 2$, sin ecuación. Control: $3 = 1+2$.` },

      { id: 'tp6-14d', rot: 'd', enunciado: tex`Calcular $[T(2,1,-1)]_{B'}$.`,
        conceptos: ['u6-matriz-asociada', 'u5-calcular-coordenadas'],
        pista: tex`$(2,1,-1)$ no es un vector de $B$, así que hay que calcular sus coordenadas en $B$ antes de multiplicar.`,
        resolucion: tex`<p>Para usar $[T]_{BB'}$ hay que entrar con coordenadas en $B$, así que el primer paso es convertir.</p>
        <h3>Paso 1 — $[(2,1,-1)]_B$</h3>
        <p>Con la matriz $[\;]_{CB}$ del inciso c):</p>
        <div class="fx center">$$[(2,1,-1)]_B = \begin{pmatrix} 0 & \tfrac12 & 1 \\ 0 & \tfrac12 & 0 \\ -\tfrac12 & -\tfrac14 & -\tfrac12\end{pmatrix}\begin{pmatrix} 2 \\ 1 \\ -1\end{pmatrix}
        = \begin{pmatrix} 0 + \tfrac12 - 1 \\ 0 + \tfrac12 + 0 \\ -1 - \tfrac14 + \tfrac12\end{pmatrix} = \begin{pmatrix} -\tfrac12 \\ \tfrac12 \\ -\tfrac34 \end{pmatrix}$$</div>
        <p><strong>Control</strong> reconstruyendo con $B$:</p>
        <div class="fx center">$$-\tfrac12(-1,0,1) + \tfrac12(0,2,-1) - \tfrac34(-2,0,0) = \left(\tfrac12, 0, -\tfrac12\right) + \left(0, 1, -\tfrac12\right) + \left(\tfrac32, 0, 0\right) = (2,\, 1,\, -1) \;✓$$</div>

        <h3>Paso 2 — Aplicar la matriz</h3>
        <div class="fx center">$$[T(2,1,-1)]_{B'} = \begin{pmatrix} -1 & -3 & 0 \\ 1 & \tfrac72 & 1\end{pmatrix}\begin{pmatrix} -\tfrac12 \\ \tfrac12 \\ -\tfrac34\end{pmatrix}$$</div>
        <div class="fx center">$$\text{fila 1}: \;\tfrac12 - \tfrac32 + 0 = -1$$</div>
        <div class="fx center">$$\text{fila 2}: \;-\tfrac12 + \tfrac74 - \tfrac34 = \frac{-2 + 7 - 3}{4} = \frac{2}{4} = \tfrac12$$</div>
        <div class="fx center">$$[T(2,1,-1)]_{B'} = \begin{pmatrix} -1 \\ \tfrac{1}{2} \end{pmatrix}$$</div>

        <h3>Verificación por el camino corto</h3>
        <p>Con la expresión del inciso c): $\;T(2,1,-1) = (2(1) + (-1),\;\; -2 + 6 - 2) = (1,\, 2)$.</p>
        <p>Y pasando $(1,2)$ a coordenadas de $B' = \{(-1,-1),(0,2)\}$: de $\alpha(-1,-1) + \beta(0,2) = (1,2)$ sale $-\alpha = 1 \Rightarrow \alpha = -1$, y $-\alpha + 2\beta = 2 \Rightarrow 1 + 2\beta = 2 \Rightarrow \beta = \tfrac12$.</p>
        <div class="fx center">$$[(1,2)]_{B'} = \begin{pmatrix} -1 \\ \tfrac12\end{pmatrix} \;✓$$</div>
        <p>Los dos caminos coinciden.</p>
        <div class="note tip"><b class="lbl">Cuál conviene en el parcial</b>
        Si ya se calculó la expresión analítica (inciso c), el camino corto es <strong>mucho</strong> más rápido: evaluar $T$ y pasar a coordenadas de una base de $\mathbb{R}^2$ es un sistema de $2\times2$. El camino largo —convertir a $B$ y multiplicar— tiene sentido cuando no se dispone de la expresión.
        <p>Las <strong>dos</strong> conversiones que advierte [[u6-de-matriz-a-tl]] están presentes acá: entrada ($C \to B$) y salida ($B' \to$ vector, si se pidiera). Olvidar cualquiera de las dos es el error más costoso de la unidad.</p></div>`,
        resultado: tex`$[T(2,1,-1)]_{B'} = \binom{-1}{1/2}$. (Control: $T(2,1,-1) = (1,2)$, y $(1,2) = -1(-1,-1) + \frac12(0,2)$.)` }
    ]},

  /* ========================= 15 ========================= */
  { id: 'tp6-15', num: '15',
    enunciado: tex`<p>Sean $C_3$ y $C_2$ las bases canónicas de $\mathbb{R}^3$ y $\mathbb{R}^2$, $B = \{a,b,c\}$ una base de $\mathbb{R}^3$, $B' = \{u,w\}$ una base de $\mathbb{R}^2$ y $T: \mathbb{R}^3 \to \mathbb{R}^2$ una transformación lineal.</p>
    <p>Conociendo $[x]_B$, ¿es posible hallar…? Para los casos en que sea posible, indicar <strong>cómo lo calcularía</strong> utilizando matrices de cambio o de transformación.</p>
    <div class="note warn"><b class="lbl">La pregunta de fondo en todos los incisos</b>
    Antes de armar cualquier cadena de matrices hay que chequear algo más básico: <strong>¿el objeto pedido tiene sentido?</strong> $x$ vive en $\mathbb{R}^3$ y $T(x)$ en $\mathbb{R}^2$. Pedir las coordenadas de un vector de $\mathbb{R}^2$ en una base de $\mathbb{R}^3$ —o al revés— no es un cálculo difícil: es un <em>error de espacio</em>, y la respuesta correcta es que no se puede.
    <p>Tres de los cinco incisos son de ese tipo. Ver el mapa de [[u6-que-se-puede-calcular]].</p></div>`,
    incisos: [

      { id: 'tp6-15a', rot: 'a', enunciado: tex`$[T(x)]_{B'}$`,
        conceptos: ['u6-que-se-puede-calcular', 'u6-matriz-asociada'],
        resolucion: tex`<p><strong>Sí es posible</strong>, y es el caso más directo de todos.</p>
        <div class="fx center">$$[T(x)]_{B'} = [T]_{BB'}\;[x]_B$$</div>
        <p>La matriz $[T]_{BB'}$ es exactamente la que toma coordenadas en $B$ (dominio) y devuelve coordenadas en $B'$ (codominio), que es justo lo que se tiene y lo que se busca ([[u6-matriz-asociada]]).</p>
        <p><strong>Control de subíndices:</strong> $\;[T]_{B\boxed{B'}}\,[x]_{\boxed{B}}$ — la entrada está en $B$ y coincide con el subíndice derecho de la matriz; la salida queda en $B'$ ✓</p>
        <div class="note"><b class="lbl">Qué hace falta conocer</b> La matriz $[T]_{BB'}$. Si en cambio se conociera $[T]_{C_3C_2}$, habría que componer: $[T(x)]_{B'} = [\;]_{C_2B'}\,[T]_{C_3C_2}\,[\;]_{BC_3}\,[x]_B$. Igual es posible.</div>`,
        resultado: tex`<strong>Sí:</strong> $[T(x)]_{B'} = [T]_{BB'}\,[x]_B$.` },

      { id: 'tp6-15b', rot: 'b', enunciado: tex`$[T(x)]_{B}$`,
        conceptos: ['u6-que-se-puede-calcular'],
        resolucion: tex`<p><strong>No es posible</strong> — y no por falta de datos, sino porque <strong>la expresión no tiene sentido</strong>.</p>
        <h3>Por qué</h3>
        <p>$T: \mathbb{R}^3 \to \mathbb{R}^2$, así que $T(x) \in \mathbb{R}^2$. Pero $B = \{a,b,c\}$ es una base de $\mathbb{R}^3$, con <strong>tres</strong> vectores.</p>
        <p>Escribir $[T(x)]_B$ exigiría expresar un vector de $\mathbb{R}^2$ como combinación lineal de tres vectores de $\mathbb{R}^3$ — que son objetos de otro espacio. Las coordenadas de un vector sólo están definidas respecto de una base <strong>del espacio al que el vector pertenece</strong> ([[u5-coordenadas]]).</p>
        <div class="note"><b class="lbl">El control de tamaños también lo detecta</b> Cualquier matriz que produjera $[T(x)]_B$ tendría que tener 3 filas, y la única matriz de transformación disponible, $[T]_{BB'}$, tiene 2 (una por vector de $B'$). No hay forma de encadenar matrices que dé un resultado de 3 filas partiendo de $T(x)$.</div>`,
        resultado: tex`<strong>No.</strong> $T(x) \in \mathbb{R}^2$ y $B$ es base de $\mathbb{R}^3$: la expresión no está definida.` },

      { id: 'tp6-15c', rot: 'c', enunciado: tex`$[x]_{C_3}$`,
        conceptos: ['u6-que-se-puede-calcular', 'u5-matriz-cambio'],
        resolucion: tex`<p><strong>Sí es posible.</strong> Es un cambio de base dentro de $\mathbb{R}^3$, donde $x$ efectivamente vive.</p>
        <div class="fx center">$$[x]_{C_3} = [\;]_{B\,C_3}\;[x]_B$$</div>
        <p>Y la matriz $[\;]_{B C_3}$ se escribe <strong>sin hacer ninguna cuenta</strong>: sus columnas son los vectores de $B$ en coordenadas canónicas, es decir $a$, $b$ y $c$ tal como están dados ([[u5-matriz-cambio]]):</p>
        <div class="fx center">$$[\;]_{B\,C_3} = \bigl(\,a \;\big|\; b \;\big|\; c\,\bigr)$$</div>
        <div class="note tip"><b class="lbl">Equivalentemente, sin matrices</b>
        Si $[x]_B = (\alpha,\beta,\gamma)^t$, entonces $x = \alpha a + \beta b + \gamma c$, y las coordenadas canónicas de $x$ son sus propias componentes. Multiplicar por $[\;]_{BC_3}$ <em>es</em> esa combinación lineal, empaquetada — como se vio en el TP 5 ej. 8.f.</div>`,
        resultado: tex`<strong>Sí:</strong> $[x]_{C_3} = [\;]_{BC_3}\,[x]_B$, donde $[\;]_{BC_3}$ tiene a $a$, $b$, $c$ como columnas (se escribe sin calcular).` },

      { id: 'tp6-15d', rot: 'd', enunciado: tex`$[T(x)]_{C_3}$`,
        conceptos: ['u6-que-se-puede-calcular'],
        resolucion: tex`<p><strong>No es posible</strong>, por la misma razón que el inciso b).</p>
        <p>$T(x) \in \mathbb{R}^2$, y $C_3$ es la base canónica de $\mathbb{R}^3$. Pedir las coordenadas de un vector del plano respecto de una base del espacio es un error de espacio, no un cálculo pendiente.</p>
        <div class="note tip"><b class="lbl">Lo que sí se puede, y conviene aclararlo</b>
        Cambiando $C_3$ por $C_2$ —la canónica de $\mathbb{R}^2$, que es la que corresponde al codominio— el cálculo <strong>sí</strong> es posible:
        $$[T(x)]_{C_2} = [\;]_{B'C_2}\,[T]_{BB'}\,[x]_B$$
        con $[\;]_{B'C_2} = (\,u \mid w\,)$, los vectores de $B'$ como columnas. Y de hecho $[T(x)]_{C_2}$ <em>es</em> el vector $T(x)$ mismo.
        <p>En un parcial conviene responder las dos cosas: que lo pedido no está definido, y cuál es la variante que sí lo está. Muestra que se entendió la distinción y no que se salteó el ítem.</p></div>`,
        resultado: tex`<strong>No.</strong> $T(x) \in \mathbb{R}^2$ y $C_3$ es base de $\mathbb{R}^3$. Sí sería posible $[T(x)]_{C_2} = [\;]_{B'C_2}[T]_{BB'}[x]_B$.` },

      { id: 'tp6-15e', rot: 'e', enunciado: tex`$[x]_{B'}$`,
        conceptos: ['u6-que-se-puede-calcular'],
        resolucion: tex`<p><strong>No es posible.</strong> Es el error de espacio en la dirección opuesta a b) y d).</p>
        <p>Acá $x \in \mathbb{R}^3$ (tiene tres coordenadas en $B$) y $B' = \{u,w\}$ es base de $\mathbb{R}^2$, con sólo <strong>dos</strong> vectores. Un vector de $\mathbb{R}^3$ no se puede escribir como combinación lineal de dos vectores del plano: ni siquiera pertenece al mismo espacio.</p>
        <div class="note tip"><b class="lbl">El resumen de los cinco incisos</b>
        <div class="tbl"><table>
          <thead><tr><th></th><th>Objeto</th><th>Vive en</th><th>Base de</th><th>¿Posible?</th></tr></thead>
          <tbody>
            <tr><td>a</td><td>$T(x)$</td><td>$\mathbb{R}^2$</td><td>$B'$: $\mathbb{R}^2$</td><td><strong>sí</strong></td></tr>
            <tr><td>b</td><td>$T(x)$</td><td>$\mathbb{R}^2$</td><td>$B$: $\mathbb{R}^3$</td><td>no</td></tr>
            <tr><td>c</td><td>$x$</td><td>$\mathbb{R}^3$</td><td>$C_3$: $\mathbb{R}^3$</td><td><strong>sí</strong></td></tr>
            <tr><td>d</td><td>$T(x)$</td><td>$\mathbb{R}^2$</td><td>$C_3$: $\mathbb{R}^3$</td><td>no</td></tr>
            <tr><td>e</td><td>$x$</td><td>$\mathbb{R}^3$</td><td>$B'$: $\mathbb{R}^2$</td><td>no</td></tr>
          </tbody>
        </table></div>
        <strong>La regla única:</strong> el cálculo es posible si y sólo si el objeto y la base viven en el <em>mismo</em> espacio. Cuando coinciden, siempre hay una cadena de matrices que lo resuelve; cuando no, no hay cadena posible — y el control de tamaños lo confirma. Es todo el contenido de [[u6-que-se-puede-calcular]].</div>`,
        resultado: tex`<strong>No.</strong> $x \in \mathbb{R}^3$ y $B'$ es base de $\mathbb{R}^2$. Posibles: sólo a) y c).` }
    ]}

]});
