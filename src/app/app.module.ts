import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewComponent } from './new/new.component';
import { MatNativeDateModule } from '@angular/material/'

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule
],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
