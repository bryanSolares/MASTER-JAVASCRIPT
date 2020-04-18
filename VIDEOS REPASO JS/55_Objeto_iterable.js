//Object.key
//Los objetos no lo tiene implementado, ya que no es una estructura lineal

var obj = { x: 1, y: 2, z: 3,abc:{a:1,b:2,c:3} }

for (let key of Object.keys(obj)) {
    console.log(key)
    console.log(obj[key])
}

console.log("-------------")

function objIterable(objeto) {
    let keys = Object.keys(objeto); //->obtiene las claves
    let count = 0;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    if (count < keys.length) {
                        const key = keys[count]; //->se obtienen las llaves
                        const value = objeto[key]; // -> se obtienen los valores
                        const format = { key, value }; //->se especifica un formato salida
                        count++;
                        return {value: format,done: false}
                    } else {
                        return {value: undefined,done: true}
                    }
                }
            }
        }
    }
}

for (let item of objIterable(obj)) {
    console.log(item)
}