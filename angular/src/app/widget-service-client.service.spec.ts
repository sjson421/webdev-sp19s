import { TestBed } from '@angular/core/testing';

import { WidgetServiceClientService } from './widget-service-client.service';

describe('WidgetServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetServiceClientService = TestBed.get(WidgetServiceClientService);
    expect(service).toBeTruthy();
  });
});
