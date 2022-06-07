import { Component, OnInit } from '@angular/core';
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
  
  constructor(private router:Router, private http:EducacionService) { }

  ngOnInit(): void {
    this.editarEducacion()
    console.log(this.educacion)
  }

  editarEducacion():void{
    let id:any=localStorage.getItem("id")
    this.http.getEducacionById(id)
    .subscribe(data =>{
      this.educacion=data
        console.log(id)
    })  
  }

  actualizar(){
    this.http.updateEducacion(this.educacion)
    .subscribe(data =>{
      console.log(data)
        alert("Datos modificados con exito");
        this.router.navigate(["dashboard"])
        window.location.reload()
    })  
  }
}

