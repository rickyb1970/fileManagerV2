import { TestBed } from '@angular/core/testing';

import { StateHandlingService } from './state-handling.service';

describe('StateHandlingService', () => {
  let service: StateHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
