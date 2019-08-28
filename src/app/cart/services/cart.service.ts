import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/products/services';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public boughtProductsAmount: number;
  public boughtProducts: Product[] = [];
  public productList: Product[] = this.productService.getProducts();

  constructor(private productService: ProductService) { }

  addToCart(product: Product): boolean {
    const sameProduct: Product = this.getBoughtProduct(product);

    if (product.qty > product.amount) {
      return false;
    }

    product.amount -= product.qty;

    if (product.amount === 0) {
      product.isAvailable = false;
    }

    if (sameProduct) {
      sameProduct.qty += product.qty;
    } else {
      const boughtProd: Product = Object.create(product);
      boughtProd.qty = product.qty;
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
    return products.reduce((acc: number, val: Product) => acc + (val.price * val.qty), 0);
  }

  calcCartAmount(products: Product[]): number {
    return products.reduce((acc: number, val: Product) => acc + val.qty, 0);
  }

  decreaseProductAmount(product: Product): void {
    const productInList: Product = this.productService.getProduct(product);

    product.qty -= 1;
    productInList.amount += 1;

    if (product.qty <= 0) {
      this.removeProduct(product);
    }

    if (productInList.qty < productInList.amount) {
      productInList.isAvailable = true;
    }
  }

  increaseProductAmount(product: Product): void {
    const productInList: Product = this.productService.getProduct(product);

    product.qty += 1;
    productInList.amount -= 1;

    if (productInList.amount === product.qty) {
      productInList.isAvailable = false;
    }
  }

  removeProduct(product: Product): void {
    const prodToRemove: number = this.boughtProducts.indexOf(product);
    const productInList: Product = this.productService.getProduct(product);

    this.boughtProducts.splice(prodToRemove, 1);

    productInList.amount += product.qty;
    productInList.isAvailable = true;
  }
}
