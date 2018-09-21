import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardddesignComponent } from './cardddesign.component';

describe('CardddesignComponent', () => {
  let component: CardddesignComponent;
  let fixture: ComponentFixture<CardddesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardddesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardddesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
