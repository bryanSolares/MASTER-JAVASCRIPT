
//Modulos o objetos que se necesitan 
import { Component } from '@angular/core';
import { configuracion } from "./models/configuracion";

//decorador es donde se configura el componente
@Component({
  selector: 'app-root', //etiqueta donde se cargará el componente en el html 
  templateUrl: './app.component.html', //vista del componente
  styleUrls: ['./app.component.css'] //adjuntar estilos que acompañan al componenete
})

//se exporta la clase para poder utilizarla
export class AppComponent {
  public title = 'Mi primer proyectos -------- ';
  public users :string[] = ["bryan","josue","solares"];
  public descripcion :string;
  public mostrar_videojuegos : boolean = true;
  public config;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion;

  }

  ocultarVideoJuegos(value){
    this.mostrar_videojuegos = value;
  }
}
