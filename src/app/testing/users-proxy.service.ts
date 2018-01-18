import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersProxyService {

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${username}`);
  }

}
