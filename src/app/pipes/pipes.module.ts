import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipeComponent } from './example-pipe/example-pipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExamplePipeComponent],
  exports: [ExamplePipeComponent]
})
export class PipesModule { }
