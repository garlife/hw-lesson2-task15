import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Square1Component } from './square1/square1.component';
import { Square2Component } from './square2/square2.component';
import { Square3Component } from './square3/square3.component';
import { Square4Component } from './square4/square4.component';
import { Square5Component } from './square5/square5.component';
import { Square3aComponent } from './square3/square3a/square3a.component';
import { Square4aComponent } from './square4/square4a/square4a.component';
import { Square4bComponent } from './square4/square4b/square4b.component';
import { Square5aComponent } from './square5/square5a/square5a.component';
import { Square5bComponent } from './square5/square5b/square5b.component';
import { Square5cComponent } from './square5/square5c/square5c.component';
import { Square5dComponent } from './square5/square5d/square5d.component';

@NgModule({
  declarations: [
    AppComponent,
    Square1Component,
    Square2Component,
    Square3Component,
    Square4Component,
    Square5Component,
    Square3aComponent,
    Square4aComponent,
    Square4bComponent,
    Square5aComponent,
    Square5bComponent,
    Square5cComponent,
    Square5dComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
