import { Product } from 'src/app/core/interfaces';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product;
  @Output() decrease: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() increase: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onDecrease(product: Product) {
    this.decrease.emit(product);
  }

  onIncrease(product: Product) {
    this.increase.emit(product);
  }

  onRemove(product: Product) {
    this.remove.emit(product);
  }
}
