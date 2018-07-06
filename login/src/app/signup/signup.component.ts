import { Component, OnInit } from '@angular/core';
import { SignupService} from '../signup.service';
import {Signup} from '../signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ SignupService]
})

export class SignupComponent implements OnInit {
// fullName:string;
// userName:string;
// password:string;
// confirmpassword:string;
// email:string;
// phoneNo:number;
// address:string;
// postalCode:number;
userData: any = {};



  constructor( private signupService:SignupService) { }

// addSignup()
 // {
   // console.log('userData', this.userData);
  addSignup(){
  logins.find($or :[{userName: userData.userName}, {email: userData.email}],
            function(err, logins){
    if(err) {
      return next(err);
    } else if(logins) {
      if (_.find(logins , {email: userData.email})){
        logins.invalidate('email', 'email is already registered');
        next( new Error("email is already registered"));
      }
      else if (_.find(logins , {username: userData.userName})){
        logins.invalidate('username', 'username is already taken');
        next( new Error("username is already taken"));
      }
    }
    else{
      this.signupService.addSignup(this.userData).subscribe(data =>{
        alert('user registed succes');

  });
}
});

}

 checkPassword(){
   // console.log('this.userData.password', this.userData.password);
   // console.log('this.userData.confirmpassword', this.userData.confirmpassword);
   if (this.userData.password !== this.userData.confirmpassword) {
     alert('passwor did not match ');
   }

 }
  ngOnInit() {
    // console.log(this.fullName);
  }

}
