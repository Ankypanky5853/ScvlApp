import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addstaff2Component } from './addstaff2.component';

describe('Addstaff2Component', () => {
  let component: Addstaff2Component;
  let fixture: ComponentFixture<Addstaff2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addstaff2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addstaff2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
