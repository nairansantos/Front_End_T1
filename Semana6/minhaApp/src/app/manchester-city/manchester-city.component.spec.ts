import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManchesterCityComponent } from './manchester-city.component';

describe('ManchesterCityComponent', () => {
  let component: ManchesterCityComponent;
  let fixture: ComponentFixture<ManchesterCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManchesterCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManchesterCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
