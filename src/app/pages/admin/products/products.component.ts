import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  isSidePanelVisible: boolean= false;
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  };
  categoryList: any [] = [];
  productsList: any [] = [];

  constructor(private productSrv: ProductService) {
    
  }
  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }
  getProducts() {
    this.productSrv.getProducts().subscribe((res:any)=>{
      this.productsList = res;
    })
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res;
    })
  }
  onUpdate() {
    this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res) {
        alert("Product Updation Success");
        this.getProducts();
      } else {
        alert("Product Updation Failed")
      }
    })
  }
  onSave() {
    
    if (!this.productObj.productName.trim()) {
      alert('Product name cannot be empty');
      return;
    }
    if (!isNaN(Number(this.productObj.productName))) {
      alert('Product name cannot contain numbers');
      return;
    }
  
    if (!this.productObj.productShortName.trim()) {
      alert('Product short name cannot be empty');
      return;
    }
  
    if (!this.productObj.productPrice) {
      alert('Product price cannot be empty');
      return;
    }

    if (isNaN(this.productObj.productPrice)) {
      alert('Product price must be a valid number');
      return;
    }
  
    if (!this.productObj.categoryId) {
      alert('Category is required');
      return;
    }
  
    if (!this.productObj.deliveryTimeSpan.trim()) {
      alert('Delivery time span cannot be empty');
      return;
    }
  
    if (!this.productObj.productImageUrl.trim()) {
      alert('Product image URL cannot be empty');
      return;
    }
  
    if (!this.productObj.productDescription.trim()) {
      alert('Product description cannot be empty');
      return;
    }
    if(this.productObj.productSku.trim()&&this.productObj.productName.trim()&&this.productObj.productShortName.trim()&&this.productObj.productPrice.trim()&&this.productObj.categoryId.trim()&&this.productObj.deliveryTimeSpan.trim()&&this.productObj.productImageUrl.trim()&&this.productObj.productDescription.trim())
      {this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
        if(res) {
        alert("Product Created Successfully!");
        this.getProducts();
      } else {
        alert("Prduct Creation Failed!")
      }
    })
    return;
  }
      
    
    
  }
  onDelete(item: any) {
    const isDelete = confirm('Are you Sure want to delete');
    if(isDelete) {
      this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
        debugger;
        if(res) {
          alert("Product Deleted");
          this.getProducts();
        } else {
          alert("Product Deletetion Failed!")
        }
      })
    }
  }

  onEdit(item: any) {
    this.productObj = item;
    this.openSidePanel();
  }


  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

}
