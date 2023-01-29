import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private http: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    this.http.getExperiencia()
    .subscribe(data => 
      this.experiencias = data
    )
  }

  editarExperiencia(idExperiencia:number) : any {
    localStorage.setItem("idExperiencia", idExperiencia.toString());
    this.router.navigate(['dashboard/editarExperiencia'])
    console.log(idExperiencia)
    localStorage.getItem("idExperiencia")
    //window.location.reload()
  }

  eliminarExperiencia(experiencia:Experiencia) : any{
    this.http.deleteExperiencia(experiencia)
    .subscribe(data=>{
      this.experiencias=this.experiencias.filter(p=>p !== experiencia)
    })
  }

}
