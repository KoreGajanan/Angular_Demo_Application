import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgLoginFormComponent } from './ng-login-form/ng-login-form.component';

// Import statements for reactive form design

import { FormsModule } from '@angular/forms';

//Import ReactiveFormsmodule for reactive forms

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgLoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule       
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
