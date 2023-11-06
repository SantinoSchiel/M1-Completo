/*
* M1 Repo => "https://github.com/soyHenry/FT-M1.git"
TODO: Important Topics
*/
// * Introducción a la ciencia de la computación
/*
Las tres principales áreas de estudio son:
- Informática teórica o Teoria Computacional
- Ingeniería Informática o Ingeniería Computacional
- Aplicaciones
​
[Map of Computer Science](https://live.staticflickr.com/4387/36231833334_3252f05552_b.jpg)
​
* ## `Teoria Computacional`
Aquí se encuentra el aprendizaje y análisis de algoritmos. 
Un algoritmo es una sucesión de pasos ordenados que al repetirse de forma sistemática 
logra resolver un problema. A su vez, los algoritmos traen consigo un nuevo concepto: 
la complejidad. Por otro lado, en este mismo se encuentra la teoría de grafos, criptografía, 
hardware y estructuras de datos. Estos últimos se utilizan para organizar los datos de forma 
eficiente para su posterior uso.
​
Alan Turing (1912 - 1954) fue matemático, investigador informático, criptoanalista, erudito y científico inglés. 
Turing fue excepcionalmente persuasivo en la mejora de la informática teórica, dando una formalización 
de las ideas de cálculo y cálculo con la máquina de Turing, que puede verse como un modelo de una PC 
universalmente útil. Turing es generalmente visto como el padre de la informática teórica.
​
Aquí vemos Algoritmos teóricos de informática, estructuras de datos, complejidad computacional, 
computación paralela y distribuida, computación probabilística, computación cuántica, teoría de 
autómatas, teoría de la información, criptografía, semántica y verificación de programas y 
aprendizaje automático.
​
| Complejidad computacional y algoritmo: 
|---|
​
En ingeniería informática, la complejidad computacional o la complejidad esencial de un cálculo 
es la medida de los pasos (procesos y tiempo) necesarios para ejecutar. 
La investigación de la complejidad de un algoritmo dado expresamente se denomina análisis del algoritmo.
 
|Criptografía:
|---|
​
La criptografía es la preparación y el análisis de procedimientos para garantizar la correspondencia 
sin que esta sea vista por quien no deseamos la vea. Más en general, la criptografía está ligada 
con el desarrollo y la disección de convenciones que evitan que los extraños o la población en 
general examinen los mensajes privados.
​
​
*## `Ingeniería Computacional`
Aquí estamos parados nosotros.
En esta instancia podemos encontrar ingeniería del software, donde prevalece el desarrollo del mismo. 
El conocimiento y desarrollo de diversos lenguajes de programación, arquitectura de computadoras, 
compiladores de código, entre otros.
​
Hay tres aplicaciones y prácticas principales que forman parte de la ingeniería informática:  
​
| Ingeniería de hardware informático:
|--| 
​
Es el camino hacia la planificación, creación, prueba y entrega de marcos de PC y otras partes reales 
identificadas con marcos de computadora.
​
En los marcos implantados, el diseño de equipos implica la interacción del diseño y la mejora de todos 
los equipos relacionados con los dispositivos, como sensores, procesadores y reguladores.
​
|Ingeniería de software informático: 
|--|
​
La ingeniería de software se caracteriza como un ciclo de disección de los requisitos previos del cliente y, 
luego, planificación, creación y prueba de la aplicación de programación que satisfará esas necesidades.
​
|Arquitectura informática:
|--|
​
Es un conjunto de decisiones y estrategias que representan la utilidad, asociación y ejecución de los marcos 
informáticos. 
 
|Sistema operativo:
|--|
​
Es un software de sistema que controla el funcionamiento del hardware de la computadora, los componentes 
de software y proporciona varios servicios a la computadora. Los sistemas operativos se encuentran en muchos 
dispositivos, como dispositivos móviles, supercomputadoras y muchos otros.
​
​
## `Aplicaciones`
Por otro lado, existe la inteligencia artificial, robótica, machine learning, satisfacibilidad booleana, 
procesamiento de imágenes, procesamiento de lenguaje natural, realidad aumentada. Por último, big data y 
lo que se conoce como hacking ético.
​
​
|Inteligencia artificial:
|--|
​
(IA) sugiere el juego de datos humanos en máquinas que se modifican para pensar como individuos y duplicar 
sus actividades.
 
|Aprendizaje automático:
|--|
​
Destinado a realizar diferentes tareas dentro de un espacio (por ejemplo, interpretación de idiomas). 
La IA general es especulativa y no explícita en el área, sino que puede realizar y aprender tareas en 
cualquier lugar. 
 
|Big data:
|--|
​
Describe las formas de analizar la información que se ha extraído del sistema informático en grandes 
conjuntos de datos.
 
|Interacción humano-computadora: 
|--|
​
Los investigadores en el campo de HCI observan las formas en que los humanos interactúan con las computadoras.
 
|Realidad virtual: 
|--|
​
Se refiere a un juego producido por computadora en el que una persona puede asociarse dentro de un 
clima tridimensional falso utilizando dispositivos electrónicos, como gafas especiales con una pantalla 
o guantes equipados con sensores.
 
|Robótica:
|--|
​
Es un campo interdisciplinario que une la ingeniería y el diseño de software. La tecnología mecánica 
incorpora el plan, la mejora, el movimiento y el uso de robots. El objetivo de la innovación mecánica 
es organizar máquinas que puedan ayudar a las personas.
*/
​
//* Tabla de Verasidad (Operadores "AND", "OR" y "XOR")
/*
Conectores Lógicos
​
A | B | AND
--| --| --
1 | 1 |  1
1 | 0 |  0
0 | 0 |  0
0 | 1 |  0
​
A | B | OR
--| --| --
1 | 1 |  1
1 | 0 |  1
0 | 0 |  0
0 | 1 |  1
​
A | B | XOR
--| --| --
1 | 1 |  0  <- X change
1 | 0 |  1
0 | 0 |  0
0 | 1 |  1
​
A | NOT
--| --
1 |  0
0 |  1
​
* === <- es una comparación fuerte e == es comparación más débil 
​
!! de algo nos brinda el verdadero valor de ese "objeto" (número, string, objeto, array, etc.)
!![] -> true
!!0  -> false
*/
​
//* Programar ¿Qué es?
/*
Usamos las computadoras que pueden procesar gran cantidad de datos en breve tiempo
y le damos órdenes para poder realizar lo que necesitamos.
​
Creamos algorítmos que son conjuntos de pasos precisos para llevar a cabo funciones y operaciones diversas.
*/
​
//* JS - JavaScript
/*
"https://developer.mozilla.org/es/"
Para poder usar JS en nuestra pc, instalamos Node JS
O lo podemos usar desde los navegadores ya que estos interpretan JS
* JS es: de alto nivel, interpretado, multiparadigma, orientado a objetos, prototipado (en JS todo es un objeto)
​
el nivel mas bajo es lo que la computadora realmente entiende que son solo CEROS y UNOS (binario)
*/
​
//* Sumar con binarios
/*
ADN -> ACARREO (lo que me llevo)  -> 1 | 1 |  1
XOR -> SUM
​
  1
  - 1 1   -> 3
  - 1 0   -> 2
    ---
  1 0 1
​
​
​
​
# Half Adder -> Sumador electrónico con transitores.
En función de las compuertas lógicas a través de la combinación de estas podemos lograr diversas operaciones.
Ejemplo, sumar 6+4 = 10. En binario sería "110" + "100" = "1010"
                                         (acarreo)
 1 |1 |0         1 |1 |0         1 |1 |0      1  1 |1 |0        
 --|--|--        --|--|--       --|--|--        --|--|--
 1 |0 |0         1 |0 |0         1 |0 |0      x  1 |0 |0      x = nada = 0
---------       ---------       ---------       ---------
      0             1  0         0  1  0      1  0  1  0
​
Comenzando de derecha a izquierda. 
Con el AND vemos si hay acarreo. Y con el XOR para sumar
*/
​
//* Binario a decimal
/*
Ejemplo: "10101", comenzando de derecha a izquierda, cada 1 o 0 será multiplicado por 2^n en 
donde n describe la posición en el que se encuentra, siendo el más derecho, la posición 0. 
El resultado final será la sumatoria de todos ellos.
​
 1  |  0  |  1  |  0  |  1      (num binarios que finalizan en 1 son impares)
--- | --- | --- | --- | ---
2^4 | 2^3 | 2^2 | 2^1 | 2^0
 16    8     4     2     1
 16 +  0  +  4  +  0  +  1  = 21
​
?Recordar que todo número elevado a la 0 es igual a 1
Por lo tanto:
1x 2^4 + 0x 2^3 + 1x 2^2 + 0x 2^1 + 1x 2^0 = 16 + 0 + 4 + 0 + 1 = 21
​
*/
​
//* Decimal a binario
"https://www.calcuvio.com/suma-binaria";
/*
Ejemplo 1:
7 a binario que es "111":
                              resto es igual a decir "módulo" y en JS se usa % para obtener ello
7 / 2  resto     1                          
3 / 2  resto   1                          
1 / 2  resto 1
​
7 / 2   2 x 3.5  el resto es 0  <- así NO
​
7 / 2   2 x 3    el resto es       1
3 / 2   2 x 1    el resto es    1
1 / 2   2 x 0    el resto es 1
​
​
​
12 / 2    2 x 6  ->       0
6  / 2    2 x 3  ->     0
3  / 2    2 x 1  ->   1
1  / 2    2 x 0  -> 1
​
​
** Se lee del último al primero 
```
Ejemplo 2 convertimos 21 en binario:
? Recordar que se trabaja con enteros
21/2 = cociente 10.5 -> cociente entero 10  (resto 1)
10/2 =                  cociente entero 5   (resto 0)
5/2 = cociente  2.5  -> cociente entero 2   (resto 1)
2/2 =                   cociente entero 1   (resto 0)     (2x0.5 = 1)
1/2 = cociente  0.5  -> cociente entero 0   (resto 1)
= "10101"
*/
​
//* Sistemas de numeración -> code ascii "https://elcodigoascii.com.ar/"
/*
Es un estandar que asocia por cada 8 bits (1 byte), representa un caracter, a su vez tiene 
​
 0 0 0 0  0 0 0 0
 0 0 0 0  0 0 0 1
 2^8 = 256
​
asociado un valor decimal. A eso se llama 1 Byte.
Lo bueno de usar 8 bits es que podemos obtener 256 combinaciones y con ello determinar 
256 símbolos, es decir que con 8 bits, es posible crear una combinación de 2^8 = 256 posibles valores distintos.
Cada caracter (símbolo) tiene un decimal asignado, un hexadecimal, un nombre y un atajo tipo Alt+C. Y el decimal para enumerar 
Necesidad de en sistema binario (pc entiende) combinaciones para tener una gran cantidad de símbolos.
​
*UniCode
"https://i.stack.imgur.com/sQuKr.png"
*/
​
//Todo: Practice
​
const bienvenidosAlCode =
  "Hola 45A, Bienvenidos a iniciar cada día a escribir code para que de a poco la semilla del ser programador vaya creciendo";
​
console.log(bienvenidosAlCode)
​
// Condicionales
if("hi" === "hi" && 3 === 3){
  console.log("in condicional")
}
if("hi" === "" || 3 === 3){
  console.log("in condicional OR")
}
​
console.log(1%2) // % es para el resto o módulo
​
//TODO: ver CODE REVIEW <- HomeWork
//? cómo nos paramos? cómo instalamos librería de test? cómo probar los test?
//? cómo hardcodear una function? cuando y cómo usar Quokka o Run Code o Node directo desde la terminal? (a elección)
//? cómo iniciar a codear? e instalar Better Comments (a elección)
​
//* "Node Package Manager" o "Administrador de Paquetes de Node
//* npm i  ||  npm install
//* ver los Scripts en el package.json -> npm test
//? Ver como Code en el archivo Homework.js ¿??
​
//? ver videos de JS - valor referencia - prototype (chain)
​
//!Cuidado al usar ChatGPT u otra IA para que nos ayude
​
​
//! ROJO
//TODO: AMARILLO
//* VERDE BRILLANTE
//? AZUL