import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';

//decorador que permite configurar el módulo
@NgModule({
  //Carga componenetes, pipes, directivas
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  //modulos propios de angular
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Cargar servicios
  providers: [],
  //componente principal
  bootstrap: [AppComponent]
})

//se exporta el módulo
export class AppModule { }
