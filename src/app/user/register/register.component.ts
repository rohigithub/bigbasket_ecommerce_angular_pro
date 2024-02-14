import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerObj: any = {
    name:'',
    userName: '',
    password: ''
  };
  constructor(private router: Router,private userService: UserService ){}
  
  registerUser() {
    
    if (!this.registerObj.name.trim()) {
      alert('Users name cannot be empty');
      return;
    }
    if (!this.registerObj.email.trim()) {
      alert('Users Email cannot be empty');
      return;
    }
    if (!this.registerObj.password.trim()) {
      alert('Users Password cannot be empty');
      return;
    }
  
    
    if(this.registerObj.name.trim()&&this.registerObj.email.trim()&&this.registerObj.password.trim())
      {this.userService.registerUser(this.registerObj).subscribe((res:any)=>{
        if(res) {
        alert("User Register Successfully!");
        this.router.navigateByUrl('/userlogin')
      } else {
        alert("User Register Failed!")
      }
    })
    return;
    }
      
    
    
  }
  

}
