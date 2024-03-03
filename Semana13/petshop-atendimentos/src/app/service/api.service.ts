import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //https://projeto-aulafront-default-rtdb.firebaseio.com/

  loadedAtendimento = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  addAtendimento(atendimentoData: {
    NomePassageiro: string;
    numeroVoo: string;
    dataPartida: string;
    dataChegada: string;
    aeroportoPartida: string;
    aeroportoChegada: string;
  }) {
    this.http
      .post(
        'https://projeto-aulafront-default-rtdb.firebaseio.com/atendimentoData',
        atendimentoData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getAtendimento() {
    //generics da interface Ticket
    //vem do firebase nesse formato
    //ahsduiashuhui:Object
    //dasdasdasdasd:Object
    return this.http
      .get<{ [key: string]: any }>(
        'https://projeto-aulafront-default-rtdb.firebaseio.com/atendimentoData',
        {
          params: new HttpParams().set('print', 'pretty'),
        }
      )
      .pipe(
        map((responseData) => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...(responseData as any)[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  apagarTodosTickets() {
    return this.http.delete(
      'https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json'
    );
  }

  editarTicket(
    id: string,
    ticketData: {
      NomePassageiro: string;
      numeroVoo: string;
      dataPartida: string;
      dataChegada: string;
      aeroportoPartida: string;
      aeroportoChegada: string;
    }
  ) {
    return this.http.put(
      `https://aula13-3a92f-default-rtdb.firebaseio.com/posts/${id}.json`,
      ticketData,
      { observe: 'response' }
    );
  }
}
