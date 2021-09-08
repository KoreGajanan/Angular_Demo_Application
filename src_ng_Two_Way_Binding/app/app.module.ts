import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgTwoWayBindingComponent } from './ng-two-way-binding/ng-two-way-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    NgTwoWayBindingComponent,    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
