import { Observable } from 'rxjs/Observable';
import { User } from './user';

import 'rxjs/add/observable/of';

export class UsersProxyServiceFake {

  constructor() { }

  getUserByUsername(username: string): Observable<User> {
    const user: User = {
      login: 'sgcharameli',
      avatar_url: 'https://avatars0.githubusercontent.com/u/4550509?v=4',
      name: 'Sergio García Charameli',
      company: 'Sanitas Hospitales'
    };
    return Observable.of(user);
  }

}
