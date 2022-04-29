import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from 'src/app/common/productModel';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService : ProductService,
    private activeRoutes : ActivatedRoute ) { }

  id !: number;
  
  product !: ProductModel;

  ngOnInit(): void {
    this.activeRoutes.params.subscribe(
      (value : Params) => {
          this.id = value['id'];
          this.productService.getProductById(+this.id).subscribe(value => {
            this.product = value;
          });
    })
    
  }

}
