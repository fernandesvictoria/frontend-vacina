import { TestBed } from '@angular/core/testing';

import { MontadorasService } from './montadoras.service';

describe('MontadorasService', () => {
  let service: MontadorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontadorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
