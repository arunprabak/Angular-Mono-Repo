import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { JEAppComponent } from './app.component';

@NgModule({
  declarations: [JEAppComponent],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule, JEAppComponent],
  providers: [],
  bootstrap: [JEAppComponent]
})
export class JEAppModule {}
