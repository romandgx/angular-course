import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public tasksList: Array<any> = [];
  constructor() { }

  ngOnInit() {
    for (let item in localStorage) {
      if (item.match(/task_([0-9])+/)) {
        let task = localStorage.getItem(item);
        this.tasksList.push(JSON.parse(task));
      }
    }
  }

}
