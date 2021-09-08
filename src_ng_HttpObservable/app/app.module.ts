import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgBatchdetailsComponent } from './ng-batchdetails/ng-batchdetails.component';
import { NgBatchlistComponent } from './ng-batchlist/ng-batchlist.component';
import { NgBatchlistService } from './ng-batchlist.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgBatchdetailsComponent,
    NgBatchlistComponent,          
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [NgBatchlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
