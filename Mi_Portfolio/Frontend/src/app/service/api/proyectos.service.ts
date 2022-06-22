import { URLBack } from 'src/app/server';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  Url=`${URLBack}/api/proyectos`;

  constructor(private http:HttpClient) { }

  /*METODOS*/
  public getProyecto() : Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.Url)
  }
  public getProyectoId(id:number) : Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.Url}/${id}`)
  }
  public addProyecto(proyecto:Proyecto) : Observable<Proyecto>{
    return this.http.post<Proyecto>(this.Url, proyecto)
  }
  public updateProyecto(proyecto:Proyecto) : Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.Url}/${proyecto.id}`, proyecto)
  }
  public deleteProyecto(proyecto:Proyecto) : Observable<Proyecto>{
    return this.http.delete<Proyecto>(`${this.Url}/${proyecto.id}`)
  }


}
