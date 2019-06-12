import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MappingAppRoutingModule } from './app-routing.module';
import { MappingAppComponent } from './app.component';

@NgModule({
  declarations: [MappingAppComponent],
  imports: [BrowserModule, MappingAppRoutingModule],
  providers: [],
  exports: [MappingAppComponent],
  bootstrap: [MappingAppComponent]
})
export class MappingAppModule {}
