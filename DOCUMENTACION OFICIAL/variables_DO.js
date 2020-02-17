//VARIABLES
var $hola = "hola";
var variableIndefinida;

if (variableIndefinida == undefined) {
    //ingresa al true si está sind definir
}

if (!variableIndefinida) {
    //ingresa porque en contexto booleano undefined se comporta como falso
}

var a;
a + 2; // igual a NaN (no númerico)

var a = null; // se comporta como 0 en operaciones aritméticas y false en booleanas


//var da lugar a ser global
if (true) {
    var x = 4;
}

console.log(x);

//let da lugar a ser local
if (true) {
    let x = 4;
}

console.log(x); //error

if (y == undefined) {
    console.log(y);
    var y = "hola";
    console.log(y);
}

/*
console.log(d);
let d = "hola";
*/

const constante = {"Clave":"Valor"};
console.log(constante);
constante.key = "otro valor";
console.log(constante);

const lenguajes = ["Java","JavaScript"];
console.log(lenguajes);
lenguajes.push("Python");
console.log(lenguajes);

console.log("34"-5);
console.log(parseInt("34")+5);

console.log(+"1.1"+"1.1");
console.log((+"1.1")+(+"1.1"));

var cafes = ["tostado","con crema","frio","pesado"];
imprimir(cafes);
var cafes = ["tostado","con crema",,"frio","pesado"];
imprimir(cafes);
var cafes = ["tostado","con crema",,"frio","pesado",];
imprimir(cafes);

imprimir(20 + " Base 10: 0-9");
imprimir(020 + " Octal: 0-7");
imprimir(0x20 + " Hexadecimales: 1-9 y A-F ó a-f");

imprimir(1.e1);
imprimir(2.e-12);
imprimir(-2.e2);
imprimir(.1e2);
imprimir(2E-12);


var literalesObjeto = "Hola";

function funcion(valor){
    return valor;
}

var map = {valor1: "valor1", valor2 :funcion("valor2"), valor3: literalesObjeto};
imprimir(map.valor1);
imprimir(map.valor2);
imprimir(map.valor3);

var map = {listaCarros: {Carro1:"Honda",Carro2:"Nissan"}, listaMotos: {1:"Italika",2:"Suzuki"}};
imprimir(map.listaCarros.Carro1);
imprimir(map.listaMotos[2]);

imprimir(/abc+c/);

imprimir("\"Hola como están\"");

imprimir("\251");
imprimir("\x25");
imprimir("\u2839");

function imprimir(valor){
    console.log(valor);
}