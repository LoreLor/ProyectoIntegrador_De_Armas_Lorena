import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/service/api/educacion.service';

@Component({
  selector: 'app-educacion-agregar',
  templateUrl: './educacion-agregar.component.html',
  styleUrls: ['./educacion-agregar.component.css']
})
export class EducacionAgregarComponent implements OnInit {
  educacion:Educacion = new Educacion();
  form: FormGroup; 

  constructor(private formBuilder:FormBuilder, private http:EducacionService) {
    this.form = this.formBuilder.group(
      {
        nombre:['',[Validators.required]],
        anios:['',[Validators.required]],
        descripcion:['',[Validators.required, Validators.maxLength(225)]],     
      }
    )
   }

  ngOnInit(): void {
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

  guardar(event:Event): any{
    event.preventDefault;
    this.http.addEducacion(this.educacion)
      .subscribe(data => {
        console.log(data)
        alert("Educacion agregada con exito");
        window.location.reload()
      })
  }
}
