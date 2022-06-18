import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router, private http:ProyectosService) { }

  ngOnInit(): void {
    this.http.getProyecto()
    .subscribe(data=>{
      this.proyectos = data
    })
  }

  editarProyecto(idproyecto:number) : any {
    localStorage.setItem("idproyecto", idproyecto.toString());
    this.router.navigate(['dashboard/editarProyecto'])
    localStorage.getItem("id")
    console.log(idproyecto)
    //window.location.reload()
  }

  eliminarProyecto(proyecto:Proyecto) : any {
    this.http.deleteProyecto(proyecto)
      .subscribe(data =>{
      this.proyectos = this.proyectos.filter(p=>p !== proyecto)
      this.router.navigate(["dashboard"])
    })
  }

}
