import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.scss'],
  providers: [UsersService]
})
export class UsersGeneratorComponent {

  public list: Array<any> = [];
  public isLoading = true;
  public isGetData: boolean;

  constructor(private usersService: UsersService) {}

  getData(url: string) {
    if (!this.isGetData) return;

    this.usersService.getUsers(url)
      .subscribe(response => {
        let data = response.results[0];
        this.isLoading = false;
        if (data.dob.age > (2018 - 1975)) {
          this.list.push(data);
          return this.list.length < 1 ? this.getData(url) : this.getData(url + `/?seed=${data.email}`);
        } else {
          this.isLoading = true;
        }
    });
  }

  isConfirm(value: boolean): void {
    this.isGetData = value;
  }

  userDelete(id: any) {
    this.list = _.remove(this.list, item => ( item.id.value != id ));
  }

}
