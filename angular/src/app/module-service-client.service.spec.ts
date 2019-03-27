import { TestBed } from '@angular/core/testing';

import { ModuleServiceClientService } from './module-service-client.service';

describe('ModuleServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleServiceClientService = TestBed.get(ModuleServiceClientService);
    expect(service).toBeTruthy();
  });
});
