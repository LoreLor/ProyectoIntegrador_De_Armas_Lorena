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


  editarPersona(id:number): any{
    localStorage.setItem("id", id.toString());
    console.log(id)
    localStorage.getItem("id")
    window.location.reload()
  }

  eliminarPersona(persona:Persona){
    this.http.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p !== persona)
      this.router.navigate(["dashboard"])
    })
  }
}
