import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() public appClickOutside = new EventEmitter<void>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    console.log('Document clicked:', event);
    if (!this._elementRef.nativeElement.contains(event.target)) {
      console.log('Click outside detected');
      this.appClickOutside.emit();
    }
  }
}
