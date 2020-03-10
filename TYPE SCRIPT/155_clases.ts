//Manejo de clases

//modelo
export class Camiseta {

    //propiedades
    private color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //Constructores
    constructor(color: string, modelo:string, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }


    //métodos
    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

}

var camiseta1 = new Camiseta("Rojo","manga larga","ADA","L",12);
camiseta1.setColor("Amarillo");
console.log(camiseta1.getColor())

var camiseta2 = new Camiseta("Azul","JUE--","Maa","asdf",34);
camiseta2.setColor("Violeta");
console.log(camiseta2.getColor())