import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrtFormComponent } from './grt-form.component';

describe('GrtFormComponent', () => {
  let component: GrtFormComponent;
  let fixture: ComponentFixture<GrtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
