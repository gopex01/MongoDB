import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessBcComponent } from './dialog-success-bc.component';

describe('DialogSuccessBcComponent', () => {
  let component: DialogSuccessBcComponent;
  let fixture: ComponentFixture<DialogSuccessBcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSuccessBcComponent]
    });
    fixture = TestBed.createComponent(DialogSuccessBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
