import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private router: Router,private loginSrv: LoginService ){}

  onLogin() {
    this.loginSrv.check_user_Login(this.loginObj).subscribe((res:any)=>{
      debugger;
      if(res) {
        alert("Login Success");
        this.router.navigateByUrl('/Allproducts')
      } else {
        alert("Login Failed")
      }
    })
  }

  

}
