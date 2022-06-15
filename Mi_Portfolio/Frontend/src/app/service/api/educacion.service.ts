import { Observable } from 'rxjs';
import { Educacion } from './../../models/Educacion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  Url="http://localhost:8080/api/educacion";

  constructor(private http: HttpClient) { }

  /*METODOS*/
  public getEducacion() : Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.Url)
  }
  public getEducacionById(id:number) : Observable<Educacion>{
    return this.http.get<Educacion>(`${this.Url}/${id}`)
  }
  public addEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.Url, educacion)
  }
  public updateEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(`${this.Url}/${educacion.id}`, educacion)
  }
  public deleteEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.delete<Educacion>(`${this.Url}/${educacion.id}`)
  }
}
