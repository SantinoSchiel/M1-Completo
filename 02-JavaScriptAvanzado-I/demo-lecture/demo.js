// "use strict"
//* Definir funciones y variables -> Ejecutar (contexto de ejecución)

//* Contextos diferentes
var x = 7;

function fufu() {
  var y = 43;
  var x = 11;
  console.log(x);
  console.log(y);
}
fufu();
console.log(x);
// console.log(y); //! y is not defined

//* Bloques diferentes

var a = 2;
if (true) {
  var b = 9;
  var a = 8; // acá pisa cual a = "sarasa"
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);

function second() {
  var fufu = "casa";
  function third() {
    function fourth() {
      function fifth() {
        console.log(fufu);
      }
      fifth();
    }
    fourth();
  }
  third();
}

function first() {}

first();
second();

//todo-------------------------

//* CONTEXTO y REGISTRO (entorno LEXICO)
//* Inicialmente el GLOBAL
// y c/ function es un CONTEXTO en sí

var marca = "adida";

function saluda() {
  var otraCosa = 87;
  console.log(marca);
  function sum(a, b) {
    console.log(otraCosa);
    function otra() {
      console.log(marca);
    }
    otra();
    return otraCosa;
  }
  sum();
  return marca;
}
// console.log(otraCosa) //!otraCosa is not defined

// sum()
saluda();
// console.log(sum(7, 6)) //! otraCosa is not defined

/*
https://www.jsv9000.app/

var inGlobal = 101
function saluda(){
  console.log("hola")
}

function saluda3(){
  console.log("queeeee")
   var fufu = "casa";
  function third() {
    function fourth() {
      function fifth() {
        console.log(fufu);
        inGlobal ="sarasa"
      }
      fifth();
    }
    fourth();
  }
  third();
}


saluda()
setTimeout(function a() {console.log(inGlobal)}, 1000);
setTimeout(function saluda2(){
  console.log("bye")
}, 4000);

saluda3()
*/

//todo Contextos anidados
function saca() {
  var dede = 23
  function sucu() {
    var dede = 21 // dede ahora vale 23
    function siqui() {}
    siqui();
  }
  sucu();
}
saca();

//todo Contextos Hermanos
var dede = 233333
function a1() {
  var dede = 2;
}
function a2() {
  var dede = 23;
}
function a3() {}
a2();
a3();
a1();

//* SCOPE <- ALCANCE
