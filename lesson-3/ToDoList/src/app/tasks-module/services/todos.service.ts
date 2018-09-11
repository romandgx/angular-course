import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  //private todosList: Array<any> = [];

  constructor(private http: HttpClient) {
    if (!this.isTasks()) {
      console.log('JSON')
      this.getTodos().subscribe(
        data => {
          for (let task of data.tasks) {
           localStorage.setItem(`task_${task.id}`, JSON.stringify(task));
           //this.todosList.push(JSON.stringify(task));
          }
        }
      )
    }
  }

  isTasks(): boolean {
    for (let item in localStorage) {
      if (item.match(/task_([0-9])+/)) {
        return true;
      }
    }
    return false;
  }

  initService() {}

  getTodos(): Observable<any> {
    return this.http.get('../../assets/resources/tags.json');
  }

  createTask() {

  }

  readTask(task) {
    localStorage.setItem(`task_${task.id}`, JSON.stringify(Object.assign({}, task, {status: 'open'})));
  }

  updateTask() {

  }

  deleteTask() {

  }
}
