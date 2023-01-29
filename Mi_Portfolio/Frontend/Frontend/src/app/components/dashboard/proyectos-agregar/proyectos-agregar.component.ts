import { ThisReceiver } from '@angular/compiler';
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

  constructor(private http: ProyectosService) {}

  ngOnInit(): void {
    //console.log(this.proyecto)
  }

  guardar(event:Event):any{
    event.preventDefault;
    if(this.proyecto.nombre){
      this.http.addProyecto(this.proyecto)
      .subscribe(data=>{
        console.log(data);
        window.location.reload();
      })    
      Swal.fire('Proyecto agregado con exito')
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }
  

  changeImag(event:Event):any{
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log('FileUpload -> files', fileList);
    }
    if (event) {
      console.log('event', event);
      const imagen = this.proyecto.imagenProyecto.split('C:\\fakepath\\');
      console.log(imagen);
      this.proyecto.imagenProyecto = imagen[1];
    }
  }
}
