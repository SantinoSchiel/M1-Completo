//TODO: TREE - Árboles cual objetos anidados (repaso de Recursión)
//* BT
//* BST

//todo: partes de un Tree
/*
* __ROOT____Raíz__ - El nodo superior del árbol.
* __Padre__ - Nodo con hijos.
* __Hijo__ - Nodo descendiente de otro nodo.
* __Hermanos__ - Nodos que comparten el mismo padre.
* __Hojas__ - Nodos sin hijos.
* __Nivel__ - El nivel de un nodo está definido por el número de conexiones entre el nodo y la raíz (altura)
* __Camino__ - Secuencia de nodos por los que tenemos que pasar para llegar de un nodo a otro.
Ejemplo: https://miro.medium.com/max/1400/1*iI-t8948iVIM_5KKggaZ3g.png (DOM - HTML)
(Gráfico Tree) https://www.pngfind.com/pngs/m/346-3463218_adems-de-cada-elemento-que-conforma-un-rbol.png
(BST) https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1024px-Binary_search_tree.svg.png

*/

const list = {
  head: {
    val: 2,
    next: {
      val: 32,
      next: {
        val: 54,
        next: null,
      },
    },
  },
};
data = [8, 3, 10, 6, 1, 14]; // {nombre: "mau", dni: 27987654}

// if value is minor || equal to Left  &&  is max. to Right
const treeObjBinarySearchTree = {
  root: {
    val: 8,
    left: {
      val: 3,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    },
    right: {
      val: 10,
      left: null,
      right: {
        val: 14,
        left: null,
        right: null,
      },
    },
  },
};
// {{{{{}{}}{{}{}}}{{}{}}}{{{}{}}{{}{}}}}
/*
{
  val: 3,
  left: null,
  right: null,
},
*/

// Armar TREE tipo BST con root
// function Tree(val) {
//   this.root = val;
//   this.left = null;
//   this.right = null;
// }

// function NodeTree(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// Es el molde del Node como así del árbol (o sub-árbol)
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
data = [8, 3, 10, 6, 1, 14];
const testTree = new BST(8);

BST.prototype.insert = function (value) {
  if (value > this.value) {
    // >  -> right y x defecto <= -> left
    if (!this.right) {
      // ({}) -> true   (null)  -> false
      // const newNode = new BST(value)   y luego -> this.right = newNode
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (!this.left) {
      // ({}) -> true   (null)  -> false
      // const newNode = new BST(value)   y luego -> this.right = newNode
      this.left = new BST(value);
    } else {
      //todo: aplica recursión
      this.left.insert(value);
    }
  }
};

BST.prototype.size = function () {
  //if(this.left === null && this.right === null){
  if (!this.left && !this.right) {  // !null -> true
    return 1;
  }
  if(!this.left) return 1 + this.right.size()
  if(!this.right) return 1 + this.left.size()
  if(this.left && this.right) return 1 + this.left.size() + this.right.size()
};

testTree.insert(10)
testTree.insert(6)
console.log(testTree.size())
console.log(testTree);

// const node1 = new BST(3)
// testTree.left = node1

// const node2 = new BST(10)
// testTree.right = node2

// const node3 = new BST(6)
// testTree.left.right = node3

// const node4 = new BST(1)
// testTree.left.left  = node4

// console.log(testTree)

// insert - size
// Gráfico -> Pseudo Code -> Code
// Q&A

// Auto Balanceados
// Heap Tree -> Max Heap and Min Heap (montículos)

//* Recorridos <- para método depthFirstForEach

//TODO: depth-first-search (DFS)
//* se divide en 3 maneras: Pre-order, In-order, Post-order
/*
input -> [23, 8, 32, 3, 12, 31]  <- BST ->
Ejemplo:     (23)          ----> nivel 0
            /     \
         (8)      (32)      ----> nivel 1
        /  \      /  \
      (3)  (12) (31)       ----> nivel 2
                
* Pre-order -> VLR  ->  value left right
  Pre-order -> [ "23", 8, 3, 12, 32, 31 ]
                *ROOT
* In-order -> LVR  ->  left value right
  In-order -> [ 3, 8, 12, "23", 31, 32]
                          *ROOT
* Post-order -> LRV  ->  left right value
  Post-order -> [ 3, 12, 8, 31, 32, "23" ]
                                    *ROOT
*/

//TODO: breadthFirstSearch
//* es un recorrido lineal, de arriba hacia abajo (por los niveles) y de izquierda a derecha como
//* cuando leemos un libro
// Para breadthFirstForEach explicar la cb y un poco el como va a funcionar
// Y el uso adicional de una Queue

//* Ejemplo para breadthFirstSearch
//! breadthFirstSearch es muy complejo ya que implementamos:

//? recursión, queue, cb, y objetos doblemente anidados usando clases constructoras
/*
array_result [ ]
root     10  
      L3    R12 
          L11  R14 
 init ->        {tree 10}.breadthFirstSearch   
                                    ->  array_result [10]
array_queue [{subTree L3}] 
array_queue [{subTree L3},{subTree R12}]  

{subTree L3}.breadthFirstSearch     ->  array_result [10, 3]
array_queue  --- null ---   ->  [ --- ,{subTree R12}]

{subTree R12}.breadthFirstSearch     ->  array_result [10, 3, 12]
array_queue [ --- ]  -> array_queue [{subTree L11},{subTree R14}] 

{subTree L11}.breadthFirstSearch     ->  array_result [10, 3, 12, 11]
array_queue [ --- ,{subTree R14}] 

{subTree R14}.breadthFirstSearch     ->  array_result [10, 3, 12, 11, 14]
array_queue [ --- ] 

Al estar vacía la Queue se termina la recursión
*/

//! recordar la complejidad de poder acceder del valor de un nodo hijo a otro nodo hermano lejano
// donde con GRAFOS eso es posible