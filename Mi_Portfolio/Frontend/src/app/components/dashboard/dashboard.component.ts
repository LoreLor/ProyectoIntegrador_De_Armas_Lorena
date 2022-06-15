import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  personas:Persona[]=[]
  constructor(private router:Router, private http: PersonaService) { }

  ngOnInit(): void {
  
  }

  logout():void{
    this.router.navigate([''])
  }
}
