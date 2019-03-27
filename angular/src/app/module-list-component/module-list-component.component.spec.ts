import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleListComponentComponent } from './module-list-component.component';

describe('ModuleListComponentComponent', () => {
  let component: ModuleListComponentComponent;
  let fixture: ComponentFixture<ModuleListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
