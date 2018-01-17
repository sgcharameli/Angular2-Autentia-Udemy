import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProxyService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    const headers: HttpHeaders = new HttpHeaders();
    const newHeaders: HttpHeaders = headers.set('X-TOKEN', 'token');
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      headers: newHeaders
    });
  }

}
