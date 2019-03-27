import { TestBed } from '@angular/core/testing';

import { CourseServiceClientService } from './course-service-client.service';

describe('CourseServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseServiceClientService = TestBed.get(CourseServiceClientService);
    expect(service).toBeTruthy();
  });
});
