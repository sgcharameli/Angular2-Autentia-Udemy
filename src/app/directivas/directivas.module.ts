import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva/directiva.component';

const ROUTES: Routes = [
  { path: '', component: DirectivaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [DirectivaComponent],
  declarations: [DirectivaComponent]
})
export class DirectivasModule { }
