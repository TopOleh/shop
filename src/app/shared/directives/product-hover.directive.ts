import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductHover]'
})
export class ProductHoverDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'hovered');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'hovered');
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }
}
