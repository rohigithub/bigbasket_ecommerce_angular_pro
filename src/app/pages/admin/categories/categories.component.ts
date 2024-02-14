import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable, map, retry } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categoryObj: any = {
    "categoryId":0,
    "categoryName": ""
  };
  apiCategory:any=[];
  ngOnInit():void{
    this.getApiCategory();
  }
  constructor(private category: ProductService){}

  getApiCategory(){
    this.category.getCategory().subscribe((response)=>{this.apiCategory=response})
  }
  onSave() {
    if (!this.categoryObj.categoryName.trim()) {
      alert('Category Name cannot be empty');
      return;
    }
    this.category.saveCategory(this.categoryObj).subscribe((res:any)=>{
      debugger;
      if(res) {
        alert("Category Created");
        this.getApiCategory();
      } else {
        alert(res.message)
      }
    })
  }
  onEdit(item: any) {
    this.categoryObj = item;
  }
  onUpdate() {
    this.category.saveCategory(this.categoryObj).subscribe((res:any)=>{
      debugger;
      if(res) {
        alert("Category Updated");
        this.getApiCategory();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(item: any) {
    const isDelete = confirm('Are you Sure want to delte');
    if(isDelete) {
      this.category.deleteCategory(item.categoryId).subscribe((res:any)=>{
        if(res) {
          alert("Product Deleted");
          this.getApiCategory();
        } else {
          alert(res.message)
        }
      })
    }
  } 
}
