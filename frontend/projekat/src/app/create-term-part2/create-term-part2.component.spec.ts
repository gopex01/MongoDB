import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTermPart2Component } from './create-term-part2.component';

describe('CreateTermPart2Component', () => {
  let component: CreateTermPart2Component;
  let fixture: ComponentFixture<CreateTermPart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTermPart2Component]
    });
    fixture = TestBed.createComponent(CreateTermPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
