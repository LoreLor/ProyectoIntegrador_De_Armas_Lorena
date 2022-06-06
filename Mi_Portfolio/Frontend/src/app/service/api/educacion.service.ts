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
  getEducacion(){
    return this.http.get<Educacion>(this.Url)
  }
  getEducacionById(id:number){
    return this.http.get<Educacion>(`${this.Url}/${id}`)
  }
  addEducacion(educacion:Educacion){
    return this.http.post<Educacion>(this.Url, educacion)
  }
  updateEducacion(educacion:Educacion){
    return this.http.put<Educacion>(`${this.Url}/${educacion.id}`, educacion)
  }
  deleteEducacion(educacion:Educacion){
    return this.http.delete<Educacion>(`${this.Url}/${educacion.id}`)
  }
}
