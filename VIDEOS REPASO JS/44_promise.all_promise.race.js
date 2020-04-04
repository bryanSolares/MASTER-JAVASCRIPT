//Promise all y Promise.race
//Para múltiples promesas en bloque

function genRandom() {
    return Math.floor(Math.random() * 1000);
}

function operacionAsinc(id, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id);
        }, delay);
    });
};


var id = 0;
//Cada uno terminará en su tiempo
/*operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data));
operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data));
operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data));
operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data));
*/

//Usando promise.all
Promise.all([
    operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data)),
    operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data)),
    operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data)),
    operacionAsinc(++id, genRandom()).then((data) => console.log("Esta operación se completo", data))
])
    .then(() => console.log("Todos está resueltos"));


Promise.all([
    operacionAsinc(++id, genRandom()),
    operacionAsinc(++id, genRandom()),
    operacionAsinc(++id, genRandom()),
    operacionAsinc(++id, genRandom())
])
    .then((data) => {
        console.log(data);
        console.log("Todos está resueltos")
    });

//Usando Race
//resuelve promesa con primer valor devuelto no espera las restantes 
Promise.race([
    operacionAsinc(++id, genRandom()),
    operacionAsinc(++id, genRandom()),
    operacionAsinc(++id, genRandom()),
    operacionAsinc(++id, genRandom())
])
    .then((data) => {
        console.log(data, "Numero resuelto");
        console.log("Todos está resueltos")
    });