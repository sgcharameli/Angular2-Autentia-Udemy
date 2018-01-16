import { DataBindingModule } from './data-binding/data-binding.module';
import { ExampleDataBindingComponent } from './data-binding/example-data-binding/example-data-binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [ExampleDataBindingComponent]
})
export class AppModule { }
