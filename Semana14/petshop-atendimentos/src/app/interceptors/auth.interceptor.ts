import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpParams, HttpRequest } from '@angular/common/http';
import { AuthService} from "../service/auth.service"
import { Observable, exhaustMap, take } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authServico: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authServico.usuario.pipe(
      take(1),
      exhaustMap(usuario => {
        if(!usuario){
          return next.handle(request);
        }
        const requestModificado = request.clone({
          params: new HttpParams().set('auth', usuario.token!)
        });
        return next.handle(requestModificado);
      }
      ),
    );
  }
}