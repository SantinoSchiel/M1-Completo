"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, 
su factorial (representado como n!) es el producto de n por todos los números naturales 
menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, 
como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia 
será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

-> pos 7    0  1  2  3  4  5  6  7
Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar 
definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// Ejemplo: 5! = 5 * 4 * 3 * 2 * 1   - !0 -> 1
// 5! = 5 * 4 * 3 * 2 * 1  =>     5 * 4!    --   4! =  4 * 3!
//  3! === 3 * 2 * 1                             4! =  4 *  3 * 2 * 1
function nFactorial(n) {
  // -> 6
  // caso base, corte
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  return n * nFactorial(n - 1);
}
console.log(nFactorial(3)); //.toBe(6);
console.log(nFactorial(5)); //.toBe(120);
console.log(nFactorial(15)); //.toBe(1307674368000);
/*
nFactorial(3)
     return    3  *   nFactorial(2)
                           2   *  nFactorial(1)
                                      1
                          2
                6
   return   3  *    (2 * (1))

*/
// -> pos 7    0  1  2  3
// Secuencia:  0, 1, x, x
//                      pos3 =  pos1    +     pos2
//                                1           pos2 = pos1 + pos0
//                                                     1  +  0
//                                              1
//                                 2
//  0, 1, 1, 2, 3, 5, 8, 13
function nFibonacci(n) {
  // caso base, corte
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
}
console.log(nFibonacci(4)); // 2
// nFibonacci(7); //-> 13
/*
                                  nF(3)
          return    ->     nF(1)    +                   nF(2)
                              1     +    return -> nF(0)   +   nF(1)
                                                      0    +    1
                                                   1
                                2                    

*/

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que 
ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.
  
  Extras
  - changeFirstElement: cambia el elemento que se encuentra al inicio de la queue
  - changeLastElement: cambia el elemento que se encuentra al final de la queue

  * practicar pasando el modo Function constructora a Clase Constructora (Class)
  
Pueden utilizar class o función constructora.
*/

// CLASES CONSTRUCTORAS -> OBJ de props. usando el THIS <- Queue { data: [] }
// const Queue = {data:[]}
function Queue() {
  //* THIS
  this.data = [];
  // this.data
  // this.enqueue
  // this.size
}

Queue.prototype.enqueue = function (value) {
  let result = this.data.push(value);
  return result;
};
Queue.prototype.dequeue = function () {
  // this.data
  // this.enqueue
  // this.size
  if (this.size() === 0) return undefined; // this.data.length;
  let result = this.data.shift();
  return result;
};
Queue.prototype.size = function () {
  return this.data.length;
};
Queue.prototype.changeFirstElement = function (val) {
  this.data[0] = val;
  return this.data;
};
Queue.prototype.changeLastElement = function (val) {
  let pos = this.size() - 1
  this.data[pos] = val;
  return this.data;
};
//   0 1 2
//  [1,2,3] -> 3
// * INSTANCIAMOS la Clase para obtener el molde de la CLASE OBJETO CREADA
const testMyQueue = new Queue();

testMyQueue.enqueue(8);
testMyQueue.enqueue(3);
testMyQueue.enqueue(1);
// testMyQueue.dequeue();
console.log(testMyQueue.size());

console.log(testMyQueue);
console.log(testMyQueue.changeFirstElement(32))
console.log(testMyQueue.changeLastElement(555))
/*⚠️ No modificar nada debajo de esta línea ⚠️*/

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};

/*
                                  nF(60)
          return    ->     nF(58)    +                   nF(59)
                        

*/
