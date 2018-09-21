import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocszoomComponent } from './docszoom.component';

describe('DocszoomComponent', () => {
  let component: DocszoomComponent;
  let fixture: ComponentFixture<DocszoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocszoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocszoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
