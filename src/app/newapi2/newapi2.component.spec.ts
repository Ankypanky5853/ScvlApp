import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newapi2Component } from './newapi2.component';

describe('Newapi2Component', () => {
  let component: Newapi2Component;
  let fixture: ComponentFixture<Newapi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newapi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newapi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
