import {Component, OnInit} from '@angular/core';
import {CourseServiceClientService} from '../course-service-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-grid-component',
  templateUrl: './course-grid-component.component.html',
  styleUrls: ['./course-grid-component.component.css']
})
export class CourseGridComponentComponent implements OnInit {

  private courses = [];
  constructor(private courseService: CourseServiceClientService,
              private route: ActivatedRoute) {
    courseService.findAllCourses()
      .then(response =>
        this.courses = response
      );
  }

  ngOnInit() {
  }
}
