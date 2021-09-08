import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ng-child-toparent',
  templateUrl: './ng-child-toparent.component.html',
  styleUrls: ['./ng-child-toparent.component.css']
})
export class NgChildToparentComponent implements OnInit {


  @Output() public MyEvent = new EventEmitter();

  public SendData()
  {
    this.MyEvent.emit("Hello From Child");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
