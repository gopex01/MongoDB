import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonalTermComponent } from './list-personal-term.component';

describe('ListPersonalTermComponent', () => {
  let component: ListPersonalTermComponent;
  let fixture: ComponentFixture<ListPersonalTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPersonalTermComponent]
    });
    fixture = TestBed.createComponent(ListPersonalTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
