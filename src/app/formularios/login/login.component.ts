import { CommonValidator } from './../../common-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('',
      Validators.compose([Validators.required, CommonValidator.startWithNumber]),
      Validators.composeAsync([CommonValidator.userTaken])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  send() {
    const username = this.form.controls['username'].value;
    const password = this.form.controls['password'].value;
    console.log(username + ' -- ' + password);
  }

}
