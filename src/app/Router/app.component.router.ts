import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "../products/product-list/product-list.component";
import { ProductsComponent } from "../products/products.component";


const routes = [
    {path : "products" , component : ProductListComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRouter {

}