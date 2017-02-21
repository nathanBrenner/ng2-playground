import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { ChildrenStatusComponent } from './children-status/children-status.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusFormComponent,
    ChildrenStatusComponent,
    ChildrenStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
