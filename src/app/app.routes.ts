import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProductsByNameComponent } from './pages/admin/products-by-name/products-by-name.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'Allproducts',
        //redirectTo:'Allproducts',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'userlogin',
        component:UserLoginComponent
    },
    {
        path:'userRegister',
        component:RegisterComponent
    },
    {
        path:'',
        component:LandingComponent,
        children: [
            {
                path:'Allproducts',
                component:WebProductsComponent,
                title:'All-Products'
            },
            {
                path:'products/:id',
                component:CategoryProductsComponent
            },
            {
                path:'checkout',
                component:CheckoutComponent
            }
        ]
    },
    
    
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'products',
                component: ProductsComponent
            },
            {
                path:'category',
                component: CategoriesComponent
            },
            {
                path:'productsByName',
                component:ProductsByNameComponent
            }
        ]
    }

];
