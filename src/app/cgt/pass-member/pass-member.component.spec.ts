import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassMemberComponent } from './pass-member.component';

describe('PassMemberComponent', () => {
  let component: PassMemberComponent;
  let fixture: ComponentFixture<PassMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
