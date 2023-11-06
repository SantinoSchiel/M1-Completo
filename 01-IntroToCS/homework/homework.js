'use strict';

function BinarioADecimal(num) {
   // let array = num.split("");

   // let suma = 0

   //    for(let i = array.length - 1; i >= 0; i--){

   //       suma += (array[i] * Math.pow(2, array.length - 1 - i));
   //       //console.log(suma)
         
   //    }

   // return suma;

   var numResult = 0
   let arrayBinary = num.split('').reverse()

   for(let i = 0; i < arrayBinary.length; i++){
      numResult = numResult + (arrayBinary[i] * (2**i))
   }
   return numResult
}

function DecimalABinario(num) {
   let res = '';
   while(num !== 0){
      console.log(num)
      res = (num % 2) + res;
      console.log(res)
      num = Math.floor(num / 2)
   }
   return res;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

console.log(BinarioADecimal('10'))
console.log(DecimalABinario(7))