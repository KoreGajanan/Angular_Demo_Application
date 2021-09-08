import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgloginFormReactiveComponent } from './nglogin-form-reactive/nglogin-form-reactive.component';
import {MatButtonModule} from '@angular/material/button';
// Import statements for reactive form design
import { FormsModule } from '@angular/forms';

//Import ReactiveFormsModule for reactive forms
import { ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NgloginFormReactiveComponent
  ],
  imports: [
    BrowserModule,          
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
