import {Directive, ElementRef, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[kfngOutsideClick]'
})
export class OutsideClickDirective implements OnInit {

  @Output('kfngOutsideClick') outsideClick: EventEmitter<MouseEvent>;
  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
    this.outsideClick = new EventEmitter<MouseEvent>();
  }

  ngOnInit(): void {
    this.renderer.listen('document', 'click', event => {
      if (!this.el.nativeElement.contains(event.target)) {
        this.outsideClick.emit(event);
      }
    });
  }

}
