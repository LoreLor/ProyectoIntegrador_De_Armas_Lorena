import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';

@Component({
  selector: 'app-acerca-de-mostrar',
  templateUrl: './acerca-de-mostrar.component.html',
  styleUrls: ['./acerca-de-mostrar.component.css']
})
export class AcercaDeMostrarComponent implements OnInit {
  personas: Persona[] = [];
  persona: Persona = new Persona(); 
  
  constructor(private router:Router, private http:PersonaService) { }

  ngOnInit(): void {
    this.http.getPersona()
    .subscribe(data=>{
      this.personas=data; 
  })
}


  editarPersona(idpersona:number): any{
    localStorage.setItem("idpersona", idpersona.toString());
    this.router.navigate(['dashboard/editarPersona'])
    localStorage.getItem("idpersona")
    console.log(idpersona)
    //window.location.reload()
  }

  eliminarPersona(persona:Persona):any{
    this.http.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p !== persona)
      this.router.navigate(["dashboard"])
    })
  }
}
