import { Component } from '@angular/core';
import {Observable, range} from 'rxjs';
import {toArray} from 'rxjs/operators';

@Component({
  selector: 'kfng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngDx';
  isOpen = true;
  numbers: Observable<number[]>;

  constructor() {
    this.numbers = range(1, 100)
      .pipe(
        toArray()
      );
  }
  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }
}
