//Importar módulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";

//Importar componentes
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideoJuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";

//Array rutas
const appRoutes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "zapatillas",
    component: ZapatillasComponent
  },
  {
    path: "videojuego",
    component: VideoJuegoComponent
  },
  {
    path: "cursos",
    component: CursosComponent
  },
  {
    path: "cursos/:nombre",
    component: CursosComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

//Exportar módulo del router
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
