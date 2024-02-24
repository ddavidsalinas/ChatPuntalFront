import { TestBed } from '@angular/core/testing';

import { AuthCanService } from './auth-can.service';

describe('AuthCanService', () => {
  let service: AuthCanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
