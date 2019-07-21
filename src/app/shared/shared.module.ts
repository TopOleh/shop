import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAvailableDirective } from './directives';



@NgModule({
  declarations: [ProductAvailableDirective],
  imports: [
    CommonModule
  ],
  exports: [ProductAvailableDirective]
})
export class SharedModule { }
