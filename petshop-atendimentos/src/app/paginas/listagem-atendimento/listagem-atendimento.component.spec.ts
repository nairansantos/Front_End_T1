import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAtendimentoComponent } from './listagem-atendimento.component';

describe('ListagemAtendimentoComponent', () => {
  let component: ListagemAtendimentoComponent;
  let fixture: ComponentFixture<ListagemAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
