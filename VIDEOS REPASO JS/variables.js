//No se pueden usar palabras reservadas.
//global object
//global scope
//IIFE Immidiate invoed function expression
//Usando el use strict se puede evitar muchos inconvenientes


var foo = 1;
var foo2;
console.log(foo);
console.log(foo + foo)
console.log(foo2);

var a, b, c = 1;
var a = 1,
    b = 2,
    c = 3;

var a = 1,
    b = a + 2,
    c = a + b + 3;

var a = b = c = 3;

console.log(a, b, c);
//Patrones de varibles
var camelCase = 1;
var PascalCase = 2;
var snake_case = 3;


//ES6
//let y const
//const tiene que tener una valor directamente
//let y const son block-scope
//var son function-scope

{
    let a = 1;
    const b = 2;
}

function block_scope() {
    if (true) {
        let x = 1;
        const y = 2;
    }
    //console.log(x,y); // -> error
}

block_scope();

function function_scope() {
    if (true) {
        var x = 1;
        var y = 2;
    }
    console.log(x, y); // -> not error
}

function_scope();

//TIPOS DE DATOS
//datos primitivos

var numerico = 1;
var booleano = true || false;
var string = "Hola" || 'hola';
var nulo = null;
var indefinido = undefined;

console.log(numerico, booleano, string, nulo, indefinido)
console.log(typeof (numerico))
console.log(typeof (booleano))
console.log(typeof (string))
console.log(typeof (nulo))
console.log(typeof (indefinido))

//if (typeof nulo === null){ -> no valida correctamente
if (nulo === null) { //--> valida correctamente
    console.log("Es nulo")
}