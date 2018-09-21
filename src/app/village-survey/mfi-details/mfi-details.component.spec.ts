import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfiDetailsComponent } from './mfi-details.component';

describe('MfiDetailsComponent', () => {
  let component: MfiDetailsComponent;
  let fixture: ComponentFixture<MfiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
