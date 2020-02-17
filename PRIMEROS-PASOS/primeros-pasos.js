"user strict"

//MODO ESTRICTO: permite rigurosidad ante la escritura de código bueno y claro
//implementar "user strict"

//Comentario igual que java

/*alert("Hola Mundo 2 JS");
document.write("Escribiendo en HTML desde archivo externo");
console.log("Cualquier cosa");
*/


//USO DE VARIABLES Y FUNCIONALIDAD
var pais = "Guatemala";
var continente = "Americano";
var antiguedad = 2020;

var pais_y_contienente = pais + " " + continente;

console.log(pais, continente, antiguedad);
console.log(pais_y_contienente);

pais = "China";
continente = "Asiatico";

pais_y_contienente = pais + " " + continente;

console.log(pais_y_contienente);

//FORMAS DE DECLARAR VARIABLES
//let y var, la diferencia es el comportamiento y como actuan en función de los distintos bloques

//alcance de var es global 
//alcance de let es a nivel del bloque donde se creó.

var numero = 40;
console.log(numero)

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);

let texto = "40";
console.log(texto);

if(true){
    let texto = "50";
    console.log(texto);
}

console.log(texto);

/****************************************/
//Uso de constantes: valores no modificables
const constante = "Hola Mundo";
console.log(constante);

//Error al momento de ver consola
//constante = "Hola Mundo 2";
console.log(constante);

/****************************************/
//OPERADORES Y TIPOS DE DATOS
//operadores: +, -, *, /, % 

var numero1 = 2;
var numero2 = 45;
var resultado = numero1 % numero2;

alert(resultado);

//tipos de datos implicitos
var entero = 34565;
var cade = "45";
var cadena = "cadena con prioridad más alta";
var cadena2 = 'cadena con prioridad más baja';
var cadena3 = 'combinación "de cadena " internas y externas';
var booleano = true; //true o false, 1 = true o 0 = false

console.log(Number(cade) + 10);
console.log(parseInt(cade) + 10);
console.log(parseFloat(cade) + 10);
console.log(String(cade) + 10);

//averiguar tipo de dato de variables.
console.log(typeof entero);
console.log(typeof cade)
console.log(typeof cadena)
console.log(typeof booleano)

