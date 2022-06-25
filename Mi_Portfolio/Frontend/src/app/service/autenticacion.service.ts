import { URLBack } from './../server';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  Url = `${URLBack}/api/signin`;
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log('Servicio de auth corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  Login(credenciales: any) : Observable<any>{
    return this.http.post(this.Url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
