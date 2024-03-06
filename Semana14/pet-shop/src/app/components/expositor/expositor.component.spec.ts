import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorComponent } from './expositor.component';

describe('ExpositorComponent', () => {
  let component: ExpositorComponent;
  let fixture: ComponentFixture<ExpositorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpositorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
