import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgSwitchDemoComponent } from './ng-switch-demo/ng-switch-demo.component';




@NgModule({
  declarations: [
    AppComponent,
    NgSwitchDemoComponent,
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
