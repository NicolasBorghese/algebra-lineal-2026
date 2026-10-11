/* Unidad 4 — Espacios vectoriales
   Fuentes: "eal sc 26 espacios vectoriales ar más justificado.pdf" (diapositivas 2026,
            con la numeración de definiciones y teoremas que usa la cátedra)
            "Unidad 4 - Espacios Vectoriales.pdf" (apunte de teoría) */

EAL.unidad({
  id: 'u4', num: 4,
  titulo: 'Espacios vectoriales',
  resumen: 'El salto abstracto de la materia: los diez axiomas, subespacios, combinación lineal, generadores, independencia lineal, base y dimensión. Desde acá en adelante los "vectores" pueden ser polinomios o matrices.',
  secciones: [

  /* ========================================================= */
  { id: 'u4-s1', titulo: '1. Espacio vectorial: los diez axiomas',
    intro: 'La definición generaliza las propiedades que en la unidad 1 eran hechos sobre flechas. El precio del salto es que ahora hay que verificar axiomas; el premio es que todo lo que se demuestre vale para polinomios, matrices y funciones a la vez.',
    conceptos: [

    { id: 'u4-espacio-vectorial', tipo: 'def', titulo: 'Definición 1 — Espacio vectorial real',
      cuerpo: tex`<p>Un <strong>espacio vectorial real</strong> (o $\mathbb{R}$-espacio vectorial) $V$ es un conjunto no vacío de objetos llamados <em>vectores</em>, junto con dos operaciones binarias —una <strong>suma</strong> $\oplus$ y una <strong>multiplicación por un escalar</strong> $\odot$, que pueden ser «no usuales»— que satisfacen los diez axiomas:</p>
      <div class="tbl"><table>
        <thead><tr><th>#</th><th>Axioma</th><th>Nombre</th></tr></thead>
        <tbody>
          <tr><td>i</td><td>$u, v \in V \Rightarrow u \oplus v \in V$</td><td>cerradura de la suma</td></tr>
          <tr><td>ii</td><td>$(u \oplus v) \oplus w = u \oplus (v \oplus w)$</td><td>asociativa de la suma</td></tr>
          <tr><td>iii</td><td>$\exists\, e \in V: u \oplus e = e \oplus u = u$</td><td>neutro aditivo</td></tr>
          <tr><td>iv</td><td>$\forall u \;\exists\, u': u \oplus u' = u' \oplus u = e$</td><td>opuesto (inverso aditivo)</td></tr>
          <tr><td>v</td><td>$u \oplus v = v \oplus u$</td><td>conmutativa</td></tr>
          <tr><td>vi</td><td>$\alpha \in \mathbb{R},\, u \in V \Rightarrow \alpha \odot u \in V$</td><td>ley de composición externa</td></tr>
          <tr><td>vii</td><td>$\alpha \odot (u \oplus v) = \alpha \odot u \oplus \alpha \odot v$</td><td>primera distributiva</td></tr>
          <tr><td>viii</td><td>$(\alpha + \beta) \odot u = \alpha \odot u \oplus \beta \odot u$</td><td>segunda distributiva</td></tr>
          <tr><td>ix</td><td>$\alpha \odot (\beta \odot u) = (\alpha\beta) \odot u$</td><td>asociativa de escalares</td></tr>
          <tr><td>x</td><td>$1 \odot u = u$</td><td>$1$ es neutro multiplicativo</td></tr>
        </tbody>
      </table></div>
      <div class="note tip"><b class="lbl">Ejemplos que se usan todo el año</b>
      $\mathbb{R}^n$ con las operaciones usuales; $M_{m\times n}(\mathbb{R})$ (matrices); $P_n$ o $\mathbb{R}_n[x]$ (polinomios de grado $\le n$); $\mathbb{R}[x]$ (todos los polinomios). Los enunciados llaman «vector» a cualquiera de estos objetos.</div>
      <div class="note warn"><b class="lbl">Cómo se responde «¿es espacio vectorial?»</b>
      Para probar que <strong>sí</strong>, hay que verificar los diez axiomas. Para probar que <strong>no</strong>, basta exhibir <strong>un</strong> axioma que falle, con un contraejemplo numérico concreto. El enunciado del TP pide justamente «indicar qué axiomas no se verifican»: alcanza con los que fallan, pero hay que mostrarlos con un caso puntual, no decir que «no cumple».</div>` },

    { id: 'u4-neutro-no-usual', tipo: 'met', titulo: 'Método — operaciones no usuales',
      cuerpo: tex`<p>Cuando la suma o el producto están definidos de forma rara, el neutro y el opuesto <strong>no son</strong> necesariamente $(0,0)$ y $(-x,-y)$: hay que calcularlos.</p>
      <ol class="pasos">
        <li><span class="ptit">Buscar el neutro.</span> Se plantea $u \oplus e = u$ con $e = (e_1, e_2)$ genérico y se despeja. Si no existe un $e$ que funcione <em>para todo</em> $u$, falla el axioma iii.</li>
        <li><span class="ptit">Buscar el opuesto.</span> Con el $e$ hallado, se plantea $u \oplus u' = e$ y se despeja $u'$. Si para algún $u$ no existe, falla el axioma iv.</li>
        <li><span class="ptit">Chequear los distributivos y el axioma x.</span> Son los que más suelen fallar en los productos no usuales: por ejemplo con $\alpha \odot v = 2\alpha v$ falla $1 \odot v = v$, porque daría $2v \neq v$.</li>
      </ol>
      <div class="note tip"><b class="lbl">Caso del vector fijo $(a,b)$</b> Con $\;(x_1,y_1) \oplus (x_2,y_2) = (x_1,y_1) + (x_2,y_2) - (a,b)$, el neutro es $e = (a,b)$ y el opuesto de $(x,y)$ es $(2a - x,\; 2b - y)$. Vale la pena hacer la cuenta: muestra que un espacio vectorial puede tener «origen» en otro lado.</div>` },

    { id: 'u4-teorema-2', tipo: 'teo', titulo: 'Teorema 2 — Propiedades elementales',
      cuerpo: tex`<p>Sea $V$ un espacio vectorial. Entonces:</p>
      <ol>
        <li>$0 \cdot v = \vec 0$ para todo $v \in V$, y $\alpha \cdot \vec 0 = \vec 0$ para todo $\alpha \in \mathbb{R}$.</li>
        <li>Si $\alpha \neq 0$ y $v \neq \vec 0$, entonces $\alpha v \neq \vec 0$.</li>
        <li>Si $\alpha v = \vec 0$, entonces $\alpha = 0$ <strong>o</strong> $v = \vec 0$.</li>
        <li>$(-1)\,v = -v$.</li>
      </ol>` }
  ]},

  /* ========================================================= */
  { id: 'u4-s2', titulo: '2. Subespacios vectoriales',
    conceptos: [

    { id: 'u4-subespacio', tipo: 'def', titulo: 'Definición 3 — Subespacio vectorial',
      cuerpo: tex`<p>$H$ es un <strong>subespacio vectorial</strong> de $V$ si $H$ es un subconjunto no vacío de $V$ y $H$ es, a su vez, un espacio vectorial con las mismas operaciones de suma y producto por escalar definidas en $V$.</p>` },

    { id: 'u4-teorema-4', tipo: 'teo', titulo: 'Teorema 4 — Criterio de subespacio (el que se usa siempre)',
      cuerpo: tex`<p>Un subconjunto $H \subseteq V$ es subespacio de $V$ si se cumplen las tres reglas:</p>
      <ol>
        <li>$\vec 0 \in H$;</li>
        <li>si $u, v \in H$, entonces $u + v \in H$ (cerradura de la suma);</li>
        <li>si $\alpha \in \mathbb{R}$ y $u \in H$, entonces $\alpha u \in H$ (cerradura del producto por escalar).</li>
      </ol>
      <div class="note tip"><b class="lbl">Por qué este teorema vale oro</b>
      Hace innecesario verificar los diez axiomas: los otros siete se heredan de $V$. Son <strong>tres</strong> cuentas, no diez. Y la condición 1 funciona como filtro rápido: si $\vec 0 \notin H$, ya está, no es subespacio.</div>
      <div class="note"><b class="lbl">Observaciones</b>
      <ol>
        <li>Todo subespacio contiene al vector nulo del espacio.</li>
        <li>$\{\vec 0\}$ es el <strong>subespacio trivial</strong>.</li>
        <li>Todo espacio vectorial es subespacio de sí mismo.</li>
        <li>Las <strong>rectas que pasan por el origen</strong> son subespacios propios de $\mathbb{R}^2$ (y de $\mathbb{R}^3$).</li>
        <li>Los <strong>planos que pasan por el origen</strong> son subespacios propios de $\mathbb{R}^3$.</li>
      </ol></div>
      <div class="note warn"><b class="lbl">El contraejemplo típico</b>
      $S = \{(x,y,z) : 3x + y = z + 1\}$ <strong>no</strong> es subespacio: reemplazando $(0,0,0)$ queda $0 = 1$, falso. En general, toda condición <strong>no homogénea</strong> (con término independiente $\neq 0$) deja afuera al nulo. Las ecuaciones lineales <strong>homogéneas</strong> sí dan subespacios.</div>` },

    { id: 'u4-teorema-5', tipo: 'teo', titulo: 'Teorema 5 y Corolario — Intersección de subespacios',
      cuerpo: tex`<p>Si $S_1$ y $S_2$ son subespacios de $V$, entonces $S_1 \cap S_2$ es un subespacio de $V$. Más en general, la intersección de $n$ subespacios de $V$ es un subespacio de $V$.</p>
      <div class="note warn"><b class="lbl">La unión NO</b>
      $S_1 \cup S_2$ en general <strong>no</strong> es subespacio: falla la cerradura de la suma. Contraejemplo en $\mathbb{R}^2$: con $S_1$ el eje $x$ y $S_2$ el eje $y$, los vectores $(1,0)$ y $(0,1)$ están en la unión pero $(1,1)$ no. Es un verdadero/falso que aparece textual en los finales.</div>
      <div class="note tip"><b class="lbl">Cómo se calcula la intersección</b>
      Se junta en un solo sistema todas las ecuaciones que caracterizan a $S_1$ y todas las de $S_2$, y se resuelve. La interpretación geométrica en $\mathbb{R}^3$ sale de la cantidad de grados de libertad del resultado: 2 ⇒ plano, 1 ⇒ recta, 0 ⇒ sólo el origen.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u4-s3', titulo: '3. Combinación lineal y conjuntos generadores',
    conceptos: [

    { id: 'u4-combinacion-lineal', tipo: 'def', titulo: 'Combinación lineal',
      cuerpo: tex`<p>Sea $V$ un espacio vectorial. Un vector $v \in V$ es <strong>combinación lineal</strong> de $v_1, v_2, \dots, v_n \in V$ si existen escalares $\alpha_1, \dots, \alpha_n \in \mathbb{R}$ tales que</p>
      <div class="fx center">$$v = \alpha_1 v_1 + \alpha_2 v_2 + \dots + \alpha_n v_n$$</div>
      <div class="note tip"><b class="lbl">Método — ¿es $v$ combinación lineal de $A$?</b>
      Se plantea la igualdad con escalares incógnita, se iguala componente por componente (o coeficiente por coeficiente si son polinomios, o entrada por entrada si son matrices) y queda un <strong>sistema lineal</strong>. Entonces:
      <ul>
        <li>compatible (determinado o indeterminado) ⇒ <strong>sí</strong> es combinación lineal;</li>
        <li>incompatible ⇒ <strong>no</strong> lo es.</li>
      </ul>
      Si el sistema es indeterminado, la escritura existe pero no es única: eso ya avisa que el conjunto $A$ es [[u4-li-ld|linealmente dependiente]].</div>` },

    { id: 'u4-generado', tipo: 'def', titulo: 'Espacio generado',
      cuerpo: tex`<p>Si $v_1, \dots, v_n$ son vectores de $V$, el <strong>espacio generado</strong> por ellos es el conjunto de todas sus combinaciones lineales:</p>
      <div class="fx center">$$\operatorname{gen}\{v_1, \dots, v_n\} = \left\{ v \in V : v = \sum_{i=1}^{n} \alpha_i v_i, \;\alpha_i \in \mathbb{R} \right\}$$</div>
      <p>Se nota $\operatorname{gen}\{\cdot\}$, $\langle \cdot \rangle$ o $\operatorname{span}\{\cdot\}$. Se dice que $\{v_1,\dots,v_n\}$ es un <strong>conjunto generador</strong> de ese espacio.</p>
      <div class="note"><b class="lbl">Observación</b> En general $\operatorname{gen}(A) \neq V$. Puede ocurrir que sí: en ese caso se dice que $A$ <strong>genera</strong> a $V$.</div>` },

    { id: 'u4-teorema-9', tipo: 'teo', titulo: 'Teorema 9 — El generado es un subespacio',
      cuerpo: tex`<p>Si $v_1, v_2, \dots, v_n$ son vectores de un espacio vectorial $V$, entonces $\operatorname{gen}\{v_1, \dots, v_n\}$ es un <strong>subespacio</strong> de $V$.</p>
      <div class="note tip"><b class="lbl">Consecuencia práctica</b> Nunca hace falta verificar el [[u4-teorema-4|Teorema 4]] para un conjunto dado como generado: ya se sabe que es subespacio. Y el generado es siempre el subespacio <em>más chico</em> que contiene a esos vectores.</div>` },

    { id: 'u4-teorema-10', tipo: 'teo', titulo: 'Teorema 10 — Agregar vectores a un generador',
      cuerpo: tex`<p>Sean $v_1, \dots, v_n, v_{n+1}$ vectores de $V$. Si $v_1, \dots, v_n$ generan a $V$ y $v_{n+1}$ es combinación lineal de ellos, entonces $v_1, \dots, v_n, v_{n+1}$ también generan a $V$.</p>
      <p>Es decir: <strong>si se agregan uno o más vectores a un conjunto generador, se obtiene otro conjunto generador.</strong> Lo que se pierde no es la capacidad de generar, sino la independencia lineal.</p>` },

    { id: 'u4-hallar-generado', tipo: 'met', titulo: 'Método — hallar las ecuaciones del subespacio generado',
      cuerpo: tex`<p>Los ítems «hallar el subespacio de $\mathbb{R}^3$ generado por $\vec u$ y $\vec v$» piden pasar de la descripción <em>por generadores</em> a la descripción <em>por ecuaciones</em>.</p>
      <ol class="pasos">
        <li><span class="ptit">Plantear la combinación lineal genérica.</span> $(x,y,z) = \alpha \vec u + \beta \vec v$, y escribir el sistema en las incógnitas $\alpha, \beta$ con $x,y,z$ como parámetros.</li>
        <li><span class="ptit">Triangular</span> por Gauss, tratando $x,y,z$ como constantes.</li>
        <li><span class="ptit">Imponer la compatibilidad.</span> La condición para que el sistema tenga solución —típicamente una fila que queda $0 = (\text{expresión en } x,y,z)$— <strong>es</strong> la ecuación del subespacio.</li>
      </ol>
      <div class="note tip"><b class="lbl">Camino alternativo en $\mathbb{R}^3$</b>
      Si $\vec u$ y $\vec v$ no son paralelos, generan un plano por el origen, y su normal es $\vec n = \vec u \times \vec v$ ([[u1-producto-vectorial]]). La ecuación es $\vec n \cdot (x,y,z) = 0$, directo. Si $\vec u \parallel \vec v$, generan sólo una recta.</div>
      <div class="note"><b class="lbl">Qué mirar primero</b>
      Antes de calcular conviene ver cuántos de los vectores dados son realmente independientes: en $\mathbb{R}^3$, dos vectores paralelos generan una recta (dimensión 1), dos no paralelos un plano (dimensión 2), y tres con producto mixto no nulo generan todo $\mathbb{R}^3$.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u4-s4', titulo: '4. Dependencia e independencia lineal',
    conceptos: [

    { id: 'u4-li-ld', tipo: 'def', titulo: 'Independencia y dependencia lineal',
      cuerpo: tex`<p>Los vectores $v_1, \dots, v_n$ de $V$ son <strong>linealmente dependientes</strong> (L.D.) si existen escalares $\alpha_1, \dots, \alpha_n$ <strong>no todos nulos</strong> tales que</p>
      <div class="fx center">$$\alpha_1 v_1 + \alpha_2 v_2 + \dots + \alpha_n v_n = \vec 0$$</div>
      <p>es decir, si el vector nulo se puede escribir como combinación lineal <em>no trivial</em> de ellos. Si no son linealmente dependientes se dicen <strong>linealmente independientes</strong> (L.I.): la única combinación lineal que da $\vec 0$ es la que tiene todos los escalares nulos.</p>
      <div class="note tip"><b class="lbl">Método</b>
      Se plantea $\alpha_1 v_1 + \dots + \alpha_n v_n = \vec 0$, se arma el sistema <strong>homogéneo</strong> y se resuelve:
      <ul>
        <li>solución <strong>única</strong> (la trivial) ⇒ <strong>L.I.</strong></li>
        <li><strong>infinitas</strong> soluciones ⇒ <strong>L.D.</strong></li>
      </ul>
      Un sistema homogéneo nunca es incompatible, así que sólo hay dos casos posibles.</div>` },

    { id: 'u4-teorema-12', tipo: 'teo', titulo: 'Teorema 12 — Dos vectores',
      cuerpo: tex`<p>Dos vectores de un espacio vectorial son linealmente dependientes si y sólo si <strong>uno de ellos es múltiplo escalar del otro</strong>.</p>
      <div class="note tip"><b class="lbl">Conexión con la unidad 1</b> Para vectores de $\mathbb{R}^2$ o $\mathbb{R}^3$ esto es exactamente el [[u1-teorema-1|criterio de paralelismo]]: dos vectores son L.D. si y sólo si son paralelos. Con dos vectores se ve a ojo y no hace falta armar el sistema.</div>` },

    { id: 'u4-teorema-13', tipo: 'teo', titulo: 'Teorema 13 y Corolario 14 — Cuántos vectores pueden ser L.I.',
      cuerpo: tex`<p><strong>Teorema 13.</strong> Un conjunto de $r$ vectores en $\mathbb{R}^n$ es siempre <strong>linealmente dependiente</strong> si $r > n$.</p>
      <p><strong>Corolario 14.</strong> Un conjunto de vectores linealmente independientes en $\mathbb{R}^n$ contiene a lo sumo $n$ vectores.</p>
      <div class="note tip"><b class="lbl">Ahorro de cuentas</b> Cuatro vectores de $\mathbb{R}^3$ son L.D. sin necesidad de calcular nada: sobran. Lo mismo tres vectores en $\mathbb{R}^2$. Conviene decirlo por teorema y pasar al siguiente ítem.</div>` },

    { id: 'u4-teorema-15-17', tipo: 'teo', titulo: 'Teoremas 15, 16 y 17 — Versión matricial',
      cuerpo: tex`<p>Sea $A$ una matriz de $n \times n$ cuyas columnas son los vectores en cuestión.</p>
      <ul>
        <li><strong>Teorema 15.</strong> Las columnas de $A$ son linealmente <strong>dependientes</strong> si y sólo si el sistema $A\vec x = \vec 0$ tiene soluciones no triviales.</li>
        <li><strong>Teorema 16.</strong> Las columnas de $A$ son linealmente <strong>independientes</strong> si y sólo si $A\vec x = \vec 0$ tiene sólo la solución trivial.</li>
        <li><strong>Teorema 17.</strong> $\det A \neq 0$ si y sólo si las columnas de $A$ son linealmente independientes.</li>
      </ul>
      <div class="note tip"><b class="lbl">El atajo del determinante</b>
      Con exactamente $n$ vectores de $\mathbb{R}^n$, basta calcular <strong>un determinante</strong>: $\det \neq 0$ ⇒ L.I. (y además forman base, por [[u4-teorema-26]]); $\det = 0$ ⇒ L.D. Es lo que resuelve en dos líneas los ítems «¿para qué valores de $k$ estos vectores forman una base de $\mathbb{R}^3$?»: se plantea $\det = 0$ y se descartan esas raíces.</div>` },

    { id: 'u4-teorema-18', tipo: 'teo', titulo: 'Teorema resumen 18',
      cuerpo: tex`<p>Sea $A$ una matriz de $n \times n$. Las siguientes afirmaciones son <strong>equivalentes</strong> (si una es cierta, todas lo son):</p>
      <ol>
        <li>Existe $A^{-1}$.</li>
        <li>La trivial es la única solución del sistema $A\vec x = \vec 0$.</li>
        <li>El sistema $A\vec x = \vec b$ es compatible determinado.</li>
        <li>$A$ es equivalente por renglones a la matriz identidad $I_n$.</li>
        <li>La forma escalonada de $A$ tiene $n$ pivotes.</li>
        <li>Las columnas (y los renglones) de $A$ son linealmente independientes.</li>
        <li>$\det A \neq 0$.</li>
      </ol>
      <div class="note tip"><b class="lbl">Aparece textual en los parciales</b>
      Los enunciados piden «enuncie tres ítems del teorema resumen». En la unidad 7 este teorema se amplía a <strong>doce</strong> ítems, agregando los que involucran autovalores — ver [[u7-teorema-resumen]].</div>` },

    { id: 'u4-teorema-19', tipo: 'teo', titulo: 'Teorema 19 — n vectores L.I. generan Rⁿ',
      cuerpo: tex`<p>Cualquier conjunto de $n$ vectores linealmente independientes en $\mathbb{R}^n$ genera a $\mathbb{R}^n$.</p>
      <p>Junto con el [[u4-teorema-13|Corolario 14]] esto dice que en $\mathbb{R}^n$ la cantidad $n$ es el punto justo: con menos de $n$ vectores no se puede generar todo, con más de $n$ no se puede ser independiente, y con exactamente $n$ vale una cosa si y sólo si vale la otra.</p>` },

    { id: 'u4-teorema-sumar-vector', tipo: 'teo', titulo: 'Agregar un vector a un conjunto L.I.',
      cuerpo: tex`<p>Sean $v_1, \dots, v_n, v_{n+1}$ vectores de $V$ con $v_1, \dots, v_n$ linealmente independientes. Entonces</p>
      <div class="fx center">$$\{v_1, \dots, v_n, v_{n+1}\} \text{ es L.I.} \iff v_{n+1} \notin \operatorname{gen}\{v_1, \dots, v_n\}$$</div>
      <p>Y recíprocamente: si alguno de los vectores de un conjunto es combinación lineal de los otros, el conjunto es L.D.</p>
      <div class="note tip"><b class="lbl">Es la herramienta para extender a una base</b>
      «Verificar que $\vec u$ y $\vec v$ son L.I. y extenderlos a una base de $\mathbb{R}^3$»: se busca un tercer vector que <strong>no</strong> pertenezca al plano $\operatorname{gen}\{\vec u, \vec v\}$. Lo práctico es hallar la ecuación de ese plano con [[u4-hallar-generado]] y elegir cualquier vector que no la cumpla —muchas veces un canónico sirve—. La respuesta no es única.</div>` }
  ]},

  /* ========================================================= */
  { id: 'u4-s5', titulo: '5. Base y dimensión',
    conceptos: [

    { id: 'u4-base', tipo: 'def', titulo: 'Definición 20 — Base',
      cuerpo: tex`<p>Un conjunto finito de vectores $\{v_1, v_2, \dots, v_n\}$ es una <strong>base</strong> del espacio vectorial $V$ si</p>
      <ol>
        <li>el conjunto $\{v_1, \dots, v_n\}$ es <strong>linealmente independiente</strong>, y</li>
        <li>$\operatorname{gen}\{v_1, \dots, v_n\} = V$ (es decir, <strong>genera</strong> a $V$).</li>
      </ol>
      <p><strong>Bases canónicas.</strong> En $\mathbb{R}^n$, la base canónica está formada por las columnas de la matriz identidad $I_n$ en orden. En $P_3$: $C = \{1, x, x^2, x^3\}$. En $M_{2\times 3}$: las seis matrices con un $1$ en una posición y $0$ en las demás.</p>
      <div class="note"><b class="lbl">Una base es un conjunto ordenado</b> El orden importa a la hora de escribir coordenadas (unidad 5): cambiar el orden de los vectores de la base cambia el orden de las coordenadas.</div>` },

    { id: 'u4-teorema-21', tipo: 'teo', titulo: 'Teorema 21 — Unicidad de la escritura en una base',
      cuerpo: tex`<p>Si $\{v_1, \dots, v_n\}$ es una base de $V$ y $v \in V$, entonces existe un conjunto <strong>único</strong> de escalares $\alpha_1, \dots, \alpha_n$ tales que</p>
      <div class="fx center">$$v = \alpha_1 v_1 + \alpha_2 v_2 + \dots + \alpha_n v_n$$</div>
      <div class="note tip"><b class="lbl">Es lo que hace posible la unidad 5</b> Esos escalares únicos son las [[u5-coordenadas|coordenadas de $v$ en la base]]. Sin independencia lineal la escritura existiría pero no sería única, y «las coordenadas» no estarían bien definidas.</div>` },

    { id: 'u4-teorema-22', tipo: 'teo', titulo: 'Teorema 22 — Todas las bases tienen el mismo cardinal',
      cuerpo: tex`<p>Si $\{v_1, \dots, v_n\}$ y $\{w_1, \dots, w_m\}$ son bases de un espacio vectorial $V$, entonces $n = m$: cualesquiera dos bases de $V$ tienen el mismo número de vectores.</p>` },

    { id: 'u4-dimension', tipo: 'def', titulo: 'Definición 23 — Dimensión',
      cuerpo: tex`<p>Si $V$ tiene una base con un número finito de elementos, la <strong>dimensión</strong> de $V$ es el número de vectores de cualquiera de sus bases (bien definido por el [[u4-teorema-22|Teorema 22]]), y $V$ se llama de <strong>dimensión finita</strong>. Si no, de dimensión infinita. Si $V = \{\vec 0\}$ se dice que $\dim V = 0$.</p>
      <div class="fx center">$$\dim \mathbb{R}^n = n, \qquad \dim P_n = n+1, \qquad \dim M_{m \times n}(\mathbb{R}) = m \cdot n$$</div>
      <div class="note warn"><b class="lbl">El $+1$ de los polinomios</b> $\dim P_2 = 3$, no 2: la base canónica es $\{1, x, x^2\}$, hay que contar el término constante.</div>` },

    { id: 'u4-teorema-24-25', tipo: 'teo', titulo: 'Teoremas 24 y 25 — Cotas de dimensión',
      cuerpo: tex`<p><strong>Teorema 24.</strong> Si $\dim V = n$ y $v_1, \dots, v_m$ es un conjunto de vectores linealmente independientes de $V$, entonces $m \le n$.</p>
      <p><strong>Teorema 25.</strong> Sea $S$ un subespacio de un espacio vectorial de dimensión finita $V$. Entonces $S$ tiene dimensión finita y $\dim S \le \dim V$. Además, $\dim S = \dim V$ si y sólo si $S = V$.</p>` },

    { id: 'u4-teorema-26', tipo: 'teo', titulo: 'Teorema 26 — n vectores L.I. en dimensión n forman base',
      cuerpo: tex`<p>Cualquier conjunto de $n$ vectores linealmente independientes en un espacio vectorial $V$ de dimensión $n$ constituye una base de $V$.</p>
      <div class="note tip"><b class="lbl">El teorema que más trabajo ahorra</b>
      Si se sabe que $\dim V = n$, para probar que un conjunto de $n$ vectores es base alcanza con verificar <strong>una</strong> de las dos condiciones de la [[u4-base|Definición 20]]: la otra sale gratis. En general se verifica la independencia lineal, que es un sistema homogéneo o un determinante.</div>` },

    { id: 'u4-hiperplano', tipo: 'def', titulo: 'Definición 27 — Hiperplano',
      cuerpo: tex`<p>En $\mathbb{R}^n$, todo subespacio de dimensión $n-1$ es un <strong>hiperplano</strong>.</p>
      <p>En $\mathbb{R}^2$ los hiperplanos son las rectas por el origen; en $\mathbb{R}^3$, los planos por el origen.</p>` },

    { id: 'u4-hallar-base', tipo: 'met', titulo: 'Método — hallar base y dimensión de un subespacio',
      cuerpo: tex`<p><strong>Si el subespacio viene dado por ecuaciones.</strong> Es el caso más frecuente del TP 4:</p>
      <ol class="pasos">
        <li><span class="ptit">Resolver el sistema homogéneo</span> y despejar las variables ligadas en función de las <strong>libres</strong>.</li>
        <li><span class="ptit">Escribir el vector genérico</span> del subespacio en función de las variables libres.</li>
        <li><span class="ptit">Generar un vector de la base por cada variable libre:</span> se le da el valor $1$ a una de ellas y $0$ a las restantes, y se repite hasta recorrer todas.</li>
        <li><span class="ptit">La dimensión</span> es la cantidad de variables libres, es decir la cantidad de vectores que quedaron.</li>
      </ol>
      <p>Por ejemplo, para $\pi = \{(x,y,z) : x + 2y + 3z = 0\}$ se despeja $x = -2y - 3z$, los puntos son $(-2y-3z,\, y,\, z)$, y la base es $\{(-2,1,0), (-3,0,1)\}$, con $\dim \pi = 2$.</p>
      <p><strong>Si el subespacio viene dado por generadores.</strong> Se descartan los vectores que sean combinación lineal de los otros: se arma la matriz con los vectores como filas, se triangula por Gauss y las <strong>filas no nulas</strong> de la forma escalonada son una base. La dimensión es la cantidad de filas no nulas (el rango).</p>
      <div class="note tip"><b class="lbl">Para polinomios y matrices es igual</b>
      Se los trata como $n$-uplas de coeficientes. Por ejemplo $S = \{p(x) = a + bx^2 - ax^3\}$: los parámetros libres son $a$ y $b$, y la base se obtiene con $(a,b) = (1,0)$ y $(0,1)$, lo que da $\{1 - x^3,\; x^2\}$ y $\dim S = 2$.</div>` },

    { id: 'u4-igualdad-subespacios', tipo: 'met', titulo: 'Método — ¿son iguales dos subespacios?',
      cuerpo: tex`<p>Para decidir si $S = T$ hay dos caminos y conviene elegir el más corto:</p>
      <ul>
        <li><strong>Por dimensión y contención.</strong> Si $\dim S = \dim T$ y además $S \subseteq T$ (cada generador de $S$ satisface las ecuaciones de $T$), entonces $S = T$, por el [[u4-teorema-24-25|Teorema 25]]. Es el camino corto.</li>
        <li><strong>Por ecuaciones.</strong> Se hallan las ecuaciones que caracterizan a cada uno con [[u4-hallar-generado]] y se comparan.</li>
      </ul>
      <div class="note warn"><b class="lbl">No alcanza con la dimensión</b> Dos subespacios de la misma dimensión pueden ser distintos (dos planos distintos por el origen tienen ambos dimensión 2). Siempre hace falta además la contención.</div>` }
  ]}

]});
