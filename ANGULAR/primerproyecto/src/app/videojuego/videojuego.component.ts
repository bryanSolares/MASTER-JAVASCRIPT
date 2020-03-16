import { Component,OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: "videojuego",
    templateUrl: "./videojuego.component.html"
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo:string; 
    public listado:string;

    constructor(){
        this.titulo = "Componenete de videojuegos - Actuando con interpolación";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado el componenete")
    }

    ngOnInit(){
        console.log("OnInit Ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy Ejecutado");
    }

    setCambiarTituto(){
        this.titulo = "nuevo titulo de componente"
    }
}

