import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing12',
  templateUrl: './testing12.component.html',
  styleUrls: ['./testing12.component.scss']
})
export class Testing12Component implements OnInit {

  constructor(private fb: FormBuilder) {

   }

  height: number = 50;
  showBottomBar: boolean = false;

  form: FormGroup;

  ngOnInit(): void {

    const user = this.fb.group({
      'username': '',
      'firstName': '',
      'secondName': ''
    });

    const user2 = this.fb.group({
      'username': '',
      'firstName': '',
      'secondName': ''
    });

    const user3 = this.fb.group({
      'username': '',
      'firstName': '',
      'secondName': ''
    });

    const users = this.fb.group({
      'user1': user,
      'user2': user,
      'user3': user,
    });

    this.form = this.fb.group({
      'users': users
    });

    // this.form.valueChanges.subscribe(x => {
    //   console.log('SOmeting has changed ', x);
    // });

  }

  makeBigger(): void {
    this.height += 50;
  }

  makeSmaller(): void {
    if (this.height === 50) {return;};
    this.height -= 50;
  }

  toggleBB(): void {
  }

  preFillForm() {

    /*

    const user = { username: 'Chris', firstName: 'test1', secondName: 'test111' };
    const user2 = { username: 'Chris', firstName: 'test2', secondName: 'test222' };
    const user3 = { username: 'Chris', firstName: 'test3', secondName: 'test333' };

    const users = [user, user2, user3];

    // Get each of the user sections
    const usersFormGroup = Array.from(document.getElementsByClassName('form-row'));

    // Loop through and get the controls for each user group and pre fill them with data
    usersFormGroup.forEach(userGroup => {
      console.log(userGroup.attributes.formGroupName.value);
      const FCs = Array.from(userGroup.getElementsByClassName('form-control'));
      console.log(FCs);


      // Set the form control values
      for (let i = 0; i < FCs.length; i++) {
        
        const FC = FCs[i];
        console.log(FC);

        switch(FC?.attributes.formControlName.value) {
          
          case 'username':
            FC.value = users[i].username;
          break;

          case 'firstName':
            FC.value = users[i].firstName;
          break;

          case 'secondName':
            FC.value = users[i].secondName;

        }

        FC.dispatchEvent(new Event("input"));

      }

    });

    */

    const user = { username: 'Chris', firstName: 'test1', secondName: 'test111' };
    const user2 = { username: 'Chris', firstName: 'test2', secondName: 'test222' };
    const user3 = { username: 'Chris', firstName: 'test3', secondName: 'test333' };

    const users = [user, user2, user3];

    // Get each of the user sections
    const usersFormGroup: any = Array.from(document.getElementsByClassName('form-row'));

    // Loop through and get the controls for each user group and pre fill them with data
    usersFormGroup.forEach(userGroup => {
      console.log(userGroup.attributes.formGroupName.value);
      const FCs: any = Array.from(userGroup.getElementsByClassName('form-control'));
      console.log(FCs);


      // Set the form control values
      for (let i = 0; i < FCs.length; i++) {
        
        const FC = FCs[i];
        console.log(FC);

        switch(FC?.attributes.formControlName.value) {
          
          case 'username':
            FC.value = users[i].username;
          break;

          case 'firstName':
            FC.value = users[i].firstName;
          break;

          case 'secondName':
            FC.value = users[i].secondName;

        }

        FC.dispatchEvent(new Event("input"));

      }

    });


    

  }

  public saveForm() {
    console.log('SAVING FORM');
    console.log(this.form.value);
  }

}
