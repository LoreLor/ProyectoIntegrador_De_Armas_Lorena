import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/service/api/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-editar',
  templateUrl: './experiencia-editar.component.html',
  styleUrls: ['./experiencia-editar.component.css']
})
export class ExperienciaEditarComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();

  constructor(private http:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    this.editarExperiencia()
    console.log(this.experiencia)
  }

  editarExperiencia():any{
    let idExperiencia:any=localStorage.getItem("idExperiencia")
    this.http.getExperienciaById(idExperiencia)
    .subscribe(data => {
      this.experiencia=data
      console.log(idExperiencia)
    })
  }

  actualizar(event:Event): any{
    event.preventDefault;
    this.http.updateExperiencia(this.experiencia)
    .subscribe(data =>{
      console.log(data)
      Swal.fire("Experiencia modificada con exito")
      //window.location.reload()
    })
    this.router.navigate(["dashboard"])
  }

}
