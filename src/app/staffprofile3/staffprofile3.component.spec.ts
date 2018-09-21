import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staffprofile3Component } from './staffprofile3.component';

describe('Staffprofile3Component', () => {
  let component: Staffprofile3Component;
  let fixture: ComponentFixture<Staffprofile3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staffprofile3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staffprofile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
