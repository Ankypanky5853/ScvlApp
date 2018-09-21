import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestaffdetailsComponent } from './updatestaffdetails.component';

describe('UpdatestaffdetailsComponent', () => {
  let component: UpdatestaffdetailsComponent;
  let fixture: ComponentFixture<UpdatestaffdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatestaffdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestaffdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
