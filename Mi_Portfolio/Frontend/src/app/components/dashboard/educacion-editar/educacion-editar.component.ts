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
    let idEducacion:any=localStorage.getItem("idEducacion")
    this.http.getEducacionById(idEducacion)
    .subscribe(data =>{
      this.educacion=data
        console.log(idEducacion)
    })  
  }

  actualizar(): any{
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

