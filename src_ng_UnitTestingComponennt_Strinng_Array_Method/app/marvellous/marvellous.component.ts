import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  templateUrl: './marvellous.component.html',
  styleUrls: ['./marvellous.component.css']
})
export class MarvellousComponent
{
  counter = 10;

  Increment()
  {
    this.counter++;
  }

  Decrement()
  {
    this.counter--;
  }
}
