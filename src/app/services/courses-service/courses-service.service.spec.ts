import { TestBed } from '@angular/core/testing';

import { CoursesServiceService } from './courses-service.service';

describe('CoursesServiceService', () => {
  let service: CoursesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesServiceService);
  });
});
