import { Routes } from '@angular/router';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { EdicaoAtendimentoComponent } from './paginas/edicao-atendimento/edicao-atendimento.component';
import { ListagemAtendimentoComponent } from './paginas/listagem-atendimento/listagem-atendimento.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroUsuarioComponent } from './paginas/cadastro-usuario/cadastro-usuario.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

export const routes: Routes = [
    {path: "", component: PrincipalComponent},
    {path: "cadastro", component: CadastroComponent},

    {path: "listagem", component: ListagemAtendimentoComponent},
    {path: "edicao/:id", component:  EdicaoAtendimentoComponent},

    {path: "cadastro-usuario", component: CadastroUsuarioComponent},
    {path: "login", component: LoginComponent},

];
