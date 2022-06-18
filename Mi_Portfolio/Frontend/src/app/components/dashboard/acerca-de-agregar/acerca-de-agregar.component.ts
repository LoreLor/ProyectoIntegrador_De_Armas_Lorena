
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';

@Component({
  selector: 'app-acerca-de-agregar',
  templateUrl: './acerca-de-agregar.component.html',
  styleUrls: ['./acerca-de-agregar.component.css']
})
export class AcercaDeAgregarComponent implements OnInit {
  persona: Persona = new Persona()
  
  constructor(private router:Router, private http: PersonaService) { }

  ngOnInit(): void {
    console.log(this.persona)
  }

  guardar():any{
    this.http.addPersona(this.persona)
      .subscribe(data => {
        console.log(data)
        alert("Persona agregada con exito");

      })
  }
  changeImag(event:Event):any{
    if(event){
      const imagen= this.persona.imagenPerfil.split('C:\\fakepath\\')
      console.log(imagen)
      this.persona.imagenPerfil=imagen[1]
      }
  
    }

}
