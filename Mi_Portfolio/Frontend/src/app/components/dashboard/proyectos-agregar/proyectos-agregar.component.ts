import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectosService } from 'src/app/service/api/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos-agregar',
  templateUrl: './proyectos-agregar.component.html',
  styleUrls: ['./proyectos-agregar.component.css']
})
export class ProyectosAgregarComponent implements OnInit {
  proyecto:Proyecto = new Proyecto;
  form:FormGroup;

  constructor(private http: ProyectosService, private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group(
      {
        nombre:['',[Validators.required]],
        stack:['',[Validators.required]],
        descripcion:['',[Validators.required, Validators.maxLength(250)]],
        imagenProyecto:['',[Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    //console.log(this.proyecto)
  }

  get Nombre(){
    return this.form.get("nombre")
  }

  get Stack(){
    return this.form.get("stack")
  }

  get Descripcion(){
    return this.form.get("descripcion")
  }

  get ImagenProyecto(){
    return this.form.get("imagenProyecto")
  }

  guardar(event:Event):any{
    event.preventDefault;
    if(!this.proyecto.nombre){
      this.http.addProyecto(this.proyecto)
      .subscribe(data=>{
        console.log(data)
        Swal.fire('Proyecto agregado con exito')
      })    
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }

  changeImag(event:Event):any{
    if(event){
      const imagen= this.proyecto.imagenProyecto.split('C:\\fakepath\\')
      console.log(imagen)
      this.proyecto.imagenProyecto=imagen[1]
      }
    }
}
