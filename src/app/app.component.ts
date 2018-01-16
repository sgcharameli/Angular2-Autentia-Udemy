import { ExampleService } from './example.service';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title: string;
  locale: string;
  localeInput: string;

  constructor(private exampleService: ExampleService,
  @Inject(LOCALE_ID) private localeId: string) {
    this.locale = localeId;
  }

  ngOnInit() {
    this.title = this.exampleService.getMessage();
  }

}
