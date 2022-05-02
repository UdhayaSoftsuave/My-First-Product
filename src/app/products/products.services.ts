
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


    getProductById(id:number){       
        let param = new HttpParams();
        param = param.append('id' , 12);
        param = param.append('name' , 'udhaya');
        return this.http.get<ProductModel>("http://localhost:9092/product/"+  id,
        {
            headers : new HttpHeaders({'Aythorization': "true"}),
            params : param,
            responseType : "json"
        });
    }

    addProduct(productModel : ProductModel){
        this.http.post<ProductModel>("http://localhost:9092/product" ,productModel ,{
            headers :new HttpHeaders({'custom' : "hello"})
        })
        .subscribe(value => {
            this.getProduct().subscribe(Allavlue => {
                this.changedvalueEmit.next(Allavlue);
            })   
        })
    }

    getProduct(){
        // let product: ProductModel[] = [];
        return this.http.get<ProductModel[]>("http://localhost:9092/product")
        // .subscribe(value => {
        //         product = value;
        //     this.changedvalueEmit.next(product);
        //     // Object.entries(value).forEach(([key, val]) => {
        //     //     console.log(val);
        //     //     this.products.push(new ProductModel(val.id , val.productName , val.price,val.descrption,val.category,val.imageUrl));
        //     // });      
        // })
        // // console.log(this.products);
        // return product;   
    }
    updateProducts(value: ProductModel){
        return this.http.put<ProductModel>("http://localhost:9092/product",value);
    }

    deleteProducts(id : number){
        return this.http.delete<void>("http://localhost:9092/product/" +id);
        
    }
}