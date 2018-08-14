import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentCalendarComponent } from './moment-calendar.component';

describe('MomentCalendarComponent', () => {
  let component: MomentCalendarComponent;
  let fixture: ComponentFixture<MomentCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
