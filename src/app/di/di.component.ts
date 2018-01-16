import { ExampleService } from './../example.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [ExampleService]
})
export class DiComponent implements OnInit {

  @Input() message: string;
  show: string;

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.exampleService.setMessage(this.message);
    this.show = this.exampleService.getMessage();

    setTimeout(() => {
      this.show = this.exampleService.getMessage();
    }, 3000);
  }

}
