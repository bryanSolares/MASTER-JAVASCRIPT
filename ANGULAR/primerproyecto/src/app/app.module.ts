import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { appRoutingProvider, routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importaciones de clases
import { VideoJuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

import { DataService } from "./data.service";
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  {path:"", component: HolaMundoComponent},
  {path:"about", component: AboutComponent}
];

//módulo principal de angular
@NgModule({
  //Carga componenetes, pipes, directivas que la aplicación de angular puede usar
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    HolaMundoComponent,
    UserComponent
  ],
  //modulos propios de angular
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  //Cargar servicios
  providers: [
    appRoutingProvider,
    DataService
  ],
  //componente principal
  bootstrap: [AppComponent]
})

//se exporta el módulo
export class AppModule { }
