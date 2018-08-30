import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeImage]'
})
export class ChangeImageDirective {

  constructor(private elem: ElementRef) { }

}
