import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatCard } from '@angular/material';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnInit {

  @Input() task: any;
  private taskCount = 0;
  constructor() { }

  ngOnInit() {
  }

  clickOpenTask() {
    localStorage.setItem(`task_${this.task.id}`, JSON.stringify(Object.assign({}, this.task, {status: 'open'})));
  }

}
