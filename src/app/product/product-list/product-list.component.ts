import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products$ = this.apiService.getProducts$();
  constructor(private readonly apiService: ProductService) {
    console.log(this);
  }

  ngOnInit(): void {}

  products = [];

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}
