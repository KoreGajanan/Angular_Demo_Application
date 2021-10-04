import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  iNo : any =0;
  constructor(private service : AppServiceService)
  {}

  ngOnInit()
  {
      this.getBatchesfromAPI(this.iNo);
  }

  getBatchesfromAPI(iNo:any)
  {
    this.service.getBatches(this.iNo).subscribe((Response) =>{
      console.log("Data from server : ",Response);
    });
  }
}
