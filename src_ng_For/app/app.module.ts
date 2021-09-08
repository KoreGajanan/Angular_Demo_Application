import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    NgForDemoComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
