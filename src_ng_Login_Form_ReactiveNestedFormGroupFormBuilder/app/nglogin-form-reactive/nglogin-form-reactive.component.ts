import { Component, OnInit } from '@angular/core';

//import classes which are required for reactive forms
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nglogin-form-reactive',
  templateUrl: './nglogin-form-reactive.component.html',
  styleUrls: ['./nglogin-form-reactive.component.css']
})
export class NgloginFormReactiveComponent  {

  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {}

  MarvellousForm = this.fbobj.group
  (
    {
      username : [''],
      password : [''],
      ConfirmPass : [''],
      MarvellousClass : this.fbobj.group(
        {
          batch : ['Python'],
          fees : ['5000']
        }
        )
    }
  );

  /*
  MarvellousForm = new FormGroup(
    {
      username : new FormControl('Gajanan'),
      password : new FormControl(''),
      ConfirmPass : new FormControl(''),

      MarvellousClass : new FormGroup(
        {
          batch : new FormControl('Web'),
          fees : new FormControl('5000')
        }
      )

    }
  );*/

//Method to set FormControl fields through program

SetData()
{
  this.MarvellousForm.setValue(
    {
      username : 'Gajanan',
      password : 'abcd',
      ConfirmPass : 'abcd',
      MarvellousClass :
      {
        batch : 'Python',
        fees : '5000'
      }
    }
  )
}

}
