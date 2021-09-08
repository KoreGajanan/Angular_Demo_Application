import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgClassBindingComponent } from './ng-class-binding/ng-class-binding.component';





@NgModule({
  declarations: [
    AppComponent,
    NgClassBindingComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
