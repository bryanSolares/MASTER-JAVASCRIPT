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
    //this.name = name;
    //this.age = age;
    Persona.call(this,name, age)
}

//esto no es recomendable hacer
//Doctor.prototype = Persona.prototype;
//Lo recomandable es 
//Doctor.prototype = Object.create(Persona.prototype);
Doctor.prototype = objectCreate(Persona.prototype);

Doctor.prototype.saludo = function(){
    console.log(`Hola soy el Doctor ${this.getName()} y tengo ${this.getAge()} anios de edad`);
}

const DrBryan = new Doctor('Josue Solares',21);
DrBryan.saludo();

console.log(DrBryan)



function objectCreate(Objeto){
    //helper
    function F(){}
    F.prototype = Objeto;
    return new F();
}