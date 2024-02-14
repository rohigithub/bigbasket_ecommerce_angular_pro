import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-by-name',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './products-by-name.component.html',
  styleUrl: './products-by-name.component.css'
})
export class ProductsByNameComponent {
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

  activeCategoryName: any;
  products: any= [];

  constructor(private activatedRoute: ActivatedRoute,private productSrv: ProductService) {
    this.activatedRoute.params.subscribe((res:any) => {
      this.activeCategoryName =  res.id;
      this.loadProducts();
    })
  }
  

  loadProducts () {
    this.productSrv.getProductsByName(this.activeCategoryName).subscribe((res:any)=>{
      this.products = res;
    })
  }
  ngOnInit(): void {
    this.loadProducts();
    this.getAllCategory();
  }
  // getProducts() {
  //   this.productSrv.getProducts().subscribe((res:any)=>{
  //     this.productsList = res;
  //   })
  // }

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
        //this.getProducts();
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
        //this.getProducts();
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
          //this.getProducts();
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
