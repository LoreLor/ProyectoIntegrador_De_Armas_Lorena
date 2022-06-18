import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectosService } from 'src/app/service/api/proyectos.service';

@Component({
  selector: 'app-proyectos-agregar',
  templateUrl: './proyectos-agregar.component.html',
  styleUrls: ['./proyectos-agregar.component.css']
})
export class ProyectosAgregarComponent implements OnInit {
  proyecto:Proyecto = new Proyecto

  constructor(private http: ProyectosService) { }

  ngOnInit(): void {
    console.log(this.proyecto)
  }

  guardar():any{
    this.http.addProyecto(this.proyecto)
    .subscribe(data=>{
      console.log(data)
      alert('Proyecto agregado con exito')
    })
  }

  changeImag(event:Event):any{
    if(event){
      const imagen= this.proyecto.imagenProyecto.split('C:\\fakepath\\')
      console.log(imagen)
      this.proyecto.imagenProyecto=imagen[1]
      }
    }
}
