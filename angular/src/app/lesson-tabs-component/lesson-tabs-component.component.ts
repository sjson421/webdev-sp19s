import {Component, OnInit} from '@angular/core';
import {LessonServiceClientService} from '../lesson-service-client.service';
import {TopicServiceClientService} from '../topic-service-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleServiceClientService} from '../module-service-client.service';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {
  lessons = [];
  courseId = 0;
  moduleId = 0;
  lessonId = 0;

  constructor(private router: Router,
              private lessonService: LessonServiceClientService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params))
  }
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];

    this.lessonService.findLessonsForModule(this.moduleId)
      .then(response =>
        this.lessons = response
      );
  }
  ngOnInit() {
  }
}
