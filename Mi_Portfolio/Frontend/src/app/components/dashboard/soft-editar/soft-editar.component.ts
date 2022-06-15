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

  constructor(private router:Router, private http: SoftService) { }

  ngOnInit(): void {
    this.editarSoft()
    console.log(this.soft)
  }

  editarSoft():void{
    let id:any = localStorage.getItem("id")
    this.http.getSoftById(id)
    .subscribe((data:any) => {
      this.soft=data
      console.log(id)
    })
  }

  actualizar() : void {
    this.http.updateSoft(this.soft)
    .subscribe((data:any) => {
      console.log(data)
      alert("SoftSkill creada con exito")
    })
  }
}
