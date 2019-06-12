import { ReportAppComponent } from './../../../reports/src/app/app.component';
import { OperationAppComponent } from './../../../operation/src/app/app.component';
import { MappingAppComponent } from './../../../mapping/src/app/app.component';
import { JEAppComponent } from './../../../journal-entry/src/app/app.component';
import { MasterAppComponent } from './../../../master/src/app/app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'finance',
    component: JEAppComponent
  },
  {
    path: 'master',
    component: MasterAppComponent
  },
  {
    path: 'mapping',
    component: MappingAppComponent
  },

  {
    path: 'operation',
    component: OperationAppComponent
  },
  {
    path: 'report',
    component: ReportAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
