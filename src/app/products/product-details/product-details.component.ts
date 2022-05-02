import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductModel } from 'src/app/common/productModel';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService : ProductService,
    private activeRoutes : ActivatedRoute ,
    private routes : Router) { }

  id !: number;
  
  product : ProductModel = new ProductModel(0 , "null" , 0 , "null" , "null" , "null");

  ngOnInit(): void {
    this.activeRoutes.params.subscribe(
      (value : Params) => {
          this.id = value['id'];
          this.productService.getProductById(+this.id).subscribe(value => {
            this.product = value;
          });
    })

    
  }

  onEditSelect(){
    this.routes.navigate(['edit'] ,{relativeTo : this.activeRoutes ,queryParamsHandling : 'preserve'});
  //   this.productService.updateProducts(this.product)
  //   .subscribe(value => {
  //     console.log(value);
      
  // });
  }
  onDeleteSelect(){
    this.productService.deleteProducts(this.id)
    .subscribe(value => {
      this.productService.getProduct().subscribe(Allavlue => {
        this.productService.changedvalueEmit.next(Allavlue);
        this.routes.navigate(['products']);
    })  
  });
  }

}
