import { Component, OnInit } from '@angular/core';
import {TopicServiceClientService} from '../topic-service-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {
  topics = [];
  courseId = 0;
  moduleId = 0;
  lessonId = 0;
  topicId = 0;

  constructor(private router: Router,
              private topicService: TopicServiceClientService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params))
  }

  ngOnInit() {
  }
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];


    this.topicService.findTopicsForLesson(this.lessonId)
      .then(response =>
        this.topics = response
      );
  }
}
