import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hard } from 'src/app/models/Hard';

@Injectable({
  providedIn: 'root'
})
export class HardService {
  Url=`${environment.URLBack}/api/hardskills`;

  constructor(private http:HttpClient) { }

  /*METODOS*/
  public getHard() : Observable<Hard[]>{
    return this.http.get<Hard[]>(this.Url)
  }
  public getHardById(id:number) : Observable<Hard>{
    return this.http.get<Hard>(`${this.Url}/${id}`)
  }
  public addHard(hardskills:Hard) : Observable<Hard>{
    return this.http.post<Hard>(this.Url, hardskills)
  }
  public updateHard(hardskills:Hard) : Observable<Hard>{
    return this.http.put<Hard>(`${this.Url}/${hardskills.id}`, hardskills)
  }
  public deleteHard(hardskills:Hard) : Observable<Hard>{
    return this.http.delete<Hard>(`${this.Url}/${hardskills.id}`)
  }
}
