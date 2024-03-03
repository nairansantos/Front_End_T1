import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoAtendimentoComponent } from './edicao-atendimento.component';

describe('EdicaoAtendimentoComponent', () => {
  let component: EdicaoAtendimentoComponent;
  let fixture: ComponentFixture<EdicaoAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdicaoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
