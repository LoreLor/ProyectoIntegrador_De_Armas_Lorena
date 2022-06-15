import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/service/api/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias:Experiencia[] =[];
  experiencia:Experiencia = new Experiencia();

  constructor(private http:ExperienciaService) { }

  ngOnInit(): void {
    this.http.getExperiencia()
    .subscribe((data:any) => {
      this.experiencias = data
    })
  }

}
