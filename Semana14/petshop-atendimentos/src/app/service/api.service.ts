import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { atendimento } from '../typescript/atendimento';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //https://projeto-aulafront-default-rtdb.firebaseio.com/

  loadedAtendimento = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }



  addAtendimento(novoAtendimento:atendimento) {

    this.http.post(
      'https://projeto-aulafront-default-rtdb.firebaseio.com/posts.json',
      novoAtendimento)
      .subscribe(responseData => {
        console.log(responseData);
        alert("Serviço agendado")
      });
  }


  getTodosAtendimentos() {
 
    return this.http.get<{ [key: string]: atendimento }>('https://projeto-aulafront-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    ).pipe(
      catchError( error =>{
        console.error(error);
       
        return throwError(error);
      }), map(responseData => {
        // Convertendo o objeto de resposta em um array de objetos
        if (responseData) {
          return Object.keys(responseData).map(key => ({ id: key, ...responseData[key] }));
        } else {
          return [];
        }
      })
     
    )
  }

  apagarTodosAtendimentos() {
    return this.http.delete('https://projeto-aulafront-default-rtdb.firebaseio.com/posts.json').subscribe(()=>{
      alert("Agendamentos apagados")

    })
  }


  getAtendimentoPorId(id: string) {
    return this.http.get<atendimento>(`https://projeto-aulafront-default-rtdb.firebaseio.com/posts/${id}.json`);
  }

  editarAtendimento(id: string, novoAtendimento: atendimento
  ) {
    return this.http.put(`https://projeto-aulafront-default-rtdb.firebaseio.com/posts/${id}.json`, novoAtendimento, { observe: 'response' }).subscribe(()=>{
      alert(" Agendado Editado")

    })
  }
}
