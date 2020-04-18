//Map -> ES6 es similar a un objeto
//Diferencia: se pueden tener llaves que no son string

var mapa = new Map();
mapa.set("nombre","bryan");
console.log(mapa.get("nombre"));
mapa.set("nombre","josue");
console.log(mapa.get("nombre"));
mapa.delete("nombre");
console.log(mapa);
console.log(mapa.size);
mapa.clear();

var key = {};
mapa.set(key,"saludo");
console.log(mapa);
console.log(mapa.get(key));

var mapa2 = new Map([
    ["nombre","bryan"],
    ["edad",25],
    ["apellido","solares"]
])

console.log(mapa2)
console.log(Array.from(mapa2))
