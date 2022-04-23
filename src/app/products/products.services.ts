import { ProductModel } from "../common/productModel";


export class ProductService{


    products : ProductModel[] = [
        new ProductModel(1 , 'watch1' ,100 , 'good' ,'watch','https://www.helioswatchstore.com/sites/all/themes/helios/assets/images/inside-banner_3.jpg'),
        new ProductModel(2 , 'shoes1' ,100 , 'super' ,'shoes' , "https://www.helioswatchstore.com/sites/all/themes/helios/assets/images/inside-banner_3.jpg"),
    ];

    getAllProducts(){
        return this.products;
    }

}