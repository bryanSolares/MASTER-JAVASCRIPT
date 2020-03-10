"use strict"
//debugger;
const factorial = function fac(numero) {
    return numero < 2 ? 1 : numero * fac(numero - 1)
}

//console.log(factorial(3));

//debugger;
function map(funcion, array) {
    var resultado = [],
        i;

    for (i = 0; i != array.lenght; i++) {
        resultado[i] = funcion(array[i]);
    }
    return resultado;
}

var multiplicar = function (x) {
    return x * x * x;
}

//console.log(map(multiplicar, [0, 1, 2, 5, 10]));



/*ARROW FUNCTIONS -> funciones compactas*/
let f = () => {
    return "Arrow function"
};
let h = () => "Retorno implito";
//console.log(f());
//console.log(h());

/*CONTEXTO THIS*/
let objeto = {
    nombre: "Bryan",
    estado: function () {
        //setTimeout(function() {
        setTimeout(() => {
            //console.log(this.nombre, "está programando");
        });
    }
};

objeto.estado();

/*ASIGNACION DE VARIBLES A ARROW FUNCTIONS*/
let i = (nombre, apellido) => `Hola ${nombre} ${apellido}`;
let j = nombre => `Hola ${nombre}`;
console.log(i("Bryan","Solares"));
console.log(j("Josue"));