//Introducido en ES6
//Permite recorrer elementos de una estrucutra de datos de una manera más universal

//ITERABLE: implementación del protocolo a nivel de la estrucura de datos: Arrray, String, Maps, Sets, DOM, etc, generan el iterador
//ITERADOR: Objeto que mantiene el estado de la iteración, el cuál proporciona el valor y también da a conocer si el estado sigue en //curso o ya finalizó

//Consumidores consumen iterables: for-of, array.from, operador spread, map, set, promise.all, promise.race, Yield

//Se puede consumidor iterador.next()

const arr = [1, 2, 3, 4];
const iterador = arr[Symbol.iterator]();
console.log(iterador)

// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

var next = iterador.next();
while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}

for (const item of arr) {
    console.log(item);
}

console.log("------------------------")

const iterable = {
    [Symbol.iterator]() {
        var count = 0;
        var max = 10;
        return {
            next() {
                count++;
                if (count > max) {
                    return { value: undefined, done: true }
                }
                return {value: count,done: false}
            }
        }
    }
}

for (const i of iterable) {
    console.log(i)
}