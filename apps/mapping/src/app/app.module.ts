import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MappingAppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MappingAppComponent],
  imports: [BrowserModule, RouterModule.forChild([])],
  providers: [],
  exports: [MappingAppComponent],
  bootstrap: [MappingAppComponent]
})
export class MappingAppModule {}
