import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/service/api/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion-agregar',
  templateUrl: './educacion-agregar.component.html',
  styleUrls: ['./educacion-agregar.component.css']
})
export class EducacionAgregarComponent implements OnInit {
  educacion:Educacion = new Educacion();

  constructor(private http:EducacionService) {}

  ngOnInit(): void {
    //console.log(this.educacion)
  }

  guardar(event:Event): any{
    if(this.educacion.nombre){
      event.preventDefault;
        this.http.addEducacion(this.educacion)
          .subscribe(data => {
            console.log(data)
            window.location.reload()
          })
          Swal.fire("Educacion agregada con exito");
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }
}



