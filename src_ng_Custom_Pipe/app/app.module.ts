import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MarvellouspipePipe } from './marvellouspipe.pipe';




@NgModule({
  imports:      [ BrowserModule,],
  declarations: [ AppComponent, MarvellouspipePipe, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
