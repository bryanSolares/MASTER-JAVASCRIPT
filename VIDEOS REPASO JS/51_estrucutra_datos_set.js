//Set fue introducita en ES6 -> es igual que un array pero solo se pueden almacenar valor únicos
//Tiene interfaz de apoyo con varios métodos de ayuda
//soporta todos los tipos de datos, los objetos si se pueden repetir

var set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.add(2);
set.add("hola");
set.add("hola");
set.add({});
set.add({}); //-> agregar

console.log(set)

set.delete("hola"); //->eliminar
console.log(set);
console.log(set.size); //-> consultar tamaño
set.clear(); // -> limpiar
console.log(set)

var set2 = new Set([123,354,5325,63,32,22,2]);
console.log(set2);

//for tradicional
console.log("tradicional")
for (const iterator of set2) {
    console.log(iterator);
}

//for en set
console.log("foreach")
set2.forEach((item)=>console.log(item));

//No hay forma directa para encontrar un elemento en cierta posición, se tiene que hacer un array basado en el set
var array = Array.from(set2);
console.log(array[3])

console.log(set2.has(3)); // -> verificar si el elemento existe en el set

var listaNombres = [{nombre:"bryan"},{nombre:"bryan"},{nombre:"josue"},{nombre:"solares"}]

var set3 = new Set();

listaNombres.forEach(item => set3.add(item.nombre));
console.log(set3)