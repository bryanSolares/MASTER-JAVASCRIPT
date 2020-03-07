import { Component } from "@angular/core";

@Component({
    selector: "videojuego",
    templateUrl: "./videojuego.component.html"
})

export class VideoJuegoComponent{

    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo = "Componenete de videojuegos - Actuando con interpolación";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado el componenete")
    }
}