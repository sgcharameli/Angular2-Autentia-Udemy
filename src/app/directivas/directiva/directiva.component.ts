import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  show: boolean;
  colors: string[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.show = true;
    this.colors = ['red', 'green', 'blue', 'yellow'];
  }

  passParam() {
    this.router.navigate(['databinding', '45'], {
      queryParams: {qp: 'query'}
    });
  }
}
