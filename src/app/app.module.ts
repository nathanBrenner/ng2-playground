import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import appRoutes from './app.routes';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/constacts.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
