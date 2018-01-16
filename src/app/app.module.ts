import { PipesModule } from './pipes/pipes.module';
import { DirectivasModule } from './directivas/directivas.module';
import { SecondModule } from './second/second.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExamplePipeComponent } from './pipes/example-pipe/example-pipe.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [ExamplePipeComponent]
})
export class AppModule { }
