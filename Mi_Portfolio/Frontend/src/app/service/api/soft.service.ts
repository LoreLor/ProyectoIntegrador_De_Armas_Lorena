import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft } from 'src/app/models/Soft';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
  Url="http://localhost:8080/api/softskills";

  constructor(private http:HttpClient) { }

  /*METODOS*/
  public getSoft() : Observable<Soft[]>{
    return this.http.get<Soft[]>(this.Url)
  }
  public getSoftById(id:number) : Observable<Soft>{
    return this.http.get<Soft>(`${this.Url}/${id}`)
  }
  public addSoft(soft:Soft): Observable<Soft>{
    return this.http.post<Soft>(this.Url, soft)
  }
  public updateSoft(soft:Soft): Observable<Soft>{
    return this.http.put<Soft>(`${this.Url}/${soft.id}`, soft)
  }
  public deleteSoft(soft:Soft): Observable<Soft>{
    return this.http.delete<Soft>(`${this.Url}/${soft.id}`)
  }
}
