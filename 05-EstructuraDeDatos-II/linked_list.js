//todo: Lista Enlazada a modo objetos y dot notation
//* La LISTA es un OBJETO que tiene HEAD     HEAD === INICIO
//* Requerimos NODE { data  NEXT }           NEXT === REFERENCIA (contiene al próximo Node)
//* Para recorrer la Lista se necesita UN PUNTERO === CURRENT
//*                                    CURRENT va cambiando de REFERENCIA -> de Objeto en Objeto (por eso es var)
const user1 = { name: "mau", id: 3 };
const user2 = { name: "seba", id: 87 };
const user3 = { name: "luciano", id: 31 };

const lista = {
  head: null,
};

const node_1 = {
  data: user1,
  next: null,
};
const node_2 = {
  data: user2,
  next: null,
};
const node_3 = {
  data: user3,
  next: null,
};

lista.head = node_1;
lista.head.next = node_2;
lista.head.next.next = node_3;

var current = lista.head;

console.log(current);
console.log(lista);

while (current.next !== null) {
  current = current.next;
  console.log(current);
}

console.log(current);
current.next = null;
console.log(current);

if (current.next === null) console.log("he llegado al final");

// if (current.next === null) console.log("he llegado al final");
// current = current.next;
// if (current.next === null) console.log("he llegado al final");

// current = current.next;
// if (current.next === null) console.log("he llegado al final");

console.log(current);

console.log(lista);

// ...
/*
{
  1
  2
  3
}
{{{{{{}}}}}}
{
  1 {
    2 {
      3 {

      }
    }
  }
}
CURRENT = Lista.head                  Lista.head
    Lista { head: null }

Lista.head.next = null                 CURRENT.next = null
Lista { head:  { data: { name: 'mau', id: 3 },
           next: null }

Lista.head.next.next = null            CURRENT.next.next = null   
                                       current = CURRENT.next
                                       current.next = null

Lista {
   head: 
         { data: { name: 'mau', id: 3 },
           next: { data: { name: 'seba', id: 87 }, 
                   next: null

Lista {
                   current.next = null
   head: 
         { data: { name: 'mau', id: 3 },
           next: { data: { name: 'seba', id: 87 }, 
                   next: { data: { name: 'luciano', id: 31 }, 
                           next: null 
                          }
                  } 
          } 
      }  

*/
//* Valor !== Referencia (breve repasar)

//todo: Referencia en objetos sean o no anidados <- enfocar en

const list = {
  head: {
    value: 2,
    next: {
      value: 12,
      next: {
        value: 32,
        next: {
          value: 1,
          next: null,
        },
      },
    },
  },
};
// {{{{{}}}}}

var current = list.head;
current = current.next.next;
current.value = "buuuuuu";
console.log(list);

//todo: Lista Enlazada ya en ejemplo de Clase constructora

const objAAA_LISTA = {
  head: null,
  count: 0,
};
const objBBB_NODE = {
  data: " -- pause -- ",
  next: null,
};

class LisnkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }
}
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
// const nodeIns1 = new Node(user1)

LisnkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  console.log(newNode);
  if (this.head === null) {
    this.head = newNode;
    this._length++;
    return "hemos insertado el Node 1";
  }
  var current = this.head;
  while (current.next !== null) {
    current = current.next;
    console.log(current);
  }
  current.next = newNode;
  this._length++;
  return "hemos creado otro Node";
};

LisnkedList.prototype.remove = function () {
  if (this._length === 0) return "la ya esta vacía";
  var current = this.head;
  while (current.next.next) {
    // current.next.next === null
    current = current.next;
  }
  const nodeDelete = current.next;
  current.next = null;
  this._length--;
  return nodeDelete;
};

const listTest = new LisnkedList();
// listTest.head = nodeIns1

console.log(listTest.add(user1));
console.log(listTest.add(user2));
console.log(listTest.remove());

console.log(listTest);



/*
* LINKEDLIST -> la desarrollamos en un {}
 {}->{}->{}

 LINKEDLIST -> {head{node1{node2{node3{{{{{{}}}}}}}}}}  objetos anidados <- multidimensional

 [[[[[[]]]]]] array multidimensionales
*/

//! recordar mostrar gráfico de ejemplo de todos los modelos de Listas enlazadas
/*
* Lista Enlazada (Singly Linked List):

Nodo1 -> Nodo2 -> Nodo3 -> null

* Lista Enlazada Doble (Doubly Linked List):

null <- Nodo1 <-> Nodo2 <-> Nodo3 -> null

* Lista Enlazada Circular (Circular Linked List):

Nodo1 -> Nodo2 -> Nodo3 -+
 ^                    |
 +--------------------+

* Lista Enlazada Circular Doble (Doubly Circular Linked List):

null <- Nodo1 <-> Nodo2 <-> Nodo3 -+
 ^                               |
 +-------------------------------+
*/
