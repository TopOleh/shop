import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public boughtProducts: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.boughtProducts.push(product);
  }

  getBoughtProducts(): Product[] {
    return this.boughtProducts;
  }
}
