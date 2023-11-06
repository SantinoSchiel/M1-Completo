x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 5 (error, es 8)
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 5 (error, es 8)
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 10 (error, es 9)
};
c(8, 9, 10);
console.log(b); //10
console.log(x); // 1



//console.log(bar); // Undefined
//console.log(baz); // Not Defined
foo();
function foo() {
   console.log('Hola!'); // Hola!
}
var bar = 1;
baz = 2;



var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco



var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony



var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Reverse Flash (error! Es Franco) let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. 
                                                    //a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.





console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // "9px"
console.log("$" + 4 + 5) // "$9"
console.log("4" - 2) // 2
console.log("4px" - 2) // Error
console.log(7 / 0) // No se puede dividir por 0
console.log({}[0]) // :D
console.log(parseInt("09")) // 09
console.log(5 && 2) // true
console.log(2 && 5) // true
console.log(5 || 0) // true
console.log(0 || 5) // true
console.log([3]+[3]-[10]) // ["33"] error
console.log(3>2>1); // true / 3>2 == true => true > 1 == false
console.log([] == ![]) // false






function test() {
    console.log(a); // Undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();





 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // 'Meow Mix'





var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa' pq esa function retorna THIS.fullname, por lo tanto usa el fullname dentro de la propiedad prop.

var test = obj.prop.getFullname;

console.log(test()); // 'Aurelio De Rosa'






function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing(); // 1 3 4 2 (es 1 4 3 2, en un momento lo pense asi, pero pense que al darle 0 como Timeout, iba a poner el 3 antes)