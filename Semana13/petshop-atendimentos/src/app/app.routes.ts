import { Routes } from '@angular/router';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { EdicaoAtendimentoComponent } from './paginas/edicao-atendimento/edicao-atendimento.component';
import { ListagemAtendimentoComponent } from './paginas/listagem-atendimento/listagem-atendimento.component';

export const routes: Routes = [
    {path: "", component: CadastroComponent},
    {path: "listagem", component: ListagemAtendimentoComponent},
    {path: "edicao/:id", component:  EdicaoAtendimentoComponent}

];
