import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-ngloginformreactive',
  templateUrl: './ngloginformreactive.component.html',
  styles: [
  ]
})
export class NgloginformreactiveComponent {

  MarvellousForm = new FormGroup(
    {
      username : new FormControl(''),
      password : new FormControl(''),
      confirmpass : new FormControl(''),

      //add new nested Form Group
      MarvellousClass : new FormGroup(
        {
          batch : new FormControl('Python'),
          fees : new FormControl('5000')
        }
      )
    }
  );


  SetData()
  {
    this.MarvellousForm.setValue(
      {
        username : 'Gajanan',
        password : '',
        confirmpass : '',
        MarvellousClass :
        {
          batch : 'WEB',
          fees : '7000'
        }
      }
    )
  }

}
