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
  users: Array<string> = [];

  constructor() { }

  add(str: IUser): void {
    this.list.push(str);
  }

  render(): void {
    for (let item of this.list) {
      this.users.push(`${item.name.title} ${item.name.first} ${item.name.last}\n${item.email}\n${item.phone}\n${item.picture.medium}\n`);
    }
  }

  clear(): void {
    this.users = [];
    this.list = [];
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
          this.add(data);
          return this.list.length < 2 ? this.getData(url) : this.getData(url + `/?seed=${data.email}`);
        }
      }
    )
    .catch(error => console.error(error));
    this.render();
  }
}
