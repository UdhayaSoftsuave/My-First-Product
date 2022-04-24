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

  @ViewChild('image', { static: true })
  image!: ElementRef;

  product ! : ProductModel;
  
  products ! : ProductModel[];

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts();
  }

  onSubmit(){
    this.product= new ProductModel(
      this.productService.getindex() + 1, 
      this.productName.nativeElement.value,
      +this.price.nativeElement.value , 
      this.description.nativeElement.value ,
      this.category.nativeElement.value,
      this.image.nativeElement.value),
    this.productService.addProduct(this.product);
    console.log(this.product);
    this.products.push(this.product);
    this.productService.changedvalueEmit.emit(this.products);
    
    
  }

}
