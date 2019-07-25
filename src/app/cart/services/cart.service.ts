import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/products/services';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public boughtProductsAmount: number;
  public boughtProducts: Product[] = [];
  public productList: Product[] = this.productService.getAllProducts();

  constructor(private productService: ProductService) { }

  addToCart(product: Product): void {
    const sameProduct: Product = this.getBoughtProduct(product);

    if (sameProduct) {
      sameProduct.amount += 1;
    } else {
      const boughtProd: Product = Object.create(product);
      boughtProd.amount = 1;
      this.boughtProducts.push(boughtProd);
    }
  }

  getBoughtProduct(product: Product): Product {
    return this.boughtProducts.filter((p: Product) => p.name === product.name)[0];
  }

  getAllBoughtProducts(): Product[] {
    return this.boughtProducts;
  }

  calcCartSum(products: Product[]): number {
    return products.reduce((acc: number, val: Product) => acc + (val.price * val.amount), 0);
  }

  calcCartAmount(products: Product[]): number {
    return products.reduce((acc: number, val: Product) => acc + val.amount, 0);
  }

  decreaseProductAmount(product: Product): void {
    const productInList: Product = this.productService.getProduct(product);

    product.amount -= 1;
    productInList.amount += 1;

    if (product.amount <= 0) {
      this.removeProduct(product);
    }

    if (productInList.amount > 0) {
      productInList.isAvailable = true;
    }
  }

  increaseProductAmount(product: Product): void {
    const productInList: Product = this.productService.getProduct(product);

    product.amount += 1;
    productInList.amount -= 1;

    if (productInList.amount === 0) {
      productInList.isAvailable = false;
    }
  }

  removeProduct(product: Product): void {
    const prodToRemove: number = this.boughtProducts.indexOf(product);
    const productInList: Product = this.productService.getProduct(product);

    this.boughtProducts.splice(prodToRemove, 1);

    productInList.amount += product.amount;
    productInList.isAvailable = true;
  }
}
