import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
