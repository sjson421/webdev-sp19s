import {Routes, RouterModule} from '@angular/router';
import {CourseGridComponentComponent} from './course-grid-component/course-grid-component.component';
import {ModuleListComponentComponent} from './module-list-component/module-list-component.component';
import {LessonTabsComponentComponent} from './lesson-tabs-component/lesson-tabs-component.component';
import {TopicPillsComponentComponent} from './topic-pills-component/topic-pills-component.component';
import {WidgetListComponentComponent} from './widget-list-component/widget-list-component.component';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'course', pathMatch:"full"},
  {path: 'course', component: CourseGridComponentComponent},
  {path: 'course/:courseId/module', component: ModuleListComponentComponent},
  {path: 'course/:courseId/module/:moduleId/lesson', component: ModuleListComponentComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: ModuleListComponentComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: ModuleListComponentComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
