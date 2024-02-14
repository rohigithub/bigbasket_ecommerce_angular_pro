import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet ,RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  productObj: any = {
  "productName":""
  };
  
  constructor(private router: Router) {}
  
  onSearch(productName:any)
  {
    this.router.navigate(['/productByName', productName]);
  }
}
