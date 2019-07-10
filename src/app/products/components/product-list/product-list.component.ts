import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuyProduct(product: Product) {
    console.log('Product bought', product);
  }
}
