import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';


@NgModule({
  imports:      [ BrowserModule,],
  declarations: [ AppComponent, InbuiltpipeComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
