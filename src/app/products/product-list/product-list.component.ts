import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/common/productModel';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService : ProductService , 
    private router : Router , 
    private activeroutes : ActivatedRoute) { }

  products !: ProductModel[];
 
  ngOnInit(): void {
    this.products = this.productService.getAllProducts()
  }
  
  onclick(){
    this.router.navigate(['add'] , {relativeTo: this.activeroutes , queryParamsHandling : 'preserve'});
  }

}
