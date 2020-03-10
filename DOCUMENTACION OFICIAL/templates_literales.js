/*TEMPLATE LITERALS*/

//antes
console.log("Bienvenido");

//ES6
console.log(`Bienvenido
                al nuevo modo de usar saltos de línea`);

/*INTERPOLACION*/

//antes
let curso = "ES6";
console.log("Bienvenido a: " + curso);

//ahora
console.log(`Bienvenido a: ${curso}`);
console.log(`Bienvenido a: ES${5+1}`);

/*FUNCION PARA PROCESAR CADENAS DE TEXTO*/
let edad = 25, nombre = "Bryan";

//funcion de postproceso
function getContextLiteral(string,value1, value2){
    console.log(string);
    console.log(value1);
    console.log(value2);
}

getContextLiteral`Hola mi nombre es ${nombre} y tengo ${edad} años de edad`;
console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años de edad`);

