import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValueDesignComponent } from './form-value-design.component';

describe('FormValueDesignComponent', () => {
  let component: FormValueDesignComponent;
  let fixture: ComponentFixture<FormValueDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValueDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValueDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
