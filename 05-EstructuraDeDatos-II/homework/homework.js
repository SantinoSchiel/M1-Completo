'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

const linkedList = new LinkedList();


function Node(value) {
  this.data = value;
  this.next = null;
}
var node = new Node('test');

console.log(node.data)
console.log(node.next)


LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  console.log(newNode);
  if (this.head === null) { //(!this.head)
    this.head = newNode;
    return this.head;
  }
  var current = this.head;
  while (current.next !== null) {
    current = current.next;
    console.log(current);
  }
  current.next = newNode;
  this._length++;
  return this.head;
};

LinkedList.prototype.remove = function () {
  if(!this.head) {
    return null;
  }
  if(!this.head.next){
    const valueToReturn = this.head.data;
    this.head = null;
    return valueToReturn
  }
  
  var current = this.head;
  
  while (current.next.next) {
    console.log(current)
    current = current.next;
  }

  const valueToReturn = current.next.data;

  current.next = null;

  this._length--;

  return valueToReturn;
};

LinkedList.prototype.search = function(nodeSearch) {
if(!this.head){
  return "La lista esta vacía";
}

var current = this.head;

if(typeof nodeSearch === 'function'){
  while(current){
    if(nodeSearch(current.data)){
      return current.data;
    }
    current = current.next;
  }
}

while (current) {
  console.log(current);
  if(current.data === nodeSearch){
    return current.data;
  }
  current = current.next;
}
return null;
}

console.log(linkedList.hasOwnProperty('head'))
console.log(linkedList.head)
console.log(linkedList.remove())

let funcion = function() {return 'hola'}

console.log(linkedList.add('first'))
console.log(linkedList.add('hi'))
console.log(linkedList.add(funcion))
console.log(linkedList.add('chau'))
console.log(linkedList.search('chau'))
console.log(linkedList.remove())
console.log(linkedList.remove())


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35
}

HashTable.prototype.hash = function(inputAlfabetico){
  // const arrayDeCodigoNumerico = [];
  // const wordSplited = inputAlfabetico.split('');
  // for(let i = 0; i < wordSplited.length; i++){
  //   var codNum = wordSplited[i].charCodeAt()
  //   //console.log(codNum)
  //   arrayDeCodigoNumerico.push(codNum)
  // }
  // var suma = 0;
  // for(let i = 0; i < arrayDeCodigoNumerico.length; i++){
  //   suma = suma + arrayDeCodigoNumerico[i]
  // }
  // let res = suma % this.numBuckets;
  // return res;


  //! Otra forma
  var result = 0;
  for(let i = 0; i < inputAlfabetico.length; i++){
    result += inputAlfabetico[i].charCodeAt();
  }
  return result % this.numBuckets;
}

HashTable.prototype.set = function(clave, valor) {
  const obj = {};
  const claveHash = this.hash(clave)
  if(this.buckets[claveHash] === undefined){
    obj.key = claveHash;
    obj.value = valor;
    this.buckets[claveHash] = obj;
  }
  //console.log(claveHash)
  console.log(this)
  return 'Valor seteado!';
}

HashTable.prototype.get = function(clave){
  for(let i = 0; i < this.buckets.length; i++){
    if(this.buckets[i].key === clave){
      return this.buckets[i].value;
    }
  }
}

HashTable.prototype.hasKey = function(claveDeIngreso){

  console.log(this.buckets[claveDeIngreso]);
  console.log(this.buckets.length)
  for(let i = 0; i < this.buckets.length; i++){
    console.log(!this.buckets[i])
    if(!this.buckets[i]){
      return true;
    }
  }
}

const newHash = new HashTable();
console.log(newHash.hash('hola'));
console.log(newHash.set('Vieji', 2));
console.log(newHash.set('Viejita', 3));
console.log(newHash.set('Tumbertibl', 4));
console.log(newHash.set('hola', 1));
console.log(newHash.get(16));
console.log(newHash.get(13));
console.log(newHash.hasKey());

console.log(newHash);


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};