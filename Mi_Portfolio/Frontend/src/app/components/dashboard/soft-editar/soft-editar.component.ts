import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Soft } from 'src/app/models/Soft';
import { SoftService } from 'src/app/service/api/soft.service';

@Component({
  selector: 'app-soft-editar',
  templateUrl: './soft-editar.component.html',
  styleUrls: ['./soft-editar.component.css']
})
export class SoftEditarComponent implements OnInit {
  soft:Soft = new Soft();
  form: FormGroup; 


  constructor(private router:Router, private http: SoftService, private FormBuilder:FormBuilder) { 
    this.form = this.FormBuilder.group(
      {
        title:['soft.title',[Validators.required,]],
        descripcion:['soft.desscripcion',[Validators.required, ]]
        
      }
    )
  }

  ngOnInit(): void {
    this.editarSoft()
    console.log(this.soft)
  }

  get Title(){
    return this.form.get("title")
  }

  get Descripcion(){
    return this.form.get("descripcion")
  }



  editarSoft():any{ 
    let idSoft:any = localStorage.getItem("idSoft")
    this.http.getSoftById(idSoft)
    .subscribe(data => {
      this.soft=data
      console.log(idSoft)
    })
  }

  actualizar(event:Event) : any {
    event.preventDefault;
    this.http.updateSoft(this.soft)
    .subscribe(data => {
      console.log(data)
      alert("SoftSkill creada con exito")
      this.router.navigate(['dashboard'])
    })
  }
}
