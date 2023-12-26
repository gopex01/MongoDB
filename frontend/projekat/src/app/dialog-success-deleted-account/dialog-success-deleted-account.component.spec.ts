import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessDeletedAccountComponent } from './dialog-success-deleted-account.component';

describe('DialogSuccessDeletedAccountComponent', () => {
  let component: DialogSuccessDeletedAccountComponent;
  let fixture: ComponentFixture<DialogSuccessDeletedAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSuccessDeletedAccountComponent]
    });
    fixture = TestBed.createComponent(DialogSuccessDeletedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
