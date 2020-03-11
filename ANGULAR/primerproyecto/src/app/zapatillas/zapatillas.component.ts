import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html"
})
export class ZapatillasComponent implements OnInit {
  public title: string;
  public lista: Array<Zapatilla>;
  public listaMarcas: String[];

  constructor() {
    this.listaMarcas = new Array();
    this.lista = [
      new Zapatilla("zapatilla 1", 123, "marca 1", "color 1", false),
      new Zapatilla("zapatilla 2", 234, "marca 2", "color 2", true),
      new Zapatilla("zapatilla 1", 12, "marca 3", "color 1", false),
      new Zapatilla("zapatilla 2", 23, "marca 2", "color 2", true),
      new Zapatilla("zapatilla 1", 123, "marca 1", "color 1", false),
      new Zapatilla("zapatilla 2", 23, "marca 2", "color 2", true),
      new Zapatilla("zapatilla 1", 12, "marca 1", "color 1", false),
      new Zapatilla("zapatilla 2", 23, "marca 2", "color 2", true)
    ];
  }

  ngOnInit() {
    console.log(this.lista);
    this.marcas();
  }

  marcas() {
    this.lista.forEach(elemento => {
      if(this.listaMarcas.indexOf(elemento.marca) < 0){
        this.listaMarcas.push(elemento.marca);
      }
    });
 
    console.log(this.listaMarcas);
  }
}
