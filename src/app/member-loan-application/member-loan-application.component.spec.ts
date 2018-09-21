import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLoanApplicationComponent } from './member-loan-application.component';

describe('MemberLoanApplicationComponent', () => {
  let component: MemberLoanApplicationComponent;
  let fixture: ComponentFixture<MemberLoanApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLoanApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
