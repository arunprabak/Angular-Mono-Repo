import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MasterAppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MasterAppComponent],
  imports: [
    BrowserModule,
    // RouterModule.forChild([]),
    RouterModule.forRoot([]),
    BrowserAnimationsModule
  ],
  exports: [MasterAppComponent],
  providers: [],
  bootstrap: [MasterAppComponent]
})
export class MasterAppModule {}
