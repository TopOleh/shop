import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHostInspect]'
})
export class HostInspectDirective {
  @Input() color: string;

  @HostListener('click') onclick() {
    console.log(this.ref.nativeElement, this.ref.nativeElement.clientHeight);
    this.renderer.setStyle(this.ref.nativeElement, 'background-color', this.color);
  }

  constructor( private ref: ElementRef, private renderer: Renderer2) { }

}
