import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';

@Component({
  selector: 'app-acerca-de-editar',
  templateUrl: './acerca-de-editar.component.html',
  styleUrls: ['./acerca-de-editar.component.css']
})
export class AcercaDeEditarComponent implements OnInit {
  persona:Persona=new Persona()
  constructor(private router:Router, private http:PersonaService) { }

  ngOnInit(): void {
    this.editarPersona()
    console.log(this.persona)
  }

  editarPersona():void{
    let id:any=localStorage.getItem("id")
    this.http.getPersonaId(id)
    .subscribe(data =>{
      this.persona=data
        console.log(id)
    })  
  }

  actualizar(){
    this.http.updatePersona(this.persona)
    .subscribe(data =>{
      console.log(data)
        alert("Datos modificados con exito");
        this.router.navigate(["dashboard"])
    })  
  }

}
