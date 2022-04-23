import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from 'src/app/common/productModel';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @ViewChild('productName', { static: true })
  productName!: ElementRef;

  @ViewChild('price', { static: true })
  price!: ElementRef;

  @ViewChild('description', { static: true })
  description!: ElementRef;

  @ViewChild('category', { static: true })
  category!: ElementRef;

  product ! : ProductModel;

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.product= new ProductModel(
      this.productService.getindex(), 
      this.productName.nativeElement.value,
      +this.price.nativeElement.value , 
      this.description.nativeElement.value ,
      this.category.nativeElement.value,
      'https://www.helioswatchstore.com/sites/all/themes/helios/assets/images/inside-banner_3.jpg'),
    this.productService.addProduct(this.product);
    console.log(this.product);
  }

}
