//Introducido en ES6
//Sintaxis más sencilla para generar iteradores

function* iteradores(){
    yield "Hello"
    yield "Hello1"
    yield "Hello2"
}

let it = iteradores();

var arr = [...it]
console.log(arr)

for (let item of it) {
    console.log(item)
}

function* random(n){
    for (let index = 0; index < n; index++) {
        yield Math.floor(Math.random()*10);
    }
}

var array = [...random(10)];
console.log(array)