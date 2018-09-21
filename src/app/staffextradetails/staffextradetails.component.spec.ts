import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffextradetailsComponent } from './staffextradetails.component';

describe('StaffextradetailsComponent', () => {
  let component: StaffextradetailsComponent;
  let fixture: ComponentFixture<StaffextradetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffextradetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffextradetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
