/* TP 4 — Espacios vectoriales
   Enunciado: "EspaciosVectoriales.pdf" (7_EAL_2026/4_espacios_vectoriales) */

EAL.tp({
  id: 'tp4', num: 4, unidad: 'u4',
  titulo: 'Espacios vectoriales',
  resumen: 'Axiomas, subespacios, intersecciones, combinación lineal, generadores, independencia lineal, base y dimensión.',
  nota: tex`<b class="lbl">Antes de abrir las resoluciones</b> Intentá cada ítem a mano y usá la resolución para <strong>autocorregirte</strong>.<br><br>
  <b class="lbl">El cambio de mentalidad de esta unidad</b> Casi todos los ítems se reducen a <strong>armar un sistema lineal y leer de qué tipo es</strong>:
  <div class="tbl"><table>
    <thead><tr><th>Pregunta</th><th>Sistema</th><th>Qué se lee</th></tr></thead>
    <tbody>
      <tr><td>¿es combinación lineal?</td><td>no homogéneo</td><td>compatible ⇒ sí; incompatible ⇒ no</td></tr>
      <tr><td>¿es L.I.?</td><td><strong>homogéneo</strong></td><td>sólo la trivial ⇒ L.I.; infinitas ⇒ L.D.</td></tr>
      <tr><td>¿qué subespacio generan?</td><td>no homogéneo con $x,y,z$ de parámetros</td><td>la condición de compatibilidad <em>es</em> la ecuación</td></tr>
      <tr><td>base y dimensión de $\{$ecuaciones$\}$</td><td>homogéneo</td><td>un vector por variable libre</td></tr>
    </tbody>
  </table></div>
  Y con polinomios o matrices es idéntico: se los trata como listas de coeficientes. Ver [[u4-hallar-base]] y [[u4-hallar-generado]].`,

  ejercicios: [

  /* ========================= 1 ========================= */
  { id: 'tp4-1', num: '1',
    enunciado: tex`<p>Determinar cuáles de los siguientes conjuntos son $\mathbb{R}$-espacios vectoriales ($+$ y $\cdot$ son las operaciones usuales). En caso de no serlo, indicar qué axiomas no se verifican:</p>
    <div class="note tip"><b class="lbl">Cómo se responde</b> Para probar que <strong>sí</strong> es espacio vectorial hay que verificar los <strong>diez</strong> axiomas de la [[u4-espacio-vectorial|Definición 1]]. Para probar que <strong>no</strong>, basta exhibir los que fallan <em>con un contraejemplo numérico concreto</em>: decir «no cumple» sin el caso puntual no alcanza.</div>`,
    incisos: [

      { id: 'tp4-1a', rot: 'a', enunciado: tex`El conjunto de las duplas $(x,y) \in \mathbb{R}^2$ con las operaciones
      $$(x_1,y_1) \oplus (x_2,y_2) = (x_1, y_2), \qquad \alpha \odot (x_1,y_1) = (\alpha x_1, \alpha y_1)$$`,
        conceptos: ['u4-espacio-vectorial', 'u4-neutro-no-usual'],
        pista: tex`La suma se queda con la <em>primera</em> coordenada del primer vector y la <em>segunda</em> del segundo. Probá a cambiar el orden de los sumandos.`,
        resolucion: tex`<p><strong>No es espacio vectorial.</strong> Fallan cuatro axiomas. El producto por escalar es el usual, así que los problemas están todos en la suma.</p>

        <h3>Lo que sí se cumple</h3>
        <ul>
          <li><strong>i) Cerradura:</strong> $(x_1, y_2) \in \mathbb{R}^2$ ✓</li>
          <li><strong>ii) Asociativa:</strong> $\;(u \oplus v) \oplus w = (u_1, v_2) \oplus w = (u_1, w_2)$, y $\;u \oplus (v \oplus w) = u \oplus (v_1, w_2) = (u_1, w_2)$. Iguales ✓ (es el único axioma «sorpresa» que sobrevive).</li>
          <li><strong>vi, ix, x)</strong> se cumplen porque el producto es el usual ✓</li>
          <li><strong>vii) Primera distributiva:</strong> $\alpha \odot (u \oplus v) = \alpha \odot (u_1, v_2) = (\alpha u_1, \alpha v_2)$, y $\;\alpha\odot u \oplus \alpha \odot v = (\alpha u_1, \alpha u_2) \oplus (\alpha v_1, \alpha v_2) = (\alpha u_1, \alpha v_2)$. Iguales ✓</li>
        </ul>

        <h3>iii) No existe neutro — FALLA</h3>
        <p>Se busca $e = (e_1, e_2)$ tal que $u \oplus e = e \oplus u = u$ para todo $u$:</p>
        <div class="fx center">$$u \oplus e = (u_1,\; e_2) = (u_1, u_2) \;\Longrightarrow\; e_2 = u_2$$</div>
        <div class="fx center">$$e \oplus u = (e_1,\; u_2) = (u_1, u_2) \;\Longrightarrow\; e_1 = u_1$$</div>
        <p>El candidato a neutro tendría que ser $e = (u_1, u_2) = u$, es decir <strong>depende del vector</strong>. Un neutro debe ser un elemento fijo que sirva para todos, así que no existe.</p>

        <h3>iv) No existe opuesto — FALLA</h3>
        <p>El axioma iv se enuncia en términos del neutro $e$. Como no hay neutro, no hay opuesto: el axioma no se puede ni verificar.</p>

        <h3>v) No es conmutativa — FALLA</h3>
        <p>Contraejemplo con $u = (1,0)$ y $v = (0,1)$:</p>
        <div class="fx center">$$u \oplus v = (1,\; 1), \qquad v \oplus u = (0,\; 0)$$</div>
        <p>$(1,1) \neq (0,0)$ ✓ falla.</p>

        <h3>viii) Segunda distributiva — FALLA</h3>
        <p>Contraejemplo con $\alpha = \beta = 1$ y $u = (1,1)$:</p>
        <div class="fx center">$$(\alpha + \beta) \odot u = 2 \odot (1,1) = (2,\, 2)$$</div>
        <div class="fx center">$$\alpha \odot u \oplus \beta \odot u = (1,1) \oplus (1,1) = (1,\, 1)$$</div>
        <p>$(2,2) \neq (1,1)$ ✓ falla.</p>
        <div class="note"><b class="lbl">En general</b> $(\alpha+\beta)\odot u = ((\alpha+\beta)u_1,\; (\alpha+\beta)u_2)$ mientras que $\alpha\odot u \oplus \beta \odot u = (\alpha u_1,\; \beta u_2)$. Coinciden sólo si $\beta u_1 = 0$ y $\alpha u_2 = 0$.</div>`,
        resultado: tex`<strong>No es espacio vectorial.</strong> Fallan los axiomas <strong>iii</strong> (no hay neutro), <strong>iv</strong> (no hay opuesto), <strong>v</strong> (no es conmutativa) y <strong>viii</strong> (segunda distributiva). Los otros seis se cumplen, incluida la asociativa.` },

      { id: 'tp4-1b', rot: 'b', enunciado: tex`El conjunto de las duplas $(x,y) \in \mathbb{R}^2$, con la dupla $(a,b)$ fija, y las operaciones
      $$(x_1,y_1) \oplus (x_2,y_2) = (x_1,y_1) + (x_2,y_2) - (a,b), \qquad \alpha \odot (x_1,y_1) = (a,b) + \alpha\bigl[(x_1,y_1) - (a,b)\bigr]$$`,
        conceptos: ['u4-espacio-vectorial', 'u4-neutro-no-usual'],
        pista: tex`Escribí $c = (a,b)$ y trabajá con vectores, sin componentes: las cuentas quedan de una línea. Buscá el neutro resolviendo $u \oplus e = u$, y no asumas que es $(0,0)$.`,
        resolucion: tex`<p><strong>Sí es espacio vectorial.</strong> Conviene abreviar $c = (a,b)$ y operar con vectores enteros. Las dos operaciones son</p>
        <div class="fx center">$$u \oplus v = u + v - c, \qquad\qquad \alpha \odot u = c + \alpha\,(u - c)$$</div>
        <p>donde $+$, $-$ y el producto del miembro derecho son los usuales de $\mathbb{R}^2$.</p>

        <h3>Los diez axiomas</h3>
        <p><strong>i) Cerradura.</strong> $u + v - c$ es suma y resta de vectores de $\mathbb{R}^2$, luego está en $\mathbb{R}^2$ ✓</p>
        <p><strong>ii) Asociativa.</strong></p>
        <div class="fx center">$$(u \oplus v) \oplus w = (u+v-c) + w - c = u+v+w-2c$$</div>
        <div class="fx center">$$u \oplus (v \oplus w) = u + (v+w-c) - c = u+v+w-2c \;✓$$</div>
        <p><strong>iii) Neutro.</strong> Se resuelve $u \oplus e = u$:</p>
        <div class="fx center">$$u + e - c = u \;\Longrightarrow\; e = c = (a,\, b)$$</div>
        <p>Existe y es fijo ✓. <strong>El neutro de este espacio es $(a,b)$, no $(0,0)$.</strong></p>
        <p><strong>iv) Opuesto.</strong> Se resuelve $u \oplus u' = e = c$:</p>
        <div class="fx center">$$u + u' - c = c \;\Longrightarrow\; u' = 2c - u = (2a - x,\; 2b - y)$$</div>
        <p>Existe para todo $u$ ✓</p>
        <p><strong>v) Conmutativa.</strong> $u+v-c = v+u-c$ por conmutatividad de la suma usual ✓</p>
        <p><strong>vi) Ley de composición externa.</strong> $c + \alpha(u-c) \in \mathbb{R}^2$ ✓</p>
        <p><strong>vii) Primera distributiva.</strong></p>
        <div class="fx center">$$\alpha \odot (u \oplus v) = c + \alpha\bigl[(u+v-c) - c\bigr] = c + \alpha(u-c) + \alpha(v-c)$$</div>
        <div class="fx center">$$\alpha\odot u \oplus \alpha \odot v = \bigl[c + \alpha(u-c)\bigr] + \bigl[c + \alpha(v-c)\bigr] - c = c + \alpha(u-c) + \alpha(v-c) \;✓$$</div>
        <p>El $-c$ de la suma es justamente lo que cancela el $c$ sobrante. Iguales.</p>
        <p><strong>viii) Segunda distributiva.</strong></p>
        <div class="fx center">$$(\alpha+\beta) \odot u = c + (\alpha+\beta)(u-c) = c + \alpha(u-c) + \beta(u-c)$$</div>
        <div class="fx center">$$\alpha \odot u \oplus \beta \odot u = \bigl[c+\alpha(u-c)\bigr] + \bigl[c+\beta(u-c)\bigr] - c = c + \alpha(u-c) + \beta(u-c) \;✓$$</div>
        <p><strong>ix) Asociativa de escalares.</strong></p>
        <div class="fx center">$$\alpha \odot (\beta \odot u) = c + \alpha\Bigl[\bigl(c + \beta(u-c)\bigr) - c\Bigr] = c + \alpha\beta\,(u-c) = (\alpha\beta)\odot u \;✓$$</div>
        <p><strong>x) Neutro multiplicativo.</strong> $\;1 \odot u = c + 1\cdot(u-c) = c + u - c = u$ ✓</p>

        <div class="note tip"><b class="lbl">Qué es este espacio, en realidad</b>
        Es $\mathbb{R}^2$ con el <strong>origen trasladado a $(a,b)$</strong>. La transformación $u \mapsto u - c$ convierte estas operaciones «raras» en las usuales, y por eso los diez axiomas se cumplen: la estructura es la misma, sólo cambió dónde está el cero.
        <p>Caso particular ilustrativo: con $(a,b) = (0,0)$ las dos fórmulas se reducen a la suma y el producto usuales.</p>
        <p>Y muestra algo importante: <strong>el «vector nulo» de un espacio vectorial no tiene por qué ser $(0,0)$.</strong> Es lo que el neutro resulte ser según las operaciones definidas. Por eso el [[u4-neutro-no-usual|método]] empieza siempre calculándolo.</p></div>`,
        resultado: tex`<strong>Sí es espacio vectorial</strong>, y se verifican los diez axiomas. Su neutro es $e = (a,b)$ y el opuesto de $(x,y)$ es $(2a-x,\; 2b-y)$. Es $\mathbb{R}^2$ con el origen trasladado a $(a,b)$.` }
    ]},

  /* ========================= 2 ========================= */
  { id: 'tp4-2', num: '2',
    enunciado: tex`<p><strong>Operaciones no usuales:</strong></p>`,
    incisos: [

      { id: 'tp4-2a', rot: 'a', enunciado: tex`Sea $\mathbb{R}^2$ con la suma usual y el producto de vectores por escalares definido como $\alpha \odot v = 2\alpha v$. Indicar, justificando la respuesta, si $\mathbb{R}^2$ es un espacio vectorial con dicho producto.`,
        conceptos: ['u4-espacio-vectorial', 'u4-neutro-no-usual'],
        pista: tex`Empezá por el axioma x, que es el más rápido de testear: ¿qué da $1 \odot v$?`,
        resolucion: tex`<p><strong>No es espacio vectorial.</strong> La suma es la usual, así que los axiomas i) a v) se cumplen sin más. Todo el problema está en el producto.</p>

        <h3>x) Neutro multiplicativo — FALLA</h3>
        <div class="fx center">$$1 \odot v = 2 \cdot 1 \cdot v = 2v \neq v \qquad \text{para todo } v \neq \vec 0$$</div>
        <p>Contraejemplo concreto: $\;1 \odot (1,0) = (2,0) \neq (1,0)$ ✓ falla.</p>

        <h3>ix) Asociativa de escalares — FALLA</h3>
        <div class="fx center">$$\alpha \odot (\beta \odot v) = \alpha \odot (2\beta v) = 2\alpha\,(2\beta v) = 4\alpha\beta\, v$$</div>
        <div class="fx center">$$(\alpha\beta) \odot v = 2\alpha\beta\, v$$</div>
        <p>Y $4\alpha\beta v \neq 2\alpha\beta v$ salvo que $\alpha\beta = 0$ o $v = \vec 0$. Contraejemplo con $\alpha = \beta = 1$, $v = (1,0)$:</p>
        <div class="fx center">$$1 \odot (1 \odot (1,0)) = 1 \odot (2,0) = (4,0), \qquad (1\cdot 1)\odot(1,0) = (2,0)$$</div>
        <p>$(4,0) \neq (2,0)$ ✓ falla.</p>

        <h3>Los que sí se cumplen (y conviene decirlo)</h3>
        <p><strong>vi)</strong> $2\alpha v \in \mathbb{R}^2$ ✓</p>
        <p><strong>vii)</strong> $\;\alpha \odot (u+v) = 2\alpha(u+v) = 2\alpha u + 2\alpha v = \alpha\odot u + \alpha \odot v$ ✓</p>
        <p><strong>viii)</strong> $\;(\alpha+\beta)\odot v = 2(\alpha+\beta)v = 2\alpha v + 2\beta v = \alpha \odot v + \beta \odot v$ ✓</p>
        <div class="note tip"><b class="lbl">Por qué las distributivas sobreviven y las otras no</b>
        Multiplicar por el factor fijo $2$ es una operación <strong>lineal</strong>, así que respeta las sumas: de ahí que vii) y viii) se cumplan. Lo que no respeta es la <em>composición</em> de escalares: aplicar la operación dos veces mete el factor $2$ dos veces, mientras que el miembro derecho lo mete una sola. Ese desajuste es exactamente lo que rompen los axiomas ix) y x).</div>`,
        resultado: tex`<strong>No es espacio vectorial.</strong> Fallan los axiomas <strong>ix</strong> ($\alpha\odot(\beta\odot v) = 4\alpha\beta v$ pero $(\alpha\beta)\odot v = 2\alpha\beta v$) y <strong>x</strong> ($1 \odot v = 2v \neq v$). Los ocho restantes se cumplen.` },

      { id: 'tp4-2b', rot: 'b', enunciado: tex`En $\mathbb{R}^2$ se define $(x,y) \oplus (a,b) = (x\cdot a,\; y \cdot b)$. ¿Es verdadero o falso que todo elemento de $\mathbb{R}^2$ posee inverso aditivo? Justificar.`,
        conceptos: ['u4-espacio-vectorial', 'u4-neutro-no-usual', 'u4-teorema-2'],
        pista: tex`Para hablar de inverso primero hay que saber cuál es el neutro de <em>esta</em> operación. Calculalo, y después mirá qué pasa con un vector que tenga alguna componente nula.`,
        resolucion: tex`<p><strong>FALSO.</strong> La operación es el producto componente a componente, y hay elementos sin inverso.</p>

        <h3>Paso 1 — ¿Cuál es el neutro?</h3>
        <p>Se busca $e = (e_1,e_2)$ con $(x,y) \oplus e = (x,y)$ para todo $(x,y)$:</p>
        <div class="fx center">$$(x\,e_1,\; y\,e_2) = (x,\, y)$$</div>
        <p>Para que valga para <em>todo</em> $(x,y)$ hace falta $e_1 = 1$ y $e_2 = 1$:</p>
        <div class="fx center">$$e = (1,\, 1)$$</div>
        <p>Comprobación: $(x,y)\oplus(1,1) = (x\cdot 1,\; y \cdot 1) = (x,y)$ ✓ para todo $(x,y)$, incluidos los de componente nula.</p>
        <div class="note"><b class="lbl">Primera sorpresa</b> El «vector nulo» de esta estructura es $(1,1)$, no $(0,0)$. Es el mismo fenómeno del ejercicio 1.b: el neutro es lo que las operaciones determinen.</div>

        <h3>Paso 2 — ¿Todo elemento tiene inverso?</h3>
        <p>Dado $(x,y)$ se busca $(x',y')$ con $(x,y)\oplus(x',y') = e = (1,1)$:</p>
        <div class="fx center">$$(x\,x',\; y\,y') = (1,\, 1) \;\Longrightarrow\; x\,x' = 1 \;\text{ y }\; y\,y' = 1$$</div>
        <div class="fx center">$$x' = \frac{1}{x}, \qquad y' = \frac{1}{y}$$</div>
        <p>Esto requiere $x \neq 0$ <strong>y</strong> $y \neq 0$.</p>

        <h3>Contraejemplo</h3>
        <p>Tomemos $(0, 5)$. Cualquier candidato $(x', y')$ da</p>
        <div class="fx center">$$(0,5) \oplus (x',y') = (0 \cdot x',\; 5y') = (0,\; 5y') \neq (1,1)$$</div>
        <p>porque la primera componente es $0$ sea cual sea $x'$, y nunca puede ser $1$. Luego $(0,5)$ <strong>no tiene inverso</strong>.</p>
        <p>Lo mismo pasa con todo vector que tenga al menos una componente nula: los dos ejes coordenados enteros quedan sin inverso, incluido $(0,0)$.</p>
        <div class="note tip"><b class="lbl">Consecuencia</b> Falla el axioma <strong>iv</strong> de la [[u4-espacio-vectorial|Definición 1]], así que $(\mathbb{R}^2, \oplus)$ con esta operación <em>no</em> puede ser espacio vectorial, cualquiera sea el producto por escalares que se le agregue.</div>
        <div class="note"><b class="lbl">Por qué pasa esto</b> La operación hereda el problema de la multiplicación de números reales: $0$ no tiene inverso multiplicativo. Al hacerlo componente a componente, basta un $0$ en cualquier coordenada para arruinar el inverso del vector entero.</div>`,
        resultado: tex`<strong>Falso.</strong> El neutro es $e = (1,1)$, y el inverso de $(x,y)$ sería $\left(\frac1x, \frac1y\right)$, que existe sólo si $x \neq 0$ y $y \neq 0$. Contraejemplo: $(0,5)$ no tiene inverso, porque $(0,5)\oplus(x',y') = (0,\,5y') \neq (1,1)$ para todo $(x',y')$.` }
    ]},

  /* ========================= 3 ========================= */
  { id: 'tp4-3', num: '3',
    enunciado: tex`<p>Dado el espacio vectorial $V$, determinar en cada caso si $S$ es <strong>subespacio vectorial</strong> de $V$:</p>
    <div class="note tip"><b class="lbl">Siempre el [[u4-teorema-4|Teorema 4]], y en este orden</b>
    <strong>(1)</strong> ¿Está el nulo? Es el filtro más rápido: si no está, se termina ahí.
    <strong>(2)</strong> Cerradura de la suma. <strong>(3)</strong> Cerradura del producto por escalar.
    <p>Tres cuentas, no diez: los otros siete axiomas se heredan de $V$.</p></div>`,
    incisos: [

      { id: 'tp4-3a', rot: 'a', enunciado: tex`$S = \{(x,y,z) \in \mathbb{R}^3 : x + 2y - z = 0 \;\wedge\; y - z = 0\}$; $\;V = \mathbb{R}^3$.`,
        conceptos: ['u4-teorema-4', 'u4-subespacio'],
        resolucion: tex`<p><strong>Sí es subespacio.</strong> Son dos ecuaciones lineales <strong>homogéneas</strong>, y eso es siempre señal de subespacio.</p>
        <h3>1) El nulo pertenece</h3>
        <div class="fx center">$$(0,0,0): \quad 0 + 2(0) - 0 = 0 \;✓ \qquad\text{y}\qquad 0 - 0 = 0 \;✓$$</div>
        <h3>2) Cerradura de la suma</h3>
        <p>Sean $u = (x_1,y_1,z_1)$ y $v = (x_2,y_2,z_2)$ en $S$. Para $u + v = (x_1+x_2,\; y_1+y_2,\; z_1+z_2)$:</p>
        <div class="fx center">$$(x_1+x_2) + 2(y_1+y_2) - (z_1+z_2) = \underbrace{(x_1 + 2y_1 - z_1)}_{=\,0} + \underbrace{(x_2+2y_2-z_2)}_{=\,0} = 0 \;✓$$</div>
        <div class="fx center">$$(y_1+y_2) - (z_1+z_2) = \underbrace{(y_1-z_1)}_{=\,0} + \underbrace{(y_2-z_2)}_{=\,0} = 0 \;✓$$</div>
        <h3>3) Cerradura del producto por escalar</h3>
        <p>Sea $\alpha \in \mathbb{R}$ y $u \in S$. Para $\alpha u = (\alpha x, \alpha y, \alpha z)$:</p>
        <div class="fx center">$$\alpha x + 2\alpha y - \alpha z = \alpha\,\underbrace{(x + 2y - z)}_{=\,0} = 0 \;✓ \qquad \alpha y - \alpha z = \alpha\,\underbrace{(y-z)}_{=\,0} = 0 \;✓$$</div>
        <p>Las tres condiciones se cumplen, luego $S$ es subespacio de $\mathbb{R}^3$ <strong>por teorema</strong>.</p>
        <div class="note tip"><b class="lbl">Qué es geométricamente, de paso</b>
        Resolviendo el sistema: de la 2.ª, $y = z$; de la 1.ª, $x = z - 2y = z - 2z = -z$. Los puntos son $(-z,\, z,\, z) = z\,(-1,1,1)$, así que
        $$S = \operatorname{gen}\{(-1,1,1)\}, \qquad \dim S = 1$$
        Es una <strong>recta que pasa por el origen</strong>, que es exactamente el tipo de subespacio propio de $\mathbb{R}^3$ que menciona la observación 5 del [[u4-teorema-4|Teorema 4]].</div>`,
        resultado: tex`<strong>Sí es subespacio.</strong> Es la recta $S = \operatorname{gen}\{(-1,1,1)\}$, de dimensión 1, que pasa por el origen.` },

      { id: 'tp4-3b', rot: 'b', enunciado: tex`$S = \{(x,y,z) \in \mathbb{R}^3 : 3x + y = z + 1\}$; $\;V = \mathbb{R}^3$.`,
        conceptos: ['u4-teorema-4'],
        pista: tex`Pasá todo a un miembro y mirá el término independiente.`,
        resolucion: tex`<p><strong>No es subespacio.</strong></p>
        <p>Reescribiendo la condición: $\;3x + y - z - 1 = 0$. Es una ecuación <strong>no homogénea</strong>: tiene término independiente $-1 \neq 0$.</p>
        <h3>Falla la condición 1: el nulo no pertenece</h3>
        <div class="fx center">$$(0,0,0): \quad 3(0) + 0 = 0 \qquad\text{pero}\qquad z + 1 = 0 + 1 = 1$$</div>
        <p>$0 \neq 1$, luego $(0,0,0) \notin S$. Por el [[u4-teorema-4|Teorema 4]] (y por la observación 1, que dice que todo subespacio contiene al nulo), <strong>$S$ no es subespacio</strong> y el análisis termina acá.</p>
        <h3>De paso, también fallan las otras dos</h3>
        <p>Conviene tener un contraejemplo a mano por si se pide. El punto $(0,1,0)$ está en $S$, porque $3(0) + 1 = 1 = 0 + 1$ ✓. Pero</p>
        <div class="fx center">$$2 \cdot (0,1,0) = (0,2,0): \quad 3(0) + 2 = 2 \neq 0 + 1 = 1$$</div>
        <p>así que $(0,2,0) \notin S$: falla la cerradura del producto por escalar. Y sumando $(0,1,0) + (0,1,0) = (0,2,0)$ se ve que también falla la de la suma.</p>
        <div class="note tip"><b class="lbl">La regla general que conviene internalizar</b>
        Un sistema de ecuaciones lineales <strong>homogéneo</strong> ($= 0$) siempre define un subespacio; uno <strong>no homogéneo</strong> ($\neq 0$) nunca lo define, porque deja al nulo afuera.
        <p>Geométricamente, $3x+y-z-1=0$ es un <strong>plano que no pasa por el origen</strong>. Los planos que sí pasan por el origen son subespacios de $\mathbb{R}^3$; los que no, no. Es el contraejemplo canónico.</p></div>`,
        resultado: tex`<strong>No es subespacio.</strong> La ecuación es no homogénea, así que $(0,0,0) \notin S$ (daría $0 = 1$). Es un plano que no pasa por el origen.` },

      { id: 'tp4-3c', rot: 'c', enunciado: tex`$S = \{A \in M_n(\mathbb{R}) : A = A^t\}$; $\;V = M_n(\mathbb{R})$.`,
        conceptos: ['u4-teorema-4', 'u4-subespacio'],
        pista: tex`Son las matrices simétricas. Las propiedades de la transpuesta ($(A+B)^t = A^t + B^t$ y $(\alpha A)^t = \alpha A^t$) hacen todo el trabajo.`,
        resolucion: tex`<p><strong>Sí es subespacio.</strong> $S$ es el conjunto de las matrices <strong>simétricas</strong> de orden $n$.</p>
        <h3>1) La matriz nula pertenece</h3>
        <p>$\;0^t = 0$, así que la matriz nula es simétrica ✓ (y es el vector nulo de $M_n(\mathbb{R})$).</p>
        <h3>2) Cerradura de la suma</h3>
        <p>Sean $A, B \in S$, es decir $A^t = A$ y $B^t = B$. Usando que la transpuesta distribuye sobre la suma:</p>
        <div class="fx center">$$(A+B)^t = A^t + B^t = A + B$$</div>
        <p>luego $A + B$ es simétrica ✓</p>
        <h3>3) Cerradura del producto por escalar</h3>
        <p>Sea $\alpha \in \mathbb{R}$ y $A \in S$:</p>
        <div class="fx center">$$(\alpha A)^t = \alpha\, A^t = \alpha A$$</div>
        <p>luego $\alpha A$ es simétrica ✓</p>
        <p>Las tres condiciones valen, así que $S$ es subespacio de $M_n(\mathbb{R})$ por el [[u4-teorema-4|Teorema 4]].</p>
        <div class="note tip"><b class="lbl">Su dimensión</b>
        Una matriz simétrica queda determinada por su diagonal ($n$ entradas) y por lo que está estrictamente arriba de ella ($\tfrac{n(n-1)}{2}$ entradas), ya que lo de abajo es copia. Luego
        $$\dim S = n + \frac{n(n-1)}{2} = \frac{n(n+1)}{2}$$
        Para $n = 2$ da $3$, que es exactamente el subespacio del ejercicio 11.c de este práctico.</div>
        <div class="note"><b class="lbl">Contraste útil</b> El conjunto de las matrices <strong>inversibles</strong> no es subespacio (la nula no está, y la suma de inversibles puede no ser inversible). El de las matrices de <strong>traza cero</strong> sí lo es, por el mismo argumento de linealidad que acá.</div>`,
        resultado: tex`<strong>Sí es subespacio</strong> (las matrices simétricas). Su dimensión es $\frac{n(n+1)}{2}$.` }
    ]},

  /* ========================= 4 ========================= */
  { id: 'tp4-4', num: '4',
    enunciado: tex`<p>Hallar la <strong>intersección</strong> entre los siguientes subespacios e indicar, en cada caso, qué representa geométricamente:</p>
    <div class="note tip"><b class="lbl">Método</b> Se juntan <em>todas</em> las ecuaciones de $S$ y de $T$ en un solo sistema homogéneo y se resuelve ([[u4-teorema-5|Teorema 5]], que garantiza que el resultado es subespacio). La interpretación sale de la dimensión: en $\mathbb{R}^3$, dimensión 2 ⇒ plano por el origen, 1 ⇒ recta por el origen, 0 ⇒ sólo el origen.</div>`,
    incisos: [

      { id: 'tp4-4a', rot: 'a', enunciado: tex`$S = \{(x,y,z) \in \mathbb{R}^3 : x+y-z=0\}$ y $T = \{(x,y,z) \in \mathbb{R}^3 : x - 2y + z = 0\}$`,
        conceptos: ['u4-teorema-5', 'u4-hallar-base', 'u3-planos-posicion'],
        resolucion: tex`<p>$S$ y $T$ son dos <strong>planos que pasan por el origen</strong> (cada uno es una ecuación homogénea en $\mathbb{R}^3$, así que $\dim S = \dim T = 2$).</p>
        <h3>El sistema</h3>
        <div class="fx center">$$\begin{cases} x + y - z = 0 \\ x - 2y + z = 0 \end{cases}$$</div>
        <p>Restando la 2.ª de la 1.ª: $\;3y - 2z = 0 \Rightarrow y = \dfrac{2z}{3}$.</p>
        <p>De la 1.ª: $\;x = z - y = z - \dfrac{2z}{3} = \dfrac{z}{3}$.</p>
        <p>Tomando $z = 3t$ para sacar los denominadores: $(x,y,z) = (t,\; 2t,\; 3t) = t\,(1,2,3)$.</p>
        <div class="fx center">$$S \cap T = \operatorname{gen}\{(1,2,3)\}, \qquad \dim(S\cap T) = 1$$</div>
        <p><strong>Base:</strong> $\{(1,2,3)\}$.</p>
        <h3>Verificación</h3>
        <p>$(1,2,3)$ en $S$: $\;1 + 2 - 3 = 0$ ✓. En $T$: $\;1 - 4 + 3 = 0$ ✓.</p>
        <p>Control independiente con la unidad 3: el director de la intersección de dos planos es el producto vectorial de los normales ([[u3-recta-interseccion]]):</p>
        <div class="fx center">$$(1,1,-1) \times (1,-2,1) = \breve i(1-2) - \breve j(1+1) + \breve k(-2-1) = (-1,-2,-3) = -(1,2,3) \;✓$$</div>
        <h3>Interpretación geométrica</h3>
        <p>Dos planos distintos que pasan por el origen se cortan en una <strong>recta que pasa por el origen</strong>. Acá es la recta de dirección $(1,2,3)$.</p>
        <div class="note"><b class="lbl">Por qué tenía que dar dimensión 1</b> Los normales $(1,1,-1)$ y $(1,-2,1)$ no son paralelos, así que los planos no son coincidentes ni paralelos: necesariamente se cortan en una recta. Si los normales hubieran sido paralelos, la intersección sería un plano (coincidentes) o vacía — pero «vacía» es imposible entre subespacios, porque ambos contienen al origen: en ese caso serían el mismo plano.</div>`,
        resultado: tex`$S \cap T = \operatorname{gen}\{(1,2,3)\}$, de dimensión 1. Geométricamente: una <strong>recta que pasa por el origen</strong>, intersección de dos planos por el origen.` },

      { id: 'tp4-4b', rot: 'b', enunciado: tex`$S = \{(x,y,z) \in \mathbb{R}^3 : -2x+4y-3z=0\}$ y $T = \{(x,y,z) \in \mathbb{R}^3 : x-2y=0 \;\wedge\; y-z=0\}$`,
        conceptos: ['u4-teorema-5', 'u4-hallar-base'],
        pista: tex`$T$ tiene dos ecuaciones: resolvelo primero y fijate qué dimensión tiene. Después basta ver si su generador cumple la ecuación de $S$.`,
        resolucion: tex`<p><strong>Paso 1 — ¿Qué es cada uno?</strong></p>
        <p>$S$: una ecuación homogénea en $\mathbb{R}^3$ ⇒ <strong>plano por el origen</strong>, $\dim S = 2$.</p>
        <p>$T$: dos ecuaciones. De $x = 2y$ y $z = y$, los puntos son $(2y,\; y,\; y) = y\,(2,1,1)$:</p>
        <div class="fx center">$$T = \operatorname{gen}\{(2,1,1)\}, \qquad \dim T = 1$$</div>
        <p>es decir una <strong>recta por el origen</strong>.</p>

        <p><strong>Paso 2 — La intersección.</strong> Como $T$ es una recta, basta ver si su generador está en el plano $S$:</p>
        <div class="fx center">$$-2(2) + 4(1) - 3(1) = -4 + 4 - 3 = -3 \neq 0$$</div>
        <p>$(2,1,1) \notin S$. Entonces, para un punto genérico $t(2,1,1)$ de $T$:</p>
        <div class="fx center">$$-2(2t) + 4t - 3t = -3t = 0 \;\Longrightarrow\; t = 0$$</div>
        <div class="fx center">$$S \cap T = \{(0,0,0)\}, \qquad \dim(S \cap T) = 0$$</div>
        <p><strong>Base:</strong> el subespacio nulo no tiene base (o su base es el conjunto vacío); por convención $\dim\{\vec 0\} = 0$ ([[u4-dimension]]).</p>

        <h3>Interpretación geométrica</h3>
        <p>La recta $T$ <strong>atraviesa</strong> el plano $S$, y lo hace exactamente en el origen. Es el único punto que comparten.</p>
        <div class="note tip"><b class="lbl">Nunca puede ser vacía</b>
        La intersección de dos subespacios <em>siempre</em> contiene al vector nulo, porque cada uno lo contiene ([[u4-teorema-4]], observación 1). Así que entre subespacios la respuesta «intersección vacía» no existe: el caso mínimo es el <strong>subespacio trivial</strong> $\{\vec 0\}$. Eso distingue este cálculo del de posiciones relativas de la unidad 3, donde un plano y una recta sí pueden no cortarse.</div>`,
        resultado: tex`$S \cap T = \{(0,0,0)\}$, de dimensión 0: el <strong>subespacio trivial</strong>. La recta $T$ corta al plano $S$ sólo en el origen.` },

      { id: 'tp4-4c', rot: 'c', enunciado: tex`$S = \{(x,y,z) \in \mathbb{R}^3 : 3x+y-2z=0\}$ y $T = \{(x,y,z) \in \mathbb{R}^3 : x+2y+z=0 \;\wedge\; -x-3y-2z=0\}$`,
        conceptos: ['u4-teorema-5', 'u4-hallar-base'],
        resolucion: tex`<p><strong>Paso 1 — Resolver $T$.</strong></p>
        <div class="fx center">$$\begin{cases} x + 2y + z = 0 \\ -x - 3y - 2z = 0 \end{cases}$$</div>
        <p>Sumando las dos: $\;-y - z = 0 \Rightarrow y = -z$.</p>
        <p>De la 1.ª: $\;x = -2y - z = 2z - z = z$.</p>
        <p>Los puntos son $(z,\; -z,\; z) = z\,(1,-1,1)$:</p>
        <div class="fx center">$$T = \operatorname{gen}\{(1,-1,1)\}, \qquad \dim T = 1$$</div>
        <p>$S$ es un plano por el origen, $\dim S = 2$.</p>

        <p><strong>Paso 2 — ¿Está $T$ dentro de $S$?</strong></p>
        <div class="fx center">$$3(1) + (-1) - 2(1) = 3 - 1 - 2 = 0 \;✓$$</div>
        <p>El generador de $T$ <strong>sí</strong> cumple la ecuación de $S$. Y entonces todo múltiplo también, porque $S$ es cerrado para el producto por escalar:</p>
        <div class="fx center">$$3(t) + (-t) - 2(t) = t\,(3 - 1 - 2) = 0 \qquad \forall t$$</div>
        <p>Luego $T \subseteq S$, y por lo tanto</p>
        <div class="fx center">$$S \cap T = T = \operatorname{gen}\{(1,-1,1)\}, \qquad \dim(S \cap T) = 1$$</div>
        <p><strong>Base:</strong> $\{(1,-1,1)\}$.</p>

        <h3>Interpretación geométrica</h3>
        <p>La recta $T$ está <strong>contenida</strong> en el plano $S$, así que la intersección es la recta $T$ misma.</p>
        <div class="note tip"><b class="lbl">Los tres casos del ejercicio, juntos</b>
        <div class="tbl"><table>
          <thead><tr><th>Inciso</th><th>$S$</th><th>$T$</th><th>$S \cap T$</th><th>Geometría</th></tr></thead>
          <tbody>
            <tr><td>a</td><td>plano</td><td>plano</td><td>recta (dim 1)</td><td>dos planos que se cortan</td></tr>
            <tr><td>b</td><td>plano</td><td>recta</td><td>$\{\vec 0\}$ (dim 0)</td><td>la recta atraviesa el plano</td></tr>
            <tr><td>c</td><td>plano</td><td>recta</td><td>la recta (dim 1)</td><td>la recta está en el plano</td></tr>
          </tbody>
        </table></div>
        Los incisos b) y c) tienen la <em>misma</em> forma y resultados opuestos: toda la diferencia está en si el generador de la recta cumple o no la ecuación del plano. Vale una sola cuenta.</div>`,
        resultado: tex`$S \cap T = T = \operatorname{gen}\{(1,-1,1)\}$, de dimensión 1. La recta $T$ está <strong>contenida</strong> en el plano $S$.` }
    ]},
  /* ========================= 5 ========================= */
  { id: 'tp4-5', num: '5',
    enunciado: tex`<p>Analizar si el vector $v$ es <strong>combinación lineal</strong> del conjunto $A$:</p>
    <div class="note tip"><b class="lbl">Método</b> Se plantea $v = \alpha v_1 + \beta v_2 + \gamma v_3$, se iguala componente a componente y queda un sistema. <strong>Compatible ⇒ sí; incompatible ⇒ no</strong> ([[u4-combinacion-lineal]]).</div>`,
    incisos: [

      { id: 'tp4-5a', rot: 'a', enunciado: tex`$v = (3,5,0)$ y $A = \{(1,2,3), (1,1,1), (4,6,8)\}$`,
        conceptos: ['u4-combinacion-lineal'],
        pista: tex`Armá el sistema y escalonalo. Y antes de eso, fijate si alguno de los tres vectores de $A$ es combinación de los otros: te dice qué esperar.`,
        resolucion: tex`<p><strong>No es combinación lineal.</strong></p>
        <h3>El sistema</h3>
        <p>$\;\alpha(1,2,3) + \beta(1,1,1) + \gamma(4,6,8) = (3,5,0)$ da, componente a componente:</p>
        <div class="fx center">$$\begin{cases} (1)\;\; \alpha + \beta + 4\gamma = 3 \\ (2)\;\; 2\alpha + \beta + 6\gamma = 5 \\ (3)\;\; 3\alpha + \beta + 8\gamma = 0 \end{cases}$$</div>
        <h3>Escalonar</h3>
        <p>Las restas sucesivas eliminan $\beta$ y dejan la misma expresión en los dos casos:</p>
        <div class="fx center">$$(2) - (1): \quad \alpha + 2\gamma = 5 - 3 = \;\;\;\,2$$</div>
        <div class="fx center">$$(3) - (2): \quad \alpha + 2\gamma = 0 - 5 = -5$$</div>
        <div class="note warn"><b class="lbl">Contradicción</b> El mismo bloque $\alpha + 2\gamma$ tendría que valer $2$ y $-5$ a la vez. El sistema es <strong>incompatible</strong>, así que $v$ <strong>no</strong> es combinación lineal de $A$.</div>

        <h3>Verificación por otro camino</h3>
        <p>Conviene mirar qué subespacio genera $A$. Resulta que</p>
        <div class="fx center">$$(4,6,8) = 2\,(1,2,3) + 2\,(1,1,1)$$</div>
        <p>(en efecto: $(2,4,6) + (2,2,2) = (4,6,8)$ ✓), así que el tercer vector es redundante y</p>
        <div class="fx center">$$\operatorname{gen}(A) = \operatorname{gen}\{(1,2,3),\, (1,1,1)\}$$</div>
        <p>que es un <strong>plano</strong> por el origen. Su normal es</p>
        <div class="fx center">$$(1,2,3) \times (1,1,1) = \breve i(2-3) - \breve j(1-3) + \breve k(1-2) = (-1,\, 2,\, -1)$$</div>
        <p>o sea $\operatorname{gen}(A) = \{(x,y,z) : -x + 2y - z = 0\}$. Evaluando en $v = (3,5,0)$:</p>
        <div class="fx center">$$-3 + 10 - 0 = 7 \neq 0$$</div>
        <p>$v$ no está en ese plano ✓ Confirma la incompatibilidad del sistema, por un camino completamente distinto.</p>
        <div class="note tip"><b class="lbl">Qué aporta esta segunda vía</b> No sólo dice que <em>no</em>, sino <strong>cuánto falta</strong>: $v$ se sale del plano generado. Y deja a la vista que $A$ es [[u4-li-ld|linealmente dependiente]], información que el sistema por sí solo no destaca.</div>`,
        resultado: tex`<strong>No.</strong> El sistema es incompatible ($\alpha+2\gamma$ debería valer $2$ y $-5$). De hecho $\operatorname{gen}(A)$ es el plano $-x+2y-z=0$, y $v=(3,5,0)$ da $7 \neq 0$.` },

      { id: 'tp4-5b', rot: 'b', enunciado: tex`$v = (2,2,0,1)$ y $A = \{(1,1,1,1), (0,1,1,1), (2,4,4,4)\}$`,
        conceptos: ['u4-combinacion-lineal'],
        pista: tex`Escribí las cuatro ecuaciones y comparalas entre sí antes de ponerte a escalonar.`,
        resolucion: tex`<p><strong>No es combinación lineal</strong>, y se ve sin escalonar nada.</p>
        <h3>El sistema</h3>
        <p>$\;\alpha(1,1,1,1) + \beta(0,1,1,1) + \gamma(2,4,4,4) = (2,2,0,1)$:</p>
        <div class="fx center">$$\begin{cases} (1)\;\; \alpha \phantom{{} + \beta} + 2\gamma = 2 \\ (2)\;\; \alpha + \beta + 4\gamma = 2 \\ (3)\;\; \alpha + \beta + 4\gamma = 0 \\ (4)\;\; \alpha + \beta + 4\gamma = 1 \end{cases}$$</div>
        <div class="note warn"><b class="lbl">Contradicción inmediata</b> Las ecuaciones (2), (3) y (4) tienen <strong>el mismo miembro izquierdo</strong> y términos independientes $2$, $0$ y $1$. No puede haber ningún $(\alpha,\beta,\gamma)$ que las satisfaga a la vez: basta cualquier par de ellas para que el sistema sea <strong>incompatible</strong>.</div>
        <h3>Por qué pasa: la forma de $\operatorname{gen}(A)$</h3>
        <p>Los tres vectores de $A$ tienen las componentes 2.ª, 3.ª y 4.ª <strong>iguales entre sí</strong>. Y además</p>
        <div class="fx center">$$(2,4,4,4) = 2\,(1,1,1,1) + 2\,(0,1,1,1)$$</div>
        <p>así que $\operatorname{gen}(A) = \operatorname{gen}\{(1,1,1,1), (0,1,1,1)\}$, y un elemento genérico es</p>
        <div class="fx center">$$\alpha(1,1,1,1) + \beta(0,1,1,1) = (\alpha,\; \alpha+\beta,\; \alpha+\beta,\; \alpha+\beta)$$</div>
        <p>es decir vectores de la forma $(a,\, b,\, b,\, b)$: <strong>las tres últimas componentes deben coincidir</strong>. En</p>
        <div class="fx center">$$v = (2,\; \underbrace{2,\; 0,\; 1}_{\text{distintas}})$$</div>
        <p>no coinciden, así que $v \notin \operatorname{gen}(A)$ ✓</p>
        <p>En ecuaciones, $\operatorname{gen}(A) = \{(x,y,z,t) \in \mathbb{R}^4 : y = z \;\wedge\; z = t\}$, de dimensión 2.</p>
        <div class="note tip"><b class="lbl">Lo que ahorra mirar antes de calcular</b> Reconocer el patrón «las últimas tres componentes son iguales» resuelve el ítem de un vistazo. Escalonar también funciona, pero da más trabajo y no explica <em>por qué</em> falla.</div>`,
        resultado: tex`<strong>No.</strong> Las ecuaciones 2.ª, 3.ª y 4.ª del sistema tienen igual miembro izquierdo y términos independientes $2$, $0$ y $1$: incompatible. $\operatorname{gen}(A) = \{(a,b,b,b)\}$ y $v$ no tiene sus tres últimas componentes iguales.` }
    ]},

  /* ========================= 6 ========================= */
  { id: 'tp4-6', num: '6',
    enunciado: tex`<p><strong>Combinación lineal en otros espacios:</strong></p>
    <div class="note tip"><b class="lbl">Es el mismo método</b> Con polinomios se igualan los <strong>coeficientes de cada potencia</strong>; con matrices, las <strong>entradas</strong>. En los dos casos queda un sistema lineal idéntico en estructura al de $\mathbb{R}^n$. Eso es, en el fondo, lo que la unidad 4 viene a decir.</div>`,
    incisos: [

      { id: 'tp4-6a', rot: 'a', enunciado: tex`Determinar si el polinomio $P(x) = 2x^3 - 2x^2 + 1$ es combinación lineal del conjunto $\{x^3 - x^2 + 1;\; x^2 + 2x;\; x + 4\}$.`,
        conceptos: ['u4-combinacion-lineal', 'u4-dimension'],
        pista: tex`Igualá coeficiente a coeficiente, empezando por $x^3$, que tiene una sola incógnita. Son cuatro ecuaciones (incluido el término constante) y tres incógnitas.`,
        resolucion: tex`<p><strong>No es combinación lineal.</strong></p>
        <h3>El sistema</h3>
        <p>$\;\alpha(x^3-x^2+1) + \beta(x^2+2x) + \gamma(x+4) = 2x^3 - 2x^2 + 1$. Igualando coeficientes:</p>
        <div class="tbl"><table>
          <thead><tr><th>Potencia</th><th>Ecuación</th></tr></thead>
          <tbody>
            <tr><td>$x^3$</td><td>$\alpha = 2$</td></tr>
            <tr><td>$x^2$</td><td>$-\alpha + \beta = -2$</td></tr>
            <tr><td>$x^1$</td><td>$2\beta + \gamma = 0$</td></tr>
            <tr><td>$x^0$</td><td>$\alpha + 4\gamma = 1$</td></tr>
          </tbody>
        </table></div>
        <h3>Resolver en cascada</h3>
        <p>Las tres primeras ecuaciones determinan todo:</p>
        <div class="fx center">$$\alpha = 2 \;\Longrightarrow\; -2 + \beta = -2 \;\Longrightarrow\; \beta = 0 \;\Longrightarrow\; 2(0) + \gamma = 0 \;\Longrightarrow\; \gamma = 0$$</div>
        <p>Y ahora se verifica la cuarta, que es la que no se usó:</p>
        <div class="fx center">$$\alpha + 4\gamma = 2 + 4(0) = 2 \qquad\text{pero debería ser}\qquad 1$$</div>
        <div class="note warn"><b class="lbl">$2 \neq 1$: incompatible</b> Las tres primeras ecuaciones fuerzan $(\alpha,\beta,\gamma) = (2,0,0)$, y con esos valores la cuarta no se cumple. No hay solución, así que $P(x)$ <strong>no</strong> es combinación lineal del conjunto.</div>
        <h3>Verificación directa</h3>
        <p>Con $(\alpha,\beta,\gamma) = (2,0,0)$ la combinación daría</p>
        <div class="fx center">$$2(x^3 - x^2 + 1) = 2x^3 - 2x^2 + 2$$</div>
        <p>que coincide con $P(x) = 2x^3-2x^2+1$ en los grados $3$, $2$ y $1$ pero <strong>no en el término constante</strong>: $2$ contra $1$. Esa unidad de diferencia es exactamente la incompatibilidad.</p>
        <div class="note tip"><b class="lbl">El término constante es una ecuación como cualquier otra</b>
        El error típico es olvidarlo y «ajustar» sólo las potencias visibles. En $P_3$ hay <strong>cuatro</strong> coordenadas ($\dim P_3 = 4$, base $\{1,x,x^2,x^3\}$, ver [[u4-dimension]]), así que el sistema tiene cuatro ecuaciones. Acá es justamente la cuarta la que decide.</div>`,
        resultado: tex`<strong>No.</strong> Las tres primeras ecuaciones fuerzan $\alpha=2$, $\beta=0$, $\gamma=0$, pero entonces el término constante da $2$ en lugar de $1$: el sistema es incompatible.` },

      { id: 'tp4-6b', rot: 'b', enunciado: tex`Analizar si la matriz $\begin{pmatrix} 1 & 2 \\ 3 & -1 \end{pmatrix}$ es combinación lineal de las matrices $\begin{pmatrix} 1 & 2 \\ 3 & -1 \end{pmatrix}$; $\begin{pmatrix} 1 & 4 \\ -1 & 2 \end{pmatrix}$; $\begin{pmatrix} 0 & 2 \\ 3 & 0 \end{pmatrix}$.`,
        conceptos: ['u4-combinacion-lineal'],
        pista: tex`Mirá bien la matriz objetivo y la primera del conjunto antes de armar el sistema.`,
        resolucion: tex`<p><strong>Sí es combinación lineal</strong>, y de la manera más directa posible: <strong>la matriz buscada es la primera del conjunto</strong>.</p>
        <div class="fx center">$$\begin{pmatrix} 1 & 2 \\ 3 & -1 \end{pmatrix} = 1 \cdot \begin{pmatrix} 1 & 2 \\ 3 & -1 \end{pmatrix} + 0 \cdot \begin{pmatrix} 1 & 4 \\ -1 & 2 \end{pmatrix} + 0 \cdot \begin{pmatrix} 0 & 2 \\ 3 & 0 \end{pmatrix}$$</div>
        <p>Siempre que un vector pertenece al conjunto, es trivialmente combinación lineal de él (con coeficiente 1 en él y 0 en los demás).</p>
        <h3>¿Es la única manera? Sí, y conviene mostrarlo</h3>
        <p>Planteando $\;\alpha M_1 + \beta M_2 + \gamma M_3 = \begin{pmatrix} 1 & 2 \\ 3 & -1\end{pmatrix}$ entrada por entrada:</p>
        <div class="fx center">$$\begin{pmatrix} \alpha + \beta & 2\alpha + 4\beta + 2\gamma \\ 3\alpha - \beta + 3\gamma & -\alpha + 2\beta \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & -1 \end{pmatrix}$$</div>
        <div class="fx center">$$\begin{cases}
        (1,1):\;\; \alpha + \beta = 1 \\
        (1,2):\;\; 2\alpha + 4\beta + 2\gamma = 2 \;\Longleftrightarrow\; \alpha + 2\beta + \gamma = 1 \\
        (2,1):\;\; 3\alpha - \beta + 3\gamma = 3 \\
        (2,2):\;\; -\alpha + 2\beta = -1
        \end{cases}$$</div>
        <p>De la 1.ª, $\beta = 1 - \alpha$. Sustituyendo en la 4.ª:</p>
        <div class="fx center">$$-\alpha + 2(1-\alpha) = -1 \;\Longrightarrow\; -3\alpha + 2 = -1 \;\Longrightarrow\; \alpha = 1, \quad \beta = 0$$</div>
        <p>De la 2.ª: $\;1 + 0 + \gamma = 1 \Rightarrow \gamma = 0$. Y se controla la 3.ª: $\;3(1) - 0 + 3(0) = 3$ ✓</p>
        <p>El sistema es <strong>compatible determinado</strong>: la solución $(\alpha,\beta,\gamma) = (1,0,0)$ es única.</p>
        <div class="note tip"><b class="lbl">Lo que dice la unicidad</b>
        Que el sistema tenga solución <em>única</em> indica que el conjunto $\{M_1, M_2, M_3\}$ es <strong>linealmente independiente</strong>. Si hubiera sido L.D., la escritura existiría pero habría infinitas (ver la nota en [[u4-combinacion-lineal]]). Vale la pena cerrar el ítem con esa observación: no sólo responde «sí», sino que clasifica el conjunto.</div>`,
        resultado: tex`<strong>Sí</strong>, con $(\alpha,\beta,\gamma) = (1,0,0)$: la matriz es la primera del conjunto. El sistema es compatible <em>determinado</em>, así que la escritura es única y el conjunto es L.I.` },

      { id: 'tp4-6c', rot: 'c', enunciado: tex`Indicar para qué valores de $k$ el vector $(1,-2,k)$ es combinación lineal de los vectores $(3,0,2)$ y $(2,-1,5)$.`,
        conceptos: ['u4-combinacion-lineal', 'u4-hallar-generado'],
        pista: tex`Dos de las tres ecuaciones no tienen $k$: resolvelas primero y la tercera te da el valor.`,
        resolucion: tex`<p>Se plantea $\;\alpha(3,0,2) + \beta(2,-1,5) = (1,-2,k)$:</p>
        <div class="fx center">$$\begin{cases} (1)\;\; 3\alpha + 2\beta = 1 \\ (2)\;\; \phantom{3\alpha} - \beta = -2 \\ (3)\;\; 2\alpha + 5\beta = k \end{cases}$$</div>
        <h3>Resolver</h3>
        <p>La ecuación (2) da directamente $\beta = 2$. Sustituyendo en (1):</p>
        <div class="fx center">$$3\alpha + 4 = 1 \;\Longrightarrow\; 3\alpha = -3 \;\Longrightarrow\; \alpha = -1$$</div>
        <p>Y ahora (3) <strong>determina</strong> $k$:</p>
        <div class="fx center">$$k = 2(-1) + 5(2) = -2 + 10 = 8$$</div>
        <div class="fx center">$$\boxed{k = 8}$$</div>
        <p><strong>Verificación.</strong></p>
        <div class="fx center">$$-1\,(3,0,2) + 2\,(2,-1,5) = (-3,0,-2) + (4,-2,10) = (1,-2,8) \;✓$$</div>

        <h3>Verificación por el camino del plano</h3>
        <p>$(3,0,2)$ y $(2,-1,5)$ no son paralelos, así que generan un plano por el origen cuyo normal es</p>
        <div class="fx center">$$(3,0,2) \times (2,-1,5) = \breve i(0 + 2) - \breve j(15 - 4) + \breve k(-3 - 0) = (2,\, -11,\, -3)$$</div>
        <p>es decir $\operatorname{gen}\{(3,0,2),(2,-1,5)\} = \{(x,y,z) : 2x - 11y - 3z = 0\}$. Pidiendo que $(1,-2,k)$ lo cumpla:</p>
        <div class="fx center">$$2(1) - 11(-2) - 3k = 0 \;\Longrightarrow\; 2 + 22 = 3k \;\Longrightarrow\; k = 8 \;✓$$</div>
        <div class="note tip"><b class="lbl">Por qué el valor es único</b>
        Las dos primeras ecuaciones ya fijan $\alpha$ y $\beta$ sin intervención de $k$, y la tercera no es una condición sobre las incógnitas sino la <strong>definición</strong> de $k$. Dicho geométricamente: la recta $\{(1,-2,k) : k \in \mathbb{R}\}$ es vertical y no es paralela al plano generado, así que lo corta en un único punto. Si el plano hubiera sido paralelo a esa recta (normal con tercera componente nula), no habría solución o habría infinitas.</div>`,
        resultado: tex`$k = 8$, con $(1,-2,8) = -1\,(3,0,2) + 2\,(2,-1,5)$. Es el único valor: el plano generado es $2x - 11y - 3z = 0$.` }
    ]},

  /* ========================= 7 ========================= */
  { id: 'tp4-7', num: '7',
    enunciado: tex`<p><strong>Hallar:</strong></p>
    <div class="note tip"><b class="lbl">Dos caminos para hallar el subespacio generado</b>
    <strong>(1) Sistemático</strong> ([[u4-hallar-generado]]): se plantea $(x,y,z) = \alpha u + \beta v$, se escalona tratando $x,y,z$ como constantes, y la condición de compatibilidad <em>es</em> la ecuación buscada. Funciona en cualquier espacio.
    <p><strong>(2) Geométrico, sólo en $\mathbb{R}^3$:</strong> si $u \not\parallel v$ generan un plano por el origen de normal $u \times v$, y la ecuación es $\vec n \cdot (x,y,z) = 0$. Es mucho más rápido.</p>
    <p>Lo primero, siempre: contar cuántos de los vectores dados son realmente independientes.</p></div>`,
    incisos: [

      { id: 'tp4-7a', rot: 'a', enunciado: tex`El subespacio de $\mathbb{R}^3$ generado por $u = (1,-1,2)$ y $v = (-1,2,-3)$.`,
        conceptos: ['u4-hallar-generado', 'u4-generado', 'u4-teorema-9'],
        resolucion: tex`<p>Primero: $u$ y $v$ <strong>no son paralelos</strong> (de $(1,-1,2)$ a $(-1,2,-3)$ la primera componente exige factor $-1$ y la segunda $-2$). Luego generan un <strong>plano</strong> por el origen, de dimensión 2.</p>
        <h3>Camino geométrico</h3>
        <div class="fx center">$$\vec n = u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & -1 & 2 \\ -1 & 2 & -3 \end{vmatrix}
        = \breve i(3-4) - \breve j(-3+2) + \breve k(2-1) = (-1,\, 1,\, 1)$$</div>
        <p>La ecuación es $\;-x + y + z = 0$, o equivalentemente</p>
        <div class="fx center">$$S = \{(x,y,z) \in \mathbb{R}^3 : x - y - z = 0\}, \qquad \dim S = 2$$</div>
        <h3>Camino sistemático (verificación)</h3>
        <p>$(x,y,z) = \alpha(1,-1,2) + \beta(-1,2,-3)$:</p>
        <div class="fx center">$$\begin{cases} (1)\;\; \alpha - \beta = x \\ (2)\;\; -\alpha + 2\beta = y \\ (3)\;\; 2\alpha - 3\beta = z \end{cases}$$</div>
        <p>$(1) + (2)$: $\;\beta = x + y$. Y de $(1)$: $\;\alpha = x + \beta = 2x + y$.</p>
        <p>Sustituyendo en $(3)$, que es la ecuación «sobrante»:</p>
        <div class="fx center">$$2(2x+y) - 3(x+y) = 4x + 2y - 3x - 3y = x - y$$</div>
        <p>y eso debe valer $z$, de donde la <strong>condición de compatibilidad</strong>:</p>
        <div class="fx center">$$x - y = z \;\Longleftrightarrow\; x - y - z = 0 \;✓$$</div>
        <p>El mismo resultado.</p>
        <p><strong>Controles:</strong> $u = (1,-1,2) \Rightarrow 1 + 1 - 2 = 0$ ✓; $\;v = (-1,2,-3) \Rightarrow -1 - 2 + 3 = 0$ ✓.</p>
        <div class="note"><b class="lbl">Es subespacio sin verificar nada</b> Por el [[u4-teorema-9|Teorema 9]], todo espacio generado es automáticamente un subespacio. No hace falta chequear el [[u4-teorema-4|Teorema 4]].</div>`,
        resultado: tex`$S = \{(x,y,z) : x - y - z = 0\}$, un plano por el origen de $\dim 2$, con base $\{(1,-1,2),\,(-1,2,-3)\}$.` },

      { id: 'tp4-7b', rot: 'b', enunciado: tex`El subespacio de $\mathbb{R}^2$ generado por $u = (2,-3)$ y $v = (-6,9)$.`,
        conceptos: ['u4-hallar-generado', 'u4-teorema-12'],
        pista: tex`Compará los dos vectores antes de hacer cualquier cuenta.`,
        resolucion: tex`<p>Lo primero que hay que ver:</p>
        <div class="fx center">$$v = (-6, 9) = -3\,(2,-3) = -3\,u$$</div>
        <p>Son <strong>paralelos</strong>, es decir [[u4-teorema-12|linealmente dependientes]] (Teorema 12). Entonces $v$ no aporta nada nuevo:</p>
        <div class="fx center">$$\operatorname{gen}\{u, v\} = \operatorname{gen}\{u\} = \{t\,(2,-3) : t \in \mathbb{R}\}$$</div>
        <p>que es una <strong>recta por el origen</strong>, de dimensión 1.</p>
        <h3>Su ecuación</h3>
        <p>Los puntos son $(x,y) = (2t,\, -3t)$. Eliminando $t$: $\;t = \tfrac{x}{2}$ y $y = -3\tfrac{x}{2}$, de donde</p>
        <div class="fx center">$$S = \{(x,y) \in \mathbb{R}^2 : 3x + 2y = 0\}, \qquad \dim S = 1$$</div>
        <p>Equivalentemente, en $\mathbb{R}^2$ un normal a $(2,-3)$ es $(3,2)$ ([[u2-implicita]]), y la recta por el origen con ese normal es $3x + 2y = 0$.</p>
        <p><strong>Controles:</strong> $u = (2,-3) \Rightarrow 6 - 6 = 0$ ✓; $\;v = (-6,9) \Rightarrow -18 + 18 = 0$ ✓.</p>
        <div class="note warn"><b class="lbl">El error esperado</b> Responder «$\mathbb{R}^2$» porque hay dos vectores. La cantidad de vectores no determina la dimensión del generado: lo que importa es <strong>cuántos son independientes</strong>. Acá hay dos vectores pero sólo uno aporta dirección, así que la dimensión es 1 y no 2.</div>`,
        resultado: tex`$S = \{(x,y) : 3x+2y = 0\}$, una recta por el origen de $\dim 1$, con base $\{(2,-3)\}$. Los dos vectores son paralelos ($v = -3u$).` },

      { id: 'tp4-7c', rot: 'c', enunciado: tex`El subespacio de $\mathbb{R}^3$ generado por $u = (3,-1,2)$, $v = (1,1,2)$ y $w = (4,0,3)$.`,
        conceptos: ['u4-hallar-generado', 'u4-li-ld', 'u4-teorema-15-17'],
        pista: tex`Son tres vectores de $\mathbb{R}^3$: hay un atajo de una sola cuenta. Y ojo, $u+v$ se parece mucho a $w$ pero fijate bien.`,
        resolucion: tex`<p>Tres vectores en $\mathbb{R}^3$: por el [[u4-teorema-15-17|Teorema 17]] basta <strong>un determinante</strong> para decidir.</p>
        <div class="fx center">$$\det \begin{pmatrix} 3 & -1 & 2 \\ 1 & 1 & 2 \\ 4 & 0 & 3 \end{pmatrix}$$</div>
        <p>Conviene desarrollar por la tercera fila, que tiene un cero:</p>
        <div class="fx center">$$= 4 \begin{vmatrix} -1 & 2 \\ 1 & 2 \end{vmatrix} - 0 + 3 \begin{vmatrix} 3 & -1 \\ 1 & 1 \end{vmatrix} = 4(-2-2) + 3(3+1) = -16 + 12 = -4$$</div>
        <div class="fx center">$$\det = -4 \neq 0 \;\Longrightarrow\; \text{los tres vectores son L.I.}$$</div>
        <p>Y tres vectores L.I. en $\mathbb{R}^3$ <strong>generan</strong> $\mathbb{R}^3$, por el [[u4-teorema-19|Teorema 19]] (o por el [[u4-teorema-26|Teorema 26]], que los vuelve directamente una base):</p>
        <div class="fx center">$$S = \operatorname{gen}\{u,v,w\} = \mathbb{R}^3, \qquad \dim S = 3$$</div>
        <p>No hay ninguna ecuación que caracterice a $S$: es todo el espacio.</p>
        <div class="note warn"><b class="lbl">La trampa del enunciado</b>
        $u + v = (3,-1,2) + (1,1,2) = (4,\, 0,\, 4)$, mientras que $w = (4,\, 0,\, 3)$. <strong>Coinciden en dos componentes y difieren en la tercera.</strong> Si fueran iguales, el conjunto sería L.D. y generaría sólo un plano. Esa unidad de diferencia es lo que hace que el determinante valga $-4$ y no $0$, y cambia por completo la respuesta.
        <p>Es un buen recordatorio de por qué conviene hacer la cuenta y no confiar en el parecido visual.</p></div>
        <div class="note tip"><b class="lbl">Base del subespacio</b> Como $S = \mathbb{R}^3$, una base es el propio conjunto $\{(3,-1,2), (1,1,2), (4,0,3)\}$ — y también la canónica, claro.</div>`,
        resultado: tex`$S = \mathbb{R}^3$, de $\dim 3$. El determinante vale $-4 \neq 0$, así que los tres vectores son L.I. y generan todo el espacio. (Atención: $u+v = (4,0,4) \neq w = (4,0,3)$.)` }
    ]},

  /* ========================= 8 ========================= */
  { id: 'tp4-8', num: '8',
    enunciado: tex`<p>Dados los siguientes conjuntos de vectores:</p>
    <ol type="a">
      <li>$\{(1,-1,3); (-1,0,-2); (1,2,0)\}$</li>
      <li>$\{(1,-1,0); (0,1,1); (-1,1,1)\}$</li>
      <li>$\{(1,-2,-1); (-1,2,1); (3,-6,-3)\}$</li>
      <li>$\{(1,-1,-2,-3); (2,-1,-3,-4); (-1,1,2,3); (0,1,1,2)\}$</li>
      <li>$\left\{ \begin{pmatrix} 1 & 0 \\ 1 & 2\end{pmatrix}; \begin{pmatrix} 0 & 1 \\ 1 & -1\end{pmatrix}; \begin{pmatrix} 1 & 2 \\ 3 & 0\end{pmatrix} \right\}$</li>
    </ol>`,
    incisos: [

      { id: 'tp4-8i', rot: 'i', enunciado: tex`Determinar si los vectores <strong>generan</strong> los espacios vectoriales a los que pertenecen; en caso negativo, hallar los subespacios vectoriales que generan.`,
        conceptos: ['u4-generado', 'u4-hallar-generado', 'u4-teorema-19', 'u4-teorema-10'],
        pista: tex`Para a), b) y c) alcanza un determinante. Para d) y e) empezá contando: ¿alcanza la cantidad de vectores para generar el espacio? ($\dim \mathbb{R}^4 = 4$, $\dim M_2 = 4$.)`,
        resolucion: tex`<h3>a) $\{(1,-1,3); (-1,0,-2); (1,2,0)\}$ en $\mathbb{R}^3$</h3>
        <div class="fx center">$$\det \begin{pmatrix} 1 & -1 & 3 \\ -1 & 0 & -2 \\ 1 & 2 & 0 \end{pmatrix}
        = 1(0 + 4) - (-1)(0 + 2) + 3(-2 - 0) = 4 + 2 - 6 = 0$$</div>
        <p>$\det = 0$ ⇒ <strong>L.D. ⇒ NO generan $\mathbb{R}^3$.</strong> Los dos primeros no son paralelos, así que la dimensión es 2: generan un <strong>plano</strong>.</p>
        <div class="fx center">$$\vec n = (1,-1,3) \times (-1,0,-2) = \breve i(2 - 0) - \breve j(-2+3) + \breve k(0-1) = (2,\, -1,\, -1)$$</div>
        <div class="fx center">$$S_a = \{(x,y,z) : 2x - y - z = 0\}, \qquad \dim S_a = 2$$</div>
        <p>Control de los tres: $(1,-1,3) \Rightarrow 2+1-3 = 0$ ✓; $(-1,0,-2) \Rightarrow -2-0+2 = 0$ ✓; $(1,2,0) \Rightarrow 2-2-0 = 0$ ✓.</p>

        <h3>b) $\{(1,-1,0); (0,1,1); (-1,1,1)\}$ en $\mathbb{R}^3$</h3>
        <div class="fx center">$$\det \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & 1 \\ -1 & 1 & 1 \end{pmatrix}
        = 1(1 - 1) - (-1)(0 + 1) + 0 = 0 + 1 + 0 = 1 \neq 0$$</div>
        <p>$\det \neq 0$ ⇒ <strong>L.I. ⇒ SÍ generan $\mathbb{R}^3$</strong> (por el [[u4-teorema-19|Teorema 19]]).</p>
        <div class="fx center">$$S_b = \mathbb{R}^3, \qquad \dim S_b = 3$$</div>

        <h3>c) $\{(1,-2,-1); (-1,2,1); (3,-6,-3)\}$ en $\mathbb{R}^3$</h3>
        <p>Acá no hace falta determinante: los tres son <strong>múltiplos del primero</strong>.</p>
        <div class="fx center">$$(-1,2,1) = -1\,(1,-2,-1), \qquad (3,-6,-3) = 3\,(1,-2,-1)$$</div>
        <p>Por el [[u4-teorema-10|Teorema 10]] agregar múltiplos no agrega capacidad generadora, así que</p>
        <div class="fx center">$$S_c = \operatorname{gen}\{(1,-2,-1)\}, \qquad \dim S_c = 1$$</div>
        <p>es una <strong>recta por el origen</strong>. <strong>NO generan $\mathbb{R}^3$.</strong> Sus ecuaciones: de $(x,y,z) = t(1,-2,-1)$ sale $y = -2x$ y $z = -x$, o sea</p>
        <div class="fx center">$$S_c = \{(x,y,z) : 2x + y = 0 \;\wedge\; x + z = 0\}$$</div>

        <h3>d) $\{(1,-1,-2,-3); (2,-1,-3,-4); (-1,1,2,3); (0,1,1,2)\}$ en $\mathbb{R}^4$</h3>
        <p>Se detectan dos relaciones. La primera, a ojo:</p>
        <div class="fx center">$$v_3 = (-1,1,2,3) = -\,(1,-1,-2,-3) = -v_1$$</div>
        <p>La segunda, escalonando las filas $v_1$, $v_2$, $v_4$:</p>
        <div class="fx center">$$\begin{pmatrix} 1 & -1 & -2 & -3 \\ 2 & -1 & -3 & -4 \\ 0 & 1 & 1 & 2 \end{pmatrix}
        \xrightarrow{\;F_2 - 2F_1\;} \begin{pmatrix} 1 & -1 & -2 & -3 \\ 0 & 1 & 1 & 2 \\ 0 & 1 & 1 & 2 \end{pmatrix}$$</div>
        <p>Las filas 2 y 3 quedaron <strong>iguales</strong>, lo que dice que $v_2 = 2v_1 + v_4$. Comprobación: $2(1,-1,-2,-3) + (0,1,1,2) = (2,-1,-3,-4) = v_2$ ✓</p>
        <p>Luego sólo dos vectores son independientes: <strong>NO generan $\mathbb{R}^4$</strong> ($\dim\mathbb{R}^4 = 4$).</p>
        <div class="fx center">$$S_d = \operatorname{gen}\{(1,-1,-2,-3),\; (0,1,1,2)\}, \qquad \dim S_d = 2$$</div>
        <p><strong>Ecuaciones.</strong> $(x,y,z,t) = \alpha(1,-1,-2,-3) + \beta(0,1,1,2)$ da $x = \alpha$, $\;y = -\alpha+\beta$, $\;z = -2\alpha+\beta$, $\;t = -3\alpha+2\beta$. De las dos primeras, $\alpha = x$ y $\beta = x + y$; sustituyendo:</p>
        <div class="fx center">$$z = -2x + (x+y) = -x + y, \qquad t = -3x + 2(x+y) = -x + 2y$$</div>
        <div class="fx center">$$S_d = \{(x,y,z,t) \in \mathbb{R}^4 : x - y + z = 0 \;\wedge\; x - 2y + t = 0\}$$</div>
        <p>Controles: $v_1 = (1,-1,-2,-3) \Rightarrow 1+1-2 = 0$ ✓ y $1+2-3 = 0$ ✓. $\;v_2 = (2,-1,-3,-4) \Rightarrow 2+1-3=0$ ✓ y $2+2-4=0$ ✓.</p>

        <h3>e) Tres matrices en $M_2(\mathbb{R})$</h3>
        <p>$\dim M_2(\mathbb{R}) = 2 \cdot 2 = 4$ ([[u4-dimension]]), y hay sólo <strong>tres</strong> matrices. Por el [[u4-teorema-24-25|Teorema 24]] es imposible generar un espacio de dimensión 4 con 3 vectores: <strong>NO generan $M_2(\mathbb{R})$</strong>. Eso se puede afirmar sin ninguna cuenta.</p>
        <p>¿Cuánto generan? Planteando $\alpha M_1 + \beta M_2 + \gamma M_3 = 0$:</p>
        <div class="fx center">$$\begin{cases} (1,1):\; \alpha + \gamma = 0 \\ (1,2):\; \beta + 2\gamma = 0 \\ (2,1):\; \alpha + \beta + 3\gamma = 0 \\ (2,2):\; 2\alpha - \beta = 0 \end{cases}$$</div>
        <p>De las dos primeras: $\alpha = -\gamma$ y $\beta = -2\gamma$. Y esos valores satisfacen las otras dos <strong>idénticamente</strong>:</p>
        <div class="fx center">$$(2,1):\; -\gamma - 2\gamma + 3\gamma = 0 \;✓ \qquad (2,2):\; -2\gamma + 2\gamma = 0 \;✓$$</div>
        <p>$\gamma$ queda <strong>libre</strong> ⇒ hay soluciones no triviales ⇒ <strong>L.D.</strong> Con $\gamma = 1$: $\alpha = -1$, $\beta = -2$, es decir</p>
        <div class="fx center">$$M_3 = M_1 + 2M_2: \qquad \begin{pmatrix} 1 & 0 \\ 1 & 2\end{pmatrix} + 2\begin{pmatrix} 0 & 1 \\ 1 & -1\end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix} \;✓$$</div>
        <div class="fx center">$$S_e = \operatorname{gen}\{M_1, M_2\}, \qquad \dim S_e = 2$$</div>
        <p><strong>Ecuaciones.</strong> $\;a M_1 + b M_2 = \begin{pmatrix} a & b \\ a+b & 2a-b \end{pmatrix}$, así que una matriz $\begin{pmatrix} x & y \\ z & t\end{pmatrix}$ está en $S_e$ si y sólo si</p>
        <div class="fx center">$$S_e = \left\{ \begin{pmatrix} x & y \\ z & t \end{pmatrix} : z = x + y \;\wedge\; t = 2x - y \right\}$$</div>
        <p>Control con $M_3 = \begin{pmatrix} 1 & 2 \\ 3 & 0\end{pmatrix}$: $\;z = 3 = 1+2$ ✓ y $t = 0 = 2(1) - 2$ ✓.</p>

        <div class="note tip"><b class="lbl">Resumen</b>
        <div class="tbl"><table>
          <thead><tr><th></th><th>Espacio</th><th>¿Genera?</th><th>$\dim$</th><th>Subespacio generado</th></tr></thead>
          <tbody>
            <tr><td>a</td><td>$\mathbb{R}^3$</td><td>no</td><td>2</td><td>$2x-y-z=0$</td></tr>
            <tr><td>b</td><td>$\mathbb{R}^3$</td><td><strong>sí</strong></td><td>3</td><td>$\mathbb{R}^3$</td></tr>
            <tr><td>c</td><td>$\mathbb{R}^3$</td><td>no</td><td>1</td><td>$2x+y=0 \wedge x+z=0$</td></tr>
            <tr><td>d</td><td>$\mathbb{R}^4$</td><td>no</td><td>2</td><td>$x-y+z=0 \wedge x-2y+t=0$</td></tr>
            <tr><td>e</td><td>$M_2(\mathbb{R})$</td><td>no</td><td>2</td><td>$z=x+y \wedge t=2x-y$</td></tr>
          </tbody>
        </table></div></div>`,
        resultado: tex`Sólo <strong>b)</strong> genera su espacio ($\mathbb{R}^3$, $\det = 1 \neq 0$). Los demás generan: a) el plano $2x-y-z=0$ ($\dim 2$); c) la recta $\operatorname{gen}\{(1,-2,-1)\}$ ($\dim 1$); d) $\{x-y+z=0 \wedge x-2y+t=0\}$ ($\dim 2$); e) $\operatorname{gen}\{M_1,M_2\}$ ($\dim 2$).` },

      { id: 'tp4-8ii', rot: 'ii', enunciado: tex`¿El vector $(2,-2,6)$ pertenece a alguno de los subespacios hallados en (i)?`,
        conceptos: ['u4-combinacion-lineal'],
        pista: tex`$(2,-2,6)$ vive en $\mathbb{R}^3$, así que sólo tiene sentido preguntárselo a tres de los cinco. Y para esos tres ya tenés las ecuaciones: alcanza con reemplazar.`,
        resolucion: tex`<p>$(2,-2,6) \in \mathbb{R}^3$, así que los candidatos son sólo <strong>a)</strong>, <strong>b)</strong> y <strong>c)</strong>. Los subespacios de d) y e) viven en $\mathbb{R}^4$ y en $M_2(\mathbb{R})$: la pregunta no tiene sentido para ellos, y conviene decirlo en lugar de omitirlos.</p>

        <h3>a) $S_a = \{2x - y - z = 0\}$</h3>
        <div class="fx center">$$2(2) - (-2) - 6 = 4 + 2 - 6 = 0 \;✓$$</div>
        <p><strong>SÍ pertenece.</strong></p>
        <div class="note"><b class="lbl">Se podía ver antes</b> $(2,-2,6) = 2\,(1,-1,3)$, y $(1,-1,3)$ es el primer vector del conjunto a). Al ser múltiplo de un generador, está en el generado por la cerradura del producto por escalar.</div>

        <h3>b) $S_b = \mathbb{R}^3$</h3>
        <p><strong>SÍ pertenece</strong>, trivialmente: el subespacio es todo el espacio, así que contiene cualquier vector de $\mathbb{R}^3$.</p>

        <h3>c) $S_c = \{2x + y = 0 \;\wedge\; x + z = 0\}$</h3>
        <div class="fx center">$$2(2) + (-2) = 2 \neq 0$$</div>
        <p>Ya falla la primera ecuación (la segunda también: $2 + 6 = 8 \neq 0$). <strong>NO pertenece.</strong></p>
        <p>Equivalentemente: $S_c = \operatorname{gen}\{(1,-2,-1)\}$ y $(2,-2,6)$ no es múltiplo de $(1,-2,-1)$ — el factor sería $2$ por la primera componente pero $1$ por la segunda.</p>

        <div class="note tip"><b class="lbl">Para qué sirvió el inciso (i)</b> Tener las <strong>ecuaciones</strong> de cada subespacio convierte este ítem en tres reemplazos. Sin ellas habría que armar y resolver tres sistemas de combinación lineal. Es el argumento a favor de pasar siempre de «generadores» a «ecuaciones».</div>`,
        resultado: tex`Pertenece a <strong>$S_a$</strong> (de hecho $(2,-2,6) = 2(1,-1,3)$) y a <strong>$S_b = \mathbb{R}^3$</strong>. <strong>No</strong> pertenece a $S_c$ ($2x+y = 2 \neq 0$). Para $S_d$ y $S_e$ la pregunta no aplica: están en $\mathbb{R}^4$ y en $M_2(\mathbb{R})$.` },

      { id: 'tp4-8iii', rot: 'iii', enunciado: tex`Dar <strong>base y dimensión</strong> de los subespacios hallados en el inciso (i).`,
        conceptos: ['u4-base', 'u4-dimension', 'u4-hallar-base'],
        pista: tex`En cada caso, quedate con los vectores del conjunto original que sean independientes: descartar los redundantes ya alcanza.`,
        resolucion: tex`<p>En todos los casos se toma como base un subconjunto <strong>maximal independiente</strong> del conjunto dado; las relaciones de dependencia ya se identificaron en (i).</p>
        <div class="tbl"><table>
          <thead><tr><th></th><th>Base</th><th>$\dim$</th><th>Qué se descartó y por qué</th></tr></thead>
          <tbody>
            <tr><td><strong>a</strong></td><td>$\{(1,-1,3),\; (-1,0,-2)\}$</td><td>2</td><td>$(1,2,0)$ es combinación de los otros dos ($\det = 0$)</td></tr>
            <tr><td><strong>b</strong></td><td>$\{(1,-1,0),\; (0,1,1),\; (-1,1,1)\}$</td><td>3</td><td>nada: los tres son L.I. ($\det = 1$)</td></tr>
            <tr><td><strong>c</strong></td><td>$\{(1,-2,-1)\}$</td><td>1</td><td>los otros dos son $-1$ y $3$ veces el primero</td></tr>
            <tr><td><strong>d</strong></td><td>$\{(1,-1,-2,-3),\; (0,1,1,2)\}$</td><td>2</td><td>$v_3 = -v_1$ y $v_2 = 2v_1 + v_4$</td></tr>
            <tr><td><strong>e</strong></td><td>$\left\{\begin{pmatrix}1&0\\1&2\end{pmatrix},\; \begin{pmatrix}0&1\\1&-1\end{pmatrix}\right\}$</td><td>2</td><td>$M_3 = M_1 + 2M_2$</td></tr>
          </tbody>
        </table></div>

        <h3>Por qué cada uno es efectivamente base</h3>
        <p>Hay que verificar las <strong>dos</strong> condiciones de la [[u4-base|Definición 20]], y la segunda sale gratis:</p>
        <ul>
          <li><strong>Generan:</strong> por construcción, ya que los vectores descartados son combinación lineal de los que quedaron, y quitar vectores redundantes no cambia el generado (es el recíproco del [[u4-teorema-10|Teorema 10]]).</li>
          <li><strong>Son L.I.:</strong> en a), b) y d) basta ver que los vectores que quedaron no son paralelos entre sí (en b) está el determinante); en c) un único vector no nulo es siempre L.I.; en e) el sistema homogéneo de (i) con $\gamma = 0$ fuerza $\alpha = \beta = 0$.</li>
        </ul>

        <div class="note tip"><b class="lbl">Bases alternativas, igualmente correctas</b>
        Ninguna de estas bases es única. Por ejemplo, para $S_a$ también sirve $\{(1,-1,3), (1,2,0)\}$, o la base que sale de resolver la ecuación $2x-y-z=0$ con el método de [[u4-hallar-base]]: despejando $z = 2x - y$, los puntos son $(x,\, y,\, 2x-y)$ y la base es $\{(1,0,2),\; (0,1,-1)\}$.
        <p>Lo que <strong>sí</strong> es único es la <strong>dimensión</strong>, por el [[u4-teorema-22|Teorema 22]]: todas las bases de un mismo subespacio tienen la misma cantidad de vectores. Es lo que hace que la columna $\dim$ de la tabla sea una respuesta sin ambigüedad.</div>`,
        resultado: tex`a) $\{(1,-1,3),(-1,0,-2)\}$, $\dim 2$. &nbsp; b) el conjunto entero, $\dim 3$. &nbsp; c) $\{(1,-2,-1)\}$, $\dim 1$. &nbsp; d) $\{(1,-1,-2,-3),(0,1,1,2)\}$, $\dim 2$. &nbsp; e) $\{M_1, M_2\}$, $\dim 2$.` }
    ]},
  /* ========================= 9 ========================= */
  { id: 'tp4-9', num: '9',
    enunciado: tex`<p>Determinar si los conjuntos de vectores indicados a continuación son <strong>linealmente independientes</strong>:</p>
    <div class="note tip"><b class="lbl">Método</b> Se plantea $\alpha_1 v_1 + \dots + \alpha_n v_n = \vec 0$ y se resuelve el sistema <strong>homogéneo</strong>: sólo la trivial ⇒ L.I.; infinitas ⇒ L.D. ([[u4-li-ld]]). Con exactamente $n$ vectores en un espacio de dimensión $n$ alcanza un determinante ([[u4-teorema-15-17|Teorema 17]]); con dos vectores, mirar si uno es múltiplo del otro ([[u4-teorema-12|Teorema 12]]).</div>`,
    incisos: [

      { id: 'tp4-9a', rot: 'a', enunciado: tex`$\{(2,1,1); (-1,1,1); (0,1,1)\}$`,
        conceptos: ['u4-li-ld', 'u4-teorema-15-17'],
        pista: tex`Mirá las componentes segunda y tercera de los tres vectores: hay algo en común que permite responder sin calcular el determinante.`,
        resolucion: tex`<p><strong>Son linealmente dependientes.</strong></p>
        <h3>Camino 1 — el determinante</h3>
        <div class="fx center">$$\det \begin{pmatrix} 2 & 1 & 1 \\ -1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}
        = 2(1-1) - 1(-1-0) + 1(-1-0) = 0 + 1 - 1 = 0$$</div>
        <p>$\det = 0$ ⇒ L.D. por el [[u4-teorema-15-17|Teorema 17]].</p>

        <h3>Camino 2 — el atajo estructural</h3>
        <p>Los tres vectores tienen la <strong>segunda y la tercera componente iguales</strong>: $(2,\mathbf{1},\mathbf{1})$, $(-1,\mathbf{1},\mathbf{1})$, $(0,\mathbf{1},\mathbf{1})$. Entonces los tres viven en</p>
        <div class="fx center">$$W = \{(x,y,z) \in \mathbb{R}^3 : y = z\}, \qquad \dim W = 2$$</div>
        <p>y por el [[u4-teorema-24-25|Teorema 24]], en un subespacio de dimensión 2 no puede haber 3 vectores L.I. <strong>Son L.D. sin hacer ninguna cuenta.</strong></p>

        <h3>La relación de dependencia</h3>
        <p>Conviene exhibirla. Planteando $\alpha(2,1,1) + \beta(-1,1,1) + \gamma(0,1,1) = \vec 0$:</p>
        <div class="fx center">$$\begin{cases} 2\alpha - \beta = 0 \\ \alpha + \beta + \gamma = 0 \\ \alpha + \beta + \gamma = 0 \end{cases}$$</div>
        <p>La 2.ª y la 3.ª son <strong>la misma ecuación</strong> (otra señal de la dependencia). De la 1.ª, $\beta = 2\alpha$; de la 2.ª, $\gamma = -\alpha - \beta = -3\alpha$. Con $\alpha = 1$:</p>
        <div class="fx center">$$(2,1,1) + 2\,(-1,1,1) - 3\,(0,1,1) = (2-2,\; 1+2-3,\; 1+2-3) = (0,0,0) \;✓$$</div>
        <p>Combinación no trivial que da el nulo ⇒ L.D., según la definición misma de [[u4-li-ld]].</p>
        <div class="note"><b class="lbl">Qué generan</b> Los tres generan el plano $y = z$, de dimensión 2. Una base es $\{(2,1,1), (-1,1,1)\}$, o la más simple $\{(1,0,0), (0,1,1)\}$.</div>`,
        resultado: tex`<strong>L.D.</strong> $\det = 0$, y la relación es $(2,1,1) + 2(-1,1,1) - 3(0,1,1) = \vec 0$. Atajo: los tres están en el plano $y=z$, de dimensión 2, así que tres vectores ahí no pueden ser L.I.` },

      { id: 'tp4-9b', rot: 'b', enunciado: tex`$\{(1,1,1); (3,-1,1)\}$`,
        conceptos: ['u4-li-ld', 'u4-teorema-12'],
        resolucion: tex`<p><strong>Son linealmente independientes.</strong></p>
        <p>Con sólo <strong>dos</strong> vectores se aplica el [[u4-teorema-12|Teorema 12]]: son L.D. si y sólo si uno es múltiplo escalar del otro. Comparando componente a componente:</p>
        <div class="fx center">$$\frac{3}{1} = 3, \qquad \frac{-1}{1} = -1, \qquad \frac{1}{1} = 1$$</div>
        <p>Las razones no coinciden, así que no hay ningún $\alpha$ con $(3,-1,1) = \alpha(1,1,1)$. Luego son <strong>L.I.</strong></p>
        <div class="note tip"><b class="lbl">Con dos vectores no hace falta sistema</b>
        Siempre que el conjunto tenga exactamente dos elementos, el Teorema 12 lo resuelve de un vistazo. Armar el sistema homogéneo es correcto pero innecesario:
        $$\alpha(1,1,1) + \beta(3,-1,1) = \vec 0 \;\Longrightarrow\; \begin{cases} \alpha + 3\beta = 0 \\ \alpha - \beta = 0 \\ \alpha + \beta = 0\end{cases}$$
        De la 2.ª y la 3.ª: $\alpha = \beta$ y $\alpha = -\beta$, luego $\alpha = \beta = 0$. Sólo la trivial ⇒ L.I. ✓</div>
        <div class="note"><b class="lbl">Qué generan</b> Dos vectores L.I. en $\mathbb{R}^3$ generan un plano por el origen, de normal $(1,1,1)\times(3,-1,1) = (2,2,-4) \sim (1,1,-2)$: el plano $x + y - 2z = 0$. Control: $(1,1,1) \Rightarrow 1+1-2=0$ ✓; $(3,-1,1) \Rightarrow 3-1-2=0$ ✓.</div>`,
        resultado: tex`<strong>L.I.</strong> No son múltiplos uno del otro, así que por el Teorema 12 son independientes. Generan el plano $x+y-2z=0$.` },

      { id: 'tp4-9c', rot: 'c', enunciado: tex`$\{(6 - x^2); (1 + x + 4x^2); (x + 3x^2)\}$`,
        conceptos: ['u4-li-ld', 'u4-dimension'],
        pista: tex`Pasá cada polinomio a sus coordenadas en la base $\{1, x, x^2\}$ y tratalos como vectores de $\mathbb{R}^3$. Ojo con los coeficientes que faltan: valen cero.`,
        resolucion: tex`<p><strong>Son linealmente independientes.</strong></p>
        <h3>Paso 1 — Coordenadas en la base canónica de $P_2$</h3>
        <p>Con $C = \{1,\, x,\, x^2\}$ (en ese orden), y poniendo <strong>explícitamente los coeficientes nulos</strong>:</p>
        <div class="tbl"><table>
          <thead><tr><th>Polinomio</th><th>$1$</th><th>$x$</th><th>$x^2$</th><th>Coordenadas</th></tr></thead>
          <tbody>
            <tr><td>$6 - x^2$</td><td>$6$</td><td>$0$</td><td>$-1$</td><td>$(6,\, 0,\, -1)$</td></tr>
            <tr><td>$1 + x + 4x^2$</td><td>$1$</td><td>$1$</td><td>$4$</td><td>$(1,\, 1,\, 4)$</td></tr>
            <tr><td>$x + 3x^2$</td><td>$0$</td><td>$1$</td><td>$3$</td><td>$(0,\, 1,\, 3)$</td></tr>
          </tbody>
        </table></div>
        <p>Como $\dim P_2 = 3$ ([[u4-dimension]]) y hay 3 polinomios, sirve el determinante.</p>

        <h3>Paso 2 — Determinante</h3>
        <div class="fx center">$$\det \begin{pmatrix} 6 & 0 & -1 \\ 1 & 1 & 4 \\ 0 & 1 & 3 \end{pmatrix}
        = 6\,(1\cdot 3 - 4 \cdot 1) - 0\,(1 \cdot 3 - 4 \cdot 0) + (-1)(1\cdot 1 - 1 \cdot 0)$$</div>
        <div class="fx center">$$= 6(3-4) - 0 - 1(1) = -6 - 1 = -7 \neq 0$$</div>
        <p>$\det \neq 0$ ⇒ <strong>L.I.</strong> por el [[u4-teorema-15-17|Teorema 17]].</p>
        <div class="note tip"><b class="lbl">Y además son base</b> Tres vectores L.I. en un espacio de dimensión 3 forman una base, por el [[u4-teorema-26|Teorema 26]]. Así que $\{6-x^2,\; 1+x+4x^2,\; x+3x^2\}$ es una base de $P_2$ — un dato que se obtiene gratis y que los parciales suelen pedir a continuación.</div>
        <div class="note warn"><b class="lbl">Dos errores de coordenadas</b>
        <strong>(1)</strong> Olvidar los coeficientes nulos: $6 - x^2$ es $(6,0,-1)$, no $(6,-1)$.
        <strong>(2)</strong> Mezclar el orden de la base. Si se usa $\{x^2, x, 1\}$ en lugar de $\{1,x,x^2\}$, las coordenadas se invierten y el determinante cambia de signo — pero la conclusión («es o no es cero») no cambia, que es lo único que importa acá.</div>`,
        resultado: tex`<strong>L.I.</strong> En coordenadas de $\{1,x,x^2\}$ son $(6,0,-1)$, $(1,1,4)$ y $(0,1,3)$, con $\det = -7 \neq 0$. Siendo tres y $\dim P_2 = 3$, forman además una <strong>base de $P_2$</strong>.` }
    ]},

  /* ========================= 10 ========================= */
  { id: 'tp4-10', num: '10',
    enunciado: tex`<p>Indicar cuáles de los siguientes subconjuntos <strong>generan</strong> a $V$:</p>
    <div class="note warn"><b class="lbl">En el inciso b) hay un paso que se saltea siempre</b> Antes de preguntarse si los vectores generan $V$, hay que verificar que <strong>pertenezcan</strong> a $V$. Si alguno se sale de $V$, el conjunto no puede generarlo, por mucho que los vectores sean independientes.</div>`,
    incisos: [

      { id: 'tp4-10ai', rot: 'a.i', enunciado: tex`$V = \mathbb{R}^2$; $\;\{(2,-5); (-1, 5/2)\}$`,
        conceptos: ['u4-generado', 'u4-teorema-12'],
        resolucion: tex`<p><strong>No generan $\mathbb{R}^2$.</strong></p>
        <p>Los dos vectores son <strong>paralelos</strong>:</p>
        <div class="fx center">$$-\tfrac{1}{2}\,(2,-5) = \left(-1,\; \tfrac{5}{2}\right)$$</div>
        <p>Por el [[u4-teorema-12|Teorema 12]] son L.D., así que el segundo no aporta ninguna dirección nueva:</p>
        <div class="fx center">$$\operatorname{gen}\{(2,-5),\; (-1,\tfrac52)\} = \operatorname{gen}\{(2,-5)\}$$</div>
        <p>que es una <strong>recta por el origen</strong> de dimensión 1, y $\dim \mathbb{R}^2 = 2$. Como $\dim \operatorname{gen} < \dim V$, no pueden generar $V$ (por el [[u4-teorema-24-25|Teorema 25]]).</p>
        <p>Su ecuación: $\;\{(x,y) : 5x + 2y = 0\}$. Control: $(2,-5) \Rightarrow 10 - 10 = 0$ ✓.</p>
        <div class="note"><b class="lbl">Qué falta</b> Cualquier vector fuera de esa recta queda sin generar. Por ejemplo $(1,0)$: daría $5 \neq 0$, así que $(1,0) \notin \operatorname{gen}$.</div>`,
        resultado: tex`<strong>No.</strong> Son paralelos ($(-1,\tfrac52) = -\tfrac12(2,-5)$) y generan sólo la recta $5x+2y=0$, de dimensión 1.` },

      { id: 'tp4-10aii', rot: 'a.ii', enunciado: tex`$V = \mathbb{R}^2$; $\;\{(1,2); (-1,1); (2,3)\}$`,
        conceptos: ['u4-generado', 'u4-teorema-13'],
        pista: tex`Son tres vectores en $\mathbb{R}^2$, así que seguro son L.D. Pero «L.D.» y «no generan» son cosas distintas.`,
        resolucion: tex`<p><strong>Sí generan $\mathbb{R}^2$.</strong></p>
        <p><strong>Son L.D.</strong>, eso es seguro: por el [[u4-teorema-13|Teorema 13]], tres vectores en $\mathbb{R}^2$ son siempre linealmente dependientes, ya que $r = 3 > 2 = n$.</p>
        <div class="note tip"><b class="lbl">Pero la pregunta es otra</b> Ser L.D. <strong>no</strong> impide generar. Al contrario: por el [[u4-teorema-10|Teorema 10]], agregar vectores a un conjunto generador da otro conjunto generador. Lo que hay que verificar es si <em>entre</em> los tres hay dos independientes.</div>
        <p>Tomando los dos primeros:</p>
        <div class="fx center">$$\det \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} = 1\cdot 1 - (-1)\cdot 2 = 1 + 2 = 3 \neq 0$$</div>
        <p>$\{(1,2), (-1,1)\}$ es L.I., y dos vectores L.I. en $\mathbb{R}^2$ generan $\mathbb{R}^2$ ([[u4-teorema-19|Teorema 19]]). Entonces</p>
        <div class="fx center">$$\mathbb{R}^2 = \operatorname{gen}\{(1,2),(-1,1)\} \subseteq \operatorname{gen}\{(1,2),(-1,1),(2,3)\} \subseteq \mathbb{R}^2$$</div>
        <p>así que el conjunto completo también genera $\mathbb{R}^2$.</p>
        <h3>La relación de dependencia, de paso</h3>
        <p>$(2,3) = \alpha(1,2) + \beta(-1,1)$: de $\alpha - \beta = 2$ y $2\alpha + \beta = 3$, sumando, $3\alpha = 5 \Rightarrow \alpha = \tfrac53$, $\beta = -\tfrac13$.</p>
        <div class="fx center">$$(2,3) = \tfrac{5}{3}(1,2) - \tfrac{1}{3}(-1,1) \qquad\text{Control: } \left(\tfrac53 + \tfrac13,\; \tfrac{10}{3} - \tfrac13\right) = (2,3) \;✓$$</div>
        <div class="note"><b class="lbl">Generan pero no son base</b> Para ser [[u4-base|base]] hacen falta <em>las dos</em> condiciones: generar y ser L.I. Acá generan pero son L.D., así que no son base — sobra un vector. Quitando cualquiera de los tres queda una base.</div>`,
        resultado: tex`<strong>Sí generan</strong> $\mathbb{R}^2$, porque $\{(1,2),(-1,1)\}$ ya es L.I. ($\det = 3$). Son L.D. (tres vectores en $\mathbb{R}^2$), así que generan pero <strong>no son base</strong>.` },

      { id: 'tp4-10bi', rot: 'b.i', enunciado: tex`$V = \{(x,y,z) \in \mathbb{R}^3 : x + 2y - z = 0\}$; $\;\{(1,0,1); (0,1,3)\}$`,
        conceptos: ['u4-generado', 'u4-hallar-base', 'u4-teorema-26'],
        pista: tex`Antes que nada: ¿los dos vectores están en $V$?`,
        resolucion: tex`<p><strong>No generan $V$.</strong> Y la razón es la más básica posible: <strong>uno de los dos vectores no pertenece a $V$.</strong></p>
        <h3>Paso 0 — ¿Pertenecen a $V$?</h3>
        <div class="fx center">$$(1,0,1): \quad 1 + 2(0) - 1 = 0 \;✓ \qquad \text{sí pertenece}$$</div>
        <div class="fx center">$$(0,1,3): \quad 0 + 2(1) - 3 = -1 \neq 0 \qquad \textbf{NO pertenece}$$</div>
        <div class="note warn"><b class="lbl">Con eso ya está</b>
        Si $(0,1,3) \notin V$, entonces $\operatorname{gen}\{(1,0,1), (0,1,3)\}$ contiene vectores que no están en $V$, así que no puede ser igual a $V$. El conjunto <strong>no genera $V$</strong>, y no hace falta analizar independencia ni dimensiones.
        <p>Dicho con precisión: para que un conjunto genere $V$ tiene que cumplirse $\operatorname{gen}(A) = V$, lo que exige la doble inclusión. Acá falla $\operatorname{gen}(A) \subseteq V$.</p></div>
        <h3>Para comparar: cuál es $V$</h3>
        <p>Resolviendo $x + 2y - z = 0$ con el método de [[u4-hallar-base]]: $z = x + 2y$, los puntos son $(x,\, y,\, x+2y)$, y dando $(x,y) = (1,0)$ y $(0,1)$:</p>
        <div class="fx center">$$V = \operatorname{gen}\{(1,0,1),\; (0,1,2)\}, \qquad \dim V = 2$$</div>
        <p>El conjunto del enunciado tiene $(0,1,\mathbf{3})$ donde debería ir $(0,1,\mathbf{2})$: <strong>una unidad de diferencia en la última componente</strong> es lo que lo saca del plano.</p>
        <div class="note tip"><b class="lbl">Qué genera entonces</b> $\{(1,0,1),(0,1,3)\}$ son L.I. (no paralelos), así que generan un plano por el origen de dimensión 2 — pero <strong>otro</strong> plano: el de normal $(1,0,1)\times(0,1,3) = (-1,-3,1)$, es decir $x + 3y - z = 0$. Tiene la misma dimensión que $V$ y no es $V$, que es justo la advertencia de [[u4-igualdad-subespacios]]: igual dimensión no implica igualdad.</div>`,
        resultado: tex`<strong>No.</strong> $(0,1,3) \notin V$, porque $0 + 2 - 3 = -1 \neq 0$. Generan el plano $x+3y-z=0$, que tiene $\dim 2$ como $V$ pero no es $V$. (La base correcta de $V$ sería $\{(1,0,1),(0,1,2)\}$.)` },

      { id: 'tp4-10bii', rot: 'b.ii', enunciado: tex`$V = \{(x,y,z) \in \mathbb{R}^3 : x + 2y - z = 0\}$; $\;\{(1,1,3); (0,1,2)\}$`,
        conceptos: ['u4-generado', 'u4-teorema-26'],
        resolucion: tex`<p><strong>Sí generan $V$.</strong> El argumento tiene tres pasos y el último es el teorema que ahorra todo el trabajo.</p>
        <h3>Paso 1 — Pertenecen a $V$</h3>
        <div class="fx center">$$(1,1,3): \quad 1 + 2(1) - 3 = 0 \;✓$$</div>
        <div class="fx center">$$(0,1,2): \quad 0 + 2(1) - 2 = 0 \;✓$$</div>
        <p>Los dos están en $V$, así que $\operatorname{gen}(A) \subseteq V$ (por ser $V$ subespacio, cerrado para combinaciones lineales).</p>
        <h3>Paso 2 — Son L.I.</h3>
        <p>Por el [[u4-teorema-12|Teorema 12]]: ¿es uno múltiplo del otro? La primera componente de $(0,1,2)$ es $0$ y la de $(1,1,3)$ es $1$, así que el único factor posible sería $0$, que daría el vector nulo. No lo son ⇒ <strong>L.I.</strong></p>
        <h3>Paso 3 — $\dim V = 2$, y hay 2 vectores L.I. en $V$</h3>
        <p>$V$ está definido por <em>una</em> ecuación homogénea en $\mathbb{R}^3$, luego $\dim V = 2$. Por el [[u4-teorema-26|Teorema 26]]:</p>
        <div class="fx center">$$\text{2 vectores L.I. en un espacio de dimensión 2} \;\Longrightarrow\; \textbf{forman una base}$$</div>
        <p>Y si son base, <strong>generan</strong> $V$. $\blacksquare$</p>
        <div class="note tip"><b class="lbl">Esta es la forma eficiente de responder</b>
        Sin el Teorema 26 habría que probar que todo $(x,y,z) \in V$ se escribe como $\alpha(1,1,3) + \beta(0,1,2)$, resolviendo un sistema con parámetros. Con el teorema alcanza verificar <strong>pertenencia + independencia + contar la dimensión</strong>. Es el mismo atajo que se usa en los parciales todo el tiempo.</div>
        <h3>Verificación directa (opcional)</h3>
        <p>Sea $(x,y,z) \in V$, o sea $z = x+2y$. Buscamos $\alpha, \beta$:</p>
        <div class="fx center">$$\alpha(1,1,3) + \beta(0,1,2) = (\alpha,\; \alpha+\beta,\; 3\alpha+2\beta)$$</div>
        <p>De la 1.ª componente, $\alpha = x$; de la 2.ª, $\beta = y - x$. Y la 3.ª debe cerrar:</p>
        <div class="fx center">$$3x + 2(y-x) = x + 2y = z \;✓$$</div>
        <p>Se cumple exactamente por la ecuación de $V$. Así que todo vector de $V$ se alcanza, y de manera única.</p>
        <div class="note"><b class="lbl">Contraste con b.i)</b> Los dos incisos difieren en un solo número ($(0,1,3)$ contra $(0,1,2)$), y eso cambia la respuesta de «no» a «sí». Es el ejemplo más limpio de por qué el paso 1 no es un trámite.</div>`,
        resultado: tex`<strong>Sí.</strong> Los dos pertenecen a $V$, son L.I., y $\dim V = 2$: por el Teorema 26 forman una base de $V$, así que lo generan.` }
    ]},

  /* ========================= 11 ========================= */
  { id: 'tp4-11', num: '11',
    enunciado: tex`<p>Hallar una <strong>base</strong> y la <strong>dimensión</strong> de los siguientes subespacios:</p>
    <div class="note tip"><b class="lbl">El procedimiento es siempre el mismo</b> ([[u4-hallar-base]])
    <strong>(1)</strong> Despejar las variables ligadas en función de las <strong>libres</strong>.
    <strong>(2)</strong> Escribir el vector genérico.
    <strong>(3)</strong> Dar valor $1$ a una variable libre y $0$ a las demás, y repetir por cada una.
    <strong>(4)</strong> La dimensión es la cantidad de variables libres.</div>`,
    incisos: [

      { id: 'tp4-11a', rot: 'a', enunciado: tex`$S = \{(x,y,z) \in \mathbb{R}^3 : y = 0\}$`,
        conceptos: ['u4-hallar-base', 'u4-dimension'],
        resolucion: tex`<p>La única condición es $y = 0$. Las variables <strong>libres</strong> son $x$ y $z$; la ligada es $y$.</p>
        <p><strong>Vector genérico:</strong> $\;(x,\; 0,\; z)$.</p>
        <div class="tbl"><table>
          <thead><tr><th>$x$</th><th>$z$</th><th>Vector</th></tr></thead>
          <tbody>
            <tr><td>$1$</td><td>$0$</td><td>$(1,0,0)$</td></tr>
            <tr><td>$0$</td><td>$1$</td><td>$(0,0,1)$</td></tr>
          </tbody>
        </table></div>
        <div class="fx center">$$B = \{(1,0,0),\; (0,0,1)\}, \qquad \dim S = 2$$</div>
        <p><strong>Verificación.</strong> Los dos cumplen $y = 0$ ✓, son L.I. (no paralelos) ✓, y todo $(x,0,z) = x(1,0,0) + z(0,0,1)$ ✓.</p>
        <div class="note"><b class="lbl">Qué es</b> Es el <strong>plano coordenado $XZ$</strong>. Su base es un subconjunto de la base canónica, lo que no siempre pasa pero sí cuando las ecuaciones son tan simples como «una coordenada es cero».</div>`,
        resultado: tex`$B = \{(1,0,0),\, (0,0,1)\}$, $\;\dim S = 2$. Es el plano coordenado $XZ$.` },

      { id: 'tp4-11b', rot: 'b', enunciado: tex`$S = \{(x,y,z,t) \in \mathbb{R}^4 : x = t - 7z\}$`,
        conceptos: ['u4-hallar-base', 'u4-dimension'],
        pista: tex`La ecuación ya viene con $x$ despejada. ¿Cuáles son las libres? Ojo con $y$, que no aparece en la condición.`,
        resolucion: tex`<p>La condición es $x = t - 7z$, una sola ecuación en $\mathbb{R}^4$. La variable <strong>ligada</strong> es $x$; las <strong>libres</strong> son $y$, $z$ y $t$ — incluida $y$, que al no aparecer en la ecuación queda completamente libre.</p>
        <p><strong>Vector genérico:</strong> $\;(t - 7z,\; y,\; z,\; t)$.</p>
        <div class="tbl"><table>
          <thead><tr><th>$y$</th><th>$z$</th><th>$t$</th><th>Vector</th></tr></thead>
          <tbody>
            <tr><td>$1$</td><td>$0$</td><td>$0$</td><td>$(0,\; 1,\; 0,\; 0)$</td></tr>
            <tr><td>$0$</td><td>$1$</td><td>$0$</td><td>$(-7,\; 0,\; 1,\; 0)$</td></tr>
            <tr><td>$0$</td><td>$0$</td><td>$1$</td><td>$(1,\; 0,\; 0,\; 1)$</td></tr>
          </tbody>
        </table></div>
        <div class="fx center">$$B = \{(0,1,0,0),\; (-7,0,1,0),\; (1,0,0,1)\}, \qquad \dim S = 3$$</div>
        <p><strong>Verificación.</strong> Cada uno cumple $x = t - 7z$: para $(0,1,0,0)$, $\;0 = 0 - 0$ ✓; para $(-7,0,1,0)$, $\;-7 = 0 - 7$ ✓; para $(1,0,0,1)$, $\;1 = 1 - 0$ ✓.</p>
        <p>Y el genérico se reconstruye: $\;y(0,1,0,0) + z(-7,0,1,0) + t(1,0,0,1) = (-7z+t,\; y,\; z,\; t)$ ✓</p>
        <div class="note tip"><b class="lbl">Control de dimensión</b> Una ecuación independiente en $\mathbb{R}^4$ baja la dimensión en 1: $\dim S = 4 - 1 = 3$ ✓. En general, $k$ ecuaciones <em>independientes</em> en $\mathbb{R}^n$ dan $\dim = n - k$. Es un chequeo rápido antes de contar los vectores.</div>
        <div class="note"><b class="lbl">Es un hiperplano</b> Por la [[u4-hiperplano|Definición 27]], un subespacio de dimensión $n-1$ en $\mathbb{R}^n$ es un hiperplano. Acá $\dim S = 3$ en $\mathbb{R}^4$, así que $S$ lo es.</div>`,
        resultado: tex`$B = \{(0,1,0,0),\, (-7,0,1,0),\, (1,0,0,1)\}$, $\;\dim S = 3$. Es un hiperplano de $\mathbb{R}^4$.` },

      { id: 'tp4-11c', rot: 'c', enunciado: tex`$S = \{(a_{ij}) \in M_2(\mathbb{R}) : a_{12} = a_{21}\}$`,
        conceptos: ['u4-hallar-base', 'u4-dimension'],
        resolucion: tex`<p>La condición $a_{12} = a_{21}$ dice que la matriz es <strong>simétrica</strong>. Una matriz genérica de $S$ es</p>
        <div class="fx center">$$\begin{pmatrix} a & b \\ b & d \end{pmatrix}$$</div>
        <p>con $a$, $b$, $d$ <strong>libres</strong> (la entrada $(2,1)$ queda determinada por la $(1,2)$). Dando valor 1 a cada una:</p>
        <div class="fx center">$$B = \left\{ \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix},\;\; \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix},\;\; \begin{pmatrix} 0 & 0 \\ 0 & 1\end{pmatrix} \right\}, \qquad \dim S = 3$$</div>
        <p><strong>Verificación.</strong> Las tres son simétricas ✓, y</p>
        <div class="fx center">$$a\begin{pmatrix} 1&0\\0&0\end{pmatrix} + b\begin{pmatrix} 0&1\\1&0\end{pmatrix} + d\begin{pmatrix} 0&0\\0&1\end{pmatrix} = \begin{pmatrix} a & b \\ b & d\end{pmatrix} \;✓$$</div>
        <p>Son L.I. porque esa combinación sólo da la matriz nula si $a = b = d = 0$.</p>
        <div class="note warn"><b class="lbl">El error de base</b>
        Poner $\begin{pmatrix} 0&1\\0&0\end{pmatrix}$ y $\begin{pmatrix} 0&0\\1&0\end{pmatrix}$ como <strong>dos</strong> elementos de la base, y concluir $\dim S = 4$. Pero ninguna de esas dos matrices está en $S$ (no son simétricas), y además $S \subsetneq M_2(\mathbb{R})$ obliga a $\dim S < 4$ por el [[u4-teorema-24-25|Teorema 25]]. Las entradas $(1,2)$ y $(2,1)$ están <strong>atadas</strong>: aportan <em>un</em> grado de libertad, no dos.</div>
        <div class="note tip"><b class="lbl">Coincide con el ejercicio 3.c</b> Allí se probó que las simétricas de $M_n$ forman un subespacio de dimensión $\tfrac{n(n+1)}{2}$. Con $n=2$: $\tfrac{2 \cdot 3}{2} = 3$ ✓</div>`,
        resultado: tex`$B = \left\{\begin{pmatrix}1&0\\0&0\end{pmatrix}, \begin{pmatrix}0&1\\1&0\end{pmatrix}, \begin{pmatrix}0&0\\0&1\end{pmatrix}\right\}$, $\;\dim S = 3$ (las matrices simétricas de orden 2).` },

      { id: 'tp4-11d', rot: 'd', enunciado: tex`$S = \{p(x) \in \mathbb{R}[x] : p(x) = a + bx^2 - ax^3\}$`,
        conceptos: ['u4-hallar-base', 'u4-dimension'],
        pista: tex`Acá los parámetros libres son $a$ y $b$, y no las potencias. Fijate que $a$ aparece en dos lugares.`,
        resolucion: tex`<p>Los polinomios de $S$ están descriptos por <strong>dos parámetros libres</strong>, $a$ y $b$. Notar que $a$ aparece <em>dos veces</em> (en el término constante y, con signo opuesto, en el de grado 3), así que esos dos coeficientes están atados.</p>
        <p>Dando valor 1 a cada parámetro y 0 al otro:</p>
        <div class="tbl"><table>
          <thead><tr><th>$a$</th><th>$b$</th><th>Polinomio</th></tr></thead>
          <tbody>
            <tr><td>$1$</td><td>$0$</td><td>$1 - x^3$</td></tr>
            <tr><td>$0$</td><td>$1$</td><td>$x^2$</td></tr>
          </tbody>
        </table></div>
        <div class="fx center">$$B = \{1 - x^3,\;\; x^2\}, \qquad \dim S = 2$$</div>
        <p><strong>Verificación.</strong> $\;a(1-x^3) + b\,x^2 = a + bx^2 - ax^3$ ✓, que es exactamente la forma del enunciado. Y son L.I.: si $a(1-x^3) + bx^2 = 0$ como polinomio, el coeficiente constante da $a = 0$ y el de $x^2$ da $b = 0$.</p>
        <div class="note tip"><b class="lbl">En coordenadas, para ver la estructura</b>
        En la base $\{1, x, x^2, x^3\}$ de $P_3$, los elementos de $S$ son $(a,\, 0,\, b,\, -a)$. Visto así, $S$ es el subespacio de $\mathbb{R}^4$ definido por <strong>dos</strong> ecuaciones: la segunda coordenada nula y la cuarta igual al opuesto de la primera. Y $4 - 2 = 2 = \dim S$ ✓ — el mismo control de dimensión del inciso b).</div>
        <div class="note"><b class="lbl">Nota sobre el espacio ambiente</b> El enunciado dice $\mathbb{R}[x]$, que tiene dimensión infinita, pero $S$ sólo contiene polinomios de grado $\le 3$, así que vive dentro de $P_3$. Eso no afecta el cálculo: la base y la dimensión de $S$ son las mismas.</div>`,
        resultado: tex`$B = \{1 - x^3,\; x^2\}$, $\;\dim S = 2$.` }
    ]},

  /* ========================= 12 ========================= */
  { id: 'tp4-12', num: '12',
    enunciado: tex`<p><strong>Extensión a una base:</strong></p>`,
    incisos: [

      { id: 'tp4-12a', rot: 'a', enunciado: tex`Verificar que los vectores $u = (-1,2,-3)$ y $v = (1,5,-1)$ son linealmente independientes y <strong>extenderlos a una base</strong> de $\mathbb{R}^3$.`,
        conceptos: ['u4-teorema-sumar-vector', 'u4-base', 'u4-teorema-26'],
        pista: tex`Para elegir el tercer vector, hallá primero la ecuación del plano que generan $u$ y $v$: cualquier vector que <em>no</em> la cumpla sirve.`,
        resolucion: tex`<h3>Paso 1 — Son L.I.</h3>
        <p>Por el [[u4-teorema-12|Teorema 12]]: ¿es $v$ múltiplo de $u$? La primera componente exigiría factor $-1$ y la segunda $\tfrac52$. No coinciden ⇒ <strong>L.I.</strong> ✓</p>

        <h3>Paso 2 — El plano que generan</h3>
        <p>Para elegir el tercer vector con criterio hay que saber qué hay que evitar ([[u4-teorema-sumar-vector]]): el tercer vector debe quedar <strong>fuera</strong> de $\operatorname{gen}\{u,v\}$.</p>
        <div class="fx center">$$\vec n = u \times v = \begin{vmatrix} \breve i & \breve j & \breve k \\ -1 & 2 & -3 \\ 1 & 5 & -1 \end{vmatrix}
        = \breve i(-2+15) - \breve j(1+3) + \breve k(-5-2) = (13,\, -4,\, -7)$$</div>
        <div class="fx center">$$\operatorname{gen}\{u,v\} = \{(x,y,z) : 13x - 4y - 7z = 0\}$$</div>
        <p>Controles: $u = (-1,2,-3) \Rightarrow -13 - 8 + 21 = 0$ ✓; $\;v = (1,5,-1) \Rightarrow 13 - 20 + 7 = 0$ ✓.</p>

        <h3>Paso 3 — Elegir el tercero</h3>
        <p>Cualquier $w$ con $13x - 4y - 7z \neq 0$ sirve. El más simple es el canónico $e_1 = (1,0,0)$:</p>
        <div class="fx center">$$13(1) - 0 - 0 = 13 \neq 0 \;✓$$</div>
        <div class="fx center">$$B = \{(-1,2,-3),\;\; (1,5,-1),\;\; (1,0,0)\}$$</div>

        <h3>Verificación de que es base</h3>
        <p>Tres vectores en $\mathbb{R}^3$ (que tiene dimensión 3): por el [[u4-teorema-26|Teorema 26]] alcanza con que sean L.I., y eso se chequea con un determinante ([[u4-teorema-15-17|Teorema 17]]):</p>
        <div class="fx center">$$\det \begin{pmatrix} -1 & 2 & -3 \\ 1 & 5 & -1 \\ 1 & 0 & 0 \end{pmatrix} = 1 \cdot \begin{vmatrix} 2 & -3 \\ 5 & -1 \end{vmatrix} = 1\,(-2 + 15) = 13 \neq 0 \;✓$$</div>
        <p>(Se desarrolló por la tercera fila, que tiene dos ceros.) Luego $B$ es una base de $\mathbb{R}^3$.</p>
        <div class="note tip"><b class="lbl">Dos detalles elegantes</b>
        <strong>(1)</strong> El determinante dio $13$, que es exactamente la primera componente de $\vec n$. No es casualidad: el determinante <em>es</em> el producto mixto $w \cdot (u \times v)$, y con $w = e_1$ eso selecciona la primera componente de $\vec n$. Esa es la conexión con [[u1-coplanaridad]]: $\det \neq 0$ ⟺ no coplanares ⟺ L.I.
        <p><strong>(2)</strong> La respuesta <strong>no es única</strong>: sirve cualquier vector fuera del plano. También funcionarían $e_2 = (0,1,0)$ (da $-4 \neq 0$) o $e_3 = (0,0,1)$ (da $-7 \neq 0$). Lo que no serviría es un vector del plano, por ejemplo $u + v = (0,7,-4)$, que da $0 - 28 + 28 = 0$.</p></div>`,
        resultado: tex`Son L.I. (no son múltiplos). Generan el plano $13x - 4y - 7z = 0$, así que basta agregar un vector que no lo cumpla: $B = \{(-1,2,-3),\, (1,5,-1),\, (1,0,0)\}$, con $\det = 13 \neq 0$. La respuesta no es única.` },

      { id: 'tp4-12b', rot: 'b', enunciado: tex`¿Existe una base de $\mathbb{R}^3$ que contenga a los vectores $(1,-1,2)$ y $(-2,2,-4)$? Justificar.`,
        conceptos: ['u4-teorema-12', 'u4-base'],
        pista: tex`Compará los dos vectores. Después pensá qué le exige a sus elementos el hecho de ser base.`,
        resolucion: tex`<p><strong>No existe.</strong></p>
        <h3>El argumento</h3>
        <p>Los dos vectores son <strong>paralelos</strong>:</p>
        <div class="fx center">$$(-2,\, 2,\, -4) = -2\,(1,\, -1,\, 2)$$</div>
        <p>Por el [[u4-teorema-12|Teorema 12]], dos vectores son L.D. si y sólo si uno es múltiplo escalar del otro. Luego $\{(1,-1,2),\, (-2,2,-4)\}$ es <strong>linealmente dependiente</strong>.</p>
        <p>Pero una [[u4-base|base]] es, por definición, un conjunto <strong>linealmente independiente</strong>. Y todo subconjunto de un conjunto L.I. es a su vez L.I. — equivalentemente: si un subconjunto es L.D., el conjunto entero también lo es.</p>
        <p>Entonces ninguna base de $\mathbb{R}^3$ puede contener a esos dos vectores, porque contendría un subconjunto L.D. y dejaría de ser L.I. $\blacksquare$</p>
        <h3>Verlo con la relación explícita</h3>
        <p>Si $B = \{(1,-1,2),\, (-2,2,-4),\, w\}$ fuera base, la combinación</p>
        <div class="fx center">$$2\,(1,-1,2) + 1\,(-2,2,-4) + 0\,w = (0,0,0)$$</div>
        <p>escribiría el vector nulo con escalares <strong>no todos nulos</strong> ($2$ y $1$), lo que contradice la independencia lineal ([[u4-li-ld]]).</p>
        <p>También se ve por el determinante: cualquier matriz con dos filas proporcionales tiene determinante $0$, así que nunca puede valer el [[u4-teorema-15-17|Teorema 17]].</p>
        <div class="note tip"><b class="lbl">La idea de fondo</b>
        Los dos vectores generan la <strong>misma recta</strong>: $\operatorname{gen}\{(1,-1,2), (-2,2,-4)\} = \operatorname{gen}\{(1,-1,2)\}$, de dimensión 1. Tener dos vectores que apuntan en la misma dirección es información repetida, y una base no admite repetición: necesita exactamente $3$ direcciones independientes para $\mathbb{R}^3$, ni una menos ni información duplicada.
        <p>Contraste con el inciso a): allí los dos vectores eran L.I. y aportaban direcciones distintas, por eso sí se podían extender.</p></div>`,
        resultado: tex`<strong>No existe.</strong> $(-2,2,-4) = -2(1,-1,2)$, así que los dos vectores son L.D. (Teorema 12), y una base debe ser L.I. — ningún conjunto que los contenga a ambos puede serlo.` }
    ]},
  /* ========================= 13 ========================= */
  { id: 'tp4-13', num: '13',
    enunciado: tex`<p>Determinar los valores de $a$ y $b$ para los cuales el polinomio $P(x) = 3x^3 + 2x^2 + ax + b$ pertenece al subespacio generado por los polinomios $Q(x) = 2x^3 + 5x^2 + 4x + 1$ y $R(x) = -x^3 + x - 2$.</p>`,
    conceptos: ['u4-combinacion-lineal', 'u4-generado'],
    pista: tex`Pertenecer al generado es ser combinación lineal: $P = \alpha Q + \beta R$. Igualá coeficiente a coeficiente — las dos ecuaciones <em>sin</em> $a$ ni $b$ determinan $\alpha$ y $\beta$, y las otras dos dan los valores pedidos.`,
    resolucion: tex`<p>Pertenecer a $\operatorname{gen}\{Q, R\}$ significa que existen $\alpha, \beta \in \mathbb{R}$ con $P = \alpha Q + \beta R$ ([[u4-combinacion-lineal]]).</p>
    <h3>El sistema, coeficiente por coeficiente</h3>
    <p>Cuidado con $R(x) = -x^3 + x - 2$, que <strong>no tiene término en $x^2$</strong>: su coeficiente es $0$.</p>
    <div class="tbl"><table>
      <thead><tr><th>Potencia</th><th>$P$</th><th>$\alpha Q + \beta R$</th><th>Ecuación</th></tr></thead>
      <tbody>
        <tr><td>$x^3$</td><td>$3$</td><td>$2\alpha - \beta$</td><td>$2\alpha - \beta = 3$</td></tr>
        <tr><td>$x^2$</td><td>$2$</td><td>$5\alpha + 0\beta$</td><td>$5\alpha = 2$</td></tr>
        <tr><td>$x^1$</td><td>$a$</td><td>$4\alpha + \beta$</td><td>$a = 4\alpha + \beta$</td></tr>
        <tr><td>$x^0$</td><td>$b$</td><td>$\alpha - 2\beta$</td><td>$b = \alpha - 2\beta$</td></tr>
      </tbody>
    </table></div>
    <div class="note tip"><b class="lbl">La estructura del ejercicio</b> Las dos primeras ecuaciones <strong>no contienen $a$ ni $b$</strong>: son las que hay que resolver, y determinan $\alpha$ y $\beta$ sin ambigüedad. Las dos últimas no son condiciones a imponer, sino las <em>definiciones</em> de $a$ y $b$.</div>

    <h3>Paso 1 — Hallar $\alpha$ y $\beta$</h3>
    <p>De la ecuación de $x^2$:</p>
    <div class="fx center">$$5\alpha = 2 \;\Longrightarrow\; \alpha = \frac{2}{5}$$</div>
    <p>Y de la de $x^3$:</p>
    <div class="fx center">$$\beta = 2\alpha - 3 = \frac{4}{5} - 3 = \frac{4 - 15}{5} = -\frac{11}{5}$$</div>

    <h3>Paso 2 — Calcular $a$ y $b$</h3>
    <div class="fx center">$$a = 4\alpha + \beta = \frac{8}{5} - \frac{11}{5} = -\frac{3}{5}$$</div>
    <div class="fx center">$$b = \alpha - 2\beta = \frac{2}{5} + \frac{22}{5} = \frac{24}{5}$$</div>

    <h3>Verificación completa</h3>
    <p>Con $\alpha = \tfrac25$ y $\beta = -\tfrac{11}{5}$:</p>
    <div class="fx center">$$\tfrac{2}{5}\,Q(x) = \tfrac{4}{5}x^3 + 2x^2 + \tfrac{8}{5}x + \tfrac{2}{5}$$</div>
    <div class="fx center">$$-\tfrac{11}{5}\,R(x) = \tfrac{11}{5}x^3 + 0x^2 - \tfrac{11}{5}x + \tfrac{22}{5}$$</div>
    <p>Sumando:</p>
    <div class="fx center">$$\begin{aligned}
    x^3 &: \tfrac{4}{5} + \tfrac{11}{5} = \tfrac{15}{5} = 3 \;✓\\
    x^2 &: 2 + 0 = 2 \;✓\\
    x^1 &: \tfrac{8}{5} - \tfrac{11}{5} = -\tfrac{3}{5} = a \;✓\\
    x^0 &: \tfrac{2}{5} + \tfrac{22}{5} = \tfrac{24}{5} = b \;✓
    \end{aligned}$$</div>
    <div class="fx center">$$a = -\frac{3}{5}, \qquad b = \frac{24}{5}$$</div>
    <div class="note"><b class="lbl">Por qué la respuesta es única</b>
    $Q$ y $R$ son L.I. (ninguno es múltiplo del otro: el coeficiente de $x^2$ es $5$ en uno y $0$ en el otro), así que generan un subespacio de dimensión 2 dentro de $P_3$ (dimensión 4). Las dos primeras ecuaciones forman un sistema compatible determinado en $\alpha, \beta$, y de ahí sale un único par $(a,b)$.
    <p>Si $Q$ y $R$ hubieran sido L.D., el sistema podría ser incompatible (ningún $a,b$) o indeterminado (infinitos pares).</p></div>`,
    resultado: tex`$a = -\dfrac{3}{5}$ y $b = \dfrac{24}{5}$, con $P = \tfrac25 Q - \tfrac{11}{5} R$.` },

  /* ========================= 14 ========================= */
  { id: 'tp4-14', num: '14',
    enunciado: tex`<p>Indicar para qué valores de $k$ los siguientes vectores forman una <strong>base</strong> de $\mathbb{R}^3$:
    $\;v = (k,1,1)$, $\;u = (1,k,1)$, $\;w = (1,1,k)$.</p>`,
    conceptos: ['u4-teorema-15-17', 'u4-teorema-26', 'u4-base'],
    pista: tex`Son tres vectores en $\mathbb{R}^3$, así que basta pedir $\det \neq 0$. Planteá $\det = 0$ para hallar los valores <em>prohibidos</em> y descartalos.`,
    resolucion: tex`<p>Son <strong>tres</strong> vectores en $\mathbb{R}^3$, que tiene dimensión 3. Por el [[u4-teorema-26|Teorema 26]], forman base si y sólo si son L.I., y por el [[u4-teorema-15-17|Teorema 17]] eso equivale a $\det \neq 0$. Alcanza entonces <strong>un determinante</strong>.</p>

    <h3>El determinante</h3>
    <div class="fx center">$$D(k) = \det \begin{pmatrix} k & 1 & 1 \\ 1 & k & 1 \\ 1 & 1 & k \end{pmatrix}$$</div>
    <p>Desarrollando por la primera fila:</p>
    <div class="fx center">$$D(k) = k\,(k^2 - 1) - 1\,(k - 1) + 1\,(1 - k)$$</div>
    <div class="fx center">$$= k^3 - k - k + 1 + 1 - k = k^3 - 3k + 2$$</div>

    <h3>Factorizar</h3>
    <p>Se busca una raíz entre los divisores del término independiente. Con $k = 1$: $\;1 - 3 + 2 = 0$ ✓, así que $(k-1)$ es factor. Dividiendo:</p>
    <div class="fx center">$$k^3 - 3k + 2 = (k-1)(k^2 + k - 2) = (k-1)(k-1)(k+2) = (k-1)^2\,(k+2)$$</div>
    <div class="fx center">$$D(k) = 0 \iff k = 1 \;\text{ (doble) } \;\text{ o }\; k = -2$$</div>

    <h3>Conclusión</h3>
    <div class="fx center">$$\textbf{Forman base de } \mathbb{R}^3 \iff k \neq 1 \;\text{ y }\; k \neq -2$$</div>

    <h3>Verificación de los dos casos excluidos</h3>
    <p><strong>$k = 1$:</strong> los tres vectores se vuelven $(1,1,1)$, $(1,1,1)$, $(1,1,1)$ — <strong>el mismo vector repetido tres veces</strong>. Generan sólo una recta, $\dim = 1$. Claramente L.D.</p>
    <p><strong>$k = -2$:</strong> queda $v = (-2,1,1)$, $u = (1,-2,1)$, $w = (1,1,-2)$, y</p>
    <div class="fx center">$$v + u + w = (-2+1+1,\; 1-2+1,\; 1+1-2) = (0,0,0)$$</div>
    <p>El vector nulo como combinación con los tres coeficientes iguales a $1$ (no todos nulos) ⇒ L.D. ✓ Acá la dimensión del generado es 2: dos de los tres sí son independientes.</p>
    <div class="note tip"><b class="lbl">Por qué la raíz doble importa poco acá</b>
    La multiplicidad de $k=1$ en el polinomio no cambia la respuesta —lo único que se pregunta es dónde se anula—, pero sí tiene una lectura: en $k=1$ el conjunto colapsa a <em>una sola</em> dirección (pierde 2 dimensiones), mientras que en $k=-2$ pierde sólo 1. La raíz doble refleja ese colapso más severo.</div>
    <div class="note"><b class="lbl">Control rápido con un valor cualquiera</b> Con $k = 0$: $D(0) = 0 - 0 + 2 = 2 \neq 0$, así que $(0,1,1)$, $(1,0,1)$, $(1,1,0)$ forman base. Es un buen chequeo de que la fórmula de $D(k)$ está bien.</div>`,
    resultado: tex`Forman base de $\mathbb{R}^3$ si y sólo si $k \neq 1$ y $k \neq -2$. El determinante es $D(k) = k^3 - 3k + 2 = (k-1)^2(k+2)$.` },

  /* ========================= 15 ========================= */
  { id: 'tp4-15', num: '15',
    enunciado: tex`<p>Sean $w_1, w_2, w_3, w_4$ vectores L.I. pertenecientes a un espacio vectorial $V$, y $S$ el subespacio generado por $\{w_1 + w_2;\; w_2 + w_3;\; w_3 - 2w_1 + w_4\}$. Determinar:</p>
    <div class="note tip"><b class="lbl">La clave del ejercicio</b> No hay componentes ni coordenadas: los $w_i$ son símbolos. Pero al ser <strong>L.I.</strong>, dos combinaciones lineales de ellos son iguales si y sólo si <em>coinciden coeficiente a coeficiente</em>. Eso convierte cada igualdad vectorial en un sistema, exactamente como si los $w_i$ fueran una base.</div>`,
    incisos: [

      { id: 'tp4-15a', rot: 'a', enunciado: tex`si $w_2 + 3w_3$ pertenece a $S$.`,
        conceptos: ['u4-combinacion-lineal', 'u4-li-ld'],
        pista: tex`Planteá $\alpha(w_1+w_2) + \beta(w_2+w_3) + \gamma(w_3-2w_1+w_4) = w_2 + 3w_3$ y agrupá por $w_1$, $w_2$, $w_3$, $w_4$. La ecuación de $w_4$ se resuelve sola.`,
        resolucion: tex`<p><strong>No pertenece.</strong></p>
        <h3>Plantear y agrupar</h3>
        <div class="fx center">$$\alpha(w_1+w_2) + \beta(w_2+w_3) + \gamma(w_3 - 2w_1 + w_4) = w_2 + 3w_3$$</div>
        <p>Agrupando el miembro izquierdo por cada $w_i$:</p>
        <div class="fx center">$$(\alpha - 2\gamma)\,w_1 + (\alpha + \beta)\,w_2 + (\beta + \gamma)\,w_3 + \gamma\,w_4 = 0\,w_1 + 1\,w_2 + 3\,w_3 + 0\,w_4$$</div>
        <p>Como los $w_i$ son <strong>L.I.</strong>, los coeficientes deben coincidir uno a uno:</p>
        <div class="fx center">$$\begin{cases} w_1: & \alpha - 2\gamma = 0 \\ w_2: & \alpha + \beta = 1 \\ w_3: & \beta + \gamma = 3 \\ w_4: & \gamma = 0 \end{cases}$$</div>
        <h3>Resolver en cascada</h3>
        <p>La ecuación de $w_4$ da directamente $\gamma = 0$. Entonces:</p>
        <div class="fx center">$$w_1: \;\alpha - 0 = 0 \;\Longrightarrow\; \alpha = 0$$</div>
        <div class="fx center">$$w_2: \;0 + \beta = 1 \;\Longrightarrow\; \beta = 1$$</div>
        <p>Y queda por verificar la de $w_3$, que es la que no se usó:</p>
        <div class="fx center">$$\beta + \gamma = 1 + 0 = 1 \qquad\text{pero debería ser}\qquad 3$$</div>
        <div class="note warn"><b class="lbl">$1 \neq 3$: incompatible</b> No existen $\alpha, \beta, \gamma$ que resuelvan el sistema, así que $w_2 + 3w_3 \notin S$.</div>
        <div class="note tip"><b class="lbl">Por qué $\gamma = 0$ decide todo</b>
        $w_4$ aparece <strong>sólo</strong> en el tercer generador. Si el vector objetivo no tiene componente en $w_4$, el tercer generador no puede usarse, y quedan únicamente $w_1+w_2$ y $w_2+w_3$. Esos dos generan combinaciones de la forma $\alpha w_1 + (\alpha+\beta)w_2 + \beta w_3$, donde el coeficiente de $w_2$ es la <em>suma</em> de los otros dos. En $w_2 + 3w_3$ los coeficientes son $(0, 1, 3)$ y $1 \neq 0 + 3$. Ahí está la contradicción, dicha estructuralmente.</div>`,
        resultado: tex`<strong>No pertenece.</strong> De la ecuación de $w_4$ sale $\gamma = 0$, de ahí $\alpha = 0$ y $\beta = 1$, pero entonces el coeficiente de $w_3$ da $1$ en lugar de $3$: el sistema es incompatible.` },

      { id: 'tp4-15b', rot: 'b', enunciado: tex`si $w_4 - w_3$ pertenece a $S$.`,
        conceptos: ['u4-combinacion-lineal', 'u4-li-ld'],
        resolucion: tex`<p><strong>Sí pertenece.</strong></p>
        <h3>El sistema</h3>
        <p>Mismo planteo, con el miembro derecho $0w_1 + 0w_2 - 1w_3 + 1w_4$:</p>
        <div class="fx center">$$\begin{cases} w_1: & \alpha - 2\gamma = 0 \\ w_2: & \alpha + \beta = 0 \\ w_3: & \beta + \gamma = -1 \\ w_4: & \gamma = 1 \end{cases}$$</div>
        <h3>Resolver</h3>
        <div class="fx center">$$\gamma = 1 \;\Longrightarrow\; \alpha = 2\gamma = 2 \;\Longrightarrow\; \beta = -\alpha = -2$$</div>
        <p>Y se verifica la ecuación de $w_3$:</p>
        <div class="fx center">$$\beta + \gamma = -2 + 1 = -1 \;✓$$</div>
        <p>El sistema es <strong>compatible</strong>, con solución $(\alpha, \beta, \gamma) = (2, -2, 1)$.</p>
        <h3>Verificación directa</h3>
        <div class="fx center">$$2(w_1+w_2) - 2(w_2+w_3) + 1(w_3 - 2w_1 + w_4)$$</div>
        <div class="fx center">$$= 2w_1 + 2w_2 - 2w_2 - 2w_3 + w_3 - 2w_1 + w_4$$</div>
        <div class="fx center">$$= \underbrace{(2-2)}_{0}w_1 + \underbrace{(2-2)}_{0}w_2 + \underbrace{(-2+1)}_{-1}w_3 + 1\,w_4 = -w_3 + w_4 \;✓$$</div>
        <div class="fx center">$$w_4 - w_3 = 2(w_1+w_2) - 2(w_2+w_3) + (w_3 - 2w_1 + w_4)$$</div>
        <div class="note tip"><b class="lbl">Dato adicional que conviene mencionar</b>
        Los tres generadores de $S$ son <strong>L.I.</strong>, así que $\dim S = 3$. Se comprueba con el sistema homogéneo: si el miembro derecho es $\vec 0$, de $w_4$ sale $\gamma = 0$, de $w_1$ sale $\alpha = 0$ y de $w_2$ sale $\beta = 0$ — sólo la trivial.
        <p>Y como $\dim S = 3$ mientras que $\operatorname{gen}\{w_1,w_2,w_3,w_4\}$ tiene dimensión 4, $S$ es un subespacio <em>propio</em>: hay vectores que quedan afuera, y el inciso a) exhibió uno.</p></div>`,
        resultado: tex`<strong>Sí pertenece:</strong> $\;w_4 - w_3 = 2(w_1+w_2) - 2(w_2+w_3) + (w_3-2w_1+w_4)$, es decir $(\alpha,\beta,\gamma) = (2,-2,1)$.` }
    ]},

  /* ========================= 16 ========================= */
  { id: 'tp4-16', num: '16',
    enunciado: tex`<p>Hallar la <strong>dimensión</strong> del subespacio generado por los vectores $v_1 + v_2$; $\;2v_1 - v_2$ y $\;v_2 + 3v_3$, sabiendo que $v_1$, $v_2$ y $v_3$ son L.I.</p>`,
    conceptos: ['u4-li-ld', 'u4-dimension', 'u4-generado'],
    pista: tex`Como $v_1,v_2,v_3$ son L.I., se los puede usar como si fueran una base: escribí cada generador en «coordenadas» respecto de ellos y calculá un determinante.`,
    resolucion: tex`<p>La dimensión del generado es la cantidad de generadores <strong>independientes</strong>, así que hay que decidir si los tres son L.I.</p>

    <h3>Coordenadas respecto de $\{v_1, v_2, v_3\}$</h3>
    <p>Los $v_i$ son L.I., así que forman una base del subespacio que generan y se les pueden asignar coordenadas:</p>
    <div class="tbl"><table>
      <thead><tr><th>Generador</th><th>$v_1$</th><th>$v_2$</th><th>$v_3$</th><th>Coordenadas</th></tr></thead>
      <tbody>
        <tr><td>$u_1 = v_1 + v_2$</td><td>$1$</td><td>$1$</td><td>$0$</td><td>$(1,\, 1,\, 0)$</td></tr>
        <tr><td>$u_2 = 2v_1 - v_2$</td><td>$2$</td><td>$-1$</td><td>$0$</td><td>$(2,\, -1,\, 0)$</td></tr>
        <tr><td>$u_3 = v_2 + 3v_3$</td><td>$0$</td><td>$1$</td><td>$3$</td><td>$(0,\, 1,\, 3)$</td></tr>
      </tbody>
    </table></div>

    <h3>Determinante</h3>
    <div class="fx center">$$\det \begin{pmatrix} 1 & 1 & 0 \\ 2 & -1 & 0 \\ 0 & 1 & 3 \end{pmatrix}$$</div>
    <p>Conviene desarrollar por la <strong>tercera columna</strong>, que tiene dos ceros:</p>
    <div class="fx center">$$= 3 \cdot \begin{vmatrix} 1 & 1 \\ 2 & -1 \end{vmatrix} = 3\,(1\cdot(-1) - 1 \cdot 2) = 3\,(-3) = -9 \neq 0$$</div>
    <div class="fx center">$$\det \neq 0 \;\Longrightarrow\; u_1, u_2, u_3 \text{ son L.I.} \;\Longrightarrow\; \boxed{\dim S = 3}$$</div>

    <h3>Verificación por el sistema homogéneo</h3>
    <p>Planteando $\alpha u_1 + \beta u_2 + \gamma u_3 = \vec 0$ y agrupando:</p>
    <div class="fx center">$$(\alpha + 2\beta)\,v_1 + (\alpha - \beta + \gamma)\,v_2 + 3\gamma\,v_3 = \vec 0$$</div>
    <p>Como los $v_i$ son L.I., cada coeficiente debe anularse:</p>
    <div class="fx center">$$\begin{cases} \alpha + 2\beta = 0 \\ \alpha - \beta + \gamma = 0 \\ 3\gamma = 0 \end{cases}$$</div>
    <p>De la 3.ª: $\gamma = 0$. De la 1.ª: $\alpha = -2\beta$. Sustituyendo en la 2.ª: $\;-2\beta - \beta + 0 = -3\beta = 0 \Rightarrow \beta = 0$, y entonces $\alpha = 0$.</p>
    <p>Sólo la solución trivial ⇒ <strong>L.I.</strong> ✓ Confirma $\dim S = 3$.</p>
    <div class="note tip"><b class="lbl">La idea reutilizable</b>
    Siempre que un enunciado diga «sabiendo que $v_1, \dots, v_n$ son L.I.», se los puede tratar como una <strong>base</strong> y trabajar con coordenadas, aunque no se sepa en qué espacio viven ni cuáles son sus componentes. Toda la unidad 5 ([[u5-coordenadas]]) se apoya en esto, y es también el mecanismo del ejercicio 15.</div>
    <div class="note"><b class="lbl">Qué habría pasado si daba 0</b> La dimensión sería 2 (o 1), y habría que exhibir la relación de dependencia. Un caso de ese tipo: $v_1+v_2$, $2v_1 - v_2$ y $3v_1$ — los tres viven en $\operatorname{gen}\{v_1,v_2\}$, de dimensión 2, así que serían forzosamente L.D. por el [[u4-teorema-24-25|Teorema 24]]. Acá eso no pasa porque $u_3$ aporta la dirección de $v_3$, que los otros dos no tienen.</div>`,
    resultado: tex`$\dim S = 3$. En coordenadas respecto de $\{v_1,v_2,v_3\}$ los generadores son $(1,1,0)$, $(2,-1,0)$ y $(0,1,3)$, con $\det = -9 \neq 0$: son L.I.` },

  /* ========================= 17 ========================= */
  { id: 'tp4-17', num: '17',
    enunciado: tex`<p>Sean $S = \operatorname{gen}\{(1,1,0); (-1,3,1)\}$ y $T = \operatorname{gen}\{(1,0,-1); (1,3,1); (1,-3,-3)\}$ subespacios de $\mathbb{R}^3$:</p>`,
    incisos: [

      { id: 'tp4-17a', rot: 'a', enunciado: tex`Encontrar las ecuaciones que caracterizan a $S$ y $T$.`,
        conceptos: ['u4-hallar-generado'],
        pista: tex`Para $S$, dos vectores no paralelos: producto vectorial. Para $T$ hay tres vectores — antes de nada, averiguá cuántos son independientes.`,
        resolucion: tex`<h3>Subespacio $S$</h3>
        <p>$(1,1,0)$ y $(-1,3,1)$ no son paralelos (la tercera componente es $0$ en uno y $1$ en el otro), así que generan un <strong>plano</strong> por el origen. Su normal:</p>
        <div class="fx center">$$\vec n_S = (1,1,0) \times (-1,3,1) = \begin{vmatrix} \breve i & \breve j & \breve k \\ 1 & 1 & 0 \\ -1 & 3 & 1 \end{vmatrix}
        = \breve i(1 - 0) - \breve j(1 - 0) + \breve k(3 + 1) = (1,\, -1,\, 4)$$</div>
        <div class="fx center">$$S = \{(x,y,z) \in \mathbb{R}^3 : x - y + 4z = 0\}$$</div>
        <p>Controles: $(1,1,0) \Rightarrow 1 - 1 + 0 = 0$ ✓; $(-1,3,1) \Rightarrow -1 - 3 + 4 = 0$ ✓.</p>

        <h3>Subespacio $T$</h3>
        <p>Hay tres vectores, así que primero hay que ver cuántos son independientes:</p>
        <div class="fx center">$$\det \begin{pmatrix} 1 & 0 & -1 \\ 1 & 3 & 1 \\ 1 & -3 & -3 \end{pmatrix}
        = 1(-9 + 3) - 0(-3 - 1) + (-1)(-3 - 3) = -6 - 0 + 6 = 0$$</div>
        <p>$\det = 0$ ⇒ L.D., así que $\dim T \le 2$. Y $(1,0,-1)$ con $(1,3,1)$ no son paralelos, luego $\dim T = 2$: también es un <strong>plano</strong>.</p>
        <p>La relación de dependencia: $(1,-3,-3) = \alpha(1,0,-1) + \beta(1,3,1)$ da $3\beta = -3 \Rightarrow \beta = -1$, y $\alpha + \beta = 1 \Rightarrow \alpha = 2$. Control de la tercera componente: $-2 - 1 = -3$ ✓. Entonces</p>
        <div class="fx center">$$(1,-3,-3) = 2\,(1,0,-1) - (1,3,1)$$</div>
        <p>y el tercer vector es redundante. El normal:</p>
        <div class="fx center">$$\vec n_T = (1,0,-1) \times (1,3,1) = \breve i(0 + 3) - \breve j(1 + 1) + \breve k(3 - 0) = (3,\, -2,\, 3)$$</div>
        <div class="fx center">$$T = \{(x,y,z) \in \mathbb{R}^3 : 3x - 2y + 3z = 0\}$$</div>
        <p>Controles de los <strong>tres</strong>: $(1,0,-1) \Rightarrow 3 - 0 - 3 = 0$ ✓; $(1,3,1) \Rightarrow 3 - 6 + 3 = 0$ ✓; $(1,-3,-3) \Rightarrow 3 + 6 - 9 = 0$ ✓.</p>`,
        resultado: tex`$S = \{x - y + 4z = 0\}$ y $T = \{3x - 2y + 3z = 0\}$. Los dos son planos por el origen. En $T$ el tercer generador es redundante: $(1,-3,-3) = 2(1,0,-1) - (1,3,1)$.` },

      { id: 'tp4-17b', rot: 'b', enunciado: tex`Hallar base y dimensión de $S$ y $T$.`,
        conceptos: ['u4-hallar-base', 'u4-base', 'u4-dimension'],
        resolucion: tex`<p>En los dos casos se toman los generadores independientes, que ya quedaron identificados en a).</p>
        <div class="fx center">$$B_S = \{(1,1,0),\;\; (-1,3,1)\}, \qquad \dim S = 2$$</div>
        <div class="fx center">$$B_T = \{(1,0,-1),\;\; (1,3,1)\}, \qquad \dim T = 2$$</div>
        <h3>Por qué son bases</h3>
        <ul>
          <li><strong>$B_S$:</strong> genera $S$ por definición de $S$, y es L.I. porque los dos vectores no son paralelos ([[u4-teorema-12|Teorema 12]]).</li>
          <li><strong>$B_T$:</strong> genera $T$ porque el tercer generador es combinación de estos dos (así que quitarlo no cambia el generado), y es L.I. por lo mismo.</li>
        </ul>
        <div class="note tip"><b class="lbl">Control cruzado con las ecuaciones</b>
        Cada subespacio está definido por <strong>una</strong> ecuación independiente en $\mathbb{R}^3$, así que $\dim = 3 - 1 = 2$ ✓ en ambos casos. Coincide con la cantidad de vectores de cada base, como debe ser por el [[u4-teorema-22|Teorema 22]].</div>
        <div class="note"><b class="lbl">Bases alternativas</b>
        No son únicas. Para $S$, resolviendo $x = y - 4z$ con el método de [[u4-hallar-base]] sale la base $\{(1,1,0),\; (-4,0,1)\}$; para $T$, de $2y = 3x + 3z$ con $y$ despejada conviene parametrizar $x = 2s$, $z = 2r$ para evitar fracciones, obteniendo $\{(2,3,0),\; (0,3,2)\}$. Todas tienen dos elementos.</div>`,
        resultado: tex`$B_S = \{(1,1,0),\, (-1,3,1)\}$ con $\dim S = 2$; $\;B_T = \{(1,0,-1),\, (1,3,1)\}$ con $\dim T = 2$.` },

      { id: 'tp4-17c', rot: 'c', enunciado: tex`Analizar si $S = T$.`,
        conceptos: ['u4-igualdad-subespacios', 'u4-teorema-24-25'],
        pista: tex`Tienen la misma dimensión, pero eso no alcanza. Probá si un generador de $S$ cumple la ecuación de $T$.`,
        resolucion: tex`<p><strong>No, $S \neq T$.</strong></p>
        <h3>Lo que no alcanza</h3>
        <p>$\dim S = \dim T = 2$. Pero <strong>la igualdad de dimensiones no implica igualdad de subespacios</strong> ([[u4-igualdad-subespacios]]): hay infinitos planos distintos por el origen, todos de dimensión 2.</p>
        <h3>El argumento corto</h3>
        <p>Se toma un generador de $S$ y se prueba en la ecuación de $T$:</p>
        <div class="fx center">$$(1,1,0) \in T\,? \qquad 3(1) - 2(1) + 3(0) = 3 - 2 = 1 \neq 0$$</div>
        <p>$(1,1,0) \in S$ pero $(1,1,0) \notin T$. Entonces $S \not\subseteq T$, y en particular <strong>$S \neq T$</strong>. $\blacksquare$</p>
        <h3>Confirmación por los normales</h3>
        <div class="fx center">$$\vec n_S = (1,-1,4), \qquad \vec n_T = (3,-2,3)$$</div>
        <p>No son paralelos: de la primera componente saldría factor $3$ y de la segunda $2$. Dos planos por el origen son el mismo si y sólo si sus normales son paralelos, así que son planos <strong>distintos</strong> ✓</p>
        <div class="note tip"><b class="lbl">Qué sí comparten</b>
        Al ser dos planos distintos por el origen, se cortan en una <strong>recta por el origen</strong>, de dimensión 1 (es el caso del ejercicio 4.a). Su director:
        $$\vec n_S \times \vec n_T = (1,-1,4) \times (3,-2,3) = \breve i(-3+8) - \breve j(3-12) + \breve k(-2+3) = (5,\, 9,\, 1)$$
        Control: $(5,9,1)$ en $S$: $5 - 9 + 4 = 0$ ✓; en $T$: $15 - 18 + 3 = 0$ ✓. Así que $S \cap T = \operatorname{gen}\{(5,9,1)\}$.</div>
        <div class="note warn"><b class="lbl">Cómo <em>sí</em> se probaría la igualdad</b>
        Si se quisiera demostrar $S = T$, el camino corto es: verificar que $\dim S = \dim T$ <strong>y</strong> que cada generador de $S$ satisface la ecuación de $T$ (es decir $S \subseteq T$); con eso, el [[u4-teorema-24-25|Teorema 25]] da la igualdad. Son <em>dos</em> condiciones, y acá falla la segunda.</div>`,
        resultado: tex`<strong>$S \neq T$.</strong> Tienen la misma dimensión, pero $(1,1,0) \in S$ no cumple la ecuación de $T$ ($3-2 = 1 \neq 0$). Son planos distintos; se cortan en la recta $\operatorname{gen}\{(5,9,1)\}$.` },

      { id: 'tp4-17d', rot: 'd', enunciado: tex`Extender una base de $S$ a una base de $\mathbb{R}^3$.`,
        conceptos: ['u4-teorema-sumar-vector', 'u4-teorema-26'],
        resolucion: tex`<p>Ya se tiene $B_S = \{(1,1,0),\, (-1,3,1)\}$ y la ecuación $S: x - y + 4z = 0$. Por [[u4-teorema-sumar-vector]], hay que agregar un vector que <strong>no</strong> esté en $S$, es decir que no cumpla esa ecuación.</p>
        <p>Probando el canónico $e_1 = (1,0,0)$:</p>
        <div class="fx center">$$1 - 0 + 4(0) = 1 \neq 0 \;✓ \qquad\text{luego } e_1 \notin S$$</div>
        <div class="fx center">$$B = \{(1,1,0),\;\; (-1,3,1),\;\; (1,0,0)\}$$</div>
        <h3>Verificación</h3>
        <p>Tres vectores en $\mathbb{R}^3$: por el [[u4-teorema-26|Teorema 26]] basta que sean L.I., y eso se ve con el determinante:</p>
        <div class="fx center">$$\det \begin{pmatrix} 1 & 1 & 0 \\ -1 & 3 & 1 \\ 1 & 0 & 0 \end{pmatrix} = 1 \cdot \begin{vmatrix} 1 & 0 \\ 3 & 1 \end{vmatrix} = 1\,(1 \cdot 1 - 0 \cdot 3) = 1 \neq 0 \;✓$$</div>
        <p>(Desarrollado por la tercera fila, que tiene dos ceros.) Luego $B$ es base de $\mathbb{R}^3$.</p>
        <div class="note tip"><b class="lbl">Otras opciones</b>
        Cualquier vector fuera del plano sirve. También valen $e_2 = (0,1,0)$ (da $-1 \neq 0$) y $e_3 = (0,0,1)$ (da $4 \neq 0$). Lo que <strong>no</strong> sirve es un vector de $S$: por ejemplo $(1,1,0) + (-1,3,1) = (0,4,1)$, que da $0 - 4 + 4 = 0$ y dejaría el conjunto L.D.
        <p>También serviría cualquier vector de $T$ que no esté en $S$, como $(1,0,-1)$: da $1 - 0 - 4 = -3 \neq 0$ ✓</p></div>
        <div class="note"><b class="lbl">Por qué siempre se puede extender</b>
        $S$ es un subespacio propio de $\mathbb{R}^3$ ($\dim S = 2 < 3$), así que por el [[u4-teorema-24-25|Teorema 25]] existe al menos un vector de $\mathbb{R}^3$ que no está en $S$ — si no existiera, sería $S = \mathbb{R}^3$. La extensión nunca falla mientras la dimensión del subespacio sea menor que la del espacio, y hace falta agregar exactamente $3 - 2 = 1$ vector.</div>`,
        resultado: tex`$B = \{(1,1,0),\, (-1,3,1),\, (1,0,0)\}$, con $\det = 1 \neq 0$. Sirve cualquier vector que no cumpla $x-y+4z=0$; la respuesta no es única.` }
    ]}

]});
