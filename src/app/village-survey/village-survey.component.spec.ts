import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageSurveyComponent } from './village-survey.component';

describe('VillageSurveyComponent', () => {
  let component: VillageSurveyComponent;
  let fixture: ComponentFixture<VillageSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
