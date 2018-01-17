import { AddTokenInterceptor } from './add-token-interceptor';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const ROUTES: Routes = [
  { path: '', component: HttpComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [HttpComponent],
  declarations: [HttpComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ]
})
export class HttpModule { }
