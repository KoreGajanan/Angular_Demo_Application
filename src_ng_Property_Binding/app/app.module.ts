import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { NgPropertyBindingComponent } from './ng-property-binding/ng-property-binding.component';





@NgModule({
  declarations: [
    AppComponent,
    NgPropertyBindingComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
