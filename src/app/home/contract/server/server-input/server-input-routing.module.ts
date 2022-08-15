import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerInputPage } from './server-input.page';

const routes: Routes = [
  {
    path: '',
    component: ServerInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerInputPageRoutingModule {}
