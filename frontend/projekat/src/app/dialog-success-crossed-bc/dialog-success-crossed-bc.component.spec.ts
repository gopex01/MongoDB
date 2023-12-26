import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessCrossedBcComponent } from './dialog-success-crossed-bc.component';

describe('DialogSuccessCrossedBcComponent', () => {
  let component: DialogSuccessCrossedBcComponent;
  let fixture: ComponentFixture<DialogSuccessCrossedBcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSuccessCrossedBcComponent]
    });
    fixture = TestBed.createComponent(DialogSuccessCrossedBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
