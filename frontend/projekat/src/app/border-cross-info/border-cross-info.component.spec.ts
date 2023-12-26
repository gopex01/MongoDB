import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderCrossInfoComponent } from './border-cross-info.component';

describe('BorderCrossInfoComponent', () => {
  let component: BorderCrossInfoComponent;
  let fixture: ComponentFixture<BorderCrossInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderCrossInfoComponent]
    });
    fixture = TestBed.createComponent(BorderCrossInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
