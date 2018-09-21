import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrtListComponent } from './grt-list.component';

describe('GrtListComponent', () => {
  let component: GrtListComponent;
  let fixture: ComponentFixture<GrtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
