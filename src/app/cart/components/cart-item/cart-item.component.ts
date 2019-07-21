import { Product } from 'src/app/products/interfaces';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product;
  @Output() decrese: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() increse: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onDecrese(product: Product) {
    this.decrese.emit(product);
  }

  onIncrese(product: Product) {
    this.increse.emit(product);
  }

  onRemove(product: Product) {
    this.remove.emit(product);
  }
}
