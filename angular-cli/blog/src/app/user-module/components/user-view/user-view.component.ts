import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

  @Input('user') user: any;
  @Output('onUserDelete') onUserDelete = new EventEmitter();

  constructor() { }

  deleteUser(id) {
    this.onUserDelete.emit(id);
  }
}
