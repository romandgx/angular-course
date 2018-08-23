import { Component, OnInit } from '@angular/core';

interface IUser {
  name: {
    title: string,
    first: string,
    last: string
  };
  email: string;
  phone: string;
  picture: { medium: string };
}

@Component({
  selector: 'app-renderable-list',
  templateUrl: './renderable-list.component.html',
  styleUrls: ['./renderable-list.component.scss']
})
export class RenderableListComponent {

  list: Array<IUser> = [];

  isLoading = false;

  message: string;

  constructor() { }

  clear() {
    this.list = [];
    this.isLoading = false;
    this.message = '';
  }

  getData(url: string): void {
    fetch(url)
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(
      response => {
        let data = response.results[0];
        if (data.dob.age > (2018 - 1975)) {
          this.list.push(data);
          if (this.message != 'loading data...') this.message = 'loading data...';
          return this.list.length < 1 ? this.getData(url) : this.getData(url + `/?seed=${data.email}`);
        } else {
          if (this.list.length < 1) {
            this.isLoading = false;
            this.message = `please try again`;
          } else {
            this.isLoading = true;
          }
        }
      }
    )
    .catch(error => console.error(error));
  }
}
