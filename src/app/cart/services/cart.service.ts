import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public boughtProducts: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    const sameProduct: Product[] = this.boughtProducts.filter((p: Product) => p.name === product.name);

    if (sameProduct.length) {
      sameProduct[0].amount += 1;
    } else {
      const boughtProd: Product = Object.create(product);
      boughtProd.amount = 1;
      this.boughtProducts.push(boughtProd);
    }
  }

  getBoughtProducts(): Product[] {
    return this.boughtProducts;
  }

  calcCartSum(products: Product[]): number {
    return products.reduce((acc: number, val: Product) => acc + (val.price * val.amount), 0);
  }

  calcCartAmount(products: Product[]): number {
    return products.reduce((acc: number, val: Product) => acc + val.amount, 0);
  }
}
