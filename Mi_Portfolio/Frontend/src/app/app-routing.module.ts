import { AcercaDeEditarComponent } from './components/dashboard/acerca-de-editar/acerca-de-editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { EducacionEditarComponent } from './components/dashboard/educacion-editar/educacion-editar.component';
import { HardEditarComponent } from './components/dashboard/hard-editar/hard-editar.component';
import { SoftEditarComponent } from './components/dashboard/soft-editar/soft-editar.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'dashboard/editarPersona', component: AcercaDeEditarComponent},
  {path:'dashboard/editarEducacion', component: EducacionEditarComponent},
  {path:'dashboard/editarHard', component: HardEditarComponent},
  {path:'dashboard/editarSoft', component: SoftEditarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
