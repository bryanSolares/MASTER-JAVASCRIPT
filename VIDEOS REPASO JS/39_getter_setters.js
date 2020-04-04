//Getters and Setters

var Persona = {
    nombre: "Bryan",
    apellido: "Solares",
    /*nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }*/
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(nombre){
        /*const arreglo = nombre.split(' ');
        this.nombre = arreglo[0];
        this.apellido = arreglo[1];*/
        [this.nombre,this.apellido] = nombre.split(' ');
    }
};

//console.log(Persona.nombreCompleto())
console.log(Persona.nombreCompleto);
Persona.nombreCompleto = "Josue Solares";
console.log(Persona.nombreCompleto);

/*DESCRIPTORES*/

let usuario = {
    nombre: "Genesis",
    apellido: "Solares"
}

Object.defineProperty(usuario,'nombreCompleto',{
    get(){
        return `${this.nombre} ${this.apellido}`;
    },
    set(valor){
        [this.nombre, this.apellido] = valor.split(" ");
    }
})

console.log(usuario.nombreCompleto);
usuario.nombreCompleto = "Mackensy Vicente"
console.log(usuario.nombreCompleto);

let persona = {

    get name(){
        return this._name;
    },
    set name(value){
        this._name = value;
    }
}

persona.name = 'Pedro';
console.log(persona.name)
