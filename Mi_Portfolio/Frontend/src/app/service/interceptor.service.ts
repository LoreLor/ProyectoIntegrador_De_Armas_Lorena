import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionService: AutenticacionService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    let currentUser= this.autenticacionService.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      req= req.clone({
        setHeaders:{
          Authorization:`Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log('interceptor corriendo', JSON.stringify(currentUser));
    return next.handle(req)
  }
}
