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
  educaciones:Educacion[]=[];
  educacion: Educacion = new Educacion;
  constructor(private router:Router, private http:EducacionService) { }


  

  ngOnInit(): void {
    this.http.getEducacion()
    .subscribe(data =>{
      this.educaciones;
    })
  }

  eliminarEducacion(educacion:Educacion){
    this.http.deleteEducacion(educacion)
    .subscribe(data=>{
      this.educaciones=this.educaciones.filter(p=>p !== educacion)
      this.router.navigate(["dashboard"])
    })
  }

}
