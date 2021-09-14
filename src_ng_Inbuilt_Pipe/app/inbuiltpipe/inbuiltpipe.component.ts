import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styles: [``
  ]
})
export class InbuiltpipeComponent implements OnInit {

  constructor() { }

  name = "Marvellous Infosystems";
  today =new Date();
  iNo = 32.389;

  ngOnInit(): void {
  }
  public Institute = {
    "Name" : "Marvellous",
    "Location" : "Pune"
  }

}
