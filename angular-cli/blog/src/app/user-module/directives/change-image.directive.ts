import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeImage]'
})
export class ChangeImageDirective {

  public sizeImage = 1;
  @Input() image: any;
  @HostListener('click') onclick() {
    switch (this.sizeImage) {
      case 1:
        this.renderer.setAttribute(this.elem.nativeElement, 'src', this.image.medium);
        this.sizeImage = 2; break;
      case 2:
        this.renderer.setAttribute(this.elem.nativeElement, 'src', this.image.thumbnail);
        this.sizeImage = 3; break;
      case 3:
        this.renderer.setAttribute(this.elem.nativeElement, 'src', this.image.large);
        this.sizeImage = 1; break;
    }
  }

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

}
