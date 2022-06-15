import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/service/api/experiencia.service';

@Component({
  selector: 'app-experiencia-mostrar',
  templateUrl: './experiencia-mostrar.component.html',
  styleUrls: ['./experiencia-mostrar.component.css']
})
export class ExperienciaMostrarComponent implements OnInit {

  experiencias:Experiencia[] = [];
  experiencia:Experiencia = new Experiencia();

  constructor(private http: ExperienciaService) { }

  ngOnInit(): void {
    this.http.getExperiencia()
    .subscribe((data:any) => 
      this.experiencias = data
    )
  }

  editarExperiencia(id:number) : void {
    localStorage.setItem("id", id.toString());
    console.log(id)
    localStorage.getItem("id")
    window.location.reload()
  }

  eliminarExperiencia(experiencia:Experiencia){
    this.http.deleteExperiencia(experiencia)
    .subscribe((data:any)=>{
      this.experiencias=this.experiencias.filter(p=>p !== experiencia)
    })
  }

}
