import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acerca-de-editar',
  templateUrl: './acerca-de-editar.component.html',
  styleUrls: ['./acerca-de-editar.component.css']
})
export class AcercaDeEditarComponent implements OnInit {
  persona:Persona=new Persona();


  constructor(private router:Router, private http:PersonaService) { }

  ngOnInit(): void {
    this.editarPersona()
    console.log(this.persona)
  }


  editarPersona():any{
    let idpersona:any=localStorage.getItem("idpersona")
    this.http.getPersonaId(idpersona)
    .subscribe(data =>{
      this.persona=data
        console.log(idpersona)
    })  
  }

  actualizar(event:Event):any{
    event.preventDefault;
      this.http.updatePersona(this.persona)
      .subscribe(data =>{
        console.log(data)
        Swal.fire("Datos modificados con exito");
        //window.location.reload()
        this.router.navigate(['dashboard'])
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