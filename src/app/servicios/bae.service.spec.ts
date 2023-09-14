import { TestBed } from '@angular/core/testing';

import { BaeService } from './bae.service';

describe('BaeService', () => {
  let service: BaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
