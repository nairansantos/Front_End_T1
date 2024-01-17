import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelaVermelhaComponent } from './estrela-vermelha.component';

describe('EstrelaVermelhaComponent', () => {
  let component: EstrelaVermelhaComponent;
  let fixture: ComponentFixture<EstrelaVermelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrelaVermelhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstrelaVermelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
