import { TestBed } from '@angular/core/testing';

import { CatalogoprodService } from './catalogoprod.service';

describe('CatalogoprodService', () => {
  let service: CatalogoprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
