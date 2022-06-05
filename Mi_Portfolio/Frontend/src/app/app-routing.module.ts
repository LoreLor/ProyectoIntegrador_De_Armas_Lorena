import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeAgregarComponent } from './components/dashboard/acerca-de-agregar/acerca-de-agregar.component';
import { AcercaDeEditarComponent } from './components/dashboard/acerca-de-editar/acerca-de-editar.component';
import { AcercaDeMostrarComponent } from './components/dashboard/acerca-de-mostrar/acerca-de-mostrar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  
  {path: 'mostrarPersona', component: AcercaDeMostrarComponent},
  {path: 'agregarPersona', component: AcercaDeAgregarComponent},
  {path: 'editarPersona', component: AcercaDeEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
