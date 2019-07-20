import { Product } from './../../../products/interfaces/product';
import { Component, OnInit, DoCheck } from '@angular/core';

import { CartService } from './../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  public boughtProducts: Product[];
  public sum: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.boughtProducts = this.cartService.getBoughtProducts();
  }

  ngDoCheck() {
    this.sum = this.cartService.calcCartSum(this.boughtProducts);
  }

}
