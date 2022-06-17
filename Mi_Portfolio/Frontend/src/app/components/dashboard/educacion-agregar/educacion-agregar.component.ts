import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/service/api/educacion.service';

@Component({
  selector: 'app-educacion-agregar',
  templateUrl: './educacion-agregar.component.html',
  styleUrls: ['./educacion-agregar.component.css']
})
export class EducacionAgregarComponent implements OnInit {
  educacion:Educacion = new Educacion()

  constructor(private http:EducacionService) { }

  ngOnInit(): void {
    console.log(this.educacion)
  }

  guardar(): any{
    this.http.addEducacion(this.educacion)
      .subscribe(data => {
        console.log(data)
        alert("Educacion agregada con exito");
        window.location.reload()
      })
  }
}
