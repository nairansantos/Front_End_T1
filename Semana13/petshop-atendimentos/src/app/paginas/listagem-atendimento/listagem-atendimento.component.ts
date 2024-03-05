import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { atendimento } from '../../typescript/atendimento';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem-atendimento',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './listagem-atendimento.component.html',
  styleUrl: './listagem-atendimento.component.css'
})
export class ListagemAtendimentoComponent {
  public listaAtendimentos: atendimento[] =[]
  constructor(private serviceFirebase: ApiService) {}

  ngOnInit(){

    this.serviceFirebase.getTodosAtendimentos().subscribe((atendimentos)=>{
      this.listaAtendimentos = atendimentos
      console.log("atendimentos",atendimentos)
    })
  }

  excluirAtendimentos(){
    this.serviceFirebase.apagarTodosAtendimentos()
    window.location.reload()
  }
  
}
