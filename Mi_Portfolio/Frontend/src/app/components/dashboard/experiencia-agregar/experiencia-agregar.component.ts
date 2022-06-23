import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/service/api/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-agregar',
  templateUrl: './experiencia-agregar.component.html',
  styleUrls: ['./experiencia-agregar.component.css']
})
export class ExperienciaAgregarComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();
  form: FormGroup; 

  constructor(private http: ExperienciaService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        nombreTrabajo:['',[Validators.required]],
        anios:['',[Validators.required]],
        descripcion:['',[Validators.required, Validators.maxLength(225)]],     
      }
    )
   }

  ngOnInit(): void {
    //console.log(this.experiencia)
  }

  get NombreTrabajo(){
    return this.form.get("nombreTrabajo")
  }

  get Anios(){
    return this.form.get("anios")
  }

  get Descripcion(){
    return this.form.get("descripcion")
  }

  guardar(event:Event) : any {
    event.preventDefault;
    if(this.experiencia.id){
      this.http.addExperiencia(this.experiencia)
      .subscribe((data:any) => {
        console.log(data)
        Swal.fire("Experiencia agregada con exito")
        window.location.reload()
      })
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }
}
