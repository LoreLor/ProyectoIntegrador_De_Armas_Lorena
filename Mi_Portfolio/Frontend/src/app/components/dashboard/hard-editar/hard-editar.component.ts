import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hard } from 'src/app/models/Hard';
import { HardService } from 'src/app/service/api/hard.service';

@Component({
  selector: 'app-hard-editar',
  templateUrl: './hard-editar.component.html',
  styleUrls: ['./hard-editar.component.css']
})
export class HardEditarComponent implements OnInit {
  hard:Hard= new Hard;

  constructor(private router:Router, private http:HardService) { }

  ngOnInit(): void {
    this.editarHard()
    console.log(this.hard)
  }

  editarHard():void{
    let id:any=localStorage.getItem("id")
    this.http.getHardById(id)
    .subscribe((data:any) => {
      this.hard=data
      console.log(id)  
    })
  }

  actualizar():void{
    this.http.updateHard(this.hard)
    .subscribe((data:any) => {
      console.log(data)
      alert("HardSkill creada con exito")
      this.router.navigate(["dashboard"])
      window.location.reload()
    })
  }
}
