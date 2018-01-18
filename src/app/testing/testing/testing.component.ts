import { Observable } from 'rxjs/Observable';
import { UsersProxyService } from './../users-proxy.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  user$: Observable<User>;

  constructor(private proxy: UsersProxyService) { }

  ngOnInit() {
  }

  search(username: string) {
    this.user$ = this.proxy.getUserByUsername(username);
  }
}
