import { Component, OnInit } from '@angular/core';
import {WidgetServiceClientService} from '../widget-service-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicServiceClientService} from '../topic-service-client.service';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {
  widgets = [];
  topicId = 0;

  constructor(private widgetService: WidgetServiceClientService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params))

  }

  setParams(params) {
    this.topicId = params['topicId'];

    this.widgetService.findWidgetForTopic(this.topicId)
      .then(response => {
        return this.widgets = response
      });
  }

  parseList(items) {
    const cutItems = items.split(',');
    return cutItems;
  }
  ngOnInit() {
  }
}
