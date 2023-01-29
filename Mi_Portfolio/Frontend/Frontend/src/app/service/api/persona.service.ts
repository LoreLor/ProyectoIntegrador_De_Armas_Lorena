import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from 'src/app/models/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  Url=`${environment.URLBack}/api/persona`;

  constructor(private http: HttpClient) { }

  /*METODOS*/
  public getPersona() : Observable<Persona[]>{
    return this.http.get<Persona[]>(this.Url)
  }
  public getPersonaId(id:number) : Observable<Persona>{
    return this.http.get<Persona>(`${this.Url}/${id}`)
  }
  public addPersona(persona:Persona) : Observable<Persona>{
    return this.http.post<Persona>(this.Url, persona)
  }
  public updatePersona(persona:Persona) : Observable<Persona>{
    return this.http.put<Persona>(`${this.Url}/${persona.id}`, persona)
  }
  public deletePersona(persona:Persona) : Observable<Persona>{
    return this.http.delete<Persona>(`${this.Url}/${persona.id}`)
  }

}
