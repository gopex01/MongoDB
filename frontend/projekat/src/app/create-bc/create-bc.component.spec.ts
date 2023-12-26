import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBcComponent } from './create-bc.component';

describe('CreateBcComponent', () => {
  let component: CreateBcComponent;
  let fixture: ComponentFixture<CreateBcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBcComponent]
    });
    fixture = TestBed.createComponent(CreateBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
