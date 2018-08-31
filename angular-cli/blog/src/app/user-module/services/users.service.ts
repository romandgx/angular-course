import { Injectable } from '@angular/core';
import { UserModule } from '../user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  list: Array<any> = [];

  constructor() { }

  getUsers(url: string): any {
    return fetch(url)
    .then(
      response => response,
      error => console.error(error)
    )
    .catch(error => console.error(error));
  }
}
