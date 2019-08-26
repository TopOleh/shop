import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';

import { ProductAvailableDirective } from './directives';

import {
  ProductComponent,
  ProductListComponent
} from './components';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAvailableDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule {}
