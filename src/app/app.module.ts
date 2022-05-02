import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/products.services';
import { SelectProductComponent } from './products/select-product/select-product.component';
import { AppRouter } from './Router/app.component.router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInterceptor } from './app.interceptor.service';
import { LoggingInterceptor } from './app.Logging.interceptor';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    AddProductComponent,
    SelectProductComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouter
  ],
  providers: [ProductService , 
    {provide : HTTP_INTERCEPTORS , useClass : LoggingInterceptor , multi : true},
    {provide : HTTP_INTERCEPTORS , useClass : AppInterceptor , multi : true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
