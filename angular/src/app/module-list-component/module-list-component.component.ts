import {Component, OnInit} from '@angular/core';
import {ModuleServiceClientService} from '../module-service-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClientService} from '../course-service-client.service';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {
  modules = [];
  courseId = 0;
  moduleId = 0;
  lessonId = 0;
  topicId = 0;
  course = '';

  constructor(private router: Router,
              private moduleService: ModuleServiceClientService,
              private courseService: CourseServiceClientService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));

  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];

    this.courseService.findCourseById(this.courseId)
      .then(response => this.course = response);
    this.moduleService.findModulesForCourse(this.courseId)
      .then(response =>
        this.modules = response
      );
  }

  ngOnInit() {
  }
}
