import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  show: boolean;
  colors: string[];

  constructor() { }

  ngOnInit() {
    this.show = true;
    this.colors = ['red', 'green', 'blue', 'yellow'];
  }

}
