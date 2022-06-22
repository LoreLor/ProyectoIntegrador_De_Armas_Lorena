import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/service/api/educacion.service';

@Component({
  selector: 'app-educacion-editar',
  templateUrl: './educacion-editar.component.html',
  styleUrls: ['./educacion-editar.component.css']
})
export class EducacionEditarComponent implements OnInit {
  educacion:Educacion = new Educacion();
  form:FormGroup;
  
  constructor(private router:Router, private http:EducacionService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        nombre:['educacion.nombre',[Validators.required]],
        anios:['educacion.anios',[Validators.required]],
        descripcion:['educacion.descripcion',[Validators.required, Validators.maxLength(225)]],     
      }
    )
   }

  ngOnInit(): void {
    this.editarEducacion()
    console.log(this.educacion)
  }

  get Nombre(){
    return this.form.get("nombre")
  }

  get Anios(){
    return this.form.get("anios")
  }

  get Descripcion(){
    return this.form.get("descripcion")
  }

  editarEducacion():void{
    let idEducacion:any=localStorage.getItem("idEducacion")
    this.http.getEducacionById(idEducacion)
    .subscribe(data =>{
      this.educacion=data
        console.log(idEducacion)
    })  
  }

  actualizar(event:Event): any{
    event.preventDefault;
    if(this.educacion.id){
    this.http.updateEducacion(this.educacion)
    .subscribe(data =>{
      console.log(data)
        alert("Datos modificados con exito");
        //window.location.reload()
    })  
    this.router.navigate(['dashboard'])
  }else{
    alert('Los datos que intentas modificar no existen en la BD')
  }
}
}

