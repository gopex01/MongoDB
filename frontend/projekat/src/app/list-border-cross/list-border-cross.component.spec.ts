import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBorderCrossComponent } from './list-border-cross.component';

describe('ListBorderCrossComponent', () => {
  let component: ListBorderCrossComponent;
  let fixture: ComponentFixture<ListBorderCrossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBorderCrossComponent]
    });
    fixture = TestBed.createComponent(ListBorderCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
