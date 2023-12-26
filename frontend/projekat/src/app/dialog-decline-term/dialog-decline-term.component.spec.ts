import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeclineTermComponent } from './dialog-decline-term.component';

describe('DialogDeclineTermComponent', () => {
  let component: DialogDeclineTermComponent;
  let fixture: ComponentFixture<DialogDeclineTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeclineTermComponent]
    });
    fixture = TestBed.createComponent(DialogDeclineTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
