import {Directive, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {WINDOW} from './window-token';

@Directive({
  selector: '[kfngFixWhenScrolling]',
})
export class FixWhenScrollingDirective implements OnInit {

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const ne = this.el.nativeElement;
    const offsetTop = ne.offsetTop;

    this.renderer.listen('window', 'scroll', (event) => {
        const scrollY = event.currentTarget.scrollY;
        if (scrollY > offsetTop) {
          this.setStyles(ne);
        } else {
          this.removeStyles(ne);
        }
      }
    );
    this.renderer.listen('window', 'resize', (event) => {
      const scrollY = event.currentTarget.scrollY;
      if (scrollY > offsetTop) {
        this.removeStyles(ne);
        this.setStyles(ne);
      }
    });
  }

  private removeStyles(ne: HTMLElement) {
    const styles = ['position', 'top', 'left', 'width', 'z-index'];
    for (const style of styles) {
      this.renderer.removeStyle(ne, style);
    }
  }

  private setStyles(ne: HTMLElement) {
    const styles = {
      position: 'fixed',
      top: '0',
      left: ne.offsetLeft.toString(),
      width: window.getComputedStyle(ne).width,
      'z-index': '2',
    };
    for (const [style, styleValue] of Object.entries(styles)) {
      this.renderer.setStyle(ne, style, styleValue);
    }
  }
}
