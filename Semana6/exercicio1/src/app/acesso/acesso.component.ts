import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  standalone: true,
  imports: [],
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permissao:string ='';
  lista_permitidos : string[]= ["root", "admin", "visitante"];
  habilita : boolean = true;

  public onLogando(){
    if(this.lista_permitidos.includes(this.permissao)){
      this.habilita = false;
    }

  }
}
