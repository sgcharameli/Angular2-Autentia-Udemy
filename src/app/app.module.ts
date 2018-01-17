
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  { path: '', redirectTo: 'directivas', pathMatch: 'full' },
  { path: 'directivas', loadChildren: './directivas/directivas.module#DirectivasModule'},
  { path: 'databinding', loadChildren: './data-binding/data-binding.module#DataBindingModule'},
  { path: 'formularios', loadChildren: './formularios/formularios.module#FormulariosModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
