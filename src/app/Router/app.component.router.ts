import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "../products/product-list/product-list.component";


const routes = [
    {path : "" , component : ProductListComponent},
    {path : "products" , component : ProductListComponent}
    
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRouter {

}