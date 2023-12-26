import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCProfileComponent } from './bcprofile.component';

describe('BCProfileComponent', () => {
  let component: BCProfileComponent;
  let fixture: ComponentFixture<BCProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BCProfileComponent]
    });
    fixture = TestBed.createComponent(BCProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
