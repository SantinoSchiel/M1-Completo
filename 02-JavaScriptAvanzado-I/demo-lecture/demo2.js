"use strict";
a2();
// // function a2(){}
console.log(a2());
console.log(dede);
function a1() {
  var dede = 2;
  console.log(dede);
  return "weweeeeeeee";
}
function a2() {
  var dede = 23;
  console.log(dede);
  return "weweeeeeeee 222222222";
}
function a3() {}

a3();
a1();

var dede = "queeee";

//* HOISTING    - "eleva las var y las function"

//TODO: THIS <-> OBJETO {} y los Métodos <- function dentro del objeto
// var fullName = "Sara O'Connor";

var objTest = {
  data: {
    nombre: "Fufu",
    edad: 23,
  },
  fullName: "Rocky",
  saludarNombre: function () {
    return this.fullName; //* hacemos que apuntemos a buscar fullName en el objeto donde se encuentra este método
  },
};

const saveEdad = objTest.data.edad;
console.log(saveEdad);

console.log(objTest.saludarNombre());

const saveOnlyFunctionSaludarNombre = objTest.saludarNombre;
console.log(saveOnlyFunctionSaludarNombre);

function sum(a, b) {
  console.log(a + b);
  return "siiiiii";
}
objTest.marca = "BMW";
objTest.suma = sum;
console.log(objTest);

console.log(objTest.suma(2, 3));

var a = 9;

var objTest2 = {
  a: 2,
  susu: "wewe",
  data: {
    nombre: "fefe",
  },
  fullName: "Sonic",
  saludar: function () {
    var result = this.a + 5; // trabajá con la prop que está dentro del objeto donde vos estas function que ahora te dicen método
    this.data;
    return this.fullName; //* hacemos que apuntemos a buscar fullName en el objeto donde se encuentra este método
  },
};

//* Las FUNCTION son OBJETOS -> son tipos de datos especiales
function bye() {
  console.log("bye bye");
}

function fefe(cb) {
  cb();
}
fefe(bye);

bye.data = []
bye.pushData = function(num){
    this.data.push(num)
}
bye.pushData(8)
bye.pushData(5)

console.log(bye)


//TODO: para JS todo es OBJETO pero en el fondo
//* 3 divisiones
// 01 PRIMITIVOS (num, string, boolean, null, undefined)
// 02 OBJETOS -> {} objeto, [] array 
// 03 Tipo de dato Especial f()


var funcNew = function(){}

function name(params) {
    
}

if(true){   }


// {}  []

var valueNum = "bici"

var copyNum = valueNum
console.log(copyNum)
copyNum = "no mas bici"
console.log(copyNum)
console.log(valueNum)

//* REFERENCIA si modificamos las copias se modifica el original
const objNew = {
    a:"bici",
    b:3
}
const objClone = {...objNew} // DR332Q
const copyObj = objNew
console.log(copyObj)
copyObj.a= "no mas bici"
copyObj.kuku = "www"
console.log(objNew)

console.log(objClone) // DR332Q
// SpreadOperator
// {...otroObj  }
// [...otroArray]

const originArray =[1,2,3]
const copyArr = originArray
copyArr.push(22222)
console.log(originArray)
console.log(copyArr)