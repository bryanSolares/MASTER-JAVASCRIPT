
for (let step = 0; step < 5; step++) {
    console.log("Walking ease one step");
}

function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }

    return numberSelected;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Número de opciones seleccionadas: " + howMany(document.selectForm.musicTypes));
});


//do while
var i = 0;

do {
    i += 1;
    console.log(i);
} while (i < 5);

//while
n = 0;
x = 0;

while (n < 3) {
    n++;
    x += n;
}

console.log("valor de n:", n, "valor de x:", x);

//label
/*
miLabel:
while(theMark == true){
    doSomething();
}*/


//break
/*
for (i = 0; i < a.longitud; i++) {
    if (a[i] == elValor) {
        break;
    }
}*/


//debugger;
var x = 0;
var z = 0;
labelCancelLoop: while (true) {
    console.log("Outer loops", x);
    x++;
    z = 1;
    while (true) {
        console.log("Inner loops:", z);
        z++;
        if (z === 10 && x === 10) {
            break labelCancelLoop;
        } else if (z === 10) {
            break;
        }
    }
}

//debugger;
var i = 0;
var n = 0;
while (i < 5) {
    i++;
    if (i == 3) {
        continue;
    }
    n += i;
}

//debugger;
var i = 0;
var j = 20;

checkiandj:
while ( i < 4){
    console.log(i);
    i++;
    checkj:
    while(j > 4){
        console.log(j);
        j--;
        if((j%2)==0){
            continue checkj;
        }
        console.log(j,"is odd.");
    }
    console.log("i =",i);
    console.log("j =",j);
}


//for ... in = itera sobre la propiedades definidas por el usuario en un array en orden arbitrario
function nombre_propiedades(obj, obj_nombre){
    var resultado = "";
    for(let i in obj){
        resultado += obj_nombre + "." + i + " = " + obj[i] + "<br>";
    }
    resultado += "<hr>";
    return resultado;
}

var obj = {a: 1, b: 2, c:3};

for(const nombre  in obj){
    console.log(`nombre.${nombre} = valor.${obj[nombre]}`);
}


//for .. of = bucle iterando sobre objetos iterables (array, map, set, argumentos, etc )
//for .. in = sobre nombres de propiedades - for ... of = valores de propiedades
let arreglo = [3, 5, 6];
arreglo.foo = "hello";

//valores
for(let i of arreglo){
    console.log(i);
}

//nombres
for(let i in arreglo){
    console.log(i);
}