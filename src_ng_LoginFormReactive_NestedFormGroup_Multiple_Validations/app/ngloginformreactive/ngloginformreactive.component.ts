import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-ngloginformreactive',
  templateUrl: './ngloginformreactive.component.html',
  styles: [
  ]
})
export class NgloginformreactiveComponent {

  //Inject Formbuilder service
  constructor(public fbobj : FormBuilder)
  {

  }
  MarvellousForm = this.fbobj.group(
    {
      //Add validations
      username : ['Gajanan',[Validators.required,Validators.minLength(6)]],
      password : ['',Validators.required],
      confirmpass : [''],
      MarvellousClass : this.fbobj.group(
        {
          batch : ['Python'],
          fees : ['8000']
        }
      )
  });

  /*
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
  );*/

//Method to set FormControl fields through program
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
