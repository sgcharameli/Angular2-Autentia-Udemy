import { ConfirmService } from './../confirm.service';
import { AuthService } from './../auth.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataBindingComponent } from './example-data-binding/example-data-binding.component';
import { ChildDataBindingComponent } from './child-data-binding/child-data-binding.component';

const ROUTES: Routes = [
  { path: '',
    component: ExampleDataBindingComponent,
    canActivate: [AuthService],
    canDeactivate: [ConfirmService] },
  { path: ':param', component: ExampleDataBindingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [AuthService, ConfirmService],
  declarations: [ExampleDataBindingComponent, ChildDataBindingComponent]
})
export class DataBindingModule { }
