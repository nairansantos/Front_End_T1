import { Component } from '@angular/core';

@Component({
  selector: 'app-estrela-vermelha',
  standalone: true,
  imports: [],
  templateUrl: './estrela-vermelha.component.html',
  styleUrl: './estrela-vermelha.component.css'
})
export class EstrelaVermelhaComponent {
  nome: string = 'Estrela-Vermelha';
  url: string = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/485.png';
  tamanho: number = 200;
  altura: number = 200;

  public getToString(){
    return this.nome + ' joga bola';
  }

  public onClick():void{
    alert('Clicou em mim!');
    this.tamanho+=10;
    this.altura+=10;
  }

}
