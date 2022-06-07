import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hard } from 'src/app/models/Hard';
import { HardService } from 'src/app/service/api/hard.service';

@Component({
  selector: 'app-hard-agregar',
  templateUrl: './hard-agregar.component.html',
  styleUrls: ['./hard-agregar.component.css']
})
export class HardAgregarComponent implements OnInit {
  hard:Hard = new Hard;

  constructor(private router:Router, private http:HardService) { }

  ngOnInit(): void {
    console.log(this.hard)
  }

  guardar(){
    this.http.addHard(this.hard)
      .subscribe(data => {
        console.log(data)
        alert("Hard Skill agregado con exito");
        this.router.navigate(["dashboard"])
        window.location.reload()
      })
    }
}
