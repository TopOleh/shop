import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from './../products/products.module';

import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    ProductsModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
