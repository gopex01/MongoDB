import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTermComponent } from './list-term.component';

describe('ListTermComponent', () => {
  let component: ListTermComponent;
  let fixture: ComponentFixture<ListTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTermComponent]
    });
    fixture = TestBed.createComponent(ListTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
