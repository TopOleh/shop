import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductHoverDirective } from './directives';

@NgModule({
  declarations: [ProductHoverDirective],
  imports: [
    CommonModule
  ],
  exports: [ProductHoverDirective]
})
export class SharedModule { }
