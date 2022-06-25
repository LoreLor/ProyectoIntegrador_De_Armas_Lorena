import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectosService } from 'src/app/service/api/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos-editar',
  templateUrl: './proyectos-editar.component.html',
  styleUrls: ['./proyectos-editar.component.css']
})
export class ProyectosEditarComponent implements OnInit {
  proyecto:Proyecto = new Proyecto();

  constructor(private router:Router, private http:ProyectosService) {}

  ngOnInit(): void {
    this.editarProyecto()
    console.log(this.proyecto)
  }


  editarProyecto():any{
    let idproyecto:any=localStorage.getItem("idproyecto")
    this.http.getProyectoId(idproyecto)
    .subscribe(data =>{
      this.proyecto=data
        console.log(idproyecto)
    })  
  }

  actualizar(event:Event):any{
    event.preventDefault;
    if(this.proyecto.id){
      this.http.updateProyecto(this.proyecto)
      .subscribe(data =>{
        console.log(data)
        Swal.fire("Datos modificados con exito");
        //window.location.reload()
        this.router.navigate(["dashboard"])
      })

    }else{
      Swal.fire('El proyecto que intentas modificar no existe en base de datos')
    }
  } 

  changeImag(event:Event):any{
    if(event){
      const imagen= this.proyecto.imagenProyecto.split('C:\\fakepath\\')
      console.log(imagen)
      this.proyecto.imagenProyecto=imagen[1]
      }
    }
  

}
