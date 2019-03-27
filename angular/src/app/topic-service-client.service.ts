import { Injectable } from '@angular/core';
import source from './source';

const url = source;
@Injectable({
  providedIn: 'root'
})
export class TopicServiceClientService {
  constructor() { }
  findAllTopics = () =>
    fetch(url + '/api/topic')
      .then(response => response.json());
  findTopicsForLesson = lessonId =>
    fetch(url + '/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  findTopicById = topicId =>
    fetch(url + '/api/topic/' + topicId)
      .then(response => response.json());
}
