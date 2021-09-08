import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfElseDemoComponent } from './ng-if-else-demo/ng-if-else-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    NgIfElseDemoComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
