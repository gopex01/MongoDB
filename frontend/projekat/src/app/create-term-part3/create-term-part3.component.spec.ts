import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTermPart3Component } from './create-term-part3.component';

describe('CreateTermPart3Component', () => {
  let component: CreateTermPart3Component;
  let fixture: ComponentFixture<CreateTermPart3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTermPart3Component]
    });
    fixture = TestBed.createComponent(CreateTermPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
