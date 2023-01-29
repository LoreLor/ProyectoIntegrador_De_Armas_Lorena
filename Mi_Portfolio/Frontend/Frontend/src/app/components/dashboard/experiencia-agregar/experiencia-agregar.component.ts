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

  constructor(private http: ExperienciaService) {}

  ngOnInit(): void {
    //console.log(this.experiencia)
  }

  guardar(event:Event) : any {
    event.preventDefault;
    if(this.experiencia.nombreTrabajo){
      this.http.addExperiencia(this.experiencia)
      .subscribe((data:any) => {
        console.log(data)
        window.location.reload()
      })
      Swal.fire("Experiencia agregada con exito")
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }
}
