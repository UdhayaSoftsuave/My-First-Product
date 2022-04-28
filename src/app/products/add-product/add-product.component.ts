import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductModel } from 'src/app/common/productModel';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product !: FormGroup;

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.product = new FormGroup({
      "productName" : new FormControl(null),
      "price" : new FormControl(null),
      "descrption" : new FormControl(null),
      "category" : new FormControl(null),
      "imageUrl" : new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.product);
    this.productService.addProduct(this.product.value)
  }

}
