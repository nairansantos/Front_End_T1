import { Component, Input } from '@angular/core';
import { type_atendimento } from '../../types/atendimento';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-atendimento-detail',
  templateUrl: './atendimento-detail.component.html',
  styleUrls: ['./atendimento-detail.component.css']
})
export class AtendimentoDetailComponent {

  @Input() atendimento: type_atendimento | null = null;

  constructor(private apiService: ApiService){}

  deleteAtend() {
    this.apiService.apagarAtendimentoById(this.atendimento?.id!);
  }
}

