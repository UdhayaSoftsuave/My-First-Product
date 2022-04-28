import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductModel } from './common/productModel';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/products.services';
import { SelectProductComponent } from './products/select-product/select-product.component';
import { AppRouter } from './Router/app.component.router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    AddProductComponent,
    SelectProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouter
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
