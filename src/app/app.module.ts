import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstcomponentComponent } from './my-firstcomponent/my-firstcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
