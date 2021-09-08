import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgInlineTemplate1Component } from './ng-inline-template1/ng-inline-template1.component';
import { NgInlineTemplate2Component } from './ng-inline-template2/ng-inline-template2.component';




@NgModule({
  declarations: [
    AppComponent,
    NgInlineTemplate1Component,
    NgInlineTemplate2Component,
       
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
