import {Injectable} from '@angular/core';
import source from './source';

const url = source;

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceClientService {

  constructor() {
  }

  findAllModules = () =>
    fetch(url + '/api/modules')
      .then(response => response.json());
  findModulesForCourse = courseId =>
    fetch(url + '/api/courses/' + courseId + '/modules')
      .then(response => response.json());
  findModuleById = moduleId =>
    fetch(url + '/api/modules/' + moduleId)
      .then(response => response.json());
}
