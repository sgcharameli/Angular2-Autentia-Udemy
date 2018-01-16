import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataBindingComponent } from './example-data-binding/example-data-binding.component';
import { ChildDataBindingComponent } from './child-data-binding/child-data-binding.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ExampleDataBindingComponent, ChildDataBindingComponent]
})
export class DataBindingModule { }
