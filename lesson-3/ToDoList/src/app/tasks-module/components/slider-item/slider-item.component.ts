import { Component, OnInit, Input, Output, EventEmitter, Inject, Host } from '@angular/core';

import { MatCard } from '@angular/material';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
})
export class SliderItemComponent implements OnInit {

  @Input() task: any;
  private taskCount = 0;
  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  clickOpenTask() {
    this.todosService.readTask(this.task);
  }

}
