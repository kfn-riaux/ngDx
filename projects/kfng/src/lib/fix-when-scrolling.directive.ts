import {Directive, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {WINDOW} from './window-token';
@Directive({
  selector: '[kfngFixWhenScrolling]',
})
export class FixWhenScrollingDirective implements OnInit {

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2, @Inject(WINDOW) private windowRef: any) {
  }

  ngOnInit(): void {
    const ne = this.el.nativeElement;
    const offsetTop = ne.offsetTop;
    const styles = {
      position: 'fixed',
      top: '0',
      left: ne.offsetLeft.toString(),
      width: this.windowRef.getComputedStyle(ne).width,
      'z-index': '2',
    };

    this.renderer.listen('window', 'scroll',
      (event) => {
        const scrollY = event.currentTarget.scrollY;
        if (scrollY > offsetTop) {
          for (const [style, styleValue] of Object.entries(styles)) {
            this.renderer.setStyle(ne, style, styleValue);
          }
        } else {
          for (const style of Object.keys(styles)) {
            this.renderer.removeStyle(ne, style);
          }
        }
      });
  }
}
