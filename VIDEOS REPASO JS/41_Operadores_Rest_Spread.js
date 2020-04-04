//Operadores que son parte de ES6 destructuracion
//Se representa con 3 puntos

//REST
console.log("/**********************OPERADOR REST ************************/");

let obj = {
    a: 1,
    b: 2,
    c: 3
}

let {a,...resto} = obj;
console.log(a);
console.log(resto); //Un objeto con los valores restantes

function fn({a,b,...resto}){
    console.log(a);
    console.log(b);
    console.log(resto);
}

fn(obj);

let arreglo = [1,2,3,4,5,6];
let [x,...arregloB] = arreglo;
console.log(x);
console.log(arregloB);

function fn2([x,y,...resto]){
    console.log(x);
    console.log(y);
    console.log(resto);
}
fn2(arreglo)

function fn3(a,...restos){
    console.log(a);
    console.log(restos);
}

fn3(10,20,30,40);


console.log("/**********************OPERADOR SPREAD ************************/");
let obj1 = {a:1,b:2};
let obj2 = {x:10,y:20};

let mix = {...obj1,...obj2, z:1} //unifica los dos objetos en una sola variable
console.log(mix)

let arregloSpread = [100,200,300,400]
let arregloSpread2 = [1000,2000,3000,4000];

let unificacion = [...arregloSpread,...arregloSpread2,3219,321921]
console.log(unificacion)