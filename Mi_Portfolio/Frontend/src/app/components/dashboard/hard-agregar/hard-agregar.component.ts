import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hard } from 'src/app/models/Hard';
import { HardService } from 'src/app/service/api/hard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hard-agregar',
  templateUrl: './hard-agregar.component.html',
  styleUrls: ['./hard-agregar.component.css']
})
export class HardAgregarComponent implements OnInit {
  hardskill:Hard = new Hard();
  form:FormGroup;

  constructor(private router:Router, private http:HardService, private FormBuilder:FormBuilder) {
    this.form = this.FormBuilder.group(
      {
        title:['',[Validators.required]],
        percent:['',[Validators.required, Validators.min(1), Validators.max(100)]]
      }
    )
   }

  ngOnInit(): void {
    //console.log(this.hardskill)
  }

  get Title(){
    return this.form.get("title")
  } 

  get Percent(){
    return this.form.get("percent")
  }

  guardar(event:Event){
    event.preventDefault;
    if(this.hardskill.title){
    this.http.addHard(this.hardskill)
      .subscribe((data:any) => {
        console.log(data)
        alert("Hard Skill agregado con exito");
      })
      window.location.reload()
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
    }
      
}
