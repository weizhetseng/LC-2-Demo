import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerConfirmPage } from './server-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ServerConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerConfirmPageRoutingModule {}
