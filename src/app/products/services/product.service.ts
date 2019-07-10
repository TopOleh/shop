import { Injectable } from '@angular/core';

import { Product } from '../interfaces';
import { PRODUCTS_LIST} from '../mock/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS_LIST;
  }
}
