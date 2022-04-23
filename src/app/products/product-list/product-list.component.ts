import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/common/productModel';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService : ProductService) { }
  // product = new ProductModel(1 , 'watch1' ,100 , 'good' ,'watch')

  products !: ProductModel[];
 
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

}
