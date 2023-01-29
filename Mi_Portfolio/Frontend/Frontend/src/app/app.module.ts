

import { EducacionService } from 'src/app/service/api/educacion.service';
import { ProyectosService } from 'src/app/service/api/proyectos.service';
import { HardService } from './service/api/hard.service';
import { ExperienciaService } from 'src/app/service/api/experiencia.service';
import { InterceptorService } from './service/interceptor.service';
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
import { ExperienciaMostrarComponent } from './components/dashboard/experiencia-mostrar/experiencia-mostrar.component';
import { HardMostrarComponent } from './components/dashboard/hard-mostrar/hard-mostrar.component';
import { HardAgregarComponent } from './components/dashboard/hard-agregar/hard-agregar.component';
import { HardEditarComponent } from './components/dashboard/hard-editar/hard-editar.component';
import { ProyectosEditarComponent } from './components/dashboard/proyectos-editar/proyectos-editar.component';
import { ProyectosAgregarComponent } from './components/dashboard/proyectos-agregar/proyectos-agregar.component';
import { ProyectosMostrarComponent } from './components/dashboard/proyectos-mostrar/proyectos-mostrar.component';
import { SoftEditarComponent } from './components/dashboard/soft-editar/soft-editar.component';
import { SoftAgregarComponent } from './components/dashboard/soft-agregar/soft-agregar.component';
import { SoftMostrarComponent } from './components/dashboard/soft-mostrar/soft-mostrar.component';
import { HomeComponent } from './components/home/home.component';
import { PersonaService } from './service/api/persona.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SoftService } from './service/api/soft.service';





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
    ExperienciaMostrarComponent,
    ProyectosEditarComponent,
    ProyectosAgregarComponent,
    ProyectosMostrarComponent,
    SoftEditarComponent,
    SoftAgregarComponent,
    SoftMostrarComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    ExperienciaService,
    HardService,
    SoftService,
    ProyectosService,
    EducacionService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
