
import { HttpClient, HttpHeaders, HttpParams  } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { ProductModel } from "../common/productModel";

@Injectable()
export class ProductService implements OnInit{

    changedvalueEmit = new Subject<ProductModel[]>();

    // products : ProductModel[] = [
    //     new ProductModel(132 , 'watch1' ,100 , 'good' ,'watch','https://www.helioswatchstore.com/sites/all/themes/helios/assets/images/inside-banner_3.jpg'),
    //     new ProductModel(223 , 'shoes1' ,100 , 'super' ,'shoes' , "https://www.helioswatchstore.com/sites/all/themes/helios/assets/images/inside-banner_3.jpg"),
    // ];
    products : ProductModel[] = [];
    result !: ProductModel ;
    constructor(private http : HttpClient){

    }
    ngOnInit(): void {
    }

    getAllProducts(){
        return this.products.slice();
    }

    getindex(){
        return this.products.length;
    }

    getProductById(id:number){
        console.log("http://localhost:9092/product/"+id);
        
        this.http.get<ProductModel>("http://localhost:9092/product/id" )
        .subscribe(value => {
            this.result = value;
            console.log(value);
        })
        return this.result; 
    }

    addProduct(productModel : ProductModel){
        this.http.post<ProductModel>("http://localhost:9092/product" ,productModel ,{
            headers :new HttpHeaders({'custom' : "hello"})
        })
        .subscribe(value => {
            this.products.push(value);
            this.changedvalueEmit.next(this.products);
        })
    }

    getProduct(){
        this.http.get<ProductModel[]>("http://localhost:9092/product")
        .subscribe(value => {
            value.forEach(val => {
                this.products.push(val);
            })
            this.changedvalueEmit.next(this.products);
            // Object.entries(value).forEach(([key, val]) => {
            //     console.log(val);
            //     this.products.push(new ProductModel(val.id , val.productName , val.price,val.descrption,val.category,val.imageUrl));
            // });      
        })
        console.log(this.products);
        return this.products.slice();
        
    }

}