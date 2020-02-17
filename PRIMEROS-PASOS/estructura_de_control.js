"use strict"

//CONDICIONAL IF
//< > == != <= >=
// && || !
//  isNaN = evalua si no es un número


//console.log(Number.NaN(1))
console.log(isNaN("hola"))


var n1 = 40;
var n2 = 50;

if (n1 < n2 && ("Hola Mundo " == "Hola") || (204 != 204)) {
    console.log("Menor");
} else if (n1 > n2) {
    console.log("Mayor");
} else {
    console.log("Igual");
}

//CONDICIONAL SWITCH
var edad = 100;

switch (edad) {
    case edad < 9:
        console.log("");
        break;

    case (34 > edad) && (45 == edad):
        console.log("");
        break;

    default:
        console.log("default");
        break;

}

/***********************************/
//USOS DE BUCLES
//BUCLE FOR

for(var i = 0; i < 100 || edad == 0; i++, edad--){
    console.log(i + " " + edad);
    document.write("<h1>"+ i + " años de edad. " + "</h1>")
    //debugger;
}

//BUCLE WHILE
edad = 0;
while(edad < 100){
    console.log(edad + " edad");
    edad++;

    if(edad == 50){
        break;
    }

}

//BUCLE DO WHILE

edad = 0;
do{
    console.log("Entre por lo menos una vez");
    edad++;
}while(edad != 1 || isNaN(edad));