import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractPage } from './contract.page';

const routes: Routes = [
  {
    path: '',
    component: ContractPage
  },
  {
    path: 'server',
    loadChildren: () => import('./server/server.module').then( m => m.ServerPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then( m => m.DownloadPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractPageRoutingModule {}
