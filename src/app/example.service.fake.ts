import { Injectable } from '@angular/core';

@Injectable()
export class ExampleServiceFake {

  message: string;

  constructor() {
    this.message = 'En el constructor del fake';
    console.log('new ExampleServiceFake()');
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string): void {
    this.message = message;
  }
}
