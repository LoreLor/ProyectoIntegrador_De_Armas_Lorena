import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soft } from 'src/app/models/Soft';
import { SoftService } from 'src/app/service/api/soft.service';

@Component({
  selector: 'app-soft-agregar',
  templateUrl: './soft-agregar.component.html',
  styleUrls: ['./soft-agregar.component.css']
})
export class SoftAgregarComponent implements OnInit {
  soft:Soft = new Soft;

  constructor(private router:Router, private http: SoftService) { }

  ngOnInit(): void {
    console.log(this.soft)
  }

  guardar(){
    this.http.addSoft(this.soft)
      .subscribe(data => {
        console.log(data)
        alert("Soft Skill agregada con exito");
        this.router.navigate(["dashboard"])
        window.location.reload()
      })
  }
}
