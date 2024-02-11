import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessCreatedReviewComponent } from './dialog-success-created-review.component';

describe('DialogSuccessCreatedReviewComponent', () => {
  let component: DialogSuccessCreatedReviewComponent;
  let fixture: ComponentFixture<DialogSuccessCreatedReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSuccessCreatedReviewComponent]
    });
    fixture = TestBed.createComponent(DialogSuccessCreatedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
