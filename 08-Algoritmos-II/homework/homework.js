'use strict'
console.log('hola')
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivot = Math.floor(array.length / 2);
  //console.log(pivot)
  const puntoMedio = array[pivot];
  //console.log(puntoMedio)
  let leftArray = [];
  let rightArray = [];
  // array
  for (let i = 0; i < array.length; i++) {
    if (i !== pivot) {
      if (array[i] < puntoMedio) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }
  }

  // console.log(leftArray);
  // console.log(rightArray);

  return quickSort(leftArray).concat(puntoMedio, quickSort(rightArray));
}

console.log(quickSort([1, 4, 3, 8, 2]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;
  let lineDiv = Math.floor(array.length / 2)

  let leftArray = array.slice(0, lineDiv);
  let rightArray = array.slice(lineDiv);

  console.log(leftArray);
  console.log(rightArray);

  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  let arrayResult = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      arrayResult.push(leftArray.shift());
    } else {
      arrayResult.push(rightArray.shift());
    }
  }

  arrayResult = arrayResult.concat(leftArray, rightArray);

  return arrayResult;
}

console.log(mergeSort([8, 4, 1, 2]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};