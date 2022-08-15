import { TestBed } from '@angular/core/testing';

import { ServiceTableService } from './service-table.service';

describe('ServiceTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTableService = TestBed.get(ServiceTableService);
    expect(service).toBeTruthy();
  });
});
