import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';

@Component({
  selector: 'app-acerca-de-editar',
  templateUrl: './acerca-de-editar.component.html',
  styleUrls: ['./acerca-de-editar.component.css']
})
export class AcercaDeEditarComponent implements OnInit {
  persona:Persona=new Persona();
  form:FormGroup;

  constructor(private router:Router, private http:PersonaService, private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group(
      {
        nombres:['persona.nombres',[Validators.required, Validators.minLength(3)]],
        apellidos:['persona.apellidos',[Validators.required, Validators.minLength(3)]],
        titulo:['persona.titulo',[Validators.required, Validators.minLength(2)]],
        descripcion:['persona.descripcion',[Validators.required, Validators.maxLength(300)]],
        imagenPerfil:['persona.imagenPrfil',[Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    this.editarPersona()
    console.log(this.persona)
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
    if(this.persona.id){
      this.http.updatePersona(this.persona)
      .subscribe(data =>{
        console.log(data)
        alert("Datos modificados con exito");
        //window.location.reload()
        this.router.navigate(['dashboard'])
      })

    }else{
      alert('La persona que intentas modificar no existe en base de datos')
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