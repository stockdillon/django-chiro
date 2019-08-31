import { TestBed } from '@angular/core/testing';

import { CoinbaseService } from './coinbase.service';

describe('CoinbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinbaseService = TestBed.get(CoinbaseService);
    expect(service).toBeTruthy();
  });
});
