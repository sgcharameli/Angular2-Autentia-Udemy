import { DirectivasModule } from './directivas/directivas.module';
import { SecondModule } from './second/second.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectivaComponent } from './directivas/directiva/directiva.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectivasModule
  ],
  providers: [],
  bootstrap: [DirectivaComponent]
})
export class AppModule { }
