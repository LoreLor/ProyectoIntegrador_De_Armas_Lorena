import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hard } from 'src/app/models/Hard';

@Injectable({
  providedIn: 'root'
})
export class HardService {
  Url="http://localhost:8080/api/hardskills";

  constructor(private http:HttpClient) { }

  /*METODOS*/
  getHard(){
    return this.http.get<Hard>(this.Url)
  }
  getHardById(id:number){
    return this.http.get<Hard>(`${this.Url}/${id}`)
  }
  addHard(hard:Hard){
    return this.http.post<Hard>(this.Url, hard)
  }
  updateHard(hard:Hard){
    return this.http.put<Hard>(`${this.Url}/${hard.id}`, hard)
  }
  deleteHard(hard:Hard){
    return this.http.delete<Hard>(`${this.Url}/${hard.id}`)
  }
}
