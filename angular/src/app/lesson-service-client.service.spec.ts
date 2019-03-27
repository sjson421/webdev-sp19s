import { TestBed } from '@angular/core/testing';

import { LessonServiceClientService } from './lesson-service-client.service';

describe('LessonServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonServiceClientService = TestBed.get(LessonServiceClientService);
    expect(service).toBeTruthy();
  });
});
