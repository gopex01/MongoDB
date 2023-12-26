import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTermPart4Component } from './create-term-part4.component';

describe('CreateTermPart4Component', () => {
  let component: CreateTermPart4Component;
  let fixture: ComponentFixture<CreateTermPart4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTermPart4Component]
    });
    fixture = TestBed.createComponent(CreateTermPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
