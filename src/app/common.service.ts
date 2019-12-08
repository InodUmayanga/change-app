import { Injectable } from '@angular/core';
import { UserLoginData } from './login/login-user-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  login = false;

  setLoggedInStatus(login: boolean) {
    this.login = login;
    console.log(`login status ` + this.login);

  }

  getLoggedInStatus() {
    return this.login;
  }

  loginApiCall(login: UserLoginData) {
    this.http.post<{ message: string, status: boolean }>('http://localhost:3000/api/login', login)
      .subscribe((loginData) => {
        console.log(loginData.message);

        this.setLoggedInStatus(loginData.status);
      });
  }

  // apiCall() {
  //   this.http.get<{message: string}>('http://localhost:3000/api/login')
  //     .subscribe((data) => {
  //       console.log(data.message);
  //     });
  // }

}
