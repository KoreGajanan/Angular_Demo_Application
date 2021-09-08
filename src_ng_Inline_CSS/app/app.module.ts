import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgInlinecssComponent } from './ng-inlinecss/ng-inlinecss.component';


@NgModule({
  declarations: [
    AppComponent,
    NgInlinecssComponent,      
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
