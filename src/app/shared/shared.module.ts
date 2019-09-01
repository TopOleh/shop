import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductHoverDirective } from './directives';
import { HostInspectDirective } from './directives/host-inspect.directive';

@NgModule({
  declarations: [ProductHoverDirective, HostInspectDirective],
  imports: [
    CommonModule
  ],
  exports: [ProductHoverDirective, HostInspectDirective ]
})
export class SharedModule { }
