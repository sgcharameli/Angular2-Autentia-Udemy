import { Post } from './post';
import { DataProxyService } from './data-proxy.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [DataProxyService]
})

export class HttpComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private proxy:DataProxyService) { }

  ngOnInit() {
    this.posts$ = this.proxy.getPost();
  }

}
