import { ExperienciaEditarComponent } from './components/dashboard/experiencia-editar/experiencia-editar.component';
import { AcercaDeEditarComponent } from './components/dashboard/acerca-de-editar/acerca-de-editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { EducacionEditarComponent } from './components/dashboard/educacion-editar/educacion-editar.component';
import { HardEditarComponent } from './components/dashboard/hard-editar/hard-editar.component';
import { SoftEditarComponent } from './components/dashboard/soft-editar/soft-editar.component';
import { ProyectosEditarComponent } from './components/dashboard/proyectos-editar/proyectos-editar.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[GuardGuard]}, 
  {path:'dashboard/editarPersona', component: AcercaDeEditarComponent, canActivate:[GuardGuard]},
  {path:'dashboard/editarEducacion', component: EducacionEditarComponent, canActivate:[GuardGuard]},
  {path:'dashboard/editarHard', component: HardEditarComponent, canActivate:[GuardGuard]},
  {path:'dashboard/editarSoft', component: SoftEditarComponent, canActivate:[GuardGuard]},
  {path:'dashboard/editarExperiencia', component: ExperienciaEditarComponent, canActivate:[GuardGuard]},
  {path:'dashboard/editarProyecto', component: ProyectosEditarComponent, canActivate:[GuardGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
