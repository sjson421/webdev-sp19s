import { Injectable } from '@angular/core';
import source from './source';

const url = source;
@Injectable({
  providedIn: 'root'
})
export class WidgetServiceClientService {

  constructor() { }
  findAllWidgets = () =>
    fetch(url + '/api/widget')
      .then(response => response.json());
  findWidgetForTopic = topicId =>
    fetch(url + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  findWidgetById = widgetId =>
    fetch(url + '/api/widget/' + widgetId)
      .then(response => response.json());
}
