import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';
import {CourseServiceClientService} from './course-service-client.service';
import {ModuleServiceClientService} from './module-service-client.service';
import {LessonServiceClientService} from './lesson-service-client.service';
import {WidgetServiceClientService} from './widget-service-client.service';
import {TopicServiceClientService} from './topic-service-client.service';
import {routing} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicPillsComponentComponent,
    WidgetListComponentComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    CourseServiceClientService,
    ModuleServiceClientService,
    LessonServiceClientService,
    TopicServiceClientService,
    WidgetServiceClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
