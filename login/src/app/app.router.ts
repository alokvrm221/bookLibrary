import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {AppComponent} from './app.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';


export const router :Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserComponent}
  ];
export const routes:ModuleWithProviders = RouterModule.forRoot(router);
