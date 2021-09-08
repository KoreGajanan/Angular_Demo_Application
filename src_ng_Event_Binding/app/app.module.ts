import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgEventbindingComponent } from './ng-eventbinding/ng-eventbinding.component';




@NgModule({
  declarations: [
    AppComponent,
    NgEventbindingComponent,   
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
