import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva/directiva.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DirectivaComponent],
  declarations: [DirectivaComponent]
})
export class DirectivasModule { }
