import { TestBed } from '@angular/core/testing';

import { CustormvalidationService } from './custormvalidation.service';

describe('CustormvalidationService', () => {
  let service: CustormvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustormvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
