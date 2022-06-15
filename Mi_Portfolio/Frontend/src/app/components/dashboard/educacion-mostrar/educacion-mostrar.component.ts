import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/service/api/educacion.service';

@Component({
  selector: 'app-educacion-mostrar',
  templateUrl: './educacion-mostrar.component.html',
  styleUrls: ['./educacion-mostrar.component.css']
})
export class EducacionMostrarComponent implements OnInit {
  
  educaciones:Educacion[] = [];
  educacion:Educacion = new Educacion();

  constructor(private http: EducacionService) { }

  ngOnInit(): void {
    this.http.getEducacion()
     .subscribe((data:any) => 
      this.educaciones = data
    )
  }

  editarEducacion(id:number): void{
    localStorage.setItem("id", id.toString());
    console.log(id)
    localStorage.getItem("id")
    window.location.reload()
  }

  eliminarEducacion(educacion:Educacion){
    this.http.deleteEducacion(educacion)
    .subscribe((data:any)=>{
      this.educaciones=this.educaciones.filter(p=>p !== educacion)
    })
  }



}
