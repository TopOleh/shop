import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    SharedModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule {}
