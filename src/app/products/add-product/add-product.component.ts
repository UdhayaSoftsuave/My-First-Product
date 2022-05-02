import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/common/productModel';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product !: FormGroup;
  id !: number;

  constructor(private productService :ProductService ,
     private activeRoutes : ActivatedRoute,
     private router : Router) { }

  ngOnInit(): void {
    this.product = new FormGroup({
      "productName" : new FormControl(null),
      "price" : new FormControl(null),
      "descrption" : new FormControl(null),
      "category" : new FormControl(null),
      "imageUrl" : new FormControl(null)
    })
    this.activeRoutes.params.subscribe(value => {
      this.id = value['id'];
      if (this.id != undefined) {
        this.productService.getProductById(this.id).subscribe(value => {
          this.product = new FormGroup({
            "productName" : new FormControl(value.productName),
            "price" : new FormControl(value.price),
            "descrption" : new FormControl(value.descrption),
            "category" : new FormControl(value.category),
            "imageUrl" : new FormControl(value.imageUrl)
          })
        });
      }
    }) 
  }

  onSubmit(){
    if (this.id != undefined) {
      const updateValue = new ProductModel(
          this.id ,
          this.product.value.productName,
          this.product.value.price,
          this.product.value.descrption,
          this.product.value.category,
          this.product.value.imageUrl )
      console.log(this.product.value.productName);
      
      this.productService.updateProducts(updateValue).subscribe(value => {
        this.productService.getProduct().subscribe(Allavlue => {
          this.productService.changedvalueEmit.next(Allavlue);
          this.router.navigate(['/products']);
      })
      })
    }else{
      this.productService.addProduct(this.product.value)
    }
  }

}
