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
  public color : string;
  public miMarca:string;

  constructor() {
    this.listaMarcas = new Array();
    this.miMarca ="";
    this.color = "orange";
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

  getMarca(){
    alert(this.miMarca);
  }

  addMarca(){
    this.listaMarcas.push(this.miMarca);
  }

  borrarMarca(indice){
    //delete this.listaMarcas[indice];
    this.listaMarcas.splice(indice,1);
  }

  onBlur(){
    console.log("has salido del input");
  }

  keyUp(){
    
  }

}
