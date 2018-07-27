import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForPresentersComponent } from './call-for-presenters.component';

describe('CallForPresentersComponent', () => {
  let component: CallForPresentersComponent;
  let fixture: ComponentFixture<CallForPresentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallForPresentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForPresentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
