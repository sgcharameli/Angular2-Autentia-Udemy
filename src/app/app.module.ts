import { UtilService } from './util.service';
import { ExampleServiceFake } from './example.service.fake';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleService } from './example.service';
import { DiComponent } from './di/di.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';

// the second parameter 'fr' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    DiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UtilService,
    {provide: ExampleService, useClass: ExampleServiceFake},
    {provide: LOCALE_ID, deps: [UtilService], useFactory: (util: UtilService) => util.getLanguage()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
