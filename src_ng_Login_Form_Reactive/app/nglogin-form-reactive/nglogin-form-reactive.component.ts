import { Component, OnInit } from '@angular/core';
//import classes which are required for reactive forms
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-nglogin-form-reactive',
  templateUrl: './nglogin-form-reactive.component.html',
  styleUrls: ['./nglogin-form-reactive.component.css']
})
export class NgloginFormReactiveComponent  {

  MarvellousForm = new FormGroup(
    {
      username : new FormControl('Gajanan'),
      password : new FormControl(''),
      ConfirmPass : new FormControl('')

    }
  );

}
