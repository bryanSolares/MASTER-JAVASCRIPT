"use strict"


//no se pueden colocar varios cuando se instancia un array.

var arr = new Array(2);

var nombre1 = ["Bryan", "Josue", "Solares", undefined, , "Perez", 25, true];
nombre1.push("Génesis");
var nombre2 = new Array("Bryan", "Josue", "Solares", undefined, "Perez", 25, true);

console.log(nombre1);
console.log(nombre2);
console.log(nombre1.indexOf("Solares"));

console.log(nombre1[2]);
console.log(nombre2[2])

console.log(nombre1.length);
console.log(nombre2.length)

document.write("<ul>");
nombre1.forEach((elemento, indice, arr) => {
    document.write("<li>" + elemento + " indice: " + indice + "</li>");
    console.log(arr);
});
document.write("</ul>");

nombre1.splice(0,4);
console.log("nuevo resultado: ");
console.log(nombre1);


console.log("for in");
for(let nom in nombre1){
    console.log(nombre1[nom]);
}

console.log("for of");
for(let nom of nombre2){
    console.log(nom);
}

/**************************************************************************/
//MULTIDIMENSIONALES
var peliculas = [["accion", "animacion", "ciencia ficcion"], ["Terminator", "Frozen", "Avatar"]];
//agregar elementos
peliculas[0].push("terror");
peliculas[1].push("El despertar");
console.log(peliculas);

//eliminar ultimo elemento
peliculas[0].pop();
peliculas[1].pop();

peliculas.forEach(elemento => {
    console.log(elemento); 
    elemento.forEach(ele => {
        console.log(ele)
    });
});

//Conversión de array a string
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//Conversión de string a array
var peliculas_nuevas = peliculas_string.split(",");
//Orden de mayor a menor
peliculas_nuevas.sort();
console.log(peliculas_nuevas);
//Orden de menor a mayor
peliculas_nuevas.reverse();
console.log(peliculas_nuevas);


//busquedas elemento en array
console.log(peliculas_nuevas.find(elemento => elemento == "Avatar"));

//busqueda indice en array
console.log(peliculas_nuevas.findIndex(elemento => elemento == "Terminator"));
