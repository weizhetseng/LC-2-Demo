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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractPageRoutingModule {}
