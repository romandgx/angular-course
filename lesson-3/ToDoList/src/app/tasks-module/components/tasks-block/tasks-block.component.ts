import { Component, OnInit, DoCheck } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-tasks-block',
  templateUrl: './tasks-block.component.html',
  styleUrls: ['./tasks-block.component.scss'],
})
export class TasksBlockComponent implements OnInit, DoCheck {

  public editTasksList = new Set();
  constructor() { }


  ngOnInit() {
  }

  ngDoCheck() {
    for (let item in localStorage) {
      if (item.match(/task_([0-9])+/)) {
        let task = JSON.parse(localStorage.getItem(item));
        if (task.status === 'open' ) {
          this.editTasksList.add(task);
        }

        console.log(this.editTasksList)
      }
    }
  }

}
