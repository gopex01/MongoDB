import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessDeletedBcComponent } from './dialog-success-deleted-bc.component';

describe('DialogSuccessDeletedBcComponent', () => {
  let component: DialogSuccessDeletedBcComponent;
  let fixture: ComponentFixture<DialogSuccessDeletedBcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSuccessDeletedBcComponent]
    });
    fixture = TestBed.createComponent(DialogSuccessDeletedBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
