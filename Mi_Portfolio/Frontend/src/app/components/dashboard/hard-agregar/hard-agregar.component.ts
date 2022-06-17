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
  hardskill:Hard = new Hard();

  constructor(private router:Router, private http:HardService) { }

  ngOnInit(): void {
    console.log(this.hardskill)
  }

  guardar(){
    
    if(this.hardskill.title){
    this.http.addHard(this.hardskill)
      .subscribe((data:any) => {
        console.log(data)
        alert("Hard Skill agregado con exito");
      })
      window.location.reload()
    }else{
      alert('El nombre de Hard skill que intentas registrar ya existe en BD ')
    }
    }
      
}
