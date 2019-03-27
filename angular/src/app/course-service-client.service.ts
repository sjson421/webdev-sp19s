import {Injectable} from '@angular/core';
import source from './source';

const url = source;

@Injectable({
  providedIn: 'root'
})
export class CourseServiceClientService {

  constructor() {
  }

  findAllCourses = () =>
    fetch(url + '/api/courses')
      .then(response => response.json());
  findCourseById = courseId =>
    fetch(url + '/api/courses/' + courseId)
      .then(response => response.json());
}
