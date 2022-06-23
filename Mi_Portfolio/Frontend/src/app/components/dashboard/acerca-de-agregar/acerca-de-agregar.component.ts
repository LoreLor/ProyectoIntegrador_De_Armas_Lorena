
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acerca-de-agregar',
  templateUrl: './acerca-de-agregar.component.html',
  styleUrls: ['./acerca-de-agregar.component.css']
})
export class AcercaDeAgregarComponent implements OnInit {
  persona: Persona = new Persona();
  form:FormGroup;
  
  constructor(private router:Router, private http: PersonaService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        nombres:['',[Validators.required, Validators.minLength(3)]],
        apellidos:['',[Validators.required, Validators.minLength(3)]],
        titulo:['',[Validators.required, Validators.minLength(2)]],
        descripcion:['',[Validators.required, Validators.maxLength(300)]],
        imagenPerfil:['',[Validators.required]]
      }
    )
   }

  ngOnInit(): void {
    //console.log(this.persona)
  }

  get Nombres(){
    return this.form.get("nombres")
  }

  get Apellidos(){
    return this.form.get("apellidos")
  }

  get Titulo(){
    return this.form.get("titulo")
  }

  get Descripcion(){
    return this.form.get("descripcion")
  }

  get ImagenPerfil(){
    return this.form.get("imagenPerfil")
  }

  guardar(event:Event):any{
    if(this.persona.nombres){
      event.preventDefault;
      this.http.addPersona(this.persona)
        .subscribe(data => {
          console.log(data)
          Swal.fire("Persona agregada con exito");
        })
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }
  
  
  changeImag(event:Event):any{
    if(event){
      const imagen= this.persona.imagenPerfil.split('C:\\fakepath\\')
      console.log(imagen)
      this.persona.imagenPerfil=imagen[1]
      } 
    }
}
