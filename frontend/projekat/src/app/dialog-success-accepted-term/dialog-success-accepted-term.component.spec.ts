import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessAcceptedTermComponent } from './dialog-success-accepted-term.component';

describe('DialogSuccessAcceptedTermComponent', () => {
  let component: DialogSuccessAcceptedTermComponent;
  let fixture: ComponentFixture<DialogSuccessAcceptedTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSuccessAcceptedTermComponent]
    });
    fixture = TestBed.createComponent(DialogSuccessAcceptedTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
