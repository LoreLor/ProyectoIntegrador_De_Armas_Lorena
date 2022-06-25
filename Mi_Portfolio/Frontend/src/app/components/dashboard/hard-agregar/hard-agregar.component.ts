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

  constructor(private http:HardService) {}

  ngOnInit(): void {
    //console.log(this.hardskill)
  }

  guardar(event:Event): any{
    event.preventDefault;
    if(this.hardskill.title){
    this.http.addHard(this.hardskill)
      .subscribe((data:any) => {
        console.log(data)
        window.location.reload()
      })
      Swal.fire("Hard Skill agregado con exito");
    }else{
      Swal.fire('Ooops!!! ... Revisa tus Inputs')
    }
  }  
}
