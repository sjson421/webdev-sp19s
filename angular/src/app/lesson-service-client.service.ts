import { Injectable } from '@angular/core';
import source from './source';

const url = source;
@Injectable({
  providedIn: 'root'
})
export class LessonServiceClientService {

  constructor() { }
  findAllLessons = () =>
    fetch(url + '/api/lesson')
      .then(response => response.json());
  findLessonsForModule = moduleId =>
    fetch(url + '/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  findLessonById = lessonId =>
    fetch(url + '/api/lesson/' + lessonId)
      .then(response => response.json());
}
