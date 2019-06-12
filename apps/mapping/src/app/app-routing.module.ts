import { NgModule } from '@angular/core';
import { MappingAppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [],
  // imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
  bootstrap: []
})
export class MappingAppRoutingModule {}
