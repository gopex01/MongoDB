import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBcComponent } from './review-bc.component';

describe('ReviewBcComponent', () => {
  let component: ReviewBcComponent;
  let fixture: ComponentFixture<ReviewBcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewBcComponent]
    });
    fixture = TestBed.createComponent(ReviewBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
