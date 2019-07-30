import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from 'src/app/cart/services';
import { Product } from 'src/app/core/interfaces';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck, OnDestroy {

  public boughtProducts: Product[];
  public sum: number;
  public cartItems: number;

  private subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.getAllBoughtProducts().subscribe((products: Product[]) => {
      this.boughtProducts = products;
    });
  }

  ngDoCheck() {
    this.sum = this.cartService.calcCartSum(this.boughtProducts);
    this.cartItems = this.cartService.calcCartAmount(this.boughtProducts);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
