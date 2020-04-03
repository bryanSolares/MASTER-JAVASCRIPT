//Clase principal
function Persona(name, age) {
    this.name = name;
    this.age = age;
}

Persona.prototype.getName = function () {
    return this.name;
}

Persona.prototype.getAge = function () {
    return this.age;
}

Persona.prototype.saludo = function () {
    console.log(`Hola soy ${this.getName()} y tengo ${this.getAge()} anios de edad`);
}

const bryan = new Persona('Bryan Solares',25);
bryan.saludo()


function Doctor(name, age){
     
}

Doctor.prototype.saludo = function(){
    console.log(`Hola soy el Doctor ${this.getName()} y tengo ${this.getAge()} anios de edad`);
}

const DrBryan = new Doctor('Bryan',25);
DrBryan.saludo();