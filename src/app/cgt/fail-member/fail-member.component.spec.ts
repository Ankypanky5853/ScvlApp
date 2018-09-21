import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailMemberComponent } from './fail-member.component';

describe('FailMemberComponent', () => {
  let component: FailMemberComponent;
  let fixture: ComponentFixture<FailMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
