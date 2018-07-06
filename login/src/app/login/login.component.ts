import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( ) { }

  // validateLogin() {
  //    this.user.email = this.user.email.replace(/^\s+/, '').replace(/\s+$/, '');
  //    this.user.password = this.user.password.replace(/^\s+/, '').replace(/\s+$/, '');
  //    if (this.user.email && this.user.password !== '' ) {
  //      this.loginService.validateLogin(this.user).subscribe(result => {
  //
  //        this.routes.navigate(['/', 'home'])
  //      }, error => {
  //        console.log('error is ', error);
  //      });
  //    }
  //    else{
  //      alert('Please Enter Correct Details')
  //    }
  //  }

// validateLogin(){
//   console.log('1234567890');
//   db.collection('logins').findOne(
//     { $and: [
//         { userName: req.body.userName },
//         { password: req.body.password }
//       ] },
//
//      (err, result) => {
//
//       if(err) {
//         res.status(500).send(err);
//         return;
//       }
//
//       if(!result) {
//           data = {
//               "meta": {
//                   "status": "fail",
//                   "message": "Login Failure: Invalid username or password"
//               }
//           };
//           res.status(401).send(data);
//       } else {
//           data = {
//               "meta": {
//                   "status": "success",
//                   "message": "Login success"
//               }
//           };
//           res.json(data);
//       }
//   });
//
// }
  ngOnInit() { }


}
