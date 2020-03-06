interface ICamiseta {
    setColor(color: string);
    getColor(): string;
}

class MiClaseImplementada implements ICamiseta {

    private color:string;
    private precio:number;

    constructor(color:string, precio:number){
        this.color = color;
        this.precio = precio;
    }

    setColor(color: string) {
        this.color = color;
    }
    getColor(): string {
        return this.color;
    }

}