"use strict"

var fecha = new Date();

var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDay();
var hour = fecha.getHours();

var textoHora = `
    El año es: ${year}
    El mes es: ${month+1}
    El día es: ${day}
    La hora es: ${hour} 
`;

console.log(textoHora);
console.log(Math.random() * 10)