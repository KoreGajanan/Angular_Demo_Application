import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgParentTochildComponent } from './ng-parent-tochild/ng-parent-tochild.component';


@NgModule({
  declarations: [
    AppComponent,
    NgParentTochildComponent,  
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
