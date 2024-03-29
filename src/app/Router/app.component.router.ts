import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddProductComponent } from "../products/add-product/add-product.component";
import { ProductDetailsComponent } from "../products/product-details/product-details.component";
import { ProductListComponent } from "../products/product-list/product-list.component";
import { ProductsComponent } from "../products/products.component";
import { SelectProductComponent } from "../products/select-product/select-product.component";


const routes = [
    {path : "" , component : ProductsComponent},
    {path : "products" , component : ProductListComponent , children :[
        {path : "" , component : SelectProductComponent},
        {path : "add" , component : AddProductComponent},
        {path : ":id" , component : ProductDetailsComponent},
        {path : ":id/edit" , component : AddProductComponent},
    ]}
    
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRouter {

}