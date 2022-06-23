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
  form:FormGroup;

  constructor(private router:Router, private http: SoftService, private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group(
      {
        title:['',[Validators.required]],
        descripcion:['',[Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    //console.log(this.soft)
  }

  get Title(){
    return this.form.get("title")
  }

  get Descripcion(){
    return this.form.get("descripcion")
  }

  guardar(event:Event){
    event.preventDefault;
    if(this.soft.id){
      this.http.addSoft(this.soft)
        .subscribe(data => {
          console.log(data)
          Swal.fire("Soft Skill agregada con exito");
          this.router.navigate(["dashboard"])
          window.location.reload()
        })
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }
}
