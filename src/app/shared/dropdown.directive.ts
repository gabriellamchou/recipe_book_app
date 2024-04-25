import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  //@Input() isOpen: boolean = false;

  //constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // @HostListener('click') select(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  //   if (this.isOpen) {
  //     this.renderer.addClass(this.elementRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.removeClass(this.elementRef.nativeElement,'open');
  //   }
  // }

}
