import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Soft } from 'src/app/models/Soft';
import { SoftService } from 'src/app/service/api/soft.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soft-editar',
  templateUrl: './soft-editar.component.html',
  styleUrls: ['./soft-editar.component.css']
})
export class SoftEditarComponent implements OnInit {
  softskill:Soft = new Soft();
  

  constructor(private router:Router, private http: SoftService) {}

  ngOnInit(): void {
    this.editarSoft()
    console.log(this.softskill)
  }

  editarSoft():any{ 
    let idSoft:any = localStorage.getItem("idSoft")
    this.http.getSoftById(idSoft)
    .subscribe(data => {
      this.softskill=data
      console.log(idSoft)
    })
  }

  actualizar(event:Event) : any {
    event.preventDefault;
    this.http.updateSoft(this.softskill)
    .subscribe(data => {
      console.log(data)
      Swal.fire("SoftSkill creada con exito")
      this.router.navigate(['dashboard'])
    })
  }
}
