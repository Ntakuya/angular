import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product;
  products = [];
  constructor(
    private route: ActivatedRoute,
    private readonly cartService: CartService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = this.products[+params.get("productId")];
    });
  }
}
