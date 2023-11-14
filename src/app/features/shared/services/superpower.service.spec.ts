import { TestBed } from '@angular/core/testing';

import { SuperpowerService } from './superpower.service';

describe('SuperpowerService', () => {
  let service: SuperpowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperpowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
