import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErrorAllComponent } from './dialog-error-all.component';

describe('DialogErrorAllComponent', () => {
  let component: DialogErrorAllComponent;
  let fixture: ComponentFixture<DialogErrorAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogErrorAllComponent]
    });
    fixture = TestBed.createComponent(DialogErrorAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
