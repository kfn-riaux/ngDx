import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {KfngModule} from '../../projects/kfng/src/lib/kfng.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        KfngModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
