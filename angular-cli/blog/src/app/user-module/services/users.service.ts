import { Injectable } from '@angular/core';
import { UserModule } from '../user.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  list: Array<any> = [];

  constructor(private http: HttpClient) { }

  getUsers(url: string): Observable<any> {
    return this.http.get(url);
  }
}
