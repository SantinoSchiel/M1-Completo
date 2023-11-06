'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
    según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
    hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

const testBST = new BinarySearchTree(8);
console.log(testBST)

BinarySearchTree.prototype.size = function(){
   if(!this.left && !this.right){return 1;}
   if(!this.left){return 1 + this.right.size();}
   if(!this.right){return 1 + this.left.size();}
   if(this.left && this.right){return 1 + this.left.size() + this.right.size();} 
}

BinarySearchTree.prototype.insert = function(value){
   if(this.value < value){
      if(!this.right){
         this.right = new BinarySearchTree(value);
      } else {this.right.insert(value);}
   } else {
     if(!this.left){
     this.left = new BinarySearchTree(value);
   } else {this.left.insert(value);}
}
return 'Valor agregado!'
}

BinarySearchTree.prototype.contains = function(value){
   if(value === this.value){
      return true;
   }
   // if(!this.right && !this.left){
   //    return false;
   // }
   if(value > this.value){
      if(!this.right){
      return false
      } else return this.right.contains(value);
   } else {
      if(!this.left){
         return false
         } else return this.left.contains(value);
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, tipoOrden){
   if(tipoOrden === 'pre-order'){
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, tipoOrden);
      if(this.right) this.right.depthFirstForEach(cb, tipoOrden);
   } else if(tipoOrden === 'post-order'){
      if(this.left) this.left.depthFirstForEach(cb, tipoOrden);
      if(this.right) this.right.depthFirstForEach(cb, tipoOrden);
      cb(this.value);
   } else {
      if(this.left) this.left.depthFirstForEach(cb, tipoOrden);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, tipoOrden);
   }
}

BinarySearchTree.prototype.depthFirstForEachSimple = function(res = []){
   if(this.left) this.left.depthFirstForEachSimple(res);
   res.push(this.value);
   if(this.right) this.right.depthFirstForEachSimple(res);
   return res;
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
   if(this.left) queue.push(this.left);
   if(this.right) queue.push(this.right);
   cb(this.value);
   if(queue.length > 0){
      let subTree = queue.shift();
      subTree.breadthFirstForEach(cb, queue)
   }
}

BinarySearchTree.prototype.breadthFirstForEach1 = function(res = [], queue = []){
   if(this.left) queue.push(this.left);
   if(this.right) queue.push(this.right);
   res.push(this.value);
   if(queue.length > 0){
      let subTree = queue.shift();
      subTree.breadthFirstForEach(res, queue)
   }
}

// BinarySearchTree {
//    value: 8,
//    left: BinarySearchTree {
//      value: 5,
//      left: BinarySearchTree { value: 2, left: null, right: null },
//      right: BinarySearchTree { value: 6, left: null, right: null }
//    },
//    right: BinarySearchTree {
//      value: 18,
//      left: BinarySearchTree { value: 9, left: null, right: null },
//      right: BinarySearchTree { value: 19, left: null, right: null }
//    }
//  }

console.log(testBST.insert(5))
console.log(testBST.insert(2))
console.log(testBST.insert(18))
console.log(testBST.insert(9))
console.log(testBST.insert(6))
console.log(testBST.insert(19))
console.log(testBST.contains(6))
console.log(testBST.contains(2))
console.log(testBST.contains(8))
console.log(testBST.contains(5))
console.log(testBST.contains(18))
console.log(testBST.contains(19))
console.log(testBST.contains(9))
console.log(testBST.contains())
console.log(testBST.depthFirstForEachSimple())
//console.log(testBST.depthFirstForEach())
//console.log(testBST.breadthFirstForEach1())



console.log(testBST)

console.log(testBST.size())

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
