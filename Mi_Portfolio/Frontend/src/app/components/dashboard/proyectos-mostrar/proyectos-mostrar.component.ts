import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectosService } from 'src/app/service/api/proyectos.service';

@Component({
  selector: 'app-proyectos-mostrar',
  templateUrl: './proyectos-mostrar.component.html',
  styleUrls: ['./proyectos-mostrar.component.css']
})
export class ProyectosMostrarComponent implements OnInit {
  proyectos:Proyecto[] = [];
  proyecto:Proyecto = new Proyecto();
  constructor(private http:ProyectosService) { }

  ngOnInit(): void {
    this.http.getProyecto()
    .subscribe((data:any)=>
    this.proyectos = data
    )
  }

  editarProyecto(id:number) : any {
    localStorage.setItem("id", id.toString());
    console.log(id)
    localStorage.getItem("id")
    window.location.reload()
  }

  eliminarProyecto(proyecto:Proyecto) : any {
    this.http.deleteProyecto(proyecto)
    .subscribe((data:any) =>{
      this.proyectos = this.proyectos.filter(p=>p !== proyecto)
    })
  }

}
