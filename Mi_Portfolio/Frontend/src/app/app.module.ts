import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcercaDeEditarComponent } from './components/dashboard/acerca-de-editar/acerca-de-editar.component';
import { AcercaDeAgregarComponent } from './components/dashboard/acerca-de-agregar/acerca-de-agregar.component';
import { AcercaDeMostrarComponent } from './components/dashboard/acerca-de-mostrar/acerca-de-mostrar.component';
import { EducacionEditarComponent } from './components/dashboard/educacion-editar/educacion-editar.component';
import { EducacionAgregarComponent } from './components/dashboard/educacion-agregar/educacion-agregar.component';
import { EducacionMostrarComponent } from './components/dashboard/educacion-mostrar/educacion-mostrar.component';
import { ExperienciaEditarComponent } from './components/dashboard/experiencia-editar/experiencia-editar.component';
import { ExperienciaAgregarComponent } from './components/dashboard/experiencia-agregar/experiencia-agregar.component';
import { ExperienciaEliminarComponent } from './components/dashboard/experiencia-eliminar/experiencia-eliminar.component';
import { ExperienciaMostrarComponent } from './components/dashboard/experiencia-mostrar/experiencia-mostrar.component';
import { HardMostrarComponent } from './components/dashboard/hard-mostrar/hard-mostrar.component';
import { HardAgregarComponent } from './components/dashboard/hard-agregar/hard-agregar.component';
import { HardEditarComponent } from './components/dashboard/hard-editar/hard-editar.component';
import { ProyectosEditarComponent } from './components/dashboard/proyectos-editar/proyectos-editar.component';
import { ProyectosAgregarComponent } from './components/dashboard/proyectos-agregar/proyectos-agregar.component';
import { ProyectosMostrarComponent } from './components/dashboard/proyectos-mostrar/proyectos-mostrar.component';
import { ProyectosEliminarComponent } from './components/dashboard/proyectos-eliminar/proyectos-eliminar.component';
import { SoftEditarComponent } from './components/dashboard/soft-editar/soft-editar.component';
import { SoftAgregarComponent } from './components/dashboard/soft-agregar/soft-agregar.component';
import { SoftEliminarComponent } from './components/dashboard/soft-eliminar/soft-eliminar.component';
import { SoftMostrarComponent } from './components/dashboard/soft-mostrar/soft-mostrar.component';
import { HomeComponent } from './components/home/home.component';
import { PersonaService } from './service/api/persona.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardMostrarComponent,
    HardAgregarComponent,
    HardEditarComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    DashboardComponent,
    AcercaDeEditarComponent,
    AcercaDeAgregarComponent,
    AcercaDeMostrarComponent,
    EducacionEditarComponent,
    EducacionAgregarComponent,
    EducacionMostrarComponent,
    ExperienciaEditarComponent,
    ExperienciaAgregarComponent,
    ExperienciaEliminarComponent,
    ExperienciaMostrarComponent,
    ProyectosEditarComponent,
    ProyectosAgregarComponent,
    ProyectosMostrarComponent,
    ProyectosEliminarComponent,
    SoftEditarComponent,
    SoftAgregarComponent,
    SoftEliminarComponent,
    SoftMostrarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      // radius: 100,
      // outerStrokeWidth: 16,
      // innerStrokeWidth: 8,
      // outerStrokeColor: "#78C000",
      // innerStrokeColor: "#C7E596",
      // animationDuration: 300,
    
    }),
  ],
  providers: [
    PersonaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
