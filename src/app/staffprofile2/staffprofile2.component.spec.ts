import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staffprofile2Component } from './staffprofile2.component';

describe('Staffprofile2Component', () => {
  let component: Staffprofile2Component;
  let fixture: ComponentFixture<Staffprofile2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staffprofile2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staffprofile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
