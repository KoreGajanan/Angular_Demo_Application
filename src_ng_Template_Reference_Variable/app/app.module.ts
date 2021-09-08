import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NgTemplateRefVarComponent } from './ng-template-ref-var/ng-template-ref-var.component';



@NgModule({
  declarations: [
    AppComponent,
    NgTemplateRefVarComponent,    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
