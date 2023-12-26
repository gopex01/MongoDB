import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderCrossComponent } from './border-cross.component';

describe('BorderCrossComponent', () => {
  let component: BorderCrossComponent;
  let fixture: ComponentFixture<BorderCrossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderCrossComponent]
    });
    fixture = TestBed.createComponent(BorderCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
