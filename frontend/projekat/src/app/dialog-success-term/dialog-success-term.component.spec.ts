import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessTermComponent } from './dialog-success-term.component';

describe('DialogSuccessTermComponent', () => {
  let component: DialogSuccessTermComponent;
  let fixture: ComponentFixture<DialogSuccessTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSuccessTermComponent]
    });
    fixture = TestBed.createComponent(DialogSuccessTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
