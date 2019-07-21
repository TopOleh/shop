import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/products/interfaces';
import { ProductService } from 'src/app/products/services';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public boughtProducts: Product[] = [];
  public productList: Product[] = this.productService.getProducts();

  constructor(private productService: ProductService) { }

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

  decreseProductAmount(product: Product) {
    const productInList = this.productList.filter((p: Product) => p.name === product.name);

    product.amount -= 1;
    productInList[0].amount += 1;

    if (product.amount <= 0) {
      const prodToRemove = this.boughtProducts.indexOf(product);
      this.boughtProducts.splice(prodToRemove, 1);
    }

    if (productInList[0].amount > 0) {
      productInList[0].isAvailable = true;
    }
  }

  increseProductAmount(product: Product) {
    const productInList = this.productList.filter((p: Product) => p.name === product.name);

    product.amount += 1;
    productInList[0].amount -= 1;

    if (productInList[0].amount === 0) {
      productInList[0].isAvailable = false;
    }
  }
}
