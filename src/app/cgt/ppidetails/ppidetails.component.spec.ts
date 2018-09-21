import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpidetailsComponent } from './ppidetails.component';

describe('PpidetailsComponent', () => {
  let component: PpidetailsComponent;
  let fixture: ComponentFixture<PpidetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpidetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
