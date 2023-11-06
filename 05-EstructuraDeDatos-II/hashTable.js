//TODO:  HASH-TABLE

function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}
HashTable.prototype.hash = function (key) {
  // mau ->>>>> 653421
};
HashTable.prototype.set = function (key, val1) {
  // key this.hash ->>>>> 6534
};
HashTable.prototype.get = function (key) {};
HashTable.prototype.hasKey = function (key) {};
//* Ejemplo:
/*
const table = new HashTable();
table.set("mau", 233);
table.set("uam", 342);
console.log(table);
*-> HashTable { buckets: [ , , , { mau: 233, uam: 342 } ], numBuckets: 35 }
*/
console.log("m".charCodeAt())
console.log("a".charCodeAt())
console.log("@".charCodeAt())
// * ASCii

//* uso de .charCodeAt()
/*
"a".charCodeAt()
97
"m".charCodeAt()
109
*/

//* Definición
/*
Esta estructura guarda los datos de una manera asociativa, o sea con key-value. 
Los datos son guardados en un arreglo, pero los índices tienen que ver con (obj) lo qué está guardado adentro. 

?Para construir una hash table vamos a necesitar:
Acá vamos a guardar los datos y buscarlos por el índice. Puede ser un arreglo o un árbol (objetos anidados).
*Función hasheadora: Vamos a necesitar una función que transforme lo que elegimos de key a un hash 
que será nuestro índice.

Política de resolución de colisiones: Es la política que definiremos para decidir qué pasa 
cuando dos keys distintas generar dos hash iguales (las funciones no son perfectas !).

- Flow de la Hash Table
  - Tenemos un input que deseamos guardar
  - Pasa por una funcion hash que genera un código índice de la posicion donde quedara guardado ese input 
	- Se almacena lo recibido según el índice creado

- COLISION

Debemos considerar que como las funciones hash no son perfectas dos inputs diferentes pueden generar un 
mismo índice donde serán almacenados y eso generará una colisión

- Resolucion de colisiones (se debe tener en cuenta el resolver los datos que van a colisionar)
    
En cada espacio en memoria creamos o un arreglo o una lista enlazada y cada input que se almacena en 
ese mismo espacio se va enlazando (recordemos cual objetos anidados)

* Ejemplo:  HashTable { buckets: [ , , , { mau: 233, uam: 342 } ], numBuckets: 35 }
*/