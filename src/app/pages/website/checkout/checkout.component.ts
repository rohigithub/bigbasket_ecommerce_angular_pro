import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  orderObj: any = {
    userName:'',
    userEmail: '',
    address: '',
    state:'',
    postalCode:'',
    contact:''
  };
  constructor(private router: Router,private userService: UserService ){}
  

  onSubmit()
  {
    this.userService.addOrder(this.orderObj).subscribe((res:any)=>{
        if(res) {
        alert("Order Placed Successfully!");
        this.router.navigateByUrl('/Allproducts')
      } else {
        alert("Order Placed Failed!")
      }
    })
  }
}
