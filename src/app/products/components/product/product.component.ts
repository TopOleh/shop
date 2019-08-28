import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { Product } from '../../../core/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() buyProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  onBuy(product: Product): void {
    console.log('You have bought a ', product);
    this.buyProduct.emit(product);
  }

}
