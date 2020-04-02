//SCOPES -> PROPIEDAD FUNDAMENTAL DE JS

//global scope -> se define al primer nivel de estructura
let valor = 1;
function fn() {
    console.log(valor);
    global();
}

function global() {
    console.log('Acceso global');
}

fn();

//internal scope
let x = 20;
function fun() {
    //local scope 1
    let x = 30;
    console.log(x);

    (function () {
        //local scope 2
        console.log(x)
    }())
}
fun();
console.log(x)


//variable scope
//const, let, var

if (true) {
    //sin error
    var xx = 1;
    /*error
    let xx = 1;    
    const xx =1;*/
}
console.log(xx)

//closure
function fn() {
    let num = 1;
    return function () {
        num++;
        console.log(num,'dentro de fn');
    };
}

function eje(callback) {
    callback();
}

//Guarda estado, no ejecuta aun
var sumador = fn();
eje(sumador);
eje(sumador);
