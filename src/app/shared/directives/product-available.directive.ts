import { ProductComponent } from './../../products/components/product/product.component';
import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

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

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'hovered');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'hovered');
  }


  constructor(private host: ProductComponent, private el: ElementRef, private renderer: Renderer2) { }

}
