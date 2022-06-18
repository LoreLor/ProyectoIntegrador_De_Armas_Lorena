import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectosService } from 'src/app/service/api/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto:Proyecto = new Proyecto();
  proyectos:Proyecto[] = []

  constructor(private http:ProyectosService) { }

  ngOnInit(): void {
    this.http.getProyecto()
    .subscribe(data=>{
      this.proyectos= data
    })
  }
}
