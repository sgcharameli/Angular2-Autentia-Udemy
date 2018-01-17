import { TestBed, inject } from '@angular/core/testing';

import { DataProxyService } from './data-proxy.service';

describe('DataProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProxyService]
    });
  });

  it('should be created', inject([DataProxyService], (service: DataProxyService) => {
    expect(service).toBeTruthy();
  }));
});
