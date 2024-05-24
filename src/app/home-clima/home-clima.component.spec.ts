import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClimaComponent } from './home-clima.component';

describe('HomeClimaComponent', () => {
  let component: HomeClimaComponent;
  let fixture: ComponentFixture<HomeClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeClimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
