import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OperationAppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OperationAppComponent],
  imports: [BrowserModule, RouterModule.forChild([])],
  providers: [],
  exports: [OperationAppComponent],
  bootstrap: [OperationAppComponent]
})
export class OperationAppModule {}
