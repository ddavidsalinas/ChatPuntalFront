import { TestBed } from '@angular/core/testing';

import { ApiPBService } from './api-pb.service';

describe('ApiPBService', () => {
  let service: ApiPBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
