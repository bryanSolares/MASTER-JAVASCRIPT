//Sintaxis antigua module.exports
//Sintaxis nueva anteponer export a lo que se quiere exportar

export default class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    print(){
        console.log(`Soy animal de tipo ${this.nombre}`)
    }
}

export class Oso extends Animal{
    constructor(){
        super("Oso");
    }
}

export class Perro extends Animal{
    constructor(){
        super("Perro");
    }
}

export function ejemplo(){
    console.log("Funcion ejemplo")
}

export const configuracion = {deficiones:4}

//Manera convencional= module.exports + require

//module.exports = Animal;
// module.exports = {
//     Animal,
//     Oso
// }