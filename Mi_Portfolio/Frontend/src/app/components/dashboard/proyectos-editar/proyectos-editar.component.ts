import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectosService } from 'src/app/service/api/proyectos.service';

@Component({
  selector: 'app-proyectos-editar',
  templateUrl: './proyectos-editar.component.html',
  styleUrls: ['./proyectos-editar.component.css']
})
export class ProyectosEditarComponent implements OnInit {
  proyecto:Proyecto = new Proyecto();

  constructor(private http:ProyectosService) { }

  ngOnInit(): void {
    this.editarProyecto()
    console.log(this.proyecto)
  }

  editarProyecto():any{
    let id:any=localStorage.getItem("id")
    this.http.getProyectoId(id)
    .subscribe(data =>{
      this.proyecto=data
        console.log(id)
    })  
  }

  actualizar():any{
    if(this.proyecto.id){
      this.http.updateProyecto(this.proyecto)
      .subscribe(data =>{
        console.log(data)
        alert("Datos modificados con exito");
        //window.location.reload()
      })

    }else{
      alert('El proyecto que intentas modificar no existe en base de datos')
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
