import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-data-binding',
  templateUrl: './example-data-binding.component.html',
  styleUrls: ['./example-data-binding.component.css']
})
export class ExampleDataBindingComponent implements OnInit {

  messageFromChild: string;
  message: string;
  param: string;
  qparam: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.activatedRoute.snapshot.params['param'];
    this.qparam = this.activatedRoute.snapshot.queryParams['qp'];
  }

  responseFromChild(event) {
    this.messageFromChild = event;
  }
}
