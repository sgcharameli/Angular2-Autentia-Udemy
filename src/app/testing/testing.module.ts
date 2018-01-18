import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { UsersProxyService } from './users-proxy.service';

const ROUTES: Routes = [
  { path: '', component: TestingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [UsersProxyService],
  declarations: [TestingComponent]
})
export class TestingModule { }
