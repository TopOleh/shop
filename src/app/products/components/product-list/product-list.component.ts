import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces';

import { ProductService } from '../../services';
import { CartService } from './../../../cart/services/';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  constructor(
    private productService: ProductService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  onBuyProduct(product: Product) {
    product.amount -= 1;
    if (product.amount === 0) {
      product.isAvailable = false;
    }
    this.cartService.addToCart(product);
  }
}
