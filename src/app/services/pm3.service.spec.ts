import { TestBed } from '@angular/core/testing';

import { Pm3Service } from './pm3.service';

describe('Pm3Service', () => {
  let service: Pm3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pm3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
