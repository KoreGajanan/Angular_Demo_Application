import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgBatchdetailsComponent } from './ng-batchdetails/ng-batchdetails.component';
import { NgBatchlistComponent } from './ng-batchlist/ng-batchlist.component';



@NgModule({
  declarations: [
    AppComponent,
    NgBatchdetailsComponent,
    NgBatchlistComponent,
          
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
