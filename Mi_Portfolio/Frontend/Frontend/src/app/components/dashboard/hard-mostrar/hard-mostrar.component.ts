import { HardService } from './../../../service/api/hard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hard } from 'src/app/models/Hard';

@Component({
  selector: 'app-hard-mostrar',
  templateUrl: './hard-mostrar.component.html',
  styleUrls: ['./hard-mostrar.component.css']
})
export class HardMostrarComponent implements OnInit {
  hardskills: Hard[] = [];
  hardskill: Hard = new Hard();

  constructor(private router:Router, private http: HardService) { }

  ngOnInit(): void {
    this.http.getHard()
      .subscribe(data =>{
        this.hardskills=data
      })
  }

  editarHard(idHard:number): any {
    localStorage.setItem("idHard", idHard.toString());
    this.router.navigate(['dashboard/editarHard'])
    localStorage.getItem("idHard")
    console.log(idHard)
    //window.location.reload()
  }

  eliminarHard(hardskill: Hard) {
    this.http.deleteHard(hardskill)
      .subscribe(data => {
        this.hardskills = this.hardskills.filter(p => p !== hardskill)
      })
  }
}
