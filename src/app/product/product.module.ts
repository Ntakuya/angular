import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductAlertComponent } from "./product-alert/product-alert.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
