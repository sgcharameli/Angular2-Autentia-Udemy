import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-data-binding',
  templateUrl: './child-data-binding.component.html',
  styleUrls: ['./child-data-binding.component.css']
})
export class ChildDataBindingComponent implements OnInit {

  @Input() messageFromParent: string;
  @Output() responseFromChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  responder() {
    console.log('Pulso en responder');
    this.responseFromChild.emit('Nooooooooooooooooo');
  }
}
