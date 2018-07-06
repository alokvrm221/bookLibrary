
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {HttpModule  } from '@angular/http';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {Signup} from './signup';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:Http) {}

addSignup(newSignup){
  var headers= new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:7000/api/register',newSignup,{headers:headers});
  alert('successfully data added');

}
}
