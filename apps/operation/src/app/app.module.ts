import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OperationRoutingModule } from './app-routing.module';
import { OperationAppComponent } from './app.component';

@NgModule({
  declarations: [OperationAppComponent],
  imports: [BrowserModule, OperationRoutingModule],
  providers: [],
  exports: [OperationAppComponent],
  bootstrap: [OperationAppComponent]
})
export class OperationAppModule {}
