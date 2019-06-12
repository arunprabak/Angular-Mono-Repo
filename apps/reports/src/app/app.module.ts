import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReportAppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReportAppComponent],
  imports: [BrowserModule, RouterModule.forChild([])],
  providers: [],
  exports: [ReportAppComponent],
  bootstrap: [ReportAppComponent]
})
export class ReportAppModule {}
