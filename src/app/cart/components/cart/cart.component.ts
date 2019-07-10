import { Product } from './../../../products/interfaces/product';
import { Component, OnInit } from '@angular/core';

import { CartService } from './../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public boughtProducts: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.boughtProducts = this.cartService.getBoughtProducts();
  }

}
