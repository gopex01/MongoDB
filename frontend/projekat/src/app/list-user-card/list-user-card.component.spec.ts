import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserCardComponent } from './list-user-card.component';

describe('ListUserCardComponent', () => {
  let component: ListUserCardComponent;
  let fixture: ComponentFixture<ListUserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserCardComponent]
    });
    fixture = TestBed.createComponent(ListUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
