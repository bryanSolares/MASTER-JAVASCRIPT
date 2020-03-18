//antes
var obj = {}
var id = 0;

function generadorId(){
    return "id_"+(++id);
}

obj[generadorId()] = "valor";
obj[generadorId()] = "valor2";
console.log(obj)

//ES6 ahora
var obj = {
    [generadorId()]:"valor1",
    [generadorId()]:"valor2"
}

console.log(obj)