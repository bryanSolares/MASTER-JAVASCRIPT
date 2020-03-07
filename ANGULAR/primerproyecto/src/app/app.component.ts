
//Modulos o objetos que se necesitan 
import { Component } from '@angular/core';

//decorador es donde se configura el componente
@Component({
  selector: 'app-root', //etiqueta donde se cargará el componente en el html 
  templateUrl: './app.component.html', //vista del componente
  styleUrls: ['./app.component.css'] //adjuntar estilos que acompañan al componenete
})

//se exporta la clase para poder utilizarla
export class AppComponent {
  public title = 'Mi primer proyectos -------- ';
}
