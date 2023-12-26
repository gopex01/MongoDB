import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTermComponent } from './personal-term.component';

describe('PersonalTermComponent', () => {
  let component: PersonalTermComponent;
  let fixture: ComponentFixture<PersonalTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalTermComponent]
    });
    fixture = TestBed.createComponent(PersonalTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
