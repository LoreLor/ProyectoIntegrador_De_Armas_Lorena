import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acerca-de-agregar',
  templateUrl: './acerca-de-agregar.component.html',
  styleUrls: ['./acerca-de-agregar.component.css'],
})
export class AcercaDeAgregarComponent implements OnInit {
  persona: Persona = new Persona();

  constructor(private http: PersonaService) {}

  ngOnInit(): void {
    //console.log(this.persona)
  }

  guardar(event: Event): any {
    event.preventDefault;
    if (this.persona.nombres) {
      this.http.addPersona(this.persona)
        .subscribe((data) => {
          console.log(data);
          window.location.reload();
      });
      Swal.fire('Persona agregada con exito');
    } else {
      Swal.fire('Ooops!!! ... Revisa tus Inputs');
    }
  }

  changeImag(event: Event): any {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log('FileUpload -> files', fileList);
    }
    if (event) {
      console.log('event', event);
      const imagen = this.persona.imagenPerfil.split('C:\\fakepath\\');
      console.log(imagen);
      this.persona.imagenPerfil = imagen[1];
    }
  }
}
