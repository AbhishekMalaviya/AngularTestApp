import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './Server/server/server.component';
import { WarningComponent } from './warning/warning.component';
import { AlertComponent } from './alert/alert.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningComponent,
    AlertComponent,
    Assignment3Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
