import { TestBed } from '@angular/core/testing';

import { TopicServiceClientService } from './topic-service-client.service';

describe('TopicServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicServiceClientService = TestBed.get(TopicServiceClientService);
    expect(service).toBeTruthy();
  });
});
