import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soft } from 'src/app/models/Soft';
import { SoftService } from 'src/app/service/api/soft.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soft-agregar',
  templateUrl: './soft-agregar.component.html',
  styleUrls: ['./soft-agregar.component.css']
})
export class SoftAgregarComponent implements OnInit {
  soft:Soft = new Soft();

  constructor(private http: SoftService) { }

  ngOnInit(): void {
    //console.log(this.soft)
  }

  guardar(event:Event){
    event.preventDefault;
    if(this.soft.title){
      this.http.addSoft(this.soft)
        .subscribe(data => {
          console.log(data)
          window.location.reload()
        })
        Swal.fire("Soft Skill agregada con exito");
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }
}
