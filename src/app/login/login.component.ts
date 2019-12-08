import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginData } from './login-user-data.model';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: UserLoginData;


  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  loginNow(loginForm: NgForm) {

    // this.commonService.apiCall();
    this.login = {
      username: loginForm.value.userName,
      password: loginForm.value.password
    };

    this.commonService.loginApiCall(this.login);
    loginForm.resetForm();
  }

}
