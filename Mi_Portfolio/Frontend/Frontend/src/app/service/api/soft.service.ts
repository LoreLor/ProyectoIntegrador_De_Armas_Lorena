import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft } from 'src/app/models/Soft';


@Injectable({
  providedIn: 'root'
})
export class SoftService {
  Url=`${environment.URLBack}/api/softskills`;

  constructor(private http:HttpClient) { }

  /*METODOS*/
  public getSoft() : Observable<Soft[]>{
    return this.http.get<Soft[]>(this.Url)
  }
  public getSoftById(id:number) : Observable<Soft>{
    return this.http.get<Soft>(`${this.Url}/${id}`)
  }
  public addSoft(softskill:Soft): Observable<Soft>{
    return this.http.post<Soft>(this.Url, softskill)
  }
  public updateSoft(softskill:Soft): Observable<Soft>{
    return this.http.put<Soft>(`${this.Url}/${softskill.id}`, softskill)
  }
  public deleteSoft(softskill:Soft): Observable<Soft>{
    return this.http.delete<Soft>(`${this.Url}/${softskill.id}`)
  }
}
