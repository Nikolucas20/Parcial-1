import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidasComponent } from './Componentes/comidas/comidas.component';
import { MascotasComponent } from './Componentes/mascotas/mascotas.component';
import { DuenosComponent } from './Componentes/duenos/duenos.component';

const routes: Routes = [
  {path:"Comidas", component:ComidasComponent},
  {path:"Mascotas", component:MascotasComponent},
  {path:"Dueños", component:DuenosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
