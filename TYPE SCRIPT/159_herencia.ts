class Vehiculo {
    private ruedas: number;
    private marca: string;
    protected velocidad: number;

    constructor(ruedas: number, marca: string, velocidad: number) {
        this.ruedas = ruedas;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    public toString(): string {
        return "Vehiculo de: " + this.ruedas + " ruedas, y de marca: " + this.marca;
    }

    public aumentarVelocidad(): void {
        //this.velocidad = (this.velocidad * 10);
        this.velocidad *= 10;
        console.log(`Velocidad aumentada en 10: ${this.velocidad}`);
    }

}

//Decorador
function agregarTurbo(tipoTurbo: String) {
    return function (target: Function) {
        target.prototype.agregandoTurbo = function (): void{
            console.log(`Se ha agregado el turbo tipo: ${tipoTurbo} al Vehiculo`);
        }
    }
}


//Agregando decorador
@agregarTurbo("2T Máxima aceleración")
class Toyota extends Vehiculo {

    public otraFuncionalidad(): string {
        return "Se añade otra funcionalidad a la nueva clase";
    }

    public aumentarVelocidad(): void {
        //this.velocidad = (this.velocidad * 2);
        this.velocidad *= 2;
        console.log(`Velocidad aumentada en 2: ${this.velocidad}`);
        super.aumentarVelocidad();
    }
}

//debugger;
var miAuto = new Toyota(4, "Hilux", 10);
miAuto.otraFuncionalidad();
miAuto.toString();
miAuto.aumentarVelocidad();
miAuto.agregandoTurbo();

