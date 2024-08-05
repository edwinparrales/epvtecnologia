import { Routes } from '@angular/router';
import {InicioComponent} from "./pages/inicio/inicio.component";
import {AboutComponent} from "./pages/about/about.component";
import {ServiciosComponent} from "./pages/servicios/servicios.component";
import {GeneralesComponent} from "./pages/generales/generales.component";
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"about",component:AboutComponent},
  {path:"servicios",component:ServiciosComponent},
  {path:"generales",component:GeneralesComponent},
  {path:"blog",component:BlogComponent},
  {path:"**",redirectTo:"inicio",pathMatch:"full"}
];
