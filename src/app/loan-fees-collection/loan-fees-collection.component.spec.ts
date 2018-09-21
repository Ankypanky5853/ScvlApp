import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFeesCollectionComponent } from './loan-fees-collection.component';

describe('LoanFeesCollectionComponent', () => {
  let component: LoanFeesCollectionComponent;
  let fixture: ComponentFixture<LoanFeesCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanFeesCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFeesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
