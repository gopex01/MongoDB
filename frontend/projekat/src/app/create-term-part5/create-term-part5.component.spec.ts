import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTermPart5Component } from './create-term-part5.component';

describe('CreateTermPart5Component', () => {
  let component: CreateTermPart5Component;
  let fixture: ComponentFixture<CreateTermPart5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTermPart5Component]
    });
    fixture = TestBed.createComponent(CreateTermPart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
