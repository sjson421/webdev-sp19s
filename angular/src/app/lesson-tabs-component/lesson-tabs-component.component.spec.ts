import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTabsComponentComponent } from './lesson-tabs-component.component';

describe('LessonTabsComponentComponent', () => {
  let component: LessonTabsComponentComponent;
  let fixture: ComponentFixture<LessonTabsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTabsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTabsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
