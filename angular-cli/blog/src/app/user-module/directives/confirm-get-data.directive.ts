import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appConfirmGetData]'
})
export class ConfirmGetDataDirective {
  @Input() message: string;
  @Output('onConfirm') onConfirm = new EventEmitter();

  constructor() { }

  @HostListener('click') onClickButton() {
      this.onConfirm.emit(window.confirm(this.message));
  }

}
