//MANEJO DE FUNCIONES

//funcion sin devolver valor
function funcion1() {
    console.log("Hola Soy un funcion");
}

//función que devuelve valor
function funcion2() {
    return "Hola soy una función que devuelve valor";
}

for (var i = 0; i < 10; i++) {
    console.log(funcion2());
}

funcion1();

//con parámetros
function calculadora(numero1, numero2) {
    var resultado;

    resultado = numero1 + numero2;

    return resultado;
}

console.log(calculadora(2, 4));

//con parametros opcionales
//Tomar en cuanta que las variables son interpretadas en función de lo que se les pasa

function funcionParametrosOpcionales(texto = "texto por defecto", numero = 2) {
    console.log(texto, numero);
}

funcionParametrosOpcionales();
funcionParametrosOpcionales("carlitos", 23);
funcionParametrosOpcionales("carlitos", "asdfklañkdjf");

function uno() {
    console.log("uno");
    console.log(dos());
    function dos() {
        console.log("dos");
    }
}

uno();

//para hacer una función anidada se debe colocar el return de la función secundaria
function anidada(texto1) {
    function anidadaInterna(texto2) {
        console.log(texto1 + "---" + texto2);
    }
    return anidadaInterna;
}

anidada("Primer texto")("Segundo Texto");

//FUNCIONES CON PARAMETROS INDEFINIDOS
//PARAMETROS REST Y SPREAD

//REST
function parametrosIndefinidos(valor1, valor2, ...variables) {
    console.log(valor1);
    console.log(valor2);
    console.log(variables);
}

parametrosIndefinidos("Hola", "Mundo", "Como", "Estan", 12, 43, 53, false, true);

//SPREAD
var valores = ["Hola", "Mundo", "Como", "Estan", 12, 43, 53, false, true];
parametrosIndefinidos(...valores, "Parametro1", "Parametro2");

/*****************************/
//FUNCIONES ANONIMAS
var pala = function (palabra) {
    return palabra;
}

console.log(pala("hola"));

//funciones de callback

function calcul(valor1, valor2, funcion1, funcion2) {

    var resultado = valor1 * valor2;
    funcion1(resultado);
    funcion2(resultado);
}

calcul(14, 22, function (dato) {
    console.log("Hola de nuevo: " + dato);
}, function (dato) {
    console.log("Hola de nuevo2: " * dato);
});

//FUNCIONES DE FLECHA

calcul(14, 22, dato => {
    console.log("Hola de nuevo: " + dato);
}, dato => {
    console.log("Hola de nuevo2: " * dato);
});

var vari = "hola";

vari.toString();
vari.toLowerCase();
vari.toUpperCase();
console.log(vari.length);
var concatenacion = vari.concat("", "hola", "que", "tal", "como", "estan");
console.log(concatenacion);

concatenacion.indexOf("que"); //primera coincidencia
concatenacion.lastIndexOf("que"); //ultima coincidencia
concatenacion.search("tal");
concatenacion.match(/como/); //devuelve array con información con relación a coincidencias y otros (se usa expresión regular)
concatenacion.substr(1,5); //extracción
concatenacion.charAt(2); // selección de letra a partir de la posición indicada.
concatenacion.startsWith("estan"); // busca al inicio este lo buscado en la variable
concatenacion.endsWith("estan"); //busca que al final este lo buscado en la variable
concatenacion.includes("que");
concatenacion.replace("hola","HOLA");
concatenacion.slice(1,6);
concatenacion.split(" ");
concatenacion.trim(); //quita espacios al inicio y final 


//PLANILLAS DE TEXTO
var nombre = "BRYAN";
var apellido = "SOLARES";

var texto = `
    <h1> Hola como están </h1>
    Mi nombre es: ${nombre} 
    <br>
    Mi apellidos es: ${apellido}
`;

document.write(texto);



var $bryan = "Josue";
console.log($bryan);


