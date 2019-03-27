import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListComponentComponent } from './widget-list-component.component';

describe('WidgetListComponentComponent', () => {
  let component: WidgetListComponentComponent;
  let fixture: ComponentFixture<WidgetListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
