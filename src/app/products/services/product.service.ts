import { Injectable } from '@angular/core';

import { Product } from '../interfaces';
import { Categories } from './../categories';
import { PRODUCTS_LIST} from '../mock/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS_LIST.map(product => {
      const newCategory = Categories[product.category];
      product.category = newCategory;
      return product;
    });
  }
}
