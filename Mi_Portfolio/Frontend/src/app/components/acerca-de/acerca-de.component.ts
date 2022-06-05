import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/service/api/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  personas: Persona[] =[];
  persona: Persona = new Persona; 
  constructor(private router:Router, private http:PersonaService ) { }

  ngOnInit(): void {
    this.http.getPersona()
    .subscribe(data=>{
      this.personas=data; 
  })

  }




}

