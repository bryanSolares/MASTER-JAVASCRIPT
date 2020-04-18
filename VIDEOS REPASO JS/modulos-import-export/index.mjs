//const Animal = require("./animal");
//console.log(Animal);

//const Animales = require("./animal");

// const {Animal, Oso} = require("./animal");

// const pato = new Animal("Pato");
// pato.print()

// const oso = new Oso();
// oso.print();


//para utilizar los import y export se deje usar la extención .mjs

//import Animal, Oso, Perro from "./animal.mjs";
//import Animal, {Oso, Perro} from "./animal.mjs";
import Animal, * as Animales from "./animal.mjs";
const pato = new Animal("Pato");
pato.print()
const oso = new Animales.Oso();
oso.print();
const perro = new Animales.Perro();
perro.print()

Animales.ejemplo();
console.log(Animales.configuracion)