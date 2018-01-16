import { SecondModule } from './second/second.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
