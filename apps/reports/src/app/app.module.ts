import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReportAppComponent } from './app.component';
import { ReportsRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ReportAppComponent],
  imports: [BrowserModule, ReportsRoutingModule],
  providers: [],
  exports: [ReportAppComponent],
  bootstrap: [ReportAppComponent]
})
export class ReportAppModule {}
