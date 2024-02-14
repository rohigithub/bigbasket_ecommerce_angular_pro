import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'web-products-products',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule,RouterOutlet],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  productList: any[] = [];
  categoryList: any[] = [];
  loggedInObj: any = {};

  constructor(private prodSrv: ProductService, private router: Router) {
    const localData = localStorage.getItem('bigBasket_user');
    if (localData !== null) {
      const parseObj = JSON.parse(localData);
      this.loggedInObj = parseObj;
    }
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  navigateToPRoducts(id: number) {
    this.router.navigate(['/products', id]);
  }

  addToCart(productId: number) {
    const addToCartObj = {
      "cartId": 0,
      "custId": 1,
      "productId": productId,
      "quantity": 1,
      "addedDate": new Date()
    };
    this.prodSrv.addToCart(addToCartObj).subscribe((res: any) => {
      if (res.result) {
        alert("Product Added to cart");
        this.prodSrv.cartUpdated$.next(true);
      } else {
        alert(res.message)
      }
    });
  }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res: any) => {
      this.productList = res;
    });
  }
  getAllCategory() {
    this.prodSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res;
    });
  }

}
