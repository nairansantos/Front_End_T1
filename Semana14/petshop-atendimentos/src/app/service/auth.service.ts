import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Usuario } from '../model/user.model';


interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario = new BehaviorSubject<Usuario>(new Usuario('', '', '', new Date()));


  constructor(private http: HttpClient) { }

  signupUser(email: string, password: string) {

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPv56lTY2zpJBbC2kDTk02LUMsHI2cfHE', 
    {
       email: email,
       password: password,
       returnSecureToken: true
    }).pipe(
       tap(resData => {
         const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
         const usuario = new Usuario(
           resData.email,
           resData.localId,
           resData.idToken,
           expiracaoData
         );
         this.usuario.next(usuario);
         localStorage.setItem('userData', JSON.stringify(usuario));
       }),
       catchError(error => {
        console.error(error);
        alert('Ocorreu um erro no registro. Por favor, tente novamente.')
        return throwError(error);
      })
    );
   }

  loginUser(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPv56lTY2zpJBbC2kDTk02LUMsHI2cfHE',
    {
      email: email,
      password: password,
      returnSecureToken: true
   }).pipe(
    tap(resData => {
      const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const usuario = new Usuario(
          resData.email,
          resData.localId,
          resData.idToken,
          expiracaoData
        );
        this.usuario.next(usuario);
        localStorage.setItem('userData', JSON.stringify(usuario));
    }),
    catchError(error => {
     console.error(error);
     alert('Ocorreu um erro no login. Por favor, tente novamente.')

     return throwError(error);
   })
   );
  }

  autoLogin() {

    const userData :{
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    
    } = JSON.parse(localStorage.getItem('userData') as string);
    if(!userData) {
      return;
    }

    const loadedUser = new Usuario(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {

      this.usuario.next(loadedUser);
    }


  }

  logout() {
    this.usuario.next(new Usuario('', '', '', new Date()));
    localStorage.removeItem('userData');
  }


}
