import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerInputPage } from './server-input.page';

const routes: Routes = [
  {
    path: '',
    component: ServerInputPage
  },
  {
    path: 'server-confirm',
    loadChildren: () => import('./server-confirm/server-confirm.module').then( m => m.ServerConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerInputPageRoutingModule {}
