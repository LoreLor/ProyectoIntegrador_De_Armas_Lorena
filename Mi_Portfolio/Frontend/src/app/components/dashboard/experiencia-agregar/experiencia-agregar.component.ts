import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/service/api/experiencia.service';

@Component({
  selector: 'app-experiencia-agregar',
  templateUrl: './experiencia-agregar.component.html',
  styleUrls: ['./experiencia-agregar.component.css']
})
export class ExperienciaAgregarComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();
  experiencias:Experiencia[] = [];

  constructor(private http: ExperienciaService) { }

  ngOnInit(): void {
    console.log(this.experiencia)
  }

  guardar() : any {
    this.http.addExperiencia(this.experiencia)
    .subscribe((data:any) => {
      console.log(data)
      alert("Experiencia agregada con exito")
      window.location.reload()
    })
  }
}
