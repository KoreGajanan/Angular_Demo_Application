import { Component } from '@angular/core';

//import classes which are required for reactive forms

import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-ng-login-form',
  templateUrl: './ng-login-form.component.html',
  styles: [``]
})
export class NgLoginFormComponent  {

  MarvellousForm = new FormGroup(
    {
      username : new FormControl('Gajanan'),
      password : new FormControl(''),
      confirmpass : new FormControl('')
    }
  );

  
}
