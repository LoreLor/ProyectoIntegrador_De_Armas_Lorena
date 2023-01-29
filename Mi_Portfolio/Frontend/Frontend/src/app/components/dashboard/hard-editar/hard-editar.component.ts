import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hard } from 'src/app/models/Hard';
import { HardService } from 'src/app/service/api/hard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hard-editar',
  templateUrl: './hard-editar.component.html',
  styleUrls: ['./hard-editar.component.css']
})
export class HardEditarComponent implements OnInit {
  hardskill:Hard= new Hard();
  

  constructor(private router:Router, private http:HardService) {}

  ngOnInit(): void {
    this.editarHard()
    console.log(this.hardskill)
  }


  editarHard():any{
    let idHard:any=localStorage.getItem("idHard")
    this.http.getHardById(idHard)
    .subscribe((data:any) => {
      this.hardskill=data
      console.log(idHard)  
    })
  }

  actualizar(event:Event):any{
    event.preventDefault;
    this.http.updateHard(this.hardskill)
    .subscribe(data => {
      console.log(data)
      Swal.fire("HardSkill modificada con exito")  
      this.router.navigate(['dashboard'])  
    })
  }
}
