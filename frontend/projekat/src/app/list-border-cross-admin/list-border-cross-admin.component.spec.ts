import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBorderCrossAdminComponent } from './list-border-cross-admin.component';

describe('ListBorderCrossAdminComponent', () => {
  let component: ListBorderCrossAdminComponent;
  let fixture: ComponentFixture<ListBorderCrossAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBorderCrossAdminComponent]
    });
    fixture = TestBed.createComponent(ListBorderCrossAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
