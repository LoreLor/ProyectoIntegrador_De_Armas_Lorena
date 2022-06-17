import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soft } from 'src/app/models/Soft';
import { SoftService } from 'src/app/service/api/soft.service';

@Component({
  selector: 'app-soft-mostrar',
  templateUrl: './soft-mostrar.component.html',
  styleUrls: ['./soft-mostrar.component.css']
})
export class SoftMostrarComponent implements OnInit {
  softs:Soft[] = [];
  soft:Soft = new Soft();

  constructor(private router:Router, private http: SoftService) { }

  ngOnInit(): void {
    this.http.getSoft()
    .subscribe((data:any) => {
      this.softs=data;
    })
  }

  editarSoft(idSoft:number):any {
    localStorage.setItem("idSoft", idSoft.toString());
    this.router.navigate(['dashboard/editarSoft'])
    localStorage.getItem("idSoft")
    console.log(idSoft)
    //window.location.reload()
  }

  eliminarSoft(soft:Soft){
    this.http.deleteSoft(soft)
    .subscribe((data:any)=>{
      this.softs=this.softs.filter(p=>p !== soft)
      this.router.navigate(["dashboard"])
    })
  }
}
