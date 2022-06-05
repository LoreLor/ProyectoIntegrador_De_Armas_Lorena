import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from 'src/app/models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  Url="http://localhost:8080/api/persona";

  constructor(private http: HttpClient) { }

  /*METODOS*/
  getPersona(){
    return this.http.get<Persona[]>(this.Url)
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(`${this.Url}/${id}`)
  }
  addPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona)
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(`${this.Url}/${persona.id}`, persona)
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(`${this.Url}/${persona.id}`)
  }

}
