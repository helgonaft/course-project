import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.open = !this.open;
  }
}
