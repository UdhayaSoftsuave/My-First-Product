import { EventEmitter, OnInit } from "@angular/core";
import { of, Subject } from "rxjs";
import { ProductModel } from "../common/productModel";


export class ProductService {

    changedvalueEmit = new Subject<ProductModel[]>();

    products : ProductModel[] = [
        new ProductModel(1 , 'watch1' ,100 , 'good' ,'watch','https://www.helioswatchstore.com/sites/all/themes/helios/assets/images/inside-banner_3.jpg'),
        new ProductModel(2 , 'shoes1' ,100 , 'super' ,'shoes' , "https://www.helioswatchstore.com/sites/all/themes/helios/assets/images/inside-banner_3.jpg"),
    ];
    constructor(){

    }

    getAllProducts(){
        return this.products.slice();
    }

    addProduct(productModel : ProductModel){
        this.products.push(productModel);
        this.changedvalueEmit.next(this.products);
    }

    getindex(){
        return this.products.length;
    }

    getProductById(id:number){
        return this.products[+id - 1];
    }

}