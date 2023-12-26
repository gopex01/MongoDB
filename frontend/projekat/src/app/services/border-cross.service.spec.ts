import { TestBed } from '@angular/core/testing';

import { BorderCrossService } from './border-cross.service';

describe('BorderCrossService', () => {
  let service: BorderCrossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderCrossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
