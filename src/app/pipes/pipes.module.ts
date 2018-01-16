import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipeComponent } from './example-pipe/example-pipe.component';
import { DecoratorPipe } from './decorator.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExamplePipeComponent, DecoratorPipe],
  exports: [ExamplePipeComponent]
})
export class PipesModule { }
