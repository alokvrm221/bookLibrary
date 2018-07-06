import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import {routes} from './app.router';
import { HttpModule} from '@angular/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,

    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
