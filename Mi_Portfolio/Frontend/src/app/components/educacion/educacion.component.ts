import { EducacionService } from './../../service/api/educacion.service';
import { Educacion } from './../../models/Educacion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = [];
  educacion: Educacion = new Educacion();
  constructor(private router: Router, private http: EducacionService) { }


  ngOnInit(): void {
    this.http.getEducacion()
      .subscribe((data:any) => {
        this.educaciones=data;
      })
  }
}
