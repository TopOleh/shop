import { Component, OnInit, DoCheck } from '@angular/core';

import { Product } from 'src/app/core/interfaces';
import { CartService } from './../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  public boughtProducts: Product[];
  public sum: number;
  public cartItems: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.boughtProducts = this.cartService.getAllBoughtProducts();
  }

  ngDoCheck() {
    this.sum = this.cartService.calcCartSum(this.boughtProducts);
    this.cartItems = this.cartService.calcCartAmount(this.boughtProducts);
  }

  decreaseProduct(product: Product): void {
    this.cartService.decreaseProductAmount(product);
  }

  increaseProduct(product: Product): void {
    this.cartService.increaseProductAmount(product);
  }

  removeProduct(product: Product): void {
    this.cartService.removeProduct(product);
  }
}
