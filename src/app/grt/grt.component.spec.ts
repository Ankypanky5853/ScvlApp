import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrtComponent } from './grt.component';

describe('GrtComponent', () => {
  let component: GrtComponent;
  let fixture: ComponentFixture<GrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
