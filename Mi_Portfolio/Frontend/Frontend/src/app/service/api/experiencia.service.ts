import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/models/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  Url=`${environment.URLBack}/api/experiencia`;

  constructor(private http: HttpClient) { }

  /*METODOS*/
  public getExperiencia() : Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.Url)
  }
  public getExperienciaById(id:number) : Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.Url}/${id}`)
  }
  public addExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.Url, experiencia)
  }
  public updateExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.Url}/${experiencia.id}`, experiencia)
  }
  public deleteExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.delete<Experiencia>(`${this.Url}/${experiencia.id}`)
  }
}
