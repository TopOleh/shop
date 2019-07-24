import { Injectable } from '@angular/core';

// rxjs
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/core/interfaces';
import { Categories } from './../categories';
import { PRODUCT_LIST } from '../mock/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return from(PRODUCT_LIST).pipe(
      map((product: Product) => {
        const newCategory = Categories[product.category];
        product.category = newCategory;
        return [...PRODUCT_LIST, product];
      })
    );
  }

  getProduct(product: Product): Product {
    return PRODUCT_LIST.filter((p: Product) => p.name === product.name)[0];
  }
}
