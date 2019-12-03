import { NgModule } from '@angular/core';
import { FixWhenScrollingDirective } from './fix-when-scrolling.directive';
import { OutsideClickDirective } from './outside-click.directive';



@NgModule({
  declarations: [FixWhenScrollingDirective, OutsideClickDirective],
  imports: [
  ],
  exports: [FixWhenScrollingDirective, OutsideClickDirective]
})
export class KfngModule { }
