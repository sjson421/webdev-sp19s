import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGridComponentComponent } from './course-grid-component.component';

describe('CourseGridComponentComponent', () => {
  let component: CourseGridComponentComponent;
  let fixture: ComponentFixture<CourseGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
