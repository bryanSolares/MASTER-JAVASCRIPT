//Destructuring de objetos y arreglos
//Destructuracion
//Se encarga de desmpacar los objetos o arreglos de una manera mas limpia

var persona = {
    nombre: 'Bryan',
    apellido: 'Solares',
    hijos:{
        numero: 12
    }
};

console.log(`${persona.nombre} ${persona.apellido}`)

//let {nombre,apellido, edad = 12} = persona
//let {nombre, apellido, hijos:{numero}} = persona
//let {nombre, apellido, hijos:{numero:children}} = persona
let {nombre, apellido, hijos:children} = persona
console.log(`${nombre} ${apellido} hijos: ${children.numero}`)

function printNombre(){
    console.log(`${nombre}`)
}

printNombre()

//DESTRUCTURACION EN ARREGLOS
var arreglo = [1,2,3,4,5,6];
let [x,y,,z,,,,a=20] = arreglo;
console.log(x,y,z,a);



