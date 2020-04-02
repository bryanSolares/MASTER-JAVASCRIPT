//Notación de funciones.

//declaración de función
//Se puede redefinir
saludar(); //function hosinting -> se puede llamar a la funcion desde cualquier lugar
function saludar() {
    console.log("HOLA MUNDO");
}

//Redificion
function saludar() {
    console.log("Nuevo saludo")
}


//expresiond de funciones
//Si se llama antes de su declaracion generara error -> no hay hoinsting
const saluda = function () {
    console.log("Saludando");
}

saluda();

//Funciones anonimas
(function () {
    console.log("Funcion anonima");
});

[1, 22, 333, 4444, 55555].forEach(function (elementos) {
    console.log(elementos)
})

//Named function expression
var dool = function fool() {
    console.log("dool")
}
dool();
console.log(dool.name);

//IIFE
//Invocacion inmediata de expresion de funciones
(function () {
    var i = 11;
    console.log("IIFE", i)
}())

//Arrow Function -> ES6
//NO se recomiendo cuando el codigo puede ser muy grande
var sum = (a, b) => a + b;
console.log(sum(500, 600))

var restar = (a, b) => {
    a = a + b;
    a = a * 2;
    return a;
};

var resultado = [32,53,81,635,82,935,28].reduce((a,b)=> a*b);
console.log(resultado);

//No se recomienda
//Function constructor
var suma = new Function("x","y","return x+y");
console.log(suma(3,3))