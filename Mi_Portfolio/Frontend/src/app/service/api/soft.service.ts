import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Soft } from 'src/app/models/Soft';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
  Url="http://localhost:8080/api/softskills";

  constructor(private http1:HttpClient) { }

  /*METODOS*/
  getSoft(){
    return this.http1.get<Soft>(this.Url)
  }
  getSoftById(id:number){
    return this.http1.get<Soft>(`${this.Url}/${id}`)
  }
  addSoft(soft:Soft){
    return this.http1.post<Soft>(this.Url, soft)
  }
  updateSoft(soft:Soft){
    return this.http1.put<Soft>(`${this.Url}/${soft.id}`, soft)
  }
  deleteSoft(soft:Soft){
    return this.http1.delete<Soft>(`${this.Url}/${soft.id}`)
  }
}
