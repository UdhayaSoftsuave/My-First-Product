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
    this.products = this.productService.getAllProducts();
    this.productService.changedvalueEmit.subscribe(value => {
      this.products = value;
    })
  }
  
  onclickAddProduct(){
    this.router.navigate(['add'] , {relativeTo: this.activeroutes , queryParamsHandling : 'preserve'});
  }
  onclickProductDetails(id : number){
    this.router.navigate([id] , {relativeTo: this.activeroutes , queryParamsHandling : 'preserve'});
  }

}
