import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/service/api/experiencia.service';

@Component({
  selector: 'app-experiencia-editar',
  templateUrl: './experiencia-editar.component.html',
  styleUrls: ['./experiencia-editar.component.css']
})
export class ExperienciaEditarComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();

  constructor(private http:ExperienciaService) { }

  ngOnInit(): void {
    let id:any=localStorage.getItem("id")
    this.http.getExperienciaById(id)
    .subscribe((data:any) => {
      this.experiencia=data
      console.log(id)
    })
  }

  actualizar(): any{
    this.http.updateExperiencia(this.experiencia)
    .subscribe((data:any) =>{
      console.log(data)
      alert("Experiencia modificada con exito")
      window.location.reload()
    })
  }

}
