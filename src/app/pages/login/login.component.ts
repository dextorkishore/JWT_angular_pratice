import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    EmailId: '',
    Password: '',
  };
  constructor(private http: HttpClient, private router: Router) {}
  Onlogin() {
    debugger;
    console.log(this.loginObj);
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/User/Login',
        this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('login success');
          this.router.navigateByUrl('/dashboard');
          localStorage.setItem('JWT_Token', res.data.token);
        } else {
          alert(res.message);
        }
      });
  }
}
