import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpchatComponent } from './helpchat.component';

describe('HelpchatComponent', () => {
  let component: HelpchatComponent;
  let fixture: ComponentFixture<HelpchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
