import { Directive, HostBinding } from '@angular/core';

import { ProductComponent } from '../components/product/product.component';

@Directive({
  selector: '[appProductAvailable]'
})
export class ProductAvailableDirective {
  @HostBinding('class.in-stock') get inStock() {
    return !!this.host.product.amount;
  }

  @HostBinding('class.out-stock') get outStock() {
    return !this.host.product.amount;
  }


  constructor(private host: ProductComponent) { }

}
