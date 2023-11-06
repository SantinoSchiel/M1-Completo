'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let factores = [1];
  let divisor = 2;


  while (num > 1) {
    if (num % divisor === 0) {
      console.log(num)
      factores.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factores;
}

console.log(factorear(32))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;

  while (swap) {

    swap = false;

    for (let i = 0; i < array.length - 1; i++) {

      if (array[i] > array[i + 1]) {

        let aux = array[i];

        array[i] = array[i + 1];

        array[i + 1] = aux;

        swap = true;
      }
    }
  }
  return array;
}
console.log(bubbleSort([5, 1, 4, 2, 8]))


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if(array[j] > array[i]){
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;
        i--
      }
    }
  }
  return array;
}
console.log(insertionSort([5, 1, 4, 2, 8]))
 console.log(insertionSort([10, 10, 16, 12]))
 console.log(insertionSort([10, -2, -7, 4]))
//      j             
//            i     => aux = 2 , array[i] == 5 ,  array[j] == 2  => if(array[j] > aux){ array[i-1] = array[j] }
//  [1, 4, 2, 5, 8]


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i] > array[j]){
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}
console.log(selectionSort([5, 1, 4, 2, 8]))
//      j             
//   i    
//  [1, 4, 2, 5, 8]


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
