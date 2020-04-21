import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailsComponent } from "./components/details/details.component";
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditComponent } from "./components/edit/edit.component";
import { ErrorComponent } from "./components/error/error.component";

const appRoutes:Routes = [
    {path:"",component:AboutComponent},
    {path:"sobre-mi",component: AboutComponent},
    {path:"proyectos",component:ProjectsComponent},
    {path:"proyecto-detalle/:id",component:DetailsComponent},
    {path:"crear-proyecto",component:CreateComponent},
    {path:"contacto",component:ContactComponent},
    {path:"editar-proyecto/:id",component:EditComponent},
    {path:"**", component:ErrorComponent}
];

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);