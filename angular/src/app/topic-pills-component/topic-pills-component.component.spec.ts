import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPillsComponentComponent } from './topic-pills-component.component';

describe('TopicPillsComponentComponent', () => {
  let component: TopicPillsComponentComponent;
  let fixture: ComponentFixture<TopicPillsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPillsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPillsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
