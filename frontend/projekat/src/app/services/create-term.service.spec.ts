import { TestBed } from '@angular/core/testing';

import { CreateTermService } from './create-term.service';

describe('CreateTermService', () => {
  let service: CreateTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
