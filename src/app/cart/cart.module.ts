import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from './../products/products.module';

import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    ProductsModule,
    SharedModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
